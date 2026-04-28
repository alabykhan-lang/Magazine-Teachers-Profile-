/**
 * MagicEditor v2.0 - Core Script
 * Integrated Cloud Sync, Editorial Workflow, and Layout Studio
 */

/* ── CONFIGURATION & CONSTANTS ── */
const CATEGORIES = {
  teachers: { label: 'Teachers Profile', icon: '👨‍🏫', tag: 'Staff', desc: 'Official profiles for magazine staff section.', color: 'gold' },
  primary5: { label: 'Primary 5 Class', icon: '🧒', tag: 'Students', desc: 'Graduating primary students directory.', color: 'green' },
  jss3: { label: 'JSS 3 Class', icon: '🧑', tag: 'Students', desc: 'Junior secondary graduation profiles.', color: 'green' },
  ss3: { label: 'SS 3 Class', icon: '🎓', tag: 'Students', desc: 'Senior secondary final year directory.', color: 'green' },
  speeches: { label: 'Speeches & Addresses', icon: '🎤', tag: 'Official', desc: 'Principal, Head Teacher, and Guest speeches.', color: 'blue' },
  academic: { label: 'Academic Excellence', icon: '🏆', tag: 'Achievements', desc: 'Top performers and award winners.', color: 'blue' },
  creative: { label: 'Creative Corner', icon: '🎨', tag: 'Art/Lit', desc: 'Student poems, stories, and artworks.', color: 'purple' },
  motivational: { label: 'Motivational Pieces', icon: '💡', tag: 'Articles', desc: 'Inspirational write-ups and quotes.', color: 'purple' },
  events: { label: 'School Events', icon: '📅', tag: 'Gallery', desc: 'Inter-house sports, cultural days, etc.', color: 'amber' },
  interviews: { label: 'Interviews', icon: '🎙️', tag: 'Feature', desc: 'Conversations with notable alumni or staff.', color: 'mint' },
  gallery: { label: 'Photo Gallery', icon: '📸', tag: 'Media', desc: 'General school life and event photos.', color: 'gold' },
  appreciation: { label: 'Appreciation', icon: '🙏', tag: 'Official', desc: 'Votes of thanks and acknowledgments.', color: 'blue' }
};

const CATEGORY_KEYS = Object.keys(CATEGORIES);
let sectionOrder = CATEGORY_KEYS.map(k => ({ key: k, label: CATEGORIES[k].label, active: true, layout: 'grid' }));

/* Default Fields per Category Type */
const DEFAULT_FIELDS = {
  teachers: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'role', label: 'Designation/Position', type: 'text', required: true },
    { id: 'address', label: 'Address to Students', type: 'textarea', required: true },
    { id: 'favorite_quote', label: 'Favorite Quote', type: 'text' }
  ],
  students: [
    { id: 'name', label: 'Full Name', type: 'text', required: true },
    { id: 'ambition', label: 'Future Ambition', type: 'text', required: true },
    { id: 'hobbies', label: 'Hobbies', type: 'text' },
    { id: 'parting_words', label: 'Parting Words', type: 'textarea', required: true }
  ],
  official: [
    { id: 'title', label: 'Speech Title', type: 'text', required: true },
    { id: 'author', label: 'Author/Speaker', type: 'text', required: true },
    { id: 'content', label: 'Full Text Content', type: 'textarea', required: true }
  ],
  media: [
    { id: 'caption', label: 'Photo Caption', type: 'text', required: true },
    { id: 'event_name', label: 'Event Name', type: 'text' }
  ],
  generic: [
    { id: 'title', label: 'Title', type: 'text', required: true },
    { id: 'name', label: 'Author Name', type: 'text', required: true },
    { id: 'content', label: 'Content', type: 'textarea', required: true }
  ]
};

/* ── STATE ── */
let subs = [];
let currentForm = null;
let currentView = 'landing';
let editorCategory = 'pending';
let adminCategory = 'teachers';
let lsSettings = {
  magTitle: 'The Torch',
  schoolName: 'Way To Success Standard Schools',
  edition: '1st Edition',
  year: '2025/2026',
  color1: '#1a2744',
  color2: '#7dd4a8',
  color3: '#8b1a1a',
  pageBg: '#ffffff',
  textColor: '#1c1c1e',
  headingFont: "'Playfair Display', serif",
  bodyFont: "'Crimson Text', serif",
  fontSize: '11px',
  teachersPerPage: 6,
  studentsPerPage: 12,
  galleryPerPage: 16,
  speechesPerPage: 1,
  creativePerPage: 4,
  pageSize: 'A4',
  orientation: 'portrait',
  pageNums: true,
  autoTrim: true,
  theme: 'modern'
};

let labelOverrides = {};
let fieldOverrides = {}; // { categoryKey: [fields] }
let wsPages = [];
let wsPageIdx = 0;
let wsZoom = 100;
let wsSpreadMode = false;
let wsGuidesVisible = true;
let wsUndoStack = [];
let wsRedoStack = [];
let wsAutoSaveTimer = null;
let wsAIChatHistory = [];
let wsAISampleBase64 = null;
let wsAISampleMime = null;

/* Supabase Init (Placeholder - user must provide keys) */
let supabase = null;
const SB_URL = localStorage.getItem('me_sb_url') || '';
const SB_KEY = localStorage.getItem('me_sb_key') || '';
if(SB_URL && SB_KEY) {
  try { supabase = supabase.createClient(SB_URL, SB_KEY); } catch(e) { console.error('SB Init Error:', e); }
}

/* ── UTILITIES & PERSISTENCE ── */
const loadAll = () => {
  try {
    const data = localStorage.getItem('me_subs');
    return data ? JSON.parse(data) : [];
  } catch(e) { return []; }
};
const saveAll = (data) => {
  localStorage.setItem('me_subs', JSON.stringify(data));
  dbSave('me_subs', data);
};

const loadLsSettings = () => {
  try {
    const data = localStorage.getItem('me_ls_settings');
    if(data) lsSettings = JSON.parse(data);
    return lsSettings;
  } catch(e) { return lsSettings; }
};

const saveLsSettingsToStorage = (s) => {
  localStorage.setItem('me_ls_settings', JSON.stringify(s));
};

/* Cloud Sync - Database Layer */
async function dbSave(key, data) {
  if(!supabase) return;
  try {
    const { error } = await supabase.from('magazine_data').upsert({ key: key, data: data, updated_at: new Date() });
    if(error) throw error;
    showSyncStatus('ok', 'Cloud synced');
  } catch(e) {
    console.warn('Cloud Save Error:', e.message);
    showSyncStatus('err', 'Cloud offline');
  }
}

async function dbSaveSettings(key, data) {
  if(!supabase) return;
  try {
    const { error } = await supabase.from('magazine_settings').upsert({ key: key, value: data, updated_at: new Date() });
    if(error) throw error;
  } catch(e) { console.warn('Settings Sync Error:', e.message); }
}

async function initCloudSync() {
  if(!supabase) return;
  showSyncStatus('syncing', 'Fetching cloud data...');
  try {
    const { data: subsData } = await supabase.from('magazine_data').select('data').eq('key', 'me_subs').single();
    if(subsData) {
      localStorage.setItem('me_subs', JSON.stringify(subsData.data));
      subs = subsData.data;
    }
    const { data: settingsData } = await supabase.from('magazine_settings').select('key, value');
    if(settingsData) {
      settingsData.forEach(s => {
        if(s.key === 'ls_settings') {
          lsSettings = s.value;
          localStorage.setItem('me_ls_settings', JSON.stringify(s.value));
        }
        if(s.key === 'section_order') sectionOrder = s.value;
        if(s.key === 'label_overrides') labelOverrides = s.value;
        if(s.key === 'form_config') fieldOverrides = s.value;
      });
    }
    showSyncStatus('ok', 'Cloud ready');
  } catch(e) {
    console.warn('Cloud Sync Error:', e.message);
    showSyncStatus('err', 'Cloud error');
  }
}

