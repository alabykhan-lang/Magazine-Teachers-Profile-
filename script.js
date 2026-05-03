const SUPA_URL = 'https://srkgolzstppnyntrkemk.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2dvbHpzdHBwbnludHJrZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNTgxMzYsImV4cCI6MjA1NTczNDEzNn0.7iK3y9u7k8a-Oq6u7p1i9Z2V3Y4Z5V6W7X8Y9Z0A1B2';

/* ── CONFIG ── */
let CATEGORIES = {
  teachers: { label: 'Staff Profiles', icon: '👨‍🏫', tag: 'Staff', title: 'Teacher Profile Submission', subtitle: 'Share your journey and message to the graduating class.' },
  primary5: { label: 'Primary 5 Pupils', icon: '👦', tag: 'Pupils', title: 'Primary 5 Profile', subtitle: 'Tell us about your time in primary school.' },
  jss3: { label: 'JSS 3 Students', icon: '🎓', tag: 'JSS3', title: 'Junior Secondary Graduation', subtitle: 'Reflections on your junior secondary years.' },
  ss3: { label: 'SS 3 Graduates', icon: '🎉', tag: 'SS3', title: 'Senior Secondary Graduation', subtitle: 'Your final legacy and message to the world.' },
  speeches: { label: 'Speeches', icon: '🎤', tag: 'Speeches', title: 'Formal Address', subtitle: 'Proprietor, Principal, and Guest Speaker messages.' },
  creative: { label: 'Creative Writing', icon: '✍️', tag: 'Creative', title: 'Poems & Stories', subtitle: 'Express yourself through literature.' },
  academic: { label: 'Academic Articles', icon: '📚', tag: 'Academic', title: 'Educational Content', subtitle: 'Articles, research, and subject features.' },
  events: { label: 'School Events', icon: '🏆', tag: 'Events', title: 'Year in Review', subtitle: 'Sports, excursions, and competitions.' },
  interviews: { label: 'Interviews', icon: '🎙️', tag: 'Interview', title: 'Q&A Session', subtitle: 'Conversations with students and alumni.' },
  motivational: { label: 'Inspiration', icon: '💡', tag: 'Wisdom', title: 'Motivational Messages', subtitle: 'Words of wisdom for the future.' },
  gallery: { label: 'Photo Gallery', icon: '🖼️', tag: 'Photos', title: 'Gallery Submission', subtitle: 'Submit standalone photos with captions.' }
};

let CATEGORY_KEYS = Object.keys(CATEGORIES);
let labelOverrides = loadLabels();

/* ── STATE ── */
let _supa = null;
let subs = [];
let lsSettings = loadLsSettingsFromStorage();
let bulkPhotos = [];
let sectionOrder = loadSectionOrder();
let formConfig = loadFormConfig();

let _subChannel = null;
let currentFormCategory = null;
let currentAdminCat = 'all';
let currentEditorCat = 'all';

function loadLsSettingsFromStorage() {
  try {
    const s = JSON.parse(localStorage.getItem('me_ls_settings') || 'null');
    if (s && typeof s === 'object') return s;
  } catch (e) {}
  return { magTitle: 'The Torch', schoolName: 'Way To Success Standard Schools', edition: '1st Edition', year: '2025/2026', color1: '#1a2744', color2: '#7dd4a8', color3: '#8b1a1a', pageSize: 'a4', orientation: 'portrait', pageNums: 'yes' };
}

function getSupa() {
  if (_supa) return _supa;
  if (!window.supabase) { console.warn('[DB] Supabase CDN not yet loaded'); return null; }
  try { _supa = window.supabase.createClient(SUPA_URL, SUPA_KEY); return _supa; }
  catch (e) { console.warn('[DB] Supabase init failed:', e.message); return null; }
}

function waitForSupabase(maxMs) {
  return new Promise(resolve => {
    if (window.supabase) { resolve(true); return; }
    const t0 = Date.now();
    const iv = setInterval(() => {
      if (window.supabase) { clearInterval(iv); resolve(true); return; }
      if (Date.now() - t0 > (maxMs || 6000)) { clearInterval(iv); resolve(false); return; }
    }, 100);
  });
}

async function uploadToStorage(file, subId) {
  const sb = getSupa(); if (!sb) throw new Error('No Supabase client');
  const ext = (file.name || 'photo.jpg').split('.').pop().toLowerCase();
  const path = `submissions/${subId}.${ext}`;
  const { error } = await sb.storage.from('photos').upload(path, file, { cacheControl: '31536000', upsert: true });
  if (error) throw error;
  const { data } = sb.storage.from('photos').getPublicUrl(path);
  return data.publicUrl;
}

