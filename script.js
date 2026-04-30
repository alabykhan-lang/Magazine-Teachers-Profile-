/* ═══════════════════════════════════════════════════════════
   MAGICEDITOR v2.0 — Way To Success Standard Schools
   Advanced Agentic Magazine Production Pipeline
   Supabase Cloud-First Architecture
═══════════════════════════════════════════════════════════ */

/* CONFIG & CONSTANTS */
const CATEGORIES = {
  'teachers': { label: 'Teacher Profiles', icon: '👩‍🏫', tag: 'Faculty', sub: 'Staff profiles, photos, and roles' },
  'primary5': { label: 'Primary 5 Graduates', icon: '🧒', tag: 'Class of 2026', sub: 'Little ones, big dreams' },
  'jss3': { label: 'JSS3 Graduates', icon: '🎒', tag: 'Class of 2026', sub: 'The intermediate bridge' },
  'ss3': { label: 'SS3 Graduates', icon: '🎓', tag: 'Class of 2026', sub: 'Our senior stars' },
  'speeches': { label: 'Speeches & Addresses', icon: '🎤', tag: 'Editorial', sub: 'Proprietor, Principal, Headboy/girl' },
  'creative': { label: 'Creative Corner', icon: '✍️', tag: 'Arts', sub: 'Poems, stories, jokes, and riddles' },
  'events': { label: 'School Life & Events', icon: '📸', tag: 'Moments', sub: 'Sports, excursions, ceremonies' },
  'academic': { label: 'Academic & Educational', icon: '📚', tag: 'Knowledge', sub: 'School history, awards, achievements' },
  'interviews': { label: 'Interviews', icon: '🎙️', tag: 'Voice', sub: 'Talking to parents, alumni, teachers' },
  'motivational': { label: 'Motivational Articles', icon: '💡', tag: 'Inspiration', sub: 'Words of wisdom for the future' },
  'gallery': { label: 'Photo Gallery', icon: '🖼️', tag: 'Visuals', sub: 'Group photos and candid moments' }
};
const CATEGORY_KEYS = Object.keys(CATEGORIES);
const EDITORIAL_META = {
  'editorial-note': { label: 'Editorial Note', icon: '✎', tag: 'Lead', sub: 'Message from the Editor-in-Chief' },
  'appreciation': { label: 'Appreciation', icon: '📜', tag: 'End', sub: 'Acknowledgements and thanks' }
};

/* STATE */
let subs = [];
let currentAdminCat = 'all';
let currentEditorCat = 'pending';
let magPages = [];
let currentPageIdx = 0;
let labelOverrides = {};
let sectionOrder = [
  { key: 'cover', label: 'Cover Page', visible: true, icon: '📕' },
  { key: 'toc', label: 'Table of Contents', visible: true, icon: '📑' },
  { key: 'editorial-note', label: 'Editorial Note', visible: true, icon: '✎' },
  ...CATEGORY_KEYS.map(k => ({ key: k, label: CATEGORIES[k].label, visible: true, icon: CATEGORIES[k].icon })),
  { key: 'appreciation', label: 'Appreciation', visible: true, icon: '📜' }
];
let lsSettings = {
  teachersPerPage: '9', studentsPerPage: '2', galleryPerPage: '4', speechesPerPage: '1', creativePerPage: '2',
  orientation: 'portrait', pageSize: 'a4', pageNums: 'yes', autoTrim: 'yes',
  color1: '#1a2744', color2: '#7dd4a8', color3: '#8b1a1a', pageBg: '#ffffff', textColor: '#1c1c1e',
  headingFont: "'Playfair Display',serif", bodyFont: "'Crimson Text',serif", fontSize: '11px',
  magTitle: 'The Torch', schoolName: 'Way To Success Standard Schools', edition: '1st Edition', year: '2025/2026', theme: 'Lighting the Path'
};
let aiChatHistory = [];
let aiPendingSuggestion = null;

/* SUPABASE CLIENT */
let supabase = null;
function initSupabase() {
  try {
    const s = loadLsSettings();
    if (s.sbUrl && s.sbKey) {
      supabase = window.supabase.createClient(s.sbUrl, s.sbKey);
      console.log('[MagicEditor] Supabase initialized.');
      return true;
    }
  } catch (e) { console.error('[MagicEditor] Supabase init failed:', e.message); }
  return false;
}

/* STORAGE HELPERS */
function loadAll() { const d = localStorage.getItem('me_subs'); try { return d ? JSON.parse(d) : []; } catch (e) { return []; } }
function saveAll(data) { localStorage.setItem('me_subs', JSON.stringify(data)); }
function loadLsSettings() { const d = localStorage.getItem('me_ls_settings'); try { return d ? { ...lsSettings, ...JSON.parse(d) } : lsSettings; } catch (e) { return lsSettings; } }
function saveLsSettingsToStorage(s) { localStorage.setItem('me_ls_settings', JSON.stringify(s)); }

/* CLOUD SYNC ENGINE — Promise.allSettled version for robustness */
async function initCloudSync() {
  initSupabase();
  if (!supabase) return;
  showSync('live', 'Syncing...');
  
  // Define sync tasks
  const tasks = [
    { name: 'settings', fn: () => dbFetchSettings('ls_settings') },
    { name: 'section_order', fn: () => dbFetchSettings('section_order') },
    { name: 'labels', fn: () => dbFetchSettings('labels') },
    { name: 'submissions', fn: () => dbFetchSubmissions() }
  ];

  const results = await Promise.allSettled(tasks.map(t => t.fn()));
  
  results.forEach((res, i) => {
    const task = tasks[i];
    if (res.status === 'fulfilled' && res.value) {
      if (task.name === 'settings') { lsSettings = { ...lsSettings, ...res.value }; saveLsSettingsToStorage(lsSettings); }
      if (task.name === 'section_order') { sectionOrder = res.value; }
      if (task.name === 'labels') { labelOverrides = res.value; }
      if (task.name === 'submissions') { saveAll(res.value); subs = res.value; }
    } else if (res.status === 'rejected') {
      console.warn(`[SYNC] ${task.name} failed:`, res.reason);
    }
  });

  showSync('ok', 'Cloud Synced');
}