function showSyncStatus(status, msg) {
  const bar = document.getElementById('syncBar');
  const dot = document.getElementById('syncDot');
  const txt = document.getElementById('syncMsg');
  if(!bar || !dot || !txt) return;
  bar.classList.add('visible');
  dot.className = 'sync-dot ' + status;
  txt.textContent = msg;
  if(status === 'ok') setTimeout(() => bar.classList.remove('visible'), 3000);
}

/* ── NAVIGATION ── */
function goLanding() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('viewLanding').classList.add('active');
  currentView = 'landing';
  renderLandingCards();
}

function openForm(key) {
  if(!CATEGORIES[key]) return;
  currentForm = key;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('viewForm').classList.add('active');
  
  const cat = CATEGORIES[key];
  document.getElementById('formTag').textContent = cat.tag;
  document.getElementById('formTitle').textContent = cat.label;
  document.getElementById('formSubtitle').textContent = cat.desc;
  
  renderFormFields(key);
}

/* ── FORM RENDERING ── */
function getEffectiveFields(key) {
  if(fieldOverrides[key]) return fieldOverrides[key];
  if(key === 'teachers') return DEFAULT_FIELDS.teachers;
  if(['primary5', 'jss3', 'ss3'].includes(key)) return DEFAULT_FIELDS.students;
  if(['speeches', 'academic', 'appreciation'].includes(key)) return DEFAULT_FIELDS.official;
  if(['events', 'gallery'].includes(key)) return DEFAULT_FIELDS.media;
  return DEFAULT_FIELDS.generic;
}

function renderFormFields(key) {
  const container = document.getElementById('formContainer');
  container.innerHTML = '';
  
  const fields = getEffectiveFields(key);
  
  /* Section: Profile Photo (if not media category) */
  if(!['events', 'gallery'].includes(key)) {
    const photoCard = document.createElement('div');
    photoCard.className = 'f-card';
    photoCard.innerHTML = `
      <div class="f-card-title">Profile Portrait</div>
      <div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()">
        <input type="file" id="photoInput" accept="image/*" onchange="handlePhotoSelect(event)"/>
        <div id="photoPrompt">
          <span class="photo-drop-icon">👤</span>
          <h3>Upload your portrait</h3>
          <p>JPG or PNG, max 5MB. Clear face view recommended.</p>
        </div>
        <div id="photoPreviewWrap" class="photo-preview-wrap">
          <img id="photoPreview" src=""/>
          <span class="photo-filename" id="photoName">file.jpg</span>
          <button class="photo-change">Change photo</button>
        </div>
      </div>
      <div class="photo-reqs">
        <p>• High resolution (at least 1000px)<br/>• Uniform/Official background preferred<br/>• No filters or excessive editing</p>
      </div>
    `;
    container.appendChild(photoCard);
  }

  /* Section: Details */
  const detailsCard = document.createElement('div');
  detailsCard.className = 'f-card';
  detailsCard.innerHTML = `<div class="f-card-title">Information Details</div>`;
  
  fields.forEach(f => {
    const fieldDiv = document.createElement('div');
    fieldDiv.className = 'field';
    fieldDiv.id = `field_${f.id}`;
    
    let inputHtml = '';
    if(f.type === 'textarea') {
      inputHtml = `<textarea id="input_${f.id}" placeholder="${f.placeholder || ''}" class="${f.id==='address'||f.id==='content'||f.id==='parting_words'?'long':''}"></textarea>`;
    } else if(f.type === 'select') {
      const options = (f.options || '').split('\n').map(o => `<option value="${o.trim()}">${o.trim()}</option>`).join('');
      inputHtml = `<select id="input_${f.id}">${options}</select>`;
    } else {
      inputHtml = `<input type="${f.type}" id="input_${f.id}" placeholder="${f.placeholder || ''}"/>`;
    }

    fieldDiv.innerHTML = `
      <label>${f.label}${f.required?' <span class="req">*</span>':''}</label>
      ${inputHtml}
      <div class="field-err">This field is required</div>
    `;
    detailsCard.appendChild(fieldDiv);
  });
  
  container.appendChild(detailsCard);

  /* Section: Bulk Gallery (only for gallery/events) */
  if(['events', 'gallery'].includes(key)) {
    const galleryCard = document.createElement('div');
    galleryCard.className = 'f-card';
    galleryCard.innerHTML = `
      <div class="f-card-title">Event Photos</div>
      <div class="gallery-tabs">
        <button class="gallery-tab active" onclick="setGalleryTab('bulk')">Bulk Upload</button>
        <button class="gallery-tab" onclick="setGalleryTab('manual')">Manual Entry</button>
      </div>
      <div id="galleryBulkPane" class="gallery-tab-pane active">
        <div class="bulk-drop-zone" onclick="document.getElementById('bulkInput').click()">
          <input type="file" id="bulkInput" multiple accept="image/*" onchange="handleBulkSelect(event)"/>
          <h3>Drop multiple photos here</h3>
          <p>Select up to 20 high-quality event photos at once.</p>
        </div>
        <div id="bulkGrid" class="bulk-grid"></div>
      </div>
      <div id="galleryManualPane" class="gallery-tab-pane">
        <div class="field">
          <label>Photo Caption</label>
          <input type="text" id="manualCaption" placeholder="What is happening in this photo?"/>
        </div>
        <div class="photo-drop" onclick="document.getElementById('manualPhotoInput').click()">
           <input type="file" id="manualPhotoInput" accept="image/*" onchange="handleManualPhoto(event)"/>
           <span id="manualPrompt">📸 Click to upload single photo</span>
           <img id="manualPreview" style="display:none;width:100%;max-height:150px;object-fit:contain;"/>
        </div>
      </div>
    `;
    container.appendChild(galleryCard);
  }

  /* Submit Button */
  const btnDiv = document.createElement('div');
  btnDiv.style.marginTop = '2rem';
  btnDiv.innerHTML = `<button class="submit-btn" onclick="submitForm()">Submit to Magazine 🚀</button>`;
  container.appendChild(btnDiv);
}

/* ── FORM LOGIC ── */
let currentPhotoBase64 = null;
let bulkPhotos = [];

function handlePhotoSelect(event) {
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    currentPhotoBase64 = e.target.result;
    document.getElementById('photoPrompt').style.display = 'none';
    document.getElementById('photoPreviewWrap').style.display = 'flex';
    document.getElementById('photoPreview').src = e.target.result;
    document.getElementById('photoName').textContent = file.name;
    document.getElementById('photoDrop').classList.add('uploaded');
  };
  reader.readAsDataURL(file);
}

function handleBulkSelect(event) {
  const files = Array.from(event.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      bulkPhotos.push({ data: e.target.result, caption: '' });
      renderBulkGrid();
    };
    reader.readAsDataURL(file);
  });
}

function renderBulkGrid() {
  const grid = document.getElementById('bulkGrid');
  if(!grid) return;
  grid.innerHTML = bulkPhotos.map((p, i) => `
    <div class="bulk-thumb">
      <img src="${p.data}"/>
      <button class="bulk-thumb-rm" onclick="removeBulk(${i})">×</button>
      <div class="bulk-thumb-cap">
        <input type="text" placeholder="Caption..." oninput="bulkPhotos[${i}].caption=this.value"/>
      </div>
    </div>
  `).join('');
}

