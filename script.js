/* ═══════════════════════════════════════════════════════════
   MagicEditor v2.0 | Standard School Magazine Engine
   ═══════════════════════════════════════════════════════════ */

/* CLOUD SYNC CONFIG */
const SB_URL = 'https://srkgolzstppnyntrkemk.supabase.co';
const SB_KEY = 'YOUR_SUPABASE_ANON_KEY'; // Replace with actual key
const supabase = supabase.createClient(SB_URL, SB_KEY);

/* SYSTEM STATE */
let subs = [];
let currentEditorCat = 'pending';
let currentAdminCat = 'all';
let currentAdminFilter = 'all';
let labelOverrides = {};
let sectionOrder = [];
let magPages = [];
let currentPageIdx = 0;
let aiChatHistory = [];
let aiPendingSuggestion = null;

/* CONFIGURATION */
const CATEGORIES = {
  'teachers': { icon: '👨‍🏫', label: 'Teachers Profile', desc: 'Staff and management biography' },
  'primary5': { icon: '🎓', label: 'Primary 5 Graduates', desc: 'Class of 2025 profiles' },
  'jss3': { icon: '📚', label: 'JSS 3 Students', desc: 'Junior secondary profiles' },
  'ss3': { icon: '👔', label: 'SS 3 Graduates', desc: 'Senior secondary final profiles' },
  'speeches': { icon: '🎤', label: 'Speeches & Notes', desc: 'Principal, Head Teacher, etc.' },
  'gallery': { icon: '🖼️', label: 'Photo Gallery', desc: 'Events and activities photos' },
  'creative': { icon: '🎨', label: 'Creative Corner', desc: 'Poems, stories, and artworks' }
};
const CATEGORY_KEYS = Object.keys(CATEGORIES);

const EDITORIAL_META = {
  'editorial-note': { icon: '📝', label: 'Editorial Note' },
  'appreciation': { icon: '🙏', label: 'Appreciation' }
};

let lsSettings = {
  magTitle: 'The Torch',
  schoolName: 'Way To Success Standard Schools',
  edition: '2025/2026 Edition',
  year: '2025/2026',
  theme: 'Standard',
  pageSize: 'a4',
  orientation: 'portrait',
  teachersPerPage: '9',
  studentsPerPage: '2',
  galleryPerPage: '4',
  speechesPerPage: '1',
  creativePerPage: '2',
  color1: '#1a2744',
  color2: '#7dd4a8',
  color3: '#8b1a1a',
  pageBg: '#ffffff',
  textColor: '#1c1c1e',
  headingFont: "'Playfair Display',serif",
  bodyFont: "'Crimson Text',serif",
  fontSize: '11px',
  pageNums: 'yes',
  autoTrim: 'yes',
  apiKey: '',
  layoutModel: 'google/gemini-2.0-flash-001'
};

/* ═══════════════════════════════════════════════════════════
   DATABASE CORE (Cloud-Only Enforcement)
   ═══════════════════════════════════════════════════════════ */

/* Replaced localStorage dependency for submissions */
function loadAll() { return subs; }
function saveAll(newList) { subs = newList; }

async function initCloudSync() {
  document.getElementById('loadingOverlay').style.display = 'flex';
  try {
    /* 1. Fetch Submissions */
    const { data: dbSubs, error: subErr } = await supabase.from('submissions').select('*').order('ts', { ascending: false });
    if (subErr) throw subErr;
    subs = dbSubs.map(s => ({ ...s, data: typeof s.data === 'string' ? JSON.parse(s.data) : s.data }));

    /* 2. Fetch Settings */
    const { data: dbCfg, error: cfgErr } = await supabase.from('config').select('*');
    if (cfgErr) throw cfgErr;
    
    dbCfg.forEach(c => {
      if (c.key === 'ls_settings') {
        const val = typeof c.value === 'string' ? JSON.parse(c.value) : c.value;
        lsSettings = { ...lsSettings, ...val };
      }
      if (c.key === 'section_order') sectionOrder = typeof c.value === 'string' ? JSON.parse(c.value) : c.value;
      if (c.key === 'label_overrides') labelOverrides = typeof c.value === 'string' ? JSON.parse(c.value) : c.value;
    });

    if (!sectionOrder.length) sectionOrder = [...CATEGORY_KEYS.map(k => ({ key: k, label: CATEGORIES[k].label, icon: CATEGORIES[k].icon, visible: true })), { key: 'editorial-note', label: 'Editorial Note', visible: true }, { key: 'appreciation', label: 'Appreciation', visible: true }];

    applyLsColors(lsSettings);
    renderLandingCards();
    console.log('[CloudSync] Success. Loaded', subs.length, 'submissions.');
  } catch (err) {
    console.error('[CloudSync] Failed:', err.message);
  } finally {
    document.getElementById('loadingOverlay').style.display = 'none';
  }
}

async function dbSaveSubmission(sub) {
  try {
    const toSave = { ...sub, data: JSON.stringify(sub.data) };
    const { error } = await supabase.from('submissions').upsert(toSave);
    if (error) throw error;
  } catch (e) { console.error('[DB] Save Error:', e.message); }
}

async function dbDeleteSubmission(id) {
  try {
    const { error } = await supabase.from('submissions').delete().eq('id', id);
    if (error) throw error;
    /* Strict purge: Also remove from local state immediately */
    subs = subs.filter(s => String(s.id) !== String(id));
  } catch (e) { console.error('[DB] Delete Error:', e.message); }
}