/* DB OPERATIONS */
async function dbFetchSettings(key) {
  const { data, error } = await supabase.from('mag_config').select('value').eq('key', key).single();
  if (error) return null;
  return data.value;
}
async function dbSaveSettings(key, val) {
  if (!supabase) return;
  const { error } = await supabase.from('mag_config').upsert({ key, value: val, updated_at: new Date().toISOString() }, { onConflict: 'key' });
  if (error) console.error('[DB] Settings save failed:', error.message);
}
async function dbFetchSubmissions() {
  const { data, error } = await supabase.from('mag_submissions').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data.map(d => ({ ...d.content, id: d.id, ts: new Date(d.created_at).toLocaleString() }));
}
async function dbSaveSubmission(sub) {
  if (!supabase) return;
  const { error } = await supabase.from('mag_submissions').upsert({ id: sub.id, content: sub, category: sub.category, status: sub.status, created_at: sub.created_at || new Date().toISOString() });
  if (error) console.error('[DB] Submission save failed:', error.message);
}

/* UI UTILS */
function show(id) { document.querySelectorAll('.view').forEach(v => v.classList.remove('active')); document.getElementById(id).classList.add('active'); window.scrollTo(0, 0); }
function getLabel(key, def) { return labelOverrides[key] || def; }
function showSync(state, msg) {
  const bar = document.getElementById('syncBar'); const dot = document.getElementById('syncDot'); const txt = document.getElementById('syncMsg');
  if (!bar || !dot || !txt) return;
  dot.className = 'sync-dot ' + state; txt.textContent = msg; bar.classList.add('visible');
  if (state === 'ok') setTimeout(() => bar.classList.remove('visible'), 3000);
}

/* LANDING */
function renderLandingCards() {
  const grid = document.getElementById('formGrid'); if (!grid) return;
  grid.innerHTML = CATEGORY_KEYS.map(k => {
    const c = CATEGORIES[k];
    const label = getLabel('cat_label_' + k, c.label);
    const sub = getLabel('cat_sub_' + k, c.sub);
    const stripe = k === 'teachers' ? 'gold' : ['primary5', 'jss3', 'ss3'].includes(k) ? 'green' : ['creative', 'motivational'].includes(k) ? 'purple' : 'blue';
    return `<div class="form-card" onclick="openForm('${k}')"><div class="form-card-stripe stripe-${stripe}"></div><span class="form-card-icon">${c.icon}</span><h3>${esc(label)}</h3><p>${esc(sub)}</p></div>`;
  }).join('');
}

/* FORMS ENGINE */
function openForm(key) {
  const c = CATEGORIES[key]; if (!c) return;
  document.getElementById('formTag').textContent = c.tag;
  document.getElementById('formTitle').textContent = getLabel('cat_label_' + key, c.label);
  document.getElementById('formSubtitle').textContent = getLabel('cat_sub_' + key, c.sub);
  renderFormFields(key);
  show('viewForm');
}
function goLanding() { show('viewLanding'); }

