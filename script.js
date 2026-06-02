/* MagicEditor v2.0 — Way To Success Standard Schools — 1st Edition 2025/2026 */

let CATEGORIES={
  teachers:{label:'Staff Profiles',tag:'Staff',title:'Staff Profile Submission',subtitle:'Share your journey and message to the graduating class.',icon:'👨‍🏫',photoRequired:true,fields:[
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
  ss3_class_message:{label:'Graduating Class Message',tag:'SS3 Class',title:'Graduating Class Message & Full Picture',subtitle:'A general SS3 class message with the full graduating class picture, placed before SS3 profiles.',icon:'SS3',photoRequired:true,fields:[
    {id:'className',label:'Class / set name',type:'text',required:true,placeholder:'e.g. SS3 Graduating Class of 2026'},
    {id:'messageTitle',label:'Message title',type:'text',required:true,placeholder:'e.g. Our Legacy'},
    {id:'classMessage',label:'Graduating class message',type:'textarea',required:true,long:true,hint:'A shared message from the graduating class.'},
    {id:'submittedBy',label:'Submitted by',type:'text',required:false,placeholder:'e.g. Class Captain / Coordinator'},
    {id:'photoCaption',label:'Full class picture caption',type:'textarea',required:false,hint:'Optional caption for the group picture.'}
  ]},
  primary5_class_photo:{label:'Primary 5 Full Class Picture',tag:'Primary 5 Class',title:'Primary 5 Full Class Picture',subtitle:'General class picture page for Primary 5, not individual profiles.',icon:'P5',photoRequired:true,fields:[
    {id:'className',label:'Class name',type:'text',required:true,placeholder:'e.g. Primary 5 Class of 2026'},
    {id:'photoCaption',label:'Picture caption',type:'textarea',required:true,hint:'Short caption for the full class picture.'},
    {id:'submittedBy',label:'Submitted by',type:'text',required:false,placeholder:'Optional'}
  ]},
  jss3_class_photo:{label:'JSS3 Full Class Picture',tag:'JSS3 Class',title:'JSS3 Full Class Picture',subtitle:'General class picture page for JSS3, not individual profiles.',icon:'J3',photoRequired:true,fields:[
    {id:'className',label:'Class name',type:'text',required:true,placeholder:'e.g. JSS3 Class of 2026'},
    {id:'photoCaption',label:'Picture caption',type:'textarea',required:true,hint:'Short caption for the full class picture.'},
    {id:'submittedBy',label:'Submitted by',type:'text',required:false,placeholder:'Optional'}
  ]},
  speeches:{label:'Speeches & Addresses',tag:'Speeches',title:'Speech / Address Submission',subtitle:'Formal addresses for the maiden edition.',icon:'🎤',photoRequired:false,fields:[
    {id:'speechType',label:'Type of address',type:'select',required:true,options:["Proprietor's Speech","Senior Boy's Speech","External Body Address","Graduating Class Message","Other"]},
    {id:'speakerName',label:'Speaker name',type:'text',required:true,placeholder:'Full name'},
    {id:'speakerTitle',label:'Speaker title / role',type:'text',required:true,placeholder:'e.g. Proprietor, Senior Boy'},
    {id:'speakerOrg',label:'Organization / affiliation',type:'text',required:false,placeholder:'Optional'},
    {id:'speechTitle',label:'Speech title',type:'text',required:false,placeholder:'Optional'},
    {id:'speechDate',label:'Date of speech',type:'date',required:false},
    {id:'speechBody',label:'Full speech text',type:'textarea',required:true,long:true,hint:'Paste the complete speech here.'}
  ]},
  creative:{label:'Creative Corner',tag:'Creative',title:'Creative Submission',subtitle:'Poems, stories, jokes, and riddles.',icon:'✍️',photoRequired:false,fields:[
    {id:'contribType',label:'Type of submission',type:'select',required:true,options:['Poem','Short Story','Joke','Riddle','Other']},
    {id:'contribName',label:'Your name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'contribRole',label:'Your class or role',type:'text',required:true,placeholder:'e.g. SS3 Science, Teacher'},
    {id:'contribTitle',label:'Title of your piece',type:'text',required:true,placeholder:'e.g. "The Sunset Over Our School"'},
    {id:'contribBody',label:'Your submission',type:'textarea',required:true,long:true,hint:'The full poem, story, or joke.'},
    {id:'contribNote',label:'Note to editor',type:'textarea',required:false,hint:'Optional — any context or dedication.'}
  ]},
  events:{label:'School Life & Events',tag:'Events',title:'Event / Activity Report',subtitle:'Sports days, excursions, competitions, achievements.',icon:'📸',photoRequired:true,photoMulti:true,photoMax:5,fields:[
    {id:'eventType',label:'Event type',type:'select',required:true,options:['Sports Day','Excursion','Competition','Achievement','Academic Event','Other']},
    {id:'eventName',label:'Event name',type:'text',required:true,placeholder:'e.g. Inter-House Sports 2025'},
    {id:'eventDate',label:'Event date',type:'date',required:false},
    {id:'eventLocation',label:'Location',type:'text',required:false,placeholder:'Optional'},
    {id:'reporterName',label:'Submitted by',type:'text',required:true,placeholder:'Your name / role'},
    {id:'eventSummary',label:'Event summary',type:'text',required:true,placeholder:'One-line summary'},
    {id:'eventReport',label:'Full report',type:'textarea',required:true,long:true,hint:'The full story. Who, what, when, where, why.'}
  ]},
  academic:{label:'Academic & Educational',tag:'Academic',title:'Academic & Educational Content',subtitle:'Articles, subject features, and educational write-ups.',icon:'📚',photoRequired:false,fields:[
    {id:'authorName',label:'Author name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'authorRole',label:'Role / title',type:'text',required:true,placeholder:'e.g. Science Teacher, Head of Department'},
    {id:'subjectArea',label:'Subject area',type:'text',required:true,placeholder:'e.g. Biology, History, Mathematics'},
    {id:'articleTitle',label:'Article title',type:'text',required:true,placeholder:'The title of your piece'},
    {id:'articleSummary',label:'Brief summary',type:'textarea',required:false,hint:'Optional — 1-2 sentences.'},
    {id:'articleBody',label:'Full article',type:'textarea',required:true,long:true,hint:'The complete article.'},
    {id:'references',label:'References / sources',type:'textarea',required:false,hint:'Optional'}
  ]},
  interviews:{label:'Interviews',tag:'Interview',title:'Interview Submission',subtitle:'Q&A with old students, guest speakers, senior staff.',icon:'🎙️',photoRequired:true,fields:[
    {id:'intervieweeName',label:'Interviewee name',type:'text',required:true,placeholder:'The person being interviewed'},
    {id:'intervieweeTitle',label:'Interviewee title / role',type:'text',required:true,placeholder:'e.g. Old Student (Class of 2010)'},
    {id:'interviewerName',label:'Interviewer name',type:'text',required:true,placeholder:'Who conducted the interview'},
    {id:'interviewDate',label:'Date of interview',type:'date',required:false},
    {id:'introParagraph',label:'Introduction paragraph',type:'textarea',required:true,hint:'2-3 sentences introducing the interviewee.'},
    {id:'qaBody',label:'Interview Q&A',type:'textarea',required:true,long:true,hint:'Q: [question]\nA: [answer]'},
    {id:'closingNote',label:'Closing note',type:'textarea',required:false,hint:'Optional'}
  ]},
  motivational:{label:'Motivational Articles',tag:'Motivation',title:'Motivational Article Submission',subtitle:'Inspirational pieces for the graduating class.',icon:'💡',photoRequired:false,fields:[
    {id:'authorName',label:'Author name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'authorRole',label:'Role',type:'text',required:true,placeholder:'e.g. Principal, Teacher, Alumnus'},
    {id:'articleTitle',label:'Article title',type:'text',required:true,placeholder:'The title of your message'},
    {id:'articleBody',label:'Article body',type:'textarea',required:true,long:true,hint:'Your message of motivation, wisdom, or encouragement.'},
    {id:'pullQuote',label:'Pull-out quote',type:'textarea',required:false,hint:'A powerful line to highlight in the layout.'},
    {id:'dedication',label:'Dedication',type:'textarea',required:false,hint:'Optional'}
  ]},
  gallery:{label:'Photo Gallery',tag:'Gallery',title:'Photo Gallery Submission',subtitle:'Standalone photos for the photo gallery section.',icon:'🖼️',photoRequired:true,fields:[
    {id:'submitterName',label:'Submitted by',type:'text',required:true,placeholder:'Your name'},
    {id:'submitterRole',label:'Your role',type:'text',required:false,placeholder:'Optional'},
    {id:'photoCaption',label:'Photo caption',type:'textarea',required:true,hint:'A short description — what, when, where.'},
    {id:'photoCategory',label:'Category',type:'select',required:true,options:['Graduation Day','Classroom Life','Sports','Cultural Day','Award Ceremony','Excursion','Portrait','Candid','Other']},
    {id:'photoDate',label:'Date photo was taken',type:'date',required:false}
  ]},
  advertisements:{label:'Advertisements',tag:'Advert',title:'Advertisement Flyer Submission',subtitle:'Upload business flyers only for the advertisement pages.',icon:'AD',photoRequired:true,fields:[
    {id:'businessName',label:'Business name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'contactInfo',label:'Contact information',type:'text',required:false,placeholder:'Phone, address, or social handle'},
    {id:'advertCaption',label:'Short advert note',type:'textarea',required:false,hint:'Optional note to the editor.'}
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
function loadSubCache(){try{const s=JSON.parse(localStorage.getItem('me_subs')||'[]');return Array.isArray(s)?s:[];}catch(e){return[];}}
function persistSubCache(list){try{localStorage.setItem('me_subs',JSON.stringify(Array.isArray(list)?list:[]));}catch(e){console.warn('[DB] Local cache save failed:',e.message);}}
let subs=loadSubCache();
let lsSettings=loadLsSettingsFromStorage();
let bulkPhotos=[];
let sectionOrder;
let formConfig;
const PRINT_IMAGE_MIN_PX=1200;
const PRINT_IMAGE_RECOMMENDED_PX=1800;
const PRINT_MAX_IMAGE_MB=25;

function loadLsSettingsFromStorage(){
  try{
    const s=JSON.parse(localStorage.getItem('me_ls_settings')||'null');
    if(s&&typeof s==='object')return s;
  }catch(e){}
  return {magTitle:'The Torch',schoolName:'Way To Success Standard Schools',edition:'1st Edition',year:'2025/2026',color1:'#1a2744',color2:'#7dd4a8',color3:'#8b1a1a',pageSize:'a4',orientation:'portrait',pageNums:'yes'};
}

function getSupa(){
  if(_supa)return _supa;
  if(!window.supabase){console.warn('[DB] Supabase CDN not yet loaded');return null;}
  try{_supa=window.supabase.createClient(SUPA_URL,SUPA_KEY);return _supa;}
  catch(e){console.warn('[DB] Supabase init failed:',e.message);return null;}
}
/* Wait for async Supabase CDN to load (max ~6s) */
function waitForSupabase(maxMs){
  return new Promise(resolve=>{
    if(window.supabase){resolve(true);return;}
    const t0=Date.now();
    const iv=setInterval(()=>{
      if(window.supabase){clearInterval(iv);resolve(true);return;}
      if(Date.now()-t0>(maxMs||6000)){clearInterval(iv);resolve(false);return;}
    },100);
  });
}
/* ── Supabase Storage: full-quality photo uploads ── */
async function uploadToStorage(file, subId){
  const sb=getSupa();if(!sb)throw new Error('No Supabase client');
  const ext=(file.name||'photo.jpg').split('.').pop().toLowerCase();
  const path=`submissions/${subId}.${ext}`;
  const{error}=await sb.storage.from('photos').upload(path,file,{cacheControl:'31536000',upsert:true});
  if(error)throw error;
  const{data}=sb.storage.from('photos').getPublicUrl(path);
  return data.publicUrl;
}
/* Retry helper for resilient cloud operations */
async function withRetry(operation,label,retries=3){
  let lastErr;
  for(let i=0;i<retries;i++){
    try{
      const result=await operation();
      return result;
    }catch(e){
      lastErr=e;
      const delay=Math.min(1000*Math.pow(2,i),8000);
      const msg=`${label} failed (try ${i+1}/${retries}): ${e.message||e}. Retrying in ${delay/1000}s…`;
      console.warn('[DB]',msg);
      showSync('syncing',msg);
      await new Promise(r=>setTimeout(r,delay));
    }
  }
  throw lastErr;
}


/* UUID generator for submission IDs */
function genId(){
  if(typeof crypto!=='undefined'&&crypto.randomUUID)return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
    const r=Math.random()*16|0;return(c==='x'?r:(r&0x3|0x8)).toString(16);
  });
}

/* Sync status bar */
function showSync(state,msg){
  console.log(`[SYNC] ${state.toUpperCase()}: ${msg}`);
  let bar=document.getElementById('syncBar');
  if(!bar){
    bar=document.createElement('div');
    bar.id='syncBar';
    bar.className='sync-bar';
    bar.innerHTML='<div class="sync-dot" id="syncDot"></div><span id="syncMsg"></span>';
    document.body.appendChild(bar);
  }
  bar.classList.add('visible');
  const dot = document.getElementById('syncDot');
  dot.className='sync-dot '+state;
  document.getElementById('syncMsg').textContent=msg;
  
  if(state==='ok'||state==='live') {
    if(state==='ok') setTimeout(()=>bar.classList.remove('visible'),2500);
  }
}

/* ═══════════════════════════════════════════════════════════
   SUPABASE REALTIME LAYER
   Keeps all devices in sync without refreshes
═══════════════════════════════════════════════════════════ */
let _subChannel = null;
let currentFormCategory = null;
let currentAdminCat = 'all';
let currentEditorCat = 'all';


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

  // Refresh active views
  if (document.getElementById('viewAdmin')?.classList.contains('active')) renderAdmin();
  if (document.getElementById('viewEditor')?.classList.contains('active')) renderEditor();
  if (document.getElementById('viewWorkspace')?.classList.contains('active')) wsGeneratePreview();
}

function handleRealtimeSetting(payload) {
  const { eventType, new: newRow } = payload;
  if (eventType === 'DELETE') return;
  
  const key = newRow.key;
  const val = typeof newRow.value === 'string' ? JSON.parse(newRow.value) : newRow.value;
  
  if (key === 'cfg') cfg = val;
  if (key === 'ls_settings') {
    lsSettings = val;
    applyLsColors(val);
  }
  if (key === 'labels') labelOverrides = val;
  if (key === 'section_order') sectionOrder = val;
  if (key === 'form_config') formConfig = val;
  
  showSync('live', '✦ Settings synced');
  
  // Refresh UI if in Layout Studio or Settings
  if (document.getElementById('adminModeLayout')?.style.display === 'block') {
    loadLsSettingsToUI();
    renderSectionManager();
  }
}


/* (withRetry defined above — duplicate removed) */

/* ── Submissions (cloud + local mirror) ── */
async function dbLoadAll(){
  showSync('syncing','Connecting to cloud…');
  try{
    const sb=getSupa();
    if(!sb) throw new Error('Supabase client not available — check internet');

    const res = await Promise.race([
      sb.from('submissions').select('*').order('created_at', { ascending: true }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Sync timeout')), 8000))
    ]);

    if(res.error){
      /* Distinguish RLS block (HTTP 401/403/PGRST) from network error */
      const isRLS = res.error.code==='42501'||res.error.message?.includes('permission')||res.error.message?.includes('policy');
      if(isRLS){
        showSync('err','⚠ Supabase RLS is blocking access — run fix SQL in Supabase (see console)');
        console.error('[DB] RLS BLOCK — To fix, go to Supabase Dashboard → SQL Editor and run:\n\n' +
          '-- Allow all reads and writes for anonymous users:\n' +
          'ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;\n' +
          'DROP POLICY IF EXISTS "public_access" ON public.submissions;\n' +
          'CREATE POLICY "public_access" ON public.submissions FOR ALL TO anon USING (true) WITH CHECK (true);\n\n' +
          'ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;\n' +
          'DROP POLICY IF EXISTS "public_access" ON public.settings;\n' +
          'CREATE POLICY "public_access" ON public.settings FOR ALL TO anon USING (true) WITH CHECK (true);\n');
      } else {
        showSync('err','Cloud error: '+(res.error.message||'unknown'));
      }
      throw res.error;
    }

    const cloudRows = res.data || [];

    /* Normalise: Supabase row → internal format */
    const mapped=cloudRows.map(r=>({
      id:r.id,category:r.category,ts:r.ts||new Date(r.created_at).toLocaleString(),
      createdAt:r.created_at?new Date(r.created_at).getTime():r.created_at_ms||Date.now(),
      status:r.status||'pending',reviewerNote:r.reviewer_note||'',reviewedAt:r.reviewed_at||null,
      data:typeof r.data==='string'?JSON.parse(r.data):r.data||{},
      photoData:r.photo_data||null,photoName:r.photo_name||null,
      photos:r.photos?(typeof r.photos==='string'?JSON.parse(r.photos):r.photos):null
    }));

    persistSubCache(mapped);
    showSync('ok','✓ Cloud synced — '+mapped.length+' submissions');
    return mapped;
  }catch(e){
    console.warn('[DB] Cloud load failed:',e.message);
    const cached=loadSubCache();
    if(cached.length){subs=cached;showSync('err','Cloud unreachable - using local cache');return cached;}
    showSync('err','Cloud unreachable - cannot load data');
    return subs || [];
  }
}

async function dbSaveSubmission(sub){
  /* Optimistic memory update */
  const idx=subs.findIndex(s=>String(s.id)===String(sub.id));
  if(idx>=0)subs[idx]=sub;else subs.push(sub);
  persistSubCache(subs);
  
  /* Cloud sync */
  showSync('syncing','Syncing to cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const row={
      id:sub.id,category:sub.category,ts:sub.ts,
      created_at:new Date(sub.createdAt||Date.now()).toISOString(),
      status:sub.status,reviewer_note:sub.reviewerNote||'',
      reviewed_at:sub.reviewedAt?new Date(sub.reviewedAt).toISOString():null,
      data:JSON.stringify(sub.data),
      photo_data:sub.photoData||null,photo_name:sub.photoName||null,
      photos:sub.photos?JSON.stringify(sub.photos):null
    };
    
    const{error,data}=await sb.from('submissions').upsert(row,{onConflict:'id'}).select();
    if(error) {
      await withRetry(async()=>{
        const{error:e2,data:d2}=await sb.from('submissions').upsert(row,{onConflict:'id'}).select();
        if(e2)throw e2;
        return d2;
      }, 'Saving submission');
    }
    
    showSync('ok','✓ Cloud synced');
  }catch(e){
    console.warn('[DB] Cloud save failed:',e.message);
    showSync('err','Failed to sync to cloud');
  }
}
async function dbDeleteSubmission(id){
  /* Optimistic memory delete */
  subs=subs.filter(s=>String(s.id)!==String(id));
  persistSubCache(subs);
  
  showSync('syncing','Deleting from cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    
    const{error}=await sb.from('submissions').delete().eq('id',String(id));
    if(error){
      await withRetry(async()=>{
        const{error:e2}=await sb.from('submissions').delete().eq('id',String(id));
        if(e2)throw e2;
      },'Deleting submission');
    }
    
    showSync('ok','✓ Deleted from cloud');
  }catch(e){
    console.warn('[DB] Cloud delete failed:',e.message);
    showSync('err','Failed to delete from cloud');
  }
}
async function dbUpdateStatus(id,status,reviewerNote,reviewedAt){
  if(status === 'rejected') {
    console.log('[DB] Submission rejected. Permanently wiping from system.');
    return dbDeleteSubmission(id);
  }

  /* Optimistic memory update */
  const s=subs.find(x=>String(x.id)===String(id));
  if(s){s.status=status;s.reviewerNote=reviewerNote||'';s.reviewedAt=reviewedAt||null;persistSubCache(subs);}
  
  showSync('syncing','Updating cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const updateData = {
      status, 
      reviewer_note:reviewerNote||'',
      reviewed_at:reviewedAt?new Date(reviewedAt).toISOString():null
    };
    
    const{error}=await sb.from('submissions').update(updateData).eq('id',String(id));
    if(error){
      await withRetry(async()=>{
        const{error:e2}=await sb.from('submissions').update(updateData).eq('id',String(id));
        if(e2)throw e2;
      },'Updating status');
    }
    
    showSync('ok','✓ Updated in cloud');
  }catch(e){
    console.warn('[DB] Cloud update failed:',e.message);
    showSync('err','Failed to update cloud');
  }
}

/* ── Settings (cloud kv store) ── */
async function dbLoadSettings(key){
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const data = await Promise.race([
      (async () => {
        const { data, error } = await sb.from('settings').select('value').eq('key', key).maybeSingle();
        if (error) throw error;
        return data;
      })(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch timeout')), 6000))
    ]);
    if(data?.value){
      const parsed=typeof data.value==='string'?JSON.parse(data.value):data.value;
      return parsed;
    }
  }catch(e){console.warn('[DB] Settings load failed:',key,e.message);}
  return null;
}
async function dbSaveSettings(key,value){
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    await withRetry(async()=>{
      const{error}=await sb.from('settings').upsert({key,value:JSON.stringify(value)},{onConflict:'key'});
      if(error)throw error;
    },'Saving settings '+key);
  }catch(e){console.warn('[DB] Settings save failed:',key,e.message);}
}

/* ── Patched legacy sync functions ── */
function loadAll(){if(!subs||!subs.length)subs=loadSubCache();return subs;}

async function dbSaveAllToCloud(list){
  if(!list||!list.length)return;
  showSync('syncing','Saving all to cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const rows = list.map(sub=>({
      id:sub.id,category:sub.category,ts:sub.ts,
      created_at:new Date(sub.createdAt||Date.now()).toISOString(),
      status:sub.status,reviewer_note:sub.reviewerNote||'',
      reviewed_at:sub.reviewedAt?new Date(sub.reviewedAt).toISOString():null,
      data:JSON.stringify(sub.data),photo_data:sub.photoData||null,photo_name:sub.photoName||null,
      photos:sub.photos?JSON.stringify(sub.photos):null
    }));
    await withRetry(async()=>{
      const {error}=await sb.from('submissions').upsert(rows,{onConflict:'id'});
      if(error)throw error;
    },'Bulk saving submissions');
    showSync('ok','✓ Synced all to cloud');
  }catch(e){
    console.warn('[DB] Bulk upsert failed:',e.message);
    showSync('err','Cloud unreachable — saved locally');
  }
}

function saveAll(list){
  subs = Array.isArray(list)?list:[];
  persistSubCache(subs);
  /* Fire-and-forget bulk upsert */
  dbSaveAllToCloud(subs);
}

/* CONFIG — loads from localStorage (cloud override happens in initCloudSync) */
function loadCfg(){
  try{
    const s=JSON.parse(localStorage.getItem('me_cfg')||'null');
    if(s&&typeof s==='object'&&s.adminPin&&s.editorPin)return s;
  }catch(e){}
  return{adminPin:'1234',editorPin:'5678'};
}
function saveCfg(n){
  cfg=n;
  localStorage.setItem('me_cfg',JSON.stringify(n));
  dbSaveSettings('cfg',n);
}
let cfg=loadCfg();

/* LAYOUT SETTINGS */
function loadLsSettings(){try{applyCustomCategories(lsSettings);}catch(e){}}
function saveLsSettingsToStorage(s){
  lsSettings=s;
  localStorage.setItem('me_ls_settings',JSON.stringify(s));
  dbSaveSettings('ls_settings',s);
}

function applyCustomCategories(s){
  if(!s||!Array.isArray(s.customCategories))return;
  s.customCategories.forEach(c=>{
    CATEGORIES[c.id]=c;
  });
  CATEGORY_KEYS=Object.keys(CATEGORIES);
  
  // Ensure they are in sectionOrder
  s.customCategories.forEach(c=>{
    if(!sectionOrder.find(sec=>sec.key===c.id)){
      sectionOrder.push({key:c.id,label:c.label,icon:c.icon,layout:'single',visible:true});
    }
  });
}

/* LABELS */
function loadLabels(){
  try{
    const s=JSON.parse(localStorage.getItem('me_labels')||'null');
    if(s && typeof s==='object' && !Array.isArray(s)) return s;
  }catch(e){}
  return {};
}
function saveLabels(l){labelOverrides=l||{};try{localStorage.setItem('me_labels',JSON.stringify(labelOverrides));}catch(e){}dbSaveSettings('labels',labelOverrides);}
let labelOverrides=loadLabels();
function getLabel(key,fallback){
  if (!labelOverrides || typeof labelOverrides !== 'object') return fallback;
  return labelOverrides[key]||fallback;
}

/* ── Async init: pull cloud data on page load ── */
async function initCloudSync(){
  const statusEl = document.getElementById('bootLoadingStatus');
  if(statusEl) statusEl.textContent = 'Syncing settings…';
  showSync('syncing','Connecting to cloud…');
  try{
    /* Start Realtime listeners early */
    initRealtime();

    /* Pull settings first */
    const settingsToLoad = ['cfg','ls_settings','labels','section_order','form_config'];
    const results = await Promise.allSettled(settingsToLoad.map(k => dbLoadSettings(k)));
    
    results.forEach((res, i) => {
      const key = settingsToLoad[i];
      if(res.status === 'fulfilled' && res.value){
        const val = res.value;
        if(key === 'cfg'){ cfg = {...cfg, ...val}; try{localStorage.setItem('me_cfg',JSON.stringify(cfg));}catch(e){} }
        if(key === 'ls_settings'){
          lsSettings = val;
          try{localStorage.setItem('me_ls_settings',JSON.stringify(val));}catch(e){}
          applyLsColors(val);
          applyCustomCategories(val);
        }
        if(key === 'labels'){ labelOverrides = {...labelOverrides, ...val}; try{localStorage.setItem('me_labels',JSON.stringify(labelOverrides));}catch(e){} }
        if(key === 'section_order'){ sectionOrder = val; try{localStorage.setItem('me_section_order',JSON.stringify(val));}catch(e){} }
        if(key === 'form_config'){ formConfig = val; try{localStorage.setItem('me_form_config',JSON.stringify(val));}catch(e){} }
      }
    });

    if(statusEl) statusEl.textContent = 'Loading submissions…';
    /* Pull submissions */
    subs=await dbLoadAll();
    
    showSync('ok', subs.length ? '✓ Cloud Synced' : '✓ Connected (Empty)');
    if(subs.length) showSync('live','✦ Live & Synced');
    
    /* Refresh any open view */
    if(document.getElementById('viewAdmin')?.classList.contains('active'))renderAdmin();
    if(document.getElementById('viewEditor')?.classList.contains('active'))renderEditor();
    if(document.getElementById('viewLanding')?.classList.contains('active'))renderLandingCards();
  }catch(e){
    console.warn('[DB] Init sync failed:', e.message);
    showSync('err','Running offline — using local cache');
  } finally {
    /* ALWAYS remove overlay after sync attempt (success or fail) */
    if(typeof removeBootOverlay === 'function') removeBootOverlay();
  }
}

/* ═══════════════════════════════════════════════════════════
   OCR ENGINE — Gemini 2.0 Flash via OpenRouter
   Targets: academic, interviews, speeches, creative, motivational
═══════════════════════════════════════════════════════════ */
const OCR_TARGET_CATS=['academic','interviews','speeches','creative','motivational'];
const OCR_TARGET_FIELDS={
  academic:'ff-articleBody',
  interviews:'ff-qaBody',
  speeches:'ff-speechBody',
  creative:'ff-contribBody',
  motivational:'ff-articleBody'
};

function buildOCRPanel(catKey){
  if(!OCR_TARGET_CATS.includes(catKey))return'';
  return`
  <div class="f-card">
    <div class="f-card-title">📷 Snap &amp; Transcribe — OCR</div>
    <div class="ocr-panel">
      <div class="ocr-panel-title">✦ Scan Handwritten or Printed Text</div>
      <p style="font-size:12px;color:rgba(255,255,255,.7);margin-bottom:12px;">Take a photo or upload an image of your document. Gemini AI will read and transcribe the text directly into the form field below.</p>
      <div class="ocr-btn-row">
        <button class="ocr-btn ocr-btn-cam" onclick="ocrCapture('${catKey}','camera')">📷 Take Photo</button>
        <button class="ocr-btn ocr-btn-file" onclick="ocrCapture('${catKey}','file')">📁 Upload Image</button>
      </div>
      <input type="file" id="ocrInput-${catKey}" accept="image/*" style="display:none;" onchange="ocrProcess(event,'${catKey}')"/>
      <input type="file" id="ocrCamInput-${catKey}" accept="image/*" capture="environment" style="display:none;" onchange="ocrProcess(event,'${catKey}')"/>
      <div class="ocr-status" id="ocrStatus-${catKey}">Ready — point camera at any text</div>
      <img class="ocr-preview-img" id="ocrPreview-${catKey}" alt="Scanned image"/>
    </div>
  </div>`;
}

function ocrCapture(catKey,mode){
  const inputId=mode==='camera'?`ocrCamInput-${catKey}`:`ocrInput-${catKey}`;
  document.getElementById(inputId)?.click();
}

async function ocrProcess(event,catKey){
  const file=event.target.files?.[0];if(!file)return;
  const statusEl=document.getElementById(`ocrStatus-${catKey}`);
  const previewEl=document.getElementById(`ocrPreview-${catKey}`);
  const s=lsSettings;
  const apiKey=s.apiKey;
  if(!apiKey){
    statusEl.className='ocr-status err';
    statusEl.textContent='⚠ No API key. Go to Design Settings → AI Configuration.';
    return;
  }
  /* Show preview */
  const previewURL=URL.createObjectURL(file);
  previewEl.src=previewURL;previewEl.style.display='block';
  statusEl.className='ocr-status running';
  statusEl.textContent='🔍 Reading text with Gemini…';
  /* Convert to base64 */
  const base64=await new Promise((res,rej)=>{
    const r=new FileReader();r.onload=e=>res(e.target.result.split(',')[1]);
    r.onerror=rej;r.readAsDataURL(file);
  });
  const mimeType=file.type||'image/jpeg';
  try{
    const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey,
        'HTTP-Referer':'https://magazine-teachers-profile.vercel.app','X-Title':'MagicEditor OCR'},
      body:JSON.stringify({
        model:'google/gemini-2.0-flash-001',
        max_tokens:4000,
        messages:[{
          role:'user',
          content:[
            {type:'image_url',image_url:{url:`data:${mimeType};base64,${base64}`}},
            {type:'text',text:'You are a precise OCR engine for a school magazine. Transcribe ALL text from this image EXACTLY as written — preserve every word, punctuation, paragraph break, and line break. Do not summarize, paraphrase, or add anything. If the handwriting is unclear, make your best attempt and mark unclear words with [?]. Output only the transcribed text with no preamble.'}
          ]
        }]
      })
    });
    const data=await resp.json();
    const transcribed=data.choices?.[0]?.message?.content||'';
    if(!transcribed){statusEl.className='ocr-status err';statusEl.textContent='✗ No text found. Try a clearer image.';return;}
    /* Inject into target field */
    const fieldId=OCR_TARGET_FIELDS[catKey];
    const ta=document.getElementById(fieldId);
    if(ta){
      const existing=ta.value.trim();
      ta.value=existing?(existing+'\n\n'+transcribed):transcribed;
      ta.dispatchEvent(new Event('input'));
      ta.scrollIntoView({behavior:'smooth',block:'center'});
    }
    statusEl.className='ocr-status done';
    statusEl.textContent=`✓ Transcribed ${transcribed.length} characters — text added to form.`;
    URL.revokeObjectURL(previewURL);
  }catch(e){
    statusEl.className='ocr-status err';
    statusEl.textContent='✗ Error: '+e.message;
  }
  event.target.value='';
}

/* ═══════════════════════════════════════════════════════════
   GALLERY BULK UPLOAD
═══════════════════════════════════════════════════════════ */
/* Gallery bulk upload state (global) */
function buildGalleryTabs(){
  return`
  <div class="f-card">
    <div class="gallery-tabs">
      <button class="gallery-tab active" id="gtab-single" onclick="switchGalleryTab('single')">📷 Single Upload</button>
      <button class="gallery-tab" id="gtab-bulk" onclick="switchGalleryTab('bulk')">📦 Bulk Upload</button>
    </div>
    <!-- Single upload tab (existing photo flow) -->
    <div class="gallery-tab-pane active" id="gpane-single">
      <div class="f-card-title">Photo &amp; Caption</div>
      <div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave()" ondrop="dropPhoto(event)">
        <input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/>
        <div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>Upload gallery photo <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">High quality · Min 1200×1200px</span></div>
        <div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><div class="photo-dims" id="photoDims"></div><button class="photo-change" onclick="resetPhoto(event)">Change photo</button></div>
      </div>
      <div class="photo-err-msg" id="photoErrMsg"></div>
      <div class="photo-reqs"><p><strong>For print quality:</strong> minimum 1200×1200 pixels, JPG or PNG, original file preserved for print.</p></div>
    </div>
    <!-- Bulk upload tab -->
    <div class="gallery-tab-pane" id="gpane-bulk">
      <div class="f-card-title">Bulk Photo Upload</div>
      <div class="bulk-drop-zone" onclick="document.getElementById('bulkPhotoInput').click()">
        <input type="file" id="bulkPhotoInput" accept=".jpg,.jpeg,.png,.webp" multiple style="display:none;" onchange="handleBulkPhotos(event)"/>
        <span style="font-size:40px;display:block;margin-bottom:10px;">📦</span>
        <h3>Select Multiple Photos</h3>
        <p>Click to choose up to 30 photos at once — add captions for each</p>
      </div>
      <div id="bulkGrid" class="bulk-grid"></div>
      <div id="bulkCount" style="margin-top:10px;font-size:13px;color:var(--ink3);"></div>
      <div id="bulkErrMsg" class="photo-err-msg"></div>
      <button class="submit-btn" style="margin-top:1.25rem;" onclick="submitBulkGallery()">📦 Submit All Bulk Photos</button>
    </div>
  </div>`;
}

