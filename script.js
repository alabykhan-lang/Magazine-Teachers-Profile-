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
let subs=[];
let lsSettings=loadLsSettingsFromStorage();
let bulkPhotos=[];
let sectionOrder=loadSectionOrder();
let formConfig=loadFormConfig();

function loadLsSettingsFromStorage(){
  try{
    const s=JSON.parse(localStorage.getItem('me_ls_settings')||'null');
    if(s&&typeof s==='object')return s;
  }catch(e){}
  return {magTitle:'The Torch',schoolName:'Way To Success Standard Schools',edition:'1st Edition',year:'2025/2026',color1:'#1a2744',color2:'#7dd4a8',color3:'#8b1a1a',pageSize:'a4',orientation:'portrait',pageNums:'yes'};
}

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

    showSync('ok','✓ Cloud synced — '+mapped.length+' submissions');
    return mapped;
  }catch(e){
    console.warn('[DB] Cloud load failed:',e.message);
    showSync('err','⚠ Cloud unreachable — cannot load data');
    return subs || [];
  }
}

async function dbSaveSubmission(sub){
  /* Optimistic memory update */
  const idx=subs.findIndex(s=>String(s.id)===String(sub.id));
  if(idx>=0)subs[idx]=sub;else subs.push(sub);
  
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
  if(s){s.status=status;s.reviewerNote=reviewerNote||'';s.reviewedAt=reviewedAt||null;}
  
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
function loadAll(){return subs;}

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
  subs = list;
  /* Fire-and-forget bulk upsert */
  dbSaveAllToCloud(list);
}

/* CONFIG */
function loadCfg(){return{adminPin:'1234',editorPin:'5678'};}
function saveCfg(n){cfg=n;dbSaveSettings('cfg',n);}
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
  if(sectionOrder){
    s.customCategories.forEach(c=>{
      if(!sectionOrder.find(so=>so.key===c.id)){
        sectionOrder.push({key:c.id,label:c.label,icon:c.icon,editable:true,visible:true,layout:'single'});
      }
    });
  }
}