function removeBulk(i) { bulkPhotos.splice(i, 1); renderBulkGrid(); }

async function submitForm() {
  const fields = getEffectiveFields(currentForm);
  const submissionData = {};
  let hasErr = false;

  fields.forEach(f => {
    const val = document.getElementById(`input_${f.id}`)?.value.trim();
    if(f.required && !val) {
      document.getElementById(`field_${f.id}`).classList.add('has-error');
      hasErr = true;
    } else {
      document.getElementById(`field_${f.id}`)?.classList.remove('has-error');
      submissionData[f.id] = { label: f.label, value: val };
    }
  });

  if(hasErr) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const sub = {
    id: 'sub_' + Date.now(),
    category: currentForm,
    data: submissionData,
    photoData: currentPhotoBase64,
    photos: bulkPhotos,
    status: 'pending',
    timestamp: new Date().toISOString(),
    reviewerNote: ''
  };

  /* UI Feedback */
  document.getElementById('formContainer').style.display = 'none';
  document.getElementById('successWrap').style.display = 'block';
  document.getElementById('successUploading').style.display = 'block';
  document.getElementById('successDone').style.display = 'none';

  /* Progress Simulation */
  let prog = 0;
  const interval = setInterval(() => {
    prog += 10;
    document.getElementById('uploadProgressBar').style.width = prog + '%';
    if(prog >= 100) {
      clearInterval(interval);
      document.getElementById('successUploading').style.display = 'none';
      document.getElementById('successDone').style.display = 'block';
    }
  }, 200);

  /* Save */
  subs = loadAll();
  subs.push(sub);
  saveAll(subs);
  
  /* Reset */
  currentPhotoBase64 = null;
  bulkPhotos = [];
}

/* ── PIN SECURITY ── */
let pinBuffer = '';
let targetRole = '';

function openPIN(role) {
  targetRole = role;
  pinBuffer = '';
  document.getElementById('pinOverlay').className = 'pin-overlay active ' + (role==='editor'?'editor':'');
  document.getElementById('pinModeBadge').textContent = role.toUpperCase();
  document.getElementById('pinTitle').textContent = role==='unified'?'Super Access':'Enter PIN';
  updatePinDots();
}

function closePIN() {
  document.getElementById('pinOverlay').classList.remove('active');
}

function pinKey(n) {
  if(pinBuffer.length < 4) {
    pinBuffer += n;
    updatePinDots();
    if(pinBuffer.length === 4) {
      setTimeout(verifyPIN, 200);
    }
  }
}

function pinDel() { pinBuffer = pinBuffer.slice(0, -1); updatePinDots(); }

function updatePinDots() {
  for(let i=0; i<4; i++) {
    document.getElementById('pd'+i).className = 'pin-dot' + (i < pinBuffer.length ? ' filled' : '');
  }
}

function verifyPIN() {
  const adminPin = localStorage.getItem('me_pin_admin') || '1234';
  const editorPin = localStorage.getItem('me_pin_editor') || '0000';
  
  let valid = false;
  if(targetRole === 'admin' && pinBuffer === adminPin) valid = true;
  if(targetRole === 'editor' && pinBuffer === editorPin) valid = true;
  if(targetRole === 'unified' && (pinBuffer === adminPin || pinBuffer === editorPin)) {
     targetRole = pinBuffer === adminPin ? 'admin' : 'editor';
     valid = true;
  }

  if(valid) {
    closePIN();
    if(targetRole === 'admin') openAdmin();
    else openEditor();
  } else {
    document.querySelectorAll('.pin-dot').forEach(d => d.classList.add('error'));
    document.getElementById('pinErr').textContent = 'Incorrect Security PIN';
    setTimeout(() => {
      pinBuffer = '';
      updatePinDots();
      document.getElementById('pinErr').textContent = '';
    }, 600);
  }
}

/* ── EDITOR DASHBOARD ── */
function openEditor() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('viewEditor').classList.add('active');
  renderEditor();
}

function setEditorCategory(cat) {
  editorCategory = cat;
  document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('etab-'+cat).classList.add('active');
  
  if(cat === 'editorial') {
    document.getElementById('editorModeList').style.display = 'none';
    document.getElementById('editorModeNote').style.display = 'block';
    loadEditorialNote();
  } else {
    document.getElementById('editorModeList').style.display = 'block';
    document.getElementById('editorModeNote').style.display = 'none';
    renderEditor();
  }
}