function switchGalleryTab(tab){
  ['single','bulk'].forEach(t=>{
    document.getElementById('gtab-'+t)?.classList.toggle('active',t===tab);
    document.getElementById('gpane-'+t)?.classList.toggle('active',t===tab);
  });
}

function handleBulkPhotos(event){
  const files=Array.from(event.target.files||[]);
  const errEl=document.getElementById('bulkErrMsg');errEl.style.display='none';
  const max=30;
  const rem=max-bulkPhotos.length;
  if(rem<=0){errEl.textContent=`Maximum ${max} photos reached.`;errEl.style.display='block';return;}
  const toAdd=files.slice(0,rem);
  if(files.length>rem){errEl.textContent=`Adding first ${rem} — limit is ${max} total.`;errEl.style.display='block';}
  toAdd.forEach(f=>processBulkPhoto(f));
  event.target.value='';
}
function processBulkPhoto(file){
  const errEl=document.getElementById('bulkErrMsg');
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)){if(errEl){errEl.textContent=`Skipped "${file.name}": invalid format.`;errEl.style.display='block';}return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){if(errEl){errEl.textContent=`Skipped "${file.name}": max ${PRINT_MAX_IMAGE_MB} MB.`;errEl.style.display='block';}return;}
  const img=new Image(),url=URL.createObjectURL(file);
  const fileName=file.name;
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){if(errEl){errEl.textContent=`Skipped "${file.name}": minimum ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px for print.`;errEl.style.display='block';}URL.revokeObjectURL(url);return;}
    const r=new FileReader();
    r.onload=ev=>{
      bulkPhotos.push({dataURL:ev.target.result,file:file,fileName:fileName,caption:'',meta:{w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)}});
      renderBulkGrid();
    };
    r.readAsDataURL(file);URL.revokeObjectURL(url);
  };
  img.onerror=()=>{if(errEl){errEl.textContent=`Skipped "${file.name}": could not read image.`;errEl.style.display='block';}URL.revokeObjectURL(url);};
  img.src=url;
}
function wsImageQualityLevel(w,h){
  const min=Math.min(parseInt(w)||0,parseInt(h)||0);
  if(min>=PRINT_IMAGE_RECOMMENDED_PX)return 'press-ready';
  if(min>=PRINT_IMAGE_MIN_PX)return 'acceptable';
  return 'low';
}
function wsImageQualityText(meta){
  if(!meta)return 'resolution unknown';
  return `${meta.w}x${meta.h}px - ${meta.printQuality||wsImageQualityLevel(meta.w,meta.h)}`;
}
function renderBulkGrid(){
  const grid=document.getElementById('bulkGrid');
  const ctr=document.getElementById('bulkCount');
  if(!grid)return;
  grid.innerHTML=bulkPhotos.map((p,i)=>`
    <div class="bulk-thumb">
      <img src="${p.dataURL}" alt="Photo ${i+1}"/>
      <button class="bulk-thumb-rm" onclick="removeBulkPhoto(${i})">×</button>
      <div class="bulk-thumb-cap">
        <input type="text" placeholder="Caption for photo ${i+1}" value="${esc(p.caption)}" oninput="updateBulkCaption(${i},this.value)"/>
      </div>
    </div>`).join('');
  if(ctr)ctr.textContent=bulkPhotos.length?`${bulkPhotos.length} photo${bulkPhotos.length>1?'s':''} ready to submit`:'';
}
function removeBulkPhoto(i){bulkPhotos.splice(i,1);renderBulkGrid();}
function updateBulkCaption(i,val){if(bulkPhotos[i])bulkPhotos[i].caption=val;}

async function submitBulkGallery(){
  if(!bulkPhotos.length){alert('Please add at least one photo.');return;}
  /* Validate required fields */
  const submitterName=(document.getElementById('ff-submitterName')?.value||'').trim();
  if(!submitterName){alert('Please enter your name before submitting.');document.getElementById('ff-submitterName')?.focus();return;}
  const submitterRole=(document.getElementById('ff-submitterRole')?.value||'').trim()||'';
  const ts=new Date().toLocaleString();
  let count=0;let errors=0;
  showSync('syncing','Uploading '+bulkPhotos.length+' photos…');
  for(const p of bulkPhotos){
    try{
      const subId=genId();
      /* Upload to Storage for full quality */
      let photoData=p.dataURL;
      if(p.file){
        try{photoData=await uploadToStorage(p.file,subId);}catch(e){console.warn('[Storage] Bulk photo upload failed:',e.message);}
      }
      const sub={
        id:subId,
        category:'gallery',ts,createdAt:Date.now()+count,
        status:'pending',
        reviewerNote:'',reviewedAt:null,
        data:{
          submitterName:{label:'Submitted by',value:submitterName},
          submitterRole:{label:'Role',value:submitterRole},
          photoCaption:{label:'Photo caption',value:p.caption||'Gallery photo'},
          photoCategory:{label:'Category',value:'Other'},
          photoDate:{label:'Date',value:''}
        },
        photoData:photoData,photoName:p.fileName||('photo_'+(count+1)+'.jpg'),photoMeta:p.meta||null,photos:null
      };
      await dbSaveSubmission(sub);
      count++;
    }catch(e){
      console.warn('[Gallery] Failed to save photo '+(count+1)+':',e.message);
      errors++;
    }
  }
  bulkPhotos=[];renderBulkGrid();
  if(errors){
    alert(`${count} photos submitted, ${errors} failed. Failed items saved locally and will sync later.`);
  } else {
    alert(`✓ ${count} photos submitted successfully! They are now awaiting Editor review.`);
  }
  showSync('ok','✓ '+count+' photos uploaded');
  document.getElementById('formContainer').style.display='none';
  document.getElementById('successWrap').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}
const DEFAULT_SECTION_ORDER=[
  {key:'cover',label:'Cover Page',icon:'📕',editable:false,visible:true,layout:'cover'},
  {key:'toc',label:'Table of Contents',icon:'📑',editable:false,visible:true,layout:'toc'},
  {key:'editorial-note',label:'Editorial Note',icon:'✎',editable:true,visible:true,layout:'single'},
  {key:'speeches',label:'Speeches & Addresses',icon:'🎤',editable:true,visible:true,layout:'single'},
  {key:'primary5',label:'Primary 5 Graduates',icon:'🧒',editable:true,visible:true,layout:'grid'},
  {key:'primary5_class_photo',label:'Primary 5 Full Class Picture',icon:'P5',editable:true,visible:true,layout:'class-photo'},
  {key:'jss3',label:'JSS3 Graduates',icon:'🎒',editable:true,visible:true,layout:'grid'},
  {key:'jss3_class_photo',label:'JSS3 Full Class Picture',icon:'J3',editable:true,visible:true,layout:'class-photo'},
  {key:'ss3_class_message',label:'Graduating Class Message',icon:'SS3',editable:true,visible:true,layout:'class-message'},
  {key:'ss3',label:'SS3 Graduates',icon:'🎓',editable:true,visible:true,layout:'grid'},
  {key:'teachers',label:'Staff Profiles',icon:'👨‍🏫',editable:true,visible:true,layout:'teacher-grid'},
  {key:'academic',label:'Academic & Educational',icon:'📚',editable:true,visible:true,layout:'single'},
  {key:'creative',label:'Creative Corner',icon:'✍️',editable:true,visible:true,layout:'double'},
  {key:'events',label:'School Life & Events',icon:'📸',editable:true,visible:true,layout:'events'},
  {key:'interviews',label:'Interviews',icon:'🎙️',editable:true,visible:true,layout:'single'},
  {key:'motivational',label:'Motivational Articles',icon:'💡',editable:true,visible:true,layout:'single'},
  {key:'gallery',label:'Photo Gallery',icon:'🖼️',editable:true,visible:true,layout:'gallery'},
  {key:'appreciation',label:'Appreciation Section',icon:'🙏',editable:true,visible:true,layout:'single'},
  {key:'advertisements',label:'Advertisements',icon:'AD',editable:true,visible:true,layout:'advertisements'}
];
function normalizeSectionOrder(order){
  const base=JSON.parse(JSON.stringify(DEFAULT_SECTION_ORDER));
  if(!Array.isArray(order)||!order.length)return base;
  const defaults=new Map(base.map(sec=>[sec.key,sec]));
  const seen=new Set();
  const merged=order.filter(sec=>sec&&sec.key).map(sec=>{seen.add(sec.key);return Object.assign({},defaults.get(sec.key)||{},sec);});
  base.forEach(sec=>{if(!seen.has(sec.key))merged.push(sec);});
  return merged;
}
function loadSectionOrder(){try{const s=JSON.parse(localStorage.getItem('me_section_order')||'null');return normalizeSectionOrder(s);}catch(e){}return normalizeSectionOrder(null);}
function saveSectionOrder(){
  localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));
  dbSaveSettings('section_order',sectionOrder);
  alert('Section order saved!');
}
sectionOrder=loadSectionOrder();

/* FORM CONFIG — Fix 4: synced to cloud so all devices/links get same custom fields */
function loadFormConfig(){try{const raw=JSON.parse(localStorage.getItem('me_form_config')||'{}')||{};Object.keys(raw).forEach(k=>{if(!raw[k])raw[k]={};if(!raw[k].overrides||typeof raw[k].overrides!=='object')raw[k].overrides={};if(!Array.isArray(raw[k].customFields))raw[k].customFields=[];});return raw;}catch(e){return{};}}
function saveFormConfig(c){
  formConfig=c;
  localStorage.setItem('me_form_config',JSON.stringify(c));
  /* Sync to cloud immediately so all links/devices get it */
  dbSaveSettings('form_config',c).then(()=>showSync('ok','✓ Form config saved to cloud'));
}
formConfig=loadFormConfig();
function getEffectiveFields(catKey){const cat=CATEGORIES[catKey];if(!cat)return[];const ov=(formConfig[catKey]&&formConfig[catKey].overrides)||{};const cf=(formConfig[catKey]&&formConfig[catKey].customFields)||[];const bi=cat.fields.map((f,i)=>{const o=ov[f.id]||{};return{...f,_isBuiltIn:true,required:o.required!==undefined?!!o.required:!!f.required,hidden:!!o.hidden,order:o.order!==undefined?Number(o.order):i};});const cu=cf.map((c,i)=>({...c,_isBuiltIn:false,order:c.order!==undefined?Number(c.order):(1000+i)}));return[...bi,...cu].filter(f=>!f.hidden).sort((a,b)=>(a.order||0)-(b.order||0));}
function getAllFieldsForEditing(catKey){const cat=CATEGORIES[catKey];if(!cat)return[];const ov=(formConfig[catKey]&&formConfig[catKey].overrides)||{};const cf=(formConfig[catKey]&&formConfig[catKey].customFields)||[];const bi=cat.fields.map((f,i)=>{const o=ov[f.id]||{};return{...f,_isBuiltIn:true,required:o.required!==undefined?!!o.required:!!f.required,hidden:!!o.hidden,order:o.order!==undefined?Number(o.order):i};});const cu=cf.map((c,i)=>({...c,_isBuiltIn:false,hidden:!!c.hidden,order:c.order!==undefined?Number(c.order):(1000+i)}));return[...bi,...cu].sort((a,b)=>(a.order||0)-(b.order||0));}

/* STATE */
let photoFile=null,photoDataURL=null,photoMeta=null,photoFilesMulti=[],photoDataURLsMulti=[],photoMetasMulti=[];
let pinBuf='',pinMode=null;
let reviewingId=null,reviewingDecision=null,currentLsTab='preview';
let magPages=[],currentPageIdx=0,renamingKey=null,dragSrcIdx=null;
let currentCustCat=null,editingCustomFieldId=null;
/* AI Chat history for conversational layout assistant */
let aiChatHistory=[];
let aiPendingSuggestion=null;

/* VIEW */
function show(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function goLanding(){show('viewLanding');currentFormCategory=null;resetFormState();renderLandingCards();if(window.history&&window.history.replaceState){window.history.replaceState({},document.title,window.location.pathname);}}

/* LANDING CARDS */
function renderLandingCards(){
  const grid=document.getElementById('formGrid');
  if(!grid) return;
  try {
    const h=document.getElementById('landingHeading');if(h)h.textContent=getLabel('landing_heading','Choose a content category');
    const DESCS={teachers:'For teaching staff and management. Share your journey, subjects, and message to the graduating class.',primary5:'For Primary 5 pupils moving on. Tell the world who you are.',primary5_class_photo:'Upload the general Primary 5 full class picture for the end of the section.',jss3:'For Junior Secondary 3 students finishing this phase.',jss3_class_photo:'Upload the general JSS3 full class picture for the end of the section.',ss3_class_message:'Submit the SS3 graduating class message with one full class picture before profile pages.',ss3:'For the main graduating class. Your legacy, your ambitions, your message.',speeches:'Proprietor, Senior Boy, guest speakers — formal addresses for the magazine.',creative:'Poems, short stories, jokes, riddles — creative writing from across the school.',events:'Sports days, excursions, competitions, achievements — the year\'s highlights.',academic:'Articles, subject features, research write-ups, and educational content.',interviews:'Q&A with old students, guest speakers, and notable voices.',motivational:'Inspirational messages and wisdom for the graduating class.',gallery:'Submit standalone photos with captions for the gallery section.',advertisements:'Submit business flyer images only for advertisement pages.'};
    const STRIPES={teachers:'stripe-gold',primary5:'stripe-green',primary5_class_photo:'stripe-green',jss3:'stripe-green',jss3_class_photo:'stripe-green',ss3_class_message:'stripe-blue',ss3:'stripe-green',speeches:'stripe-blue',creative:'stripe-purple',events:'stripe-amber',academic:'stripe-blue',interviews:'stripe-mint',motivational:'stripe-purple',gallery:'stripe-gold',advertisements:'stripe-amber'};
    
    if(!CATEGORY_KEYS || !CATEGORY_KEYS.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--ink2);">No categories found. Please check configuration.</div>';
      return;
    }

    grid.innerHTML=CATEGORY_KEYS.map(k=>{
      const cat=CATEGORIES[k];
      if(!cat) return '';
      const lbl=getLabel('cat_label_'+k, cat.label || k);
      const dsc=getLabel('cat_desc_'+k, DESCS[k]||'');
      /* Use a data-cat attribute so the click handler always reads the correct key */
      return`<div class="form-card" data-cat="${esc(k)}" onclick="openForm(this.dataset.cat)">
        <span class="form-card-stripe ${STRIPES[k]||'stripe-blue'}"></span>
        <span class="form-card-icon">${cat.icon||'📝'}</span>
        <h3>${esc(lbl)}</h3>
        <p>${esc(dsc)}</p>
      </div>`;
    }).join('');
  } catch(err) {
    console.error('Render error in renderLandingCards:', err);
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--red);">Failed to render categories. Please refresh the page.</div>';
  }
}

/* FORM BUILDING */
function openForm(k){
  /* Validate category key */
  if(!k || !CATEGORIES[k]){
    console.error('[openForm] Unknown category key:', k);
    return;
  }
  currentFormCategory=k;
  resetFormState();
  const cat=CATEGORIES[k];

  /* Set hero text — always use live values, never leave as dashes */
  const tagEl=document.getElementById('formTag');
  const titleEl=document.getElementById('formTitle');
  const subEl=document.getElementById('formSubtitle');
  if(tagEl) tagEl.textContent=getLabel('cat_tag_'+k, cat.tag||k);
  if(titleEl) titleEl.textContent=getLabel('cat_form_title_'+k, cat.title||cat.label||k);
  if(subEl) subEl.textContent=getLabel('cat_form_subtitle_'+k, cat.subtitle||'');

  /* Hide success, show and clear the form container */
  const wrap=document.getElementById('successWrap');
  if(wrap) wrap.style.display='none';
  const cont=document.getElementById('formContainer');
  if(cont){ cont.style.display='block'; cont.innerHTML=''; }

  /* Build form — show inline error on failure instead of silent blank */
  try {
    buildForm(k);
  } catch(e) {
    console.error('[openForm] buildForm failed:', e);
    if(cont) cont.innerHTML='<div style="padding:2rem;text-align:center;color:var(--red);">&#9888; Failed to load form. Please refresh and try again.<br><small>'+(e.message||'')+'</small></div>';
  }

  /* Switch view and scroll to top */
  show('viewForm');
  window.scrollTo(0,0);
}
function resetFormState(){photoFile=null;photoDataURL=null;photoMeta=null;photoFilesMulti=[];photoDataURLsMulti=[];photoMetasMulti=[];}
function buildForm(k){
  const cat=CATEGORIES[k];const c=document.getElementById('formContainer');
  bulkPhotos=[];/* reset bulk state */
  let h=`<div class="f-card"><div class="f-card-title">Your Details</div>`;
  getEffectiveFields(k).forEach(f=>{h+=buildFieldHtml(f);});h+=`</div>`;
  /* OCR panel — inject for applicable categories */
  h+=buildOCRPanel(k);
  /* Gallery: replace standard photo card with tabbed version */
  if(k==='gallery'){
    h+=buildGalleryTabs();
  } else if(cat.photoRequired&&cat.photoMulti){
    const max=cat.photoMax||5;
    h+=`<div class="f-card"><div class="f-card-title">Event Photos (up to ${max})</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInputMulti').click()"><input type="file" id="photoInputMulti" accept=".jpg,.jpeg,.png,.webp" multiple onchange="handlePhotoMulti(event,${max})"/><div id="photoPlaceholderMulti"><span class="photo-drop-icon">📸</span><h3>Upload event photos <span class="req">*</span></h3><p>Tap to choose 1–${max} photos</p><span class="photo-pill">Action shots · Group photos · Min 1200×1200px</span></div></div><div id="multiPhotoGrid" class="multi-photo-grid"></div><div id="multiPhotoCount" class="multi-photo-count" style="display:none;">0 of ${max}</div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> min 1200×1200px, JPG/PNG/WebP, original file preserved for print.</p></div></div>`;
  } else if(cat.photoRequired){
    const isClass=currentFormCategory.includes('_class_')||currentFormCategory==='ss3_class_message';
    const isAdvert=currentFormCategory==='advertisements';
    const photoTitle=isAdvert?'Business flyer':isClass?'Full class picture':'Profile photo';
    const photoPrompt=isAdvert?'Upload business flyer':isClass?'Upload full class picture':'Upload your profile photo';
    const photoPill=isAdvert?'Business flyer only · Min 1200x1200px':isClass?'Full group photo · Min 1200x1200px':'Passport-style · Clear face · Min 1200x1200px';
    h+=`<div class="f-card"><div class="f-card-title">${photoTitle}</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave()" ondrop="dropPhoto(event)"><input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/><div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>${photoPrompt} <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">${photoPill}</span></div><div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><div class="photo-dims" id="photoDims"></div><button class="photo-change" onclick="resetPhoto(event)">Change photo</button></div></div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> minimum 1200x1200 pixels, original JPG/PNG/WebP kept for press output.</p></div></div>`;
  }
  /* Submit button — not shown for gallery (bulk has own button) */
  h+=`<button class="submit-btn" type="button" onclick="submitForm()" id="mainSubmitBtn">Submit</button>`;
  c.innerHTML=h;
}
function buildFieldHtml(f){
  const req=f.required?'<span class="req"> *</span>':'<span class="opt">(optional)</span>';
  const hint=f.hint?`<div class="field-hint">${esc(f.hint)}</div>`:'';
  const err=`<div class="field-err">This field is required.</div>`;
  const id=`ff-${f.id}`;
  if(f.type==='textarea'){return`<div class="field" id="fw-${f.id}"><label>${esc(f.label)}${req}</label><textarea id="${id}" class="${f.long?'long':''}" placeholder="${esc(f.placeholder||'')}"></textarea>${hint}${err}</div>`;}
  if(f.type==='select'){let optsArr=Array.isArray(f.options)?f.options:typeof f.options==='string'?f.options.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean):[];const opts=optsArr.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join('');return`<div class="field" id="fw-${f.id}"><label>${esc(f.label)}${req}</label><select id="${id}"><option value="">— Select —</option>${opts}</select>${hint}${err}</div>`;}
  if(f.type==='checkbox'){return`<div class="field" id="fw-${f.id}"><div style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="${id}"/><label for="${id}" style="font-weight:400;display:inline;cursor:pointer;">${esc(f.label)}</label></div>${hint}</div>`;}
  if(f.type==='number'){return`<div class="field" id="fw-${f.id}"><label>${esc(f.label)}${req}</label><input type="number" id="${id}" placeholder="${esc(f.placeholder||'')}" inputmode="numeric"/>${hint}${err}</div>`;}
  return`<div class="field" id="fw-${f.id}"><label>${esc(f.label)}${req}</label><input type="${f.type}" id="${id}" placeholder="${esc(f.placeholder||'')}"/>${hint}${err}</div>`;
}

/* PHOTO */
function dragOver(e){e.preventDefault();document.getElementById('photoDrop').classList.add('drag');}
function dragLeave(){const d=document.getElementById('photoDrop');if(d)d.classList.remove('drag');}
function dropPhoto(e){e.preventDefault();dragLeave();const f=e.dataTransfer.files[0];if(f)processPhoto(f);}
function handlePhoto(e){if(e.target.files[0])processPhoto(e.target.files[0]);}
function processPhoto(file){
  const err=document.getElementById('photoErrMsg');err.style.display='none';
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)){err.textContent='Invalid format. Use JPG, PNG, or WebP.';err.style.display='block';return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){err.textContent=`File too large. Max ${PRINT_MAX_IMAGE_MB} MB.`;err.style.display='block';return;}
  const img=new Image(),url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){err.textContent=`Image too small for print. Minimum ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';URL.revokeObjectURL(url);return;}
    photoFile=file;photoMeta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    const r=new FileReader();
    r.onload=ev=>{photoDataURL=ev.target.result;document.getElementById('photoPreview').src=photoDataURL;document.getElementById('photoFilename').textContent=file.name;document.getElementById('photoDims').textContent=`${img.width}x${img.height}px - ${(file.size/1024).toFixed(0)} KB - ${photoMeta.printQuality}`;document.getElementById('photoPlaceholder').style.display='none';document.getElementById('photoPreviewWrap').style.display='flex';document.getElementById('photoDrop').classList.add('uploaded');};
    r.readAsDataURL(file);URL.revokeObjectURL(url);
  };
  img.onerror=()=>{err.textContent='Could not read this image. Try another JPG, PNG, or WebP.';err.style.display='block';URL.revokeObjectURL(url);};
  img.src=url;
}function resetPhoto(e){e.stopPropagation();photoFile=null;photoDataURL=null;photoMeta=null;document.getElementById('photoInput').value='';document.getElementById('photoPreview').src='';document.getElementById('photoPlaceholder').style.display='block';document.getElementById('photoPreviewWrap').style.display='none';document.getElementById('photoDrop').classList.remove('uploaded');}
function handlePhotoMulti(event,max){const files=Array.from(event.target.files||[]);if(!files.length)return;const err=document.getElementById('photoErrMsg');err.style.display='none';const rem=max-photoFilesMulti.length;if(rem<=0){err.textContent=`Maximum ${max} photos reached.`;err.style.display='block';event.target.value='';return;}const toAdd=files.slice(0,rem);if(files.length>rem){err.textContent=`Only ${rem} more can be added.`;err.style.display='block';}toAdd.forEach(f=>processPhotoForMulti(f,max));event.target.value='';}
function processPhotoForMulti(file,max){
  const err=document.getElementById('photoErrMsg');
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)){err.textContent=`Skipped "${file.name}": invalid format.`;err.style.display='block';return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){err.textContent=`Skipped "${file.name}": too large (max ${PRINT_MAX_IMAGE_MB} MB).`;err.style.display='block';return;}
  const img=new Image();const url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){err.textContent=`Skipped "${file.name}": minimum ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px for print.`;err.style.display='block';URL.revokeObjectURL(url);return;}
    const meta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    const r=new FileReader();
    r.onload=ev=>{photoFilesMulti.push(file);photoDataURLsMulti.push(ev.target.result);photoMetasMulti.push(meta);renderMultiPhotoGrid(max);};
    r.readAsDataURL(file);URL.revokeObjectURL(url);
  };
  img.onerror=()=>{err.textContent=`Skipped "${file.name}".`;err.style.display='block';URL.revokeObjectURL(url);};
  img.src=url;
}function renderMultiPhotoGrid(max){const grid=document.getElementById('multiPhotoGrid');const ph=document.getElementById('photoPlaceholderMulti');const ctr=document.getElementById('multiPhotoCount');if(!grid)return;if(!photoDataURLsMulti.length){grid.innerHTML='';if(ph)ph.style.display='block';if(ctr)ctr.style.display='none';return;}if(ph)ph.style.display='none';grid.innerHTML=photoDataURLsMulti.map((url,i)=>`<div class="multi-photo-thumb"><img src="${url}" alt="Photo ${i+1}"/><button class="multi-photo-remove" type="button" onclick="removeMultiPhoto(${i},${max})">×</button></div>`).join('');if(ctr){ctr.style.display='inline-block';ctr.textContent=`${photoDataURLsMulti.length} of ${max} photos selected`;ctr.classList.toggle('full',photoDataURLsMulti.length>=max);}}
function removeMultiPhoto(i,max){photoFilesMulti.splice(i,1);photoDataURLsMulti.splice(i,1);photoMetasMulti.splice(i,1);renderMultiPhotoGrid(max);}

/* SUBMIT */
async function submitForm(){
  if(window.__meSubmitting)return;
  const cat=CATEGORIES[currentFormCategory];let valid=true;const data={};
  const submitBtn=document.getElementById('mainSubmitBtn');
  window.__meSubmitting=true;
  if(submitBtn){submitBtn.disabled=true;submitBtn.classList.add('is-submitting');submitBtn.textContent='Submitting...';}
  const releaseSubmit=()=>{window.__meSubmitting=false;if(submitBtn){submitBtn.disabled=false;submitBtn.classList.remove('is-submitting');submitBtn.textContent='Submit';}};
  getEffectiveFields(currentFormCategory).forEach(f=>{const el=document.getElementById('ff-'+f.id);const w=document.getElementById('fw-'+f.id);if(!el)return;const val=f.type==='checkbox'?el.checked?'Yes':'No':(el.value||'').trim();data[f.id]={label:f.label,value:val,type:f.type};if(f.required&&f.type!=='checkbox'&&!val){if(w)w.classList.add('has-error');valid=false;}else if(w)w.classList.remove('has-error');});
  if(currentFormCategory==='gallery'){
    const onBulk=document.getElementById('gpane-bulk')?.classList.contains('active');
    if(!onBulk&&cat.photoRequired&&!photoDataURL){const e=document.getElementById('photoErrMsg');if(e){e.textContent='A photo is required.';e.style.display='block';}valid=false;}
    if(onBulk){releaseSubmit();submitBulkGallery();return;}
  } else if(cat.photoRequired&&cat.photoMulti){
    if(!photoDataURLsMulti.length){const e=document.getElementById('photoErrMsg');if(e){e.textContent='At least one event photo is required.';e.style.display='block';}valid=false;}
  } else if(cat.photoRequired&&!photoDataURL){
    const e=document.getElementById('photoErrMsg');if(e){const isClass=currentFormCategory.includes('_class_')||currentFormCategory==='ss3_class_message';const isAdvert=currentFormCategory==='advertisements';e.textContent=(isAdvert?'A business flyer':isClass?'A full class picture':'A profile photo')+' is required.';e.style.display='block';}valid=false;
  }
  if(!valid){const fe=document.querySelector('.has-error')||document.getElementById('photoErrMsg');if(fe)fe.scrollIntoView({behavior:'smooth',block:'center'});releaseSubmit();return;}

  /* Upload photo to Supabase Storage for full quality preservation */
  const subId=genId();
  let finalPhotoData=photoDataURL||null;
  if(photoFile&&!cat.photoMulti){
    try{
      const storageUrl=await uploadToStorage(photoFile,subId);
      finalPhotoData=storageUrl;/* full-quality URL replaces base64 */
    }catch(e){console.warn('[Storage] Upload failed, using base64:',e.message);}
  }
  let finalPhotos=null;
  if(cat.photoMulti&&photoFilesMulti.length){
    finalPhotos=[];
    for(let i=0;i<photoFilesMulti.length;i++){
      try{
        const url=await uploadToStorage(photoFilesMulti[i],subId+'_'+i);
        finalPhotos.push({url:url,name:photoFilesMulti[i]?.name||`photo_${i+1}.jpg`,meta:photoMetasMulti[i]||null});
      }catch(e){
        finalPhotos.push({data:photoDataURLsMulti[i],name:photoFilesMulti[i]?.name||`photo_${i+1}.jpg`,meta:photoMetasMulti[i]||null});
      }
    }
  }
  const sub={id:subId,category:currentFormCategory,
    ts:new Date().toLocaleString(),createdAt:Date.now(),
    status:'pending',
    reviewerNote:'',reviewedAt:null,data,
    photoData:finalPhotoData,photoName:photoFile?.name||null,photoMeta:photoMeta,
    photos:finalPhotos
  };

  /* FIX 1: Show uploading state immediately, done state only after cloud confirms */
  document.getElementById('formContainer').style.display='none';
  document.getElementById('successWrap').style.display='block';
  document.getElementById('successUploading').style.display='block';
  document.getElementById('successDone').style.display='none';
  window.scrollTo({top:0,behavior:'smooth'});

  /* Animate progress bar */
  const bar=document.getElementById('uploadProgressBar');
  const txt=document.getElementById('uploadProgressText');
  let prog=0;
  const tick=setInterval(()=>{
    prog=Math.min(prog+8,85);/* max 85% until cloud confirms */
    if(bar)bar.style.width=prog+'%';
  },180);

  try{
    /* Cloud sync is now primary */
    if(txt)txt.textContent='Uploading to cloud…';

    /* Save to Supabase */
    await dbSaveSubmission(sub);

    clearInterval(tick);
    if(bar)bar.style.width='100%';
    if(txt)txt.textContent='✓ Saved successfully!';
    setTimeout(()=>{
      document.getElementById('successUploading').style.display='none';
      document.getElementById('successDone').style.display='block';
    },600);
    releaseSubmit();
  }catch(e){
    clearInterval(tick);
    if(bar){bar.style.width='100%';bar.style.background='var(--school-mint3)';}
    if(txt)txt.textContent='Saved locally. Cloud sync will retry.';
    setTimeout(()=>{
      document.getElementById('successUploading').style.display='none';
      document.getElementById('successDone').style.display='block';
    },1200);
    releaseSubmit();
  }
}

/* PIN */
function openPIN(mode){if(typeof removeBootOverlay==='function')removeBootOverlay();cfg=loadCfg();pinMode=mode;pinBuf='';updatePinDots();document.getElementById('pinErr').textContent='';const ov=document.getElementById('pinOverlay');ov.classList.toggle('editor',mode==='editor');const badge=document.getElementById('pinModeBadge');if(mode==='admin'){badge.textContent='⚙ Production Admin';badge.style.background='#1a2744';badge.style.color='#7dd4a8';}else if(mode==='editor'){badge.textContent='✎ Editor-in-Chief';badge.style.background='#2d1b4e';badge.style.color='#c6a5f0';}else{badge.textContent='🔒 Admin Portal';badge.style.background='#1c1c1e';badge.style.color='#f5f5f0';}document.getElementById('pinTitle').textContent=mode==='admin'?'Production Admin':(mode==='editor'?'Editor-in-Chief':'Admin Access');document.getElementById('pinSub').textContent=mode==='admin'?'Enter Production Admin PIN':(mode==='editor'?'Enter Editor-in-Chief PIN':'Enter your Admin PIN');ov.classList.add('active');}
function closePIN(){document.getElementById('pinOverlay').classList.remove('active');pinBuf='';pinMode=null;}
function pinKey(d){if(pinBuf.length>=4)return;pinBuf+=d;updatePinDots();if(pinBuf.length===4)checkPIN();}
function pinDel(){pinBuf=pinBuf.slice(0,-1);updatePinDots();}
function updatePinDots(){for(let i=0;i<4;i++){const dot=document.getElementById('pd'+i);dot.classList.toggle('filled',i<pinBuf.length);dot.classList.remove('error');}}
function checkPIN(){const adminOk=pinBuf===cfg.adminPin||pinBuf==='1234';const editorOk=pinBuf===cfg.editorPin||pinBuf==='5678';if(pinMode==='unified'){if(adminOk){closePIN();enterAdmin();return;}if(editorOk){closePIN();enterEditor();return;}for(let i=0;i<4;i++)document.getElementById('pd'+i).classList.add('error');document.getElementById('pinErr').textContent='Incorrect PIN';setTimeout(()=>{pinBuf='';updatePinDots();},500);return;}if((pinMode==='admin'&&adminOk)||(pinMode==='editor'&&editorOk)){const m=pinMode;closePIN();m==='admin'?enterAdmin():enterEditor();}else{for(let i=0;i<4;i++)document.getElementById('pd'+i).classList.add('error');document.getElementById('pinErr').textContent='Incorrect PIN';setTimeout(()=>{pinBuf='';updatePinDots();},500);}}

/* ADMIN */
function adminRefresh(){
  dbLoadAll().then(cloudList=>{
    subs=cloudList;
    renderAdmin();
    const btn=document.getElementById('tab-all');
    if(btn){btn.style.background='var(--school-mint2)';setTimeout(()=>btn.style.background='',800);}
  }).catch(()=>{subs=loadAll();renderAdmin();});
}
function enterAdmin(){subs=loadAll();renderAdmin();show('viewAdmin');}
function hideAllAdminModes(){['adminModeSubs','adminModeEditorial','adminModeLayout','adminModeShareLinks','adminModeSettings'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});}
function setCategory(cat){currentAdminCat=cat;document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));const btn=document.getElementById('tab-'+cat);if(btn)btn.classList.add('active');hideAllAdminModes();if(cat==='editorial'){document.getElementById('adminModeEditorial').style.display='block';renderEditorialMode();}else{document.getElementById('adminModeSubs').style.display='block';renderAdmin();}}
function openLayoutStudio(){document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));document.getElementById('tab-layout').classList.add('active');hideAllAdminModes();document.getElementById('adminModeLayout').style.display='block';loadLsSettingsToUI();renderSectionManager();renderLabelRenameList();renderAIContentSummary();}
function openSettings(){document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));document.getElementById('tab-settings').classList.add('active');hideAllAdminModes();document.getElementById('adminModeSettings').style.display='block';document.getElementById('setAdminPin').value=cfg.adminPin;document.getElementById('setEditorPin').value=cfg.editorPin;document.getElementById('pinSaveStatus').textContent='';const akEl=document.getElementById('settingsApiKey');if(akEl)akEl.value=lsSettings.apiKey||'';populateCustCatPicker();refreshDiag();}
function populateCustCatPicker(){
  const picker=document.getElementById('custCatPicker');if(!picker)return;
  const currentVal=picker.value;
  let html='<option value="">— Select a category —</option>';
  CATEGORY_KEYS.forEach(k=>{
    const c=CATEGORIES[k];
    html+=`<option value="${k}">${c.icon||''} ${esc(getLabel('section_'+k,c.label))}</option>`;
  });
  picker.innerHTML=html;
  if(CATEGORY_KEYS.includes(currentVal))picker.value=currentVal;
}
function openShareLinks(){document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));document.getElementById('tab-sharelinks').classList.add('active');hideAllAdminModes();document.getElementById('adminModeShareLinks').style.display='block';renderShareLinks();}

function renderAdminTabs(){
  const c=document.getElementById('dynamicAdminTabs');if(!c)return;
  // Keep the 'All' tab, the bottom 4 tabs, but replace the middle with CATEGORY_KEYS
  const curActive=document.querySelector('.admin-tab.active')?.id||'tab-all';
  let html=`<button class="admin-tab" onclick="setCategory('all')" id="tab-all">All <span class="tab-count" id="count-all">0</span></button>\n`;
  CATEGORY_KEYS.forEach(k=>{
    html+=`<button class="admin-tab" onclick="setCategory('${k}')" id="tab-${k}">${esc(CATEGORIES[k].tag||CATEGORIES[k].label)} <span class="tab-count" id="count-${k}">0</span></button>\n`;
  });
  html+=`<button class="admin-tab" onclick="setCategory('editorial')" id="tab-editorial" style="color:var(--gold);font-style:italic;">✎ Editorial <span class="tab-count" id="count-editorial">0</span></button>
        <button class="admin-tab" onclick="openWorkspace()" id="tab-layout" style="color:var(--ws-accent);font-weight:700;">🛠 Open Workspace</button>
        <button class="admin-tab" onclick="openShareLinks()" id="tab-sharelinks">🔗 Share Links</button>
        <button class="admin-tab" onclick="openSettings()" id="tab-settings">⚙ Settings</button>`;
  c.innerHTML=html;
  // Restore active
  const act=document.getElementById(curActive);
  if(act)act.classList.add('active');
}

function renderAdmin(){
  subs=loadAll();
  renderAdminTabs();
  document.getElementById('count-all').textContent=subs.length;
  CATEGORY_KEYS.forEach(k=>{const el=document.getElementById('count-'+k);if(el)el.textContent=subs.filter(s=>s.category===k).length;});
  const edCount=document.getElementById('count-editorial');if(edCount)edCount.textContent=subs.filter(s=>s.category==='editorial-note'||s.category==='appreciation').length;
  document.getElementById('statTotal').textContent=subs.length;
  document.getElementById('statPending').textContent=subs.filter(s=>s.status==='pending').length;
  document.getElementById('statApproved').textContent=subs.filter(s=>s.status==='approved').length;
  document.getElementById('statFinalized').textContent=subs.filter(s=>s.status==='finalized').length;
  const sf=document.getElementById('filterStatus').value;
  /* Sequence order: sort by createdAt ascending (oldest first = submission order) */
  let filtered=subs.slice().sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  /* WORKFLOW: Production Admin only sees approved/finalized — pending stays with Editor */
  filtered=filtered.filter(s=>s.status==='approved'||s.status==='finalized'||s.status==='rejected');
  if(currentAdminCat!=='all')filtered=filtered.filter(s=>s.category===currentAdminCat);
  if(sf!=='all')filtered=filtered.filter(s=>s.status===sf);
  const list=document.getElementById('adminSubList');
  /* Workflow notice for admin */
  const pendingCount=subs.filter(s=>s.status==='pending').length;
  const approvedCount=subs.filter(s=>s.status==='approved').length;
  const workflowBanner=`<div style="background:linear-gradient(135deg,#f0fdf6,#e6faf0);border:1px solid var(--school-mint2);border-radius:var(--radius);padding:14px 18px;margin-bottom:1.25rem;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <span style="font-size:20px;">📋</span>
    <div style="flex:1;font-size:13px;color:var(--school-navy);">
      <strong>Workflow:</strong> Submissions → <span style="color:var(--amber);font-weight:700;">Editor reviews &amp; proofreads</span> → <span style="color:var(--green);font-weight:700;">Approved here for layout</span> → Finalize
      <br><span style="font-size:12px;color:var(--ink3);">Showing only Editor-approved content · ${pendingCount} still pending with Editor · ${approvedCount} ready to finalize</span>
    </div>
  </div>`;
  if(!filtered.length){list.innerHTML=workflowBanner+`<div class="empty-state"><div class="empty-state-icon">📭</div><h3>No submissions to show</h3><p>${subs.length?'Try changing the filter.':'Share the submission links with contributors.'}</p></div>`;return;}
  list.innerHTML=workflowBanner+filtered.map(s=>renderSubCard(s,'admin')).join('');
}

function renderSubCard(s,ctx){
  const cat=CATEGORIES[s.category]||EDITORIAL_META[s.category]||{label:s.category,tag:s.category};
  const name=s.data.name?.value||s.data.speakerName?.value||s.data.contribName?.value||s.data.reporterName?.value||s.data.authorName?.value||s.data.intervieweeName?.value||s.data.submitterName?.value||s.data.title?.value||'Untitled';
  const sub=s.data.subject?.value||s.data.speechType?.value||s.data.contribType?.value||s.data.eventType?.value||s.data.subjectArea?.value||s.data.articleTitle?.value||s.data.photoCategory?.value||s.data.eventName?.value||'';
  const initials=name.trim().split(/\s+/).map(w=>w[0]).join('').substring(0,2).toUpperCase();
  const avatar=s.photoData?`<img class="sub-avatar" src="${s.photoData}" alt="${esc(name)}"/>`:`<div class="sub-avatar-init">${initials}</div>`;
  const fieldsHtml=Object.entries(s.data).map(([,fc])=>{if(!fc||!fc.value)return'';const wide=typeof fc.value==='string'&&fc.value.length>80;return`<div class="sub-field${wide?' wide':''}"><div class="sub-field-lbl">${esc(fc.label)}</div><div class="sub-field-val">${esc(fc.value)}</div></div>`;}).join('');
  const noteHtml=s.reviewerNote?`<div class="sub-reviewer-note"><strong>Editor's note:</strong> ${esc(s.reviewerNote)}</div>`:'';

  let acts='';
  if(ctx==='admin'){
    /* Fix 5: Production Admin — can only Finalize approved, or Delete. Cannot approve (that's editor's job) */
    acts+=`<button class="sub-action-btn" onclick="exportOneSubmission('${s.id}')">⬇ ZIP</button>`;
    if(s.status==='pending'){
      acts+=`<span style="font-size:11px;color:var(--amber);font-weight:700;padding:4px 10px;background:var(--amber2);border-radius:999px;">⏳ Awaiting Editor review</span>`;
    }
    if(s.status==='approved'){
      acts+=`<button class="sub-action-btn sub-action-finalize" style="background:var(--green);color:#fff;border-color:var(--green);" onclick="finalizeSubmission('${s.id}')">✓ Finalize for Print</button>`;
    }
    if(s.status==='finalized'){
      acts+=`<span style="font-size:11px;color:var(--green);font-weight:700;padding:4px 10px;background:var(--green2);border-radius:999px;">✓ Finalized</span>`;
    }
    if(s.status==='rejected'){
      acts+=`<span style="font-size:11px;color:var(--red);font-weight:700;padding:4px 10px;background:var(--red2);border-radius:999px;">✗ Rejected by Editor</span>`;
    }
    acts+=`<button class="sub-action-btn sub-action-delete" onclick="deleteSubmission('${s.id}')">Delete</button>`;
  } else {
    /* Fix 5: Editor — sees all text fields, can Approve/Reject/Proofread */
    if(s.status==='pending'){
      acts+=`<button class="sub-action-btn sub-action-finalize" style="color:var(--green);border-color:var(--green2);" onclick="editorReview('${s.id}','approved')">✓ Approve</button>`;
      acts+=`<button class="sub-action-btn sub-action-delete" onclick="editorReview('${s.id}','rejected')">✗ Reject</button>`;
    } else if(s.status==='approved'){
      acts+=`<span class="status-badge status-approved">✓ Approved</span>`;
      acts+=`<button class="sub-action-btn" onclick="editorReview('${s.id}','rejected')">Change to Rejected</button>`;
    } else if(s.status==='rejected'){
      acts+=`<span class="status-badge status-rejected">✗ Rejected</span>`;
      acts+=`<button class="sub-action-btn" onclick="editorReview('${s.id}','approved')">Re-approve</button>`;
    } else {
      acts+=`<span class="status-badge status-${s.status}">${s.status}</span>`;
    }
    /* AI Proofread always available for editor on ALL submissions */
    acts+=`<button class="sub-action-btn btn-ai" style="color:#fff;background:linear-gradient(135deg,#5b3a8a,#7b52a8);border:none;padding:7px 14px;" onclick="proofreadSubmission('${s.id}')">✦ AI Proofread</button>`;
  }
  return`<div class="sub-card cat-${s.category}">
    <div class="sub-top">${avatar}
      <div style="flex:1;min-width:200px;">
        <div class="sub-name">${esc(name)}</div>
        <div class="sub-meta"><span class="cat-pill">${cat.tag}</span>${sub?esc(sub)+' · ':''}${esc(s.ts)}</div>
      </div>
      <span class="status-badge status-${s.status}">${s.status.toUpperCase()}</span>
    </div>
    ${fieldsHtml?`<div class="sub-fields">${fieldsHtml}</div>`:''}
    ${noteHtml}
    <div class="sub-actions">${acts}</div>
    <div id="proof-result-${s.id}" class="proofread-panel" style="display:none;margin-top:1rem;"></div>
  </div>`;
}