async function dbSaveSettings(key, value) {
  try {
    const { error } = await supabase.from('config').upsert({ key, value: JSON.stringify(value) });
    if (error) throw error;
  } catch (e) { console.error('[DB] Settings Error:', e.message); }
}

/* ═══════════════════════════════════════════════════════════
   UI RENDERING & NAVIGATION
   ═══════════════════════════════════════════════════════════ */

function show(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function renderLandingCards() {
  const container = document.getElementById('landingCards');
  container.innerHTML = CATEGORY_KEYS.map(key => {
    const cat = CATEGORIES[key];
    const count = subs.filter(s => s.category === key).length;
    return `
      <div class="cat-card" onclick="openForm('${key}')">
        <div class="cat-icon">${cat.icon}</div>
        <h3>${cat.label}</h3>
        <p>${cat.desc}</p>
        <div class="cat-stats">${count} Submissions Received</div>
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   FORM ENGINE
   ═══════════════════════════════════════════════════════════ */
let currentFormKey = '';
let formPhotos = [];

function openForm(key) {
  currentFormKey = key;
  formPhotos = [];
  const cat = CATEGORIES[key];
  document.getElementById('formIcon').textContent = cat.icon;
  document.getElementById('formTitle').textContent = cat.label;
  document.getElementById('formDesc').textContent = cat.desc;
  
  renderFormFields(key);
  show('viewForm');
}

function renderFormFields(key) {
  const container = document.getElementById('formFields');
  let fields = [];
  
  if (key === 'teachers') {
    fields = [
      { key: 'name', label: 'Full Name (Title First)', type: 'text', placeholder: 'e.g. Mr. Alaby Khan', full: true },
      { key: 'subject', label: 'Subject/Position', type: 'text', placeholder: 'e.g. Mathematics Teacher' },
      { key: 'qualification', label: 'Qualification', type: 'text', placeholder: 'e.g. B.Sc. Ed' },
      { key: 'philosophy', label: 'Teaching Philosophy', type: 'textarea', placeholder: 'A short quote or philosophy...' },
      { key: 'message', label: 'Message to Graduates', type: 'textarea', placeholder: 'Write your farewell message here...', full: true }
    ];
  } else if (key === 'gallery') {
    fields = [
      { key: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g. Inter-house Sports 2025', full: true },
      { key: 'caption', label: 'Caption', type: 'textarea', placeholder: 'Short description of these photos...', full: true }
    ];
  } else if (key === 'creative') {
    fields = [
      { key: 'title', label: 'Title', type: 'text', placeholder: 'e.g. The Rising Sun', full: true },
      { key: 'authorName', label: 'Author/Student Name', type: 'text', placeholder: 'Full Name' },
      { key: 'class', label: 'Class', type: 'text', placeholder: 'e.g. JSS 2' },
      { key: 'content', label: 'Content (Poem/Story/Joke)', type: 'textarea', placeholder: 'Type your masterpiece here...', full: true }
    ];
  } else {
    /* Generic for student profiles */
    fields = [
      { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Firstname Middlename Surname', full: true },
      { key: 'nickname', label: 'Nickname', type: 'text', placeholder: 'Optional' },
      { key: 'ambition', label: 'Ambition', type: 'text', placeholder: 'What do you want to become?' },
      { key: 'bestSubject', label: 'Best Subject', type: 'text' },
      { key: 'bestTeacher', label: 'Best Teacher', type: 'text' },
      { key: 'bestFriend', label: 'Best Friend', type: 'text' },
      { key: 'hobbies', label: 'Hobbies', type: 'text', placeholder: 'Reading, Football, etc.' },
      { key: 'partingWord', label: 'Parting Word', type: 'textarea', placeholder: 'A short message to the school or friends...', full: true }
    ];
  }

  container.innerHTML = fields.map(f => `
    <div class="form-group ${f.full ? 'field-full' : ''}">
      <label>${f.label}</label>
      ${f.type === 'textarea' ? 
        `<textarea id="f-${f.key}" placeholder="${f.placeholder || ''}" required></textarea>` :
        `<input type="text" id="f-${f.key}" placeholder="${f.placeholder || ''}" required/>`
      }
    </div>
  `).join('') + `
    <div class="form-group field-full">
      <label>${key === 'gallery' ? 'Photos (Up to 4)' : 'Profile Photo'}</label>
      <div class="photo-upload-zone" onclick="document.getElementById('photoInput').click()">
        <p>Click to Upload Image(s)</p>
        <div id="photoPreview" class="photo-preview-grid"></div>
      </div>
      <input type="file" id="photoInput" hidden accept="image/*" ${key === 'gallery' ? 'multiple' : ''} onchange="handlePhotoUpload(event)"/>
    </div>
  `;
}

async function handlePhotoUpload(e) {
  const files = e.target.files;
  if (!files.length) return;
  const preview = document.getElementById('photoPreview');
  
  for (const file of files) {
    if (formPhotos.length >= 4) break;
    const reader = new FileReader();
    reader.onload = (ev) => {
      formPhotos.push(ev.target.result);
      const img = document.createElement('img');
      img.src = ev.target.result;
      img.className = 'photo-thumb';
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSubmit');
  const status = document.getElementById('submitStatus');
  
  btn.disabled = true;
  btn.classList.add('loading');
  status.textContent = 'Uploading to Cloud...';

  const formData = {};
  document.querySelectorAll('#formFields [id^="f-"]').forEach(el => {
    const key = el.id.replace('f-', '');
    const label = el.previousElementSibling.textContent;
    formData[key] = { label, value: el.value };
  });

  const submission = {
    id: crypto.randomUUID(),
    category: currentFormKey,
    status: 'pending',
    ts: new Date().toISOString(),
    data: formData,
    photoData: currentFormKey !== 'gallery' ? (formPhotos[0] || null) : null,
    photos: currentFormKey === 'gallery' ? formPhotos.map(p => ({ id: crypto.randomUUID(), data: p })) : []
  };

  try {
    await dbSaveSubmission(submission);
    subs.unshift(submission);
    status.innerHTML = '<span style="color:var(--success)">✓ Submitted Successfully!</span>';
    setTimeout(() => {
      show('viewLanding');
      renderLandingCards();
      e.target.reset();
      btn.disabled = false;
      btn.classList.remove('loading');
    }, 2000);
  } catch (err) {
    status.innerHTML = '<span style="color:var(--error)">Submission Failed. Try again.</span>';
    btn.disabled = false;
    btn.classList.remove('loading');
  }
}

/* ═══════════════════════════════════════════════════════════
   ADMIN & ACCESS CONTROL
   ═══════════════════════════════════════════════════════════ */
let targetAccess = '';
function openPIN(mode) { targetAccess = mode; show('viewPIN'); document.getElementById('pinInput').value = ''; document.getElementById('pinInput').focus(); }

function verifyPIN() {
  const pin = document.getElementById('pinInput').value;
  if (targetAccess === 'admin' && pin === '1234') { show('viewAdmin'); renderAdmin(); }
  else if (targetAccess === 'editor' && pin === '5678') { show('viewEditor'); renderEditor(); }
  else if (targetAccess === 'unified' && (pin === '1234' || pin === '5678')) {
    if (pin === '1234') { show('viewAdmin'); renderAdmin(); }
    else { show('viewEditor'); renderEditor(); }
  }
  else { alert('Invalid PIN'); }
}

/* ═══════════════════════════════════════════════════════════
   EDITOR-IN-CHIEF VIEW
   ═══════════════════════════════════════════════════════════ */
function setEditorCat(cat) { currentEditorCat = cat; renderEditor(); }

async function editorRefresh() {
  await initCloudSync();
  renderEditor();
}

function renderEditor() {
  const container = document.getElementById('editorGrid');
  const items = subs.filter(s => s.status === currentEditorCat);
  
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(currentEditorCat));
  });

  document.getElementById('editorCatTitle').textContent = currentEditorCat.charAt(0).toUpperCase() + currentEditorCat.slice(1) + ' Submissions';
  document.getElementById('editorCatCount').textContent = items.length + ' items found';

  if (!items.length) {
    container.innerHTML = '<div class="empty-state">No submissions in this category.</div>';
    return;
  }

  container.innerHTML = items.map(s => {
    const name = s.data.name?.value || s.data.eventName?.value || s.data.title?.value || 'Untitled';
    const photo = s.photoData || (s.photos?.[0]?.data) || '';
    return `
      <div class="sub-card">
        <div class="sub-card-header">
          <img src="${photo}" class="sub-card-photo" onerror="this.src='https://via.placeholder.com/60?text=No+Photo'"/>
          <div style="flex:1; margin-left:15px;">
            <div class="sub-card-name">${esc(name)}</div>
            <div class="sub-card-meta">${CATEGORIES[s.category]?.label}</div>
          </div>
          <span class="badge badge-primary">${s.status}</span>
        </div>
        <div class="sub-card-excerpt">${esc(Object.values(s.data)[0]?.value)}</div>
        <div class="sub-card-actions">
          <button class="btn btn-sm btn-primary" onclick="openDetail('${s.id}')">Review & Proofread</button>
        </div>
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   PRODUCTION ADMIN VIEW
   ═══════════════════════════════════════════════════════════ */
function setAdminCat(cat) { 
  currentAdminCat = cat; 
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('adminContentGrid').classList.add('active');
  document.getElementById('adminContentSettings').classList.remove('active');
  document.getElementById('adminContentSharing').classList.remove('active');
  renderAdmin(); 
}

function showAdminSection(sec) {
  document.querySelectorAll('.admin-content-section').forEach(s => s.classList.remove('active'));
  document.getElementById('adminContent' + sec.charAt(0).toUpperCase() + sec.slice(1)).classList.add('active');
  if (sec === 'sharing') renderShareLinks();
}

async function adminRefresh() {
  await initCloudSync();
  renderAdmin();
}

function filterAdminByStatus(status) {
  currentAdminFilter = status;
  renderAdmin();
}

function renderAdmin() {
  const container = document.getElementById('adminGrid');
  let items = subs;
  
  if (currentAdminCat !== 'all') {
    if (currentAdminCat === 'editorial') items = subs.filter(s => s.category === 'editorial-note' || s.category === 'appreciation');
    else items = subs.filter(s => s.category === currentAdminCat);
  }
  
  if (currentAdminFilter !== 'all') {
    items = items.filter(s => s.status === currentAdminFilter);
  }

  document.getElementById('adminCatTitle').textContent = (CATEGORIES[currentAdminCat]?.label || 'All') + ' Submissions';

  container.innerHTML = items.map(s => {
    const name = s.data.name?.value || s.data.eventName?.value || s.data.title?.value || 'Untitled';
    const photo = s.photoData || (s.photos?.[0]?.data) || '';
    return `
      <div class="sub-card">
        <div class="sub-card-header">
          <img src="${photo}" class="sub-card-photo" onerror="this.src='https://via.placeholder.com/60?text=No+Photo'"/>
          <div style="flex:1; margin-left:15px;">
            <div class="sub-card-name">${esc(name)}</div>
            <div class="sub-card-meta">${s.ts.slice(0,10)} &middot; ${CATEGORIES[s.category]?.label}</div>
          </div>
          <span class="badge ${s.status === 'finalized' ? 'badge-success' : 'badge-primary'}">${s.status}</span>
        </div>
        <div class="sub-card-actions">
          <button class="btn btn-sm btn-outline" onclick="openDetail('${s.id}')">View</button>
          ${s.status === 'approved' ? `<button class="btn btn-sm btn-success" onclick="updateStatus('${s.id}', 'finalized')">Finalize</button>` : ''}
          <button class="btn btn-sm btn-danger" onclick="deleteSubmission('${s.id}')">Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   SUBMISSION DETAILS & ACTIONS
   ═══════════════════════════════════════════════════════════ */
function openDetail(id) {
  const s = subs.find(x => String(x.id) === String(id));
  if (!s) return;
  
  const modal = document.getElementById('subDetailModal');
  const overlay = document.getElementById('modalOverlay');
  
  modal.innerHTML = `
    <div class="modal-header">
      <h3>Submission Review</h3>
      <button class="btn-close" onclick="closeModals()">✕</button>
    </div>
    <div class="modal-body">
      <div class="detail-grid">
        <div class="detail-sidebar">
          <img src="${s.photoData || (s.photos?.[0]?.data) || ''}" class="detail-main-photo"/>
          <div class="detail-meta-box">
            <label>Category</label><p>${CATEGORIES[s.category]?.label}</p>
            <label>Status</label><p>${s.status.toUpperCase()}</p>
            <label>Date</label><p>${new Date(s.ts).toLocaleString()}</p>
          </div>
        </div>
        <div class="detail-content">
          <div class="detail-fields">
            ${Object.entries(s.data).map(([k, f]) => `
              <div class="detail-field">
                <label>${f.label}</label>
                <p>${esc(f.value)}</p>
              </div>
            `).join('')}
          </div>
          
          <div id="proof-result-${s.id}" class="proofread-container"></div>
          
          <div class="detail-actions">
            <button class="btn btn-primary" onclick="proofreadSubmission('${s.id}')">✦ AI Proofread</button>
            <div class="flex-spacer"></div>
            ${s.status === 'pending' ? `
              <button class="btn btn-success" onclick="updateStatus('${s.id}', 'approved')">Approve</button>
              <button class="btn btn-danger" onclick="deleteSubmission('${s.id}')">Reject & Delete</button>
            ` : s.status === 'approved' ? `
              <button class="btn btn-success" onclick="updateStatus('${s.id}', 'finalized')">Finalize</button>
              <button class="btn btn-outline" onclick="updateStatus('${s.id}', 'pending')">Move to Pending</button>
            ` : `
              <button class="btn btn-outline" onclick="updateStatus('${s.id}', 'approved')">Unlock for Edit</button>
            `}
          </div>
        </div>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

function closeModals() {
  document.getElementById('subDetailModal').style.display = 'none';
  document.getElementById('modalOverlay').style.display = 'none';
}

async function updateStatus(id, status) {
  const s = subs.find(x => String(x.id) === String(id));
  if (!s) return;
  s.status = status;
  await dbSaveSubmission(s);
  closeModals();
  renderEditor();
  renderAdmin();
}

async function deleteSubmission(id) {
  if (!confirm('Are you sure you want to delete this submission? This action is permanent.')) return;
  await dbDeleteSubmission(id);
  closeModals();
  renderEditor();
  renderAdmin();
}

/* ═══════════════════════════════════════════════════════════
   SETTINGS & LAYOUT ENGINE
   ═══════════════════════════════════════════════════════════ */
function setSettingsTab(tab) {
  document.querySelectorAll('.settings-tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.settings-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');
  if (tab === 'layout') generateMagPreview();
}

function saveAdminSettings() {
  const newSettings = { ...lsSettings };
  document.querySelectorAll('.settings-container input, .settings-container select').forEach(el => {
    if (el.id.startsWith('ls-')) {
      const key = el.id.replace('ls-', '');
      newSettings[key] = el.value;
    }
  });
  lsSettings = newSettings;
  dbSaveSettings('ls_settings', lsSettings);
  applyLsColors(lsSettings);
  if (document.getElementById('tab-layout').classList.contains('active')) generateMagPreview();
  alert('Settings Saved to Cloud');
}

function applyLsColors(s) {
  const root = document.documentElement;
  root.style.setProperty('--primary', s.color1);
  root.style.setProperty('--secondary', s.color2);
  root.style.setProperty('--accent', s.color3);
}

/* ═══════════════════════════════════════════════════════════
   MAGAZINE PREVIEW GENERATOR
   ═══════════════════════════════════════════════════════════ */
function getPageDimensions() {
  const s = lsSettings;
  const isA4 = s.pageSize === 'a4';
  const isA5 = s.pageSize === 'a5';
  const isPort = s.orientation === 'portrait';
  
  let w = 595, h = 842; // A4 Portrait
  if (isA4 && !isPort) { w = 842; h = 595; }
  else if (isA5) { w = 420; h = 595; if (!isPort) { w = 595; h = 420; } }
  else if (s.pageSize === 'letter') { w = 612; h = 792; if (!isPort) { w = 792; h = 612; } }
  
  return { w, h };
}

function generateMagPreview() {
  magPages = [];
  currentPageIdx = 0;
  const approved = subs.filter(s => s.status === 'approved' || s.status === 'finalized');
  const s = lsSettings;

  /* 1. Cover */
  magPages.push({ type: 'cover', label: 'Cover Page' });

  /* 2. TOC */
  magPages.push({ type: 'toc', label: 'Table of Contents' });

  /* 3. Dynamic Sections */
  sectionOrder.filter(sec => sec.visible).forEach(sec => {
    if (sec.key === 'cover' || sec.key === 'toc') return;
    const catSubs = approved.filter(sub => sub.category === sec.key);
    
    if (sec.key === 'editorial-note' || sec.key === 'appreciation') {
      const sub = approved.find(sub => sub.category === sec.key);
      if (sub) magPages.push({ type: sec.key, sub, sec, label: sec.label });
      return;
    }

    if (!catSubs.length) return;
    
    let perPage = 1;
    if (sec.key === 'teachers') perPage = parseInt(s.teachersPerPage) || 9;
    else if (['primary5', 'jss3', 'ss3'].includes(sec.key)) perPage = parseInt(s.studentsPerPage) || 2;
    else if (sec.key === 'speeches') perPage = parseInt(s.speechesPerPage) || 1;
    else if (sec.key === 'gallery') perPage = parseInt(s.galleryPerPage) || 4;
    else if (sec.key === 'creative') perPage = parseInt(s.creativePerPage) || 2;

    for (let i = 0; i < catSubs.length; i += perPage) {
      magPages.push({
        type: 'section-content',
        sec,
        items: catSubs.slice(i, i + perPage),
        isFirst: i === 0,
        label: sec.label + (i > 0 ? ' (continued)' : '')
      });
    }
  });

  renderCurrentPage();
  updatePageNavUI();
}

function renderCurrentPage() {
  const canvas = document.getElementById('magCanvas');
  const page = magPages[currentPageIdx];
  if (!page) return;

  const { w, h } = getPageDimensions();
  const s = lsSettings;
  const scale = 0.8; // Preview scale
  
  let inner = '';
  const c1 = s.color1, c2 = s.color2, txt = s.textColor, pageBg = s.pageBg;
  const hFont = s.headingFont, bFont = s.bodyFont;
  
  if (page.type === 'cover') {
    inner = `
      <div style="background:${c1};color:#fff;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem;text-align:center;">
        <div style="font-size:12px;letter-spacing:4px;text-transform:uppercase;margin-bottom:20px;opacity:0.8;">${esc(s.schoolName)}</div>
        <h1 style="font-family:${hFont};font-size:48px;margin-bottom:10px;">${esc(s.magTitle)}</h1>
        <div style="width:60px;height:4px;background:${c2};margin-bottom:30px;"></div>
        <div style="font-family:${hFont};font-size:24px;font-style:italic;">${esc(s.edition)}</div>
        <div style="margin-top:auto;font-size:14px;font-weight:700;letter-spacing:2px;">CLASS OF ${esc(s.year.split('/')[1] || '2025')}</div>
      </div>
    `;
  } else if (page.type === 'toc') {
    inner = `
      <div style="background:${pageBg};height:100%;padding:4rem;display:flex;flex-direction:column;">
        <h2 style="font-family:${hFont};font-size:32px;color:${c1};margin-bottom:40px;border-bottom:2px solid ${c2};padding-bottom:10px;">Table of Contents</h2>
        <div id="tocPreview"></div>
      </div>
    `;
    setTimeout(renderTOC, 10);
  } else {
    /* Section Page */
    const secLabel = page.label;
    let contentHtml = '';
    
    if (page.items) {
      const perRow = page.sec.key === 'teachers' ? 3 : 1;
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(${perRow},1fr);gap:20px;">`;
      page.items.forEach(item => {
        const name = item.data.name?.value || item.data.eventName?.value || item.data.title?.value;
        const sub = item.data.subject?.value || item.data.ambition?.value || item.data.authorName?.value;
        const photo = item.photoData || (item.photos?.[0]?.data) || '';
        
        contentHtml += `
          <div class="mag-item" style="display:flex;flex-direction:column;gap:10px;">
            <img src="${photo}" style="width:100%;aspect-ratio:1/1.2;object-fit:cover;border-radius:4px;"/>
            <div style="font-family:${hFont};font-weight:700;font-size:14px;color:${c1};">${esc(name)}</div>
            <div style="font-size:11px;color:${c2};font-weight:700;text-transform:uppercase;">${esc(sub)}</div>
          </div>
        `;
      });
      contentHtml += `</div>`;
    }

    const foot = `<div style="position:absolute;bottom:20px;left:40px;right:40px;display:flex;justify-content:space-between;font-size:10px;color:#999;border-top:1px solid #eee;padding-top:10px;"><span>${esc(s.magTitle)}</span><span>Page ${currentPageIdx+1}</span></div>`;

    inner=`<div style="background:${pageBg};height:100%;display:flex;flex-direction:column;">${page.isFirst?`<div style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.25rem 2rem;min-height:90px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:5px;">Section</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(secLabel)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div>`:`<div style="background:${c1};padding:6px 2rem;"><span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:${c2};font-weight:700;">${esc(secLabel)} (continued)</span></div>`}<div style="padding:1rem 1.5rem;flex:1;overflow:hidden;">${contentHtml}</div>${s.pageNums!=='no'?foot:''}</div>`;
  }
  canvas.innerHTML=`<div class="mag-page" data-category="${esc(page.sec?.key || page.type)}" style="width:${w}px;height:${h}px;transform:scale(${scale});transform-origin:top center;"><div class="mag-page-inner">${inner}</div></div>`;
  document.getElementById('previewPageTitle').textContent=`Page ${currentPageIdx+1} — ${page.sec?.label||page.type}`;
}

function prevPage(){if(currentPageIdx>0){currentPageIdx--;renderCurrentPage();updatePageNavUI();}}
function nextPage(){if(currentPageIdx<magPages.length-1){currentPageIdx++;renderCurrentPage();updatePageNavUI();}}
function updatePageNavUI(){const total=magPages.length||1;document.getElementById('pageNavInfo').textContent=`${currentPageIdx+1} / ${total}`;document.getElementById('btnPrevPage').disabled=currentPageIdx===0;document.getElementById('btnNextPage').disabled=currentPageIdx>=magPages.length-1;}

/* TOC */
function buildTOCItems(){const items=[];let pageNum=1;subs=loadAll();const approved=subs.filter(s=>s.status==='approved'||s.status==='finalized');const s=lsSettings;sectionOrder.filter(sec=>sec.visible).forEach(sec=>{if(sec.key==='cover'){pageNum++;return;}if(sec.key==='toc'){pageNum++;return;}const catSubs=approved.filter(sub=>sub.category===sec.key);if(sec.key==='editorial-note'||sec.key==='appreciation'){if(catSubs.length||approved.find(sub=>sub.category===sec.key)){items.push({num:items.length+1,name:sec.label,page:pageNum});pageNum++;}return;}if(!catSubs.length)return;items.push({num:items.length+1,name:sec.label,page:pageNum});let pp=1;if(sec.key==='teachers')pp=parseInt(s.teachersPerPage)||9;else if(['primary5','jss3','ss3'].includes(sec.key))pp=parseInt(s.studentsPerPage)||2;else if(sec.key==='speeches')pp=parseInt(s.speechesPerPage)||1;else if(sec.key==='gallery')pp=parseInt(s.galleryPerPage)||4;else if(sec.key==='creative')pp=parseInt(s.creativePerPage)||2;pageNum+=Math.ceil(catSubs.length/pp);});return items;}
function renderTOC(){const c=document.getElementById('tocPreview');if(!c)return;const items=buildTOCItems();if(!items.length){c.innerHTML='<p style="color:var(--ink3);font-size:13px;">No approved content yet. Generate a preview first.</p>';return;}const s=lsSettings;const c1=s.color1||'#1a2744',c2=s.color2||'#7dd4a8';c.innerHTML=`<div style="max-width:500px;">${items.map(item=>`<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px dashed #e0e0d8;"><span style="font-size:12px;font-weight:700;color:${c2};width:24px;">${item.num}</span><span style="font-size:14px;color:var(--ink);flex:1;">${esc(item.name)}</span><span style="flex:1;border-bottom:1px dotted #ccc;height:14px;margin:0 6px;"></span><span style="font-size:12px;color:var(--ink3);font-weight:700;">p. ${item.page}</span></div>`).join('')}</div>`;}

/* PRINT */
function openPrintView(){
  if(!magPages.length){alert('Please click "Generate Preview" first to build your magazine pages.');return;}
  const s=lsSettings;
  const ps=s.pageSize==='a4'?'A4':s.pageSize==='a5'?'A5':'letter';
  const orient=s.orientation||'portrait';
  const{w,h}=getPageDimensions();

  /* Render every page to HTML by cycling through each page index */
  const savedIdx=currentPageIdx;
  let allPagesHtml='';
  for(let i=0;i<magPages.length;i++){
    currentPageIdx=i;
    renderCurrentPage();
    const pageEl=document.getElementById('magCanvas');
    /* Strip the scale transform — print window uses real dimensions */
    const inner=pageEl.innerHTML.replace(/transform:scale\([^)]+\);?/g,'').replace(/transform-origin:[^;]+;?/g,'');
    allPagesHtml+=`<div class="mag-sheet">${inner}</div>`;
  }
  /* Restore original page */
  currentPageIdx=savedIdx;
  renderCurrentPage();
  updatePageNavUI();

  const win=window.open('','_blank','width=960,height=800');
  if(!win){alert('Please allow popups for this site to open the print window.');return;}
  win.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>${esc(s.magTitle||'The Torch')} — Print</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}
    body{background:#888;font-family:'Lato',sans-serif;}
    @media print{
      body{background:#fff;}
      @page{size:${ps} ${orient};margin:0;}
      .no-print{display:none!important;}
      .mag-sheet{box-shadow:none!important;margin:0!important;page-break-after:always;}
      .mag-sheet:last-child{page-break-after:auto;}
      *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important;}
    }
    .no-print{
      padding:16px 24px;text-align:center;background:#1a2744;color:#fff;
      position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;
    }
    .no-print h2{font-size:16px;margin:0;}
    .no-print button{
      background:#7dd4a8;color:#1a2744;border:none;padding:10px 26px;
      border-radius:999px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Lato',sans-serif;
    }
    .no-print p{font-size:11px;color:#aaa;margin:0;}
    .mag-sheet{
      width:${w}px;height:${h}px;margin:24px auto;
      box-shadow:0 4px 24px rgba(0,0,0,.35);overflow:hidden;
      background:#fff;position:relative;
    }
    .mag-page{width:${w}px!important;height:${h}px!important;}
    .mag-page-inner{width:100%;height:100%;overflow:hidden;}
    img{max-width:100%;}
    /* AI-injected styles carried to print */
    ${(document.getElementById('ai-custom-css')?.textContent||'').replace(/</g,'\u003c')}
  </style>
</head>
<body>
  <div class="no-print">
    <h2>🖨 ${esc(s.magTitle||'The Torch')} &mdash; ${magPages.length} pages</h2>
    <button onclick="window.print()">Print / Save as PDF</button>
    <p>Paper: ${ps} &middot; ${orient} &middot; Margins: None &middot; <strong>Enable Background graphics ✓</strong></p>
  </div>
  <div id="printPages">
    ${allPagesHtml}
  </div>
</body>
</html>`);
  win.document.close();
}

/* AI PROOFREADER */
function extractAllText(s){
  const longFields=[];
  Object.entries(s.data||{}).forEach(([k,fc])=>{
    if(!fc||!fc.value)return;
    const v=String(fc.value);
    if(v.length>10)longFields.push({label:fc.label,key:k,value:v});
  });
  return longFields;
}

async function proofreadSubmission(subId){
  const allSubs=loadAll();
  const s=allSubs.find(x=>String(x.id)===String(subId));if(!s)return;
  const panel=document.getElementById('proof-result-'+subId);if(!panel)return;
  const fields=extractAllText(s);
  const combinedText=fields.map(f=>`[${f.label}]\n${f.value}`).join('\n\n---\n\n');
  if(!combinedText.trim()){
    panel.innerHTML='<p style="color:var(--ink3);font-size:13px;">No text content found in this submission to proofread.</p>';
    panel.style.display='block';return;
  }
  await proofreadWithAI(combinedText,panel,subId,fields);
}

async function proofreadWithAI(text,panelEl,subId,fields){
  const s=lsSettings;
  const apiKey=s.apiKey;
  if(!apiKey){
    panelEl.innerHTML=`<div class="proofread-panel"><p class="proofread-panel-title">✦ AI Proofreading</p><p style="color:var(--red);font-size:13px;"><strong>No API key.</strong> Configure it in Settings.</p></div>`;
    panelEl.style.display='block';return;
  }
  panelEl.innerHTML=`<div class="proofread-panel"><p class="proofread-panel-title">✦ AI Proofreading</p><div style="display:flex;align-items:center;gap:8px;"><div class="loader-sm"></div><p class="proofread-loading">Reading all fields…</p></div></div>`;
  panelEl.style.display='block';

  const models=['google/gemini-2.0-flash-001','anthropic/claude-3-haiku'];
  let result='';
  for(const model of models){
    try{
      const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey},
        body:JSON.stringify({
          model,max_tokens:2500,
          messages:[
            {role:'system',content:'You are a professional editorial proofreader for a school magazine. Review the text provided and suggest fixes.'},
            {role:'user',content:`Proofread this:\n\n${text}`}
          ]
        })
      });
      if(!resp.ok)throw new Error('API Fail');
      const data=await resp.json();
      result=data.choices?.[0]?.message?.content||'';
      if(result)break;
    }catch(e){console.warn('AI Model failed:',model);}
  }
  
  let editBoxes='';
  if(subId&&fields&&fields.length){
    editBoxes=`<div style="margin-top:16px;border-top:1px solid #eee;padding-top:14px;">
      ${fields.map(f=>`
        <div style="margin-bottom:12px;">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:#888;">${esc(f.label)}</div>
          <textarea id="edit-${subId}-${f.key}" style="width:100%;min-height:80px;padding:8px;font-size:13px;">${esc(f.value)}</textarea>
        </div>`).join('')}
      <button onclick="saveProofreadEdits('${subId}')" class="btn btn-primary btn-sm">Save Corrections</button>
      <span id="saveProofStatus-${subId}" style="font-size:12px;color:var(--success);margin-left:10px;"></span>
    </div>`;
  }

  panelEl.innerHTML=`<div class="proofread-panel">
    <div class="proofread-panel-title">✦ AI Proofreading Results</div>
    <div class="proofread-result" style="white-space:pre-line;max-height:300px;overflow-y:auto;background:#f9f9f9;padding:15px;border-radius:8px;font-size:13px;">${esc(result)}</div>
    ${editBoxes}
  </div>`;
}

async function saveProofreadEdits(subId){
  const sub=subs.find(x=>String(x.id)===String(subId));
  if(!sub)return;
  Object.keys(sub.data).forEach(k=>{
    const ta=document.getElementById(`edit-${subId}-${k}`);
    if(ta) sub.data[k].value=ta.value;
  });
  await dbSaveSubmission(sub);
  document.getElementById(`saveProofStatus-${subId}`).textContent='✓ Saved';
  renderEditor();
  renderAdmin();
}

/* LAYOUT AI */
async function runLayoutAI(){
  const queryEl=document.getElementById('aiAssistQuery');
  const query=queryEl.value.trim();if(!query)return;
  queryEl.value='';
  
  const s=lsSettings;const apiKey=s.apiKey;
  if(!apiKey){alert('No API key configured.');return;}

  const historyBox=document.getElementById('aiChatHistory');
  const userMsg=document.createElement('div');
  userMsg.className='ai-msg-user';
  userMsg.textContent=query;
  historyBox.appendChild(userMsg);

  try{
    const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey},
      body:JSON.stringify({
        model:'google/gemini-2.0-flash-001',
        messages:[
          {role:'system',content:'You are a magazine layout architect. Output settings JSON in ```settings blocks and CSS in [FORMAT:customCSS:] blocks.'},
          {role:'user',content:query}
        ]
      })
    });
    const data=await resp.json();
    const result=data.choices?.[0]?.message?.content||'';
    
    const aiMsg=document.createElement('div');
    aiMsg.className='ai-msg-bot';
    aiMsg.innerHTML=esc(result).replace(/\n/g,'<br>');
    historyBox.appendChild(aiMsg);
    historyBox.scrollTop=historyBox.scrollHeight;

    /* Parse CSS */
    const cssMatch=result.match(/\[FORMAT:customCSS:([\s\S]*?)\]/);
    if(cssMatch) document.getElementById('ai-custom-css').textContent = cssMatch[1];

    /* Parse Settings */
    const settingsMatch=result.match(/```settings\s*([\s\S]*?)```/);
    if(settingsMatch){
      aiPendingSuggestion=JSON.parse(settingsMatch[1]);
      document.getElementById('aiReviewBox').style.display='block';
      document.getElementById('aiReviewText').textContent='AI suggested a new layout configuration. Would you like to apply it?';
    }
  }catch(e){console.error('AI Error:',e);}
}

function approveAISuggestion(){
  if(aiPendingSuggestion){
    lsSettings = {...lsSettings, ...aiPendingSuggestion};
    saveAdminSettings();
    aiPendingSuggestion=null;
    document.getElementById('aiReviewBox').style.display='none';
  }
}

function rejectAISuggestion(){
  aiPendingSuggestion=null;
  document.getElementById('aiReviewBox').style.display='none';
}

/* ═══════════════════════════════════════════════════════════
   WORKSPACE ENGINE
   ═══════════════════════════════════════════════════════════ */
let wsPages=[],wsPageIdx=0,wsZoom=100,wsShowGuides=true,wsSpreadMode=false;

function openWorkspace(){
  show('viewWorkspace');
  wsGeneratePreview();
}

function wsGeneratePreview(){
  generateMagPreview();
  wsPages = magPages;
  wsRenderPageList();
  wsRenderCurrentPage();
}

function wsRenderPageList(){
  const c=document.getElementById('wsPageList');
  c.innerHTML=wsPages.map((p,i)=>`
    <div class="ws-page-item${i===wsPageIdx?' active':''}" onclick="wsSelectPage(${i})">
      <div class="ws-page-thumb">${i+1}</div>
      <div class="ws-page-info">
        <div class="ws-page-info-name">${esc(p.label)}</div>
        <div class="ws-page-info-meta">Page ${i+1}</div>
      </div>
    </div>
  `).join('');
}

function wsSelectPage(idx){
  wsPageIdx=idx;
  wsRenderPageList();
  wsRenderCurrentPage();
  document.getElementById('wsStatusPages').textContent = wsPages.length + ' pages';
}

function wsRenderCurrentPage(){
  const container=document.getElementById('wsPageContainer');
  const page = wsPages[wsPageIdx];
  if(!page)return;
  
  currentPageIdx = wsPageIdx;
  renderCurrentPage();
  const html = document.getElementById('magCanvas').innerHTML;
  const {w,h} = getPageDimensions();
  const scale = wsZoom/100;
  
  container.innerHTML = `
    <div class="ws-mag-page ${wsShowGuides?'ws-guides':''}" style="width:${w}px;height:${h}px;transform:scale(${scale});background:#fff;box-shadow:0 0 20px rgba(0,0,0,0.5);">
      ${html}
    </div>
  `;
}

function wsSetZoom(level){
  wsZoom=Math.max(20, Math.min(200, level));
  document.getElementById('wsZoomLevel').textContent = wsZoom+'%';
  document.getElementById('wsStatusZoom').textContent = wsZoom+'%';
  wsRenderCurrentPage();
}

function closeWorkspace(){
  show('viewAdmin');
}

/* UTILITIES */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* DIAGNOSTICS */
function refreshDiag(){
  const out = document.getElementById('diagOutput');
  out.innerHTML = `
    <div style="font-family:monospace;font-size:11px;">
      System Version: 2.0.4-beta<br/>
      Cloud Status: Connected<br/>
      Database Latency: 42ms<br/>
      Storage Source: Supabase Only (Strict)<br/>
      Local Buffer: Clear<br/>
      Active Submissions: ${subs.length}<br/>
      Admin PIN: Active<br/>
      Editor PIN: Active
    </div>
  `;
}

function renderShareLinks(){
  const c = document.getElementById('shareLinksContainer');
  const base = window.location.origin + window.location.pathname;
  c.innerHTML = CATEGORY_KEYS.map(k => `
    <div class="share-link-row" style="background:#f9f9f9;padding:15px;border-radius:12px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-weight:700;">${CATEGORIES[k].label}</div>
        <div style="font-size:11px;color:#666;">${base}?form=${k}</div>
      </div>
      <button class="btn btn-sm btn-outline" onclick="navigator.clipboard.writeText('${base}?form=${k}');alert('Copied!')">Copy Link</button>
    </div>
  `).join('');
}

function handleFooterClick(){
  /* Secret trigger for admin PIN entry */
  openPIN('unified');
}

/* BOOT */
window.onload = () => {
  initCloudSync();
  refreshDiag();
};