function renderEditor() {
  const list = document.getElementById('editorSubList');
  const allSubs = loadAll();
  
  /* Filter */
  let filtered = [];
  if(editorCategory === 'all') filtered = allSubs;
  else filtered = allSubs.filter(s => s.status === editorCategory);
  
  /* Sort newest first */
  filtered.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  /* Update Counts */
  document.getElementById('ecount-pending').textContent = allSubs.filter(s=>s.status==='pending').length;
  document.getElementById('ecount-approved').textContent = allSubs.filter(s=>s.status==='approved').length;
  document.getElementById('ecount-rejected').textContent = allSubs.filter(s=>s.status==='rejected').length;
  document.getElementById('ecount-all').textContent = allSubs.length;

  if(!filtered.length) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">📥</div>
      <h3>No ${editorCategory} submissions</h3>
      <p>Items submitted by students and staff will appear here for your review.</p>
    </div>`;
    return;
  }

  list.innerHTML = filtered.map(s => renderSubCard(s, 'editor')).join('');
}

function renderSubCard(s, mode) {
  const cat = CATEGORIES[s.category] || { label: s.category, tag: 'Other' };
  const initials = (s.data.name?.value || '?').split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  
  const fieldsHtml = Object.keys(s.data).map(k => {
    const f = s.data[k];
    const isLong = (f.value || '').length > 60;
    return `<div class="sub-field ${isLong?'wide':''}">
      <div class="sub-field-lbl">${f.label}</div>
      <div class="sub-field-val" id="val_${s.id}_${k}">${esc(f.value)}</div>
    </div>`;
  }).join('');

  const bulkHtml = s.photos?.length ? `
    <div class="sub-field wide">
      <div class="sub-field-lbl">Attached Gallery (${s.photos.length} photos)</div>
      <div class="multi-photo-grid">
        ${s.photos.map(p => `<div class="multi-photo-thumb"><img src="${p.data}" title="${p.caption||''}"/></div>`).join('')}
      </div>
    </div>
  ` : '';

  let actions = '';
  if(mode === 'editor') {
    if(s.status === 'pending') {
      actions = `
        <button class="btn btn-ai" onclick="proofreadSubmission('${s.id}')">✦ AI Proofread</button>
        <button class="btn btn-mint" onclick="updateStatus('${s.id}', 'approved')">Approve</button>
        <button class="btn btn-danger" onclick="updateStatus('${s.id}', 'rejected')">Reject</button>
      `;
    } else {
      actions = `<span class="status-badge status-${s.status}">${s.status}</span>`;
      if(s.status !== 'finalized') actions += `<button class="btn" style="margin-left:10px" onclick="updateStatus('${s.id}', 'pending')">Revert to Pending</button>`;
    }
  } else {
    /* Admin Mode */
    if(s.status === 'approved') {
      actions = `<button class="btn btn-primary" onclick="updateStatus('${s.id}', 'finalized')">Finalize for Print</button>`;
    } else if(s.status === 'finalized') {
      actions = `<span class="status-badge status-finalized">Ready for Print</span> <button class="btn" style="margin-left:10px" onclick="updateStatus('${s.id}', 'approved')">Unlock</button>`;
    }
    actions += `<button class="btn btn-danger" onclick="deleteSub('${s.id}')" style="margin-left:auto">Delete</button>`;
  }

  return `
    <div class="sub-card cat-${s.category}" id="card_${s.id}">
      <div class="sub-top">
        ${s.photoData ? `<img src="${s.photoData}" class="sub-avatar"/>` : `<div class="sub-avatar-init">${initials}</div>`}
        <div class="sub-info">
          <div class="sub-name">${s.data.name?.value || s.data.title?.value || 'Untitled Entry'}</div>
          <div class="sub-meta">
            <span class="cat-pill">${cat.label}</span>
            <span>${new Date(s.timestamp).toLocaleDateString()}</span>
          </div>
        </div>
        <div style="margin-left:auto">
          <span class="status-badge status-${s.status}">${s.status}</span>
        </div>
      </div>
      <div class="sub-fields">
        ${fieldsHtml}
        ${bulkHtml}
      </div>
      <div id="proofread_${s.id}" class="proofread-panel" style="display:none;"></div>
      <div class="sub-actions">
        ${actions}
      </div>
    </div>
  `;
}

function updateStatus(id, status) {
  const all = loadAll();
  const sub = all.find(s => s.id === id);
  if(!sub) return;
  
  if(status === 'rejected') {
    if(!confirm('Rejecting this submission will permanently remove it from the system. Continue?')) return;
    const idx = all.findIndex(s => s.id === id);
    all.splice(idx, 1);
  } else {
    sub.status = status;
  }
  
  saveAll(all);
  if(currentView === 'admin') renderAdmin();
  else renderEditor();
}

function deleteSub(id) {
  if(!confirm('Permanently delete this submission?')) return;
  const all = loadAll();
  const idx = all.findIndex(s => s.id === id);
  if(idx > -1) {
    all.splice(idx, 1);
    saveAll(all);
    renderAdmin();
  }
}

/* ── AI PROOFREADING ── */
async function proofreadSubmission(id) {
  const panel = document.getElementById('proofread_' + id);
  panel.innerHTML = `<div class="proofread-loading">✦ AI is analyzing text for grammar, spelling, and Nigerian context...</div>`;
  panel.style.display = 'block';

  const all = loadAll();
  const sub = all.find(s => s.id === id);
  if(!sub) return;

  const textToProof = Object.keys(sub.data)
    .filter(k => sub.data[k].value && sub.data[k].value.length > 10)
    .map(k => `[${k}]: ${sub.data[k].value}`)
    .join('\n');

  if(!textToProof) {
    panel.innerHTML = `<div class="proofread-result" style="color:var(--ink3)">No substantial text to proofread.</div>`;
    return;
  }

  const apiKey = lsSettings.apiKey || localStorage.getItem('me_ai_key');
  if(!apiKey) {
    panel.innerHTML = `<div class="proofread-result" style="color:var(--red)">No API Key found. Production Admin > Settings > AI Configuration.</div>`;
    return;
  }

  try {
    const prompt = `You are a professional proofreader for a school magazine in Nigeria. 
    Correct grammar, spelling, and punctuation while maintaining the author's voice. 
    Pay attention to Nigerian names and local context.
    Return the corrected text for each field in this format: [FIELD_ID]: Corrected text...
    
    Text to proofread:
    ${textToProof}`;

    const result = await callOpenRouter(prompt, apiKey);
    
    /* Parse Results */
    const lines = result.split('\n');
    let html = `<div class="proofread-panel-title">AI Proofreading Results</div><div class="proofread-result">`;
    lines.forEach(line => {
      const match = line.match(/^\[(.*?)\]:\s*(.*)/);
      if(match) {
        const fieldId = match[1];
        const corrected = match[2];
        html += `<div style="margin-bottom:12px;">
          <strong>${fieldId.toUpperCase()}:</strong><br/>
          ${corrected}
          <button class="btn" style="display:block;margin-top:5px;padding:2px 8px;font-size:10px" onclick="applyProofread('${id}', '${fieldId}', \`${corrected.replace(/`/g, '\\`')}\`)">Apply Correction</button>
        </div>`;
      }
    });
    html += `</div><button class="btn" style="width:100%;margin-top:10px" onclick="this.parentElement.style.display='none'">Dismiss</button>`;
    panel.innerHTML = html;

  } catch(e) {
    panel.innerHTML = `<div class="proofread-result" style="color:var(--red)">AI Error: ${e.message}</div>`;
  }
}

async function callOpenRouter(prompt, apiKey) {
  const resp = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-Title": "MagicEditor Pro"
    },
    body: JSON.stringify({
      "model": "google/gemini-2.0-flash-001",
      "messages": [{ "role": "user", "content": prompt }]
    })
  });
  const data = await resp.json();
  if(data.error) throw new Error(data.error.message);
  return data.choices[0].message.content;
}

function applyProofread(subId, fieldId, text) {
  const all = loadAll();
  const sub = all.find(s => s.id === subId);
  if(sub && sub.data[fieldId]) {
    sub.data[fieldId].value = text;
    saveAll(all);
    renderEditor();
    alert('Correction applied to ' + fieldId);
  }
}

/* ── PRODUCTION ADMIN ── */
function openAdmin() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('viewAdmin').classList.add('active');
  renderAdmin();
  renderAdminTabs();
}

function renderAdminTabs() {
  const container = document.getElementById('dynamicAdminTabs');
  container.innerHTML = `
    <button class="admin-tab ${adminCategory==='teachers'?'active':''}" onclick="setAdminCategory('teachers')">Submissions</button>
    <button class="admin-tab ${adminCategory==='workspace'?'active':''}" onclick="openWorkspace()">Layout Studio</button>
    <button class="admin-tab ${adminCategory==='links'?'active':''}" onclick="setAdminCategory('links')">Share Links</button>
    <button class="admin-tab ${adminCategory==='settings'?'active':''}" onclick="setAdminCategory('settings')">Settings</button>
  `;
}

function setAdminCategory(cat) {
  adminCategory = cat;
  renderAdminTabs();
  
  document.getElementById('adminModeSubs').style.display = cat === 'teachers' ? 'block' : 'none';
  document.getElementById('adminModeShareLinks').style.display = cat === 'links' ? 'block' : 'none';
  document.getElementById('adminModeSettings').style.display = cat === 'settings' ? 'block' : 'none';
  
  if(cat === 'links') renderShareLinks();
  if(cat === 'settings') renderSettings();
}

function renderAdmin() {
  const list = document.getElementById('adminSubList');
  const allSubs = loadAll();
  const filterStatus = document.getElementById('filterStatus')?.value || 'all';
  
  let filtered = allSubs;
  if(filterStatus !== 'all') filtered = allSubs.filter(s => s.status === filterStatus);
  
  /* Update Stats */
  document.getElementById('statTotal').textContent = allSubs.length;
  document.getElementById('statPending').textContent = allSubs.filter(s=>s.status==='pending').length;
  document.getElementById('statApproved').textContent = allSubs.filter(s=>s.status==='approved').length;
  document.getElementById('statFinalized').textContent = allSubs.filter(s=>s.status==='finalized').length;

  if(!filtered.length) {
    list.innerHTML = `<div class="empty-state"><h3>No matching submissions</h3></div>`;
    return;
  }

  list.innerHTML = filtered.map(s => renderSubCard(s, 'admin')).join('');
}

function renderShareLinks() {
  const container = document.getElementById('shareLinksContainer');
  const baseUrl = window.location.origin + window.location.pathname;
  
  container.innerHTML = CATEGORY_KEYS.map(k => {
    const c = CATEGORIES[k];
    const url = `${baseUrl}?form=${k}`;
    return `
      <div class="share-link-row">
        <div class="share-link-icon">${c.icon}</div>
        <div class="share-link-body">
          <div class="share-link-label">${c.label} Form</div>
          <div class="share-link-desc">Share with ${c.tag} for their submissions.</div>
          <div class="share-link-url">${url}</div>
        </div>
        <button class="btn" onclick="copyUrl('${url}')">Copy URL</button>
      </div>
    `;
  }).join('');
}

function copyUrl(url) {
  navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
}

/* ── SETTINGS & CUSTOMIZATION ── */
function renderSettings() {
  document.getElementById('setAdminPin').value = localStorage.getItem('me_pin_admin') || '1234';
  document.getElementById('setEditorPin').value = localStorage.getItem('me_pin_editor') || '0000';
  document.getElementById('settingsApiKey').value = lsSettings.apiKey || '';
  
  const picker = document.getElementById('custCatPicker');
  picker.innerHTML = CATEGORY_KEYS.map(k => `<option value="${k}">${CATEGORIES[k].label}</option>`).join('');
  renderFieldCustomizer();
}

function renderFieldCustomizer() {
  const catKey = document.getElementById('custCatPicker').value;
  const list = document.getElementById('custFieldsList');
  const fields = getEffectiveFields(catKey);
  
  list.innerHTML = fields.map((f, i) => `
    <div class="cust-field-row ${f.hidden?'is-hidden':''}">
      <div class="cust-field-main">
        <div class="cust-field-label">${f.label} ${f.required?'*':''}</div>
        <div class="cust-field-meta"><span class="cust-field-type-pill">${f.type}</span> ID: ${f.id}</div>
      </div>
      <div class="cust-toggle-group">
        <button class="cust-chip ${f.required?'on':''}" onclick="toggleFieldProp('${catKey}', ${i}, 'required')">Required</button>
        <button class="cust-chip ${!f.hidden?'on':''}" onclick="toggleFieldProp('${catKey}', ${i}, 'hidden')">Visible</button>
        <button class="cust-mini-btn" onclick="moveField('${catKey}', ${i}, -1)">↑</button>
        <button class="cust-mini-btn" onclick="moveField('${catKey}', ${i}, 1)">↓</button>
        <button class="cust-mini-btn warn" onclick="removeField('${catKey}', ${i})">×</button>
      </div>
    </div>
  `).join('');
  document.getElementById('custActions').style.display = 'flex';
}

function toggleFieldProp(cat, idx, prop) {
  const fields = [...getEffectiveFields(cat)];
  fields[idx][prop] = !fields[idx][prop];
  fieldOverrides[cat] = fields;
  localStorage.setItem('me_form_config', JSON.stringify(fieldOverrides));
  dbSaveSettings('form_config', fieldOverrides);
  renderFieldCustomizer();
}

function openCreateFormModal(){
  document.getElementById('createFormModal').classList.add('active');
}
function closeCreateFormModal(){
  document.getElementById('createFormModal').classList.remove('active');
}
function saveNewForm(){
  const id=document.getElementById('crfId').value.trim();
  const name=document.getElementById('crfName').value.trim();
  const icon=document.getElementById('crfIcon').value.trim()||'📝';
  const tag=document.getElementById('crfTag').value.trim()||'General';
  const sub=document.getElementById('crfSubtitle').value.trim();
  if(!id||!name)return alert('ID and Name required');
  if(CATEGORIES[id])return alert('ID already exists');
  
  CATEGORIES[id]={label:name,icon,tag,desc:sub,color:'mint'};
  CATEGORY_KEYS.push(id);
  fieldOverrides[id]=[...DEFAULT_FIELDS.generic];
  
  localStorage.setItem('me_cfg', JSON.stringify(CATEGORIES));
  dbSaveSettings('categories', CATEGORIES);
  
  closeCreateFormModal();
  renderSettings();
}

/* ── WORKSPACE / LAYOUT STUDIO ── */
function openWorkspace() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('viewWorkspace').classList.add('active');
  loadLsSettings();
  wsGeneratePreview();
  wsRenderColorPanel();
  wsRenderFontPanel();
  wsStartAutoSave();
}

function closeWorkspace() {
  wsClearAutoSave();
  openAdmin();
}

function lsTab(tab) {
  document.querySelectorAll('.ws-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ws-panel').forEach(p => p.classList.remove('active')).style.display = 'none';
  document.getElementById('lstab-' + tab).classList.add('active');
  const panel = document.getElementById('lspanel-' + tab);
  panel.classList.add('active');
  panel.style.display = 'block';
}

function wsGeneratePreview() {
  const finalized = loadAll().filter(s => s.status === 'finalized');
  wsPages = [];
  
  /* 1. Cover Page */
  wsPages.push({ type: 'cover', label: 'Front Cover', items: [] });
  
  /* 2. TOC & Editorial */
  wsPages.push({ type: 'toc', label: 'Contents', items: [] });
  wsPages.push({ type: 'editorial', label: 'Editorial Note', items: [] });
  
  /* 3. Dynamic Sections */
  sectionOrder.forEach(sec => {
    if(!sec.active) return;
    const items = finalized.filter(s => s.category === sec.key);
    if(!items.length) return;
    
    let perPage = 1;
    if(sec.key === 'teachers') perPage = lsSettings.teachersPerPage || 6;
    else if(['primary5', 'jss3', 'ss3'].includes(sec.key)) perPage = lsSettings.studentsPerPage || 12;
    else if(['gallery', 'events'].includes(sec.key)) perPage = lsSettings.galleryPerPage || 16;
    else if(['creative', 'motivational'].includes(sec.key)) perPage = lsSettings.creativePerPage || 4;

    for(let i=0; i<items.length; i+=perPage) {
      wsPages.push({
        type: sec.layout || 'grid',
        sec: sec,
        label: `${sec.label} - Pg ${Math.floor(i/perPage)+1}`,
        items: items.slice(i, i+perPage)
      });
    }
  });

  /* 4. Back Cover */
  wsPages.push({ type: 'backcover', label: 'Back Cover', items: [] });
  
  wsRenderPageList();
  wsRenderCurrentPage();
  wsUpdateStatus();
}

function wsRenderPageList() {
  const list = document.getElementById('wsPageList');
  list.innerHTML = wsPages.map((p, i) => `
    <div class="ws-page-item ${wsPageIdx===i?'active':''}" onclick="wsSetPage(${i})">
      <div class="ws-page-thumb">${i+1}</div>
      <div class="ws-page-info">
        <div class="ws-page-info-name">${p.label}</div>
        <div class="ws-page-info-meta">${p.type.toUpperCase()}</div>
      </div>
    </div>
  `).join('');
}

function wsSetPage(i) { wsPageIdx = i; wsRenderPageList(); wsRenderCurrentPage(); }

function wsRenderCurrentPage() {
  const container = document.getElementById('wsPageContainer');
  const page = wsPages[wsPageIdx];
  if(!page) return;
  
  const spreadClass = wsSpreadMode ? 'ws-spread' : '';
  container.innerHTML = `<div class="mag-page ${wsGuidesVisible?'ws-guides':''}" id="wsActivePage">
    <div class="ws-bleed"></div>
    <div class="ws-safe"></div>
    <div class="ws-crop-tl"></div><div class="ws-crop-tr"></div>
    <div class="ws-crop-bl"></div><div class="ws-crop-br"></div>
    <div class="mag-page-inner" style="background:${lsSettings.pageBg}; color:${lsSettings.textColor}; font-family:${lsSettings.bodyFont};">
       ${renderPageContent(page)}
    </div>
  </div>`;
  
  applyLsColors(lsSettings);
}

function renderPageContent(p) {
  const s = lsSettings;
  if(p.type === 'cover') {
    return `<div class="mag-cover">
      <div class="mag-cover-school">${s.schoolName}</div>
      <div class="mag-cover-title" style="font-family:${s.headingFont}">${s.magTitle}</div>
      <div class="mag-cover-meta">${s.edition} • ${s.year}</div>
    </div>`;
  }
  
  if(p.type === 'editorial') {
    const note = JSON.parse(localStorage.getItem('me_editorial_note') || '{"title":"","body":""}');
    return `<div class="mag-editorial">
      <h2 style="font-family:${s.headingFont}">${note.title || 'A Message from the Editor'}</h2>
      <div class="mag-editorial-body">${(note.body || 'Editorial address goes here...').replace(/\n/g,'<br>')}</div>
    </div>`;
  }

  /* Standard Grid Layout */
  const gridClass = `mag-grid-${p.sec?.key || 'default'}`;
  return `<div class="mag-section-header" style="background:${s.color1}; color:#fff;">${p.sec?.label || 'Magazine'}</div>
  <div class="mag-grid ${gridClass}">
    ${p.items.map(it => renderMagItem(it)).join('')}
  </div>`;
}

function renderMagItem(it) {
  const s = lsSettings;
  if(it.category === 'teachers') {
    return `<div class="mag-item teacher-item">
      <img src="${it.photoData || ''}" class="mag-item-photo"/>
      <div class="mag-item-name" style="font-family:${s.headingFont}">${it.data.name?.value}</div>
      <div class="mag-item-subtitle">${it.data.role?.value}</div>
      <div class="mag-item-body">${it.data.address?.value}</div>
    </div>`;
  }
  return `<div class="mag-item">
    ${it.photoData?`<img src="${it.photoData}" class="mag-item-photo"/>`:''}
    <div class="mag-item-name">${it.data.name?.value || it.data.title?.value}</div>
    <div class="mag-item-body">${it.data.parting_words?.value || it.data.content?.value || ''}</div>
  </div>`;
}

function applyLsColors(s) {
  const root = document.documentElement;
  root.style.setProperty('--mag-color1', s.color1);
  root.style.setProperty('--mag-color2', s.color2);
  root.style.setProperty('--mag-color3', s.color3);
}

/* ── Workspace Controls ── */
function wsSetZoom(z) { wsZoom = Math.max(20, Math.min(200, z)); document.getElementById('wsZoomLevel').textContent = wsZoom + '%'; document.getElementById('wsActivePage').style.transform = `scale(${wsZoom/100})`; }
function wsToggleGuides() { wsGuidesVisible = !wsGuidesVisible; wsRenderCurrentPage(); }
function wsToggleSpread() { 
  wsSpreadMode = !wsSpreadMode; 
  document.getElementById('wsSpreadBtn').textContent = wsSpreadMode ? '⊞ Single' : '⊞ Spread';
  wsRenderCurrentPage();
}

/* ── Sidebar Panel Toggle ── */
function wsTogglePanel(id){document.getElementById(id)?.classList.toggle('collapsed');}

/* ── Assets Panel ── */
function wsRenderAssets(){
  const grid=document.getElementById('wsAssetGrid');if(!grid)return;
  const empty=document.getElementById('wsAssetEmpty');
  const finalized=loadAll().filter(s=>s.status==='finalized');
  const photos=[];
  finalized.forEach(s=>{
    if(s.photoData)photos.push(s.photoData);
    if(Array.isArray(s.photos))s.photos.forEach(p=>{if(p.data)photos.push(p.data);});
  });
  if(!photos.length){grid.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  grid.innerHTML=photos.slice(0,30).map((url,i)=>`<div class="ws-asset-thumb" title="Asset ${i+1}"><img src="${url}" alt="Asset ${i+1}"/></div>`).join('');
}

/* ── Color Panel ── */
function wsRenderColorPanel(){
  if(!document.getElementById('wsColorPanel'))return;
  const c=document.getElementById('wsColorPanel');if(!c)return;
  const s=lsSettings;
  const colors=[
    {key:'color1',label:'Primary',val:s.color1||'#1a2744'},
    {key:'color2',label:'Accent',val:s.color2||'#7dd4a8'},
    {key:'color3',label:'Highlight',val:s.color3||'#8b1a1a'},
    {key:'pageBg',label:'Page Background',val:s.pageBg||'#ffffff'},
    {key:'textColor',label:'Text Color',val:s.textColor||'#1c1c1e'}
  ];
  c.innerHTML=colors.map(cl=>`<div class="ws-color-row">
    <input type="color" class="ws-color-swatch" value="${cl.val}" onchange="wsUpdateColor('${cl.key}',this.value)" style="background:${cl.val};"/>
    <span class="ws-color-label">${cl.label}</span>
    <span class="ws-color-val">${cl.val}</span>
  </div>`).join('');
}
function wsUpdateColor(key,val){
  wsUndoPush();
  lsSettings[key]=val;
  saveLsSettingsToStorage(lsSettings);
  applyLsColors(lsSettings);
  wsRenderColorPanel();
  wsRenderCurrentPage();
  wsMarkDirty();
}

/* ── Font Panel ── */
function wsRenderFontPanel(){
  if(!document.getElementById('wsFontSize'))return;
  const s=lsSettings;
  const hf=document.getElementById('wsHeadingFont');if(hf)hf.value=s.headingFont||"'Playfair Display',serif";
  const bf=document.getElementById('wsBodyFont');if(bf)bf.value=s.bodyFont||"'Crimson Text',serif";
  const fs=document.getElementById('wsFontSize');if(fs)fs.value=s.fontSize||'11px';
}
function wsUpdateFont(key,val){
  wsUndoPush();
  lsSettings[key]=val;
  saveLsSettingsToStorage(lsSettings);
  wsRenderCurrentPage();
  wsMarkDirty();
}

/* ── Undo / Redo ── */
function wsUndoPush(){wsUndoStack.push(JSON.stringify(lsSettings));if(wsUndoStack.length>30)wsUndoStack.shift();wsRedoStack=[];}
function wsUndo(){
  if(!wsUndoStack.length)return;
  wsRedoStack.push(JSON.stringify(lsSettings));
  lsSettings=JSON.parse(wsUndoStack.pop());
  saveLsSettingsToStorage(lsSettings);
  applyLsColors(lsSettings);
  wsRenderColorPanel();wsRenderFontPanel();wsRenderCurrentPage();
}
function wsRedo(){
  if(!wsRedoStack.length)return;
  wsUndoStack.push(JSON.stringify(lsSettings));
  lsSettings=JSON.parse(wsRedoStack.pop());
  saveLsSettingsToStorage(lsSettings);
  applyLsColors(lsSettings);
  wsRenderColorPanel();wsRenderFontPanel();wsRenderCurrentPage();
}

/* ── Autosave ── */
function wsStartAutoSave(){wsClearAutoSave();wsAutoSaveTimer=setInterval(()=>{wsAutoSave();},30000);}
function wsClearAutoSave(){if(wsAutoSaveTimer){clearInterval(wsAutoSaveTimer);wsAutoSaveTimer=null;}}
function wsAutoSave(){
  saveLsSettingsToStorage(lsSettings);
  dbSaveSettings('ls_settings',lsSettings);
  const ind=document.getElementById('wsSaveIndicator');
  if(ind){ind.textContent='● Saved';ind.style.color='var(--ws-green)';ind.style.animation='none';setTimeout(()=>{ind.style.animation='';},100);}
}
function wsMarkDirty(){
  const ind=document.getElementById('wsSaveIndicator');
  if(ind){ind.textContent='○ Unsaved';ind.style.color='var(--ws-yellow)';}
}

/* ── AI Terminal ── */
function wsAIAddMsg(role,text,html){
  wsAIChatHistory.push({role,text:text||'',html:html||'',time:new Date().toLocaleTimeString()});
  wsAIRenderChat();
}
function wsAIRenderChat(){
  const box=document.getElementById('wsAIChat');if(!box)return;
  if(!wsAIChatHistory.length){box.innerHTML='<div class="ws-ai-msg system">Start a conversation — describe what you want to change.</div>';return;}
  box.innerHTML=wsAIChatHistory.map(m=>{
    const content=m.html||esc(m.text);
    if(m.role==='system')return `<div class="ws-ai-msg system">${content}</div>`;
    return `<div class="ws-ai-msg ${m.role}">${content}<div class="ws-ai-msg-time">${m.time}</div></div>`;
  }).join('');
  box.scrollTop=box.scrollHeight;
}
function wsAIQuick(cmd){document.getElementById('wsAIInput').value=cmd;wsAISend();}

/* ── AI Sample Upload ── */
function wsAIUploadSample(event){
  const file=event.target.files?.[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    wsAISampleBase64=e.target.result.split(',')[1];
    wsAISampleMime=file.type||'image/jpeg';
    document.getElementById('wsAISampleImg').src=e.target.result;
    document.getElementById('wsAISamplePreview').style.display='block';
    wsAIAddMsg('system','📎 Design sample uploaded — reference it with "Match the uploaded sample style"');
  };
  reader.readAsDataURL(file);
  event.target.value='';
}

/* ── AI Send Message ── */
async function wsAISend(){
  const input=document.getElementById('wsAIInput');
  const query=(input?.value||'').trim();if(!query)return;
  input.value='';
  const s=lsSettings;
  const apiKey=s.apiKey;
  const model=document.getElementById('wsAIModel')?.value||'google/gemini-2.0-flash-001';
  const task=document.getElementById('wsAITask')?.value||'design';

  if(!apiKey){wsAIAddMsg('assistant','','<strong style="color:var(--ws-red);">No API key.</strong> Configure it in Production Admin → Settings → Layout Studio → AI Configuration.');return;}

  wsAIAddMsg('user',query);

  /* Thinking indicator */
  const thinkIdx=wsAIChatHistory.length;
  wsAIChatHistory.push({role:'assistant',text:'',html:'<em style="color:var(--ws-text3);">✦ Thinking…</em>',time:''});
  wsAIRenderChat();

  /* Build context */
  const finalized=loadAll().filter(x=>x.status==='finalized');
  const counts=CATEGORY_KEYS.map(k=>`  ${CATEGORIES[k].label}: ${finalized.filter(x=>x.category===k).length}`).join('\n');
  const ctx=`MAGAZINE: ${s.magTitle||'The Torch'} | ${s.schoolName||'Way To Success Standard Schools'} | ${s.edition||'1st Edition'} ${s.year||'2025/2026'}
FINALIZED CONTENT:\n${counts}
TOTAL FINALIZED: ${finalized.length}
COLOURS: Primary:${s.color1||'#1a2744'} Accent:${s.color2||'#7dd4a8'} Highlight:${s.color3||'#8b1a1a'} PageBG:${s.pageBg||'#fff'} Text:${s.textColor||'#1c1c1e'}
TYPOGRAPHY: Heading:${s.headingFont||'Playfair Display'} Body:${s.bodyFont||'Crimson Text'} Size:${s.fontSize||'11px'}
CURRENT PAGE: ${wsPageIdx+1} of ${wsPages.length} — ${wsPages[wsPageIdx]?.label||'none'}`;

  const taskPrompts={
    design:`You are an AGENT controlling a magazine design system. You MUST directly implement changes by outputting [FORMAT:customCSS:...] and settings JSON blocks in EVERY response. Do NOT just suggest — EXECUTE.

RULES:
1. ALWAYS include a [FORMAT:customCSS:...] block with CSS that directly implements your design changes.
2. ALWAYS include a settings JSON block to change colours, fonts, spacing.
3. Explain what you changed BRIEFLY, then show the implementation.
4. You are the sole design controller — the user has no manual design tools.
5. Make designs PREMIUM: rich colours, elegant typography, professional spacing.
6. For print magazines use CMYK-friendly colours, high contrast, proper margins.`,
    reasoning:'You are a production strategist. Analyze the magazine structure, content balance, page count, and help optimize the overall layout for cost-effective printing. Output settings JSON to implement any changes.',
    proofread:'You are a professional proofreader for a Nigerian school graduation magazine. Check grammar, spelling, punctuation across all finalized content.',
    image:`You are a design analyst AND agent. Analyze the uploaded design sample image, describe its style, then REPLICATE it by outputting [FORMAT:customCSS:...] and settings JSON blocks. Do not just describe — implement the style directly.`
  };

  const messages=[{role:'system',content:`${taskPrompts[task]||taskPrompts.design}

FORMATTING COMMANDS (you MUST include these in every design response):
\u2022 [FORMAT:customCSS:...css...] \u2014 inject CSS to restyle the magazine preview. This is MANDATORY for design tasks.
\u2022 [FORMAT:action:approveAll] \u2014 Approve all pending submissions
\u2022 [FORMAT:action:finalizeCategory:teachers] \u2014 Finalize approved submissions in a category (e.g. teachers, primary5, gallery)
\u2022 [FORMAT:action:setSectionOrder:cover,toc,editorial-note,teachers,...] \u2014 Reorder the magazine sections
\u2022 Target sections: .mag-page[data-category="teachers"], .mag-page[data-category="creative"], etc.
\u2022 Classes: .mag-item, .mag-item-name, .mag-item-subtitle, .mag-item-photo, .mag-item-fields, .mag-item-body
\u2022 Page structure: .mag-page > .mag-page-inner contains all content

SETTINGS JSON (you MUST include this to change layout settings):
\`\`\`settings
{"color1":"#hex","teachersPerPage":9,...}
\`\`\`
Available keys: teachersPerPage, studentsPerPage, galleryPerPage, speechesPerPage, creativePerPage, orientation, pageSize, pageNums, autoTrim, color1, color2, color3, pageBg, textColor, headingFont, bodyFont, fontSize, magTitle, schoolName, edition, year, theme.

You are an AGENT. Every response MUST contain at least one [FORMAT:customCSS:...] or settings block. Never respond with only text suggestions.

Context:\n${ctx}`}];

  /* Add recent chat history */
  wsAIChatHistory.slice(-10,-1).filter(m=>m.text&&m.role!=='system').forEach(m=>{
    messages.push({role:m.role,content:m.text});
  });

  /* Build user message — include image if available and task is image analysis */
  if(wsAISampleBase64&&(task==='image'||query.toLowerCase().includes('sample')||query.toLowerCase().includes('match'))){
    messages.push({role:'user',content:[
      {type:'image_url',image_url:{url:`data:${wsAISampleMime};base64,${wsAISampleBase64}`}},
      {type:'text',text:query}
    ]});
  } else {
    messages.push({role:'user',content:query});
  }

  try{
    const modelsToTry = [model, 'google/gemini-2.0-flash-lite-001', 'anthropic/claude-3-haiku'];
    let result = '';
    
    for(const tryModel of modelsToTry){
      try{
        const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',
          headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey,
            'HTTP-Referer':'https://magazine-teachers-profile.vercel.app','X-Title':'MagicEditor Workspace AI'},
          body:JSON.stringify({model:tryModel,max_tokens:4000,messages})
        });
        if(resp.status===504||resp.status===503){throw new Error('timeout_'+resp.status);}
        if(!resp.ok){const t=await resp.text();throw new Error(`HTTP ${resp.status}: ${t.substring(0,120)}`);}
        const data=await resp.json();
        if(data.error)throw new Error(data.error.message||'API error');
        result=data.choices?.[0]?.message?.content||'No response.';
        if(result)break;
      }catch(e){
        if(tryModel===modelsToTry[modelsToTry.length-1] || !e.message.startsWith('timeout_')){
          throw e;
        }
      }
    }

    /* Remove thinking indicator */
    wsAIChatHistory.splice(thinkIdx,1);

    /* Parse formatting commands */
    const fmtCommands={};
    const fmtRegex=/\[FORMAT:(\w+):([\s\S]*?)\]/g;
    let fmtMatch;
    while((fmtMatch=fmtRegex.exec(result))!==null)fmtCommands[fmtMatch[1]]=fmtMatch[2];
    let displayText=result.replace(/\[FORMAT:.*?\]/gs,'').trim();

    /* Extract settings JSON */
    const settingsMatch=displayText.match(/```settings\s*([\s\S]*?)```/i);
    const adviceText=displayText.replace(/```settings[\s\S]*?```/gi,'').trim();

    /* Apply formatting commands */
    const fmtChanges=[];
    if(fmtCommands.customCSS){
      const aiStyle=document.getElementById('ai-custom-css');
      if(aiStyle)aiStyle.textContent=fmtCommands.customCSS;
      fmtChanges.push('Injected CSS');
    }

    /* Process Action Commands */
    if(fmtCommands.action){
      const action = fmtCommands.action.trim();
      if(action === 'approveAll'){
        const allSubs = loadAll();
        let changed = 0;
        allSubs.forEach(s => { if(s.status==='pending'){ s.status='approved'; changed++; }});
        if(changed){ saveAll(allSubs); fmtChanges.push(`Approved ${changed} submissions`); }
      } else if(action.startsWith('finalizeCategory:')){
        const cat = action.split(':')[1].trim();
        const allSubs = loadAll();
        let changed = 0;
        allSubs.forEach(s => { if((s.category===cat || cat==='all') && s.status==='approved'){ s.status='finalized'; changed++; }});
        if(changed){ saveAll(allSubs); fmtChanges.push(`Finalized ${changed} submissions in ${cat}`); }
      } else if(action.startsWith('setSectionOrder:')){
        const keys = action.split(':')[1].split(',').map(k=>k.trim());
        const oldOrder = [...sectionOrder];
        sectionOrder = keys.map(k => oldOrder.find(o => o.key === k)).filter(Boolean);
        oldOrder.forEach(o => { if(!sectionOrder.find(s=>s.key===o.key)) sectionOrder.push(o); });
        saveLsSettingsToStorage(lsSettings);
        dbSaveSettings('section_order', sectionOrder);
        fmtChanges.push('Reordered sections');
      }
    }

    /* Apply settings if present */
    if(settingsMatch){
      try{
        const obj=JSON.parse(settingsMatch[1].trim());
        wsUndoPush();
        Object.assign(lsSettings, obj);
        wsRenderColorPanel();wsRenderFontPanel();
        fmtChanges.push('Applied '+Object.keys(obj).length+' settings');
      }catch(e){}
    }

    if(fmtChanges.length){wsGeneratePreview();wsRenderCurrentPage();}

    const htmlResp=esc(adviceText).replace(/\n/g,'<br>')+(fmtChanges.length?`<br><br><em style="color:var(--ws-green);">✓ ${fmtChanges.join(', ')}</em>`:'');
    wsAIAddMsg('assistant',adviceText,htmlResp);

  }catch(e){
    wsAIChatHistory.splice(thinkIdx,1);
    wsAIAddMsg('assistant','','<strong style="color:var(--ws-red);">Error:</strong> '+esc(e.message));
  }
}