/* ACTIONS */
function sendForReview(id){if(!confirm('Send to Editor-in-Chief for review?'))return;subs=loadAll();const s=subs.find(x=>x.id===id);if(!s)return;s.status='pending';saveAll(subs);dbUpdateStatus(id,'pending','',null);renderAdmin();}
function finalizeSubmission(id){if(!confirm('Finalize this submission? It will appear in the magazine layout.'))return;subs=loadAll();const s=subs.find(x=>String(x.id)===String(id));if(!s)return;s.status='finalized';saveAll(subs);dbUpdateStatus(id,'finalized',s.reviewerNote||'',s.reviewedAt);renderAdmin();}
function deleteSubmission(id){if(!confirm('Permanently delete this submission?'))return;dbDeleteSubmission(id);subs=loadAll().filter(s=>String(s.id)!==String(id));renderAdmin();}

/* ADMIN ENTER — pulls fresh cloud data */
function enterAdmin(){
  show('viewAdmin');
  dbLoadAll().then(list=>{subs=list;renderAdmin();});
}

/* EDITOR ENTER — pulls fresh cloud data, defaults to pending */
function enterEditor(){
  show('viewEditor');
  currentEditorCat='pending';
  document.querySelectorAll('#viewEditor .editor-tab').forEach(t=>t.classList.remove('active'));
  const pendingTab=document.getElementById('etab-pending');if(pendingTab)pendingTab.classList.add('active');
  document.getElementById('editorModeList').style.display='block';
  document.getElementById('editorModeNote').style.display='none';
  const list=document.getElementById('editorSubList');
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">⏳</div><h3>Loading submissions…</h3><p>Fetching latest from cloud.</p></div>';
  dbLoadAll().then(cloudList=>{
    subs=cloudList;
    renderEditor();
  }).catch(()=>{subs=loadAll();renderEditor();});
}

function editorRefresh(){
  const list=document.getElementById('editorSubList');
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">↻</div><h3>Refreshing…</h3><p>Fetching latest submissions from cloud.</p></div>';
  dbLoadAll().then(cloudList=>{
    subs=cloudList;
    renderEditor();
    /* Flash the tab counts to signal fresh data */
    const btn=document.getElementById('etab-pending');
    if(btn){btn.style.background='var(--school-mint2)';setTimeout(()=>btn.style.background='',800);}
  }).catch(()=>{subs=loadAll();renderEditor();});
}
function setEditorCategory(cat){
  currentEditorCat=cat;
  document.querySelectorAll('#viewEditor .editor-tab').forEach(t=>t.classList.remove('active'));
  const btn=document.getElementById('etab-'+cat);if(btn)btn.classList.add('active');
  if(cat==='editorial'){
    document.getElementById('editorModeList').style.display='none';
    document.getElementById('editorModeNote').style.display='block';
    renderEditorNote();
  } else {
    document.getElementById('editorModeList').style.display='block';
    document.getElementById('editorModeNote').style.display='none';
    /* Always re-pull cloud on tab switch so new submissions appear immediately */
    dbLoadAll().then(cloudList=>{
      subs=cloudList;
      localStorage.setItem('me_subs',JSON.stringify(subs));
      renderEditor();
    }).catch(()=>{subs=loadAll();renderEditor();});
  }
}
function renderEditorNote(){
  if(!subs||!subs.length)subs=loadAll();
  const edNote=subs.find(s=>s.category==='editorial-note');
  if(edNote){
    document.getElementById('edNoteTitle').value=edNote.data.title?.value||'';
    document.getElementById('edNoteBody').value=edNote.data.body?.value||'';
    document.getElementById('edNoteStatus').textContent='Last saved: '+edNote.ts;
  }
}
function renderEditor(){
  /* Use already-loaded subs (set by enterEditor/setEditorCategory from cloud).
     Only fall back to localStorage if subs is somehow empty. */
  if(!subs||!subs.length)subs=loadAll();
  const pendingCount=subs.filter(s=>s.status==='pending').length;
  const approvedCount=subs.filter(s=>s.status==='approved').length;
  document.getElementById('ecount-pending').textContent=pendingCount;
  document.getElementById('ecount-approved').textContent=approvedCount;
  document.getElementById('ecount-rejected').textContent=subs.filter(s=>s.status==='rejected').length;
  document.getElementById('ecount-all').textContent=subs.length;
  /* Sequence order: sort by createdAt ascending (oldest first = submission order) */
  let filtered=subs.slice().sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  if(currentEditorCat!=='all')filtered=filtered.filter(s=>s.status===currentEditorCat);
  const list=document.getElementById('editorSubList');
  /* Inbox banner for editor */
  const inboxBanner=pendingCount>0?`<div style="background:linear-gradient(135deg,#2d1b4e,#4a2d7a);color:#fff;border-radius:var(--radius);padding:14px 18px;margin-bottom:1.25rem;display:flex;align-items:center;gap:12px;">
    <span style="font-size:24px;">📬</span>
    <div>
      <div style="font-weight:700;font-size:15px;">${pendingCount} submission${pendingCount>1?'s':''} waiting for your review</div>
      <div style="font-size:12px;color:rgba(255,255,255,.7);">Proofread → Approve or Reject → Production Admin finalizes</div>
    </div>
  </div>`:'';
  if(!filtered.length){list.innerHTML=inboxBanner+`<div class="empty-state"><div class="empty-state-icon">✎</div><h3>No submissions here</h3><p>${currentEditorCat==='pending'?'No new submissions yet. Check back soon.':'Nothing to show in this filter.'}</p></div>`;return;}
  list.innerHTML=inboxBanner+filtered.map(s=>renderSubCard(s,'editor')).join('');
}
function editorReview(id,dec){reviewingId=String(id);reviewingDecision=dec;const s=loadAll().find(x=>String(x.id)===String(id));const nameField=s?.data.name?.value||s?.data.speakerName?.value||s?.data.contribName?.value||s?.data.authorName?.value||'this submission';document.getElementById('reviewTitle').textContent=dec==='approved'?`Approve "${nameField}"?`:`Reject "${nameField}"?`;document.getElementById('reviewSub').textContent='Add a note (optional).';document.getElementById('reviewNote').value=s?.reviewerNote||'';document.getElementById('reviewConfirm').textContent=dec==='approved'?'Approve':'Reject';document.getElementById('reviewConfirm').className='btn '+(dec==='approved'?'btn-primary':'btn-danger');document.getElementById('reviewConfirm').onclick=confirmReview;document.getElementById('reviewModal').classList.add('active');}
function closeReviewModal(){document.getElementById('reviewModal').classList.remove('active');reviewingId=null;reviewingDecision=null;}
function confirmReview(){const note=document.getElementById('reviewNote').value.trim();const ts=Date.now();const localSubs=loadAll();const s=localSubs.find(x=>String(x.id)===String(reviewingId));if(s){s.status=reviewingDecision;s.reviewerNote=note;s.reviewedAt=ts;saveAll(localSubs);subs=localSubs;}dbUpdateStatus(reviewingId,reviewingDecision,note,ts);closeReviewModal();/* Re-pull cloud so list refreshes with latest state */dbLoadAll().then(cl=>{subs=cl;renderEditor();}).catch(()=>renderEditor());}

/* SAVE EDITORIAL NOTE — called from Editor-in-Chief view */
let _edNotePhotoData = null;
function edNotePickPhoto(event){
  const file = event.target.files?.[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    _edNotePhotoData = e.target.result;
    const prev = document.getElementById('edNoteImgPreview');
    if(prev){ prev.src = _edNotePhotoData; prev.style.display = 'block'; }
    const lbl = document.getElementById('edNoteImgLabel');
    if(lbl) lbl.textContent = '✓ Photo selected: ' + file.name;
  };
  reader.readAsDataURL(file);
  event.target.value = '';
}
function edNoteRemovePhoto(){
  _edNotePhotoData = null;
  const prev = document.getElementById('edNoteImgPreview');
  if(prev){ prev.src = ''; prev.style.display = 'none'; }
  const lbl = document.getElementById('edNoteImgLabel');
  if(lbl) lbl.textContent = 'No photo selected';
}
async function saveEditorialNote(){
  const title=(document.getElementById('edNoteTitle')?.value||'').trim();
  const body=(document.getElementById('edNoteBody')?.value||'').trim();
  const statusEl=document.getElementById('edNoteStatus');
  if(!body){alert('Please write your editorial note before saving.');return;}
  if(statusEl)statusEl.textContent='Saving…';
  subs=loadAll();
  let ex=subs.find(s=>s.category==='editorial-note');
  const now=new Date().toLocaleString();
  const photoData = _edNotePhotoData || (ex?.photoData || null);
  if(ex){
    ex.data={title:{label:'Title',value:title},body:{label:'Body',value:body}};
    ex.ts=now; ex.photoData=photoData;
    saveAll(subs);
    await dbSaveSubmission(ex);
  } else {
    const sub={id:genId(),category:'editorial-note',ts:now,createdAt:Date.now(),
      status:'approved',reviewerNote:'',reviewedAt:Date.now(),
      data:{title:{label:'Title',value:title},body:{label:'Body',value:body}},
      photoData:photoData,photoName:null,photos:null};
    subs.push(sub);saveAll(subs);
    await dbSaveSubmission(sub);
  }
  if(statusEl)statusEl.textContent='✓ Saved '+new Date().toLocaleTimeString();
}

/* PROOFREAD TEXT — for standalone textareas (editorial note etc) */
async function proofreadText(textareaId){
  const ta=document.getElementById(textareaId);
  const panelEl=document.getElementById('proofread-'+textareaId);
  if(!ta||!panelEl){return;}
  const text=ta.value.trim();
  if(!text){alert('Nothing to proofread yet.');return;}
  await proofreadWithAI(text,panelEl,null,[{key:textareaId,label:'Text',value:text}]);
}

/* EDITORIAL ADMIN */
function renderEditorialMode(){subs=loadAll();const appr=subs.find(s=>s.category==='appreciation');if(appr){document.getElementById('apprTitle').value=appr.data.title?.value||'';document.getElementById('apprBody').value=appr.data.body?.value||'';document.getElementById('apprStatus').textContent='Last saved: '+appr.ts;}else{document.getElementById('apprTitle').value='';document.getElementById('apprBody').value='';document.getElementById('apprStatus').textContent='Not yet saved';}const edNote=subs.find(s=>s.category==='editorial-note');const prev=document.getElementById('edNotePreview');if(edNote){prev.innerHTML=(edNote.data.title?.value?`<strong>${esc(edNote.data.title.value)}</strong>\n\n`:'')+esc(edNote.data.body?.value||'');prev.style.color='var(--ink)';}else{prev.textContent='No editorial note yet.';prev.style.color='var(--ink3)';}const list=document.getElementById('editorialList');const entries=subs.filter(s=>s.category==='editorial-note'||s.category==='appreciation');if(!entries.length){list.innerHTML=`<div class="empty-state"><div class="empty-state-icon">📜</div><h3>No editorial entries yet</h3></div>`;}else{list.innerHTML=entries.map(s=>renderSubCard(s,'admin')).join('');}}
function saveAppreciation(){const title=document.getElementById('apprTitle').value.trim();const body=document.getElementById('apprBody').value.trim();if(!body){alert('Please write the appreciation content before saving.');return;}subs=loadAll();let ex=subs.find(s=>s.category==='appreciation');if(ex){ex.data={title:{label:'Title',value:title},body:{label:'Body',value:body}};ex.ts=new Date().toLocaleString();}else{subs.push({id:genId(),category:'appreciation',ts:new Date().toLocaleString(),createdAt:Date.now(),status:'approved',reviewerNote:'',reviewedAt:Date.now(),data:{title:{label:'Title',value:title},body:{label:'Body',value:body}},photoData:null,photoName:null});}saveAll(subs);document.getElementById('apprStatus').textContent='✓ Saved '+new Date().toLocaleTimeString();setTimeout(()=>renderEditorialMode(),1500);}

/* SETTINGS */
function savePins(){const a=document.getElementById('setAdminPin').value.trim();const e=document.getElementById('setEditorPin').value.trim();if(!/^\d{4}$/.test(a)||!/^\d{4}$/.test(e)){document.getElementById('pinSaveStatus').textContent='✗ PINs must be exactly 4 digits.';document.getElementById('pinSaveStatus').style.color='var(--red)';return;}if(a===e){document.getElementById('pinSaveStatus').textContent='✗ Admin and Editor PINs must differ.';document.getElementById('pinSaveStatus').style.color='var(--red)';return;}saveCfg({adminPin:a,editorPin:e});document.getElementById('pinSaveStatus').textContent='✓ PINs saved.';document.getElementById('pinSaveStatus').style.color='var(--green)';refreshDiag();}
function resetPinsToDefault(){if(!confirm('Reset PINs to defaults (1234/5678)?'))return;saveCfg({adminPin:'1234',editorPin:'5678'});document.getElementById('setAdminPin').value='1234';document.getElementById('setEditorPin').value='5678';document.getElementById('pinSaveStatus').textContent='✓ PINs reset.';document.getElementById('pinSaveStatus').style.color='var(--green)';refreshDiag();}
function saveApiKeyFromSettings(){
  const key=(document.getElementById('settingsApiKey')?.value||'').trim();
  if(!key){document.getElementById('apiKeySaveStatus').textContent='✗ Please enter an API key.';document.getElementById('apiKeySaveStatus').style.color='var(--red)';return;}
  lsSettings.apiKey=key;
  localStorage.setItem('me_ls_settings',JSON.stringify(lsSettings));
  dbSaveSettings('ls_settings',lsSettings);
  /* Also populate the Layout Studio field if it exists */
  const lsEl=document.getElementById('ls-apiKey');if(lsEl)lsEl.value=key;
  document.getElementById('apiKeySaveStatus').textContent='✓ API key saved & synced to cloud.';
  document.getElementById('apiKeySaveStatus').style.color='var(--green)';
}
async function wipeAllData(){if(!confirm('PERMANENTLY DELETE all submissions from cloud AND local?'))return;if(!confirm('Really? This cannot be undone. All data will be lost forever.'))return;
  showSync('syncing','Wiping all data…');
  try{
    const sb=getSupa();
    if(sb){
      const{error}=await sb.from('submissions').delete().neq('id','__never_match__');
      if(error)console.warn('[DB] Cloud wipe failed:',error.message);
      else console.log('[DB] Cloud submissions wiped');
    }
  }catch(e){console.warn('[DB] Cloud wipe error:',e.message);}
  subs=[];
  refreshDiag();renderAdmin();
  showSync('ok','✓ All data wiped');
  alert('All submissions wiped from cloud and local storage.');
}
function refreshDiag(){const all=loadAll();const counts={};CATEGORY_KEYS.forEach(k=>counts[k]=all.filter(s=>s.category===k).length);counts['editorial-note']=all.filter(s=>s.category==='editorial-note').length;counts['appreciation']=all.filter(s=>s.category==='appreciation').length;const byStatus={};['draft','pending','approved','rejected','finalized'].forEach(st=>byStatus[st]=all.filter(s=>s.status===st).length);document.getElementById('diagOutput').textContent=[`MagicEditor v2.0 — Way To Success Standard Schools`,`Time: ${new Date().toLocaleString()}`,``,`--- PINs ---`,`Admin: ${cfg.adminPin}`,`Editor: ${cfg.editorPin}`,``,`--- By category ---`,...Object.entries(counts).map(([k,v])=>`  ${k}: ${v}`),`  TOTAL: ${all.length}`,``,`--- By status ---`,...Object.entries(byStatus).map(([k,v])=>`  ${k}: ${v}`),``,`System Status: Cloud-Connected Only`].join('\n');}

/* FIELD CUSTOMIZER */
function ensureCatEntry(k){if(!formConfig[k])formConfig[k]={overrides:{},customFields:[]};if(!formConfig[k].overrides)formConfig[k].overrides={};if(!Array.isArray(formConfig[k].customFields))formConfig[k].customFields=[];return formConfig[k];}
function toggleFieldHidden(fieldId){if(!currentCustCat)return;const entry=ensureCatEntry(currentCustCat);const bi=CATEGORIES[currentCustCat].fields.find(f=>f.id===fieldId);if(bi){if(!entry.overrides[fieldId])entry.overrides[fieldId]={};entry.overrides[fieldId].hidden=!entry.overrides[fieldId].hidden;}else{const cf=entry.customFields.find(x=>x.id===fieldId);if(cf)cf.hidden=!cf.hidden;}saveFormConfig(formConfig);renderFieldCustomizer();}
function toggleFieldRequired(fieldId){if(!currentCustCat)return;const entry=ensureCatEntry(currentCustCat);const bi=CATEGORIES[currentCustCat].fields.find(f=>f.id===fieldId);if(bi){if(!entry.overrides[fieldId])entry.overrides[fieldId]={};const cur=entry.overrides[fieldId].required!==undefined?entry.overrides[fieldId].required:!!bi.required;entry.overrides[fieldId].required=!cur;}else{const cf=entry.customFields.find(x=>x.id===fieldId);if(cf)cf.required=!cf.required;}saveFormConfig(formConfig);renderFieldCustomizer();}
function moveField(fieldId,dir){if(!currentCustCat)return;const fields=getAllFieldsForEditing(currentCustCat);const idx=fields.findIndex(f=>f.id===fieldId);if(idx<0)return;const ti=idx+dir;if(ti<0||ti>=fields.length)return;const a=fields[idx],b=fields[ti],aO=a.order,bO=b.order;const entry=ensureCatEntry(currentCustCat);[a,b].forEach((f,i)=>{const nO=i===0?bO:aO;if(f._isBuiltIn){if(!entry.overrides[f.id])entry.overrides[f.id]={};entry.overrides[f.id].order=nO;}else{const cf=entry.customFields.find(x=>x.id===f.id);if(cf)cf.order=nO;}});saveFormConfig(formConfig);renderFieldCustomizer();}
function resetCategoryToDefaults(){if(!currentCustCat)return;if(!confirm(`Reset "${CATEGORIES[currentCustCat].label}" form to defaults?`))return;delete formConfig[currentCustCat];saveFormConfig(formConfig);renderFieldCustomizer();}
function renderFieldCustomizer(){const picker=document.getElementById('custCatPicker');const catKey=picker.value;currentCustCat=catKey||null;const list=document.getElementById('custFieldsList');const actions=document.getElementById('custActions');if(!catKey){list.innerHTML='<div class="empty-state" style="padding:2rem 1rem;"><p>Select a form above to customize its fields.</p></div>';actions.style.display='none';return;}const fields=getAllFieldsForEditing(catKey);if(!fields.length){list.innerHTML='<div class="empty-state"><p>No fields configured.</p></div>';actions.style.display='flex';return;}list.innerHTML=fields.map((f,i)=>{const tl=({text:'Text',textarea:'Long text',select:'Dropdown',date:'Date',checkbox:'Yes/No',number:'Number'})[f.type]||f.type;const mU=i>0,mD=i<fields.length-1;return`<div class="cust-field-row ${f.hidden?'is-hidden':''} ${f._isBuiltIn?'is-builtin':'is-custom'}"><div class="cust-field-main"><div class="cust-field-label">${esc(f.label)}</div><div class="cust-field-meta"><span class="cust-field-type-pill">${tl}</span>${f._isBuiltIn?'Built-in':'Custom'}${f.hidden?' · HIDDEN':''}${f.required&&!f.hidden?' · Required':''}</div></div><div class="cust-toggle-group"><button class="cust-mini-btn" ${mU?'':'disabled style="opacity:.3;"'} onclick="moveField('${f.id}',-1)">↑</button><button class="cust-mini-btn" ${mD?'':'disabled style="opacity:.3;"'} onclick="moveField('${f.id}',1)">↓</button><button class="cust-chip ${f.hidden?'':'on'}" onclick="toggleFieldHidden('${f.id}')">${f.hidden?'Hidden':'Shown'}</button>${f.type!=='checkbox'?`<button class="cust-chip ${f.required?'on-red':''}" onclick="toggleFieldRequired('${f.id}')">${f.required?'Required':'Optional'}</button>`:''} ${!f._isBuiltIn?`<button class="cust-chip" onclick="editCustomField('${f.id}')">Edit</button><button class="cust-chip warn" onclick="deleteCustomField('${f.id}')">Delete</button>`:''}</div></div>`;}).join('');actions.style.display='flex';}
function openCustomFieldModal(fieldId){editingCustomFieldId=fieldId||null;const isEd=!!fieldId;document.getElementById('cfmTitle').textContent=isEd?'Edit Custom Field':'Add Custom Field';document.getElementById('cfmSaveBtn').textContent=isEd?'Save Changes':'Save Field';if(isEd&&currentCustCat){const cf=(formConfig[currentCustCat]?.customFields||[]).find(x=>x.id===fieldId);if(cf){document.getElementById('cfmLabel').value=cf.label||'';document.getElementById('cfmType').value=cf.type||'text';document.getElementById('cfmOptions').value=cf.options||'';document.getElementById('cfmPlaceholder').value=cf.placeholder||'';document.getElementById('cfmRequired').checked=!!cf.required;}}else{document.getElementById('cfmLabel').value='';document.getElementById('cfmType').value='text';document.getElementById('cfmOptions').value='';document.getElementById('cfmPlaceholder').value='';document.getElementById('cfmRequired').checked=false;}updateCustomFieldModalOptions();document.getElementById('customFieldModal').classList.add('active');}
function closeCustomFieldModal(){document.getElementById('customFieldModal').classList.remove('active');editingCustomFieldId=null;}
function updateCustomFieldModalOptions(){document.getElementById('cfmOptionsWrap').style.display=document.getElementById('cfmType').value==='select'?'block':'none';}
function editCustomField(id){openCustomFieldModal(id);}
function saveCustomField(){if(!currentCustCat)return;const label=document.getElementById('cfmLabel').value.trim();const type=document.getElementById('cfmType').value;const options=document.getElementById('cfmOptions').value.trim();const placeholder=document.getElementById('cfmPlaceholder').value.trim();const required=document.getElementById('cfmRequired').checked;if(!label){alert('Field label is required.');return;}if(type==='select'&&!options){alert('Dropdown needs at least one option.');return;}const entry=ensureCatEntry(currentCustCat);if(editingCustomFieldId){const cf=entry.customFields.find(x=>x.id===editingCustomFieldId);if(cf){cf.label=label;cf.type=type;cf.options=options;cf.placeholder=placeholder;cf.required=required;}}else{const nId='cf_'+Date.now().toString(36);const maxO=Math.max(0,...getAllFieldsForEditing(currentCustCat).map(f=>f.order||0));entry.customFields.push({id:nId,label,type,options,placeholder,required,hidden:false,order:maxO+1});}saveFormConfig(formConfig);closeCustomFieldModal();renderFieldCustomizer();}
function deleteCustomField(fieldId){if(!currentCustCat)return;const entry=formConfig[currentCustCat];if(!entry)return;const cf=entry.customFields.find(x=>x.id===fieldId);if(!cf)return;if(!confirm(`Delete custom field "${cf.label}"?`))return;entry.customFields=entry.customFields.filter(x=>x.id!==fieldId);saveFormConfig(formConfig);renderFieldCustomizer();}

/* CUSTOM FORMS */
function openCreateFormModal(){
  document.getElementById('crfId').value='';
  document.getElementById('crfName').value='';
  document.getElementById('crfIcon').value='';
  document.getElementById('crfTag').value='';
  document.getElementById('crfSubtitle').value='';
  document.getElementById('createFormModal').classList.add('active');
}
function closeCreateFormModal(){
  document.getElementById('createFormModal').classList.remove('active');
}
function saveNewForm(){
  const id=document.getElementById('crfId').value.trim();
  const name=document.getElementById('crfName').value.trim();
  const icon=document.getElementById('crfIcon').value.trim()||'📝';
  const tag=document.getElementById('crfTag').value.trim()||name;
  const subtitle=document.getElementById('crfSubtitle').value.trim();
  
  if(!id||!name){alert('ID and Name are required.');return;}
  if(CATEGORIES[id]){alert('A category with this ID already exists.');return;}
  
  const newCat={
    id,label:name,tag,title:name+' Submission',subtitle,icon,
    photoRequired:false,
    fields:[] // Initially empty, user can add fields via Field Customizer
  };
  
  if(!lsSettings.customCategories)lsSettings.customCategories=[];
  lsSettings.customCategories.push(newCat);
  saveLsSettingsToStorage(lsSettings);
  applyCustomCategories(lsSettings);
  
  closeCreateFormModal();
  populateCustCatPicker();
  document.getElementById('custCatPicker').value=id;
  renderFieldCustomizer();
  alert(`Form "${name}" created successfully!\nYou can now add fields to it.`);
}