/* SECTION ORDER */
const DEFAULT_SECTION_ORDER=[
  {key:'cover',label:'Front Cover',icon:'📔',editable:false,visible:true,layout:'cover'},
  {key:'toc',label:'Table of Contents',icon:'📑',editable:false,visible:true,layout:'toc'},
  {key:'editorial-note',label:'Editorial Note',icon:'📜',editable:true,visible:true,layout:'single'},
  {key:'speeches',label:'Speeches & Addresses',icon:'🎤',editable:true,visible:true,layout:'single'},
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
let currentFormCategory=null,photoFile=null,photoDataURL=null,photoFilesMulti=[],photoDataURLsMulti=[];
let pinBuf='',pinMode=null,currentAdminCat='all',currentEditorCat='pending';
let reviewingId=null,reviewingDecision=null,currentLsTab='preview';
let magPages=[],currentPageIdx=0,renamingKey=null,dragSrcIdx=null;
let currentCustCat=null,editingCustomFieldId=null;
/* AI Chat history for conversational layout assistant */
let aiChatHistory=[];
let aiPendingSuggestion=null;

/* VIEW */
function show(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function goLanding(){show('viewLanding');currentFormCategory=null;resetFormState();renderLandingCards();}

/* LANDING CARDS */
function renderLandingCards(){
  const grid=document.getElementById('formGrid');
  const h=document.getElementById('landingHeading');if(h)h.textContent=getLabel('landing_heading','Choose a content category');
  const DESCS={teachers:'For teaching staff. Share your journey, subjects, and message to the graduating class.',primary5:'For Primary 5 pupils moving on. Tell the world who you are.',jss3:'For Junior Secondary 3 students finishing this phase.',ss3:'For the main graduating class. Your legacy, your ambitions, your message.',speeches:'Proprietor, Senior Boy, guest speakers — formal addresses for the magazine.',creative:'Poems, short stories, jokes, riddles — creative writing from across the school.',events:'Sports days, excursions, competitions, achievements — the year\'s highlights.',academic:'Articles, subject features, research write-ups, and educational content.',interviews:'Q&A with old students, guest speakers, and notable voices.',motivational:'Inspirational messages and wisdom for the graduating class.',gallery:'Submit standalone photos with captions for the gallery section.'};
  const STRIPES={teachers:'stripe-gold',primary5:'stripe-green',jss3:'stripe-green',ss3:'stripe-green',speeches:'stripe-blue',creative:'stripe-purple',events:'stripe-amber',academic:'stripe-blue',interviews:'stripe-mint',motivational:'stripe-purple',gallery:'stripe-gold'};
  grid.innerHTML=CATEGORY_KEYS.map(k=>{const cat=CATEGORIES[k];const lbl=getLabel('cat_label_'+k,cat.label);return`<div class="form-card" onclick="openForm('${k}')"><span class="form-card-stripe ${STRIPES[k]||'stripe-blue'}"></span><span class="form-card-icon">${cat.icon}</span><h3>${esc(lbl)}</h3><p>${esc(getLabel('cat_desc_'+k,DESCS[k]||''))}</p></div>`;}).join('');
}

/* FORM BUILDING */
function openForm(k){currentFormCategory=k;resetFormState();const cat=CATEGORIES[k];document.getElementById('formTag').textContent=getLabel('cat_tag_'+k,cat.tag);document.getElementById('formTitle').textContent=getLabel('cat_form_title_'+k,cat.title);document.getElementById('formSubtitle').textContent=getLabel('cat_form_subtitle_'+k,cat.subtitle);document.getElementById('successWrap').style.display='none';document.getElementById('formContainer').style.display='block';buildForm(k);show('viewForm');}
function resetFormState(){photoFile=null;photoDataURL=null;photoFilesMulti=[];photoDataURLsMulti=[];}
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
    h+=`<div class="f-card"><div class="f-card-title">Event Photos (up to ${max})</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInputMulti').click()"><input type="file" id="photoInputMulti" accept=".jpg,.jpeg,.png,.webp" multiple onchange="handlePhotoMulti(event,${max})"/><div id="photoPlaceholderMulti"><span class="photo-drop-icon">📸</span><h3>Upload event photos <span class="req">*</span></h3><p>Tap to choose 1–${max} photos</p><span class="photo-pill">Action shots · Group photos</span></div></div><div id="multiPhotoGrid" class="multi-photo-grid"></div><div id="multiPhotoCount" class="multi-photo-count" style="display:none;">0 of ${max}</div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> min 600×600px, JPG/PNG, max 5MB each.</p></div></div>`;
  } else if(cat.photoRequired){
    h+=`<div class="f-card"><div class="f-card-title">Profile photo</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave()" ondrop="dropPhoto(event)"><input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/><div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>Upload your profile photo <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">Passport-style · Clear face · Plain background</span></div><div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><div class="photo-dims" id="photoDims"></div><button class="photo-change" onclick="resetPhoto(event)">Change photo</button></div></div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> minimum 600×600 pixels, JPG or PNG, up to 5 MB.</p></div></div>`;
  }
  /* Submit button — not shown for gallery (bulk has own button) */
  h+=`<button class="submit-btn" onclick="submitForm()" id="mainSubmitBtn">Submit</button>`;
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
  if(file.size>15*1024*1024){err.textContent='File too large. Max 15 MB.';err.style.display='block';return;}
  const img=new Image(),url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<600||img.height<600){err.textContent='Image too small. Min 600×600 px.';err.style.display='block';URL.revokeObjectURL(url);return;}
    photoFile=file;const r=new FileReader();
    r.onload=ev=>{photoDataURL=ev.target.result;document.getElementById('photoPreview').src=photoDataURL;document.getElementById('photoFilename').textContent=file.name;document.getElementById('photoDims').textContent=`${img.width}×${img.height}px · ${(file.size/1024).toFixed(0)} KB`;document.getElementById('photoPlaceholder').style.display='none';document.getElementById('photoPreviewWrap').style.display='flex';document.getElementById('photoDrop').classList.add('uploaded');};
    r.readAsDataURL(file);URL.revokeObjectURL(url);
  };img.src=url;
}
function resetPhoto(e){e.stopPropagation();photoFile=null;photoDataURL=null;document.getElementById('photoInput').value='';document.getElementById('photoPreview').src='';document.getElementById('photoPlaceholder').style.display='block';document.getElementById('photoPreviewWrap').style.display='none';document.getElementById('photoDrop').classList.remove('uploaded');}
function handlePhotoMulti(event,max){const files=Array.from(event.target.files||[]);if(!files.length)return;const err=document.getElementById('photoErrMsg');err.style.display='none';const rem=max-photoFilesMulti.length;if(rem<=0){err.textContent=`Maximum ${max} photos reached.`;err.style.display='block';event.target.value='';return;}const toAdd=files.slice(0,rem);if(files.length>rem){err.textContent=`Only ${rem} more can be added.`;err.style.display='block';}toAdd.forEach(f=>processPhotoForMulti(f,max));event.target.value='';}
function processPhotoForMulti(file,max){const err=document.getElementById('photoErrMsg');const ext=file.name.split('.').pop().toLowerCase();if(!['jpg','jpeg','png','webp'].includes(ext)){err.textContent=`Skipped "${file.name}": invalid format.`;err.style.display='block';return;}if(file.size>15*1024*1024){err.textContent=`Skipped "${file.name}": too large (max 15 MB).`;err.style.display='block';return;}const img=new Image();const url=URL.createObjectURL(file);img.onload=function(){if(img.width<600||img.height<600){err.textContent=`Skipped "${file.name}": too small.`;err.style.display='block';URL.revokeObjectURL(url);return;}const r=new FileReader();r.onload=ev=>{photoFilesMulti.push(file);photoDataURLsMulti.push(ev.target.result);renderMultiPhotoGrid(max);};r.readAsDataURL(file);URL.revokeObjectURL(url);};img.onerror=()=>{err.textContent=`Skipped "${file.name}".`;err.style.display='block';URL.revokeObjectURL(url);};img.src=url;}
function renderMultiPhotoGrid(max){const grid=document.getElementById('multiPhotoGrid');const ph=document.getElementById('photoPlaceholderMulti');const ctr=document.getElementById('multiPhotoCount');if(!grid)return;if(!photoDataURLsMulti.length){grid.innerHTML='';if(ph)ph.style.display='block';if(ctr)ctr.style.display='none';return;}if(ph)ph.style.display='none';grid.innerHTML=photoDataURLsMulti.map((url,i)=>`<div class="multi-photo-thumb"><img src="${url}" alt="Photo ${i+1}"/><button class="multi-photo-remove" type="button" onclick="removeMultiPhoto(${i},${max})">×</button></div>`).join('');if(ctr){ctr.style.display='inline-block';ctr.textContent=`${photoDataURLsMulti.length} of ${max} photos selected`;ctr.classList.toggle('full',photoDataURLsMulti.length>=max);}}
function removeMultiPhoto(i,max){photoFilesMulti.splice(i,1);photoDataURLsMulti.splice(i,1);renderMultiPhotoGrid(max);}