/* Dynamic Field System */
const DEFAULT_FIELDS = {
  'teachers': [
    { key: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Dr. / Mr. / Mrs. ...' },
    { key: 'role', label: 'Position / Dept', type: 'text', required: true, placeholder: 'e.g. HOD Sciences' },
    { key: 'photo', label: 'Profile Photo', type: 'photo', required: true },
    { key: 'quote', label: 'Personal Quote', type: 'textarea', placeholder: 'Words you live by...' },
    { key: 'message', label: 'Message to Students', type: 'textarea', required: true, placeholder: 'Your advice to graduates...' }
  ],
  'ss3': [
    { key: 'name', label: 'Full Name', type: 'text', required: true },
    { key: 'photo', label: 'Graduation Photo', type: 'photo', required: true },
    { key: 'ambition', label: 'Future Ambition', type: 'text', required: true },
    { key: 'extra', label: 'Clubs & Roles', type: 'text', placeholder: 'e.g. Jet Club, Head Boy' },
    { key: 'legacy', label: 'Final Words / Legacy', type: 'textarea', required: true, placeholder: 'What will you be remembered for?' }
  ],
  'creative': [
    { key: 'title', label: 'Title of Work', type: 'text', required: true },
    { key: 'author', label: 'Writer Name & Class', type: 'text', required: true },
    { key: 'type', label: 'Piece Type', type: 'select', options: ['Poem', 'Short Story', 'Joke', 'Riddle', 'Art Work'] },
    { key: 'content', label: 'Content Body', type: 'textarea', required: true, class: 'long' }
  ],
  'gallery': [
    { key: 'title', label: 'Event / Group Name', type: 'text', required: true },
    { key: 'photos', label: 'Upload Photos (Up to 8)', type: 'photos', required: true }
  ]
};

function renderFormFields(cat) {
  const container = document.getElementById('formContainer');
  const fields = localStorage.getItem('me_form_config_' + cat) ? JSON.parse(localStorage.getItem('me_form_config_' + cat)) : (DEFAULT_FIELDS[cat] || DEFAULT_FIELDS['creative']);
  
  container.innerHTML = `<div class="f-card"><div class="f-card-title">Submission Details</div>${fields.map(f => renderField(f)).join('')}</div><button class="submit-btn" onclick="submitForm('${cat}')">Submit to Cloud</button>`;
}

function renderField(f) {
  const required = f.required ? '<span class="req">*</span>' : '<span class="opt">(optional)</span>';
  if (f.type === 'text') return `<div class="field" data-key="${f.key}"><label>${f.label}${required}</label><input type="text" placeholder="${f.placeholder || ''}" ${f.required ? 'required' : ''}/><div class="field-err">This field is required</div></div>`;
  if (f.type === 'textarea') return `<div class="field" data-key="${f.key}"><label>${f.label}${required}</label><textarea class="${f.class || ''}" placeholder="${f.placeholder || ''}" ${f.required ? 'required' : ''}></textarea><div class="field-err">This field is required</div></div>`;
  if (f.type === 'select') return `<div class="field" data-key="${f.key}"><label>${f.label}${required}</label><select>${f.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select></div>`;
  if (f.type === 'photo') return `<div class="field" data-key="${f.key}"><label>${f.label}${required}</label><div class="photo-drop" onclick="this.querySelector('input').click()"><input type="file" accept="image/*" onchange="handlePhoto(this)"/><div class="photo-drop-ui"><span class="photo-drop-icon">👤</span><h3>Tap to upload photo</h3><p>PNG, JPG up to 5MB</p></div><div class="photo-preview-wrap"><img src=""/><div class="photo-filename"></div><button class="photo-change" onclick="event.stopPropagation();resetPhoto(this)">Change Photo</button></div></div><div class="photo-err-msg">Photo is required</div></div>`;
  if (f.type === 'photos') return `<div class="field" data-key="${f.key}"><label>${f.label}${required}</label><div class="photo-drop" onclick="this.querySelector('input').click()"><input type="file" accept="image/*" multiple onchange="handlePhotos(this)"/><div class="photo-drop-ui"><span class="photo-drop-icon">🖼️</span><h3>Tap to upload multiple</h3><p>Select up to 8 photos</p></div><div class="multi-photo-grid"></div><div class="multi-photo-count">0 / 8 photos</div></div><div class="photo-err-msg">At least one photo is required</div></div>`;
  return '';
}

/* FORM SUBMISSION */
async function submitForm(cat) {
  const fields = document.querySelectorAll('#formContainer .field');
  const data = {};
  let valid = true;

  fields.forEach(f => {
    const key = f.dataset.key;
    const input = f.querySelector('input, textarea, select');
    const val = input ? input.value : '';
    if (f.querySelector('input[type=file]')) {
      const photo = f.dataset.photoData;
      const photos = f.dataset.photosData ? JSON.parse(f.dataset.photosData) : null;
      if (f.querySelector('input[multiple]')) {
        if (!photos || !photos.length) { f.classList.add('has-error'); valid = false; }
        else { f.classList.remove('has-error'); data[key] = { label: f.querySelector('label').textContent.replace('*', '').trim(), value: `${photos.length} photos`, type: 'photos' }; }
      } else {
        if (f.querySelector('input').required && !photo) { f.classList.add('has-error'); valid = false; }
        else { f.classList.remove('has-error'); data[key] = { label: f.querySelector('label').textContent.replace('*', '').trim(), value: 'Photo uploaded', type: 'photo' }; }
      }
    } else {
      if (input.required && !val.trim()) { f.classList.add('has-error'); valid = false; }
      else { f.classList.remove('has-error'); data[key] = { label: f.querySelector('label').textContent.replace('*', '').trim(), value: val }; }
    }
  });

  if (!valid) return;

  const sub = {
    id: 'sub_' + Date.now(),
    category: cat,
    status: 'pending',
    ts: new Date().toLocaleString(),
    data: data,
    photoData: document.querySelector('[data-photo-data]')?.dataset.photoData,
    photos: document.querySelector('[data-photos-data]') ? JSON.parse(document.querySelector('[data-photos-data]').dataset.photosData) : []
  };

  document.getElementById('formContainer').style.display = 'none';
  const sw = document.getElementById('successWrap');
  const su = document.getElementById('successUploading');
  const sd = document.getElementById('successDone');
  sw.style.display = 'block'; su.style.display = 'block'; sd.style.display = 'none';

  // Progress animation
  const bar = document.getElementById('uploadProgressBar');
  const txt = document.getElementById('uploadProgressText');
  bar.style.width = '30%'; txt.textContent = 'Compressing media...';
  await new Promise(r => setTimeout(r, 800));
  bar.style.width = '70%'; txt.textContent = 'Syncing to cloud...';
  
  try {
    await dbSaveSubmission(sub);
    bar.style.width = '100%'; txt.textContent = 'Done!';
    await new Promise(r => setTimeout(r, 400));
    su.style.display = 'none'; sd.style.display = 'block';
    subs.unshift(sub); saveAll(subs);
  } catch (e) {
    alert('Upload failed: ' + e.message);
    document.getElementById('formContainer').style.display = 'block';
    sw.style.display = 'none';
  }
}

/* PHOTO HANDLING */
function handlePhoto(input) {
  const file = input.files[0]; if (!file) return;
  const wrap = input.closest('.photo-drop');
  const ui = wrap.querySelector('.photo-drop-ui');
  const previewWrap = wrap.querySelector('.photo-preview-wrap');
  const reader = new FileReader();
  reader.onload = e => {
    wrap.dataset.photoData = e.target.result;
    previewWrap.querySelector('img').src = e.target.result;
    previewWrap.querySelector('.photo-filename').textContent = file.name;
    ui.style.display = 'none'; previewWrap.style.display = 'flex';
    wrap.classList.add('uploaded');
  };
  reader.readAsDataURL(file);
}
function resetPhoto(btn) {
  const wrap = btn.closest('.photo-drop');
  wrap.dataset.photoData = '';
  wrap.querySelector('.photo-drop-ui').style.display = 'block';
  wrap.querySelector('.photo-preview-wrap').style.display = 'none';
  wrap.classList.remove('uploaded');
  wrap.querySelector('input').value = '';
}
function handlePhotos(input) {
  const files = Array.from(input.files).slice(0, 8); if (!files.length) return;
  const wrap = input.closest('.photo-drop');
  const grid = wrap.querySelector('.multi-photo-grid');
  const count = wrap.querySelector('.multi-photo-count');
  const photos = wrap.dataset.photosData ? JSON.parse(wrap.dataset.photosData) : [];
  
  files.forEach(file => {
    if (photos.length >= 8) return;
    const reader = new FileReader();
    reader.onload = e => {
      photos.push({ name: file.name, data: e.target.result });
      wrap.dataset.photosData = JSON.stringify(photos);
      renderPhotosGrid(wrap, grid, count, photos);
    };
    reader.readAsDataURL(file);
  });
}
function renderPhotosGrid(wrap, grid, count, photos) {
  grid.innerHTML = photos.map((p, i) => `<div class="multi-photo-thumb"><img src="${p.data}"/><button class="multi-photo-remove" onclick="event.stopPropagation();removePhoto(${i}, this)">×</button></div>`).join('');
  count.textContent = `${photos.length} / 8 photos`;
  if (photos.length >= 8) count.classList.add('full'); else count.classList.remove('full');
}
function removePhoto(idx, btn) {
  const wrap = btn.closest('.photo-drop');
  const photos = JSON.parse(wrap.dataset.photosData);
  photos.splice(idx, 1);
  wrap.dataset.photosData = JSON.stringify(photos);
  renderPhotosGrid(wrap, wrap.querySelector('.multi-photo-grid'), wrap.querySelector('.multi-photo-count'), photos);
}

/* ADMIN PANEL */
function openPIN(mode) {
  const overlay = document.getElementById('pinOverlay');
  const badge = document.getElementById('pinModeBadge');
  const title = document.getElementById('pinTitle');
  overlay.dataset.mode = mode;
  overlay.className = 'pin-overlay active ' + mode;
  badge.textContent = mode === 'unified' ? 'System Access' : mode.toUpperCase();
  title.textContent = mode === 'admin' ? 'Production Admin' : mode === 'editor' ? 'Editor-in-Chief' : 'Enter Access PIN';
  pinCode = ''; updatePinDots();
}
function closePIN() { document.getElementById('pinOverlay').classList.remove('active'); }
let pinCode = '';
function pinKey(k) {
  if (pinCode.length >= 4) return;
  pinCode += k; updatePinDots();
  if (pinCode.length === 4) {
    const mode = document.getElementById('pinOverlay').dataset.mode;
    const s = loadLsSettings();
    const adminPin = s.adminPin || '1234';
    const editorPin = s.editorPin || '5678';
    
    if (mode === 'admin' && pinCode === adminPin) { closePIN(); renderAdmin(); show('viewAdmin'); }
    else if (mode === 'editor' && pinCode === editorPin) { closePIN(); renderEditor(); show('viewEditor'); }
    else if (mode === 'unified') {
      if (pinCode === adminPin) { closePIN(); renderAdmin(); show('viewAdmin'); }
      else if (pinCode === editorPin) { closePIN(); renderEditor(); show('viewEditor'); }
      else pinError();
    }
    else pinError();
  }
}
function pinDel() { pinCode = pinCode.slice(0, -1); updatePinDots(); }
function updatePinDots() { for (let i = 0; i < 4; i++) { const d = document.getElementById('pd' + i); if (pinCode.length > i) d.classList.add('filled'); else d.classList.remove('filled'); d.classList.remove('error'); } }
function pinError() { pinCode = ''; updatePinDots(); for (let i = 0; i < 4; i++) document.getElementById('pd' + i).classList.add('error'); document.getElementById('pinErr').textContent = 'Incorrect PIN. Please try again.'; setTimeout(() => { document.getElementById('pinErr').textContent = ''; updatePinDots(); }, 1500); }

/* DASHBOARD RENDER */
function setCategory(cat) { currentAdminCat = cat; document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active')); document.getElementById('tab-' + cat).classList.add('active'); renderAdmin(); }
function renderAdmin() {
  const list = document.getElementById('adminSubList'); if (!list) return;
  const filtered = currentAdminCat === 'all' ? subs : subs.filter(s => s.category === currentAdminCat);
  const statusFilter = document.getElementById('filterStatus').value;
  const final = statusFilter === 'all' ? filtered : filtered.filter(s => s.status === statusFilter);
  
  // Stats
  document.getElementById('statTotal').textContent = subs.length;
  document.getElementById('statPending').textContent = subs.filter(s => s.status === 'pending').length;
  document.getElementById('statApproved').textContent = subs.filter(s => s.status === 'approved').length;
  document.getElementById('statFinalized').textContent = subs.filter(s => s.status === 'finalized').length;
  
  CATEGORY_KEYS.forEach(k => { const c = subs.filter(s => s.category === k).length; const el = document.getElementById('count-' + k); if (el) el.textContent = c; });
  document.getElementById('count-all').textContent = subs.length;
  
  if (!final.length) { list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📥</div><h3>No submissions found</h3><p>Try changing the category or filter status.</p></div>`; return; }
  
  list.innerHTML = final.map(s => renderSubCard(s, 'admin')).join('');
}

function renderSubCard(s, mode) {
  const cat = CATEGORIES[s.category] || { icon: '📄', label: s.category };
  const fields = Object.entries(s.data).map(([k, f]) => `<div class="sub-field ${f.value.length > 60 ? 'wide' : ''}"><div class="sub-field-lbl">${esc(f.label)}</div><div class="sub-field-val">${esc(f.value)}</div></div>`).join('');
  const photo = s.photoData ? `<img src="${s.photoData}" class="sub-avatar"/>` : `<div class="sub-avatar-init">${(s.data.name?.value || s.data.title?.value || '?')[0].toUpperCase()}</div>`;
  const isFinalized = s.status === 'finalized';
  
  let actions = '';
  if (mode === 'admin') {
    actions = `<button class="sub-action-btn sub-action-delete" onclick="deleteSub('${s.id}')">Delete</button>`;
    if (s.status === 'approved') actions = `<button class="sub-action-btn sub-action-finalize" onclick="finalizeSub('${s.id}')">Finalize for Print</button>` + actions;
  } else {
    actions = `<button class="sub-action-btn sub-action-send" onclick="approveSub('${s.id}')">Approve</button>
               <button class="sub-action-btn sub-action-delete" onclick="rejectSub('${s.id}')">Reject</button>
               <button class="sub-action-btn" onclick="proofreadSubmission('${s.id}')">✦ AI Proofread</button>`;
  }

  return `<div class="sub-card cat-${s.category}">
    <div class="sub-top">${photo}<div><div class="sub-name">${esc(s.data.name?.value || s.data.title?.value || 'Untitled')}</div><div class="sub-meta"><span class="cat-pill">${cat.icon} ${esc(cat.label)}</span>${esc(s.ts)}</div></div><div style="margin-left:auto;"><span class="status-badge status-${s.status}">${s.status}</span></div></div>
    <div class="sub-fields">${fields}</div>
    ${s.reviewerNote ? `<div class="sub-reviewer-note"><strong>Editor's Note:</strong> ${esc(s.reviewerNote)}</div>` : ''}
    <div id="proof-result-${s.id}" style="display:none;margin-bottom:1rem;"></div>
    <div class="sub-actions">${isFinalized ? '<span style="font-size:12px;color:var(--school-mint3);font-weight:700;">✓ Locked in Layout</span>' : actions}</div>
  </div>`;
}

/* ACTIONS */
async function deleteSub(id) { if (!confirm('Delete this submission permanently?')) return; subs = subs.filter(s => s.id !== id); saveAll(subs); renderAdmin(); if (supabase) await supabase.from('mag_submissions').delete().eq('id', id); }
async function approveSub(id) { updateSubStatus(id, 'approved'); }
async function rejectSub(id) { const note = prompt('Reason for rejection?'); updateSubStatus(id, 'rejected', note); }
async function finalizeSub(id) { updateSubStatus(id, 'finalized'); }

async function updateSubStatus(id, status, note) {
  const sub = subs.find(s => s.id === id); if (!sub) return;
  sub.status = status; if (note) sub.reviewerNote = note;
  saveAll(subs); renderAdmin(); renderEditor();
  if (supabase) await dbSaveSubmission(sub);
}

/* EDITOR VIEW */
function setEditorCategory(cat) { currentEditorCat = cat; document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active')); document.getElementById('etab-' + cat).classList.add('active'); renderEditor(); }
function renderEditor() {
  const list = document.getElementById('editorSubList'); if (!list) return;
  const filtered = currentEditorCat === 'all' ? subs : subs.filter(s => s.status === currentEditorCat);
  
  document.getElementById('ecount-all').textContent = subs.length;
  document.getElementById('ecount-pending').textContent = subs.filter(s => s.status === 'pending').length;
  document.getElementById('ecount-approved').textContent = subs.filter(s => s.status === 'approved').length;
  document.getElementById('ecount-rejected').textContent = subs.filter(s => s.status === 'rejected').length;
  
  if (!filtered.length) { list.innerHTML = `<div class="empty-state"><div class="empty-state-icon">✨</div><h3>Queue is clear</h3><p>All submissions in this category have been processed.</p></div>`; return; }
  
  list.innerHTML = filtered.map(s => renderSubCard(s, 'editor')).join('');
}

/* LAYOUT STUDIO CORE */
function generateMagPreview() {
  const s = lsSettings;
  const approved = subs.filter(sub => sub.status === 'approved' || sub.status === 'finalized');
  magPages = [];
  
  // Section ordering & pagination logic
  sectionOrder.filter(sec => sec.visible).forEach(sec => {
    if (sec.key === 'cover') { magPages.push({ type: 'cover', label: 'Cover Page' }); return; }
    if (sec.key === 'toc') { magPages.push({ type: 'toc', label: 'Table of Contents' }); return; }
    
    const catSubs = approved.filter(sub => sub.category === sec.key);
    if (!catSubs.length && sec.key !== 'editorial-note' && sec.key !== 'appreciation') return;
    
    if (sec.key === 'editorial-note') { magPages.push({ type: 'editorial-note', label: 'Editorial Note' }); return; }
    if (sec.key === 'appreciation') { magPages.push({ type: 'appreciation', label: 'Appreciation' }); return; }

    let perPage = 1;
    if (sec.key === 'teachers') perPage = parseInt(s.teachersPerPage) || 9;
    else if (['primary5', 'jss3', 'ss3'].includes(sec.key)) perPage = parseInt(s.studentsPerPage) || 2;
    else if (sec.key === 'speeches') perPage = parseInt(s.speechesPerPage) || 1;
    else if (sec.key === 'gallery') perPage = parseInt(s.galleryPerPage) || 4;
    else if (sec.key === 'creative') perPage = parseInt(s.creativePerPage) || 2;

    for (let i = 0; i < catSubs.length; i += perPage) {
      magPages.push({ type: 'content', sec, items: catSubs.slice(i, i + perPage), isFirst: i === 0 });
    }
  });
  
  currentPageIdx = 0;
  renderCurrentPage();
  updatePageNavUI();
  lsTab('preview');
}

function getPageDimensions() {
  const s = lsSettings;
  if (s.pageSize === 'a4') return s.orientation === 'portrait' ? { w: 794, h: 1123 } : { w: 1123, h: 794 };
  if (s.pageSize === 'a5') return s.orientation === 'portrait' ? { w: 559, h: 794 } : { w: 794, h: 559 };
  if (s.pageSize === 'letter') return s.orientation === 'portrait' ? { w: 816, h: 1056 } : { w: 1056, h: 816 };
  return { w: parseInt(s.customW) || 800, h: parseInt(s.customH) || 1100 };
}

function renderCurrentPage() {
  const canvas = document.getElementById('magCanvas'); if (!canvas) return;
  const page = magPages[currentPageIdx]; if (!page) return;
  const s = lsSettings;
  const { w, h } = getPageDimensions();
  const scale = Math.min((canvas.clientWidth - 40) / w, 1);
  const c1 = s.color1, c2 = s.color2, c3 = s.color3, pageBg = s.pageBg, textColor = s.textColor;
  const hFont = s.headingFont, bFont = s.bodyFont, bSize = s.fontSize;
  
  let inner = '';
  const foot = `<div style="position:absolute;bottom:30px;left:50px;right:50px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid ${textColor}33;padding-top:10px;font-family:${bFont};font-size:10px;color:${textColor}aa;text-transform:uppercase;letter-spacing:1px;"><span>${esc(s.magTitle)} — ${esc(s.edition)}</span><span>${currentPageIdx + 1}</span></div>`;

  if (page.type === 'cover') {
    inner = `<div style="background:${c1};height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:4rem;text-align:center;position:relative;overflow:hidden;">
      <div style="position:absolute;top:0;left:0;right:0;height:15px;background:${c2};"></div>
      <div style="font-size:14px;letter-spacing:5px;text-transform:uppercase;margin-bottom:2rem;color:${c2};">${esc(s.schoolName)}</div>
      <h1 style="font-size:72px;font-family:${hFont};margin-bottom:1rem;line-height:1;">${esc(s.magTitle)}</h1>
      <div style="width:80px;height:4px;background:${c2};margin-bottom:2rem;"></div>
      <p style="font-size:18px;letter-spacing:2px;text-transform:uppercase;margin-bottom:auto;">${esc(s.edition)} · ${esc(s.year)}</p>
      <div style="font-style:italic;font-family:${hFont};font-size:24px;color:${c2};">${esc(s.theme)}</div>
      <div style="position:absolute;bottom:0;left:0;right:0;height:40px;background:${c2};"></div>
    </div>`;
  } else if (page.type === 'toc') {
    const items = buildTOCItems();
    inner = `<div style="background:${pageBg};height:100%;padding:4rem;display:flex;flex-direction:column;">
      <h2 style="font-family:${hFont};font-size:32px;color:${c1};margin-bottom:3rem;border-bottom:3px solid ${c2};padding-bottom:10px;display:inline-block;">Table of Contents</h2>
      <div style="flex:1;">${items.map(item => `<div style="display:flex;align-items:center;margin-bottom:1rem;gap:10px;"><span style="font-family:${hFont};font-weight:700;color:${c2};width:30px;">${item.num}</span><span style="font-size:16px;color:${textColor};flex:1;">${esc(item.name)}</span><span style="flex:1;border-bottom:1px dotted ${textColor}44;height:14px;"></span><span style="font-weight:700;color:${c1};">p. ${item.page}</span></div>`).join('')}</div>${foot}</div>`;
  } else if (page.type === 'editorial-note' || page.type === 'appreciation') {
    const isEd = page.type === 'editorial-note';
    const sub = subs.find(x => x.category === (isEd ? 'editorial-note' : 'appreciation')) || { data: { title: { value: isEd ? 'Editor\'s Note' : 'Appreciation' }, content: { value: 'Content pending...' } } };
    inner = `<div style="background:${pageBg};height:100%;padding:4rem;display:flex;flex-direction:column;">
      <h2 style="font-family:${hFont};font-size:28px;color:${c1};margin-bottom:2rem;text-align:center;">${esc(sub.data.title?.value || sub.data.name?.value)}</h2>
      <div style="font-family:${bFont};font-size:14px;color:${textColor};line-height:1.8;white-space:pre-line;flex:1;column-count:2;column-gap:3rem;">${esc(sub.data.content?.value || sub.data.message?.value || sub.data.apprBody?.value)}</div>${foot}</div>`;
  } else if (page.type === 'content') {
    const secLabel = getLabel('section_' + page.sec.key, page.sec.label);
    let contentHtml = '';
    const items = page.items || [];
    
    if (page.sec.key === 'teachers') {
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;">${items.map(it => `
        <div style="text-align:center;">
          <div style="width:100%;aspect-ratio:1/1;border-radius:10px;overflow:hidden;margin-bottom:10px;border:3px solid ${c2};">
            ${it.photoData ? `<img src="${it.photoData}" style="width:100%;height:100%;object-fit:cover;"/>` : `<div style="width:100%;height:100%;background:${c1};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">PHOTO</div>`}
          </div>
          <div style="font-family:${hFont};font-size:12px;font-weight:700;color:${c1};">${esc(it.data.name?.value)}</div>
          <div style="font-size:10px;color:${c2};text-transform:uppercase;font-weight:700;margin-top:2px;">${esc(it.data.role?.value)}</div>
        </div>`).join('')}</div>`;
    } else if (['primary5', 'jss3', 'ss3'].includes(page.sec.key)) {
      contentHtml = `<div style="display:flex;flex-direction:column;gap:2rem;">${items.map(it => `
        <div style="display:flex;gap:1.5rem;align-items:flex-start;">
          <div style="width:150px;aspect-ratio:4/5;border-radius:10px;overflow:hidden;border:4px solid ${c2};flex-shrink:0;">
            ${it.photoData ? `<img src="${it.photoData}" style="width:100%;height:100%;object-fit:cover;"/>` : `<div style="width:100%;height:100%;background:${c1};"></div>`}
          </div>
          <div style="flex:1;">
            <h3 style="font-family:${hFont};font-size:18px;color:${c1};margin-bottom:6px;border-bottom:2px solid ${c2};display:inline-block;">${esc(it.data.name?.value)}</h3>
            <div style="font-size:11px;color:${c2};font-weight:700;margin-bottom:10px;text-transform:uppercase;">Ambition: ${esc(it.data.ambition?.value)}</div>
            <p style="font-family:${bFont};font-size:12px;color:${textColor};line-height:1.6;font-style:italic;">"${esc(it.data.legacy?.value)}"</p>
          </div>
        </div>`).join('')}</div>`;
    } else if (page.sec.key === 'gallery') {
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;">${items.map(it => {
        const photos = it.photos || [];
        return photos.slice(0, 2).map(p => `<div style="width:100%;aspect-ratio:3/2;border-radius:8px;overflow:hidden;border:2px solid ${c2};"><img src="${p.data}" style="width:100%;height:100%;object-fit:cover;"/></div>`).join('');
      }).join('')}</div>`;
    } else {
      contentHtml = items.map(it => {
        const name = it.data.name?.value || it.data.author?.value || it.data.speakerName?.value || it.data.title?.value || '';
        const subtitle = it.data.role?.value || it.data.type?.value || it.data.eventName?.value || '';
        const mainText = it.data.message?.value || it.data.content?.value || it.data.legacy?.value || '';
        const pullQuote = it.data.quote?.value || '';
        const allFields = Object.entries(it.data).filter(([k]) => !['name', 'role', 'photo', 'photos', 'message', 'content', 'legacy', 'quote', 'author', 'title', 'type', 'ambition'].includes(k)).map(([, f]) => `<div style="margin-bottom:4px;"><span style="font-weight:700;font-size:10px;color:${c2};text-transform:uppercase;">${esc(f.label)}:</span> <span style="font-size:11px;color:${textColor};">${esc(f.value)}</span></div>`).join('');

        return `<div class="mag-item" style="margin-bottom:1.5rem;page-break-inside:avoid;">
          ${name ? `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <div style="width:24px;height:2px;background:${c2};"></div>
            <div>
              <div class="mag-item-name" style="font-size:13px;font-weight:700;color:${c1};font-family:${hFont};">${esc(name)}</div>
              ${subtitle ? `<div class="mag-item-subtitle" style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:${c2};font-weight:700;">${esc(subtitle)}</div>` : ''}
            </div>
          </div>` : ''}
          ${pullQuote ? `<div class="mag-item-quote" style="border-left:4px solid ${c2};padding:8px 12px;margin:8px 0;background:${c2}22;border-radius:0 8px 8px 0;">
            <p style="font-family:${hFont};font-size:12px;color:${c1};font-style:italic;">${esc(pullQuote)}</p>
          </div>` : ''}
          ${mainText ? `<p class="mag-item-body" style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;margin-bottom:10px;">${esc(mainText)}</p>` : ''}
          <div class="mag-item-fields">${allFields}</div>
        </div>`;
      }).join('');
    }

    inner = `<div style="background:${pageBg};height:100%;display:flex;flex-direction:column;">${page.isFirst ? `<div style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.25rem 2rem;min-height:90px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:5px;">Section</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(secLabel)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div>` : `<div style="background:${c1};padding:6px 2rem;"><span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:${c2};font-weight:700;">${esc(secLabel)} (continued)</span></div>`}<div style="padding:1rem 1.5rem;flex:1;overflow:hidden;">${contentHtml}</div>${s.pageNums !== 'no' ? foot : ''}</div>`;
  }
  canvas.innerHTML = `<div class="mag-page" data-category="${esc(page.sec?.key || page.type)}" style="width:${w}px;height:${h}px;transform:scale(${scale});transform-origin:top center;"><div class="mag-page-inner">${inner}</div></div>`;
  document.getElementById('previewPageTitle').textContent = `Page ${currentPageIdx + 1} — ${page.sec?.label || page.type}`;
}

function prevPage() { if (currentPageIdx > 0) { currentPageIdx--; renderCurrentPage(); updatePageNavUI(); } }
function nextPage() { if (currentPageIdx < magPages.length - 1) { currentPageIdx++; renderCurrentPage(); updatePageNavUI(); } }
function updatePageNavUI() { const total = magPages.length || 1; document.getElementById('pageNavInfo').textContent = `${currentPageIdx + 1} / ${total}`; document.getElementById('btnPrevPage').disabled = currentPageIdx === 0; document.getElementById('btnNextPage').disabled = currentPageIdx >= magPages.length - 1; }

/* TOC */
function buildTOCItems() {
  const items = []; let pageNum = 1; const approved = subs.filter(s => s.status === 'approved' || s.status === 'finalized');
  const s = lsSettings;
  sectionOrder.filter(sec => sec.visible).forEach(sec => {
    if (sec.key === 'cover') { pageNum++; return; }
    if (sec.key === 'toc') { pageNum++; return; }
    const catSubs = approved.filter(sub => sub.category === sec.key);
    if (sec.key === 'editorial-note' || sec.key === 'appreciation') { if (catSubs.length || approved.find(sub => sub.category === sec.key)) { items.push({ num: items.length + 1, name: getLabel('section_' + sec.key, sec.label), page: pageNum }); pageNum++; } return; }
    if (!catSubs.length) return;
    items.push({ num: items.length + 1, name: getLabel('section_' + sec.key, sec.label), page: pageNum });
    let pp = 1;
    if (sec.key === 'teachers') pp = parseInt(s.teachersPerPage) || 9;
    else if (['primary5', 'jss3', 'ss3'].includes(sec.key)) pp = parseInt(s.studentsPerPage) || 2;
    else if (sec.key === 'speeches') pp = parseInt(s.speechesPerPage) || 1;
    else if (sec.key === 'gallery') pp = parseInt(s.galleryPerPage) || 4;
    else if (sec.key === 'creative') pp = parseInt(s.creativePerPage) || 2;
    pageNum += Math.ceil(catSubs.length / pp);
  });
  return items;
}
function renderTOC() {
  const c = document.getElementById('tocPreview'); if (!c) return;
  const items = buildTOCItems(); if (!items.length) { c.innerHTML = '<p style="color:var(--ink3);font-size:13px;">No approved content yet. Generate a preview first.</p>'; return; }
  const s = lsSettings; const c1 = s.color1 || '#1a2744', c2 = s.color2 || '#7dd4a8';
  c.innerHTML = `<div style="max-width:500px;">${items.map(item => `<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px dashed #e0e0d8;"><span style="font-size:12px;font-weight:700;color:${c2};width:24px;">${item.num}</span><span style="font-size:14px;color:var(--ink);flex:1;">${esc(item.name)}</span><span style="flex:1;border-bottom:1px dotted #ccc;height:14px;margin:0 6px;"></span><span style="font-size:12px;color:var(--ink3);font-weight:700;">p. ${item.page}</span></div>`).join('')}</div>`;
}

/* PRINT */
function openPrintView() {
  if (!magPages.length) { alert('Please click "Generate Preview" first to build your magazine pages.'); return; }
  const s = lsSettings; const ps = s.pageSize === 'a4' ? 'A4' : s.pageSize === 'a5' ? 'A5' : 'letter';
  const orient = s.orientation || 'portrait'; const { w, h } = getPageDimensions();
  const savedIdx = currentPageIdx; let allPagesHtml = '';
  for (let i = 0; i < magPages.length; i++) {
    currentPageIdx = i; renderCurrentPage(); const pageEl = document.getElementById('magCanvas');
    const inner = pageEl.innerHTML.replace(/transform:scale\([^)]+\);?/g, '').replace(/transform-origin:[^;]+;?/g, '');
    allPagesHtml += `<div class="mag-sheet">${inner}</div>`;
  }
  currentPageIdx = savedIdx; renderCurrentPage(); updatePageNavUI();
  const win = window.open('', '_blank', 'width=960,height=800'); if (!win) { alert('Please allow popups for this site.'); return; }
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>${esc(s.magTitle)} — Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"/>
  <style>*{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}
    body{background:#888;font-family:'Lato',sans-serif;}@media print{body{background:#fff;}@page{size:${ps} ${orient};margin:0;}.no-print{display:none!important;}.mag-sheet{box-shadow:none!important;margin:0!important;page-break-after:always;}.mag-sheet:last-child{page-break-after:auto;}*{-webkit-print-color-adjust:exact!important;}}
    .no-print{padding:16px 24px;text-align:center;background:#1a2744;color:#fff;position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;}.no-print h2{font-size:16px;margin:0;}.no-print button{background:#7dd4a8;color:#1a2744;border:none;padding:10px 26px;border-radius:999px;font-size:14px;font-weight:700;cursor:pointer;}.no-print p{font-size:11px;color:#aaa;margin:0;}
    .mag-sheet{width:${w}px;height:${h}px;margin:24px auto;box-shadow:0 4px 24px rgba(0,0,0,.35);overflow:hidden;background:#fff;position:relative;}.mag-page{width:${w}px!important;height:${h}px!important;}.mag-page-inner{width:100%;height:100%;overflow:hidden;}img{max-width:100%;}${(document.getElementById('ai-custom-css')?.textContent || '').replace(/</g, '\\u003c')}</style></head>
  <body><div class="no-print"><h2>🖨 ${esc(s.magTitle)} — ${magPages.length} pages</h2><button onclick="window.print()">Print / Save as PDF</button><p>Paper: ${ps} · ${orient} · Margins: None · <strong>Enable Background graphics ✓</strong></p></div><div id="printPages">${allPagesHtml}</div></body></html>`);
  win.document.close();
}