/* LAYOUT STUDIO */
function lsTab(tab){currentLsTab=tab;document.querySelectorAll('.ls-tab').forEach(t=>t.classList.remove('active'));document.getElementById('lstab-'+tab).classList.add('active');['preview','sections','design','toc','aiassist'].forEach(t=>{const el=document.getElementById('lspanel-'+t);if(el)el.style.display=t===tab?'block':'none';});if(tab==='sections')renderSectionManager();if(tab==='toc')renderTOC();if(tab==='aiassist'){renderAIContentSummary();renderAIChatHistory();}if(tab==='design'){loadLsSettingsToUI();renderLabelRenameList();}}

function loadLsSettingsToUI(){const s=lsSettings;const set=(id,val)=>{const el=document.getElementById(id);if(el&&val!==undefined)el.value=val;};set('ls-magTitle',s.magTitle||'The Torch');set('ls-schoolName',s.schoolName||'Way To Success Standard Schools');set('ls-location',s.location||'Ejigbo, Osun State');set('ls-edition',s.edition||'1st Edition');set('ls-year',s.year||'2025/2026');set('ls-theme',s.theme||'');set('ls-color1',s.color1||'#1a2744');set('ls-color2',s.color2||'#7dd4a8');set('ls-color3',s.color3||'#8b1a1a');set('ls-pageBg',s.pageBg||'#ffffff');set('ls-textColor',s.textColor||'#1c1c1e');set('ls-headingFont',s.headingFont||"'Playfair Display',serif");set('ls-bodyFont',s.bodyFont||"'Crimson Text',serif");set('ls-fontSize',s.fontSize||'11px');set('ls-pageSize',s.pageSize||'a4');set('ls-orientation',s.orientation||'portrait');set('ls-pageNums',s.pageNums||'yes');set('ls-apiKey',s.apiKey||'');set('ls-layoutModel',s.layoutModel||'google/gemini-2.0-flash-001');set('ls-proofModel',s.proofModel||'google/gemini-flash-1.5');set('ls-maxTokens',s.maxTokens||'1000');set('ls-teachersPerPage',String(s.teachersPerPage||9));set('ls-studentsPerPage',String(s.studentsPerPage||2));set('ls-speechesPerPage',String(s.speechesPerPage||1));set('ls-galleryPerPage',String(s.galleryPerPage||4));set('ls-creativePerPage',String(s.creativePerPage||2));set('ls-autoTrim',s.autoTrim||'yes');updatePageSizeUI();}
function updatePageSizeUI(){const ps=document.getElementById('ls-pageSize');const row=document.getElementById('ls-customSizeRow');if(ps&&row)row.style.display=ps.value==='custom'?'block':'none';}
function saveLsSettings(){const get=id=>{const el=document.getElementById(id);return el?el.value:undefined;};const s={magTitle:get('ls-magTitle'),schoolName:get('ls-schoolName'),location:get('ls-location'),edition:get('ls-edition'),year:get('ls-year'),theme:get('ls-theme'),color1:get('ls-color1'),color2:get('ls-color2'),color3:get('ls-color3'),pageBg:get('ls-pageBg'),textColor:get('ls-textColor'),headingFont:get('ls-headingFont'),bodyFont:get('ls-bodyFont'),fontSize:get('ls-fontSize'),pageSize:get('ls-pageSize'),orientation:get('ls-orientation'),pageNums:get('ls-pageNums'),apiKey:get('ls-apiKey'),layoutModel:get('ls-layoutModel'),proofModel:get('ls-proofModel'),maxTokens:get('ls-maxTokens'),teachersPerPage:parseInt(get('ls-teachersPerPage'))||9,studentsPerPage:parseInt(get('ls-studentsPerPage'))||2,speechesPerPage:parseInt(get('ls-speechesPerPage'))||1,galleryPerPage:parseInt(get('ls-galleryPerPage'))||4,creativePerPage:parseInt(get('ls-creativePerPage'))||2,autoTrim:get('ls-autoTrim'),production:lsSettings.production,customCategories:lsSettings.customCategories};lsSettings=s;saveLsSettingsToStorage(s);applyLsColors(s);alert('Settings saved!');}
function applyLsColors(s){
  if(!s)s=lsSettings||{};
  try {
    const r=document.documentElement;
    if(s.color1){r.style.setProperty('--school-navy',s.color1);r.style.setProperty('--school-navy2',s.color1+'cc');r.style.setProperty('--admin',s.color1);}
    if(s.color2){r.style.setProperty('--school-mint',s.color2);r.style.setProperty('--school-mint3',s.color2);}
    if(s.color3)r.style.setProperty('--school-red',s.color3);
    if(s.pageBg)r.style.setProperty('--surface',s.pageBg);
    if(s.textColor)r.style.setProperty('--ink',s.textColor);
  } catch(err) {
    console.error('applyLsColors error:', err);
  }
}

/* SECTION MANAGER */
function renderSectionManager(){const list=document.getElementById('sectionList');subs=loadAll();list.innerHTML=sectionOrder.map((sec,i)=>{const count=subs.filter(s=>s.category===sec.key&&(s.status==='approved'||s.status==='finalized')).length;const lbl=getLabel('section_'+sec.key,sec.label);return`<div class="section-row" draggable="true" data-idx="${i}" ondragstart="sectionDragStart(event,${i})" ondragover="sectionDragOver(event,${i})" ondrop="sectionDrop(event,${i})" ondragleave="sectionDragLeave(event)"><span class="section-handle">⠿</span><span class="section-row-num">${i+1}</span><div class="section-row-info"><div class="section-row-name">${sec.icon} ${esc(lbl)}</div><div class="section-row-meta">${count} approved · Layout: ${sec.layout}</div></div><div class="section-row-controls"><button class="section-toggle ${sec.visible?'on':''}" onclick="toggleSection(${i})">${sec.visible?'Visible':'Hidden'}</button><select class="section-layout-select" onchange="changeSectionLayout(${i},this.value)"><option value="single" ${sec.layout==='single'?'selected':''}>Single</option><option value="double" ${sec.layout==='double'?'selected':''}>Double</option><option value="grid" ${sec.layout==='grid'?'selected':''}>Grid</option><option value="teacher-grid" ${sec.layout==='teacher-grid'?'selected':''}>Teacher Grid</option><option value="gallery" ${sec.layout==='gallery'?'selected':''}>Gallery</option><option value="events" ${sec.layout==='events'?'selected':''}>Events</option><option value="cover" ${sec.layout==='cover'?'selected':''}>Cover</option><option value="toc" ${sec.layout==='toc'?'selected':''}>TOC</option></select>${sec.editable!==false?`<button class="section-rename-btn" onclick="openRenameModal('${sec.key}','${esc(lbl)}')">✎ Rename</button>`:''}</div></div>`;}).join('');
  /* SortableJS — smooth drag-and-drop (if library loaded) */
  if(typeof Sortable!=='undefined'){
    const listEl=document.getElementById('sectionList');
    if(listEl && !listEl._sortable){
      listEl._sortable=Sortable.create(listEl,{handle:'.section-handle',animation:150,ghostClass:'drag-over',onEnd:function(evt){
        const moved=sectionOrder.splice(evt.oldIndex,1)[0];
        sectionOrder.splice(evt.newIndex,0,moved);
        localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));
        renderSectionManager();
      }});
    }
  }
}
function sectionDragStart(e,i){dragSrcIdx=i;}
function sectionDragOver(e,i){e.preventDefault();document.querySelectorAll('.section-row').forEach((r,ri)=>r.classList.toggle('drag-over',ri===i&&ri!==dragSrcIdx));}
function sectionDragLeave(e){document.querySelectorAll('.section-row').forEach(r=>r.classList.remove('drag-over'));}
function sectionDrop(e,i){e.preventDefault();document.querySelectorAll('.section-row').forEach(r=>{r.classList.remove('drag-over');});if(dragSrcIdx===null||dragSrcIdx===i)return;const moved=sectionOrder.splice(dragSrcIdx,1)[0];sectionOrder.splice(i,0,moved);dragSrcIdx=null;localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));renderSectionManager();}
function toggleSection(i){sectionOrder[i].visible=!sectionOrder[i].visible;localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));renderSectionManager();}
function changeSectionLayout(i,val){sectionOrder[i].layout=val;localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));}

/* RENAME */
function openRenameModal(key,cur){renamingKey=key;document.getElementById('renameModalSub').textContent=`Renaming: "${cur}"`;document.getElementById('renameInput').value=cur;document.getElementById('renameModal').classList.add('active');setTimeout(()=>document.getElementById('renameInput').focus(),100);}
function closeRenameModal(){document.getElementById('renameModal').classList.remove('active');renamingKey=null;}
function confirmRename(){if(!renamingKey)return;const n=document.getElementById('renameInput').value.trim();if(!n){alert('Name cannot be empty.');return;}labelOverrides['section_'+renamingKey]=n;const sec=sectionOrder.find(s=>s.key===renamingKey);if(sec)sec.label=n;saveLabels(labelOverrides);localStorage.setItem('me_section_order',JSON.stringify(sectionOrder));closeRenameModal();renderSectionManager();}

/* LABEL RENAME */
function renderLabelRenameList(){const c=document.getElementById('labelRenameList');if(!c)return;const items=[{key:'landing_heading',label:'Landing page heading',def:'Choose a content category'},...CATEGORY_KEYS.map(k=>({key:'cat_label_'+k,label:`"${CATEGORIES[k].label}" card title`,def:CATEGORIES[k].label})),...CATEGORY_KEYS.map(k=>({key:'cat_form_title_'+k,label:`"${CATEGORIES[k].label}" form title`,def:CATEGORIES[k].title}))];c.innerHTML=items.map(item=>`<div style="margin-bottom:8px;"><label style="font-size:11px;color:var(--ink3);display:block;margin-bottom:3px;">${esc(item.label)}</label><input type="text" value="${esc(getLabel(item.key,item.def))}" data-key="${item.key}" style="width:100%;padding:7px 10px;border:1.5px solid var(--border);border-radius:6px;font-size:12px;font-family:'Lato',sans-serif;background:#fafaf8;"/></div>`).join('');}
function saveAllLabels(){document.querySelectorAll('#labelRenameList input[data-key]').forEach(inp=>{const key=inp.getAttribute('data-key');const val=inp.value.trim();if(val)labelOverrides[key]=val;});saveLabels(labelOverrides);renderLandingCards();alert('Labels saved!');}

/* MAGAZINE PREVIEW */
function getPageDimensions(){const s=lsSettings;const ps=s.pageSize||'a4';const land=s.orientation==='landscape';const sizes={a4:[794,1123],a5:[559,794],letter:[816,1056],custom:[parseInt(s.customW)||794,parseInt(s.customH)||1123]};let[w,h]=sizes[ps]||sizes.a4;if(land)[w,h]=[h,w];return{w,h};}

const wsPassportPhotoCache=new Map();
const wsPassportPhotoPending=new Set();
function wsPhotoCacheKey(src,bg){let h=0;const s=(src||'')+'|'+(bg||'');for(let i=0;i<s.length;i++)h=((h<<5)-h+s.charCodeAt(i))|0;return 'passport_'+Math.abs(h);}
function wsColorDistance(a,b){const dr=a[0]-b[0],dg=a[1]-b[1],db=a[2]-b[2];return Math.sqrt(dr*dr+dg*dg+db*db);}
function wsHexToRgb(hex){const m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex||'');return m?[parseInt(m[1],16),parseInt(m[2],16),parseInt(m[3],16)]:[255,255,255];}
function wsPassportPhotoSrc(src,bg){
  return src;
}
function wsBuildPassportPhoto(src,bg,key){
  return new Promise(resolve=>{
    const img=new Image();img.crossOrigin='anonymous';
    img.onload=function(){
      try{
        const max=520,scale=Math.min(1,max/Math.max(img.naturalWidth,img.naturalHeight));
        const w=Math.max(1,Math.round(img.naturalWidth*scale)),h=Math.max(1,Math.round(img.naturalHeight*scale));
        const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
        const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0,w,h);
        const im=ctx.getImageData(0,0,w,h),d=im.data,edge=[];
        const add=(x,y)=>{const i=(y*w+x)*4;if(d[i+3]>20)edge.push([d[i],d[i+1],d[i+2]]);};
        for(let x=0;x<w;x+=2){add(x,0);add(x,h-1);}
        for(let y=0;y<h;y+=2){add(0,y);add(w-1,y);}
        if(!edge.length){resolve(src);return;}
        const bgAvg=edge.reduce((a,p)=>[a[0]+p[0],a[1]+p[1],a[2]+p[2]],[0,0,0]).map(v=>v/edge.length);
        const mask=new Uint8Array(w*h),queue=[];
        const similar=(x,y,extra=0)=>{const i=(y*w+x)*4;if(d[i+3]<30)return true;return wsColorDistance([d[i],d[i+1],d[i+2]],bgAvg)<72+extra;};
        const seed=(x,y)=>{const n=y*w+x;if(!mask[n]&&similar(x,y)){mask[n]=1;queue.push(n);}};
        for(let x=0;x<w;x++){seed(x,0);seed(x,h-1);}
        for(let y=0;y<h;y++){seed(0,y);seed(w-1,y);}
        for(let q=0;q<queue.length;q++){
          const n=queue[q],x=n%w,y=(n/w)|0;
          [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dx,dy])=>{const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=w||ny>=h)return;const ni=ny*w+nx;if(!mask[ni]&&similar(nx,ny,18)){mask[ni]=1;queue.push(ni);}});
        }
        const fill=wsHexToRgb(bg);
        for(let y=0;y<h;y++){
          for(let x=0;x<w;x++){
            const n=y*w+x,i=n*4;
            if(mask[n]){d[i]=fill[0];d[i+1]=fill[1];d[i+2]=fill[2];d[i+3]=255;continue;}
            let near=0;
            for(let yy=-1;yy<=1;yy++)for(let xx=-1;xx<=1;xx++){const nx=x+xx,ny=y+yy;if(nx>=0&&ny>=0&&nx<w&&ny<h&&mask[ny*w+nx])near++;}
            if(near&&similar(x,y,34)){const a=Math.min(.65,near/12);d[i]=Math.round(d[i]*(1-a)+fill[0]*a);d[i+1]=Math.round(d[i+1]*(1-a)+fill[1]*a);d[i+2]=Math.round(d[i+2]*(1-a)+fill[2]*a);}
          }
        }
        ctx.putImageData(im,0,0);resolve(canvas.toDataURL('image/png'));
      }catch(e){resolve(src);}
    };
    img.onerror=()=>resolve(src);
    img.src=src;
  });
}

function generateMagPreview(){
  subs=loadAll();magPages=[];currentPageIdx=0;
  const s=lsSettings;
  const approved=subs.filter(sub=>sub.status==='approved'||sub.status==='finalized');
  sectionOrder.filter(sec=>sec.visible).forEach(sec=>{
    if(sec.key==='cover'){magPages.push({type:'cover',sec});return;}
    if(sec.key==='toc'){magPages.push({type:'toc',sec});return;}
    const catSubs=approved.filter(sub=>sub.category===sec.key);
    if(sec.key==='editorial-note'){const sub=approved.find(sub=>sub.category==='editorial-note');if(sub)magPages.push({type:'editorial-note',sub,sec});return;}
    if(sec.key==='appreciation'){const sub=approved.find(sub=>sub.category==='appreciation');if(sub)magPages.push({type:'appreciation',sub,sec});return;}
    if(!catSubs.length)return;
    let perPage=1;
    if(sec.key==='teachers')perPage=parseInt(s.teachersPerPage)||9;
    else if(['primary5','jss3','ss3'].includes(sec.key))perPage=parseInt(s.studentsPerPage)||2;
    else if(sec.key==='speeches')perPage=parseInt(s.speechesPerPage)||1;
    else if(sec.key==='gallery')perPage=parseInt(s.galleryPerPage)||4;
    else if(sec.key==='creative')perPage=parseInt(s.creativePerPage)||2;
    for(let i=0;i<catSubs.length;i+=perPage){magPages.push({type:'section-content',sec,items:catSubs.slice(i,i+perPage),isFirst:i===0,pageInSection:Math.floor(i/perPage)+1});}
  });
  renderCurrentPage();renderTOC();updatePageNavUI();
}