/* SUBMIT */
async function submitForm(){
  const cat=CATEGORIES[currentFormCategory];let valid=true;const data={};
  getEffectiveFields(currentFormCategory).forEach(f=>{const el=document.getElementById('ff-'+f.id);const w=document.getElementById('fw-'+f.id);if(!el)return;const val=f.type==='checkbox'?el.checked?'Yes':'No':(el.value||'').trim();data[f.id]={label:f.label,value:val,type:f.type};if(f.required&&f.type!=='checkbox'&&!val){if(w)w.classList.add('has-error');valid=false;}else if(w)w.classList.remove('has-error');});
  if(currentFormCategory==='gallery'){
    const onBulk=document.getElementById('gpane-bulk')?.classList.contains('active');
    if(!onBulk&&cat.photoRequired&&!photoDataURL){const e=document.getElementById('photoErrMsg');if(e){e.textContent='A photo is required.';e.style.display='block';}valid=false;}
    if(onBulk){submitBulkGallery();return;}
  } else if(cat.photoRequired&&cat.photoMulti){
    if(!photoDataURLsMulti.length){const e=document.getElementById('photoErrMsg');if(e){e.textContent='At least one event photo is required.';e.style.display='block';}valid=false;}
  } else if(cat.photoRequired&&!photoDataURL){
    const e=document.getElementById('photoErrMsg');if(e){e.textContent='A profile photo is required.';e.style.display='block';}valid=false;
  }
  if(!valid){const fe=document.querySelector('.has-error')||document.getElementById('photoErrMsg');if(fe)fe.scrollIntoView({behavior:'smooth',block:'center'});return;}

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
        finalPhotos.push({url:url,name:photoFilesMulti[i]?.name||`photo_${i+1}.jpg`});
      }catch(e){
        finalPhotos.push({data:photoDataURLsMulti[i],name:photoFilesMulti[i]?.name||`photo_${i+1}.jpg`});
      }
    }
  }
  const sub={id:subId,category:currentFormCategory,
    ts:new Date().toLocaleString(),createdAt:Date.now(),
    status:'pending',
    reviewerNote:'',reviewedAt:null,data,
    photoData:finalPhotoData,photoName:photoFile?.name||null,
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
  }catch(e){
    clearInterval(tick);
    if(bar){bar.style.width='100%';bar.style.background='var(--school-mint3)';}
    if(txt)txt.textContent='Saved locally. Cloud sync will retry.';
    setTimeout(()=>{
      document.getElementById('successUploading').style.display='none';
      document.getElementById('successDone').style.display='block';
    },1200);
  }
}