/* AI PROOFREADER */
function extractAllText(s) { const longFields = []; Object.entries(s.data || {}).forEach(([k, fc]) => { if (!fc || !fc.value) return; const v = String(fc.value); if (v.length > 10) longFields.push({ label: fc.label, key: k, value: v }); }); return longFields; }
async function proofreadSubmission(subId) {
  const allSubs = loadAll(); const s = allSubs.find(x => String(x.id) === String(subId)); if (!s) return;
  const panel = document.getElementById('proof-result-' + subId); if (!panel) return;
  const fields = extractAllText(s); const combinedText = fields.map(f => `[${f.label}]\n${f.value}`).join('\n\n---\n\n');
  if (!combinedText.trim()) { panel.innerHTML = '<p style="color:var(--ink3);font-size:13px;">No text content found.</p>'; panel.style.display = 'block'; return; }
  await proofreadWithAI(combinedText, panel, subId, fields);
}
async function proofreadWithAI(text, panelEl, subId, fields) {
  const s = loadLsSettings(); const apiKey = s.apiKey;
  if (!apiKey) { panelEl.innerHTML = `<div class="proofread-panel"><p style="color:var(--red);font-size:13px;"><strong>No API key.</strong></p></div>`; panelEl.style.display = 'block'; return; }
  panelEl.innerHTML = `<div class="proofread-panel"><p class="proofread-loading">Reading all fields...</p></div>`; panelEl.style.display = 'block';
  const models = ['google/gemini-2.0-flash-001', 'anthropic/claude-3-haiku'];
  let result = '';
  for (const model of models) {
    try {
      const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey, 'HTTP-Referer': 'https://magazine-teachers-profile.vercel.app' }, body: JSON.stringify({ model, max_tokens: 2500, messages: [{ role: 'system', content: 'You are a professional editorial proofreader. Review ALL text sections. List errors and fixes.' }, { role: 'user', content: `Proofread this submission:\n\n${text.substring(0, 4000)}` }] }) });
      if (resp.ok) { const data = await resp.json(); result = data.choices?.[0]?.message?.content || ''; if (result) break; }
    } catch (e) { }
  }
  if (!result) result = 'No response from AI.';
  let editBoxes = `<div style="margin-top:16px;">${fields.map(f => `<div style="margin-bottom:12px;"><div style="font-size:10px;font-weight:700;">${esc(f.label)}</div><textarea id="edit-${subId}-${f.key}" style="width:100%;min-height:80px;border-radius:8px;">${esc(f.value)}</textarea></div>`).join('')}<button onclick="saveProofreadEdits('${subId}')" class="btn btn-primary">💾 Save Corrections</button><span id="saveProofStatus-${subId}"></span></div>`;
  panelEl.innerHTML = `<div class="proofread-panel"><p class="proofread-panel-title">✦ AI Proofreading</p><div class="proofread-result">${esc(result)}</div>${editBoxes}</div>`;
}
async function saveProofreadEdits(subId) {
  const allSubs = loadAll(); const sub = allSubs.find(x => String(x.id) === String(subId)); if (!sub) return;
  Object.keys(sub.data).forEach(k => { const ta = document.getElementById(`edit-${subId}-${k}`); if (ta && sub.data[k]) sub.data[k].value = ta.value; });
  sub.ts = new Date().toLocaleString(); saveAll(allSubs); await dbSaveSubmission(sub);
  if (document.getElementById('viewEditor')?.classList.contains('active')) renderEditor();
  if (document.getElementById('viewAdmin')?.classList.contains('active')) renderAdmin();
}