async function withRetry(operation, label, retries = 3) {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      const result = await operation();
      return result;
    } catch (e) {
      lastErr = e;
      const delay = Math.min(1000 * Math.pow(2, i), 8000);
      const msg = `${label} failed (try ${i + 1}/${retries}): ${e.message || e}. Retrying in ${delay / 1000}s…`;
      console.warn('[DB]', msg);
      showSync('syncing', msg);
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

function genId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function showSync(state, msg) {
  console.log(`[SYNC] ${state.toUpperCase()}: ${msg}`);
  let bar = document.getElementById('syncBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'syncBar';
    bar.className = 'sync-bar';
    bar.innerHTML = '<div class="sync-dot" id="syncDot"></div><span id="syncMsg"></span>';
    document.body.appendChild(bar);
  }
  bar.classList.add('visible');
  const dot = document.getElementById('syncDot');
  dot.className = 'sync-dot ' + state;
  document.getElementById('syncMsg').textContent = msg;

  if (state === 'ok' || state === 'live') {
    if (state === 'ok') setTimeout(() => bar.classList.remove('visible'), 2500);
  }
}

function initRealtime() {
  const sb = getSupa();
  if (!sb || _subChannel) return;

  console.log('[DB] Initializing Realtime listeners…');

  _subChannel = sb.channel('db-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'submissions' }, payload => {
      console.log('[DB] Realtime Submission:', payload.eventType);
      handleRealtimeSubmission(payload);
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'settings' }, payload => {
      console.log('[DB] Realtime Setting:', payload.eventType);
      handleRealtimeSetting(payload);
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        showSync('live', '✦ Connected Live');
        console.log('[DB] Realtime Subscribed');
      } else {
        console.warn('[DB] Realtime Status:', status);
      }
    });
}

function handleRealtimeSubmission(payload) {
  const { eventType, new: newRow, old: oldRow } = payload;

  if (eventType === 'INSERT' || eventType === 'UPDATE') {
    const sub = {
      id: newRow.id, category: newRow.category, ts: newRow.ts || new Date(newRow.created_at).toLocaleString(),
      createdAt: newRow.created_at ? new Date(newRow.created_at).getTime() : newRow.created_at_ms || Date.now(),
      status: newRow.status || 'draft', reviewerNote: newRow.reviewer_note || '', reviewedAt: newRow.reviewed_at || null,
      data: typeof newRow.data === 'string' ? JSON.parse(newRow.data) : newRow.data || {},
      photoData: newRow.photo_data || null, photoName: newRow.photo_name || null,
      photos: newRow.photos ? (typeof newRow.photos === 'string' ? JSON.parse(newRow.photos) : newRow.photos) : null
    };

    const idx = subs.findIndex(s => String(s.id) === String(sub.id));
    if (idx >= 0) {
      subs[idx] = sub;
    } else {
      subs.push(sub);
    }
    showSync('live', '✦ New data received');
  } else if (eventType === 'DELETE') {
    subs = subs.filter(s => String(s.id) !== String(oldRow.id));
    showSync('live', '✦ Data removed');
  }

  if (document.getElementById('viewAdmin')?.classList.contains('active')) renderAdmin();
  if (document.getElementById('viewEditor')?.classList.contains('active')) renderEditor();
  if (document.getElementById('viewWorkspace')?.classList.contains('active')) wsGeneratePreview();
}

function handleRealtimeSetting(payload) {
  const { eventType, new: newRow } = payload;
  if (eventType === 'DELETE') return;

  const key = newRow.key;
  const val = typeof newRow.value === 'string' ? JSON.parse(newRow.value) : newRow.value;

  if (key === 'cfg') { CATEGORIES = val; CATEGORY_KEYS = Object.keys(val); }
  if (key === 'ls_settings') {
    lsSettings = val;
    applyLsColors(val);
  }
  if (key === 'labels') labelOverrides = val;
  if (key === 'section_order') sectionOrder = val;
  if (key === 'form_config') formConfig = val;

  showSync('live', '✦ Settings synced');

  if (document.getElementById('adminModeLayout')?.style.display === 'block') {
    loadLsSettingsToUI();
    renderSectionManager();
  }
}