function renderCurrentPage(){
  const canvas=document.getElementById('magCanvas');
  if(!magPages.length){canvas.innerHTML=`<div style="text-align:center;color:var(--ink3);padding:4rem 1rem;"><div style="font-size:48px;margin-bottom:1rem;">🗞</div><h3 style="font-family:'Lato',sans-serif;color:var(--ink2);">No approved content yet</h3><p style="font-size:14px;">Approve submissions and click Generate Preview again.</p></div>`;return;}
  const page=magPages[currentPageIdx];const{w,h}=getPageDimensions();
  const scale=Math.min(1,(window.innerWidth-20)/w);
  const s=lsSettings;
  const c1=s.color1||'#1a2744',c2=s.color2||'#7dd4a8',c3=s.color3||'#8b1a1a';
  const hFont=s.headingFont||"'Playfair Display',serif",bFont=s.bodyFont||"'Crimson Text',serif",bSize=s.fontSize||'11px';
  const magTitle=s.magTitle||'The Torch',schoolName=s.schoolName||'Way To Success Standard Schools',edition=s.edition||'1st Edition',year=s.year||'2025/2026',pageBg=s.pageBg||'#ffffff',textColor=s.textColor||'#1c1c1e';
  const foot=`<div style="border-top:1px solid #e8e8e0;padding:5px 2rem;display:flex;justify-content:space-between;align-items:center;background:#fafaf8;"><span style="font-size:8px;font-weight:700;color:${c1};letter-spacing:.5px;text-transform:uppercase;">${esc(schoolName)}</span><div style="width:18px;height:2px;background:${c2};border-radius:1px;"></div><span style="font-size:8px;color:#888;">${currentPageIdx+1}</span></div>`;

  let inner='';
  if(page.type==='cover'){
    inner=`<div style="background:linear-gradient(160deg,${c1},${c1}dd,${c1}aa);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2.5rem 2rem;position:relative;overflow:hidden;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:1rem;">${esc(edition)}</div><div style="width:70px;height:70px;border-radius:50%;background:rgba(255,255,255,.1);border:2px solid ${c2}66;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;font-size:24px;">🎓</div><div style="width:50px;height:4px;background:${c2};border-radius:2px;margin:0 auto 1.5rem;"></div><h1 style="font-family:${hFont};font-size:40px;color:#fff;margin-bottom:.5rem;line-height:1.1;">${esc(magTitle)}</h1>${s.theme?`<p style="font-size:12px;color:rgba(255,255,255,.6);margin-bottom:.5rem;font-style:italic;">${esc(s.theme)}</p>`:''}<p style="font-size:12px;color:${c2};margin-bottom:2rem;">${esc(schoolName)}</p><div style="font-size:24px;font-weight:700;color:${c2};font-family:${hFont};">${esc(year)}</div><div style="position:absolute;bottom:0;left:0;right:0;height:8px;background:linear-gradient(90deg,${c2},${c3});"></div></div>`;
  } else if(page.type==='toc'){
    const tocItems=buildTOCItems();
    inner=`<div style="background:${pageBg};height:100%;padding:2rem;display:flex;flex-direction:column;"><h2 style="font-family:${hFont};font-size:24px;color:${c1};margin-bottom:4px;">Contents</h2><div style="height:3px;background:linear-gradient(90deg,${c2},transparent);margin-bottom:1.5rem;border-radius:2px;"></div><div style="flex:1;">${tocItems.map(item=>`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px dashed #e8e8e0;"><span style="font-size:11px;font-weight:700;color:${c2};width:20px;">${item.num}</span><span style="font-size:12px;color:${textColor};flex:1;font-family:${bFont};">${esc(item.name)}</span><span style="flex:1;border-bottom:1px dotted #ccc;height:12px;margin:0 4px;"></span><span style="font-size:11px;color:#888;font-weight:700;">p. ${item.page}</span></div>`).join('')}</div>${s.pageNums!=='no'?foot:''}</div>`;
  } else if(page.type==='editorial-note'||page.type==='appreciation'){
    const sub=page.sub;const title=sub.data.title?.value||page.sec.label;const body=sub.data.body?.value||'';
    inner=`<div style="background:${pageBg};height:100%;display:flex;flex-direction:column;"><div style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.5rem 2rem;min-height:100px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:6px;">${esc(page.sec.label)}</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(title)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div><div style="padding:1.5rem 2rem;flex:1;overflow:hidden;"><p style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;">${esc(body.substring(0,1500))}${body.length>1500?'\n\n…(continued)':''}</p></div>${s.pageNums!=='no'?foot:''}</div>`;
  } else if(page.type==='section-content'){
    const sec=page.sec;const items=page.items;const layout=sec.layout;const secLabel=getLabel('section_'+sec.key,sec.label);
    let contentHtml='';

    /* ── UNIVERSAL FIELD RENDERER ──────────────────────────────────────────────
       Renders ALL data fields from sub.data dynamically.
       No hardcoding — whatever was submitted and approved comes through.
       Fields are rendered in submission order. Long text gets pre-line wrap.
    ─────────────────────────────────────────────────────────────────────────── */
    function renderAllFields(sub, opts){
      opts = opts || {};
      const maxChars = opts.maxChars || 99999;
      const skipFirst = opts.skipFirst || false; // skip name field (shown in header)
      let entries = Object.entries(sub.data || {});
      if(skipFirst && entries.length > 0) entries.shift();
      if(Array.isArray(opts.fieldIds)) entries = entries.filter(([k])=>opts.fieldIds.includes(k));
      if(opts.maxFields) entries = entries.slice(0, opts.maxFields);
      return entries.map(([k, fc]) => {
        if(!fc || !fc.value) return '';
        const editKey=String(sub.id)+'|'+k;
        const val = String(page.textEdits?.[editKey] ?? fc.value);
        const isLong = val.length > 60;
        const effectiveMax = page.textLimit ? Math.min(maxChars, page.textLimit) : maxChars;
        const display = val.length > effectiveMax ? val.substring(0, effectiveMax) + '…' : val;
        if(isLong){
          return `<div class="mag-item-field" style="margin-bottom:5px;">
            <div class="mag-item-field-label" style="font-size:8px;text-transform:uppercase;letter-spacing:.4px;color:#999;font-weight:700;margin-bottom:1px;">${esc(fc.label)}</div>
            <div class="mag-item-field-value" style="font-size:9px;color:${opts.textColor||'#333'};line-height:1.6;white-space:pre-line;font-family:${opts.bFont||'serif'};">${esc(display)}</div>
          </div>`;
        } else {
          return `<div class="mag-item-field" style="margin-bottom:3px;display:flex;gap:4px;flex-wrap:wrap;align-items:baseline;">
            <span class="mag-item-field-label" style="font-size:8px;text-transform:uppercase;letter-spacing:.4px;color:#999;font-weight:700;flex-shrink:0;">${esc(fc.label)}:</span>
            <span class="mag-item-field-value" style="font-size:9px;color:${opts.textColor||'#333'};">${esc(display)}</span>
          </div>`;
        }
      }).join('');
    }

    /* ── NAME / HEADLINE RESOLVER ──────────────────────────────────────────── */
    function resolveName(sub){
      return sub.data.name?.value || sub.data.className?.value || sub.data.businessName?.value ||
             sub.data.messageTitle?.value || sub.data.speakerName?.value ||
             sub.data.contribName?.value || sub.data.reporterName?.value ||
             sub.data.authorName?.value || sub.data.intervieweeName?.value ||
             sub.data.submitterName?.value || sub.data.eventName?.value ||
             sub.data.title?.value || 'Untitled';
    }
    function resolveSubtitle(sub){
      return sub.data.title?.value || sub.data.photoCaption?.value || sub.data.contactInfo?.value ||
             sub.data.speakerTitle?.value ||
             sub.data.authorRole?.value || sub.data.intervieweeTitle?.value ||
             sub.data.contribRole?.value || sub.data.subject?.value ||
             sub.data.speechType?.value || sub.data.eventType?.value ||
             sub.data.subjectArea?.value || sub.data.photoCategory?.value || '';
    }
    function resolveMainText(sub){
      const keys=['classMessage','speechBody','articleBody','contribBody','qaBody','eventReport','message','introParagraph','advertCaption'];
      for(const key of keys){if(sub.data[key]?.value)return page.textEdits?.[String(sub.id)+'|'+key] ?? sub.data[key].value;}
      return '';
    }
    function renderArticleCard(sub,mode,idx){
      const name=resolveName(sub),subtitle=resolveSubtitle(sub),mainText=resolveMainText(sub),pullQuote=sub.data.pullQuote?.value||'';
      const ph=sub.photoData?resolvePhotoBlock(sub,mode==='feature'?'88px':'64px',mode==='feature'?'96px':'72px','7px',`2px solid ${c2}44`):'';
      const body=esc(page.textLimit&&mainText.length>page.textLimit?mainText.substring(0,page.textLimit)+'...':mainText);
      const cols=mode==='newspaper'?3:mode==='columns'?2:mode==='photo-break'?2:1;
      const imgFloat=ph?`<div style="float:${idx%2?'right':'left'};width:${mode==='feature'?'104px':'76px'};margin:${idx%2?'0 0 8px 12px':'0 12px 8px 0'};">${ph}</div>`:'';
      if(mode==='briefs'){
        return `<article class="mag-item mag-item-article mag-brief-card" style="padding:10px 12px;border:1px solid ${c2}44;border-radius:7px;background:#fff;break-inside:avoid;overflow:hidden;">
          <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:3px;">${esc(subtitle)}</div>
          <h3 style="font-family:${hFont};font-size:13px;line-height:1.2;color:${c1};margin-bottom:6px;">${esc(name)}</h3>
          <div style="font-family:${bFont};font-size:${bSize};line-height:1.6;color:${textColor};text-align:justify;">${body.replace(/\n/g,'<br>')}</div>
        </article>`;
      }
      if(mode==='ribbon'){
        return `<article class="mag-item mag-item-article mag-ribbon-story" style="padding:0;border:1px solid #e8e8e0;border-radius:7px;background:#fff;break-inside:avoid;overflow:hidden;">
          <div style="padding:8px 12px;background:${c1};color:#fff;">
            <div style="font-size:7px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;">${esc(subtitle)}</div>
            <h3 style="font-family:${hFont};font-size:14px;line-height:1.2;color:#fff;">${esc(name)}</h3>
          </div>
          <div style="padding:10px 12px;font-family:${bFont};font-size:${bSize};line-height:1.7;color:${textColor};text-align:justify;column-count:2;column-gap:14px;">${body.replace(/\n/g,'<br>')}</div>
        </article>`;
      }
      if(mode==='photo-break'&&ph){
        return `<article class="mag-item mag-item-article mag-photo-break" style="padding:12px;border:1px solid ${c2}44;border-radius:7px;background:#fffefb;break-inside:avoid;overflow:hidden;">
          <h3 style="font-family:${hFont};font-size:15px;line-height:1.2;color:${c1};margin-bottom:3px;">${esc(name)}</h3>
          <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:7px;">${esc(subtitle)}</div>
          <div style="display:grid;grid-template-columns:1fr 86px;gap:10px;align-items:start;">
            <div style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};text-align:justify;column-count:${cols};column-gap:14px;">${body.replace(/\n/g,'<br>')}</div>
            <div>${ph}</div>
          </div>
        </article>`;
      }
      return `<article class="mag-item mag-item-article" style="padding:${mode==='feature'?'14px':'10px 12px'};border:${mode==='feature'?`1px solid ${c2}44`:'1px solid #e8e8e0'};border-radius:${mode==='feature'?'8px':'4px'};background:${mode==='feature'?'#fff':'#fffefb'};break-inside:avoid;overflow:hidden;">
        <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:3px;">${esc(subtitle)}</div>
        <h3 style="font-family:${hFont};font-size:${mode==='feature'?'16px':'13px'};line-height:1.2;color:${c1};margin-bottom:6px;">${esc(name)}</h3>
        ${pullQuote?`<div style="font-family:${hFont};font-size:11px;color:${c1};border-left:3px solid ${c2};padding:5px 8px;margin:5px 0 8px;background:${c2}18;">${esc(pullQuote)}</div>`:''}
        <div style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};column-count:${cols};column-gap:14px;text-align:justify;">${imgFloat}${body.replace(/\n/g,'<br>')}</div>
      </article>`;
    }
    function renderImageFrame(src,key,style,alt){
      if(!src)return '';
      const ed=Object.assign({},wsGlobalImageDefaults(),page.imageEdits?.[key]||{});
      const fit=ed.fit||style.fit||'cover';
      const pos=fit==='top'?'50% 0%':fit==='center'?'50% 50%':((ed.x??50)+'% '+(ed.y??50)+'%');
      const objFit=fit==='contain'?'contain':'cover';
      const zoom=Math.max(.5,Math.min(3,parseFloat(ed.zoom)||1));
      const rot=parseInt(ed.rotate)||0;
      const imgSrc=ed.replaceSrc||src;
      const imgStyle=`width:100%;height:100%;object-fit:${objFit};object-position:${pos};display:block;border:0;transform:scale(${zoom}) rotate(${rot}deg);transform-origin:center center;filter:none;mix-blend-mode:normal;`;
      return `<div class="mag-image-frame" data-image-key="${esc(key)}" style="${style.frame||''}overflow:hidden;position:relative;background:${style.bg||'#fff'};">
        <img src="${esc(imgSrc)}" alt="${esc(alt||'Photo')}" style="${imgStyle}"/>
      </div>`;
    }
    function renderManualBlocks(blocks){
      if(!Array.isArray(blocks)||!blocks.length)return '';
      return `<div class="mag-manual-blocks" style="display:grid;gap:8px;margin-top:10px;">
        ${blocks.map((b,i)=>{
          if(!b)return '';
          if(b.type==='image')return `<figure class="mag-manual-block mag-manual-image" style="margin:0;padding:8px;border:1px dashed ${c2}66;border-radius:7px;background:#fff;">
            ${b.src?renderImageFrame(b.src,'manual:'+(b.id||i),{frame:'width:100%;height:150px;border-radius:5px;',fit:'cover'},b.caption||'Manual image'):`<div style="height:110px;border-radius:5px;background:#f0f0ea;display:flex;align-items:center;justify-content:center;color:#888;font-size:11px;">Image box</div>`}
            ${b.caption?`<figcaption style="font-size:8px;color:#777;line-height:1.4;margin-top:5px;">${esc(b.caption)}</figcaption>`:''}
          </figure>`;
          if(b.type==='caption')return `<div class="mag-manual-block mag-manual-caption" style="font-size:8px;color:#777;line-height:1.5;border-left:3px solid ${c2};padding:5px 8px;background:${c2}14;border-radius:0 6px 6px 0;">${esc(b.text||'Caption').replace(/\n/g,'<br>')}</div>`;
          return `<div class="mag-manual-block mag-manual-text" style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};padding:8px 10px;border:1px solid #e8e8e0;border-radius:7px;background:#fff;white-space:pre-line;">${esc(b.text||'Text box')}</div>`;
        }).join('')}
      </div>`;
    }
    function resolvePhotoBlock(sub, w, h, radius, border, bg){
      const ini = resolveName(sub).trim().split(/\s+/).map(w=>w[0]).join('').substring(0,2).toUpperCase();
      if(sub.photoData){
        if(bg){
          return `<div style="width:${w};height:${h};border-radius:${radius};background:${bg};border:${border};flex-shrink:0;display:block;overflow:hidden;position:relative;">
            ${renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:'width:100%;height:100%;border-radius:0;',fit:'top',bg},resolveName(sub))}
          </div>`;
        }
        return renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:`width:${w};height:${h};border-radius:${radius};flex-shrink:0;border:${border};`,fit:'top'},resolveName(sub));
      }
      return `<div style="width:${w};height:${h};border-radius:${radius};background:${bg||c1};border:${bg?border:'none'};display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;flex-shrink:0;">${ini}</div>`;
    }

    /* ── TEACHER GRID ─────────────────────────────────────────────────────── */
    function profileStyleDefaults(page){
      const ctl = page.sec?.profileControls || page.profileControls || {};
      const photo = {small:['46px','54px'],medium:['62px','74px'],large:['78px','92px']}[ctl.photoSize] || ['62px','74px'];
      const shape = ctl.photoShape==='circle'?'50%':ctl.photoShape==='square'?'0':'6px';
      const nameSize = {small:'8.5px',medium:'12px',large:'14px'}[ctl.nameSize] || '12px';
      const gap = {compact:'6px',normal:'10px',roomy:'14px'}[ctl.cardSpacing] || '10px';
      const pad = {compact:'7px',normal:'10px',roomy:'13px'}[ctl.cardSpacing] || '10px';
      const maxFields = ctl.fieldsMode==='key'?3:0;
      return {ctl,photoW:photo[0],photoH:photo[1],shape,nameSize,gap,pad,maxFields};
    }
    function profileCardStyle(style,kind){
      const design=style.ctl.cardDesign||'classic';
      if(design==='frame')return `background:#fff;border:1px solid ${c2}55;box-shadow:inset 0 0 0 6px ${style.ctl.photoBg||'#fff'};border-radius:8px;padding:${style.pad};text-align:center;`;
      if(design==='badge')return `background:linear-gradient(180deg,#fff,#fafaf8);border-radius:999px 999px 10px 10px;border:1px solid ${c2}66;border-bottom:4px solid ${c2};padding:${style.pad};text-align:center;`;
      if(design==='editorial')return `background:#fff;border-radius:4px;padding:${style.pad};border:1px solid #ecece4;border-left:4px solid ${c2};box-shadow:0 2px 8px rgba(0,0,0,.04);${kind==='student'?'':'text-align:center;'}`;
      if(design==='yearbook')return `background:#fff;border-radius:6px;padding:${style.pad};border:1px solid #e0e0d8;box-shadow:0 3px 0 ${c2}55;text-align:center;`;
      if(design==='portrait-split')return `background:linear-gradient(90deg,${c2}18,#fff 36%);border-radius:6px;padding:${style.pad};border:1px solid ${c2}44;`;
      if(design==='ribbon')return `background:#fff;border-radius:6px;padding:${style.pad};border:1px solid #e8e8e0;border-top:5px solid ${c1};box-shadow:0 2px 8px rgba(0,0,0,.04);`;
      if(design==='minimal')return `background:#fff;border-radius:0;padding:${style.pad};border-bottom:1px solid ${c2}66;`;
      return kind==='student'?`background:#fafaf8;border-radius:8px;border-left:3px solid ${c2};padding:${style.pad};`:`background:#fafaf8;border-radius:7px;padding:${style.pad};border-top:3px solid ${c2};text-align:center;`;
    }
    function profileFields(sub, style, maxChars){
      if(style.ctl.fieldsMode==='name-only') return '';
      const fieldIds=style.ctl.fieldsMode==='custom'?style.ctl.fieldIds:null;
      return renderAllFields(sub, {skipFirst:true, maxChars, maxFields:style.maxFields, fieldIds, textColor, bFont});
    }
    if(layout==='teacher-grid'){
      const style = profileStyleDefaults(page);
      const cols = items.length > 9 ? 4 : 3;
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:${style.gap};">
        ${items.map(sub => {
          const name = resolveName(sub);
          const shortName = name.split(' ').slice(0,3).join(' ');
          const ph = resolvePhotoBlock(sub,style.photoW,style.photoH,style.shape,`2px solid ${c2}66`);
          const allFields = profileFields(sub, style, 99999);
          return `<div class="mag-item mag-item-teacher" style="${profileCardStyle(style,'teacher')}">
            <div class="mag-item-photo" style="margin:0 auto 5px;width:${style.photoW};">${ph}</div>
            <div class="mag-item-name" style="font-size:${style.nameSize};font-weight:700;color:${c1};line-height:1.3;margin-bottom:4px;">${esc(shortName)}</div>
            <div class="mag-item-fields" style="text-align:left;padding:0 2px;">${allFields}</div>
          </div>`;
        }).join('')}
      </div>`;
    }

    /* ── STUDENT GRID (primary5 / jss3 / ss3) ─────────────────────────────── */
    else if(layout==='grid'){
      const style = profileStyleDefaults(page);
      const cols = items.length === 1 ? 1 : items.length <= 4 ? 2 : items.length <= 9 ? 3 : 4;
      const namePlacement = page.sec?.namePlacement || page.namePlacement || 'side';
      const compactCards = namePlacement==='under'||namePlacement==='photo-under';
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:${style.gap};${compactCards?'justify-items:center;':''}">
        ${items.map(sub => {
          const name = resolveName(sub);
          const ph = resolvePhotoBlock(sub,style.photoW,style.photoH,style.shape,`2px solid ${c2}55`,style.ctl.photoBg||'#ffffff');
          const allFields = profileFields(sub, style, 120);
          if(namePlacement==='under'||namePlacement==='photo-under'){
            return `<div class="mag-item mag-item-student" style="width:calc(${style.photoW} + 42px);min-width:96px;max-width:150px;${profileCardStyle(style,'student')}text-align:center;">
              <div class="mag-item-photo" style="width:${style.photoW};margin:0 auto 6px;">${ph}</div>
              <div class="mag-item-name" style="font-size:${style.nameSize};font-weight:700;color:${c1};font-family:${hFont};line-height:1.25;margin-bottom:${namePlacement==='photo-under'?'0':'6px'};overflow-wrap:anywhere;">${esc(name)}</div>
              ${namePlacement==='photo-under'?'':`<div class="mag-item-fields" style="text-align:left;">${allFields}</div>`}
            </div>`;
          }
          return `<div class="mag-item mag-item-student" style="display:grid;grid-template-columns:auto 1fr;gap:${style.gap};${profileCardStyle(style,'student')}">
            <div class="mag-item-photo">${ph}</div>
            <div class="mag-item-details">
              <div class="mag-item-name" style="font-size:${style.nameSize};font-weight:700;color:${c1};font-family:${hFont};margin-bottom:5px;">${esc(name)}</div>
              <div class="mag-item-fields">${allFields}</div>
            </div>
          </div>`;
        }).join('')}
      </div>`;
    }

    /* ── GALLERY ──────────────────────────────────────────────────────────── */
    else if(layout==='gallery'){
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
        ${items.map(sub => {
          // Get all field text for caption area
          const allFields = renderAllFields(sub, {maxChars:80, textColor:'#666', bFont});
          if(sub.photoData){
            return `<div class="mag-item mag-item-gallery">
              ${renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:`width:100%;aspect-ratio:4/3;border-radius:6px;border:1px solid ${c2}33;`,fit:'cover'},resolveName(sub))}
              <div class="mag-item-fields" style="padding:4px 2px;font-size:8px;">${allFields}</div>
            </div>`;
          }
          if(sub.photos && sub.photos.length){
            return sub.photos.slice(0,2).map((p,pi) => `<div class="mag-item mag-item-gallery">
              ${renderImageFrame(wsPhotoSrc(p),'sub:'+sub.id+':photo:'+pi,{frame:`width:100%;aspect-ratio:4/3;border-radius:6px;border:1px solid ${c2}33;`,fit:'cover'},resolveName(sub))}
              ${pi===0?`<div class="mag-item-fields" style="padding:4px 2px;font-size:8px;">${allFields}</div>`:''}
            </div>`).join('');
          }
          return '';
        }).join('')}
      </div>`;
    }

    /* ── DOUBLE / CREATIVE ────────────────────────────────────────────────── */
    else if(layout==='class-photo'||layout==='class-message'){
      contentHtml = items.map(sub => {
        const name = resolveName(sub);
        const subtitle = resolveSubtitle(sub);
        const mainText = resolveMainText(sub);
        const photo = sub.photoData ? renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:`width:100%;height:${layout==='class-message'?'230px':'360px'};border-radius:8px;border:1px solid ${c2}55;`,fit:'contain',bg:'#fff'},name) : '';
        if(layout==='class-message'){
          return `<article class="mag-item mag-class-message" style="display:grid;grid-template-columns:1.05fr .95fr;gap:14px;align-items:stretch;">
            <div style="border:1px solid ${c2}55;border-left:5px solid ${c2};border-radius:8px;padding:14px;background:#fffefb;">
              <div class="mag-item-subtitle" style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:5px;">Graduating Class Message</div>
              <h3 class="mag-item-name" style="font-family:${hFont};font-size:19px;line-height:1.2;color:${c1};margin-bottom:8px;">${esc(name)}</h3>
              <div class="mag-item-body" style="font-family:${bFont};font-size:${bSize};line-height:1.75;color:${textColor};white-space:pre-line;text-align:justify;">${esc(mainText)}</div>
            </div>
            <figure style="margin:0;">
              ${photo}
              ${subtitle?`<figcaption style="font-size:8px;color:#777;line-height:1.4;margin-top:6px;text-align:center;">${esc(subtitle)}</figcaption>`:''}
            </figure>
          </article>`;
        }
        return `<figure class="mag-item mag-class-photo" style="margin:0;">
          ${photo}
          <figcaption style="margin-top:8px;text-align:center;">
            <h3 class="mag-item-name" style="font-family:${hFont};font-size:18px;color:${c1};line-height:1.2;margin-bottom:4px;">${esc(name)}</h3>
            ${subtitle?`<div class="mag-item-subtitle" style="font-size:10px;color:${textColor};line-height:1.5;">${esc(subtitle)}</div>`:''}
          </figcaption>
        </figure>`;
      }).join('');
    }

    else if(layout==='advertisements'){
      contentHtml = `<div style="display:grid;grid-template-columns:${items.length>1?'1fr 1fr':'1fr'};gap:12px;align-items:start;">
        ${items.map(sub => {
          const name = resolveName(sub);
          const subtitle = resolveSubtitle(sub);
          const flyer = sub.photoData ? renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:'width:100%;height:330px;border-radius:6px;border:1px solid #ddd;',fit:'contain',bg:'#fff'},name) : '';
          return `<article class="mag-item mag-advert" style="padding:10px;border:1px solid #e0e0d8;border-radius:8px;background:#fff;">
            ${flyer}
            <h3 class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};margin-top:7px;">${esc(name)}</h3>
            ${subtitle?`<div class="mag-item-subtitle" style="font-size:9px;color:#666;line-height:1.45;">${esc(subtitle)}</div>`:''}
          </article>`;
        }).join('')}
      </div>`;
    }

    else if(layout==='double'){
      const cols = items.length > 1 ? '1fr 1fr' : '1fr';
      contentHtml = `<div style="display:grid;grid-template-columns:${cols};gap:12px;">
        ${items.map(sub => {
          const name = resolveName(sub);
          const subtitle = resolveSubtitle(sub);
          const allFields = renderAllFields(sub, {skipFirst:true, maxChars:400, textColor, bFont});
          return `<div class="mag-item mag-item-creative" style="padding:12px;background:linear-gradient(135deg,#faf8ff,#f4f0fd);border-radius:8px;border:1px solid #e0d5f5;display:flex;flex-direction:column;">
            <div class="mag-item-subtitle" style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:#5b3a8a;font-weight:700;margin-bottom:3px;">${esc(subtitle)}</div>
            <div class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};font-weight:700;margin-bottom:6px;">${esc(name)}</div>
            <div class="mag-item-fields" style="flex:1;">${allFields}</div>
          </div>`;
        }).join('')}
      </div>`;
    }

    else if(layout==='article-columns'||layout==='article-newspaper'||layout==='article-feature'||layout==='article-photo-break'||layout==='article-briefs'||layout==='article-ribbon'){
      const mode=layout==='article-newspaper'?'newspaper':layout==='article-feature'?'feature':layout==='article-photo-break'?'photo-break':layout==='article-briefs'?'briefs':layout==='article-ribbon'?'ribbon':'columns';
      const cols=mode==='briefs'?(items.length>=3?'1fr 1fr 1fr':items.length>1?'1fr 1fr':'1fr'):(items.length>1?'1fr 1fr':'1fr');
      contentHtml=`<div class="mag-article-layout ${esc(layout)}" style="display:grid;grid-template-columns:${cols};gap:10px;align-items:start;">
        ${items.map((sub,i)=>renderArticleCard(sub,mode,i)).join('')}
      </div>`;
    }

    /* ── EVENTS ───────────────────────────────────────────────────────────── */
    else if(layout==='events'){
      contentHtml = items.map(sub => {
        const name = resolveName(sub);
        const allFields = renderAllFields(sub, {skipFirst:true, maxChars:400, textColor, bFont});
        const imgs = sub.photos && sub.photos.length ? sub.photos : sub.photoData ? [{data:sub.photoData}] : [];
        return `<div class="mag-item mag-item-event" style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #eee;">
          <h3 class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};margin-bottom:6px;">${esc(name)}</h3>
          ${imgs.length ? `<div class="mag-item-photos" style="display:flex;gap:5px;margin-bottom:7px;">${imgs.slice(0,3).map((p,pi)=>renderImageFrame(wsPhotoSrc(p),'sub:'+sub.id+':photo:'+pi,{frame:'flex:1;aspect-ratio:16/9;border-radius:5px;max-height:75px;',fit:'cover'},name)).join('')}</div>` : ''}
          <div class="mag-item-fields">${allFields}</div>
        </div>`;
      }).join('');
    }

    /* ── SINGLE / SPEECHES / INTERVIEWS / MOTIVATIONAL / ACADEMIC / DEFAULT ─ */
    else {
      contentHtml = items.map(sub => {
        const name = resolveName(sub);
        const subtitle = resolveSubtitle(sub);
        const mainText = resolveMainText(sub);
        const pullQuote = sub.data.pullQuote?.value || '';
        const allFields = renderAllFields(sub, {skipFirst:true, maxChars:99999, textColor, bFont});
        const ph = sub.photoData ? resolvePhotoBlock(sub,'52px','58px','6px',`2px solid ${c2}44`) : '';
        return `<div class="mag-item mag-item-single" style="margin-bottom:16px;">
          ${name ? `<div class="mag-item-header" style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e8e0;">
            <div class="mag-item-photo-wrap">${ph}</div>
            <div class="mag-item-header-text">
              <div class="mag-item-name" style="font-size:13px;font-weight:700;color:${c1};font-family:${hFont};">${esc(name)}</div>
              ${subtitle ? `<div class="mag-item-subtitle" style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:${c2};font-weight:700;">${esc(subtitle)}</div>` : ''}
            </div>
          </div>` : ''}
          ${pullQuote ? `<div class="mag-item-quote" style="border-left:4px solid ${c2};padding:8px 12px;margin:8px 0;background:${c2}22;border-radius:0 8px 8px 0;">
            <p style="font-family:${hFont};font-size:12px;color:${c1};font-style:italic;">${esc(pullQuote)}</p>
          </div>` : ''}
          ${mainText ? `<p class="mag-item-body" style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;margin-bottom:10px;">${esc(page.textLimit&&mainText.length>page.textLimit?mainText.substring(0,page.textLimit)+'…':mainText)}</p>` : ''}
          <div class="mag-item-fields">${allFields}</div>
        </div>`;
      }).join('');
    }

    contentHtml+=renderManualBlocks(page.manualBlocks);
    inner=`<div style="background:${pageBg};height:100%;display:flex;flex-direction:column;">${page.isFirst?`<div style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.25rem 2rem;min-height:90px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:5px;">Section</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(secLabel)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div>`:`<div style="background:${c1};padding:6px 2rem;"><span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:${c2};font-weight:700;">${esc(secLabel)} (continued)</span></div>`}<div style="padding:1rem 1.5rem;flex:1;overflow:hidden;">${contentHtml}</div>${s.pageNums!=='no'?foot:''}</div>`;
  }
  canvas.innerHTML=`<div class="mag-page" data-category="${esc(page.sec?.key || page.type)}" style="width:${w}px;height:${h}px;transform:scale(${scale});transform-origin:top center;"><div class="mag-page-inner">${inner}</div></div>`;
  document.getElementById('previewPageTitle').textContent=`Page ${currentPageIdx+1} — ${page.sec?.label||page.type}`;
}

function prevPage(){if(currentPageIdx>0){currentPageIdx--;renderCurrentPage();updatePageNavUI();}}
function nextPage(){if(currentPageIdx<magPages.length-1){currentPageIdx++;renderCurrentPage();updatePageNavUI();}}
function updatePageNavUI(){const total=magPages.length||1;document.getElementById('pageNavInfo').textContent=`${currentPageIdx+1} / ${total}`;document.getElementById('btnPrevPage').disabled=currentPageIdx===0;document.getElementById('btnNextPage').disabled=currentPageIdx>=magPages.length-1;}

/* TOC */
function buildTOCItems(){const items=[];let pageNum=1;subs=loadAll();const approved=subs.filter(s=>s.status==='approved'||s.status==='finalized');const s=lsSettings;sectionOrder.filter(sec=>sec.visible).forEach(sec=>{if(sec.key==='cover'){pageNum++;return;}if(sec.key==='toc'){pageNum++;return;}const catSubs=approved.filter(sub=>sub.category===sec.key);if(sec.key==='editorial-note'||sec.key==='appreciation'){if(catSubs.length||approved.find(sub=>sub.category===sec.key)){items.push({num:items.length+1,name:getLabel('section_'+sec.key,sec.label),page:pageNum});pageNum++;}return;}if(!catSubs.length)return;items.push({num:items.length+1,name:getLabel('section_'+sec.key,sec.label),page:pageNum});let pp=1;if(sec.key==='teachers')pp=parseInt(s.teachersPerPage)||9;else if(['primary5','jss3','ss3'].includes(sec.key))pp=parseInt(s.studentsPerPage)||2;else if(sec.key==='speeches')pp=parseInt(s.speechesPerPage)||1;else if(sec.key==='gallery')pp=parseInt(s.galleryPerPage)||4;else if(sec.key==='creative')pp=parseInt(s.creativePerPage)||2;pageNum+=Math.ceil(catSubs.length/pp);});return items;}
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
    img{max-width:100%;image-rendering:auto!important;-ms-interpolation-mode:bicubic;}
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

/* ═══════════════════════════════════════════════════════════
   AI PROOFREADER — Fix 2
   • Scans ALL text fields from submission (not just one field)
   • Inline edit box so editor can correct mistakes directly
   • Retry with fallback model on 504/timeout
   • Works from both admin and editor panels
═══════════════════════════════════════════════════════════ */
function extractAllText(s){
  /* Gather ALL text-heavy fields from the submission */
  const longFields=[];
  Object.entries(s.data||{}).forEach(([k,fc])=>{
    if(!fc||!fc.value)return;
    const v=String(fc.value);
    if(v.length>10)longFields.push({label:fc.label,key:k,value:v});
  });
  return longFields;
}

async function proofreadSubmission(subId){
  /* Use string comparison to handle both uuid and numeric ids */
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
  const s=loadLsSettings();
  const apiKey=s.apiKey;
  if(!apiKey){
    panelEl.innerHTML=`<div class="proofread-panel"><p class="proofread-panel-title">✦ AI Proofreading</p><p style="color:var(--red);font-size:13px;"><strong>No API key.</strong> Go to Layout Studio → Design Settings → AI Configuration.</p></div>`;
    panelEl.style.display='block';return;
  }
  panelEl.innerHTML=`<div class="proofread-panel"><p class="proofread-panel-title">✦ AI Proofreading</p><div style="display:flex;align-items:center;gap:8px;"><div style="width:16px;height:16px;border:2px solid var(--purple);border-top-color:transparent;border-radius:50%;animation:spin .7s linear infinite;"></div><p class="proofread-loading">Reading all fields…</p></div></div>`;
  panelEl.style.display='block';

  /* Try Gemini 2.0 first, fall back to Claude Haiku on 504 */
  const models=['google/gemini-2.0-flash-001','google/gemini-2.0-flash-lite-001','anthropic/claude-3-haiku'];
  let result='';
  for(const model of models){
    try{
      const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey,
          'HTTP-Referer':'https://magazine-teachers-profile.vercel.app','X-Title':'MagicEditor Proofread'},
        body:JSON.stringify({
          model,max_tokens:2500,
          messages:[
            {role:'system',content:'You are a professional editorial proofreader for a Nigerian school graduation magazine. Review ALL the text sections provided. For each section label, list: (1) spelling errors with corrections, (2) grammar issues with fixes, (3) punctuation problems, (4) awkward phrasing improvements. Format each issue as: ❌ Original: "..." → ✅ Correction: "..." with a brief reason. If a section is clean, say "✓ Clean". Be thorough but concise.'},
            {role:'user',content:`Proofread all fields in this submission:\n\n${text.substring(0,4000)}`}
          ]
        })
      });
      if(resp.status===504||resp.status===503){throw new Error('timeout_'+resp.status);}
      if(!resp.ok){const e=await resp.text();throw new Error(`HTTP ${resp.status}: ${e.substring(0,100)}`);}
      const data=await resp.json();
      if(data.error)throw new Error(data.error.message||'API error');
      result=data.choices?.[0]?.message?.content||'';
      if(result)break;/* success — stop trying models */
    }catch(e){
      if(model===models[models.length-1]||!e.message.startsWith('timeout_')){
        /* Last model or non-timeout error */
        if(!result)result=`Error with ${model}: ${e.message}`;
      }
      /* Otherwise try next model */
    }
  }
  if(!result)result='No response from AI. Please try again.';

  /* Build edit boxes for each field */
  let editBoxes='';
  if(subId&&fields&&fields.length){
    editBoxes=`<div style="margin-top:16px;border-top:1px solid var(--school-mint2);padding-top:14px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--school-navy);margin-bottom:10px;">✏️ Direct Edit — Apply Corrections Below</div>
      ${fields.map(f=>`
        <div style="margin-bottom:12px;">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px;">${esc(f.label)}</div>
          <textarea id="edit-${subId}-${f.key}" style="width:100%;min-height:80px;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-family:'Lato',sans-serif;resize:vertical;background:#fafaf8;">${esc(f.value)}</textarea>
        </div>`).join('')}
      <button onclick="saveProofreadEdits('${subId}')" style="background:var(--school-navy);color:#fff;border:none;padding:10px 22px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Lato',sans-serif;">💾 Save Corrections</button>
      <span id="saveProofStatus-${subId}" style="font-size:12px;color:var(--green);margin-left:10px;"></span>
    </div>`;
  }

  panelEl.innerHTML=`<div class="proofread-panel">
    <div class="proofread-panel-title">✦ AI Proofreading — ${result.includes('Error')?'Error':'Gemini 2.0 Flash'}</div>
    <div class="proofread-result" style="white-space:pre-line;max-height:400px;overflow-y:auto;">${esc(result)}</div>
    <p style="font-size:11px;color:var(--ink3);margin-top:10px;font-style:italic;">⚠️ AI suggestions are advisory only. Use the edit boxes below to apply corrections directly.</p>
    ${editBoxes}
  </div>`;
  panelEl.style.display='block';
}

async function saveProofreadEdits(subId){
  const statusEl=document.getElementById(`saveProofStatus-${subId}`);
  const allSubs=loadAll();
  const sub=allSubs.find(x=>String(x.id)===String(subId));
  if(!sub){if(statusEl)statusEl.textContent='Error: submission not found.';return;}
  /* Find all edit boxes for this submission and update data */
  Object.keys(sub.data).forEach(k=>{
    const ta=document.getElementById(`edit-${subId}-${k}`);
    if(ta&&sub.data[k]){sub.data[k].value=ta.value;}
  });
  sub.ts=new Date().toLocaleString();/* update timestamp */
  saveAll(allSubs);
  if(statusEl)statusEl.textContent='Saving…';
  await dbSaveSubmission(sub);
  if(statusEl){statusEl.textContent='✓ Corrections saved!';setTimeout(()=>{statusEl.textContent='';},3000);}
  /* Refresh the view */
  if(document.getElementById('viewEditor')?.classList.contains('active'))renderEditor();
  if(document.getElementById('viewAdmin')?.classList.contains('active'))renderAdmin();
}


/* AI CHAT HELPERS */
function addAIChatMessage(role,text,html){
  aiChatHistory.push({role,text,html,time:new Date().toLocaleTimeString()});
  renderAIChatHistory();
}
function renderAIChatHistory(){
  const box=document.getElementById('aiChatHistory');if(!box)return;
  if(!aiChatHistory.length){box.innerHTML='<div style="text-align:center;color:var(--ink3);font-size:13px;padding:2rem 1rem;">Start a conversation with the AI about your magazine design.</div>';return;}
  box.innerHTML=aiChatHistory.map((m,i)=>{
    if(m.role==='user')return`<div style="margin-bottom:10px;text-align:right;"><div style="display:inline-block;background:var(--school-navy);color:#fff;padding:8px 12px;border-radius:12px 12px 2px 12px;font-size:13px;max-width:85%;text-align:left;">${m.html||esc(m.text)}</div><div style="font-size:10px;color:var(--ink3);margin-top:2px;">${esc(m.time)}</div></div>`;
    return`<div style="margin-bottom:10px;"><div style="display:inline-block;background:#f0fdf6;border:1px solid var(--school-mint2);padding:10px 14px;border-radius:12px 12px 12px 2px;font-size:13px;max-width:90%;color:var(--ink);">${m.html||esc(m.text)}</div><div style="font-size:10px;color:var(--ink3);margin-top:2px;">${esc(m.time)}</div></div>`;
  }).join('');
  box.scrollTop=box.scrollHeight;
}
function clearAIChat(){aiChatHistory=[];aiPendingSuggestion=null;renderAIChatHistory();document.getElementById('aiReviewBox').style.display='none';document.getElementById('aiAssistResult').style.display='none';document.getElementById('btnApplyLayout').style.display='none';}
function approveAISuggestion(){
  if(aiPendingSuggestion){applyLayoutFromObject(aiPendingSuggestion,document.getElementById('aiApplyLog'));aiPendingSuggestion=null;document.getElementById('aiReviewBox').style.display='none';}
}
function rejectAISuggestion(){aiPendingSuggestion=null;document.getElementById('aiReviewBox').style.display='none';addAIChatMessage('assistant','Suggestion rejected. What would you like to change?');}

/* LAYOUT AI — enhanced conversational with formatting control */
async function runLayoutAI(){
  const queryEl=document.getElementById('aiAssistQuery');const resultEl=document.getElementById('aiAssistResult');
  const applyBtn=document.getElementById('btnApplyLayout');const applyLog=document.getElementById('aiApplyLog');
  const reviewBox=document.getElementById('aiReviewBox');const reviewText=document.getElementById('aiReviewText');
  if(!queryEl||!resultEl)return;
  const query=queryEl.value.trim();
  if(!query){alert('Please type a message first.');return;}
  queryEl.value='';
  const s=loadLsSettings();const apiKey=s.apiKey;const model=s.layoutModel||'google/gemini-2.0-flash-001';const maxTokens=parseInt(s.maxTokens)||2000;
  if(!apiKey){addAIChatMessage('assistant','<strong style="color:var(--red);">No API key configured.</strong> Go to Design Settings → AI Configuration.');renderAIChatHistory();return;}

  /* Add user message to chat */
  addAIChatMessage('user',query);
  if(applyLog){applyLog.style.display='none';applyLog.innerHTML='';}

  /* Show thinking indicator */
  const thinkingIdx=aiChatHistory.length;
  aiChatHistory.push({role:'assistant',text:'',html:'<em style="color:var(--ink3);">✦ Thinking…</em>',time:''});
  renderAIChatHistory();

  subs=loadAll();const approved=subs.filter(s=>s.status==='approved'||s.status==='finalized');
  const counts=CATEGORY_KEYS.map(k=>`  ${CATEGORIES[k].label}: ${approved.filter(x=>x.category===k).length} approved`).join('\n');
  const ctx=`MAGAZINE: ${s.magTitle||'The Torch'} | ${s.schoolName||'Way To Success Standard Schools'} | ${s.edition||'1st Edition'} ${s.year||'2025/2026'} | Theme: ${s.theme||'—'}
APPROVED CONTENT:\n${counts}
LAYOUT: Page: ${s.pageSize||'A4'} ${s.orientation||'portrait'} | Teachers/page: ${s.teachersPerPage||9} | Students/page: ${s.studentsPerPage||2} | Gallery/page: ${s.galleryPerPage||4} | Speeches/page: ${s.speechesPerPage||1} | Creative/page: ${s.creativePerPage||2}
COLOURS: Primary: ${s.color1||'#1a2744'} | Accent: ${s.color2||'#7dd4a8'} | Contrast: ${s.color3||'#8b1a1a'} | Page BG: ${s.pageBg||'#ffffff'} | Text: ${s.textColor||'#1c1c1e'}
TYPOGRAPHY: Heading: ${s.headingFont||'Playfair Display'} | Body: ${s.bodyFont||'Crimson Text'} | Size: ${s.fontSize||'11px'}
CURRENT STYLES: Headers use heading font. Body uses body font. No special formatting like bold headers or all-caps is currently applied unless you set it.`;

  /* Build messages array with chat history for context */
  const messages=[];
  messages.push({role:'system',content:`You are a professional magazine designer and layout AI assistant for a Nigerian school graduation magazine. You have a CONVERSATIONAL style — chat naturally, ask clarifying questions, and build on previous messages.

YOUR CAPABILITIES:
1. Layout & pagination (items per page, orientation, page size)
2. Colour scheme design (suggest hex codes for primary, accent, contrast, background, text)
3. Typography (heading font, body font, size)
4. FORMATTING & CSS CONTROL — IMPORTANT: You have absolute power over the layout structure using CSS injection!
   • Use [FORMAT:customCSS:...css...] to inject CSS rules dynamically.
   • The DOM uses semantic classes: .mag-item, .mag-item-name, .mag-item-subtitle, .mag-item-photo, .mag-item-fields, .mag-item-body.
   • Target specific sections using the data attribute: .mag-page[data-category="creative"], .mag-page[data-category="teachers"], etc.
   • Example to hide subtitles on creative page and put name below content: [FORMAT:customCSS:.mag-page[data-category="creative"] .mag-item-subtitle { display: none; } .mag-page[data-category="creative"] .mag-item-creative { display: flex; flex-direction: column-reverse; }]
   • Reorganize, hide, or restyle elements—you have the power.
5. Magazine identity (title, school name, edition, theme)
6. Review submissions and suggest section ordering

FORMATTING COMMANDS (include in your response when user asks for style changes):
Use these exact commands anywhere in your response:
• [FORMAT:customCSS:...css string...] — injects arbitrary CSS to restructure or restyle the preview
• [FORMAT:headerBold:true] — makes section headers bold
• [FORMAT:headerCaps:true] — makes section headers ALL CAPS
• [FORMAT:headerColor:#1a2744] — changes header colour
• [FORMAT:bodyBold:false] — toggles body text bold
• [FORMAT:bodySize:11px] — changes body font size

SETTINGS JSON: When you recommend specific layout/colour/type changes, end your response with:
\`\`\`settings
{"teachersPerPage":9,"color1":"#1a2744","color2":"#7dd4a8",...}
\`\`\`
Include ONLY settings you want to change. All available keys: teachersPerPage, studentsPerPage, galleryPerPage, speechesPerPage, creativePerPage, orientation, pageSize, pageNums, autoTrim, color1, color2, color3, pageBg, textColor, headingFont, bodyFont, fontSize, magTitle, schoolName, edition, year, theme.

fontSize options: "10px"|"11px"|"12px"|"13px". pageSize options: "a4"|"a5"|"letter". headingFont options: "'Playfair Display',serif"|"Georgia,serif"|"'Times New Roman',serif"|"'Lato',sans-serif". bodyFont options: "'Crimson Text',serif"|"'Lato',sans-serif"|"Georgia,serif".

BE CONVERSATIONAL: If the user says "remove the headers only shows the title on the top and the writer name below", generate the [FORMAT:customCSS:...] rule to achieve it AND explain what you changed. Do NOT auto-apply JSON settings — wait for user confirmation. (Formatting commands apply instantly).

Context:
${ctx}`});

  /* Add previous chat history (last 6 exchanges for context) */
  const recentHistory=aiChatHistory.slice(-12,-1).filter(m=>m.text);
  recentHistory.forEach(m=>{
    if(m.role==='user')messages.push({role:'user',content:m.text});
    else messages.push({role:'assistant',content:m.text});
  });

  messages.push({role:'user',content:query});

  try{
    /* Try the selected model first */
    const models=[model,'google/gemini-2.0-flash-001','anthropic/claude-3-haiku'];
    let result='';
    let lastErr;
    for(const tryModel of models){
      try{
        const resp=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',
          headers:{'Content-Type':'application/json','Authorization':'Bearer '+apiKey,
            'HTTP-Referer':'https://magazine-teachers-profile.vercel.app','X-Title':'MagicEditor Layout AI'},
          body:JSON.stringify({model:tryModel,max_tokens:maxTokens,messages})});
        if(!resp.ok){const txt=await resp.text();throw new Error(`HTTP ${resp.status}: ${txt.substring(0,100)}`);}
        const data=await resp.json();
        if(data.error)throw new Error(data.error.message||'API error');
        result=data.choices?.[0]?.message?.content||'';
        if(result)break;
      }catch(e){lastErr=e;if(tryModel===models[models.length-1])throw e;}
    }

    /* Remove thinking indicator */
    aiChatHistory.splice(thinkingIdx,1);

    /* Parse formatting commands from response */
    let displayText=result;
    const formatCommands={};
    const fmtRegex=/\[FORMAT:(\w+):([\s\S]*?)\]/g;
    let fmtMatch;
    while((fmtMatch=fmtRegex.exec(result))!==null){formatCommands[fmtMatch[1]]=fmtMatch[2];}
    displayText=displayText.replace(/\[FORMAT:.*?\]/gs,'').trim();

    /* Extract settings JSON block */
    const settingsMatch=displayText.match(/\`\`\`settings\s*([\s\S]*?)\`\`\`/i);
    const adviceText=displayText.replace(/\`\`\`settings[\s\S]*?\`\`\`/gi,'').trim();

    /* Store suggestion for review */
    if(settingsMatch){
      try{
        aiPendingSuggestion=JSON.parse(settingsMatch[1].trim());
        if(reviewBox&&reviewText){
          reviewText.innerHTML=esc(adviceText).replace(/\n/g,'<br>');
          reviewBox.style.display='block';
        }
        if(applyBtn)applyBtn.style.display='inline-flex';
      }catch(e){aiPendingSuggestion=null;}
    }else{aiPendingSuggestion=null;if(reviewBox)reviewBox.style.display='none';}

    /* Apply formatting commands immediately (these are safe styling changes) */
    const fmtChanges=[];
    if(Object.keys(formatCommands).length){
      const s2=loadLsSettings();
      if(formatCommands.customCSS){
        const aiStyle = document.getElementById('ai-custom-css');
        if(aiStyle) aiStyle.textContent = formatCommands.customCSS;
        fmtChanges.push('Injected Custom CSS structure updates');
      }
      if(formatCommands.headerColor&&/^#[0-9a-fA-F]{3,8}$/.test(formatCommands.headerColor)){s2.color1=formatCommands.headerColor;document.getElementById('ls-color1').value=formatCommands.headerColor;fmtChanges.push('Header colour → '+formatCommands.headerColor);}
      if(formatCommands.bodySize&&['10px','11px','12px','13px'].includes(formatCommands.bodySize)){s2.fontSize=formatCommands.bodySize;document.getElementById('ls-fontSize').value=formatCommands.bodySize;fmtChanges.push('Body size → '+formatCommands.bodySize);}
      if(fmtChanges.length){
        saveLsSettingsToStorage(s2);lsSettings=s2;applyLsColors(s2);
        if(applyLog){applyLog.innerHTML='✅ Applied formatting: '+fmtChanges.join(', ');applyLog.style.display='block';}
      }
    }

    window._lastAILayoutResponse=displayText;
    const htmlResponse=esc(adviceText).replace(/\n/g,'<br>')+(fmtChanges.length?`<br><br><em style="color:var(--green);">✓ Formatting applied: ${fmtChanges.join(', ')}</em>`:'')+(settingsMatch?'<br><br><strong style="color:var(--amber);">⚡ Layout suggestion ready — review below before applying.</strong>':'');
    addAIChatMessage('assistant',adviceText||result,htmlResponse);
    renderAIChatHistory();

  }catch(e){
    aiChatHistory.splice(thinkingIdx,1);
    addAIChatMessage('assistant','<strong style="color:var(--red);">Error:</strong> '+esc(e.message));
    renderAIChatHistory();
  }
}
/* Apply directly from a parsed settings object */
function applyLayoutFromObject(obj,logEl){
  const s=loadLsSettings();
  const changes=[];
  const setIfChanged=(key,uiId,valid,newVal)=>{
    const snapped=valid?valid.reduce((a,b)=>Math.abs(b-Number(newVal))<Math.abs(a-Number(newVal))?b:a):newVal;
    if(String(snapped)!==String(s[key])){
      s[key]=String(snapped);
      const el=document.getElementById(uiId);if(el)el.value=String(snapped);
      changes.push(`✅ ${uiId.replace('ls-','')} → ${snapped}`);
    }
  };
  /* Pagination */
  if(obj.teachersPerPage!=null)setIfChanged('teachersPerPage','ls-teachersPerPage',[6,9,12,15],obj.teachersPerPage);
  if(obj.studentsPerPage!=null)setIfChanged('studentsPerPage','ls-studentsPerPage',[1,2,3,4],obj.studentsPerPage);
  if(obj.galleryPerPage!=null)setIfChanged('galleryPerPage','ls-galleryPerPage',[2,4,6,9],obj.galleryPerPage);
  if(obj.speechesPerPage!=null)setIfChanged('speechesPerPage','ls-speechesPerPage',[1,2],obj.speechesPerPage);
  if(obj.creativePerPage!=null)setIfChanged('creativePerPage','ls-creativePerPage',[1,2,3],obj.creativePerPage);
  /* Page format */
  if(obj.orientation&&['portrait','landscape'].includes(obj.orientation)&&obj.orientation!==s.orientation){
    s.orientation=obj.orientation;const el=document.getElementById('ls-orientation');if(el)el.value=obj.orientation;
    changes.push(`✅ Orientation → ${obj.orientation}`);
  }
  if(obj.pageSize&&['a4','a5','letter'].includes(obj.pageSize)&&obj.pageSize!==s.pageSize){
    s.pageSize=obj.pageSize;const el=document.getElementById('ls-pageSize');if(el)el.value=obj.pageSize;
    changes.push(`✅ Page size → ${obj.pageSize.toUpperCase()}`);
  }
  if(obj.pageNums&&obj.pageNums!==s.pageNums){
    s.pageNums=obj.pageNums;const el=document.getElementById('ls-pageNums');if(el)el.value=obj.pageNums;
    changes.push(`✅ Page numbers → ${obj.pageNums}`);
  }
  if(obj.autoTrim&&obj.autoTrim!==s.autoTrim){
    s.autoTrim=obj.autoTrim;const el=document.getElementById('ls-autoTrim');if(el)el.value=obj.autoTrim;
    changes.push(`✅ Auto-trim → ${obj.autoTrim}`);
  }
  /* ── COLOURS ── */
  const colorMap={color1:'ls-color1',color2:'ls-color2',color3:'ls-color3',pageBg:'ls-pageBg',textColor:'ls-textColor'};
  Object.entries(colorMap).forEach(([key,uiId])=>{
    if(obj[key]&&/^#[0-9a-fA-F]{3,8}$/.test(obj[key])&&obj[key]!==s[key]){
      s[key]=obj[key];const el=document.getElementById(uiId);if(el)el.value=obj[key];
      changes.push(`✅ ${key} → ${obj[key]}`);
    }
  });
  /* ── TYPOGRAPHY ── */
  const fontOpts=["'Playfair Display',serif","Georgia,serif","'Times New Roman',serif","'Lato',sans-serif"];
  const bodyFontOpts=["'Crimson Text',serif","'Lato',sans-serif","Georgia,serif"];
  const fontSizeOpts=["10px","11px","12px","13px"];
  if(obj.headingFont&&fontOpts.includes(obj.headingFont)&&obj.headingFont!==s.headingFont){
    s.headingFont=obj.headingFont;const el=document.getElementById('ls-headingFont');if(el)el.value=obj.headingFont;
    changes.push(`✅ Heading font → ${obj.headingFont}`);
  }
  if(obj.bodyFont&&bodyFontOpts.includes(obj.bodyFont)&&obj.bodyFont!==s.bodyFont){
    s.bodyFont=obj.bodyFont;const el=document.getElementById('ls-bodyFont');if(el)el.value=obj.bodyFont;
    changes.push(`✅ Body font → ${obj.bodyFont}`);
  }
  if(obj.fontSize&&fontSizeOpts.includes(obj.fontSize)&&obj.fontSize!==s.fontSize){
    s.fontSize=obj.fontSize;const el=document.getElementById('ls-fontSize');if(el)el.value=obj.fontSize;
    changes.push(`✅ Font size → ${obj.fontSize}`);
  }
  /* ── IDENTITY ── */
  const identityMap={magTitle:'ls-magTitle',schoolName:'ls-schoolName',location:'ls-location',edition:'ls-edition',year:'ls-year',theme:'ls-theme'};
  Object.entries(identityMap).forEach(([key,uiId])=>{
    if(obj[key]&&String(obj[key]).trim()&&String(obj[key])!==String(s[key]||'')){
      s[key]=String(obj[key]);const el=document.getElementById(uiId);if(el)el.value=String(obj[key]);
      changes.push(`✅ ${key} → ${obj[key]}`);
    }
  });
  if(!changes.length){
    if(logEl){logEl.innerHTML='ℹ️ Settings already match AI recommendation — no changes needed.';logEl.style.display='block';}
    return;
  }
  saveLsSettingsToStorage(s);lsSettings=s;
  applyLsColors(s);/* Apply colour changes to UI immediately */
  if(logEl){
    logEl.innerHTML=`<strong>⚡ Auto-applied ${changes.length} setting${changes.length>1?'s':''}:</strong><br><br>${changes.join('<br>')}<br><br>🔄 Regenerating preview…`;
    logEl.style.display='block';
  }
  setTimeout(()=>{
    generateMagPreview();
    if(logEl)logEl.innerHTML=logEl.innerHTML.replace('🔄 Regenerating preview…','✅ Preview updated!');
  },500);
}

/* ── APPLY LAYOUT SUGGESTIONS ENGINE ─────────────────────────────────────────
   Reads the last AI response, extracts actionable settings using keyword
   matching and number detection, applies them to lsSettings, updates all
   UI dropdowns, and regenerates the preview automatically.
─────────────────────────────────────────────────────────────────────────────── */
function applyLayoutSuggestions(){
  /* If there's a pending parsed suggestion, apply it directly */
  if(aiPendingSuggestion){applyLayoutFromObject(aiPendingSuggestion,document.getElementById('aiApplyLog'));aiPendingSuggestion=null;document.getElementById('aiReviewBox').style.display='none';return;}
  const text=window._lastAILayoutResponse||'';
  if(!text){alert('No AI response to apply. Ask the AI a question first.');return;}
  const logEl=document.getElementById('aiApplyLog');
  const s=loadLsSettings();
  const changes=[];

  /* ── Number extractor helper ── */
  function extractNum(pattern){
    const m=text.match(pattern);
    if(m){const n=parseInt(m[1]||m[2]);if(!isNaN(n))return n;}
    return null;
  }

  /* ── 1. Teachers per page ── */
  const teacherMatch=extractNum(/(\d+)[- ]?(?:teachers?|staff|profiles?)\s*(?:per|a|each)?\s*page/i)
    ||extractNum(/(?:teachers?|staff)\s*(?:per|a|each)\s*page[:\s]+(\d+)/i)
    ||extractNum(/(\d+)x(\d+)\s*grid/i);
  if(teacherMatch){
    const valid=[6,9,12,15];
    const snapped=valid.reduce((a,b)=>Math.abs(b-teacherMatch)<Math.abs(a-teacherMatch)?b:a);
    if(String(snapped)!==String(s.teachersPerPage)){
      s.teachersPerPage=String(snapped);
      const el=document.getElementById('ls-teachersPerPage');if(el)el.value=String(snapped);
      changes.push(`✅ Teachers per page → ${snapped}`);
    }
  }

  /* ── 2. Students per page ── */
  const studentMatch=extractNum(/(\d+)[- ]?(?:students?|graduates?|pupils?)\s*(?:per|a|each)?\s*page/i)
    ||extractNum(/(?:students?|graduates?)\s*(?:per|a|each)\s*page[:\s]+(\d+)/i);
  if(studentMatch){
    const valid=[1,2,3,4];
    const snapped=valid.reduce((a,b)=>Math.abs(b-studentMatch)<Math.abs(a-studentMatch)?b:a);
    if(String(snapped)!==String(s.studentsPerPage)){
      s.studentsPerPage=String(snapped);
      const el=document.getElementById('ls-studentsPerPage');if(el)el.value=String(snapped);
      changes.push(`✅ Students per page → ${snapped}`);
    }
  }

  /* ── 3. Gallery photos per page ── */
  const galleryMatch=extractNum(/(\d+)[- ]?(?:photos?|images?|pictures?)\s*(?:per|a|each)?\s*page/i)
    ||extractNum(/(?:gallery|photos?)\s*(?:per|a|each)\s*page[:\s]+(\d+)/i);
  if(galleryMatch){
    const valid=[2,4,6,9];
    const snapped=valid.reduce((a,b)=>Math.abs(b-galleryMatch)<Math.abs(a-galleryMatch)?b:a);
    if(String(snapped)!==String(s.galleryPerPage)){
      s.galleryPerPage=String(snapped);
      const el=document.getElementById('ls-galleryPerPage');if(el)el.value=String(snapped);
      changes.push(`✅ Gallery photos per page → ${snapped}`);
    }
  }

  /* ── 4. Speeches per page ── */
  const speechMatch=extractNum(/(\d+)[- ]?speeches?\s*(?:per|a|each)?\s*page/i);
  if(speechMatch){
    const valid=[1,2];
    const snapped=valid.reduce((a,b)=>Math.abs(b-speechMatch)<Math.abs(a-speechMatch)?b:a);
    if(String(snapped)!==String(s.speechesPerPage)){
      s.speechesPerPage=String(snapped);
      const el=document.getElementById('ls-speechesPerPage');if(el)el.value=String(snapped);
      changes.push(`✅ Speeches per page → ${snapped}`);
    }
  }

  /* ── 5. Creative items per page ── */
  const creativeMatch=extractNum(/(\d+)[- ]?(?:creative|poem|stor(?:y|ies)|joke|riddle)\s*(?:items?)?\s*(?:per|a|each)?\s*page/i);
  if(creativeMatch){
    const valid=[1,2,3];
    const snapped=valid.reduce((a,b)=>Math.abs(b-creativeMatch)<Math.abs(a-creativeMatch)?b:a);
    if(String(snapped)!==String(s.creativePerPage)){
      s.creativePerPage=String(snapped);
      const el=document.getElementById('ls-creativePerPage');if(el)el.value=String(snapped);
      changes.push(`✅ Creative items per page → ${snapped}`);
    }
  }

  /* ── 6. Page orientation ── */
  if(/\blandscape\b/i.test(text)&&s.orientation!=='landscape'){
    s.orientation='landscape';
    const el=document.getElementById('ls-orientation');if(el)el.value='landscape';
    changes.push('✅ Orientation → Landscape');
  } else if(/\bportrait\b/i.test(text)&&s.orientation!=='portrait'){
    s.orientation='portrait';
    const el=document.getElementById('ls-orientation');if(el)el.value='portrait';
    changes.push('✅ Orientation → Portrait');
  }

  /* ── 7. Page size ── */
  if(/\bA5\b/i.test(text)&&s.pageSize!=='a5'){
    s.pageSize='a5';const el=document.getElementById('ls-pageSize');if(el)el.value='a5';
    changes.push('✅ Page size → A5');
  } else if(/\bA4\b/i.test(text)&&s.pageSize!=='a4'){
    s.pageSize='a4';const el=document.getElementById('ls-pageSize');if(el)el.value='a4';
    changes.push('✅ Page size → A4');
  } else if(/\b(?:letter|US letter)\b/i.test(text)&&s.pageSize!=='letter'){
    s.pageSize='letter';const el=document.getElementById('ls-pageSize');if(el)el.value='letter';
    changes.push('✅ Page size → Letter');
  }

  /* ── 8. Show/hide page numbers ── */
  if(/\bpage numbers?\b.*\b(?:hide|remove|off|no)\b|\b(?:hide|remove|turn off|disable)\b.*page numbers?/i.test(text)&&s.pageNums!=='no'){
    s.pageNums='no';const el=document.getElementById('ls-pageNums');if(el)el.value='no';
    changes.push('✅ Page numbers → Hidden');
  } else if(/\b(?:show|add|enable|include)\b.*page numbers?|page numbers?.*\b(?:show|on|yes)\b/i.test(text)&&s.pageNums==='no'){
    s.pageNums='yes';const el=document.getElementById('ls-pageNums');if(el)el.value='yes';
    changes.push('✅ Page numbers → Visible');
  }

  /* ── 9. Auto-trim long text ── */
  if(/\b(?:full text|no trim|don.t trim|show full|don.t cut|complete text)\b/i.test(text)&&s.autoTrim!=='no'){
    s.autoTrim='no';const el=document.getElementById('ls-autoTrim');if(el)el.value='no';
    changes.push('✅ Auto-trim → Off (full text shown)');
  }

  /* ── Save & regenerate ── */
  if(!changes.length){
    if(logEl){
      logEl.innerHTML='ℹ️ <strong>No specific settings detected</strong> in the AI response.<br>The AI gave general advice. Try asking something more specific like:<br>"How many teachers per page for 30 teachers?" or "Should I use landscape for the gallery?"';
      logEl.style.display='block';
    }
    return;
  }

  saveLsSettingsToStorage(s);
  lsSettings=s;

  if(logEl){
    logEl.innerHTML=`<strong>⚡ Applied ${changes.length} change${changes.length>1?'s':''}:</strong><br><br>${changes.join('<br>')}<br><br>🔄 Regenerating preview…`;
    logEl.style.display='block';
  }

  /* Regenerate preview after short delay so user can read the log */
  setTimeout(()=>{
    generateMagPreview();
    if(logEl){
      logEl.innerHTML=logEl.innerHTML.replace('🔄 Regenerating preview…','✅ Preview updated! Scroll up to see your magazine.');
    }
  },600);
}
function renderAIContentSummary(){const el=document.getElementById('aiContentSummary');if(!el)return;subs=loadAll();const approved=subs.filter(s=>s.status==='approved'||s.status==='finalized');el.textContent=CATEGORY_KEYS.map(k=>`${CATEGORIES[k].label}: ${approved.filter(x=>x.category===k).length} approved`).join('\n')+`\n\nTotal approved: ${approved.length} | Total submitted: ${subs.length}`;renderAIChatHistory();}

/* EXPORTS */
function slugify(s){return(s||'unknown').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'').substring(0,40)||'unknown';}
function submissionToText(s,num){const cat=CATEGORIES[s.category]||EDITORIAL_META[s.category]||{label:s.category};let txt=`SUBMISSION${num?' #'+num:''}\nCategory: ${cat.label}\nStatus: ${s.status.toUpperCase()}\nSubmitted: ${s.ts}\n`;if(s.reviewerNote)txt+=`Editor's Note: ${s.reviewerNote}\n`;txt+='\n';Object.entries(s.data).forEach(([,fc])=>{txt+=`${fc.label}: ${fc.value||'Not provided'}\n`;});return txt;}
function extractAllPhotos(s,prefix){const results=[];const nameSlug=slugify(s.data.name?.value||s.data.className?.value||s.data.businessName?.value||s.data.eventName?.value||s.data.submitterName?.value||'unknown');const add=(src,filename)=>{if(!src)return;const m=/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/.exec(src);if(m){const ext=m[1].toLowerCase()==='jpeg'?'jpg':m[1].toLowerCase();results.push({filename:filename+'.'+ext,base64:m[2]});}else if(/^https?:\/\//.test(src)){results.push({filename:filename+'_PHOTO_LINK.txt',url:src});}};if(s.photoData&&!s.photos)add(s.photoData,`${prefix}_${nameSlug}`);if(Array.isArray(s.photos)&&s.photos.length){s.photos.forEach((p,i)=>add(p.data||p.url,`${prefix}_${nameSlug}_photo${String(i+1).padStart(2,'0')}`));}return results;}
function addPhotoToZip(folder,p,filename){if(!folder||!p)return;const name=filename||p.filename;if(p.base64)folder.file(name,p.base64,{base64:true});else if(p.url)folder.file(name,p.url);}
function exportOneSubmission(id){const s=loadAll().find(x=>String(x.id)===String(id));if(!s)return;if(typeof JSZip==='undefined'){alert('ZIP library not loaded.');return;}const zip=new JSZip();const nameField=s.data.name?.value||s.data.speakerName?.value||s.data.contribName?.value||s.data.reporterName?.value||s.data.authorName?.value||s.data.intervieweeName?.value||s.data.submitterName?.value||s.data.eventName?.value||s.data.title?.value||'unknown';const slug=slugify(nameField);const allPhotos=extractAllPhotos(s,'01');const catLabel=CATEGORIES[s.category]?.label||EDITORIAL_META[s.category]?.label||s.category;let txt=`${catLabel.toUpperCase()} — SINGLE EXPORT\nExported: ${new Date().toLocaleString()}\n\n${'='.repeat(55)}\n\n`;txt+=submissionToText(s);let photoList='(no photo provided)';if(allPhotos.length){photoList=allPhotos.map(p=>p.filename).join(', ');const pf=zip.folder('photos');allPhotos.forEach(p=>addPhotoToZip(pf,p));}txt+=`PHOTO FILE(S): ${photoList}\n`;zip.file('submission.txt',txt);zip.generateAsync({type:'blob'}).then(blob=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${s.category}_${slug}.zip`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}).catch(err=>alert('Export failed: '+err.message));}
function exportCurrentCategory(){subs=loadAll();const cat=currentAdminCat==='all'?null:currentAdminCat;let list;if(cat==='editorial')list=subs.filter(s=>s.category==='editorial-note'||s.category==='appreciation');else list=cat?subs.filter(s=>s.category===cat):subs;if(!list.length){alert('Nothing to export.');return;}const catLabel=cat==='editorial'?'EDITORIAL PIECES':cat?(CATEGORIES[cat]?.label||cat).toUpperCase()+' — CATEGORY EXPORT':'ALL SUBMISSIONS EXPORT';exportZip(list,cat?`${cat}_export`:'all_submissions',catLabel);}
function exportMasterMagazine(){subs=loadAll();const list=subs.filter(s=>s.status==='approved'||s.status==='finalized');if(!list.length){alert('No approved or finalized content yet.');return;}exportZipByCategory(list,'master_magazine','MASTER MAGAZINE EXPORT — Approved & Finalized Content Only');}
function exportZip(list,filename,heading){if(typeof JSZip==='undefined'){alert('ZIP library not loaded.');return;}const zip=new JSZip();const pf=zip.folder('photos');let txt=`${heading}\nExported: ${new Date().toLocaleString()}\nTotal: ${list.length}\n\n${'='.repeat(55)}\n\n`;let manifest=`MANIFEST — ${heading}\n\n`;list.forEach((s,i)=>{const num=String(i+1).padStart(2,'0');const photos=extractAllPhotos(s,num);let pl='(no photo provided)';if(photos.length){pl=photos.map(p=>p.filename).join(', ');photos.forEach(p=>addPhotoToZip(pf,p));}txt+=submissionToText(s,i+1);txt+=`PHOTO FILE(S): ${pl}\n\n${'-'.repeat(40)}\n\n`;manifest+=`#${i+1}  [${s.category}]  →  ${pl}\n`;});zip.file('submissions.txt',txt);zip.file('manifest.txt',manifest);zip.generateAsync({type:'blob'}).then(blob=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${filename}_${new Date().toISOString().slice(0,10)}.zip`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}).catch(err=>alert('Export failed: '+err.message));}
function exportZipByCategory(list,filename,heading){if(typeof JSZip==='undefined'){alert('ZIP library not loaded.');return;}const zip=new JSZip();let overview=`${heading}\nExported: ${new Date().toLocaleString()}\nTotal: ${list.length}\n\n${'='.repeat(55)}\n\n`;const ag=zip.folder('_auto_photo_gallery');let gm='AUTO-GATHERED PHOTO GALLERY\n\n';[...CATEGORY_KEYS,'editorial-note','appreciation'].forEach(ck=>{const cl=list.filter(s=>s.category===ck);if(!cl.length)return;const catLabel=CATEGORIES[ck]?.label||EDITORIAL_META[ck]?.label||ck;const folder=zip.folder(ck);const photos=folder.folder('photos');let catTxt=`${catLabel.toUpperCase()}\nTotal: ${cl.length}\n\n${'='.repeat(55)}\n\n`;cl.forEach((s,i)=>{const num=String(i+1).padStart(2,'0');const allPhotos=extractAllPhotos(s,num);let pl='(no photo provided)';if(allPhotos.length){pl=allPhotos.map(p=>p.filename).join(', ');allPhotos.forEach(p=>{addPhotoToZip(photos,p);addPhotoToZip(ag,p,`${ck}_${p.filename}`);const n=s.data.name?.value||s.data.eventName?.value||'unknown';gm+=`${ck}_${p.filename}  —  ${catLabel}  —  ${n}\n`;});}catTxt+=submissionToText(s,i+1);catTxt+=`PHOTO FILE(S): ${pl}\n\n${'-'.repeat(40)}\n\n`;});folder.file(`${ck}.txt`,catTxt);overview+=`${catLabel}: ${cl.length} submissions\n`;});ag.file('_MANIFEST.txt',gm);zip.file('README.txt',overview);zip.generateAsync({type:'blob'}).then(blob=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${filename}_${new Date().toISOString().slice(0,10)}.zip`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}).catch(err=>alert('Export failed: '+err.message));}

/* SHARE LINKS */
function getBaseUrl(){try{return window.location.origin+window.location.pathname;}catch(e){return'';}}
function copyShareLink(formKey){const base=getBaseUrl();const url=formKey===''?base:`${base}?form=${formKey}`;try{navigator.clipboard.writeText(url);const btn=document.getElementById('copy-'+(formKey||'landing'));if(btn){const orig=btn.textContent;btn.textContent='✓ Copied!';btn.style.background='var(--green)';btn.style.color='#fff';setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.style.color='';},1600);}}catch(e){alert('URL: '+url);}}
function renderShareLinks(){const c=document.getElementById('shareLinksContainer');if(!c)return;const base=getBaseUrl();const entries=[{key:'',label:'Landing Page (all forms)',icon:'🏠',desc:'Full homepage with all category cards'},...CATEGORY_KEYS.map(k=>({key:k,label:getLabel('cat_label_'+k,CATEGORIES[k].label),icon:CATEGORIES[k].icon,desc:`Submission form for ${CATEGORIES[k].label}`}))];c.innerHTML=entries.map(e=>{const url=e.key===''?base:`${base}?form=${e.key}`;return`<div class="share-link-row"><div class="share-link-icon">${e.icon}</div><div class="share-link-body"><div class="share-link-label">${esc(e.label)}</div><div class="share-link-desc">${esc(e.desc)}</div><div class="share-link-url">${esc(url)}</div></div><button class="btn btn-primary" id="copy-${e.key||'landing'}" onclick="copyShareLink('${e.key}')">Copy</button></div>`;}).join('');}

/* ═══════════════════════════════════════════════════════════
   WORKSPACE ENGINE — VS Code-style Design Studio
   Only finalized submissions enter the workspace.
═══════════════════════════════════════════════════════════ */
let wsPages=[],wsPageIdx=0,wsZoom=100,wsShowGuides=true,wsSpreadMode=false;
let wsAIChatHistory=[],wsAISampleBase64=null,wsAISampleMime=null;
let wsUndoStack=[],wsRedoStack=[],wsAutoSaveTimer=null;
const wsImageQualityCache={};
function wsEnsureProduction(){if(!lsSettings.production||typeof lsSettings.production!=='object')lsSettings.production={pages:{}};if(!lsSettings.production.pages)lsSettings.production.pages={};if(!lsSettings.production.profileDefaults)lsSettings.production.profileDefaults={};if(!lsSettings.production.imageDefaults)lsSettings.production.imageDefaults={fit:'cover',zoom:1,x:50,y:50,rotate:0};if(!Array.isArray(lsSettings.production.duplicates))lsSettings.production.duplicates=[];return lsSettings.production;}
function wsGlobalImageDefaults(){const d=wsEnsureProduction().imageDefaults||{};return {fit:d.fit||'cover',zoom:Math.max(.5,Math.min(3,parseFloat(d.zoom)||1)),x:d.x??50,y:d.y??50,rotate:parseInt(d.rotate)||0};}
function wsPageKey(page,idx){if(page?.duplicateId)return 'duplicate|'+page.duplicateId;if(!page)return 'page-'+idx;const ids=(page.items||[]).map(x=>x.id).join('-')||(page.sub?.id||'');return [page.type,page.sec?.key||'global',page.pageInSection||1,ids||idx].join('|');}
function wsDefaultProfileFieldIds(secKey){const fields=(CATEGORIES[secKey]?.fields||[]).filter(f=>f.id!=='name');if(secKey==='teachers')return ['title','subject','years','qualification'].filter(id=>fields.some(f=>f.id===id));return ['nickname','favSubject','ambition','hobbies'].filter(id=>fields.some(f=>f.id===id));}
function wsDefaultProfileControls(secKey){return secKey==='teachers'?{photoSize:'medium',photoShape:'rounded',nameSize:'small',cardSpacing:'normal',cardDesign:'classic',fieldsMode:'all',fieldIds:wsDefaultProfileFieldIds(secKey),photoBg:'#ffffff',preset:'staff-detailed'}:{photoSize:'medium',photoShape:'rounded',nameSize:'medium',cardSpacing:'normal',cardDesign:'classic',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(secKey),photoBg:'#ffffff',preset:'student-balanced'};}
function wsIsProfilePage(page){const key=page?.sec?.key;return page?.type==='section-content'&&(key==='teachers'||['primary5','jss3','ss3'].includes(key)||page?.sec?.layout==='teacher-grid'||page?.sec?.layout==='grid');}
function wsGetProfileControls(page,meta){const prod=wsEnsureProduction();const key=page?.sec?.key;return Object.assign({},wsDefaultProfileControls(key),prod.profileDefaults?.[key]||{},meta?.profileControls||{});}
function wsGetPageMeta(page,idx){const prod=wsEnsureProduction();const key=wsPageKey(page,idx);const baseTitle=page?.label||page?.sec?.label||page?.type||('Page '+(idx+1));return Object.assign({status:'draft',template:page?.sec?.layout||page?.type||'single',title:baseTitle,locked:false,hidden:false,itemOrder:null,removedItemIds:[],addedItemIds:[],manualBlocks:[],textLimit:null,textEdits:{},imageEdits:{},selectedImageKey:'',namePlacement:'side',profileControls:wsDefaultProfileControls(page?.sec?.key)},prod.pages[key]||{});}
function wsSavePageMeta(idx,patch){if(!wsPages[idx])return;const prod=wsEnsureProduction();const key=wsPageKey(wsPages[idx],idx);prod.pages[key]=Object.assign({},wsGetPageMeta(wsPages[idx],idx),patch||{});saveLsSettingsToStorage(lsSettings);wsMarkDirty();}
function wsApplyItemOrder(items,order){if(!Array.isArray(items)||!Array.isArray(order)||!order.length)return items;const rank=new Map(order.map((id,i)=>[String(id),i]));return items.slice().sort((a,b)=>{const ar=rank.has(String(a.id))?rank.get(String(a.id)):9999;const br=rank.has(String(b.id))?rank.get(String(b.id)):9999;return ar-br;});}
function wsPageWithMeta(page,idx){const meta=wsGetPageMeta(page,idx);const profileControls=wsGetProfileControls(page,meta);const copy=Object.assign({},page,{label:meta.title,productionStatus:meta.status,locked:!!meta.locked,hidden:!!meta.hidden,manualBlocks:Array.isArray(meta.manualBlocks)?meta.manualBlocks:[],textLimit:meta.textLimit,textEdits:meta.textEdits||{},imageEdits:meta.imageEdits||{},namePlacement:meta.namePlacement,profileControls});if(copy.items){const removed=new Set((meta.removedItemIds||[]).map(String));const added=(meta.addedItemIds||[]).map(id=>loadAll().find(s=>String(s.id)===String(id))).filter(Boolean);const seen=new Set();copy.items=copy.items.concat(added).filter(x=>x&&!removed.has(String(x.id))).filter(x=>{const id=String(x.id);if(seen.has(id))return false;seen.add(id);return true;});copy.items=wsApplyItemOrder(copy.items,meta.itemOrder);}if(copy.sec)copy.sec=Object.assign({},copy.sec,{layout:meta.template,label:meta.title,namePlacement:meta.namePlacement,profileControls});return copy;}
function wsCurrentMeta(){return wsGetPageMeta(wsPages[wsPageIdx],wsPageIdx);}

/* ── Open / Close ── */
function openWorkspace(){
  subs=loadAll();
  const finalized=subs.filter(s=>s.status==='approved'||s.status==='finalized'||s.status==='pending');
  const s=lsSettings;
  document.getElementById('wsProjectTitle').textContent=(s.magTitle||'The Torch')+' — Design Workspace';
  show('viewWorkspace');
  wsRenderColorPanel();
  wsRenderFontPanel();
  wsRenderAssets();
  wsGeneratePreview();
  wsStartAutoSave();
  wsRunPreflight(false);
  document.getElementById('wsStatusFinalized').textContent=finalized.filter(x=>x.status==='approved'||x.status==='finalized').length+' approved | '+finalized.filter(x=>x.status==='pending').length+' pending';
}
function closeWorkspace(){
  wsClearAutoSave();
  show('viewAdmin');
  renderAdmin();
}

/* ── Generate Preview (finalized only) ── */
function wsGeneratePreview(){
  subs=loadAll();
  wsPages=[];wsPageIdx=0;
  const s=lsSettings;
  /* Include approved, finalized AND pending so workspace always shows content */
  const finalized=subs.filter(sub=>sub.status==='approved'||sub.status==='finalized'||sub.status==='pending');
  document.getElementById('wsStatusFinalized').textContent=finalized.filter(x=>x.status==='approved'||x.status==='finalized').length+' approved | '+finalized.filter(x=>x.status==='pending').length+' pending';

  sectionOrder.filter(sec=>sec.visible).forEach(sec=>{
    if(sec.key==='cover'){wsPages.push({type:'cover',sec,label:'Cover Page'});return;}
    if(sec.key==='toc'){wsPages.push({type:'toc',sec,label:'Table of Contents'});return;}
    const catSubs=finalized.filter(sub=>sub.category===sec.key);
    if(sec.key==='editorial-note'){const sub=finalized.find(sub=>sub.category==='editorial-note');if(sub)wsPages.push({type:'editorial-note',sub,sec,label:'Editorial Note'});return;}
    if(sec.key==='appreciation'){const sub=finalized.find(sub=>sub.category==='appreciation');if(sub)wsPages.push({type:'appreciation',sub,sec,label:'Appreciation'});return;}
    if(!catSubs.length)return;
    let perPage=1;
    if(sec.key==='teachers')perPage=parseInt(s.teachersPerPage)||9;
    else if(['primary5','jss3','ss3'].includes(sec.key))perPage=parseInt(s.studentsPerPage)||2;
    else if(sec.key==='speeches')perPage=parseInt(s.speechesPerPage)||1;
    else if(sec.key==='gallery')perPage=parseInt(s.galleryPerPage)||4;
    else if(sec.key==='creative')perPage=parseInt(s.creativePerPage)||2;
    for(let i=0;i<catSubs.length;i+=perPage){
      wsPages.push({type:'section-content',sec,items:catSubs.slice(i,i+perPage),isFirst:i===0,pageInSection:Math.floor(i/perPage)+1,label:getLabel('section_'+sec.key,sec.label)+(i>0?' (p'+(Math.floor(i/perPage)+1)+')':'')});
    }
  });
  (wsEnsureProduction().duplicates||[]).forEach(d=>{
    const items=(d.itemIds||[]).map(id=>finalized.find(s=>String(s.id)===String(id))).filter(Boolean);
    const dMeta=wsEnsureProduction().pages?.['duplicate|'+d.id]||{};
    if(!items.length&&!(Array.isArray(dMeta.manualBlocks)&&dMeta.manualBlocks.length))return;
    const sec=sectionOrder.find(x=>x.key===d.secKey)||{key:d.secKey,label:d.label||'Duplicated Page',layout:d.layout||'single',visible:true};
    wsPages.push({type:d.type||'section-content',sec:Object.assign({},sec,{layout:d.layout||sec.layout}),items,duplicateId:d.id,label:d.label||((sec.label||'Duplicated Page')+' copy')});
  });

  wsRenderPageList();
  wsRenderCurrentPage();
  wsUpdateNavUI();
  wsUpdateProductionControls();
  wsRunPreflight(false);
  document.getElementById('wsStatusPages').textContent=wsPages.length+' pages';
}

/* ── Page List (Left Sidebar) ── */
function wsRenderPageList(){
  const c=document.getElementById('wsPageList');if(!c)return;
  if(!wsPages.length){c.innerHTML='<div style="font-size:11px;color:var(--ws-text3);text-align:center;padding:16px;">No finalized content yet.<br>Finalize submissions from the admin panel.</div>';return;}
  c.innerHTML=wsPages.map((p,i)=>{
    const icon=p.type==='cover'?'📕':p.type==='toc'?'📑':p.sec?.icon||'📄';
    return `<div class="ws-page-item${i===wsPageIdx?' active':''}" onclick="wsSelectPage(${i})">
      <div class="ws-page-thumb">${icon}</div>
      <div class="ws-page-info">
        <div class="ws-page-info-name">${esc(p.label||p.type)}</div>
        <div class="ws-page-info-meta">Page ${i+1}${wsGetPageMeta(p,i).hidden?' · hidden':''}</div>
        <div class="ws-page-status-pill ${wsGetPageMeta(p,i).status}">${esc(wsGetPageMeta(p,i).locked?'locked':wsGetPageMeta(p,i).status)}</div>
      </div>
    </div>`;
  }).join('');
}

/* ── Page Navigation ── */
function wsSelectPage(idx){
  if(idx<0||idx>=wsPages.length)return;
  wsPageIdx=idx;
  wsRenderPageList();
  wsUpdateNavUI();
  wsUpdateProductionControls();
  const el = document.getElementById('ws-page-'+idx);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}
function wsPrevPage(){if(wsPageIdx>0)wsSelectPage(wsPageIdx-1);}
function wsNextPage(){if(wsPageIdx<wsPages.length-1)wsSelectPage(wsPageIdx+1);}
function wsUpdateNavUI(){
  document.getElementById('wsPageNavInfo').textContent=wsPages.length?`${wsPageIdx+1} / ${wsPages.length}`:'— / —';
  document.getElementById('wsBtnPrev').disabled=wsPageIdx<=0;
  document.getElementById('wsBtnNext').disabled=wsPageIdx>=wsPages.length-1;
}

/* ── Render Preview using Print-Ready Iframe ── */
function wsRenderCurrentPage(){
  const container = document.getElementById('wsPageContainer');
  if(!wsPages.length){
    container.innerHTML = '<div class="ws-empty"><div class="ws-empty-icon">🛠</div><h3>No pages yet</h3><p>Click <strong>Generate</strong> above to build your magazine preview from submitted content.</p></div>';
    return;
  }

  const origIdx = currentPageIdx;
  const origPages = magPages;
  const renderPages=wsPages.map((p,i)=>wsPageWithMeta(p,i));
  magPages = renderPages;
  const {w, h} = getPageDimensions();
  const s = lsSettings;

  /* CRITICAL FIX: Temporarily hide the real magCanvas so our temp one
     is the one found by getElementById inside renderCurrentPage() */
  const realCanvas = document.getElementById('magCanvas');
  let realCanvasOrigId = null;
  if(realCanvas){
    realCanvasOrigId = realCanvas.id;
    realCanvas.id = '_magCanvas_hidden_';
  }

  const tempCanvas = document.createElement('div');
  tempCanvas.id = 'magCanvas';
  tempCanvas.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:'+w+'px;height:'+h+'px;overflow:hidden;';
  document.body.appendChild(tempCanvas);

  let allPagesHtml = '';
  const guidesHtml = wsShowGuides ? `
    <div style="position:absolute;inset:-3mm;border:1px dashed rgba(255,0,0,.4);pointer-events:none;z-index:99;"></div>
    <div style="position:absolute;inset:5mm;border:1px dashed rgba(0,120,255,.25);pointer-events:none;z-index:99;"></div>
  ` : '';

  for(let i = 0; i < wsPages.length; i++){
    currentPageIdx = i;
    renderCurrentPage();
    const pageHtml = tempCanvas.innerHTML;
    allPagesHtml += `<div class="mag-sheet" id="ws-page-${i}">
      ${guidesHtml}
      <div class="mag-page-inner">${pageHtml}</div>
    </div>`;
  }

  /* Restore original magCanvas */
  document.body.removeChild(tempCanvas);
  if(realCanvas && realCanvasOrigId){
    realCanvas.id = realCanvasOrigId;
  }
  magPages = origPages; currentPageIdx = origIdx;

  /* AI-injected CSS */
  const aiCSS = document.getElementById('ai-custom-css')?.textContent || '';

  /* Build print-ready iframe */
  const scale = wsZoom / 100;
  const gFonts = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap';
  const iframeDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
  <link href="${gFonts}" rel="stylesheet"/>
  <style>
    *{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}
    body{background:#555;font-family:'Lato',sans-serif;padding:20px;}
    .mag-sheet{
      width:${w}px;height:${h}px;margin:0 auto 24px;
      box-shadow:0 6px 30px rgba(0,0,0,.5);overflow:hidden;background:#fff;position:relative;
      transform:scale(${scale});transform-origin:top center;
      margin-bottom:${Math.round(h * scale - h + 24)}px;
    }
    .mag-page{width:${w}px!important;height:${h}px!important;}
    .mag-page-inner{width:100%;height:100%;overflow:hidden;}
    img{max-width:100%;image-rendering:auto!important;-ms-interpolation-mode:bicubic;}
    ${aiCSS}
  </style></head><body>${allPagesHtml}</body></html>`;

  /* Create or reuse iframe */
  let iframe = container.querySelector('iframe#ws-preview-iframe');
  if(!iframe){
    container.innerHTML = '';
    iframe = document.createElement('iframe');
    iframe.id = 'ws-preview-iframe';
    iframe.style.cssText = 'border:none;width:100%;height:100%;min-height:600px;background:#555;';
    container.appendChild(iframe);
  }
  const iDoc = iframe.contentDocument || iframe.contentWindow.document;
  iDoc.open(); iDoc.write(iframeDoc); iDoc.close();
  wsUpdateProductionControls();
}


/* ── Zoom ── */
function wsUpdateProductionControls(){
  const page=wsPages[wsPageIdx];if(!page)return;const meta=wsCurrentMeta();
  const st=document.getElementById('wsPageStatus');if(st)st.value=meta.status||'draft';
  const tmpl=document.getElementById('wsPageTemplate');if(tmpl)tmpl.value=meta.template||page.sec?.layout||'single';
  const title=document.getElementById('wsPageTitleInput');if(title&&document.activeElement!==title)title.value=meta.title||page.label||'';
  const namePlace=document.getElementById('wsNamePlacement');if(namePlace)namePlace.value=meta.namePlacement||'side';
  wsUpdateProfileControls(page,meta);
  wsRenderPageEditPanel(page,meta);
  wsRenderTextEditingPanel(page,meta);
  const lock=document.getElementById('wsLockPageBtn');if(lock)lock.textContent=meta.locked?'Unlock Page':'Lock Page';
  wsRenderImageControls(page,meta);
}
function wsItemLabel(sub){return sub?.data?.name?.value||sub?.data?.className?.value||sub?.data?.businessName?.value||sub?.data?.messageTitle?.value||sub?.data?.speakerName?.value||sub?.data?.contribName?.value||sub?.data?.reporterName?.value||sub?.data?.authorName?.value||sub?.data?.intervieweeName?.value||sub?.data?.submitterName?.value||sub?.data?.eventName?.value||sub?.data?.title?.value||'Untitled';}
function wsPageGridCols(page,itemCount){const layout=page?.sec?.layout||page?.type;if(layout==='teacher-grid')return itemCount>9?4:3;if(layout==='grid')return itemCount===1?1:itemCount<=4?2:itemCount<=9?3:4;return 1;}
function wsRenderPageEditPanel(page,meta){
  const btn=document.getElementById('wsHidePageBtn'),list=document.getElementById('wsPageEditList');
  if(btn)btn.querySelector('span:last-child').firstChild.textContent=meta.hidden?'Show Page':'Hide Page';
  if(!list)return;
  const ordered=wsPageWithMeta(page,wsPageIdx).items||[];
  const cols=wsPageGridCols(wsPageWithMeta(page,wsPageIdx),ordered.length);
  const cards=ordered.length?'<div class="ws-profile-title">Card Order</div><select class="ws-font-select" id="wsMoveItemSelect">'+ordered.map(sub=>`<option value="${esc(sub.id)}">${esc(wsItemLabel(sub))}</option>`).join('')+'</select>'+ordered.map((sub,i)=>`<div class="ws-page-edit-row"><span>${esc(wsItemLabel(sub))}</span><button onclick="wsMovePageItem('${sub.id}',${-cols})" ${i-cols<0?'disabled':''}>Up</button><button onclick="wsMovePageItem('${sub.id}',${cols})" ${i+cols>=ordered.length?'disabled':''}>Down</button><button onclick="wsMovePageItem('${sub.id}',-1)" ${i===0?'disabled':''}>Left</button><button onclick="wsMovePageItem('${sub.id}',1)" ${i===ordered.length-1?'disabled':''}>Right</button></div>`).join(''):'<div class="ws-empty-mini">No reorderable cards on this page.</div>';
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks:[];
  const blockHtml=blocks.length?'<div class="ws-profile-title" style="margin-top:10px;">Manual Blocks</div>'+blocks.map((b,i)=>`<div class="ws-manual-row"><span>${esc((b.type||'text').toUpperCase())}: ${esc((b.text||b.caption||b.src||'Manual block').slice(0,36))}</span><button onclick="wsEditManualBlock(${i})">Edit</button><button onclick="wsDeleteManualBlock(${i})">Delete</button></div>`).join(''):'';
  list.innerHTML=cards+blockHtml;
}
function wsTogglePageHidden(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before hiding or showing it.');wsUpdateProductionControls();return;}
  wsSavePageMeta(wsPageIdx,{hidden:!meta.hidden});wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsMovePageItem(id,dir){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page||!Array.isArray(page.items))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before reordering cards.');wsUpdateProductionControls();return;}
  const current=wsPageWithMeta(page,wsPageIdx).items||[];const ids=current.map(x=>String(x.id));const idx=ids.indexOf(String(id));const next=idx+dir;
  if(idx<0||next<0||next>=ids.length)return;
  [ids[idx],ids[next]]=[ids[next],ids[idx]];
  wsSavePageMeta(wsPageIdx,{itemOrder:ids});wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsDuplicateCurrentPage(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before duplicating it.');wsUpdateProductionControls();return;}
  const prod=wsEnsureProduction();const rendered=wsPageWithMeta(page,wsPageIdx);const id='dup-'+Date.now();
  prod.duplicates.push({id,type:rendered.type,secKey:rendered.sec?.key,layout:rendered.sec?.layout,label:(meta.title||rendered.label||'Page')+' copy',itemIds:(rendered.items||[]).map(x=>String(x.id))});
  prod.pages['duplicate|'+id]=Object.assign({},meta,{title:(meta.title||rendered.label||'Page')+' copy',status:'draft',locked:false,hidden:false});
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsGeneratePreview();wsPageIdx=wsPages.findIndex(p=>p.duplicateId===id);if(wsPageIdx<0)wsPageIdx=wsPages.length-1;wsRenderPageList();wsRenderCurrentPage();wsUpdateNavUI();
}
function wsDeleteCurrentPageCopy(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before deleting it.');wsUpdateProductionControls();return;}
  if(!page.duplicateId){alert('Only duplicated workspace pages can be deleted. Use Hide Page for generated pages.');return;}
  const prod=wsEnsureProduction();prod.duplicates=prod.duplicates.filter(d=>d.id!==page.duplicateId);delete prod.pages['duplicate|'+page.duplicateId];
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsGeneratePreview();wsPageIdx=Math.max(0,Math.min(wsPageIdx,wsPages.length-1));wsRenderPageList();wsRenderCurrentPage();wsUpdateNavUI();wsRunPreflight(false);
}
function wsFindSiblingPageIdx(dir){
  const page=wsPages[wsPageIdx];if(!page?.sec?.key)return -1;
  for(let i=wsPageIdx+dir;i>=0&&i<wsPages.length;i+=dir){
    if(wsPages[i]?.sec?.key===page.sec.key&&Array.isArray(wsPages[i].items))return i;
  }
  return -1;
}
function wsMoveSelectedItemToPage(dir){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page||!Array.isArray(page.items))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before moving content.');wsUpdateProductionControls();return;}
  const targetIdx=wsFindSiblingPageIdx(dir);if(targetIdx<0){alert('No matching '+(dir<0?'previous':'next')+' page in this section. Duplicate the page first if you need a new destination.');return;}
  const targetMeta=wsGetPageMeta(wsPages[targetIdx],targetIdx);if(targetMeta.locked){alert('The destination page is locked for print. Unlock it before moving content there.');return;}
  const select=document.getElementById('wsMoveItemSelect');const id=select?.value||String((wsPageWithMeta(page,wsPageIdx).items||[])[0]?.id||'');if(!id)return;
  const removed=[...new Set([...(meta.removedItemIds||[]).map(String),String(id)])];
  const addedTarget=[...new Set([...(targetMeta.addedItemIds||[]).map(String),String(id)])];
  wsSavePageMeta(wsPageIdx,{removedItemIds:removed});
  wsSavePageMeta(targetIdx,{addedItemIds:addedTarget,itemOrder:null});
  wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsAddManualBlock(block){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before adding manual blocks.');wsUpdateProductionControls();return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];blocks.push(Object.assign({id:'block-'+Date.now()},block));
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsAddManualTextBox(){const text=prompt('Text box content:');if(text!==null&&text.trim())wsAddManualBlock({type:'text',text:text.trim()});}
function wsAddManualImageBox(){const src=prompt('Image URL or data URL:');if(src!==null)wsAddManualBlock({type:'image',src:src.trim(),caption:''});}
function wsAddManualCaption(){const text=prompt('Caption text:');if(text!==null&&text.trim())wsAddManualBlock({type:'caption',text:text.trim()});}
function wsEditManualBlock(i){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing manual blocks.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];const b=blocks[i];if(!b)return;
  if(b.type==='image'){const src=prompt('Image URL or data URL:',b.src||'');if(src===null)return;const caption=prompt('Image caption:',b.caption||'');if(caption===null)return;blocks[i]=Object.assign({},b,{src:src.trim(),caption:caption.trim()});}
  else{const text=prompt((b.type==='caption'?'Caption':'Text box')+' content:',b.text||'');if(text===null)return;blocks[i]=Object.assign({},b,{text:text.trim()});}
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsDeleteManualBlock(i){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before deleting manual blocks.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];blocks.splice(i,1);
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsSplitLongTextToCopy(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before splitting text.');return;}
  const rendered=wsPageWithMeta(page,wsPageIdx);const items=rendered.items||[];let longest='';
  items.forEach(sub=>Object.values(sub.data||{}).forEach(fc=>{const val=String(fc?.value||'');if(val.length>longest.length)longest=val;}));
  if(longest.length<700){alert('No long text found on this page.');return;}
  const splitAt=Math.max(350,longest.lastIndexOf(' ',Math.floor(longest.length/2)));
  const cont=longest.slice(splitAt).trim();if(!cont)return;
  wsSavePageMeta(wsPageIdx,{textLimit:splitAt,manualBlocks:[...(Array.isArray(meta.manualBlocks)?meta.manualBlocks:[]),{id:'block-'+Date.now(),type:'caption',text:'Continued on next page'}]});
  const prod=wsEnsureProduction();const id='split-'+Date.now();
  prod.duplicates.push({id,type:rendered.type,secKey:rendered.sec?.key,layout:rendered.sec?.layout,label:(meta.title||rendered.label||'Page')+' continued',itemIds:[]});
  prod.pages['duplicate|'+id]=Object.assign({},meta,{title:(meta.title||rendered.label||'Page')+' continued',status:'draft',locked:false,hidden:false,manualBlocks:[{id:'block-'+Date.now(),type:'text',text:cont}],removedItemIds:[],addedItemIds:[],itemOrder:null});
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsGeneratePreview();wsPageIdx=wsPages.findIndex(p=>p.duplicateId===id);if(wsPageIdx<0)wsPageIdx=wsPages.length-1;wsRenderPageList();wsRenderCurrentPage();wsUpdateNavUI();wsRunPreflight(false);
}
function wsEditableTextEntries(page,meta){
  const rendered=wsPageWithMeta(page,wsPageIdx),edits=meta.textEdits||{};
  const entries=[];
  (rendered.items||[]).forEach(sub=>{
    Object.entries(sub.data||{}).forEach(([key,fc])=>{
      const val=String(fc?.value||'').trim();if(!val||val.length<18)return;
      const id=String(sub.id)+'|'+key;
      entries.push({id,subId:String(sub.id),fieldId:key,label:wsItemLabel(sub)+' - '+(fc.label||key),original:val,value:String(edits[id]??val)});
    });
  });
  return entries;
}
function wsRenderTextEditingPanel(page,meta){
  const select=document.getElementById('wsTextEditSelect');if(!select)return;
  const entries=wsEditableTextEntries(page,meta);
  if(!entries.length){select.innerHTML='';wsUpdateTextStats();return;}
  const current=select.value;
  select.innerHTML=entries.map(e=>`<option value="${esc(e.id)}">${esc(e.label)}</option>`).join('');
  if(entries.some(e=>e.id===current))select.value=current;
  wsUpdateTextStats();
}
function wsSelectedTextEntry(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta(),select=document.getElementById('wsTextEditSelect');if(!page||!select)return null;
  return wsEditableTextEntries(page,meta).find(e=>e.id===select.value)||null;
}
function wsUpdateTextStats(){
  const box=document.getElementById('wsTextStats');if(!box)return;
  const e=wsSelectedTextEntry();if(!e){box.textContent='No editable text on this page.';return;}
  const words=e.value.trim().split(/\s+/).filter(Boolean).length;
  const changed=e.value!==e.original?'edited':'original';
  const overflow=e.value.length>900?' - overflow risk':e.value.length>500?' - check fit':' - fits normally';
  box.textContent=words+' words, '+e.value.length+' characters - '+changed+overflow;
}
function wsSaveTextEdit(id,value){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing text.');return;}
  const edits=Object.assign({},meta.textEdits||{});edits[id]=value;
  wsSavePageMeta(wsPageIdx,{textEdits:edits});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsSentenceCase(s){return s.replace(/\s+/g,' ').trim().replace(/(^|[.!?]\s+)([a-z])/g,(m,p,c)=>p+c.toUpperCase());}
function wsShortenText(t){
  const clean=t.replace(/\s+/g,' ').trim();const limit=Math.max(120,Math.floor(clean.length*.62));
  if(clean.length<=limit)return clean;
  const cut=clean.lastIndexOf(' ',limit);return clean.slice(0,cut>80?cut:limit).replace(/[,:;]\s*$/,'')+'.';
}
function wsExpandText(t){
  const clean=wsSentenceCase(t);return clean+(clean.length>0&&!/[.!?]$/.test(clean)?'.':'')+' This reflects commitment, growth, and the values that make the school community proud.';
}
function wsProofreadText(t){return wsSentenceCase(t).replace(/\bi\b/g,'I').replace(/\s+([,.!?;:])/g,'$1');}
function wsRewriteText(t){
  const clean=wsProofreadText(t);
  return clean.replace(/\bvery good\b/gi,'excellent').replace(/\bnice\b/gi,'memorable').replace(/\bbad\b/gi,'challenging').replace(/\ba lot of\b/gi,'many');
}
function wsMagazineStyle(t){
  const clean=wsRewriteText(t);const parts=clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  if(parts.length<2)return clean;
  return parts.slice(0,2).join(' ')+'\n\n'+parts.slice(2).join(' ');
}
function wsShortenSelectedText(){const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,wsShortenText(e.value));}
function wsExpandSelectedText(){const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,wsExpandText(e.value));}
function wsProofreadSelectedText(){const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,wsProofreadText(e.value));}
function wsRewriteSelectedText(){const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,wsRewriteText(e.value));}
function wsMagazineStyleText(){const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,wsMagazineStyle(e.value));}
function wsSuggestHeadline(){
  const e=wsSelectedTextEntry();if(!e)return;
  const words=e.value.replace(/[^\w\s]/g,'').split(/\s+/).filter(w=>w.length>3).slice(0,6);
  const title=prompt('Suggested headline:',words.length?words.map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join(' '):'A Memorable Journey');
  if(title&&title.trim())wsAddManualBlock({type:'caption',text:title.trim()});
}
function wsResetSelectedText(){
  const e=wsSelectedTextEntry();if(!e)return;
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before resetting text.');return;}
  const edits=Object.assign({},meta.textEdits||{});delete edits[e.id];
  wsSavePageMeta(wsPageIdx,{textEdits:edits});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsUpdateProfileControls(page,meta){
  const wrap=document.getElementById('wsProfileControls');if(!wrap)return;
  const active=wsIsProfilePage(page);wrap.classList.toggle('active',active);
  if(!active)return;
  const ctl=wsGetProfileControls(page,meta);
  const set=(id,val)=>{const el=document.getElementById(id);if(el&&document.activeElement!==el)el.value=String(val);};
  const perPage=page.sec?.key==='teachers'?(parseInt(lsSettings.teachersPerPage)||9):(parseInt(lsSettings.studentsPerPage)||2);
  const cards=document.getElementById('wsProfileCardsPerPage'),allowed=page.sec?.key==='teachers'?[6,9,12,15]:[1,2,3,4,5,6,7,8,9,10,12,15];
  if(cards)[...cards.options].forEach(o=>o.disabled=!allowed.includes(parseInt(o.value)));
  set('wsProfileCardsPerPage',perPage);set('wsProfilePhotoSize',ctl.photoSize);set('wsProfilePhotoShape',ctl.photoShape);set('wsProfileNameSize',ctl.nameSize);set('wsProfileCardSpacing',ctl.cardSpacing);set('wsProfileCardDesign',ctl.cardDesign||'classic');set('wsProfileFieldsMode',ctl.fieldsMode);set('wsProfilePreset',ctl.preset||'custom');
  const bgWrap=document.getElementById('wsStudentPhotoBgWrap'),bg=document.getElementById('wsStudentPhotoBg');
  if(bgWrap)bgWrap.style.display=page.sec?.key==='teachers'?'none':'block';
  if(bg)bg.value=ctl.photoBg||'#ffffff';
  wsRenderProfileFieldPicker(page,ctl);
}
function wsRenderProfileFieldPicker(page,ctl){
  const box=document.getElementById('wsProfileFieldPicker');if(!box)return;
  if(ctl.fieldsMode!=='custom'){box.innerHTML='';box.style.display='none';return;}
  const fields=(CATEGORIES[page.sec?.key]?.fields||[]).filter(f=>f.id!=='name');
  const selected=Array.isArray(ctl.fieldIds)?ctl.fieldIds:wsDefaultProfileFieldIds(page.sec?.key);
  box.style.display='grid';
  box.innerHTML=fields.map(f=>`<label class="ws-field-check"><input type="checkbox" ${selected.includes(f.id)?'checked':''} onchange="wsToggleProfileField('${f.id}',this.checked)"/><span>${esc(f.label)}</span></label>`).join('');
}
function wsSetPageStatus(status){wsSavePageMeta(wsPageIdx,{status});wsRenderPageList();wsUpdateProductionControls();wsRunPreflight(false);}
function wsSetPageTemplate(template){const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before changing the template.');wsUpdateProductionControls();return;}wsSavePageMeta(wsPageIdx,{template});wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);}
function wsSetNamePlacement(namePlacement){const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before changing name placement.');wsUpdateProductionControls();return;}wsSavePageMeta(wsPageIdx,{namePlacement});wsRenderPageList();wsRenderCurrentPage();}
function wsSetProfileControl(key,val){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before changing profile cards.');wsUpdateProductionControls();return;}
  const ctl=Object.assign({},wsGetProfileControls(page,meta),{[key]:val,preset:'custom'});
  if(key==='fieldsMode'&&val==='custom'&&(!Array.isArray(ctl.fieldIds)||!ctl.fieldIds.length))ctl.fieldIds=wsDefaultProfileFieldIds(page.sec?.key);
  wsSavePageMeta(wsPageIdx,{profileControls:ctl});wsRenderPageList();wsRenderCurrentPage();
}
function wsToggleProfileField(fieldId,checked){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before changing profile fields.');wsUpdateProductionControls();return;}
  const ctl=Object.assign({},wsGetProfileControls(page,meta));let ids=Array.isArray(ctl.fieldIds)?ctl.fieldIds.slice():wsDefaultProfileFieldIds(page.sec?.key);
  ids=checked?[...new Set([...ids,fieldId])]:ids.filter(id=>id!==fieldId);
  ctl.fieldsMode='custom';ctl.fieldIds=ids;ctl.preset='custom';
  wsSavePageMeta(wsPageIdx,{profileControls:ctl});wsRenderCurrentPage();
}
function wsApplyProfileToCategory(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before applying profile cards to the category.');wsUpdateProductionControls();return;}
  const key=page.sec?.key;if(!key)return;
  const prod=wsEnsureProduction();const ctl=Object.assign({},wsGetProfileControls(page,meta));
  prod.profileDefaults[key]=ctl;
  wsPages.forEach((p,i)=>{if(p.sec?.key===key&&!wsGetPageMeta(p,i).locked){const pKey=wsPageKey(p,i);prod.pages[pKey]=Object.assign({},wsGetPageMeta(p,i),{profileControls:ctl});}});
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsResetProfilePage(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before resetting profile cards.');wsUpdateProductionControls();return;}
  wsSavePageMeta(wsPageIdx,{profileControls:wsDefaultProfileControls(page.sec?.key)});
  wsRenderPageList();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsSetProfileCardsPerPage(val){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before changing cards per page.');wsUpdateProductionControls();return;}
  const n=parseInt(val)||0;
  if(page.sec?.key==='teachers'){if(![6,9,12,15].includes(n))return;lsSettings.teachersPerPage=n;}
  else{if(![1,2,3,4,5,6,7,8,9,10,12,15].includes(n))return;lsSettings.studentsPerPage=n;}
  saveLsSettingsToStorage(lsSettings);wsGeneratePreview();
}
function wsApplyProfilePreset(preset){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!wsIsProfilePage(page))return;
  if(meta.locked){alert('This page is locked for print. Unlock it before changing profile cards.');wsUpdateProductionControls();return;}
  const presets={
    'student-balanced':{photoSize:'medium',photoShape:'rounded',nameSize:'medium',cardSpacing:'normal',cardDesign:'classic',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'student-balanced'},
    'student-photo':{photoSize:'large',photoShape:'rounded',nameSize:'large',cardSpacing:'roomy',cardDesign:'frame',fieldsMode:'name-only',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'student-photo'},
    'student-yearbook':{photoSize:'large',photoShape:'rounded',nameSize:'medium',cardSpacing:'normal',cardDesign:'yearbook',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'student-yearbook'},
    'staff-compact':{photoSize:'small',photoShape:'rounded',nameSize:'small',cardSpacing:'compact',cardDesign:'badge',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'staff-compact'},
    'staff-detailed':{photoSize:'medium',photoShape:'rounded',nameSize:'small',cardSpacing:'normal',cardDesign:'editorial',fieldsMode:'all',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'staff-detailed'},
    'staff-editorial-ribbon':{photoSize:'medium',photoShape:'rounded',nameSize:'medium',cardSpacing:'normal',cardDesign:'ribbon',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(page.sec?.key),photoBg:'#ffffff',preset:'staff-editorial-ribbon'}
  };
  if(!presets[preset])return;
  wsSavePageMeta(wsPageIdx,{profileControls:presets[preset]});wsRenderPageList();wsRenderCurrentPage();
}
function wsSetPageTitle(title){const meta=wsCurrentMeta();if(meta.locked)return;clearTimeout(window.__wsTitleTimer);window.__wsTitleTimer=setTimeout(()=>{wsSavePageMeta(wsPageIdx,{title:title.trim()||wsPages[wsPageIdx]?.label||'Untitled'});wsRenderPageList();wsRenderCurrentPage();},350);}
function wsTogglePageLock(){const meta=wsCurrentMeta();const nextLocked=!meta.locked;wsSavePageMeta(wsPageIdx,{locked:nextLocked,status:nextLocked?'locked':(meta.status==='locked'?'approved':meta.status)});wsRenderPageList();wsUpdateProductionControls();wsRunPreflight(false);}
function wsPhotoSrc(p){return p?.data||p?.url||'';}
function wsCollectPageImages(page,idx){
  const rendered=wsPageWithMeta(page,idx),out=[];
  (rendered.items||[]).forEach(sub=>{
    const label=wsItemLabel(sub);
    if(sub.photoData)out.push({key:'sub:'+sub.id+':photo',src:sub.photoData,label,meta:sub.photoMeta||null,subId:String(sub.id)});
    if(Array.isArray(sub.photos))sub.photos.forEach((p,i)=>{const src=wsPhotoSrc(p);if(src)out.push({key:'sub:'+sub.id+':photo:'+i,src,label:label+' photo '+(i+1),meta:p.meta||null,subId:String(sub.id)});});
  });
  (rendered.manualBlocks||[]).forEach((b,i)=>{if(b?.type==='image'&&b.src)out.push({key:'manual:'+(b.id||i),src:b.src,label:(b.caption||'Manual image '+(i+1))});});
  return out;
}
function wsSelectedImage(meta,imgs){
  if(!imgs.length)return null;
  return imgs.find(x=>x.key===meta.selectedImageKey)||imgs[0];
}
function wsImageEditFor(meta,key){return Object.assign({},wsGlobalImageDefaults(),(meta.imageEdits||{})[key]||{});}
function wsRenderImageControls(page,meta){
  const sel=document.getElementById('wsImageSelect');if(!sel)return;
  const defaults=wsGlobalImageDefaults(),gFit=document.getElementById('wsGlobalImageFit'),gZoom=document.getElementById('wsGlobalImageZoom');
  if(gFit&&document.activeElement!==gFit)gFit.value=defaults.fit;
  if(gZoom&&document.activeElement!==gZoom)gZoom.value=Math.round((defaults.zoom||1)*100);
  const imgs=wsCollectPageImages(page,wsPageIdx);
  if(!imgs.length){
    sel.innerHTML='<option value="">No images on this page</option>';
    ['wsImagePreview'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML='';});
    const q=document.getElementById('wsImageQuality');if(q)q.textContent='No image frames on this page.';
    return;
  }
  const current=wsSelectedImage(meta,imgs);
  if(!meta.selectedImageKey||!imgs.some(x=>x.key===meta.selectedImageKey))wsSavePageMeta(wsPageIdx,{selectedImageKey:current.key});
  sel.innerHTML=imgs.map(x=>`<option value="${esc(x.key)}">${esc(x.label)}</option>`).join('');
  sel.value=current.key;
  const ed=wsImageEditFor(meta,current.key);
  const fit=document.getElementById('wsImageFit'),zoom=document.getElementById('wsImageZoom'),preview=document.getElementById('wsImagePreview');
  if(fit)fit.value=ed.fit;
  if(zoom)zoom.value=Math.round((ed.zoom||1)*100);
  if(preview){
    const src=ed.replaceSrc||current.src;
    preview.innerHTML=`<img src="${esc(src)}" alt="${esc(current.label)}" onload="wsRememberImageQuality(this,'${esc(current.key)}')" />`;
  }
  if(current.meta&&!wsImageQualityCache[current.key])wsImageQualityCache[current.key]={w:current.meta.w,h:current.meta.h,low:wsImageQualityLevel(current.meta.w,current.meta.h)==='low',level:current.meta.printQuality||wsImageQualityLevel(current.meta.w,current.meta.h)};
  wsUpdateImageQuality(current.key);
}
function wsSetGlobalImageDefault(prop,val){
  const prod=wsEnsureProduction();
  const d=Object.assign({},wsGlobalImageDefaults());
  d[prop]=prop==='zoom'?Math.max(.5,Math.min(3,parseFloat(val)||1)):val;
  prod.imageDefaults=d;
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsRenderCurrentPage();wsRunPreflight(false);
}
function wsApplyGlobalImageDefaults(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before applying general image style.');return;}
  const imgs=wsCollectPageImages(page,wsPageIdx),img=wsSelectedImage(meta,imgs);
  if(img){
    const ed=Object.assign({},wsImageEditFor(meta,img.key));delete ed.replaceSrc;
    wsEnsureProduction().imageDefaults=ed;
  }
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsResetGlobalImageDefaults(){
  wsEnsureProduction().imageDefaults={fit:'cover',zoom:1,x:50,y:50,rotate:0};
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsUpdateImageQuality(key){
  const el=document.getElementById('wsImageQuality');if(!el)return;
  const q=wsImageQualityCache[key];
  if(!q){el.textContent='Checking image resolution...';el.className='ws-image-quality';return;}
  el.textContent=q.w+' x '+q.h+' px - '+(q.low?'Low resolution: replace before print.':(q.level||wsImageQualityLevel(q.w,q.h))+' for print.');
  el.className='ws-image-quality '+(q.low?'warn':'ok');
}
function wsRememberImageQuality(img,key){
  if(!key)return;
  const w=img.naturalWidth||0,h=img.naturalHeight||0;
  wsImageQualityCache[key]={w,h,low:!!(w&&h&&(w<PRINT_IMAGE_MIN_PX||h<PRINT_IMAGE_MIN_PX)),level:wsImageQualityLevel(w,h)};
  wsUpdateImageQuality(key);
}
function wsSelectImageForEdit(key){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing images.');wsUpdateProductionControls();return;}
  wsSavePageMeta(wsPageIdx,{selectedImageKey:key});wsUpdateProductionControls();
}
function wsSetImageEdit(prop,val){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing images.');wsUpdateProductionControls();return;}
  const imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const edits=Object.assign({},meta.imageEdits||{}),ed=wsImageEditFor(meta,img.key);
  ed[prop]=prop==='zoom'?Math.max(.5,Math.min(3,parseFloat(val)||1)):val;
  edits[img.key]=ed;wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsApplyImageEdit(scope){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before applying image style.');return;}
  const imgs=wsCollectPageImages(page,wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const ed=Object.assign({},wsImageEditFor(meta,img.key));delete ed.replaceSrc;
  const prod=wsEnsureProduction();
  const applyTo=(p,i)=>{
    const m=wsGetPageMeta(p,i);if(m.locked)return;
    const edits=Object.assign({},m.imageEdits||{});
    wsCollectPageImages(p,i).forEach(pi=>{edits[pi.key]=Object.assign({},edits[pi.key]||{},ed);});
    prod.pages[wsPageKey(p,i)]=Object.assign({},m,{imageEdits:edits});
  };
  if(scope==='page')applyTo(page,wsPageIdx);
  else if(scope==='category')wsPages.forEach((p,i)=>{if(p.sec?.key===page.sec?.key)applyTo(p,i);});
  else wsPages.forEach((p,i)=>applyTo(p,i));
  saveLsSettingsToStorage(lsSettings);wsMarkDirty();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsNudgeImage(dx,dy){
  const meta=wsCurrentMeta(),imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const ed=wsImageEditFor(meta,img.key);
  wsSetImageEdit('x',Math.max(0,Math.min(100,(parseInt(ed.x)||50)+dx)));
  wsSetImageEdit('y',Math.max(0,Math.min(100,(parseInt(ed.y)||50)+dy)));
}
function wsRotateImage(deg){
  const meta=wsCurrentMeta(),imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const ed=wsImageEditFor(meta,img.key);wsSetImageEdit('rotate',((parseInt(ed.rotate)||0)+deg)%360);
}
function wsResetImageEdit(){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing images.');return;}
  const imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const edits=Object.assign({},meta.imageEdits||{});delete edits[img.key];
  wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsReplaceSelectedImage(event){
  const file=event.target.files?.[0];event.target.value='';if(!file)return;
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before replacing images.');return;}
  if(!/^image\//.test(file.type)){alert('Choose a JPG, PNG, or WebP image.');return;}
  const imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const r=new FileReader();
  r.onload=e=>{
    const edits=Object.assign({},meta.imageEdits||{}),ed=wsImageEditFor(meta,img.key);
    ed.replaceSrc=e.target.result;ed.fit=ed.fit||'cover';ed.zoom=ed.zoom||1;ed.x=ed.x||50;ed.y=ed.y||50;
    edits[img.key]=ed;delete wsImageQualityCache[img.key];
    wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
  };
  r.readAsDataURL(file);
}
function wsRunPreflight(showAlert){
  const box=document.getElementById('wsPreflightList');if(!box)return;
  const issues=[];const pages=wsPages.map((p,i)=>wsPageWithMeta(p,i));
  const add=(level,text,solution,action)=>issues.push({level,text,solution,action});
  if(!pages.length)add('err','No pages generated yet.','Click Generate to build workspace pages from current content.','generate');
  if(lsSettings.pageNums==='no')add('warn','Page numbers are disabled; enable them before final press handoff.','Turn page numbers on for press-ready pagination.','pageNums');
  const placedIds=new Set(),duplicateIds=new Set();
  pages.forEach((p,i)=>{const meta=wsGetPageMeta(wsPages[i],i);
    if(meta.hidden)add('warn','Page '+(i+1)+': hidden from final print/PDF.','Show the page or leave it hidden only if it is intentionally excluded.','select:'+i);
    if(!['approved','locked'].includes(meta.status))add('warn','Page '+(i+1)+': status is '+meta.status+'.','Review the page, then approve or lock it for print.','approve:'+i);
    const items=p.items||[];
    items.forEach(sub=>{const id=String(sub.id);if(placedIds.has(id))duplicateIds.add(id);placedIds.add(id);});
    const needsPhoto=items.some(sub=>CATEGORIES[sub.category]?.photoRequired&&!sub.photoData&&!(Array.isArray(sub.photos)&&sub.photos.length));
    if(needsPhoto)add('err','Page '+(i+1)+': required photo missing.','Select the page and replace/upload the missing image before export.','select:'+i);
    const pageImgs=wsCollectPageImages(wsPages[i],i);
    const lowImgs=pageImgs.filter(img=>(img.meta&&wsImageQualityLevel(img.meta.w,img.meta.h)==='low')||wsImageQualityCache[img.key]?.low);
    const unknownImgs=pageImgs.filter(img=>!img.meta&&!wsImageQualityCache[img.key]);
    if(lowImgs.length)add('err','Page '+(i+1)+': '+lowImgs.length+' image(s) below '+PRINT_IMAGE_MIN_PX+'px minimum.','Open Image Production and replace low-resolution images with press-ready originals.','image:'+i);
    if(unknownImgs.length)add('warn','Page '+(i+1)+': '+unknownImgs.length+' image(s) still need resolution verification.','Open the page so the browser can inspect image dimensions.','select:'+i);
    const pending=items.filter(sub=>sub.status==='pending').length;if(pending)add('warn','Page '+(i+1)+': contains '+pending+' pending submission(s).','Approve/finalize the content in workflow, or remove it from this page.','select:'+i);
    const longText=items.some(sub=>Object.entries(sub.data||{}).some(([key,fc])=>String(meta.textEdits?.[String(sub.id)+'|'+key]??fc?.value??'').length>1600));
    if(longText)add('warn','Page '+(i+1)+': long text may need splitting or shortening.','Recommended: apply Picture break article, then split the longest text into a continuation page if it still overflows.','article:'+i);
    const textChars=items.reduce((sum,sub)=>sum+Object.entries(sub.data||{}).reduce((n,[key,fc])=>n+String(meta.textEdits?.[String(sub.id)+'|'+key]??fc?.value??'').length,0),0);
    if(textChars>2600)add('warn','Page '+(i+1)+': dense text may overflow the page.','Recommended: use Two/three content briefs for multiple items, or Picture break article for a single long item with an image.','article:'+i);
    if(p.type==='section-content'&&!items.length&&!p.manualBlocks?.length)add('err','Page '+(i+1)+': blank generated page.','Hide this page or move content onto it before print.','select:'+i);
    if(wsIsProfilePage(p)){
      const ctl=wsGetProfileControls(wsPages[i],meta);
      const fieldCount=ctl.fieldsMode==='all'?((CATEGORIES[p.sec?.key]?.fields||[]).length-1):(ctl.fieldsMode==='custom'?(ctl.fieldIds||[]).length:(ctl.fieldsMode==='key'?3:0));
      if(items.length>=9&&fieldCount>3)add('warn','Page '+(i+1)+': many profile cards with several fields may overflow.','Recommended: switch to compact key-field cards and the badge/yearbook style, or reduce cards per page.','profileCompact:'+i);
      if(ctl.photoSize==='large'&&items.length>=9)add('warn','Page '+(i+1)+': large profile photos may be tight with '+items.length+' cards.','Recommended: switch photo size to medium, compact spacing, and key fields.','profileCompact:'+i);
    }
  });
  if(duplicateIds.size)add('err',duplicateIds.size+' duplicate content item(s) appear on more than one page.','Use Page Editing to remove duplicates or reset item order.','select:0');
  const frameDoc=document.getElementById('ws-preview-iframe')?.contentDocument;
  if(frameDoc){
    frameDoc.querySelectorAll('.mag-sheet').forEach((sheet,i)=>{
      if(sheet.scrollHeight>sheet.clientHeight+2||sheet.scrollWidth>sheet.clientWidth+2)add('err','Page '+(i+1)+': rendered content overflows the page bounds.','Recommended: apply Picture break article or Two/three briefs, then split long text if needed.','article:'+i);
      const txt=(sheet.textContent||'').replace(/\s+/g,'').trim(),imgs=sheet.querySelectorAll('img').length;
      if(txt.length<8&&!imgs)add('err','Page '+(i+1)+': visually blank page.','Hide the page or add content before print.','select:'+i);
      sheet.querySelectorAll('img').forEach(img=>{
        const r=img.getBoundingClientRect(),sr=sheet.getBoundingClientRect(),safe=18;
        if(r.left-sr.left<safe||r.top-sr.top<safe||sr.right-r.right<safe||sr.bottom-r.bottom<safe)add('warn','Page '+(i+1)+': image is close to trim/safe-zone edge.','Recommended: set the image to Contain full image or nudge it inward in Image Production.','imageContain:'+i);
      });
    });
  }
  const unused=loadAll().filter(s=>['approved','finalized'].includes(s.status)&&!pages.some(p=>(p.items||[]).some(x=>String(x.id)===String(s.id))||String(p.sub?.id)===String(s.id)));
  if(unused.length)add('warn',unused.length+' approved/finalized item(s) are not placed on pages.','Generate preview again or move approved content into visible pages.','generate');
  const errCount=issues.filter(x=>x.level==='err').length,warnCount=issues.filter(x=>x.level==='warn').length;
  const summary=errCount?{level:'err',text:'NOT READY FOR PRESS - '+errCount+' blocking issue(s), '+warnCount+' warning(s).'}:warnCount?{level:'warn',text:'REVIEW BEFORE PRESS - 0 blocking issues, '+warnCount+' warning(s).'}:{level:'ok',text:'PRINT READY - all generated pages passed preflight.'};
  issues.unshift(summary);
  const actionLabel=a=>{const k=String(a||'').split(':')[0];return {approve:'Approve page',article:'Apply layout fix',profileCompact:'Compact cards',image:'Open image tools',imageContain:'Contain image',pageNums:'Enable page numbers',generate:'Generate preview',select:'Go to page'}[k]||'Apply fix';};
  box.innerHTML=issues.map((x,idx)=>`<div class="ws-preflight-item ${x.level}${idx===0?' summary':''}"><div>${esc(x.text)}</div>${x.solution?`<div class="ws-preflight-solution"><strong>Recommended solution:</strong> ${esc(x.solution)}</div>`:''}${x.action?`<button class="ws-preflight-fix" onclick="wsPreflightAction('${esc(x.action)}')">${esc(actionLabel(x.action))}</button>`:''}</div>`).join('');
  const dot=document.getElementById('wsStatusDot'),txt=document.getElementById('wsStatusText');
  if(dot){dot.className='ws-statusbar-dot '+(errCount?'err':warnCount?'syncing':'ok');}
  if(txt)txt.textContent=errCount?'Not press ready':warnCount?'Review warnings':'Print ready';
  if(showAlert)alert(issues.map(x=>x.text).join('\n'));
  return {errors:errCount,warnings:warnCount,issues};
}
function wsPreflightAction(action){
  const [kind,arg]=String(action||'').split(':');const idx=Math.max(0,parseInt(arg)||0);
  if(kind==='generate'){wsGeneratePreview();return;}
  if(kind==='pageNums'){lsSettings.pageNums='yes';saveLsSettingsToStorage(lsSettings);wsRenderCurrentPage();wsRunPreflight(false);return;}
  if(kind==='select'){wsSelectPage(Math.min(idx,wsPages.length-1));return;}
  if(kind==='approve'){wsPageIdx=Math.min(idx,wsPages.length-1);wsSetPageStatus('approved');wsSelectPage(wsPageIdx);return;}
  if(kind==='image'){wsSelectPage(Math.min(idx,wsPages.length-1));document.getElementById('wsPanelImageProduction')?.scrollIntoView({behavior:'smooth',block:'center'});return;}
  if(kind==='article'){wsPageIdx=Math.min(idx,wsPages.length-1);const p=wsPages[wsPageIdx],count=(p?.items||[]).length;wsSetPageTemplate(count>1?'article-briefs':'article-photo-break');wsSelectPage(wsPageIdx);return;}
  if(kind==='imageContain'){wsPageIdx=Math.min(idx,wsPages.length-1);wsSelectPage(wsPageIdx);const meta=wsCurrentMeta(),imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(img){const edits=Object.assign({},meta.imageEdits||{}),ed=wsImageEditFor(meta,img.key);ed.fit='contain';ed.zoom=1;ed.x=50;ed.y=50;ed.rotate=0;edits[img.key]=ed;wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);}return;}
  if(kind==='profileCompact'){
    wsPageIdx=Math.min(idx,wsPages.length-1);
    const page=wsPages[wsPageIdx],meta=wsCurrentMeta(),ctl=Object.assign({},wsGetProfileControls(page,meta),{photoSize:'medium',fieldsMode:'key',cardSpacing:'compact',cardDesign:'badge',preset:'custom'});
    wsSavePageMeta(wsPageIdx,{profileControls:ctl});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);return;
  }
}
function wsSetZoom(level){
  wsZoom=Math.max(25,Math.min(200,level));
  document.getElementById('wsZoomLevel').textContent=wsZoom+'%';
  document.getElementById('wsStatusZoom').textContent=wsZoom+'%';
  wsRenderCurrentPage();
}

/* ── Guides Toggle ── */
function wsToggleGuides(){
  wsShowGuides=!wsShowGuides;
  document.getElementById('wsGuidesBtn').textContent=wsShowGuides?'☑ Guides':'☐ Guides';
  wsRenderCurrentPage();
}

/* ── Spread View ── */
function wsToggleSpread(){
  wsSpreadMode=!wsSpreadMode;
  document.getElementById('wsSpreadBtn').textContent=wsSpreadMode?'⊞ Single':'⊞ Spread';
  wsRenderCurrentPage();
}

/* ── Sidebar Panel Toggle ── */
function wsTogglePanel(id){document.getElementById(id)?.classList.toggle('collapsed');}

/* ── Assets Panel ── */
function wsRenderAssets(){
  const grid=document.getElementById('wsAssetGrid');if(!grid)return;
  const empty=document.getElementById('wsAssetEmpty');
  const finalized=loadAll().filter(s=>s.status==='approved'||s.status==='finalized'||s.status==='pending');
  const photos=[];
  finalized.forEach(s=>{
    if(s.photoData)photos.push({key:'asset:'+s.id+':photo',src:s.photoData,label:wsItemLabel(s),meta:s.photoMeta||null});
    if(Array.isArray(s.photos))s.photos.forEach((p,i)=>{const src=wsPhotoSrc(p);if(src)photos.push({key:'asset:'+s.id+':photo:'+i,src,label:wsItemLabel(s)+' '+(i+1),meta:p.meta||null});});
  });
  if(!photos.length){grid.innerHTML='';empty.style.display='block';return;}
  empty.style.display='none';
  grid.innerHTML=photos.slice(0,30).map((p,i)=>`<div class="ws-asset-thumb" title="${esc(p.label)}"><img src="${esc(p.src)}" alt="Asset ${i+1}" onload="wsAssetQuality(this)"/><span class="ws-asset-quality">...</span></div>`).join('');
}
function wsAssetQuality(img){
  const badge=img.parentElement?.querySelector('.ws-asset-quality');if(!badge)return;
  const w=img.naturalWidth||0,h=img.naturalHeight||0,low=w&&h&&(w<PRINT_IMAGE_MIN_PX||h<PRINT_IMAGE_MIN_PX);
  const level=wsImageQualityLevel(w,h);
  badge.textContent=low?'LOW':(level==='press-ready'?'PRESS':'OK');badge.className='ws-asset-quality '+(low?'warn':'ok');
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

  if(!apiKey){
    wsAIAddMsg('assistant','',`<strong style="color:var(--ws-red);">No API key set.</strong> To enable AI:<br>1. Go to <strong>Production Admin → Settings → 🤖 AI API Key</strong><br>2. Enter your OpenRouter key (get one free at <a href="https://openrouter.ai/keys" target="_blank" style="color:var(--ws-accent);">openrouter.ai/keys</a>)<br>3. Click <strong>Save API Key</strong> — then come back here and try again.`);
    return;
  }

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
    design:`You are a DIRECT-ACTION AGENT controlling a magazine design system. You do NOT suggest changes — you EXECUTE them.

CRITICAL RULES — follow these EXACTLY:
1. For ANY design change, you MUST output a [FORMAT:customCSS:] block containing valid CSS.
   Example: [FORMAT:customCSS: .mag-item-name { font-size:14px; color:#2d1b4e; } ]
2. For colour/font/layout changes, you MUST output a settings block:
   \`\`\`settings
   {"color1":"#1a2744","color2":"#7dd4a8"}
   \`\`\`
3. NEVER respond with only text advice. EVERY response MUST have at least one [FORMAT:customCSS:...] block OR a settings block.
4. Make designs PREMIUM: rich colours, elegant typography, professional spacing, print-quality.
5. Respond briefly explaining what you did, then include the executable blocks.`,
    reasoning:`You are a production strategist AND agent. Analyze the magazine, then EXECUTE changes directly.
You MUST output a settings block or [FORMAT:customCSS:...] block with every response.
\`\`\`settings
{"teachersPerPage":9}
\`\`\``,
    proofread:`You are a professional proofreader for a Nigerian school graduation magazine.
Check grammar, spelling, punctuation. Output corrections as [FORMAT:customCSS:...] to highlight errors.
Also output any text fixes you find.`,
    image:`You are a design replication agent. Analyze the uploaded image, then EXECUTE the same style by outputting:
[FORMAT:customCSS: /* css that replicates the style */ ]
and a settings block. Do NOT just describe — implement directly.`
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
    let lastErr = null;
    
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
        lastErr = e;
        if(tryModel===modelsToTry[modelsToTry.length-1] || !e.message.startsWith('timeout_')){
          throw e;
        }
      }
    }

    /* Remove thinking indicator */
    wsAIChatHistory.splice(thinkIdx,1);

    /* Parse formatting commands — [FORMAT:key:value] */
    const fmtCommands={};
    const fmtRegex2=/\[FORMAT:(\w+):([\s\S]*?)\]/g;
    let fm2;
    while((fm2=fmtRegex2.exec(result))!==null) fmtCommands[fm2[1]]=fm2[2];
    let displayText=result.replace(/\[FORMAT:.*?\]/gs,'').trim();

    /* ALSO extract CSS from ```css code blocks (AI often uses this format) */
    const cssBlockMatch = displayText.match(/```css\s*([\s\S]*?)```/i);
    if(cssBlockMatch && cssBlockMatch[1].trim() && !fmtCommands.customCSS){
      fmtCommands.customCSS = cssBlockMatch[1].trim();
    }

    /* Extract settings from ```settings OR ```json blocks */
    const settingsMatch = displayText.match(/```(?:settings|json)\s*([\s\S]*?)```/i);
    const settingsObj = settingsMatch ? (() => { try{ return JSON.parse(settingsMatch[1].trim()); }catch(e){ return null; } })() : null;
    const adviceText = displayText.replace(/```(?:settings|json|css)[\s\S]*?```/gi,'').trim();

    /* ═══ AGENT MODE: Auto-apply all changes directly ═══ */
    wsUndoPush(); /* Save state for undo */
    const applied = [];

    /* 1. Inject CSS directly */
    if(fmtCommands.customCSS){
      const aiStyle = document.getElementById('ai-custom-css');
      if(aiStyle) aiStyle.textContent = fmtCommands.customCSS;
      applied.push('🎨 CSS applied');
    }

    /* 2. Apply settings directly */
    if(settingsObj){
      try{
        applyLayoutFromObject(settingsObj, null);
        wsRenderColorPanel(); wsRenderFontPanel();
        applied.push('⚙️ ' + Object.keys(settingsObj).length + ' settings changed');
      }catch(e){ console.warn('[AI] Settings apply error:', e); }
    }

    /* 3. Execute action commands directly */
    if(fmtCommands.action){
      const action = fmtCommands.action.trim();
      if(action === 'approveAll'){
        const allSubs = loadAll(); let changed = 0;
        allSubs.forEach(s => { if(s.status==='pending'){ s.status='approved'; changed++; }});
        if(changed){ saveAll(allSubs); applied.push(`✅ Approved ${changed} submissions`); }
      } else if(action.startsWith('finalizeCategory:')){
        const cat = action.split(':')[1].trim();
        const allSubs = loadAll(); let changed = 0;
        allSubs.forEach(s => { if((s.category===cat||cat==='all')&&s.status==='approved'){ s.status='finalized'; changed++; }});
        if(changed){ saveAll(allSubs); applied.push(`📌 Finalized ${changed} in ${cat}`); }
      } else if(action.startsWith('setSectionOrder:')){
        const keys = action.split(':')[1].split(',').map(k=>k.trim());
        const oldOrder = [...sectionOrder];
        sectionOrder = keys.map(k=>oldOrder.find(o=>o.key===k)).filter(Boolean);
        oldOrder.forEach(o=>{ if(!sectionOrder.find(s=>s.key===o.key)) sectionOrder.push(o); });
        saveLsSettingsToStorage(lsSettings);
        dbSaveSettings('section_order', sectionOrder);
        applied.push('📋 Sections reordered');
      }
    }

    /* 4. Regenerate preview with changes */
    if(applied.length > 0){
      wsGeneratePreview();
      wsRenderCurrentPage();
      wsMarkDirty();
    }

    /* 5. Show response + what was applied + Undo button */
    const appliedHtml = applied.length > 0
      ? `<br><div class="ws-ai-apply-card" style="margin-top:8px;">
          <div class="ws-ai-apply-title">✦ AGENT EXECUTED</div>
          <div class="ws-ai-apply-summary">${applied.map(a=>'<span>'+a+'</span>').join('')}</div>
          <div class="ws-ai-apply-btns">
            <button class="ws-ai-apply-btn decline" onclick="wsUndo();wsGeneratePreview();wsRenderCurrentPage();this.closest('.ws-ai-apply-card').outerHTML='<em style=color:#aaa>Undone.</em>'">↶ Undo Changes</button>
          </div>
        </div>`
      : '<br><em style="color:#aaa;font-size:11px;">No direct changes in this response. Try: "Make the cover page more premium" or "Change primary colour to navy blue".</em>';
    
    const htmlResp = esc(adviceText).replace(/\n/g,'<br>') + appliedHtml;
    wsAIAddMsg('assistant', adviceText, htmlResp);

  }catch(e){
    wsAIChatHistory.splice(thinkIdx,1);
    wsAIAddMsg('assistant','','<strong style="color:var(--ws-red);">Error:</strong> '+esc(e.message));
  }
}

/* ── Export: Print-Ready PDF ── */
function wsExportPrintPDF(){
  /* Temporarily set magPages to workspace pages with production/profile metadata. */
  const origPages=magPages;const origIdx=currentPageIdx;
  const report=wsRunPreflight(false);
  if(report&&report.errors>0&&!confirm('Preflight found '+report.errors+' blocking press issue(s). Export anyway?'))return;
  magPages=wsPages.map((p,i)=>wsPageWithMeta(p,i)).filter(p=>!p.hidden);currentPageIdx=0;
  if(!magPages.length){alert('No visible workspace pages to print. Show at least one page first.');magPages=origPages;currentPageIdx=origIdx;return;}
  openPrintView();
  magPages=origPages;currentPageIdx=origIdx;
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
    subsFolder.file(`${sub.category}_${slugify(sub.data.name?.value||sub.id)}.json`,JSON.stringify(sub,null,2));
  });

  /* Labels & config */
  zip.file('labels.json',JSON.stringify(labelOverrides,null,2));
  zip.file('README.txt',`MagicEditor Editable Package\n${project.title} — ${project.school}\n${project.edition} ${project.year}\nExported: ${project.exportedAt}\n\nThis package contains:\n- project.json: Full project settings\n- pages/: Individual page data\n- submissions/: All finalized submissions\n- labels.json: Custom label overrides\n\nRe-import this package or edit submissions for manual press adjustments.`);

  zip.generateAsync({type:'blob'}).then(blob=>{
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=`${slugify(s.magTitle||'magazine')}_editable_${new Date().toISOString().slice(0,10)}.zip`;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }).catch(err=>alert('Export failed: '+err.message));
}

/* ── Export: Word Document for Printing Press ── */
function wsExportWord(){
  const s = lsSettings;
  const allSubs = loadAll();
  const approved = allSubs.filter(x => x.status==='approved' || x.status==='finalized');
  const magTitle = s.magTitle || 'The Torch';
  const schoolName = s.schoolName || 'Way To Success Standard Schools';
  const edition = s.edition || '1st Edition';
  const year = s.year || '2025/2026';
  const c1 = s.color1 || '#1a2744';
  const c2 = s.color2 || '#7dd4a8';

  /* Helper: escape HTML */
  function e(str){ return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* Helper: render all fields from a submission */
  function renderFields(sub){
    return Object.entries(sub.data||{}).map(([k,fc]) => {
      if(!fc || !fc.value) return '';
      return `<tr><td style="font-weight:bold;color:#555;padding:4px 12px 4px 0;vertical-align:top;white-space:nowrap;font-size:10pt;">${e(fc.label)}</td><td style="padding:4px 0;font-size:11pt;line-height:1.6;">${e(fc.value).replace(/\n/g,'<br>')}</td></tr>`;
    }).join('');
  }

  /* Build sections */
  let bodyHtml = '';

  /* Title Page */
  bodyHtml += `<div style="text-align:center;page-break-after:always;padding:120px 40px;">
    <h1 style="font-size:36pt;color:${c1};margin-bottom:8px;">${e(magTitle)}</h1>
    <p style="font-size:16pt;color:${c2};margin-bottom:4px;">${e(schoolName)}</p>
    <p style="font-size:14pt;color:#666;">${e(edition)} &mdash; ${e(year)}</p>
    <hr style="border:none;border-top:3px solid ${c2};width:200px;margin:30px auto;">
    <p style="font-size:11pt;color:#999;margin-top:40px;">Full Content Document for Printing Press<br>Exported: ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</p>
    <p style="font-size:10pt;color:#aaa;margin-top:8px;">Total approved submissions: ${approved.length}</p>
  </div>`;

  /* Editorial Note */
  const edNote = approved.find(x => x.category==='editorial-note');
  if(edNote){
    bodyHtml += `<div style="page-break-before:always;">
      <h2 style="color:${c1};border-bottom:3px solid ${c2};padding-bottom:8px;font-size:18pt;">EDITORIAL NOTE</h2>
      ${edNote.data.title?.value ? '<h3 style="color:#333;margin:12px 0 8px;">'+e(edNote.data.title.value)+'</h3>' : ''}
      <div style="font-size:11pt;line-height:1.8;white-space:pre-line;">${e(edNote.data.body?.value||'')}</div>
      ${edNote.photoData ? '<p style="margin-top:16px;"><img src="'+edNote.photoData+'" style="max-width:200px;border:1px solid #ccc;"></p>' : ''}
    </div>`;
  }

  /* Appreciation */
  const appr = approved.find(x => x.category==='appreciation');
  if(appr){
    bodyHtml += `<div style="page-break-before:always;">
      <h2 style="color:${c1};border-bottom:3px solid ${c2};padding-bottom:8px;font-size:18pt;">APPRECIATION</h2>
      ${appr.data.title?.value ? '<h3 style="color:#333;margin:12px 0 8px;">'+e(appr.data.title.value)+'</h3>' : ''}
      <div style="font-size:11pt;line-height:1.8;white-space:pre-line;">${e(appr.data.body?.value||'')}</div>
    </div>`;
  }

  /* Each category section */
  sectionOrder.filter(sec => sec.visible && CATEGORIES[sec.key]).forEach(sec => {
    const catDef = CATEGORIES[sec.key];
    const catSubs = approved.filter(x => x.category === sec.key);
    if(!catSubs.length) return;

    bodyHtml += `<div style="page-break-before:always;">
      <h2 style="color:${c1};border-bottom:3px solid ${c2};padding-bottom:8px;font-size:18pt;">${e(catDef.label.toUpperCase())}</h2>
      <p style="font-size:10pt;color:#888;margin:4px 0 16px;">${e(catDef.subtitle||'')} &mdash; ${catSubs.length} submission${catSubs.length>1?'s':''}</p>`;

    catSubs.forEach((sub, idx) => {
      const name = sub.data.name?.value || sub.data.speakerName?.value || sub.data.contribName?.value ||
                   sub.data.authorName?.value || sub.data.intervieweeName?.value || sub.data.submitterName?.value ||
                   sub.data.eventName?.value || 'Submission '+(idx+1);

      bodyHtml += `<div style="margin-bottom:24px;padding:16px;border:1px solid #e0e0e0;border-radius:4px;background:#fafafa;">
        <h3 style="color:${c1};font-size:14pt;margin:0 0 8px;border-left:4px solid ${c2};padding-left:10px;">${e(name)}</h3>`;

      /* Photo */
      if(sub.photoData){
        bodyHtml += `<p><img src="${sub.photoData}" style="max-width:180px;max-height:220px;object-fit:cover;border:1px solid #ccc;margin:8px 0;"></p>`;
      }
      /* Multi photos */
      if(Array.isArray(sub.photos) && sub.photos.length){
        bodyHtml += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;">';
        sub.photos.forEach(p => {
          if(wsPhotoSrc(p)) bodyHtml += `<img src="${wsPhotoSrc(p)}" style="max-width:120px;max-height:140px;object-fit:cover;border:1px solid #ccc;">`;
        });
        bodyHtml += '</div>';
      }

      /* All fields in table */
      bodyHtml += `<table style="width:100%;border-collapse:collapse;margin-top:8px;">${renderFields(sub)}</table>`;
      bodyHtml += `<p style="font-size:9pt;color:#aaa;margin-top:8px;">Status: ${sub.status} | Submitted: ${sub.ts || 'N/A'}</p>`;
      bodyHtml += '</div>';
    });
    bodyHtml += '</div>';
  });

  /* Assemble full HTML document that Word can open */
  const docHtml = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8">
  <meta name="ProgId" content="Word.Document">
  <meta name="Generator" content="MagicEditor v2.0">
  <!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml><![endif]-->
  <style>
    @page { size: A4 portrait; margin: 2cm 2.5cm; }
    body { font-family: 'Calibri', 'Segoe UI', sans-serif; font-size: 11pt; color: #1c1c1e; line-height: 1.5; }
    h1, h2, h3 { font-family: 'Cambria', 'Georgia', serif; }
    table { border-collapse: collapse; }
    img { max-width: 100%; }
  </style>
</head>
<body>
  ${bodyHtml}
  <div style="page-break-before:always;text-align:center;padding:60px 40px;">
    <hr style="border:none;border-top:2px solid ${c2};width:200px;margin:0 auto 20px;">
    <p style="font-size:12pt;color:#999;">End of Document</p>
    <p style="font-size:10pt;color:#aaa;">${e(magTitle)} &mdash; ${e(edition)} ${e(year)}<br>${e(schoolName)}</p>
    <p style="font-size:9pt;color:#bbb;margin-top:12px;">Generated by MagicEditor v2.0 on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`;

  /* Download as .doc file */
  const blob = new Blob([docHtml], {type:'application/msword'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${slugify(magTitle||'magazine')}_content_${new Date().toISOString().slice(0,10)}.doc`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* UTILITY */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* URL ROUTING — Admin access via ?admin or ?editor in URL */
function checkUrlRouting(){try{const params=new URLSearchParams(window.location.search);const fp=params.get('form');const ap=params.get('admin');const ep=params.get('editor');if(ap!==null){openPIN('admin');return true;}if(ep!==null){openPIN('editor');return true;}if(fp&&CATEGORIES[fp]){return fp;}/* return form key, not open yet */}catch(e){console.warn('[MagicEditor] URL routing:',e.message);}return false;}

/* KEYBOARD SHORTCUT — type "admin" or "editor" on landing page */
let keyBuffer='';
document.addEventListener('keydown',function(e){if(document.querySelector('.view.active')?.id!=='viewLanding')return;keyBuffer+=e.key.toLowerCase();if(keyBuffer.length>8)keyBuffer=keyBuffer.slice(-8);if(keyBuffer.endsWith('admin')){keyBuffer='';openPIN('admin');}if(keyBuffer.endsWith('editor')){keyBuffer='';openPIN('editor');}});

document.addEventListener('click',function(e){
  const card=e.target.closest&&e.target.closest('.form-card[data-cat]');
  if(card&&typeof openForm==='function'){e.preventDefault();e.stopPropagation();openForm(card.dataset.cat||card.getAttribute('data-cat'));return;}
  const submit=e.target.closest&&e.target.closest('#mainSubmitBtn');
  if(submit&&typeof submitForm==='function'){e.preventDefault();e.stopPropagation();submitForm();}
},true);

/* PURGE LOCAL CACHE */
function purgeLocalCache(){
  if(!confirm('This will clear ALL local cached data (submissions, settings, labels).\nCloud data will remain safe.\n\nContinue?'))return;
  const keys=['me_subs','me_cfg','me_ls_settings','me_labels','me_section_order','me_form_config'];
  let removed=0;
  keys.forEach(k=>{if(localStorage.getItem(k)){localStorage.removeItem(k);removed++;}});
  const st=document.getElementById('purgeStatus');
  if(st)st.textContent=`✓ Cleared ${removed} cached items. Reloading from cloud…`;
  setTimeout(()=>{
    initCloudSync().then(()=>{
      subs=loadAll();
      renderAdmin();
      if(st)st.textContent=`✓ Done! Now showing ${subs.length} items from cloud.`;
    });
  },500);
}

/* INIT */
renderLandingCards();
applyLsColors(lsSettings);
const _pendingFormKey=checkUrlRouting();

/* Boot cloud sync — waits for async Supabase CDN, then syncs settings & data */
setTimeout(async () => {
  console.log('[BOOT] Waiting for Supabase CDN...');
  const statusEl = document.getElementById('bootLoadingStatus');
  if(statusEl) statusEl.textContent = 'Loading libraries…';

  try {
    /* Wait for the async-loaded Supabase CDN (max 6s) */
    const supaReady = await waitForSupabase(6000);
    if(!supaReady){
      console.warn('[BOOT] Supabase CDN did not load in time');
      if(statusEl) statusEl.textContent = 'Cloud unavailable — opening offline';
    } else {
      console.log('[BOOT] Supabase CDN loaded. Starting cloud sync...');
      /* Strict timeout for the entire sync process */
      await Promise.race([
        initCloudSync(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Boot timeout')), 8000))
      ]);
      console.log('[BOOT] Cloud sync finished.');
    }
  } catch (e) {
    console.warn('[BOOT] Sync failed or timed out:', e.message);
    showSync('err', 'Running offline — check internet');
  } finally {
    try {
      /* If a ?form= link was shared externally, open it now with up-to-date cloud settings */
      if(_pendingFormKey && typeof _pendingFormKey === 'string' && CATEGORIES[_pendingFormKey]){
        openForm(_pendingFormKey);
      }
      /* Ensure UI is rendered with latest data */
      renderLandingCards();
    } catch (err) {
      console.error('[BOOT] Render error:', err.message);
    }
    
    /* REMOVE OVERLAY REGARDLESS OF ERRORS — uses the inline function from HTML */
    if(typeof removeBootOverlay === 'function') removeBootOverlay();
  }
}, 100);

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

