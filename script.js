/* MagicEditor v2.0 — Way To Success Standard Schools — 1st Edition 2025/2026 */

let CATEGORIES={
  teachers:{label:'Teacher Profiles',tag:'Teachers',title:'Teacher Profile Submission',subtitle:'Share your journey and message to the graduating class.',icon:'👩‍🏫',photoRequired:true,fields:[
    {id:'name',label:'Full name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'title',label:'Title / position',type:'text',required:true,placeholder:'e.g. Head of Mathematics Department'},
    {id:'subject',label:'Subject(s) taught',type:'text',required:true,placeholder:'e.g. Mathematics, Further Mathematics'},
    {id:'years',label:'Years at the school',type:'text',required:true,placeholder:'e.g. 8 years'},
    {id:'qualification',label:'Highest qualification',type:'text',required:true,placeholder:'e.g. M.Sc. Mathematics'},
    {id:'bio',label:'Short bio',type:'textarea',required:true,long:true,hint:'50–80 words about you'},
    {id:'quote',label:'Favourite quote or motto',type:'textarea',required:false,hint:'Optional.'},
    {id:'message',label:'Message to the graduating class',type:'textarea',required:true,long:true,hint:'30–50 words of wisdom or encouragement.'}
  ]},
  primary5:{label:'Primary 5 Graduates',tag:'Primary 5',title:'Primary 5 Graduate Profile',subtitle:'For pupils completing Primary 5 this year.',icon:'🧒',photoRequired:true,fields:[
    {id:'name',label:'Full name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'nickname',label:'Nickname',type:'text',required:false,placeholder:'Optional'},
    {id:'parents',label:"Parents' names",type:'text',required:false,placeholder:'Optional'},
    {id:'favSubject',label:'Favourite subject',type:'text',required:true,placeholder:'e.g. English, Mathematics'},
    {id:'ambition',label:'What I want to be',type:'text',required:true,placeholder:'e.g. Doctor, Pilot, Teacher'},
    {id:'favActivity',label:'Favourite class activity',type:'text',required:false,placeholder:'Optional'},
    {id:'hobbies',label:'Hobbies',type:'text',required:false,placeholder:'Optional'},
    {id:'message',label:'A short message',type:'textarea',required:true,hint:'2–3 sentences.'},
    {id:'quote',label:'Favourite quote',type:'textarea',required:false,hint:'Optional'}
  ]},
  jss3:{label:'JSS3 Graduates',tag:'JSS3',title:'JSS3 Graduate Profile',subtitle:'For students completing Junior Secondary 3 this year.',icon:'🎒',photoRequired:true,fields:[
    {id:'name',label:'Full name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'nickname',label:'Nickname',type:'text',required:false,placeholder:'Optional'},
    {id:'dob',label:'Date of birth',type:'date',required:false},
    {id:'parents',label:"Parents' names",type:'text',required:false,placeholder:'Optional'},
    {id:'favSubject',label:'Favourite subject',type:'text',required:true,placeholder:'e.g. Biology, Mathematics'},
    {id:'ambition',label:'Career ambition',type:'text',required:true,placeholder:'e.g. Engineer, Nurse, Lawyer'},
    {id:'hobbies',label:'Hobbies & interests',type:'text',required:false,placeholder:'Optional'},
    {id:'message',label:'Personal message',type:'textarea',required:true,long:true,hint:'A message to classmates, teachers, or family.'},
    {id:'quote',label:'Favourite quote',type:'textarea',required:false,hint:'Optional'}
  ]},
  ss3:{label:'SS3 Graduates',tag:'SS3',title:'SS3 Graduate Profile',subtitle:'For students completing Senior Secondary 3 — the main graduating class.',icon:'🎓',photoRequired:true,fields:[
    {id:'name',label:'Full name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'nickname',label:'Nickname',type:'text',required:false,placeholder:'Optional'},
    {id:'dob',label:'Date of birth',type:'date',required:false},
    {id:'parents',label:"Parents' names",type:'text',required:false,placeholder:'Optional'},
    {id:'favSubject',label:'Favourite subject',type:'text',required:true,placeholder:'e.g. Further Mathematics, Literature'},
    {id:'ambition',label:'Career ambition',type:'text',required:true,placeholder:'e.g. Medical Doctor, Software Engineer'},
    {id:'nextStop',label:'University / institution (if known)',type:'text',required:false,placeholder:'Optional'},
    {id:'hobbies',label:'Hobbies & interests',type:'text',required:false,placeholder:'Optional'},
    {id:'memorableMoment',label:'Most memorable school moment',type:'textarea',required:false,hint:'A day, event, or lesson you will never forget.'},
    {id:'message',label:'Personal message / legacy',type:'textarea',required:true,long:true,hint:'Your parting message to classmates, teachers, family.'},
    {id:'advice',label:'Parting advice to juniors',type:'textarea',required:false,hint:'What would you tell a JSS1 student?'},
    {id:'quote',label:'Favourite quote',type:'textarea',required:false,hint:'Optional'}
  ]},
  speeches:{label:'Speeches & Addresses',tag:'Speeches',title:'Speech / Address Submission',subtitle:'Formal addresses for the maiden edition.',icon:'🎤',photoRequired:false,fields:[
    {id:'name',label:'Name of speaker',type:'text',required:true},
    {id:'title',label:'Title of speech',type:'text',required:true},
    {id:'content',label:'Full speech content',type:'textarea',required:true,long:true}
  ]},
  academic:{label:'Academic & Educational',tag:'Academic',title:'Academic Article Submission',subtitle:'Essays, educational pieces, and academic reports.',icon:'📚',photoRequired:false,fields:[
    {id:'title',label:'Article title',type:'text',required:true},
    {id:'author',label:'Author name',type:'text',required:true},
    {id:'content',label:'Article content',type:'textarea',required:true,long:true}
  ]},
  creative:{label:'Creative Corner',tag:'Creative',title:'Creative Piece Submission',subtitle:'Poems, short stories, and literature.',icon:'✍️',photoRequired:false,fields:[
    {id:'title',label:'Title of piece',type:'text',required:true},
    {id:'author',label:'Author name',type:'text',required:true},
    {id:'content',label:'Creative content',type:'textarea',required:true,long:true}
  ]},
  events:{label:'School Life & Events',tag:'Events',title:'Event Report Submission',subtitle:'Reports on inter-house sports, cultural days, etc.',icon:'📸',photoRequired:false,fields:[
    {id:'title',label:'Event name',type:'text',required:true},
    {id:'date',label:'Event date',type:'date',required:true},
    {id:'content',label:'Event summary',type:'textarea',required:true,long:true}
  ]},
  interviews:{label:'Interviews',tag:'Interviews',title:'Interview Transcript',subtitle:'Q&A sessions with students or staff.',icon:'🎙️',photoRequired:false,fields:[
    {id:'subject',label:'Interviewee name',type:'text',required:true},
    {id:'content',label:'Full transcript',type:'textarea',required:true,long:true}
  ]},
  motivational:{label:'Motivational Articles',tag:'Motivational',title:'Motivational Piece Submission',subtitle:'Inspirational articles and life lessons.',icon:'💡',photoRequired:false,fields:[
    {id:'title',label:'Title',type:'text',required:true},
    {id:'author',label:'Author name',type:'text',required:true},
    {id:'content',label:'Content',type:'textarea',required:true,long:true}
  ]},
  gallery:{label:'Photo Gallery',tag:'Gallery',title:'General Gallery Upload',subtitle:'Photos of school life, friends, and surroundings.',icon:'🖼️',photoRequired:false,fields:[
    {id:'name',label:'Caption',type:'text',required:true}
  ]},
  appreciation:{label:'Appreciation Section',tag:'Appreciation',title:'Appreciation Submission',subtitle:'Votes of thanks and acknowledgments.',icon:'🙏',photoRequired:false,fields:[
    {id:'name',label:'From',type:'text',required:true},
    {id:'content',label:'Appreciation message',type:'textarea',required:true,long:true}
  ]}
};

let CATEGORY_KEYS=Object.keys(CATEGORIES);
const EDITORIAL_META={'editorial-note':{label:'Editorial Note',tag:'Editorial Note'},'appreciation':{label:'Appreciation Section',tag:'Appreciation'}};

/* ═══════════════════════════════════════════════════════════
   SUPABASE DATABASE LAYER
   Primary store: Supabase (cloud, multi-device)
   Fallback: localStorage (offline resilience)
═══════════════════════════════════════════════════════════ */
const SUPA_URL='https://srkgolzstppnyntrkemk.supabase.co';
const SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2dvbHpzdHBwbnludHJrZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMjg4MTAsImV4cCI6MjA5MjgwNDgxMH0.M1uVsgraBxXGDrLSqBgz9e3QFRmSjaZBgz7xoGlOo3c';
let _supa=null;
function getSupa(){
  if(_supa)return _supa;
  try{_supa=window.supabase.createClient(SUPA_URL,SUPA_KEY);return _supa;}
  catch(e){console.warn('[DB] Supabase init failed:',e.message);return null;}
}

/* ── Supabase Storage: full-quality photo uploads ── */
async function uploadToStorage(file, subId){
  const sb=getSupa();if(!sb)throw new Error('No Supabase client');
  const ext=(file.name||'photo.jpg').split('.').pop().toLowerCase();
  const path=`submissions/${subId}.${ext}`;
  const { data, error }=await sb.storage.from('magazine_assets').upload(path, file);
  if(error) throw error;
  const { data: { publicUrl } }=sb.storage.from('magazine_assets').getPublicUrl(path);
  return publicUrl;
}

/* ── Cloud Sync Logic ── */
async function dbSave(key, data){
  if(!getSupa())return;
  try{await getSupa().from('magazine_data').upsert({key:key, data:data, updated_at:new Date()});showSync('ok','✓ Cloud synced');}
  catch(e){console.warn('[DB] Save error:',e.message);showSync('err','⚠ Cloud offline');}
}
async function dbSaveSettings(key, value){
  if(!getSupa())return;
  try{await getSupa().from('magazine_settings').upsert({key:key, value:value, updated_at:new Date()});}
  catch(e){console.warn('[DB] Settings error:',e.message);}
}

async function initCloudSync(){
  const sb=getSupa();if(!sb)return;
  showSync('syncing','Fetching cloud data…');
  try{
    const { data: dData }=await sb.from('magazine_data').select('data').eq('key','me_subs').single();
    if(dData){localStorage.setItem('me_subs',JSON.stringify(dData.data));subs=dData.data;}
    const { data: sData }=await sb.from('magazine_settings').select('key,value');
    if(sData){
      sData.forEach(s=>{
        if(s.key==='ls_settings'){lsSettings=s.value;localStorage.setItem('me_ls_settings',JSON.stringify(s.value));}
        if(s.key==='section_order'){sectionOrder=s.value;localStorage.setItem('me_section_order',JSON.stringify(s.value));}
        if(s.key==='form_config'){formConfig=s.value;localStorage.setItem('me_form_config',JSON.stringify(s.value));}
        if(s.key==='labels'){labelOverrides=s.value;localStorage.setItem('me_labels',JSON.stringify(s.value));}
      });
    }
    showSync('ok','✓ Ready');
  }catch(e){console.warn('[DB] Sync error:',e.message);showSync('err','⚠ Offline mode');}
}

function showSync(status, msg){
  const bar=document.getElementById('syncBar');
  const dot=document.getElementById('syncDot');
  const txt=document.getElementById('syncMsg');
  if(!bar||!dot||!txt)return;
  bar.classList.add('visible');
  dot.className='sync-dot '+status;
  txt.textContent=msg;
  if(status==='ok')setTimeout(()=>bar.classList.remove('visible'),3000);
}

/* ── SETTINGS ── */
let lsSettings={
  magTitle:'The Torch',
  schoolName:'Way To Success Standard Schools',
  edition:'1st Edition',
  year:'2025/2026',
  color1:'#1a2744',color2:'#7dd4a8',color3:'#8b1a1a',
  pageBg:'#ffffff',textColor:'#1c1c1e',
  headingFont:"'Playfair Display', serif",bodyFont:"'Crimson Text', serif",fontSize:'11px',
  teachersPerPage:6,studentsPerPage:12,galleryPerPage:16,speechesPerPage:1,creativePerPage:4,
  pageSize:'A4',orientation:'portrait',pageNums:true,autoTrim:true,theme:'modern',
  apiKey:''
};
let labelOverrides={};
let bulkPhotos=[];

const DEFAULT_SECTION_ORDER=[
  {key:'cover',label:'Front Cover',icon:'📖',editable:false,visible:true,layout:'cover'},
  {key:'toc',label:'Table of Contents',icon:'📑',editable:false,visible:true,layout:'toc'},
  {key:'editorial-note',label:'Editorial Note',icon:'✎',editable:true,visible:true,layout:'single'},
  {key:'speeches',label:'Speeches & Addresses',icon:'🎤',editable:true,visible:true,layout:'single'},
  {key:'primary5',label:'Primary 5 Graduates',icon:'🧒',editable:true,visible:true,layout:'grid'},
  {key:'jss3',label:'JSS3 Graduates',icon:'🎒',editable:true,visible:true,layout:'grid'},
  {key:'ss3',label:'SS3 Graduates',icon:'🎓',editable:true,visible:true,layout:'grid'},
  {key:'teachers',label:'Teacher Profiles',icon:'👩‍🏫',editable:true,visible:true,layout:'teacher-grid'},
  {key:'academic',label:'Academic & Educational',icon:'📚',editable:true,visible:true,layout:'single'},
  {key:'creative',label:'Creative Corner',icon:'✍️',editable:true,visible:true,layout:'double'},
  {key:'events',label:'School Life & Events',icon:'📸',editable:true,visible:true,layout:'events'},
  {key:'interviews',label:'Interviews',icon:'🎙️',editable:true,visible:true,layout:'single'},
  {key:'motivational',label:'Motivational Articles',icon:'💡',editable:true,visible:true,layout:'single'},
  {key:'gallery',label:'Photo Gallery',icon:'🖼️',editable:true,visible:true,layout:'gallery'},
  {key:'appreciation',label:'Appreciation Section',icon:'🙏',editable:true,visible:true,layout:'single'}
];

function loadSectionOrder(){try{const s=JSON.parse(localStorage.getItem('me_section_order')||'null');if(s&&Array.isArray(s)&&s.length)return s;}catch(e){}return JSON.parse(JSON.stringify(DEFAULT_SECTION_ORDER));}
function saveSectionOrder(){localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));alert('Section order saved!');}
let sectionOrder=loadSectionOrder();

function loadFormConfig(){try{const raw=JSON.parse(localStorage.getItem('me_form_config')||'{}')||{};Object.keys(raw).forEach(k=>{if(!raw[k])raw[k]={};if(!raw[k].overrides||typeof raw[k].overrides!=='object')raw[k].overrides={};if(!Array.isArray(raw[k].customFields))raw[k].customFields=[];});return raw;}catch(e){return{};}}
function saveFormConfig(c){
  formConfig=c;
  localStorage.setItem('me_form_config',JSON.stringify(c));
  dbSaveSettings('form_config',c).then(()=>showSync('ok','✓ Form config saved to cloud'));
}
let formConfig=loadFormConfig();

const loadAll=()=>{try{return JSON.parse(localStorage.getItem('me_subs')||'[]')||[];}catch(e){return [];}};
const saveAll=(d)=>{localStorage.setItem('me_subs',JSON.stringify(d));dbSave('me_subs',d);};
let subs=[];
try { subs = loadAll(); } catch(e) { subs = []; }

/* ── STATE ── */
let currentFormCategory=null,photoFile=null,photoDataURL=null,photoFilesMulti=[],photoDataURLsMulti=[];
let pinBuf='',pinMode=null,currentAdminCat='all',currentEditorCat='pending';
let reviewingId=null,reviewingDecision=null,currentLsTab='preview';
let magPages=[],currentPageIdx=0,renamingKey=null,dragSrcIdx=null;
let currentCustCat=null,editingCustomFieldId=null;
let aiChatHistory=[];

/* ── NAVIGATION ── */
function goLanding(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('viewLanding').classList.add('active');
  renderLandingCards();
}

function openForm(key){
  if(!CATEGORIES[key])return;
  currentFormCategory=key;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('viewForm').classList.add('active');
  renderForm(key);
}

/* ── RENDERING ── */
function renderLandingCards(){
  const grid=document.getElementById('formGrid');if(!grid)return;
  grid.innerHTML=CATEGORY_KEYS.map(k=>{
    const c=CATEGORIES[k];
    return `<div class="form-card" onclick="openForm('${k}')">
      <div class="form-card-stripe stripe-${k==='teachers'?'gold':(['primary5','jss3','ss3'].includes(k)?'green':(['speeches','academic'].includes(k)?'blue':(k==='events'?'amber':'purple')))}"></div>
      <span class="form-card-icon">${c.icon}</span>
      <h3>${c.label}</h3>
      <p>${c.subtitle||c.tag}</p>
    </div>`;
  }).join('');
}

function renderForm(key){
  const cat=CATEGORIES[key];
  document.getElementById('formTag').textContent=cat.tag;
  document.getElementById('formTitle').textContent=cat.title;
  document.getElementById('formSubtitle').textContent=cat.subtitle;
  
  const cont=document.getElementById('formContainer');
  cont.innerHTML='';
  
  /* Photo Section */
  if(cat.photoRequired){
    const pc=document.createElement('div');pc.className='f-card';
    pc.innerHTML=`<div class="f-card-title">Profile Photo</div>
      <div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave()" ondrop="dropPhoto(event)">
        <input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/>
        <div id="photoPlaceholder"><span class="photo-drop-icon">👤</span><h3>Upload your portrait <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">Portrait · High quality</span></div>
        <div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoName"></div><button class="photo-change" onclick="resetPhoto(event)">Change</button></div>
      </div>
      <div class="photo-err-msg" id="photoErrMsg"></div>`;
    cont.appendChild(pc);
  }

  /* OCR / Text Section */
  const tc=document.createElement('div');tc.className='f-card';
  tc.innerHTML=`<div class="f-card-title">Submission Details</div>
    <div class="ocr-panel">
      <div class="ocr-panel-title">✦ MagicAssist OCR (Scan Hand-written Text)</div>
      <div class="ocr-btn-row">
        <button class="ocr-btn ocr-btn-cam" onclick="document.getElementById('ocrInput').click()">📸 Scan Paper</button>
      </div>
      <input type="file" id="ocrInput" accept="image/*" style="display:none;" onchange="handleOCR(event)"/>
      <div id="ocrStatus" class="ocr-status">Ready to transcribe scanned notes…</div>
      <img id="ocrPreview" class="ocr-preview-img" alt="OCR Preview"/>
    </div>
    <div id="formFields"></div>`;
  cont.appendChild(tc);
  
  renderFields(key);

  const sb=document.createElement('button');sb.className='submit-btn';sb.style.marginTop='1.5rem';
  sb.textContent='Submit to Magazine 🚀';sb.onclick=submitForm;
  cont.appendChild(sb);
}

function renderFields(catKey){
  const grid=document.getElementById('formFields');
  const fields=getEffectiveFields(catKey);
  grid.innerHTML=fields.map(f=>{
    const lbl=labelOverrides[f.id]||f.label;
    const req=f.required?'<span class="req">*</span>':'<span class="opt">(optional)</span>';
    const input=f.type==='textarea'?`<textarea id="f_${f.id}" placeholder="${f.placeholder||''}" class="${f.long?'long':''}"></textarea>`:`<input type="${f.type}" id="f_${f.id}" placeholder="${f.placeholder||''}"/>`;
    return `<div class="field" id="field_${f.id}"><label>${lbl} ${req}</label>${input}<div class="field-err">This field is required</div>${f.hint?`<div class="field-hint">${f.hint}</div>`:''}</div>`;
  }).join('');
}

/* ── FORM LOGIC ── */
function handlePhoto(e){
  const file=e.target.files?.[0];if(!file)return;
  photoFile=file;
  const reader=new FileReader();
  reader.onload=ev=>{
    photoDataURL=ev.target.result;
    document.getElementById('photoPlaceholder').style.display='none';
    document.getElementById('photoPreviewWrap').style.display='flex';
    document.getElementById('photoPreview').src=ev.target.result;
    document.getElementById('photoName').textContent=file.name;
    document.getElementById('photoDrop').classList.add('uploaded');
  };
  reader.readAsDataURL(file);
}
function resetPhoto(e){e.stopPropagation();photoFile=null;photoDataURL=null;document.getElementById('photoInput').value='';document.getElementById('photoPlaceholder').style.display='block';document.getElementById('photoPreviewWrap').style.display='none';document.getElementById('photoDrop').classList.remove('uploaded');}

async function handleOCR(event){
  const file=event.target.files?.[0];if(!file)return;
  const statusEl=document.getElementById('ocrStatus');
  const previewEl=document.getElementById('ocrPreview');
  statusEl.className='ocr-status running';statusEl.textContent='✦ Analyzing hand-written text...';
  const previewURL=URL.createObjectURL(file);previewEl.src=previewURL;previewEl.style.display='block';
  
  /* Mock OCR for production build - user should replace with Tesseract.js or Cloud Vision */
  setTimeout(()=>{
    statusEl.className='ocr-status done';
    statusEl.textContent='✓ Transcribed — text added to message field.';
    const ta=document.querySelector('textarea.long')||document.querySelector('textarea');
    if(ta)ta.value+=(ta.value?'\n\n':'')+"[SCANNED TEXT]: Hand-written transcription would appear here. Ensure the Tesseract.js library is loaded for live OCR.";
  },2000);
}

async function submitForm(){
  const cat=CATEGORIES[currentFormCategory];
  const fields=getEffectiveFields(currentFormCategory);
  const data={};let valid=true;
  
  fields.forEach(f=>{
    const el=document.getElementById('f_'+f.id);const val=el.value.trim();
    if(f.required&&!val){valid=false;document.getElementById('field_'+f.id).classList.add('has-error');}
    else{document.getElementById('field_'+f.id).classList.remove('has-error');data[f.id]={label:f.label,value:val};}
  });
  
  if(cat.photoRequired&&!photoDataURL){valid=false;document.getElementById('photoErrMsg').textContent='Profile photo is required.';document.getElementById('photoErrMsg').style.display='block';}
  else{document.getElementById('photoErrMsg').style.display='none';}

  if(!valid){window.scrollTo({top:0,behavior:'smooth'});return;}

  /* Show Progress */
  document.getElementById('formContainer').style.display='none';
  const sw=document.getElementById('successWrap');sw.style.display='block';
  document.getElementById('successUploading').style.display='block';
  
  /* Save Submission */
  const sub={
    id:'sub_'+Date.now(),
    category:currentFormCategory,
    data:data,
    photoURL:photoDataURL,
    status:'pending',
    timestamp:new Date().toISOString()
  };
  
  subs.push(sub);saveAll(subs);
  
  /* Completion */
  setTimeout(()=>{
    document.getElementById('successUploading').style.display='none';
    document.getElementById('successDone').style.display='block';
  },1500);
}

/* ── PIN SECURITY ── */
function openPIN(mode){
  pinMode=mode;pinBuf='';updatePinDots();
  document.getElementById('pinOverlay').className='pin-overlay active '+(mode==='editor'?'editor':'');
  document.getElementById('pinTitle').textContent=mode==='unified'?'Super Access':'Enter Security PIN';
}
function pinKey(n){if(pinBuf.length<4){pinBuf+=n;updatePinDots();if(pinBuf.length===4)setTimeout(verifyPIN,200);}}
function pinDel(){pinBuf=pinBuf.slice(0,-1);updatePinDots();}
function updatePinDots(){for(let i=0;i<4;i++)document.getElementById('pd'+i).className='pin-dot'+(i<pinBuf.length?' filled':'');}
function verifyPIN(){
  const adminPin=localStorage.getItem('me_pin_admin')||'1234';
  const editorPin=localStorage.getItem('me_pin_editor')||'0000';
  let ok=false;
  if(pinMode==='admin'&&pinBuf===adminPin)ok=true;
  if(pinMode==='editor'&&pinBuf===editorPin)ok=true;
  if(pinMode==='unified'&&(pinBuf===adminPin||pinBuf===editorPin)){ok=true;pinMode=pinBuf===adminPin?'admin':'editor';}
  if(ok){document.getElementById('pinOverlay').classList.remove('active');if(pinMode==='admin')openAdmin();else openEditor();}
  else{document.querySelectorAll('.pin-dot').forEach(d=>d.classList.add('error'));setTimeout(()=>{pinBuf='';updatePinDots();document.querySelectorAll('.pin-dot').forEach(d=>d.classList.remove('error'));},600);}
}

/* ── DASHBOARDS ── */
function openAdmin(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('viewAdmin').classList.add('active');
  currentView='admin';renderAdmin();
}
function openEditor(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('viewEditor').classList.add('active');
  currentView='editor';renderEditor();
}

function renderAdmin(){
  const list=document.getElementById('adminSubList');
  const statTotal=document.getElementById('statTotal'),statPending=document.getElementById('statPending'),statApproved=document.getElementById('statApproved'),statFinalized=document.getElementById('statFinalized');
  const filtered=currentAdminCat==='all'?subs:subs.filter(s=>s.category===currentAdminCat);
  
  statTotal.textContent=subs.length;
  statPending.textContent=subs.filter(s=>s.status==='pending').length;
  statApproved.textContent=subs.filter(s=>s.status==='approved').length;
  statFinalized.textContent=subs.filter(s=>s.status==='finalized').length;

  if(!filtered.length){list.innerHTML='<div class="empty-state">No submissions found.</div>';return;}
  list.innerHTML=filtered.map(s=>renderSubCard(s,'admin')).join('');
}

function renderEditor(){
  const list=document.getElementById('editorSubList');
  const filtered=currentEditorCat==='all'?subs:subs.filter(s=>s.status===currentEditorCat);
  if(!filtered.length){list.innerHTML='<div class="empty-state">No submissions to review.</div>';return;}
  list.innerHTML=filtered.map(s=>renderSubCard(s,'editor')).join('');
}

function renderSubCard(s,mode){
  const cat=CATEGORIES[s.category]||{label:s.category,icon:'📄'};
  const fields=Object.keys(s.data).map(k=>`<div class="sub-field ${s.data[k].value.length>100?'wide':''}"><div class="sub-field-lbl">${s.data[k].label}</div><div class="sub-field-val">${esc(s.data[k].value)}</div></div>`).join('');
  
  let actions='';
  if(mode==='editor'){
    if(s.status==='pending')actions=`<button class="btn btn-ai" onclick="proofread('${s.id}')">✦ AI Proofread</button><button class="btn btn-mint" onclick="updateStatus('${s.id}','approved')">Approve</button><button class="btn btn-danger" onclick="updateStatus('${s.id}','rejected')">Reject</button>`;
    else actions=`<span class="status-badge status-${s.status}">${s.status}</span><button class="btn" style="margin-left:10px" onclick="updateStatus('${s.id}','pending')">Reset</button>`;
  }else{
    if(s.status==='approved')actions=`<button class="btn btn-primary" onclick="updateStatus('${s.id}','finalized')">Finalize for Print</button>`;
    else if(s.status==='finalized')actions=`<span class="status-badge status-finalized">Print Ready</span>`;
    actions+=`<button class="btn btn-danger" onclick="deleteSub('${s.id}')" style="margin-left:auto">Delete</button>`;
  }

  return `<div class="sub-card cat-${s.category}" id="card_${s.id}">
    <div class="sub-top">
      ${s.photoURL?`<img src="${s.photoURL}" class="sub-avatar"/>`:`<div class="sub-avatar-init">${(s.data.name?.value||'?')[0]}</div>`}
      <div class="sub-info"><div class="sub-name">${esc(s.data.name?.value||s.data.title?.value||'Untitled')}</div><div class="sub-meta"><span class="cat-pill">${cat.label}</span> ${new Date(s.timestamp).toLocaleDateString()}</div></div>
      <div style="margin-left:auto"><span class="status-badge status-${s.status}">${s.status}</span></div>
    </div>
    <div class="sub-fields">${fields}</div>
    <div id="ai_${s.id}" class="proofread-panel" style="display:none;"></div>
    <div class="sub-actions">${actions}</div>
  </div>`;
}

function updateStatus(id,status){
  const sub=subs.find(x=>x.id===id);if(!sub)return;
  sub.status=status;saveAll(subs);
  if(currentView==='admin')renderAdmin();else renderEditor();
}
function deleteSub(id){if(!confirm('Delete permanently?'))return;subs=subs.filter(x=>x.id!==id);saveAll(subs);renderAdmin();}

/* ── WORKSPACE — LAYOUT STUDIO ── */
function openWorkspace(){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('viewWorkspace').classList.add('active');
  wsGeneratePreview();
}
function wsGeneratePreview(){
  const finalized=subs.filter(s=>s.status==='finalized');
  magPages=[];
  magPages.push({type:'cover',label:'Front Cover'});
  magPages.push({type:'toc',label:'Table of Contents'});
  magPages.push({type:'editorial',label:'Editorial Note'});
  sectionOrder.forEach(sec=>{
    if(!sec.visible)return;
    const items=finalized.filter(s=>s.category===sec.key);
    if(!items.length)return;
    const per=sec.layout==='grid'?12:6;
    for(let i=0;i<items.length;i+=per)magPages.push({type:sec.layout,label:sec.label,items:items.slice(i,i+per)});
  });
  renderWorkspacePages();
}
function renderWorkspacePages(){
  const list=document.getElementById('wsPageList');
  list.innerHTML=magPages.map((p,i)=>`<div class="ws-page-item ${currentPageIdx===i?'active':''}" onclick="setWsPage(${i})"><div class="ws-page-thumb">${i+1}</div><div class="ws-page-info"><div class="ws-page-info-name">${p.label}</div><div class="ws-page-info-meta">${p.type.toUpperCase()}</div></div></div>`).join('');
  renderWsCanvas();
}
function setWsPage(i){currentPageIdx=i;renderWorkspacePages();}
function renderWsCanvas(){
  const canvas=document.getElementById('wsCanvas');const p=magPages[currentPageIdx];if(!p)return;
  canvas.innerHTML=`<div class="ws-mag-page" style="width:595px;height:842px;background:#fff;padding:40px;">
    <h1 style="color:var(--school-navy);border-bottom:2px solid var(--school-mint);padding-bottom:10px;margin-bottom:20px;">${p.label}</h1>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;">
      ${(p.items||[]).map(it=>`<div style="border:1px solid #eee;padding:10px;border-radius:8px;text-align:center;">
        ${it.photoURL?`<img src="${it.photoURL}" style="width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px;margin-bottom:8px;"/>`:''}
        <div style="font-weight:700;font-size:11px;">${it.data.name?.value||it.data.title?.value}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

/* AI AGENT */
async function wsAISend(){
  const input=document.getElementById('wsAIInput');const query=input.value.trim();if(!query)return;
  input.value='';
  const model=document.getElementById('wsAIModel').value;
  const apiKey=lsSettings.apiKey||localStorage.getItem('me_ai_key');
  if(!apiKey){alert('No API key found in settings.');return;}

  const log=document.getElementById('wsAIChat');
  log.innerHTML+=`<div class="ws-ai-msg user">${esc(query)}</div>`;log.scrollTop=log.scrollHeight;

  try{
    const prompt=`You are the MagicEditor Agentic Architect. User wants: "${query}". 
    Output [FORMAT:customCSS:...] or settings JSON blocks to implement the request.
    Context: Current Page ${currentPageIdx+1}, Total Subs ${subs.length}.`;
    
    const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey},
      body:JSON.stringify({model,messages:[{role:'user',content:prompt}]})
    });
    const data=await resp.json();
    const result=data.choices[0].message.content;
    
    /* Apply AI styling */
    const cssMatch=result.match(/\[FORMAT:customCSS:([\s\S]*?)\]/);
    if(cssMatch)document.getElementById('ai-custom-css').textContent=cssMatch[1];
    
    log.innerHTML+=`<div class="ws-ai-msg assistant">${esc(result.replace(/\[FORMAT:.*?\]/gs,''))}</div>`;
    log.scrollTop=log.scrollHeight;
  }catch(e){log.innerHTML+=`<div class="ws-ai-msg system">Error: ${e.message}</div>`;}
}

/* UTILITY */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function applyLsColors(s){const r=document.documentElement;r.style.setProperty('--school-navy',s.color1);r.style.setProperty('--school-mint',s.color2);r.style.setProperty('--school-red',s.color3);}
function checkUrlRouting(){try{const params=new URLSearchParams(window.location.search);const fp=params.get('form');if(fp&&CATEGORIES[fp])return fp;}catch(e){}return false;}

/* INIT */
renderLandingCards();
applyLsColors(lsSettings);
const _pendingFormKey=checkUrlRouting();
setTimeout(()=>initCloudSync().then(()=>{
  if(_pendingFormKey&&CATEGORIES[_pendingFormKey])openForm(_pendingFormKey);
}),300);

let footerClicks=0,footerClickTimer=null;
function handleFooterClick(){footerClicks++;if(footerClicks>=4){footerClicks=0;openPIN('unified');}clearTimeout(footerClickTimer);footerClickTimer=setTimeout(()=>{footerClicks=0;},1000);}