/* PIN */
function openPIN(mode){cfg=loadCfg();pinMode=mode;pinBuf='';updatePinDots();document.getElementById('pinErr').textContent='';const ov=document.getElementById('pinOverlay');ov.classList.toggle('editor',mode==='editor');const badge=document.getElementById('pinModeBadge');if(mode==='admin'){badge.textContent='⚙ Production Admin';badge.style.background='#1a2744';badge.style.color='#7dd4a8';}else if(mode==='editor'){badge.textContent='✎ Editor-in-Chief';badge.style.background='#2d1b4e';badge.style.color='#c6a5f0';}else{badge.textContent='🔒 Admin Portal';badge.style.background='#1c1c1e';badge.style.color='#f5f5f0';}document.getElementById('pinTitle').textContent=mode==='admin'?'Production Admin':(mode==='editor'?'Editor-in-Chief':'Admin Access');document.getElementById('pinSub').textContent=mode==='admin'?'Enter Production Admin PIN':(mode==='editor'?'Enter Editor-in-Chief PIN':'Enter your Admin PIN');ov.classList.add('active');}
function closePIN(){document.getElementById('pinOverlay').classList.remove('active');pinBuf='';pinMode=null;}
function pinKey(d){if(pinBuf.length>=4)return;pinBuf+=d;updatePinDots();if(pinBuf.length===4)checkPIN();}
function pinDel(){pinBuf=pinBuf.slice(0,-1);updatePinDots();}
function updatePinDots(){for(let i=0;i<4;i++){const dot=document.getElementById('pd'+i);dot.classList.toggle('filled',i<pinBuf.length);dot.classList.remove('error');}}
function checkPIN(){if(pinMode==='unified'){if(pinBuf===cfg.adminPin){closePIN();enterAdmin();return;}if(pinBuf===cfg.editorPin){closePIN();enterEditor();return;}for(let i=0;i<4;i++)document.getElementById('pd'+i).classList.add('error');document.getElementById('pinErr').textContent='Incorrect PIN';setTimeout(()=>{pinBuf='';updatePinDots();},500);return;}const exp=pinMode==='admin'?cfg.adminPin:cfg.editorPin;if(pinBuf===exp){const m=pinMode;closePIN();m==='admin'?enterAdmin():enterEditor();}else{for(let i=0;i<4;i++)document.getElementById('pd'+i).classList.add('error');document.getElementById('pinErr').textContent='Incorrect PIN';setTimeout(()=>{pinBuf='';updatePinDots();},500);}}

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
  let filtered=subs.slice().reverse();
  /* WORKFLOW: Production Admin only sees approved/finalized — pending stays with Editor */
  filtered=filtered.filter(s=>s.status==='approved'||s.status==='finalized'||s.status==='rejected');
  if(currentAdminCat!=='all')filtered=filtered.filter(s=>s.category===currentAdminCat);
  if(sf!=='all')filtered=filtered.filter(s=>s.status===sf);
  const list=document.getElementById('adminSubList');
  /* Fix 5: Workflow notice for admin */
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
  let filtered=subs.slice().reverse();
  if(currentEditorCat!=='all')filtered=filtered.filter(s=>s.status===currentEditorCat);
  const list=document.getElementById('editorSubList');
  /* Fix 5: Inbox banner for editor */
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
async function saveEditorialNote(){
  const title=(document.getElementById('edNoteTitle')?.value||'').trim();
  const body=(document.getElementById('edNoteBody')?.value||'').trim();
  const statusEl=document.getElementById('edNoteStatus');
  if(!body){alert('Please write your editorial note before saving.');return;}
  if(statusEl)statusEl.textContent='Saving…';
  subs=loadAll();
  let ex=subs.find(s=>s.category==='editorial-note');
  const now=new Date().toLocaleString();
  if(ex){
    ex.data={title:{label:'Title',value:title},body:{label:'Body',value:body}};
    ex.ts=now;
    saveAll(subs);
    await dbSaveSubmission(ex);
  } else {
    const sub={id:genId(),category:'editorial-note',ts:now,createdAt:Date.now(),
      status:'approved',reviewerNote:'',reviewedAt:Date.now(),
      data:{title:{label:'Title',value:title},body:{label:'Body',value:body}},
      photoData:null,photoName:null,photos:null};
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
function saveLsSettings(){const get=id=>{const el=document.getElementById(id);return el?el.value:undefined;};const s={magTitle:get('ls-magTitle'),schoolName:get('ls-schoolName'),location:get('ls-location'),edition:get('ls-edition'),year:get('ls-year'),theme:get('ls-theme'),color1:get('ls-color1'),color2:get('ls-color2'),color3:get('ls-color3'),pageBg:get('ls-pageBg'),textColor:get('ls-textColor'),headingFont:get('ls-headingFont'),bodyFont:get('ls-bodyFont'),fontSize:get('ls-fontSize'),pageSize:get('ls-pageSize'),orientation:get('ls-orientation'),pageNums:get('ls-pageNums'),apiKey:get('ls-apiKey'),layoutModel:get('ls-layoutModel'),proofModel:get('ls-proofModel'),maxTokens:get('ls-maxTokens'),teachersPerPage:parseInt(get('ls-teachersPerPage'))||9,studentsPerPage:parseInt(get('ls-studentsPerPage'))||2,speechesPerPage:parseInt(get('ls-speechesPerPage'))||1,galleryPerPage:parseInt(get('ls-galleryPerPage'))||4,creativePerPage:parseInt(get('ls-creativePerPage'))||2,autoTrim:get('ls-autoTrim')};lsSettings=s;saveLsSettingsToStorage(s);applyLsColors(s);alert('Settings saved!');}
function applyLsColors(s){
  if(!s)s=lsSettings;
  const r=document.documentElement;
  if(s.color1){r.style.setProperty('--school-navy',s.color1);r.style.setProperty('--school-navy2',s.color1+'cc');r.style.setProperty('--admin',s.color1);}
  if(s.color2){r.style.setProperty('--school-mint',s.color2);r.style.setProperty('--school-mint3',s.color2);}
  if(s.color3)r.style.setProperty('--school-red',s.color3);
  if(s.pageBg)r.style.setProperty('--surface',s.pageBg);
  if(s.textColor)r.style.setProperty('--ink',s.textColor);
}

/* SECTION MANAGER */
function renderSectionManager(){const list=document.getElementById('sectionList');subs=loadAll();list.innerHTML=sectionOrder.map((sec,i)=>{const count=subs.filter(s=>s.category===sec.key&&(s.status==='approved'||s.status==='finalized')).length;const lbl=getLabel('section_'+sec.key,sec.label);return`<div class="section-row" draggable="true" data-idx="${i}" ondragstart="sectionDragStart(event,${i})" ondragover="sectionDragOver(event,${i})" ondrop="sectionDrop(event,${i})" ondragleave="sectionDragLeave(event)"><span class="section-handle">⠿</span><span class="section-row-num">${i+1}</span><div class="section-row-info"><div class="section-row-name">${sec.icon} ${esc(lbl)}</div><div class="section-row-meta">${count} approved · Layout: ${sec.layout}</div></div><div class="section-row-controls"><button class="section-toggle ${sec.visible?'on':''}" onclick="toggleSection(${i})">${sec.visible?'Visible':'Hidden'}</button><select class="section-layout-select" onchange="changeSectionLayout(${i},this.value)"><option value="single" ${sec.layout==='single'?'selected':''}>Single</option><option value="double" ${sec.layout==='double'?'selected':''}>Double</option><option value="grid" ${sec.layout==='grid'?'selected':''}>Grid</option><option value="teacher-grid" ${sec.layout==='teacher-grid'?'selected':''}>Teacher Grid</option><option value="gallery" ${sec.layout==='gallery'?'selected':''}>Gallery</option><option value="events" ${sec.layout==='events'?'selected':''}>Events</option><option value="cover" ${sec.layout==='cover'?'selected':''}>Cover</option><option value="toc" ${sec.layout==='toc'?'selected':''}>TOC</option></select>${sec.editable!==false?`<button class="section-rename-btn" onclick="openRenameModal('${sec.key}','${esc(lbl)}')">✎ Rename</button>`:''}</div></div>`;}).join('');}
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
      const entries = Object.entries(sub.data || {});
      if(skipFirst && entries.length > 0) entries.shift();
      return entries.map(([k, fc]) => {
        if(!fc || !fc.value) return '';
        const val = String(fc.value);
        const isLong = val.length > 60;
        const display = val.length > maxChars ? val.substring(0, maxChars) + '…' : val;
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
      return sub.data.name?.value || sub.data.speakerName?.value ||
             sub.data.contribName?.value || sub.data.reporterName?.value ||
             sub.data.authorName?.value || sub.data.intervieweeName?.value ||
             sub.data.submitterName?.value || sub.data.eventName?.value ||
             sub.data.title?.value || 'Untitled';
    }
    function resolveSubtitle(sub){
      return sub.data.title?.value || sub.data.speakerTitle?.value ||
             sub.data.authorRole?.value || sub.data.intervieweeTitle?.value ||
             sub.data.contribRole?.value || sub.data.subject?.value ||
             sub.data.speechType?.value || sub.data.eventType?.value ||
             sub.data.subjectArea?.value || sub.data.photoCategory?.value || '';
    }
    function resolveMainText(sub){
      return sub.data.speechBody?.value || sub.data.articleBody?.value ||
             sub.data.contribBody?.value || sub.data.qaBody?.value ||
             sub.data.eventReport?.value || sub.data.message?.value ||
             sub.data.introParagraph?.value || '';
    }
    function resolvePhotoBlock(sub, w, h, radius, border){
      const ini = resolveName(sub).trim().split(/\s+/).map(w=>w[0]).join('').substring(0,2).toUpperCase();
      if(sub.photoData){
        return `<img src="${sub.photoData}" style="width:${w};height:${h};object-fit:cover;object-position:top center;border-radius:${radius};flex-shrink:0;border:${border};display:block;"/>`;
      }
      return `<div style="width:${w};height:${h};border-radius:${radius};background:${c1};display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;flex-shrink:0;">${ini}</div>`;
    }

    /* ── TEACHER GRID ─────────────────────────────────────────────────────── */
    if(layout==='teacher-grid'){
      const cols = 3;
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:10px 8px;">
        ${items.map(sub => {
          const name = resolveName(sub);
          const shortName = name.split(' ').slice(0,3).join(' ');
          const ph = resolvePhotoBlock(sub,'54px','62px','6px',`2px solid ${c2}66`);
          const allFields = renderAllFields(sub, {skipFirst:true, maxChars:99999, textColor, bFont});
          return `<div class="mag-item mag-item-teacher" style="background:#fafaf8;border-radius:7px;padding:8px 5px 6px;border-top:3px solid ${c2};text-align:center;">
            <div class="mag-item-photo" style="margin:0 auto 5px;width:54px;">${ph}</div>
            <div class="mag-item-name" style="font-size:8.5px;font-weight:700;color:${c1};line-height:1.3;margin-bottom:4px;">${esc(shortName)}</div>
            <div class="mag-item-fields" style="text-align:left;padding:0 2px;">${allFields}</div>
          </div>`;
        }).join('')}
      </div>`;
    }

    /* ── STUDENT GRID (primary5 / jss3 / ss3) ─────────────────────────────── */
    else if(layout==='grid'){
      const cols = items.length === 1 ? 1 : 2;
      contentHtml = `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:10px;">
        ${items.map(sub => {
          const name = resolveName(sub);
          const ph = resolvePhotoBlock(sub,'62px','74px','6px',`2px solid ${c2}55`);
          const allFields = renderAllFields(sub, {skipFirst:true, maxChars:120, textColor, bFont});
          return `<div class="mag-item mag-item-student" style="display:grid;grid-template-columns:auto 1fr;gap:10px;padding:10px;background:#fafaf8;border-radius:8px;border-left:3px solid ${c2};">
            <div class="mag-item-photo">${ph}</div>
            <div class="mag-item-details">
              <div class="mag-item-name" style="font-size:12px;font-weight:700;color:${c1};font-family:${hFont};margin-bottom:5px;">${esc(name)}</div>
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
              <img class="mag-item-photo" src="${sub.photoData}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:6px;border:1px solid ${c2}33;"/>
              <div class="mag-item-fields" style="padding:4px 2px;font-size:8px;">${allFields}</div>
            </div>`;
          }
          if(sub.photos && sub.photos.length){
            return sub.photos.slice(0,2).map((p,pi) => `<div class="mag-item mag-item-gallery">
              <img class="mag-item-photo" src="${p.data}" style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:6px;border:1px solid ${c2}33;"/>
              ${pi===0?`<div class="mag-item-fields" style="padding:4px 2px;font-size:8px;">${allFields}</div>`:''}
            </div>`).join('');
          }
          return '';
        }).join('')}
      </div>`;
    }

    /* ── DOUBLE / CREATIVE ────────────────────────────────────────────────── */
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

    /* ── EVENTS ───────────────────────────────────────────────────────────── */
    else if(layout==='events'){
      contentHtml = items.map(sub => {
        const name = resolveName(sub);
        const allFields = renderAllFields(sub, {skipFirst:true, maxChars:400, textColor, bFont});
        const imgs = sub.photos && sub.photos.length ? sub.photos : sub.photoData ? [{data:sub.photoData}] : [];
        return `<div class="mag-item mag-item-event" style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #eee;">
          <h3 class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};margin-bottom:6px;">${esc(name)}</h3>
          ${imgs.length ? `<div class="mag-item-photos" style="display:flex;gap:5px;margin-bottom:7px;">${imgs.slice(0,3).map(p=>`<img src="${p.data}" style="flex:1;aspect-ratio:16/9;object-fit:cover;border-radius:5px;max-height:75px;"/>`).join('')}</div>` : ''}
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
            <div style="flex:1;">
              <h3 class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};margin:0;line-height:1.2;">${esc(name)}</h3>
              ${subtitle ? `<div class="mag-item-subtitle" style="font-size:8px;text-transform:uppercase;letter-spacing:1px;color:${c2};font-weight:700;margin-top:2px;">${esc(subtitle)}</div>` : ''}
            </div>
          </div>` : ''}
          <div class="mag-item-fields">${allFields}</div>
          ${pullQuote ? `<div class="mag-item-pullquote" style="margin:12px 0;padding:10px 15px;border-left:3px solid ${c2};background:#fdfcf0;font-style:italic;font-family:${bFont};font-size:11px;color:${c1};">"${esc(pullQuote)}"</div>` : ''}
        </div>`;
      }).join('');
    }

    inner = `<div style="background:${pageBg};height:100%;display:flex;flex-direction:column;">
      <div style="padding:1.5rem 2rem 1rem;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1.5px solid ${c1}11;">
        <div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;">${esc(secLabel)}</div>
        <div style="font-family:${hFont};font-size:14px;color:${c1};opacity:.5;">${esc(magTitle)}</div>
      </div>
      <div style="padding:1.5rem 2rem;flex:1;overflow:hidden;">
        ${contentHtml}
      </div>
      ${s.pageNums!=='no'?foot:''}
    </div>`;
  }

  canvas.style.width = w+'px';
  canvas.style.height = h+'px';
  canvas.style.transform = `scale(${scale})`;
  canvas.innerHTML = inner;
}