/* LAYOUT AI — Conversational */
async function runLayoutAI() {
  const queryEl = document.getElementById('aiAssistQuery'); const resultEl = document.getElementById('aiAssistResult'); if (!queryEl || !resultEl) return;
  const query = queryEl.value.trim(); if (!query) return; queryEl.value = '';
  const s = loadLsSettings(); const apiKey = s.apiKey; if (!apiKey) { alert('No API key.'); return; }
  addAIChatMessage('user', query);
  const thinkingIdx = aiChatHistory.length; aiChatHistory.push({ role: 'assistant', text: '', html: '<em>Thinking...</em>' }); renderAIChatHistory();
  try {
    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey }, body: JSON.stringify({ model: 'google/gemini-2.0-flash-001', max_tokens: 2000, messages: [{ role: 'system', content: 'You are a professional magazine designer AI. You implementation changes via [FORMAT:customCSS:...] and settings JSON.' }, { role: 'user', content: query }] }) });
    if (resp.ok) { const data = await resp.json(); const result = data.choices[0].message.content; aiChatHistory.splice(thinkingIdx, 1); addAIChatMessage('assistant', result); }
  } catch (e) { aiChatHistory.splice(thinkingIdx, 1); addAIChatMessage('assistant', 'Error: ' + e.message); }
  renderAIChatHistory();
}
function addAIChatMessage(role, text, html) { aiChatHistory.push({ role, text, html, time: new Date().toLocaleTimeString() }); renderAIChatHistory(); }
function renderAIChatHistory() { const box = document.getElementById('aiChatHistory'); if (!box) return; box.innerHTML = aiChatHistory.map(m => `<div style="margin-bottom:10px;text-align:${m.role === 'user' ? 'right' : 'left'};"><div style="display:inline-block;padding:8px 12px;border-radius:12px;background:${m.role === 'user' ? '#1a2744' : '#f0fdf6'};color:${m.role === 'user' ? '#fff' : '#1c1c1e'};font-size:13px;max-width:85%;">${m.html || esc(m.text)}</div></div>`).join(''); box.scrollTop = box.scrollHeight; }