/* ── Export: Print-Ready PDF ── */
function wsExportPrintPDF(){
  window.print();
}

/* ── Export: Editable Package (SVG + JSON) ── */
function wsExportEditable(){
  if(typeof JSZip==='undefined'){alert('ZIP library not loaded.');return;}
  const zip=new JSZip();
  const s=lsSettings;

  /* Project JSON */
  const project={
    version:'1.0',
    title:s.magTitle||'The Torch',
    school:s.schoolName||'Way To Success Standard Schools',
    edition:s.edition||'1st Edition',
    year:s.year||'2025/2026',
    settings:s,
    sectionOrder:sectionOrder,
    pageCount:wsPages.length,
    exportedAt:new Date().toISOString()
  };
  zip.file('project.json',JSON.stringify(project,null,2));

  /* Page data */
  const pagesFolder=zip.folder('pages');
  wsPages.forEach((p,i)=>{
    const num=String(i+1).padStart(3,'0');
    pagesFolder.file(`page_${num}.json`,JSON.stringify({
      index:i,type:p.type,label:p.label||'',
      section:p.sec?.key||'',
      items:p.items?.map(it=>({id:it.id,category:it.category,data:it.data}))||[]
    },null,2));
  });

  /* Finalized submissions */
  const subsFolder=zip.folder('submissions');
  const finalized=loadAll().filter(x=>x.status==='finalized');
  finalized.forEach(sub=>{
    subsFolder.file(`${sub.category}_${sub.id}.json`,JSON.stringify(sub,null,2));
  });

  zip.generateAsync({type:'blob'}).then(blob=>{
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=`${s.magTitle||'magazine'}_editable_${new Date().toISOString().slice(0,10)}.zip`;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }).catch(err=>alert('Export failed: '+err.message));
}