function updatePageNavUI(){
  const pi=document.getElementById('pageIndicator');
  if(pi)pi.textContent=`Page ${magPages.length?currentPageIdx+1:0} of ${magPages.length}`;
}
function prevPage(){if(currentPageIdx>0){currentPageIdx--;renderCurrentPage();updatePageNavUI();}}
function nextPage(){if(currentPageIdx<magPages.length-1){currentPageIdx++;renderCurrentPage();updatePageNavUI();}}
function wsZoom(val){const canvas=document.getElementById('magCanvas');const{w}=getPageDimensions();const scale=Math.min(val,(window.innerWidth-20)/w);canvas.style.transform=`scale(${scale})`;}

function buildTOCItems(){
  const items=[];let pageNum=3;
  sectionOrder.filter(s=>s.visible&&!['cover','toc'].includes(s.key)).forEach(sec=>{
    const approved=loadAll().filter(sub=>sub.category===sec.key&&(sub.status==='approved'||sub.status==='finalized'));
    if(!approved.length&&!['editorial-note','appreciation'].includes(sec.key))return;
    const lbl=getLabel('section_'+sec.key,sec.label);
    items.push({num:items.length+1,name:lbl,page:pageNum});
    if(['editorial-note','appreciation','speeches'].includes(sec.key))pageNum+=1;
    else{const perPage=(sec.key==='teachers')?(parseInt(lsSettings.teachersPerPage)||9):(['primary5','jss3','ss3'].includes(sec.key))?(parseInt(lsSettings.studentsPerPage)||2):1;pageNum+=Math.ceil(approved.length/perPage);}
  });
  return items;
}
function renderTOC(){/* uses logic inside renderCurrentPage */}