async function dbLoadAll() {
  showSync('syncing', 'Connecting to cloud…');
  try {
    const sb = getSupa();
    if (!sb) throw new Error('Supabase client not available — check internet');

    const res = await Promise.race([
      sb.from('submissions').select('*').order('created_at', { ascending: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Sync timeout')), 8000))
    ]);

    if (res.error) throw res.error;

    const cloudRows = res.data || [];
    const mapped = cloudRows.map(r => ({
      id: r.id, category: r.category, ts: r.ts || new Date(r.created_at).toLocaleString(),
      createdAt: r.created_at ? new Date(r.created_at).getTime() : r.created_at_ms || Date.now(),
      status: r.status || 'pending', reviewerNote: r.reviewer_note || '', reviewedAt: r.reviewed_at || null,
      data: typeof r.data === 'string' ? JSON.parse(r.data) : r.data || {},
      photoData: r.photo_data || null, photoName: r.photo_name || null,
      photos: r.photos ? (typeof r.photos === 'string' ? JSON.parse(r.photos) : r.photos) : null
    }));

    showSync('ok', '✓ Cloud synced — ' + mapped.length + ' submissions');
    return mapped;
  } catch (e) {
    console.warn('[DB] Cloud load failed:', e.message);
    showSync('err', '⚠ Cloud unreachable — cannot load data');
    return subs || [];
  }
}

async function dbSaveSubmission(sub) {
  const idx = subs.findIndex(s => String(s.id) === String(sub.id));
  if (idx >= 0) subs[idx] = sub; else subs.push(sub);

  showSync('syncing', 'Syncing to cloud…');
  try {
    const sb = getSupa(); if (!sb) throw new Error('Supabase client not available');
    const row = {
      id: sub.id, category: sub.category, ts: sub.ts,
      created_at: new Date(sub.createdAt || Date.now()).toISOString(),
      status: sub.status, reviewer_note: sub.reviewerNote || '',
      reviewed_at: sub.reviewedAt ? new Date(sub.reviewedAt).toISOString() : null,
      data: JSON.stringify(sub.data),
      photo_data: sub.photoData || null, photo_name: sub.photoName || null,
      photos: sub.photos ? JSON.stringify(sub.photos) : null
    };

    const { error } = await sb.from('submissions').upsert(row, { onConflict: 'id' }).select();
    if (error) throw error;
    showSync('ok', '✓ Cloud synced');
  } catch (e) {
    console.warn('[DB] Cloud save failed:', e.message);
    showSync('err', 'Failed to sync to cloud');
  }
}

async function dbSaveSetting(key, val) {
  showSync('syncing', 'Updating settings…');
  try {
    const sb = getSupa(); if (!sb) throw new Error('Supabase client not available');
    const { error } = await sb.from('settings').upsert({ key, value: JSON.stringify(val), updated_at: new Date().toISOString() }, { onConflict: 'key' });
    if (error) throw error;
    showSync('ok', '✓ Settings updated');
  } catch (e) {
    console.warn('[DB] Setting update failed:', e.message);
    showSync('err', 'Settings update failed');
  }
}

/* ── BOOT SEQUENCE ── */
window.onload = async () => {
  applyLsColors(lsSettings);
  renderLandingCards();

  const isOk = await waitForSupabase(6000);
  if (isOk) {
    initRealtime();
    await initCloudSync();
  } else {
    showSync('err', 'Running offline — cloud delayed');
    if (typeof removeBootOverlay === 'function') removeBootOverlay();
  }
};

async function initCloudSync() {
  try {
    const sb = getSupa(); if (!sb) return;

    /* Parallel load settings */
    const keys = ['cfg', 'ls_settings', 'labels', 'section_order', 'form_config'];
    const { data: setRows } = await sb.from('settings').select('*').in('key', keys);

    if (setRows) {
      setRows.forEach(r => {
        const val = typeof r.value === 'string' ? JSON.parse(r.value) : r.value;
        if (r.key === 'cfg') { CATEGORIES = val; CATEGORY_KEYS = Object.keys(val); localStorage.setItem('me_cfg', r.value); }
        if (r.key === 'ls_settings') { lsSettings = val; applyLsColors(val); localStorage.setItem('me_ls_settings', r.value); }
        if (r.key === 'labels') { labelOverrides = val; localStorage.setItem('me_labels', r.value); }
        if (r.key === 'section_order') { sectionOrder = val; localStorage.setItem('me_section_order', r.value); }
        if (r.key === 'form_config') { formConfig = val; localStorage.setItem('me_form_config', r.value); }
      });
    }

    /* Pull submissions */
    subs = await dbLoadAll();

    showSync('ok', subs.length ? '✓ Cloud Synced' : '✓ Connected (Empty)');
    if (subs.length) showSync('live', '✦ Live & Synced');

    if (document.getElementById('viewLanding')?.classList.contains('active')) renderLandingCards();
  } catch (e) {
    console.warn('[DB] Init sync failed:', e.message);
    showSync('err', 'Running offline — using local cache');
  } finally {
    if (typeof removeBootOverlay === 'function') removeBootOverlay();
  }
}

/* ── HELPERS ── */
function loadLabels() { try { return JSON.parse(localStorage.getItem('me_labels') || '{}'); } catch (e) { return {}; } }
function loadSectionOrder() { try { return JSON.parse(localStorage.getItem('me_section_order') || 'null'); } catch (e) { return null; } }
function loadFormConfig() { try { return JSON.parse(localStorage.getItem('me_form_config') || '{}'); } catch (e) { return {}; } }
function getLabel(key, def) { return labelOverrides[key] || def; }
function esc(s) { if (!s) return ''; return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

function applyLsColors(s) {
  if (!s) return;
  const r = document.documentElement;
  if (s.color1) r.style.setProperty('--school-navy', s.color1);
  if (s.color2) r.style.setProperty('--school-mint', s.color2);
  if (s.color3) r.style.setProperty('--school-red', s.color3);
}

function show(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function goLanding() { currentFormCategory = null; show('viewLanding'); renderLandingCards(); }

/* ── LANDING ── */
function renderLandingCards() {
  const grid = document.getElementById('formGrid');
  if (!grid) return;
  const h = document.getElementById('landingHeading'); if (h) h.textContent = getLabel('landing_heading', 'Choose a content category');

  grid.innerHTML = CATEGORY_KEYS.map(k => {
    const cat = CATEGORIES[k];
    if (!cat) return '';
    return `<div class="form-card" onclick="openForm('${k}')">
      <span class="form-card-stripe stripe-blue"></span>
      <span class="form-card-icon">${cat.icon || '📝'}</span>
      <h3>${esc(getLabel('cat_label_' + k, cat.label || k))}</h3>
      <p>${esc(getLabel('cat_desc_' + k, cat.subtitle || ''))}</p>
    </div>`;
  }).join('');
}

function openForm(k) {
  currentFormCategory = k;
  resetFormState();
  const cat = CATEGORIES[k];
  if (!cat) return;
  document.getElementById('formTag').textContent = getLabel('cat_tag_' + k, cat.tag);
  document.getElementById('formTitle').textContent = getLabel('cat_form_title_' + k, cat.title);
  document.getElementById('formSubtitle').textContent = getLabel('cat_form_subtitle_' + k, cat.subtitle);
  document.getElementById('successWrap').style.display = 'none';
  document.getElementById('formContainer').style.display = 'block';
  buildForm(k);
  show('viewForm');
}

function resetFormState() { bulkPhotos = []; }
function buildForm(k) {
  const c = document.getElementById('formContainer');
  c.innerHTML = '<p style="text-align:center;padding:40px;">Building form...</p>';
  // Simple form mock for now - would be dynamic in full impl
  c.innerHTML = `<div class="f-card"><h2 class="f-card-title">Personal Information</h2><div class="field"><label>Full Name</label><input type="text" id="ff-name" required></div><button class="submit-btn" onclick="submitForm()">Submit Content</button></div>`;
}

async function submitForm() {
  const name = document.getElementById('ff-name')?.value;
  if (!name) return alert('Name is required');
  const sub = {
    id: genId(),
    category: currentFormCategory,
    createdAt: Date.now(),
    status: 'pending',
    data: { name }
  };
  await dbSaveSubmission(sub);
  document.getElementById('formContainer').style.display = 'none';
  document.getElementById('successWrap').style.display = 'block';
  document.getElementById('successDone').style.display = 'block';
}

/* ── PIN ACCESS ── */
let pinBuffer = '';
let pinTarget = 'admin';
function openPin(target) { pinBuffer = ''; pinTarget = target; updatePinDots(); document.getElementById('pinOverlay').classList.add('active'); }
function closePin() { document.getElementById('pinOverlay').classList.remove('active'); }
function pressPin(n) { if (pinBuffer.length < 4) { pinBuffer += n; updatePinDots(); if (pinBuffer.length === 4) checkPin(); } }
function clearPin() { pinBuffer = ''; updatePinDots(); }
function updatePinDots() { const dots = document.querySelectorAll('#pinDots .pin-dot'); dots.forEach((d, i) => d.classList.toggle('filled', i < pinBuffer.length)); }
function checkPin() {
  const masterPin = (pinTarget === 'admin') ? '1234' : '5678';
  if (pinBuffer === masterPin) {
    closePin();
    if (pinTarget === 'admin') enterAdmin();
    else enterEditor();
  } else {
    document.getElementById('pinDots').classList.add('shake');
    setTimeout(() => { document.getElementById('pinDots').classList.remove('shake'); clearPin(); }, 400);
  }
}

function enterAdmin() { show('viewAdmin'); renderAdmin(); }
function renderAdmin() {
  const list = document.getElementById('adminList');
  if (!list) return;
  const filtered = subs.filter(s => currentAdminCat === 'all' || s.category === currentAdminCat);
  list.innerHTML = filtered.map(s => `<div class="sub-card"><h3>${esc(s.data.name)}</h3><p>${s.category} - ${s.status}</p></div>`).join('');
}

/* ── STUB FOR LAYOUT STUDIO ── */
function openLayoutStudio() {
  document.getElementById('adminModeSubs').style.display = 'none';
  document.getElementById('adminModeLayout').style.display = 'block';
}
function showLsTab(tab) {
  document.querySelectorAll('.ls-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.ls-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('lsPanel' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  document.getElementById('lsTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
}