/* UTILITY */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* URL ROUTING */
function checkUrlRouting(){try{const params=new URLSearchParams(window.location.search);const fp=params.get('form');const ap=params.get('admin');const ep=params.get('editor');if(ap!==null){openPIN('admin');return true;}if(ep!==null){openPIN('editor');return true;}if(fp&&CATEGORIES[fp]){return fp;}}catch(e){console.warn('[MagicEditor] URL routing:',e.message);}return false;}

/* PURGE LOCAL CACHE */
function purgeLocalCache(){
  if(!confirm('This will clear ALL local cached data. Cloud data will remain safe. Continue?'))return;
  localStorage.clear();
  location.reload();
}

/* INIT */
renderLandingCards();
applyLsColors(lsSettings);
const _pendingFormKey=checkUrlRouting();
setTimeout(()=>initCloudSync().then(()=>{
  if(_pendingFormKey&&typeof _pendingFormKey==='string'&&CATEGORIES[_pendingFormKey]){
    openForm(_pendingFormKey);
  }
}),300);

function renderLandingCards() {
  const grid = document.getElementById('formGrid');
  if(!grid) return;
  grid.innerHTML = CATEGORY_KEYS.map(k => {
    const c = CATEGORIES[k];
    return `
      <div class="form-card" onclick="openForm('${k}')">
        <div class="form-card-stripe stripe-${c.color}"></div>
        <span class="form-card-icon">${c.icon}</span>
        <h3>${c.label}</h3>
        <p>${c.desc}</p>
      </div>
    `;
  }).join('');
}

let footerClicks = 0;
let footerClickTimer = null;
function handleFooterClick(){
  footerClicks++;
  if(footerClicks >= 4){
    footerClicks = 0;
    openPIN('unified');
  }
  clearTimeout(footerClickTimer);
  footerClickTimer = setTimeout(() => { footerClicks = 0; }, 1000);
}