/* AI ASSISTANT */
async function wsAISend(){
  const input=document.getElementById('wsAIInput');const text=input.value.trim();if(!text)return;
  wsAIAddMsg('user',text);input.value='';
  const statusEl=wsAIAddMsg('assistant','Thinking…',null,true);
  try{
    const s=lsSettings;const approved=loadAll().filter(sub=>sub.status==='approved'||sub.status==='finalized');
    const systemPrompt=`You are MagicEditor Layout Assistant. You help the production team build a school magazine.
Current Project: ${s.magTitle} for ${s.schoolName} (${s.edition}, ${s.year}).
Approved submissions: ${approved.length}.
Sections: ${sectionOrder.map(so=>so.label).join(', ')}.
Key Settings: Theme=${s.theme}, Colors=${s.color1}/${s.color2}, Page Size=${s.pageSize}.

Rules:
1. Be professional, creative, and concise.
2. If asked to summarize content for a foreword, use the approved submissions.
3. If asked to suggest a color palette or font, provide specific hex codes or font names.
4. If asked to help with section ordering, suggest a logical flow.
5. Provide actionable advice for print quality.`;
    const response=await callAI(systemPrompt,text);
    statusEl.innerHTML=esc(response).replace(/\n/g,'<br>');
    aiChatHistory.push({role:'assistant',content:response});
  }catch(e){statusEl.innerHTML='<span style="color:var(--ws-red);">Error: '+esc(e.message)+'</span>';}
}
function wsAIAddMsg(role,content,html,isPending){
  const chat=document.getElementById('wsAIChat');
  const div=document.createElement('div');
  div.className='ws-ai-msg '+role;
  if(html)div.innerHTML=html;else div.textContent=content;
  chat.appendChild(div);chat.scrollTop=chat.scrollHeight;
  if(!isPending)aiChatHistory.push({role,content});
  return div;
}
function renderAIChatHistory(){const chat=document.getElementById('wsAIChat');chat.innerHTML='<div class="ws-ai-msg system">✦ I am your Layout Assistant. I can help you organize sections, summarize content for the foreword, or proofread submissions.</div>';aiChatHistory.forEach(m=>wsAIAddMsg(m.role,m.content));}
async function callAI(sys,prompt){
  const key=lsSettings.apiKey;if(!key)throw new Error('API Key missing. Add it in Production Admin -> Settings.');
  const model=lsSettings.layoutModel||'google/gemini-2.0-flash-001';
  const url=`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const body={contents:[{role:'user',parts:[{text:sys+'\n\nUser request: '+prompt}]}],generationConfig:{maxOutputTokens:parseInt(lsSettings.maxTokens)||1000}};
  const res=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const json=await res.json();if(json.error)throw new Error(json.error.message);
  return json.candidates[0].content.parts[0].text;
}
async function proofreadSubmission(id){
  const s=loadAll().find(x=>x.id===id);if(!s)return;
  const panelEl=document.getElementById('proof-result-'+id);
  panelEl.style.display='block';panelEl.innerHTML='<div class="spinner-mini"></div> Proofreading with AI…';
  const textToProof=Object.entries(s.data).filter(([,f])=>f.type==='textarea').map(([k,f])=>`${f.label}: ${f.value}`).join('\n\n');
  if(!textToProof){panelEl.innerHTML='<div style="font-size:11px;color:var(--ink3);">No long-text fields to proofread.</div>';return;}
  try{
    const model=lsSettings.proofModel||'google/gemini-flash-1.5';
    const sys=`You are a professional editorial proofreader for a school magazine.
Proofread the following submission for grammar, spelling, punctuation, and tone.
Provide:
1. "Corrected Version" (the full text with improvements).
2. "Key Changes" (briefly list what you fixed).
Keep the original meaning and student's voice intact, just polish it for print.`;
    const response=await callAI(sys,textToProof);
    panelEl.innerHTML=`<div class="proof-box"><div class="proof-title">✦ AI Editorial Suggestion</div><div class="proof-body">${esc(response).replace(/\n/g,'<br>')}</div><button class="btn btn-mini" onclick="this.parentElement.parentElement.style.display='none'">Dismiss</button></div>`;
  }catch(e){panelEl.innerHTML='<div style="color:var(--red);font-size:11px;">Proofread failed: '+esc(e.message)+'</div>';}
}
async function proofreadWithAI(text,panelEl,subId,fields){
  panelEl.style.display='block';panelEl.innerHTML='<div class="spinner-mini"></div> Proofreading with AI…';
  try{
    const model=lsSettings.proofModel||'google/gemini-flash-1.5';
    const sys=`You are a professional editorial proofreader for a school magazine.
Proofread the following text for grammar, spelling, punctuation, and tone.
Provide:
1. "Corrected Version" (the full text with improvements).
2. "Key Changes" (briefly list what you fixed).
Keep the original meaning intact, just polish it for professional print.`;
    const response=await callAI(sys,text);
    panelEl.innerHTML=`<div class="proof-box"><div class="proof-title">✦ AI Editorial Suggestion</div><div class="proof-body">${esc(response).replace(/\n/g,'<br>')}</div><button class="btn btn-mini" onclick="this.parentElement.parentElement.style.display='none'">Dismiss</button></div>`;
  }catch(e){panelEl.innerHTML='<div style="color:var(--red);font-size:11px;">Proofread failed: '+esc(e.message)+'</div>';}
}