/* UTILS */
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function applyLsColors(s) { document.documentElement.style.setProperty('--school-navy', s.color1); document.documentElement.style.setProperty('--school-mint', s.color2); document.documentElement.style.setProperty('--school-red', s.color3); document.body.style.backgroundColor = s.pageBg; document.body.style.color = s.textColor; }

/* BOOT */
renderLandingCards();
applyLsColors(lsSettings);
setTimeout(async () => {
  const overlay = document.getElementById('bootLoadingOverlay');
  try {
    await Promise.race([initCloudSync(), new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 12000))]);
  } catch (e) { console.warn('[BOOT] Sync failed/timed out'); showSync('err', 'Running offline'); }
  finally {
    renderLandingCards();
    if (overlay) { overlay.style.opacity = '0'; setTimeout(() => { overlay.style.visibility = 'hidden'; overlay.style.display = 'none'; }, 500); }
  }
}, 100);

function handleFooterClick() { if (++footerClicks >= 4) { footerClicks = 0; openPIN('unified'); } setTimeout(() => footerClicks = 0, 1000); }
let footerClicks = 0;
function lsTab(id) { document.querySelectorAll('.ls-tab').forEach(t => t.classList.remove('active')); document.getElementById('lstab-' + id).classList.add('active'); document.querySelectorAll('[id^=lspanel-]').forEach(p => p.style.display = 'none'); document.getElementById('lspanel-' + id).style.display = 'block'; if (id === 'toc') renderTOC(); }
function saveLsSettings() { const s = loadLsSettings(); const fields = ['magTitle', 'schoolName', 'location', 'edition', 'year', 'theme', 'color1', 'color2', 'color3', 'pageBg', 'textColor', 'headingFont', 'bodyFont', 'fontSize', 'pageSize', 'orientation', 'pageNums', 'autoTrim', 'teachersPerPage', 'studentsPerPage', 'galleryPerPage', 'speechesPerPage', 'creativePerPage', 'apiKey']; fields.forEach(f => { const el = document.getElementById('ls-' + f) || document.getElementById('settings' + f.charAt(0).toUpperCase() + f.slice(1)); if (el) s[f] = el.value; }); saveLsSettingsToStorage(s); lsSettings = s; applyLsColors(s); dbSaveSettings('ls_settings', s); alert('Settings saved to cloud.'); }
function adminRefresh() { initCloudSync().then(() => renderAdmin()); }
function editorRefresh() { initCloudSync().then(() => renderEditor()); }