function renderAIContentSummary(){/* can show summary of all submissions for the foreword */}

/* ── Bulk Gallery Support ── */
function buildGalleryTabs(){return`<div class="f-card"><div class="f-card-title">Photo Submission</div><div class="f-tabs"><button class="f-tab active" id="gtab-single" onclick="setGalleryTab('single')">Single Photo</button><button class="f-tab" id="gtab-bulk" onclick="setGalleryTab('bulk')">Bulk Upload</button></div><div id="gpane-single" class="gpane active"><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()"><input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/><div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>Select photo</h3><p>Click or drag & drop</p></div><div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><button class="photo-change" onclick="resetPhoto(event)">Change</button></div></div></div><div id="gpane-bulk" class="gpane" style="display:none;"><div class="photo-drop" id="photoDropBulk" onclick="document.getElementById('bulkInput').click()"><input type="file" id="bulkInput" accept=".jpg,.jpeg,.png,.webp" multiple onchange="handleBulkSelect(event)"/><div id="bulkPlaceholder"><span class="photo-drop-icon">📸</span><h3>Select multiple photos</h3><p>Tap to choose up to 10 photos</p></div><div id="bulkGrid" class="multi-photo-grid"></div></div><div class="photo-reqs"><p>Upload up to 10 photos at once. Captions can be added later in Admin.</p></div><button class="submit-btn" onclick="submitBulkGallery()" style="margin-top:1rem;">Upload All</button></div><div class="photo-err-msg" id="photoErrMsg"></div></div>`;}
function setGalleryTab(tab){document.querySelectorAll('.f-tab').forEach(t=>t.classList.remove('active'));document.getElementById('gtab-'+tab).classList.add('active');document.querySelectorAll('.gpane').forEach(p=>p.style.display='none');document.getElementById('gpane-'+tab).style.display='block';const mainBtn=document.getElementById('mainSubmitBtn');if(mainBtn)mainBtn.style.display=tab==='bulk'?'none':'block';}
function handleBulkSelect(e){const files=Array.from(e.target.files||[]);if(!files.length)return;bulkPhotos=files.slice(0,10);const grid=document.getElementById('bulkGrid');const ph=document.getElementById('bulkPlaceholder');ph.style.display='none';grid.innerHTML=bulkPhotos.map((f,i)=>`<div class="multi-photo-thumb"><div class="bulk-num">${i+1}</div><div style="font-size:10px;color:var(--ink3);">${esc(f.name)}</div></div>`).join('');}
async function submitBulkGallery(){if(!bulkPhotos.length){alert('Select photos first.');return;}document.getElementById('gpane-bulk').style.display='none';document.getElementById('successWrap').style.display='block';document.getElementById('successUploading').style.display='block';const bar=document.getElementById('uploadProgressBar');const txt=document.getElementById('uploadProgressText');for(let i=0;i<bulkPhotos.length;i++){const f=bulkPhotos[i];const pct=Math.round(((i)/bulkPhotos.length)*100);if(bar)bar.style.width=pct+'%';if(txt)txt.textContent=`Uploading ${i+1} of ${bulkPhotos.length}: ${f.name}…`;const subId=genId();let url=null;try{url=await uploadToStorage(f,subId);}catch(e){console.warn('Bulk fail:',f.name);}const sub={id:subId,category:'gallery',ts:new Date().toLocaleString(),createdAt:Date.now(),status:'pending',reviewerNote:'',reviewedAt:null,data:{submitterName:{label:'Submitted by',value:'Bulk Upload'},photoCaption:{label:'Photo caption',value:f.name},photoCategory:{label:'Category',value:'Other'}},photoData:url,photoName:f.name};await dbSaveSubmission(sub);}if(bar)bar.style.width='100%';if(txt)txt.textContent='✓ All photos uploaded successfully!';setTimeout(()=>{document.getElementById('successUploading').style.display='none';document.getElementById('successDone').style.display='block';},800);}

/* ── OCR Panel ── */
function buildOCRPanel(k){
  const ocrCats=['speeches','academic','motivational','creative'];
  if(!ocrCats.includes(k))return'';
  return`<div class="f-card ocr-card"><div class="f-card-title">✦ AI Text Assistant</div><p style="font-size:11px;color:var(--ink3);margin-bottom:12px;">Have a physical copy? Take a photo and let AI extract the text for you.</p><div style="display:flex;gap:10px;"><button class="btn btn-mini" onclick="document.getElementById('ocrInput').click()">📷 Snap / Upload Photo</button><input type="file" id="ocrInput" accept="image/*" style="display:none;" onchange="runOCR(event)"></div><div id="ocrStatus" style="font-size:11px;margin-top:8px;color:var(--school-mint);display:none;"></div></div>`;
}
async function runOCR(e){const file=e.target.files[0];if(!file)return;const st=document.getElementById('ocrStatus');st.textContent='✦ Reading text with AI…';st.style.display='block';try{const reader=new FileReader();reader.onload=async()=>{const base64=reader.result.split(',')[1];const key=lsSettings.apiKey;if(!key){st.textContent='✗ API key missing in Admin -> Settings';return;}const url=`https://generativelanguage.googleapis.com/v1beta/models/google/gemini-1.5-flash:generateContent?key=${key}`;const body={contents:[{parts:[{text:"Extract all text from this image. Return ONLY the extracted text, no commentary."},{inline_data:{mime_type:file.type,data:base64}}]}]};const res=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const json=await res.json();const text=json.candidates[0].content.parts[0].text;/* Auto-fill the largest textarea */const ta=document.querySelector('textarea.long');if(ta){ta.value=text;st.textContent='✓ Text extracted and filled!';}else{st.textContent='✓ Text extracted (see console)';console.log('OCR Result:',text);}};reader.readAsDataURL(file);}catch(e){st.textContent='✗ Extraction failed.';}}

/* ── Labels System ── */
function loadLabels(){try{return JSON.parse(localStorage.getItem('me_labels')||'{}');}catch(e){return{};}}
function saveLabels(l){dbSaveSettings('labels',l);}
let labelOverrides=loadLabels();
function getLabel(key,fallback){return labelOverrides[key]||fallback;}

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
        if(key === 'cfg') cfg = val;
        if(key === 'ls_settings') {
          lsSettings = val;
          applyLsColors(val);
          applyCustomCategories(val);
        }
        if(key === 'labels') {
          labelOverrides = val;
          localStorage.setItem('me_labels', JSON.stringify(val));
        }
        if(key === 'section_order') {
          sectionOrder = val;
          localStorage.setItem('me_section_order', JSON.stringify(val));
        }
        if(key === 'form_config') {
          formConfig = val;
          localStorage.setItem('me_form_config', JSON.stringify(val));
        }
      }
    });

    /* Pull submissions */
    if(statusEl) statusEl.textContent = 'Fetching submissions…';
    subs=await dbLoadAll();
    
    console.log('[BOOT] Success. Settings and', subs.length, 'submissions loaded.');
  }catch(e){
    console.warn('[BOOT] Sync Error:',e.message);
    throw e; /* rethrow for Promise.race */
  }
}

function slugify(s){return s.toString().toLowerCase().trim().replace(/\s+/g,'-').replace(/[^\w-]+/g,'').replace(/--+/g,'-');}

/* ── Export One (ZIP with JSON + Photo) ── */
function exportOneSubmission(id){const s=loadAll().find(x=>x.id===id);if(!s)return;if(typeof JSZip==='undefined'){alert('ZIP library not loaded.');return;}const zip=new JSZip();zip.file('submission.json',JSON.stringify(s,null,2));const name=slugify(s.data.name?.value||s.id);if(s.photoData&&s.photoData.startsWith('data:')){const parts=s.photoData.split(',');const mime=parts[0].match(/:(.*?);/)[1];const ext=mime.split('/')[1];zip.file(`photo.${ext}`,parts[1],{base64:true});}zip.generateAsync({type:'blob'}).then(blob=>{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${s.category}_${name}.zip`;a.click();});}

/* ── Workspace / Layout Studio ── */
let wsPages=[],wsZoomLevel=1.0,wsChatHistory=[];
function openWorkspace(){enterAdmin();show('viewWorkspace');lsTab('preview');generateMagPreview();}

/* ── AI Layout Assistant (Mock/Stub for logic) ── */
function wsGeneratePreview(){generateMagPreview();}

/* UTILITY */
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* URL ROUTING — Admin access via ?admin or ?editor in URL */
function checkUrlRouting(){try{const params=new URLSearchParams(window.location.search);const fp=params.get('form');const ap=params.get('admin');const ep=params.get('editor');if(ap!==null){openPIN('admin');return true;}if(ep!==null){openPIN('editor');return true;}if(fp&&CATEGORIES[fp]){return fp;}/* return form key, not open yet */}catch(e){console.warn('[MagicEditor] URL routing:',e.message);}return false;}

/* KEYBOARD SHORTCUT — type "admin" or "editor" on landing page */
let keyBuffer='';
document.addEventListener('keydown',function(e){if(document.querySelector('.view.active')?.id!=='viewLanding')return;keyBuffer+=e.key.toLowerCase();if(keyBuffer.length>8)keyBuffer=keyBuffer.slice(-8);if(keyBuffer.endsWith('admin')){keyBuffer='';openPIN('admin');}if(keyBuffer.endsWith('editor')){keyBuffer='';openPIN('editor');}});

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

/* HIDE BOOT OVERLAY — Guaranteed removal */
function removeBootOverlay() {
  const overlay = document.getElementById('bootLoadingOverlay');
  if(!overlay) return;
  console.log('[BOOT] Removing overlay...');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.visibility = 'hidden';
    overlay.style.display = 'none';
  }, 500);
}

/* INIT */
renderLandingCards();
applyLsColors(lsSettings);
const _pendingFormKey=checkUrlRouting();

/* Boot cloud sync — forms from external links open AFTER settings are fetched */
setTimeout(async () => {
  console.log('[BOOT] Starting cloud sync...');
  
  // Show "Force Open" button after 5 seconds if still loading
  const forceBtnTimer = setTimeout(() => {
    const btn = document.getElementById('bootForceOpen');
    if(btn) btn.style.display = 'block';
  }, 5000);

  try {
    /* Set a strict timeout for the entire boot process */
    await Promise.race([
      initCloudSync(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Boot timeout')), 8000))
    ]);
    console.log('[BOOT] Cloud sync finished.');
  } catch (e) {
    console.warn('[BOOT] Sync failed or timed out:', e.message);
    showSync('err', 'Running offline — check internet');
  } finally {
    clearTimeout(forceBtnTimer);
    
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
    
    /* REMOVE OVERLAY REGARDLESS OF ERRORS */
    removeBootOverlay();
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
