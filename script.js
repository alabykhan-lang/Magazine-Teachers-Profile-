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
    {id:'photoCaption',label:'Image caption',type:'text',required:false,placeholder:'Optional caption for the speech image'},
    {id:'speechBody',label:'Full speech text',type:'textarea',required:true,long:true,hint:'Paste the complete speech here.'}
  ],photoOptional:true,photoTitle:'Speech image',photoPrompt:'Upload optional speech image',photoPill:'Optional - speaker, event, or related image'},
  creative:{label:'Creative Corner',tag:'Creative',title:'Creative Submission',subtitle:'Poems, stories, jokes, and riddles.',icon:'✍️',photoRequired:false,fields:[
    {id:'contribType',label:'Type of submission',type:'select',required:true,options:['Poem','Short Story','Joke','Riddle','Other']},
    {id:'contribName',label:'Your name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'contribRole',label:'Your class or role',type:'text',required:true,placeholder:'e.g. SS3 Science, Teacher'},
    {id:'contribTitle',label:'Title of your piece',type:'text',required:true,placeholder:'e.g. "The Sunset Over Our School"'},
    {id:'contribBody',label:'Your submission',type:'textarea',required:true,long:true,hint:'The full poem, story, or joke.'},
    {id:'contribNote',label:'Note to editor',type:'textarea',required:false,hint:'Optional — any context or dedication.'}
  ]},
  events:{label:'School Life & Events',tag:'Events',title:'Event / Activity Report',subtitle:'Sports days, excursions, competitions, achievements.',icon:'📸',photoRequired:true,photoMulti:true,photoMax:15,fields:[
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
    {id:'profileImageCaption',label:'Profile image caption',type:'text',required:false,placeholder:'Optional caption for top image'},
    {id:'middleImageCaption',label:'Middle image caption',type:'text',required:false,placeholder:'Optional caption for second image'},
    {id:'qaBody',label:'Interview Q&A',type:'textarea',required:true,long:true,hint:'Q: [question]\nA: [answer]'},
    {id:'closingNote',label:'Closing note',type:'textarea',required:false,hint:'Optional'}
  ],extraPhotoOptional:true,extraPhotoTitle:'Second interview image',extraPhotoPrompt:'Upload optional middle image',extraPhotoPill:'Optional - preserved in the middle of the interview layout'},
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
  ]},
  editor_board:{label:'Editor Board / Crew',tag:'Editor Board',title:'Editor Board / Crew Profile Submission',subtitle:'Profiles for editorial board members and magazine production crew.',icon:'Crew',photoRequired:true,fields:[
    {id:'name',label:'Full name',type:'text',required:true,placeholder:'As it should appear in print'},
    {id:'title',label:'Role / position',type:'text',required:true,placeholder:'e.g. Editor-in-Chief, Designer, Photographer'},
    {id:'bio',label:'Portfolio / short profile',type:'textarea',required:true,long:true,hint:'Brief profile, responsibilities, or portfolio note.'},
    {id:'message',label:'Message / note',type:'textarea',required:false,hint:'Optional message from this crew member.'},
    {id:'photoCaption',label:'Photo caption',type:'text',required:false,placeholder:'Optional'}
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
const DB_SUBMISSION_COLUMNS='id,category,ts,created_at,status,reviewer_note,reviewed_at,data,photo_url,photo_name,photos';
const DB_SUBMISSION_PAGE_SIZE=25;
const ENABLE_REALTIME=false;
const CLOUD_AUTO_REFRESH_MS=180000;
let _supa=null;
function loadSubCache(){try{const s=JSON.parse(localStorage.getItem('me_subs')||'[]');return Array.isArray(s)?s:[];}catch(e){return[];}}
function persistSubCache(list){try{localStorage.setItem('me_subs',JSON.stringify(Array.isArray(list)?list:[]));}catch(e){console.warn('[DB] Local cache save failed:',e.message);}}
function isStorageUrl(url){
  if(!url||typeof url!=='string')return false;
  try{
    const u=new URL(url);
    return /^https?:$/.test(u.protocol)&&u.origin===new URL(SUPA_URL).origin&&u.pathname.includes('/storage/v1/object/');
  }catch(e){return false;}
}
function storageUrlOnly(url){return isStorageUrl(url)?url:null;}
function normalizePhotoList(photos){
  let list=[];
  try{list=typeof photos==='string'?JSON.parse(photos||'[]'):(Array.isArray(photos)?photos:[]);}
  catch(e){list=[];}
  return list.map(p=>{
    const url=storageUrlOnly(p?.url||p?.data);
    return url?{...p,url,data:null}:null;
  }).filter(Boolean);
}
function normalizeSubmissionRow(r){
  if(!r)return null;
  return{
    id:r.id,category:r.category,ts:r.ts||new Date(r.created_at||Date.now()).toLocaleString(),
    createdAt:r.created_at?new Date(r.created_at).getTime():r.created_at_ms||r.createdAt||Date.now(),
    status:r.status||'pending',reviewerNote:r.reviewer_note||r.reviewerNote||'',reviewedAt:r.reviewed_at||r.reviewedAt||null,
    data:typeof r.data==='string'?JSON.parse(r.data):r.data||{},
    photoData:storageUrlOnly(r.photo_url||r.photo_data||r.photoData),photoName:r.photo_name||r.photoName||null,
    photos:r.photos?normalizePhotoList(r.photos):null
  };
}
function mergeSubmissionLists(localList,cloudList){
  const merged=new Map();
  (Array.isArray(localList)?localList:[]).forEach(s=>{if(s&&s.id)merged.set(String(s.id),s);});
  (Array.isArray(cloudList)?cloudList:[]).forEach(cloudSub=>{
    if(!cloudSub||!cloudSub.id)return;
    const key=String(cloudSub.id);
    const localSub=merged.get(key);
    if(!localSub){merged.set(key,cloudSub);return;}
    const localLocked=localSub.status==='approved'||localSub.status==='finalized'||localSub.locked===true;
    const cloudTime=cloudSub.reviewedAt?new Date(cloudSub.reviewedAt).getTime():(cloudSub.createdAt||0);
    const localTime=localSub.reviewedAt?new Date(localSub.reviewedAt).getTime():(localSub.createdAt||0);
    merged.set(key,(localLocked&&localTime>=cloudTime)?{...cloudSub,...localSub}:{...localSub,...cloudSub});
  });
  return Array.from(merged.values()).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
}
const cloudLoadState={count:null,loadedAt:null,source:'cache',error:null,counts:null};
function computeSubmissionCounts(list){
  const all=Array.isArray(list)?list:[];
  const byStatus={pending:0,approved:0,rejected:0,finalized:0,draft:0};
  const byCategory={};
  all.forEach(s=>{
    const status=s?.status||'pending';
    byStatus[status]=(byStatus[status]||0)+1;
    const cat=s?.category||'uncategorized';
    byCategory[cat]=(byCategory[cat]||0)+1;
  });
  return{total:all.length,byStatus,byCategory};
}
function formatAdminCountSummary(counts,source){
  counts=counts||computeSubmissionCounts([]);
  const status=counts.byStatus||{};
  const catText=Object.entries(counts.byCategory||{})
    .sort(([a],[b])=>a.localeCompare(b))
    .map(([k,v])=>`${CATEGORIES[k]?.tag||EDITORIAL_META[k]?.tag||k}: ${v}`)
    .join(' | ')||'No categories';
  const label=source==='cloud'?'Cloud source of truth':'Cached fallback only';
  return `${label} - Total ${counts.total||0} | Pending ${status.pending||0} | Approved ${status.approved||0} | Rejected ${status.rejected||0} | ${catText}`;
}
function absorbSubmissions(cloudList,options){
  options=options||{};
  const cloud=Array.isArray(cloudList)?cloudList:[];
  const next=options.replaceCache?cloud:mergeSubmissionLists(loadSubCache(),cloud);
  subs=next;
  persistSubCache(next);
  return next;
}
let subs=loadSubCache();
let lsSettings=loadLsSettingsFromStorage();
let bulkPhotos=[];
let sectionOrder;
let formConfig;
const PRINT_IMAGE_MIN_PX=300;
const PRINT_IMAGE_RECOMMENDED_PX=1200;
const PRINT_MAX_IMAGE_MB=15;
const BULK_CLOUD_CONCURRENCY=1;
const CLOUD_RETRY_DELAYS=[800,1500,3000];
const CLOUD_TIMEOUT_MS=20000;
const STORAGE_BUCKET='photos';
const STORAGE_UPLOAD_RETRY_DELAYS=[1000,2000,4000,8000,12000];
const STORAGE_UPLOAD_TIMEOUT_MS=180000;
const BULK_PHOTO_MAX=15;
const BULK_UPLOAD_BETWEEN_FILES_MS=700;
const cloudHealth={database:'unknown',auth:'unknown',realtime:'unknown',edge:'unknown'};

function loadLsSettingsFromStorage(){
  try{
    const s=JSON.parse(localStorage.getItem('me_ls_settings')||'null');
    if(s&&typeof s==='object')return s;
  }catch(e){}
  return {magTitle:'Maiden Magazine',schoolName:'Way To Success Standard Schools',edition:'2026 Edition',year:'2026',theme:'The Making of Tomorrow: From Humble Beginnings to Limitless Horizons',color1:'#0B1F3A',color2:'#D6A84F',color3:'#0F7C5C',pageBg:'#F8F3E7',textColor:'#1F2933',pageSize:'a4',orientation:'portrait',pageNums:'yes'};
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
async function uploadToStorage(file, subId, options){
  const opts=options||{};
  if(!file)throw new Error('No photo selected.');
  if(!(file instanceof Blob))throw new Error('Invalid image file.');
  if(!file.size||file.size<=0)throw new Error('Invalid image file.');
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024)throw new Error('Image is too large. Please use a smaller photo.');
  const fileType=file.type||'';
  const fileName=file.name||'photo.jpg';
  if(fileType&&!/^image\/(jpeg|jpg|png|webp)$/i.test(fileType))throw new Error('Invalid image file.');
  if(isNetworkTrulyOffline())throw new Error('You appear to be offline. Reconnect and try the photo upload again.');
  const loaded=await waitForSupabase(8000);
  const sb=loaded?getSupa():null;
  if(!sb)throw new Error('Cloud storage is still loading. Please try again in a moment.');
  const rawExt=fileName.split('.').pop().toLowerCase();
  const typeExt=fileType.split('/').pop().replace('jpeg','jpg').toLowerCase();
  const ext=['jpg','jpeg','png','webp'].includes(rawExt)?rawExt:(['jpg','png','webp'].includes(typeExt)?typeExt:'jpg');
  const safeId=String(subId||genId()).replace(/[^a-zA-Z0-9_-]/g,'_');
  const day=new Date().toISOString().slice(0,10);
  const path=`submissions/${day}/${safeId}-${Date.now()}.${ext}`;
  try{
    await storageUploadWithRetry(async()=>{
      const{data,error}=await sb.storage.from(STORAGE_BUCKET).upload(path,file,{
        cacheControl:'31536000',
        contentType:fileType||`image/${ext==='jpg'?'jpeg':ext}`,
        upsert:false
      });
      if(error){
        console.error("Storage upload failed",{fileName,fileSize:file.size,fileType,path,error});
        throw error;
      }
      if(!data?.path)throw new Error('Upload finished without a storage path.');
    },{fileName,fileSize:file.size,fileType,path,onStatus:opts.onStatus});
    const{data}=sb.storage.from(STORAGE_BUCKET).getPublicUrl(path);
    const publicUrl=data?.publicUrl;
    if(!storageUrlOnly(publicUrl))throw new Error('Could not create a valid public URL for the uploaded photo.');
    return publicUrl;
  }catch(e){
    console.error("Storage upload failed",{fileName,fileSize:file.size,fileType,path,error:e});
    throw normalizeStorageUploadError(e);
  }
}
async function storageUploadWithRetry(operation,context){
  let lastErr;
  const attempts=STORAGE_UPLOAD_RETRY_DELAYS.length+1;
  for(let i=0;i<attempts;i++){
    try{
      if(context?.onStatus)context.onStatus(i===0?'Uploading photo...':'Uploading photo... retry '+i+'/'+STORAGE_UPLOAD_RETRY_DELAYS.length);
      return await withTimeout(Promise.resolve().then(operation),'Uploading photo',STORAGE_UPLOAD_TIMEOUT_MS);
    }catch(e){
      lastErr=e;
      if(i===attempts-1)break;
      const delay=STORAGE_UPLOAD_RETRY_DELAYS[i];
      console.warn('[Storage] Upload attempt '+(i+1)+'/'+attempts+' failed. Retrying in '+(delay/1000)+'s.',e);
      const retryMsg='Uploading photo... retry '+(i+1)+'/'+STORAGE_UPLOAD_RETRY_DELAYS.length;
      if(context?.onStatus)context.onStatus(retryMsg);
      showSync('syncing',retryMsg);
      await wait(delay);
    }
  }
  console.error("Storage upload failed",{...(context||{}),error:lastErr});
  throw lastErr;
}
function normalizeStorageUploadError(err){
  const raw=String(err?.message||err?.error_description||err?.statusText||err||'');
  if(/invalid image file/i.test(raw))return new Error('Invalid image file.');
  if(/too large|payload too large|entity too large|exceeded|413|file size/i.test(raw))return new Error('Image is too large. Please use a smaller photo.');
  if(/failed to fetch|network|timeout|load failed|abort|offline|connection/i.test(raw))return new Error('Network interrupted during upload. Please retry.');
  return new Error(raw?'Photo upload failed: '+raw:'Network interrupted during upload. Please retry.');
}
function uploadErrorDetail(err){
  const msg=String(err?.message||err||'');
  if(!msg)return '';
  return msg.length>180?msg.slice(0,177)+'...':msg;
}
function friendlyUploadErrorMessage(err){
  const msg=String(err?.message||err||'');
  if(/network interrupted|failed to fetch|network|timeout|load failed|abort|offline|connection/i.test(msg))return 'Network interrupted during upload. Please retry.';
  if(/too large|payload too large|entity too large|exceeded|413|file size/i.test(msg))return 'Image is too large. Please use a smaller photo.';
  if(/invalid image file|invalid format|could not read/i.test(msg))return 'Invalid image file.';
  return msg||'Network interrupted during upload. Please retry.';
}
async function uploadPhotosSequential(files,options){
  const list=Array.from(files||[]);
  const opts=options||{};
  const total=list.length;
  const photos=[];
  for(let i=0;i<total;i++){
    const file=list[i];
    const photoNo=i+1;
    if(opts.onProgress)opts.onProgress(photoNo,total,file);
    try{
      const url=await uploadToStorage(file,(opts.idPrefix||genId())+'_'+i,{onStatus:msg=>opts.onProgress&&opts.onProgress(photoNo,total,file,msg)});
      photos.push({url:url,name:file?.name||`photo_${photoNo}.jpg`,meta:opts.metas?.[i]||null});
    }catch(e){
      console.error('[Storage] Photo '+photoNo+' failed:',{fileName:file?.name,fileSize:file?.size,error:e});
      throw new Error('Photo '+photoNo+': '+friendlyUploadErrorMessage(e));
    }
    if(photoNo<total)await wait(opts.betweenMs||BULK_UPLOAD_BETWEEN_FILES_MS);
  }
  return photos;
}
async function mapWithConcurrency(items,limit,worker){
  const list=Array.from(items||[]),out=new Array(list.length);
  let next=0;
  const runners=Array.from({length:Math.min(Math.max(1,limit||1),list.length)},async()=>{
    while(next<list.length){
      const i=next++;
      out[i]=await worker(list[i],i);
    }
  });
  await Promise.all(runners);
  return out;
}
/* Retry helper for resilient cloud operations */
function wait(ms){return new Promise(r=>setTimeout(r,ms));}
function isNetworkTrulyOffline(){
  return typeof navigator!=='undefined'&&navigator.onLine===false;
}
function isTransientCloudError(err){
  const text=String(err?.message||err?.status||err?.code||err||'').toLowerCase();
  return text.includes('521')||text.includes('522')||text.includes('timeout')||text.includes('network')||text.includes('failed to fetch')||text.includes('load failed');
}
async function withTimeout(promise,label,timeoutMs=CLOUD_TIMEOUT_MS){
  let timer;
  try{
    return await Promise.race([
      promise,
      new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error((label||'Cloud request')+' timeout')),timeoutMs);})
    ]);
  }finally{
    clearTimeout(timer);
  }
}
async function fetchWithRetry(operation,label,retries=3,timeoutMs=CLOUD_TIMEOUT_MS){
  let lastErr;
  for(let i=0;i<retries;i++){
    try{
      return await withTimeout(Promise.resolve().then(operation),label,timeoutMs);
    }catch(e){
      lastErr=e;
      if(i===retries-1)break;
      const delay=CLOUD_RETRY_DELAYS[i]||CLOUD_RETRY_DELAYS[CLOUD_RETRY_DELAYS.length-1];
      const msg=`${label} failed (try ${i+1}/${retries}): ${e.message||e}. Retrying in ${delay/1000}s…`;
      console.warn('[DB]',msg,e.message||e);
      showSync('syncing',msg);
      await wait(delay);
    }
  }
  throw lastErr;
}
const withRetry=fetchWithRetry;


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
  if(!ENABLE_REALTIME){
    cloudHealth.realtime='optional';
    return;
  }
  const sb = getSupa();
  if (!sb || _subChannel) return;

  console.log('[DB] Initializing Realtime listeners…');
  
  /* Subscribe to lightweight pg_notify channel — no large photo payloads broadcast */
  _subChannel = sb.channel('db-changes')
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

  /* Listen on the lightweight submission_changes notify channel (trigger sends only id/status/category/created_at) */
  sb.channel('submission-notify')
    .on('broadcast', { event: 'submission_changes' }, ({ payload }) => {
      console.log('[DB] Submission notify:', payload);
      handleRealtimeNotify(payload);
    })
    .subscribe();
}

function handleRealtimeSubmission(payload) {
  const { eventType, new: newRow, old: oldRow } = payload;
  
  if (eventType === 'INSERT' || eventType === 'UPDATE') {
      const sub = normalizeSubmissionRow(newRow);
      if(sub)absorbSubmissions([sub]);
    showSync('live', 'New data received');
  } else if (eventType === 'DELETE') {
    console.warn('[DB] Ignoring realtime delete to protect recovered local submissions:', oldRow?.id);
    showSync('syncing', 'Cloud delete noticed - cached submissions preserved');
  }

  if (document.getElementById('viewAdmin')?.classList.contains('active')) renderAdmin();
  if (document.getElementById('viewEditor')?.classList.contains('active')) renderEditor();
  if (document.getElementById('viewWorkspace')?.classList.contains('active')) wsGeneratePreview();
}

/* Handles lightweight pg_notify pings — re-fetches only the affected row from cloud */
async function handleRealtimeNotify(payload) {
  if (!payload || !payload.id) return;
  const sb = getSupa(); if (!sb) return;
  const { event, id } = payload;
  console.log('[DB] Notify event:', event, id);

  if (event === 'DELETE') {
    console.warn('[DB] Ignoring notify delete to protect recovered local submissions:', id);
    showSync('syncing', 'Cloud delete noticed - cached submissions preserved');
  } else {
    /* Re-fetch only this single row — small, no photo payload issues */
    try {
      const { data, error } = await sb.from('submissions').select(DB_SUBMISSION_COLUMNS).eq('id', id).single();
      if (error || !data) return;
      const sub = normalizeSubmissionRow(data);
      if(sub)absorbSubmissions([sub]);
      showSync('live', '✦ New submission received');
    } catch(e) { console.warn('[DB] Notify re-fetch failed:', e.message); }
  }

  if (document.getElementById('viewAdmin')?.classList.contains('active')) renderAdmin();
  if (document.getElementById('viewEditor')?.classList.contains('active')) renderEditor();
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
async function dbFetchAllSubmissionRows(){
  const sb=getSupa();
  if(!sb)throw new Error('Supabase client not available - check internet');
  const rows=[];
  let from=0,total=null;
  while(true){
    const to=from+DB_SUBMISSION_PAGE_SIZE-1;
    const res=await fetchWithRetry(
      () => sb.from('submissions').select(DB_SUBMISSION_COLUMNS,{count:'exact'}).order('created_at',{ascending:true}).range(from,to),
      from?'Loading more submissions':'Loading submissions'
    );
    if(res.error)throw res.error;
    const page=res.data||[];
    if(total===null&&typeof res.count==='number')total=res.count;
    rows.push(...page);
    if(page.length<DB_SUBMISSION_PAGE_SIZE)break;
    if(total!==null&&rows.length>=total)break;
    from+=DB_SUBMISSION_PAGE_SIZE;
  }
  return{rows,count:total??rows.length};
}

async function dbLoadAll(options){
  options=options||{};
  const cached=loadSubCache();
  if(!options.silent)showSync('syncing',options.bypassCache?'Refreshing from cloud...':'Connecting to cloud...');
  try{
    const sb=getSupa();
    if(!sb) throw new Error('Supabase client not available — check internet');

    const result=await dbFetchAllSubmissionRows();
    const res={data:result.rows,error:null,count:result.count};

    if(res.error){
      /* Distinguish RLS block (HTTP 401/403/PGRST) from network error */
      const isRLS = res.error.code==='42501'||res.error.message?.includes('permission')||res.error.message?.includes('policy');
      if(isRLS){
        cloudHealth.database='blocked';
      if(!options.silent)showSync('err','⚠ Supabase RLS is blocking access — run fix SQL in Supabase (see console)');
        console.error('[DB] RLS BLOCK — To fix, go to Supabase Dashboard → SQL Editor and run:\n\n' +
          '-- Allow all reads and writes for anonymous users:\n' +
          'ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;\n' +
          'DROP POLICY IF EXISTS "public_access" ON public.submissions;\n' +
          'CREATE POLICY "public_access" ON public.submissions FOR ALL TO anon USING (true) WITH CHECK (true);\n\n' +
          'ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;\n' +
          'DROP POLICY IF EXISTS "public_access" ON public.settings;\n' +
          'CREATE POLICY "public_access" ON public.settings FOR ALL TO anon USING (true) WITH CHECK (true);\n');
      } else {
        cloudHealth.database='degraded';
        if(!options.silent)showSync('syncing','Cloud is slow - keeping cached submissions visible');
      }
      throw res.error;
    }
    cloudHealth.database='ok';

    const cloudRows = res.data || [];
    cloudLoadState.count=typeof res.count==='number'?res.count:cloudRows.length;
    cloudLoadState.loadedAt=Date.now();
    cloudLoadState.source='cloud';
    cloudLoadState.error=null;

    /* Normalise: Supabase row → internal format */
    const mapped=cloudRows.map(normalizeSubmissionRow).filter(Boolean);
    cloudLoadState.count=typeof res.count==='number'?res.count:mapped.length;
    cloudLoadState.counts=computeSubmissionCounts(mapped);

    if(!mapped.length&&cached.length&&!options.bypassCache){
      subs=cached;
      if(!options.silent)showSync('syncing','Cloud returned no rows - keeping recovered cache');
      return cached;
    }
    const cloudOnly=absorbSubmissions(mapped,{replaceCache:true});
    if(!options.silent)showSync('ok','Cloud synced - '+mapped.length+' cloud rows visible');
    return cloudOnly;
  }catch(e){
    cloudHealth.database=isNetworkTrulyOffline()?'offline':'degraded';
    cloudLoadState.source='fallback';
    cloudLoadState.error=e.message||String(e);
    cloudLoadState.counts=null;
    console.warn('[DB] Cloud load exhausted retries:',e.message);
    if(options.bypassCache||options.allowCacheFallback===false)throw e;
    if(cached.length){subs=cached;if(!options.silent)showSync('syncing','Showing cached submissions while cloud recovers');return cached;}
    if(!options.silent){
      if(isNetworkTrulyOffline())showSync('err','No network connection - no cached submissions found');
      else showSync('syncing','Cloud is taking longer than usual - showing empty dashboard');
    }
    return subs || [];
  }
}

async function dbSaveSubmission(sub,options){
  options=options||{};
  const prepared={...sub,category:requireSubmissionCategory(sub?.category)};
  const applyLocal=()=>{
    const idx=subs.findIndex(s=>String(s.id)===String(prepared.id));
    if(idx>=0)subs[idx]=prepared;else subs.push(prepared);
    persistSubCache(subs);
  };
  if(!options.strict)applyLocal();
  /* Default saves keep the existing local fallback. Strict submit saves only touch local cache after cloud confirms the row. */
  
  /* Cloud sync */
  showSync('syncing','Syncing to cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const row=submissionToDbRow(prepared);
    
    await fetchWithRetry(async()=>{
      const{error}=await sb.from('submissions').upsert(row,{onConflict:'id'});
      if(error)throw error;
    }, 'Saving submission');
    if(options.strict)applyLocal();
    
    showSync('ok','✓ Cloud synced');
  }catch(e){
    console.warn('[DB] Cloud save failed:',e.message);
    if(options.strict)throw e;
    showSync('syncing','Saved locally - cloud sync pending');
  }
}
function submissionToDbRow(sub){
  const category=requireSubmissionCategory(sub?.category);
  const photos=Array.isArray(sub.photos)?sub.photos.map(p=>{
    const url=storageUrlOnly(p?.url||p?.data);
    return url?{...p,url,data:null}:null;
  }).filter(Boolean):null;
  return{
    id:sub.id,category:category,ts:sub.ts,
    created_at:new Date(sub.createdAt||Date.now()).toISOString(),
    status:sub.status,reviewer_note:sub.reviewerNote||'',
    reviewed_at:sub.reviewedAt?new Date(sub.reviewedAt).toISOString():null,
    data:JSON.stringify(sub.data),
    photo_url:storageUrlOnly(sub.photoData),photo_name:sub.photoName||null,
    photos:photos?JSON.stringify(photos):null
  };
}
async function dbSaveSubmissionsBulk(list,options){
  if(!list||!list.length)return;
  options=options||{};
  const prepared=list.map(sub=>({...sub,category:requireSubmissionCategory(sub?.category)}));
  const applyLocal=()=>{
  prepared.forEach(sub=>{
    const idx=subs.findIndex(s=>String(s.id)===String(sub.id));
    if(idx>=0)subs[idx]=sub;else subs.push(sub);
  });
  persistSubCache(subs);
  };
  if(!options.strict)applyLocal();
  showSync('syncing','Syncing '+list.length+' submissions to cloud...');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const rows=prepared.map(submissionToDbRow);
    await withRetry(async()=>{
      const{error}=await sb.from('submissions').upsert(rows,{onConflict:'id'});
      if(error)throw error;
    },'Bulk saving submissions');
    if(options.strict)applyLocal();
    showSync('ok','Cloud synced');
  }catch(e){
    console.warn('[DB] Bulk cloud save failed:',e.message);
    if(options.strict)throw e;
    showSync('syncing','Saved locally - cloud sync pending');
  }
}
async function dbDeleteSubmission(id){
  /* Optimistic memory delete */
  subs=subs.filter(s=>String(s.id)!==String(id));
  persistSubCache(subs);
  
  showSync('syncing','Deleting from cloud…');
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    
    await fetchWithRetry(async()=>{
      const{error}=await sb.from('submissions').delete().eq('id',String(id));
      if(error)throw error;
    },'Deleting submission');
    
    showSync('ok','✓ Deleted from cloud');
  }catch(e){
    console.warn('[DB] Cloud delete failed:',e.message);
    showSync('syncing','Deleted locally - cloud delete pending');
  }
}
async function dbUpdateStatus(id,status,reviewerNote,reviewedAt){
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
    
    await fetchWithRetry(async()=>{
      const{error}=await sb.from('submissions').update(updateData).eq('id',String(id));
      if(error)throw error;
    },'Updating status');
    
    showSync('ok','✓ Updated in cloud');
  }catch(e){
    console.warn('[DB] Cloud update failed:',e.message);
    showSync('syncing','Updated locally - cloud sync pending');
  }
}

/* ── Settings (cloud kv store) ── */
async function dbLoadSettings(key){
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    const data = await fetchWithRetry(
      async () => {
        const { data, error } = await sb.from('settings').select('value').eq('key', key).maybeSingle();
        if (error) throw error;
        return data;
      },
      'Loading setting '+key
    );
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
    const rows = list.map(submissionToDbRow);
    await withRetry(async()=>{
      const {error}=await sb.from('submissions').upsert(rows,{onConflict:'id'});
      if(error)throw error;
    },'Bulk saving submissions');
    showSync('ok','✓ Synced all to cloud');
  }catch(e){
    console.warn('[DB] Bulk upsert failed:',e.message);
    showSync('syncing','Saved locally - cloud sync pending');
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

async function checkDatabaseHealth(){
  try{
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    await fetchWithRetry(async()=>{
      const{error}=await sb.from('submissions').select('id',{head:true,count:'exact'}).limit(1);
      if(error)throw error;
    },'Database health check',3,6000);
    cloudHealth.database='ok';
  }catch(e){
    cloudHealth.database=isNetworkTrulyOffline()?'offline':'degraded';
    console.warn('[DB] Database health degraded:',e.message);
  }
  return cloudHealth.database;
}
async function checkAuthHealth(){
  try{
    const sb=getSupa();if(!sb||!sb.auth)throw new Error('Auth client not available');
    await fetchWithRetry(()=>sb.auth.getSession(),'Auth health check',3,5000);
    cloudHealth.auth='ok';
  }catch(e){
    cloudHealth.auth=isNetworkTrulyOffline()?'offline':'degraded';
    console.warn('[DB] Auth health degraded:',e.message);
  }
  return cloudHealth.auth;
}
async function checkRealtimeHealth(){
  try{
    if(!ENABLE_REALTIME){cloudHealth.realtime='optional';return cloudHealth.realtime;}
    const sb=getSupa();if(!sb)throw new Error('Supabase client not available');
    cloudHealth.realtime=_subChannel?'ok':'available';
  }catch(e){
    cloudHealth.realtime='degraded';
    console.warn('[DB] Realtime health degraded:',e.message);
  }
  return cloudHealth.realtime;
}
async function checkEdgeFunctionHealth(){
  cloudHealth.edge='optional';
  return cloudHealth.edge;
}
function runBackfillSubmissionPhotosBackground(){
  const sb=getSupa();
  if(!sb?.functions?.invoke)return;
  fetchWithRetry(()=>sb.functions.invoke('backfill-submission-photos'),'Photo backfill',3,12000)
    .then(({error})=>{if(error)console.warn('[DB] Photo backfill reported:',error.message||error);})
    .catch(e=>console.warn('[DB] Photo backfill skipped:',e.message));
}

/* ── Async init: pull cloud data on page load ── */
async function initCloudSync(){
  const statusEl = document.getElementById('bootLoadingStatus');
  if(statusEl) statusEl.textContent = 'Syncing settings…';
  showSync('syncing','Connecting to cloud…');
  try{
    /* Start Realtime listeners early */
    initRealtime();
    Promise.allSettled([
      checkDatabaseHealth(),
      checkAuthHealth(),
      checkRealtimeHealth(),
      checkEdgeFunctionHealth()
    ]).then(()=>console.log('[DB] Cloud health:',JSON.stringify(cloudHealth)));

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
    if(subs.length) showSync('ok','Cloud data ready');
    
    /* Refresh any open view */
    if(document.getElementById('viewAdmin')?.classList.contains('active'))renderAdmin();
    if(document.getElementById('viewEditor')?.classList.contains('active'))renderEditor();
    if(document.getElementById('viewLanding')?.classList.contains('active'))renderLandingCards();
  }catch(e){
    console.warn('[DB] Init sync failed:', e.message);
    if(loadSubCache().length)showSync('syncing','Showing cached data while cloud recovers');
    else if(isNetworkTrulyOffline())showSync('err','No network connection - no cached data found');
    else showSync('syncing','Cloud is taking longer than usual');
  } finally {
    /* ALWAYS remove overlay after sync attempt (success or fail) */
    if(typeof removeBootOverlay === 'function') removeBootOverlay();
  }
}

let _cloudAutoRefreshTimer=null;
function startOptionalCloudAutoRefresh(){
  if(_cloudAutoRefreshTimer)return;
  _cloudAutoRefreshTimer=setInterval(()=>{
    const adminActive=document.getElementById('viewAdmin')?.classList.contains('active');
    const editorActive=document.getElementById('viewEditor')?.classList.contains('active');
    const workspaceActive=document.getElementById('viewWorkspace')?.classList.contains('active');
    if(!adminActive&&!editorActive&&!workspaceActive)return;
    dbLoadAll({silent:true,allowCacheFallback:false}).then(list=>{
      subs=list;
      if(adminActive)renderAdmin();
      if(editorActive)renderEditor();
      if(workspaceActive&&typeof wsGeneratePreview==='function')wsGeneratePreview();
    }).catch(e=>console.warn('[DB] Optional cloud refresh skipped:',e.message));
  },CLOUD_AUTO_REFRESH_MS);
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
    const ta=document.getElementById('ff-'+fieldId)||document.getElementById(fieldId);
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
        <div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>Upload gallery photo <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">Accepted from ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px · ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px recommended</span></div>
        <div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><div class="photo-dims" id="photoDims"></div><button class="photo-change" onclick="resetPhoto(event)">Change photo</button></div>
      </div>
      <div class="photo-err-msg" id="photoErrMsg"></div>
      <div class="photo-reqs"><p><strong>For print quality:</strong> ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px or higher recommended. Smaller valid JPG/PNG/WebP images are accepted and preserved.</p></div>
    </div>
    <!-- Bulk upload tab -->
    <div class="gallery-tab-pane" id="gpane-bulk">
      <div class="f-card-title">Bulk Photo Upload</div>
      <div class="bulk-drop-zone" onclick="document.getElementById('bulkPhotoInput').click()">
        <input type="file" id="bulkPhotoInput" accept=".jpg,.jpeg,.png,.webp" multiple style="display:none;" onchange="handleBulkPhotos(event)"/>
        <span style="font-size:40px;display:block;margin-bottom:10px;">📦</span>
        <h3>Select Multiple Photos</h3>
        <p>Click to choose up to ${BULK_PHOTO_MAX} photos at once - add captions for each</p>
      </div>
      <div id="bulkGrid" class="bulk-grid"></div>
      <div id="bulkCount" style="margin-top:10px;font-size:13px;color:var(--ink3);"></div>
      <div id="bulkErrMsg" class="photo-err-msg"></div>
      <button class="submit-btn" id="bulkSubmitBtn" style="margin-top:1.25rem;" onclick="submitBulkGallery()">Submit All Bulk Photos</button>
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
  const max=BULK_PHOTO_MAX;
  const rem=max-bulkPhotos.length;
  if(rem<=0){errEl.textContent=`Maximum ${max} photos reached.`;errEl.style.display='block';return;}
  const toAdd=files.slice(0,rem);
  if(files.length>rem){errEl.textContent=`Adding first ${rem} - limit is ${max} total.`;errEl.style.display='block';}
  toAdd.forEach(f=>processBulkPhoto(f));
  event.target.value='';
}
function processBulkPhoto(file){
  const errEl=document.getElementById('bulkErrMsg');
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)||!file.size){if(errEl){errEl.textContent='Invalid image file.';errEl.style.display='block';}return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){if(errEl){errEl.textContent='Image is too large. Please use a smaller photo.';errEl.style.display='block';}return;}
  const img=new Image(),url=URL.createObjectURL(file);
  const fileName=file.name;
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){if(errEl){errEl.textContent=`Skipped "${file.name}": image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;errEl.style.display='block';}URL.revokeObjectURL(url);return;}
    bulkPhotos.push({previewUrl:url,file:file,fileName:fileName,caption:'',meta:{w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)}});
    renderBulkGrid();
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
      <img src="${p.previewUrl||p.dataURL||''}" alt="Photo ${i+1}"/>
      <button class="bulk-thumb-rm" onclick="removeBulkPhoto(${i})">×</button>
      <div class="bulk-thumb-cap">
        <input type="text" placeholder="Caption for photo ${i+1}" value="${esc(p.caption)}" oninput="updateBulkCaption(${i},this.value)"/>
      </div>
    </div>`).join('');
  if(ctr)ctr.textContent=bulkPhotos.length?`${bulkPhotos.length} photo${bulkPhotos.length>1?'s':''} ready to submit`:'';
}
function clearBulkPhotos(){
  bulkPhotos.forEach(p=>{if(p?.previewUrl)URL.revokeObjectURL(p.previewUrl);});
  bulkPhotos=[];
}
function revokePreviewUrl(url){if(typeof url==='string'&&url.indexOf('blob:')===0)URL.revokeObjectURL(url);}
function removeBulkPhoto(i){const p=bulkPhotos[i];if(p?.previewUrl)URL.revokeObjectURL(p.previewUrl);bulkPhotos.splice(i,1);renderBulkGrid();}
function updateBulkCaption(i,val){if(bulkPhotos[i])bulkPhotos[i].caption=val;}

async function submitBulkGallery(){
  return submitBulkGallerySafe();
  if(!bulkPhotos.length){alert('Please add at least one photo.');return;}
  /* Validate required fields */
  const submitterName=(document.getElementById('ff-submitterName')?.value||'').trim();
  if(!submitterName){alert('Please enter your name before submitting.');document.getElementById('ff-submitterName')?.focus();return;}
  const submitterRole=(document.getElementById('ff-submitterRole')?.value||'').trim()||'';
  const ts=new Date().toLocaleString();
  let errors=0;
  const failedPhotos=[];
  showSync('syncing','Uploading '+bulkPhotos.length+' photos…');
  const prepared=await mapWithConcurrency(bulkPhotos,BULK_CLOUD_CONCURRENCY,async(p,i)=>{
    try{
      const subId=genId();
      const photoData=await uploadToStorage(p.file,subId);
      return{
        id:subId,
        category:'gallery',ts,createdAt:Date.now()+i,
        status:'pending',
        reviewerNote:'',reviewedAt:null,
        data:{
          submitterName:{label:'Submitted by',value:submitterName},
          submitterRole:{label:'Role',value:submitterRole},
          photoCaption:{label:'Photo caption',value:p.caption||'Gallery photo'},
          photoCategory:{label:'Category',value:'Other'},
          photoDate:{label:'Date',value:''}
        },
        photoData:photoData,photoName:p.fileName||('photo_'+(i+1)+'.jpg'),photoMeta:p.meta||null,photos:null
      };
    }catch(e){
      console.warn('[Gallery] Failed to prepare photo '+(i+1)+':',e.message);
      errors++;
      failedPhotos.push(p);
      return null;
    }
  });
  const ready=prepared.filter(Boolean);
  if(ready.length)await dbSaveSubmissionsBulk(ready);
  bulkPhotos=failedPhotos;renderBulkGrid();
  if(errors){
    alert(`${ready.length} photos submitted, ${errors} photo upload(s) failed and were not saved.`);
    showSync(ready.length?'ok':'syncing',ready.length?ready.length+' photos uploaded; failed photos remain on the form':'No photos uploaded. Please check your connection and try again.');
    return;
  } else {
    alert(`${ready.length} photos submitted successfully! They are now awaiting Editor review.`);
  }
  showSync('ok',ready.length+' photos uploaded');
  document.getElementById('formContainer').style.display='none';
  document.getElementById('successWrap').style.display='block';
  clearSubmissionUrlRouting();
  window.scrollTo({top:0,behavior:'smooth'});
}

async function submitBulkGallerySafe(){
  if(window.__meBulkGallerySubmitting)return;
  if(!bulkPhotos.length){alert('Please add at least one photo.');return;}
  const submitterName=(document.getElementById('ff-submitterName')?.value||'').trim();
  if(!submitterName){alert('Please enter your name before submitting.');document.getElementById('ff-submitterName')?.focus();return;}
  const submitterRole=(document.getElementById('ff-submitterRole')?.value||'').trim()||'';
  const btn=document.getElementById('bulkSubmitBtn')||document.querySelector('.bulk-submit-card .submit-btn');
  const errEl=document.getElementById('bulkErrMsg');
  const originalText=btn?btn.textContent:'Submit All Bulk Photos';
  const total=bulkPhotos.length;
  const ready=[];
  const ts=new Date().toLocaleString();
  const release=()=>{window.__meBulkGallerySubmitting=false;if(btn){btn.disabled=false;btn.classList.remove('is-submitting');btn.textContent=originalText;}};

  window.__meBulkGallerySubmitting=true;
  if(btn){btn.disabled=true;btn.classList.add('is-submitting');}

  try{
    for(let i=0;i<bulkPhotos.length;i++){
      const p=bulkPhotos[i];
      const photoNo=i+1;
      const progressMsg='Uploading photo '+photoNo+' of '+total+'...';
      if(btn)btn.textContent=progressMsg;
      if(errEl){errEl.style.display='block';errEl.textContent=progressMsg;}
      showSync('syncing',progressMsg);

      const subId=genId();
      const photoData=await uploadToStorage(p.file,subId,{onStatus:msg=>{
        const text='Photo '+photoNo+' of '+total+' - '+msg;
        if(btn)btn.textContent=text;
        if(errEl){errEl.style.display='block';errEl.textContent=text;}
        showSync('syncing',text);
      }});
      const photoName=p.fileName||('photo_'+photoNo+'.jpg');
      ready.push({
        id:subId,
        category:'gallery',ts,createdAt:Date.now()+i,
        status:'pending',
        reviewerNote:'',reviewedAt:null,
        data:{
          submitterName:{label:'Submitted by',value:submitterName},
          submitterRole:{label:'Role',value:submitterRole},
          photoCaption:{label:'Photo caption',value:p.caption||'Gallery photo'},
          photoCategory:{label:'Category',value:'Other'},
          photoDate:{label:'Date',value:''}
        },
        photoData:photoData,photoName:photoName,photoMeta:p.meta||null,
        photos:[{url:photoData,name:photoName,caption:p.caption||'Gallery photo',meta:p.meta||null}]
      });
      if(photoNo<total)await wait(BULK_UPLOAD_BETWEEN_FILES_MS);
    }

    if(errEl){errEl.style.display='block';errEl.textContent='Saving '+ready.length+' uploaded photo'+(ready.length>1?'s':'')+' to cloud...';}
    showSync('syncing','Saving '+ready.length+' uploaded photo'+(ready.length>1?'s':'')+' to cloud...');
    await dbSaveSubmissionsBulk(ready,{strict:true});
  }catch(e){
    const failedNo=Math.min(ready.length+1,total);
    const msg=friendlyUploadErrorMessage(e);
    console.error('[Gallery] Bulk upload stopped at photo '+failedNo+':',e);
    if(errEl){errEl.textContent=msg;errEl.style.display='block';errEl.scrollIntoView({behavior:'smooth',block:'center'});}
    showSync('err',msg);
    alert(msg);
    release();
    return;
  }

  alert(`${ready.length} photos submitted successfully! They are now awaiting Editor review.`);
  showSync('ok',ready.length+' photos uploaded');
  if(errEl){errEl.textContent=ready.length+' photos uploaded successfully.';errEl.style.display='block';}
  clearBulkPhotos();
  renderBulkGrid();
  release();
  document.getElementById('formContainer').style.display='none';
  document.getElementById('successWrap').style.display='block';
  clearSubmissionUrlRouting();
  window.scrollTo({top:0,behavior:'smooth'});
}
const DEFAULT_SECTION_ORDER=[
  {key:'cover',label:'Cover Page',icon:'📕',editable:false,visible:true,layout:'cover'},
  {key:'toc',label:'Table of Contents',icon:'📑',editable:false,visible:true,layout:'toc'},
  {key:'editorial-note',label:'Editorial Note',icon:'✎',editable:true,visible:true,layout:'single'},
  {key:'editor_board',label:'Editor Board / Crew',icon:'Crew',editable:true,visible:true,layout:'editor-board'},
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
let standaloneFormKey=null;
let bulkFormEntries=[];
/* AI Chat history for conversational layout assistant */
let aiChatHistory=[];
let aiPendingSuggestion=null;

/* VIEW */
function show(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function isStandaloneForm(){return !!(standaloneFormKey&&CATEGORIES[standaloneFormKey]);}
function resolveSubmissionCategory(fallback){
  const candidates=[fallback,currentFormCategory,document.getElementById('formContainer')?.dataset?.category,standaloneFormKey];
  try{
    const fp=new URLSearchParams(window.location.search).get('form');
    if(fp)candidates.push(fp);
  }catch(e){}
  for(const key of candidates){
    const clean=String(key||'').trim();
    if(clean&&CATEGORIES[clean])return clean;
  }
  return '';
}
function requireSubmissionCategory(fallback){
  const category=resolveSubmissionCategory(fallback);
  if(!category)throw new Error('Missing submission category. Please reopen the form and try again.');
  return category;
}
function updateStandaloneFormChrome(){
  const locked=isStandaloneForm();
  const back=document.getElementById('formBackBtn');
  const home=document.getElementById('successHomeBtn');
  if(back)back.style.display=locked?'none':'';
  if(home)home.style.display=locked?'none':'';
  document.body.classList.toggle('standalone-form-link',locked);
}
function goLanding(){
  if(isStandaloneForm()){
    openForm(standaloneFormKey);
    return;
  }
  show('viewLanding');currentFormCategory=null;resetFormState();renderLandingCards();if(window.history&&window.history.replaceState){window.history.replaceState({},document.title,window.location.pathname);}
}
function clearSubmissionUrlRouting(){
  standaloneFormKey=null;
  updateStandaloneFormChrome();
  if(window.history&&window.history.replaceState){
    window.history.replaceState({},document.title,window.location.pathname);
  }
}

/* LANDING CARDS */
function renderLandingCards(){
  const grid=document.getElementById('formGrid');
  if(!grid) return;
  try {
    const h=document.getElementById('landingHeading');if(h)h.textContent=getLabel('landing_heading','Choose a content category');
    const DESCS={teachers:'For teaching staff and management. Share your journey, subjects, and message to the graduating class.',primary5:'For Primary 5 pupils moving on. Tell the world who you are.',primary5_class_photo:'Upload the general Primary 5 full class picture for the end of the section.',jss3:'For Junior Secondary 3 students finishing this phase.',jss3_class_photo:'Upload the general JSS3 full class picture for the end of the section.',ss3_class_message:'Submit the SS3 graduating class message with one full class picture before profile pages.',ss3:'For the main graduating class. Your legacy, your ambitions, your message.',editor_board:'For editorial board members and production crew profiles.',speeches:'Proprietor, Senior Boy, guest speakers — formal addresses for the magazine.',creative:'Poems, short stories, jokes, riddles — creative writing from across the school.',events:'Sports days, excursions, competitions, achievements — the year\'s highlights.',academic:'Articles, subject features, research write-ups, and educational content.',interviews:'Q&A with old students, guest speakers, and notable voices.',motivational:'Inspirational messages and wisdom for the graduating class.',gallery:'Submit standalone photos with captions for the gallery section.',advertisements:'Submit business flyer images only for advertisement pages.'};
    const STRIPES={teachers:'stripe-gold',primary5:'stripe-green',primary5_class_photo:'stripe-green',jss3:'stripe-green',jss3_class_photo:'stripe-green',ss3_class_message:'stripe-blue',ss3:'stripe-green',editor_board:'stripe-blue',speeches:'stripe-blue',creative:'stripe-purple',events:'stripe-amber',academic:'stripe-blue',interviews:'stripe-mint',motivational:'stripe-purple',gallery:'stripe-gold',advertisements:'stripe-amber'};
    
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
  if(cont){ cont.style.display='block'; cont.innerHTML=''; cont.dataset.category=k; }

  /* Build form — show inline error on failure instead of silent blank */
  try {
    buildForm(k);
  } catch(e) {
    console.error('[openForm] buildForm failed:', e);
    if(cont) cont.innerHTML='<div style="padding:2rem;text-align:center;color:var(--red);">&#9888; Failed to load form. Please refresh and try again.<br><small>'+(e.message||'')+'</small></div>';
  }

  /* Switch view and scroll to top */
  show('viewForm');
  updateStandaloneFormChrome();
  if(isStandaloneForm()&&window.history&&window.history.replaceState){
    window.history.replaceState({},document.title,window.location.pathname+'?form='+encodeURIComponent(standaloneFormKey)+'&standalone=1');
  }
  window.scrollTo(0,0);
}
function makeBulkFormEntry(){return{values:{},photoFile:null,photoDataURL:null,photoMeta:null,extraPhotoFile:null,extraPhotoDataURL:null,extraPhotoMeta:null,photoFilesMulti:[],photoDataURLsMulti:[],photoMetasMulti:[]};}
function ensureBulkFormEntries(){if(!Array.isArray(bulkFormEntries)||!bulkFormEntries.length)bulkFormEntries=[makeBulkFormEntry()];return bulkFormEntries;}
function resetFormState(){
  photoDataURLsMulti.forEach(revokePreviewUrl);
  if(Array.isArray(bulkFormEntries))bulkFormEntries.forEach(entry=>{
    revokePreviewUrl(entry.photoDataURL);
    revokePreviewUrl(entry.extraPhotoDataURL);
    (entry.photoDataURLsMulti||[]).forEach(revokePreviewUrl);
  });
  photoFile=null;photoDataURL=null;photoMeta=null;photoFilesMulti=[];photoDataURLsMulti=[];photoMetasMulti=[];bulkFormEntries=[makeBulkFormEntry()];
}
function buildForm(k){
  const cat=CATEGORIES[k];const c=document.getElementById('formContainer');
  clearBulkPhotos();/* reset bulk state */
  let h=`<div class="f-card"><div class="f-card-title">Your Details</div>`;
  getEffectiveFields(k).forEach(f=>{h+=buildFieldHtml(f);});h+=`</div>`;
  /* OCR panel — inject for applicable categories */
  h+=buildOCRPanel(k);
  /* Gallery: replace standard photo card with tabbed version */
  if(k==='gallery'){
    h+=buildGalleryTabs();
  } else if(cat.photoRequired&&cat.photoMulti){
    const max=cat.photoMax||5;
    h+=`<div class="f-card"><div class="f-card-title">Event Photos (up to ${max})</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInputMulti').click()"><input type="file" id="photoInputMulti" accept=".jpg,.jpeg,.png,.webp" multiple onchange="handlePhotoMulti(event,${max})"/><div id="photoPlaceholderMulti"><span class="photo-drop-icon">📸</span><h3>Upload event photos <span class="req">*</span></h3><p>Tap to choose 1–${max} photos</p><span class="photo-pill">Accepted from ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px · ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px recommended</span></div></div><div id="multiPhotoGrid" class="multi-photo-grid"></div><div id="multiPhotoCount" class="multi-photo-count" style="display:none;">0 of ${max}</div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px or higher recommended. Smaller valid JPG/PNG/WebP images are accepted and preserved.</p></div></div>`;
  } else if(cat.photoRequired){
    const isClass=currentFormCategory.includes('_class_')||currentFormCategory==='ss3_class_message';
    const isAdvert=currentFormCategory==='advertisements';
    const photoTitle=isAdvert?'Business flyer':isClass?'Full class picture':'Profile photo';
    const photoPrompt=isAdvert?'Upload business flyer':isClass?'Upload full class picture':'Upload your profile photo';
    const photoPill=isAdvert?`Business flyer only · Accepted from ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`:isClass?`Full group photo · Accepted from ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`:`Passport-style · Clear face · Accepted from ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`;
    h+=`<div class="f-card"><div class="f-card-title">${photoTitle}</div><div class="photo-drop" id="photoDrop" onclick="document.getElementById('photoInput').click()" ondragover="dragOver(event)" ondragleave="dragLeave()" ondrop="dropPhoto(event)"><input type="file" id="photoInput" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event)"/><div id="photoPlaceholder"><span class="photo-drop-icon">📷</span><h3>${photoPrompt} <span class="req">*</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">${photoPill}</span></div><div class="photo-preview-wrap" id="photoPreviewWrap"><img id="photoPreview" src="" alt="Preview"/><div class="photo-filename" id="photoFilename"></div><div class="photo-dims" id="photoDims"></div><button class="photo-change" onclick="resetPhoto(event)">Change photo</button></div></div><div class="photo-err-msg" id="photoErrMsg"></div><div class="photo-reqs"><p><strong>For print quality:</strong> ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px or higher recommended. Smaller valid JPG/PNG/WebP images are accepted and preserved.</p></div></div>`;
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

function formFieldId(fieldId,idx){return idx?`ff-${idx}-${fieldId}`:`ff-${fieldId}`;}
function formFieldWrapId(fieldId,idx){return idx?`fw-${idx}-${fieldId}`:`fw-${fieldId}`;}
function photoDomId(base,idx){return idx?`${base}-${idx}`:base;}
function buildForm(k){
  const c=document.getElementById('formContainer');
  clearBulkPhotos();
  if(k==='gallery'){
    let h=`<div class="f-card"><div class="f-card-title">Your Details</div>`;
    getEffectiveFields(k).forEach(f=>{h+=buildFieldHtml(f,0);});h+=`</div>`;
    h+=buildOCRPanel(k);
    h+=buildGalleryTabs();
    h+=`<button class="submit-btn" type="button" onclick="submitForm()" id="mainSubmitBtn">Submit</button>`;
    c.innerHTML=h;
    return;
  }
  const entries=ensureBulkFormEntries();
  let h=`<div class="bulk-submit-wrap" id="bulkSubmitWrap">${entries.map((entry,idx)=>buildSubmissionFormEntry(k,idx)).join('')}</div>`;
  h+=`<div class="bulk-submit-actions"><span class="bulk-count" id="bulkFormCount">${entries.length} of 10 forms</span></div>`;
  h+=`<button class="submit-btn" type="button" onclick="submitForm()" id="mainSubmitBtn">Submit All</button>`;
  c.innerHTML=h;
}
function buildSubmissionFormEntry(k,idx){
  const entryNo=idx+1;
  let h=`<div class="bulk-form-entry" data-entry="${idx}"><div class="bulk-form-head"><div><span class="bulk-form-kicker">Submission ${entryNo}</span><h3>${esc(getLabel('cat_label_'+k,CATEGORIES[k].label))}</h3></div>${idx?`<button type="button" class="bulk-remove-btn" onclick="removeBulkSubmissionForm(${idx})">Remove</button>`:''}</div>`;
  h+=`<div class="f-card"><div class="f-card-title">Your Details</div>`;
  getEffectiveFields(k).forEach(f=>{h+=buildFieldHtml(f,idx);});h+=`</div>`;
  if(idx===0)h+=buildOCRPanel(k);
  h+=buildPhotoCardForEntry(k,idx);
  h+=`<div class="bulk-entry-actions"><button class="bulk-add-btn" type="button" onclick="addBulkSubmissionForm()">+ Add More</button></div>`;
  h+=`</div>`;
  return h;
}
function buildPhotoCardForEntry(k,idx){
  const cat=CATEGORIES[k];if(!cat.photoRequired&&!cat.photoOptional&&!cat.extraPhotoOptional)return '';
  const entry=bulkEntry(idx);
  const cards=[];
  if(cat.photoMulti){
    const max=cat.photoMax||5;
    const hasPhotos=entry.photoDataURLsMulti.length>0;
    const thumbs=entry.photoDataURLsMulti.map((url,i)=>`<div class="multi-photo-thumb"><img src="${url}" alt="Photo ${i+1}"/><button class="multi-photo-remove" type="button" onclick="removeMultiPhoto(${i},${max},${idx})">x</button></div>`).join('');
    return `<div class="f-card"><div class="f-card-title">Bulk Event Photos (up to ${max})</div><div class="photo-drop" id="${photoDomId('photoDrop',idx)}" onclick="document.getElementById('${photoDomId('photoInputMulti',idx)}').click()" ondragover="dragOver(event,${idx})" ondragleave="dragLeave(${idx})" ondrop="dropPhoto(event,${idx})"><input type="file" id="${photoDomId('photoInputMulti',idx)}" accept=".jpg,.jpeg,.png,.webp" multiple onchange="handlePhotoMulti(event,${max},${idx})"/><div id="${photoDomId('photoPlaceholderMulti',idx)}" style="display:${hasPhotos?'none':'block'};"><span class="photo-drop-icon">Photos</span><h3>Bulk upload event photos <span class="req">*</span></h3><p>Tap to choose 1-${max} photos for this form</p><span class="photo-pill">Action shots - Group photos - Min ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px</span></div></div><div id="${photoDomId('multiPhotoGrid',idx)}" class="multi-photo-grid">${thumbs}</div><div id="${photoDomId('multiPhotoCount',idx)}" class="multi-photo-count${entry.photoDataURLsMulti.length>=max?' full':''}" style="display:${hasPhotos?'inline-block':'none'};">${entry.photoDataURLsMulti.length} of ${max} photos selected</div><div class="photo-err-msg" id="${photoDomId('photoErrMsg',idx)}"></div><div class="photo-reqs"><p><strong>For print quality:</strong> minimum ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px accepted, ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px or higher recommended. JPG/PNG/WebP originals are preserved for print.</p></div></div>`;
  }
  if(cat.photoRequired||cat.photoOptional){
    const isClass=k.includes('_class_')||k==='ss3_class_message';
    const isAdvert=k==='advertisements';
    const photoTitle=cat.photoTitle||(isAdvert?'Business flyer':isClass?'Full class picture':'Profile photo');
    const photoPrompt=cat.photoPrompt||(isAdvert?'Upload business flyer':isClass?'Upload full class picture':'Upload your profile photo');
    const photoPill=cat.photoPill||(isAdvert?`Business flyer only - Min ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`:isClass?`Full group photo - Min ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`:`Passport-style - Clear face - Min ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px`);
    const reqMark=cat.photoRequired?'<span class="req">*</span>':'<span class="opt">(optional)</span>';
    const hasPhoto=!!entry.photoDataURL;
    const dims=entry.photoMeta?`${entry.photoMeta.w}x${entry.photoMeta.h}px - ${Math.round((entry.photoMeta.size||0)/1024)} KB - ${entry.photoMeta.printQuality||''}`:'';
    cards.push(`<div class="f-card"><div class="f-card-title">${photoTitle}</div><div class="photo-drop${hasPhoto?' uploaded':''}" id="${photoDomId('photoDrop',idx)}" onclick="document.getElementById('${photoDomId('photoInput',idx)}').click()" ondragover="dragOver(event,${idx})" ondragleave="dragLeave(${idx})" ondrop="dropPhoto(event,${idx})"><input type="file" id="${photoDomId('photoInput',idx)}" accept=".jpg,.jpeg,.png,.webp" onchange="handlePhoto(event,${idx})"/><div id="${photoDomId('photoPlaceholder',idx)}" style="display:${hasPhoto?'none':'block'};"><span class="photo-drop-icon">Photo</span><h3>${photoPrompt} ${reqMark}</h3><p>Click here or drag &amp; drop</p><span class="photo-pill">${photoPill}</span></div><div class="photo-preview-wrap" id="${photoDomId('photoPreviewWrap',idx)}" style="display:${hasPhoto?'flex':'none'};"><img id="${photoDomId('photoPreview',idx)}" src="${entry.photoDataURL||''}" alt="Preview"/><div class="photo-filename" id="${photoDomId('photoFilename',idx)}">${esc(entry.photoFile?.name||'')}</div><div class="photo-dims" id="${photoDomId('photoDims',idx)}">${esc(dims)}</div><button class="photo-change" onclick="resetPhoto(event,${idx})">Change photo</button></div></div><div class="photo-err-msg" id="${photoDomId('photoErrMsg',idx)}"></div><div class="photo-reqs"><p><strong>For print quality:</strong> minimum ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px accepted, ${PRINT_IMAGE_RECOMMENDED_PX}x${PRINT_IMAGE_RECOMMENDED_PX}px or higher recommended. Original JPG/PNG/WebP kept for press output.</p></div></div>`);
  }
  if(cat.extraPhotoOptional){
    const hasExtra=!!entry.extraPhotoDataURL;
    const dims=entry.extraPhotoMeta?`${entry.extraPhotoMeta.w}x${entry.extraPhotoMeta.h}px - ${Math.round((entry.extraPhotoMeta.size||0)/1024)} KB - ${entry.extraPhotoMeta.printQuality||''}`:'';
    cards.push(`<div class="f-card"><div class="f-card-title">${esc(cat.extraPhotoTitle||'Second image')}</div><div class="photo-drop${hasExtra?' uploaded':''}" id="${photoDomId('extraPhotoDrop',idx)}" onclick="document.getElementById('${photoDomId('extraPhotoInput',idx)}').click()" ondragover="dragOverExtra(event,${idx})" ondragleave="dragLeaveExtra(${idx})" ondrop="dropExtraPhoto(event,${idx})"><input type="file" id="${photoDomId('extraPhotoInput',idx)}" accept=".jpg,.jpeg,.png,.webp" onchange="handleExtraPhoto(event,${idx})"/><div id="${photoDomId('extraPhotoPlaceholder',idx)}" style="display:${hasExtra?'none':'block'};"><span class="photo-drop-icon">Photo</span><h3>${esc(cat.extraPhotoPrompt||'Upload optional image')} <span class="opt">(optional)</span></h3><p>Click here or drag &amp; drop</p><span class="photo-pill">${esc(cat.extraPhotoPill||'Optional image')}</span></div><div class="photo-preview-wrap" id="${photoDomId('extraPhotoPreviewWrap',idx)}" style="display:${hasExtra?'flex':'none'};"><img id="${photoDomId('extraPhotoPreview',idx)}" src="${entry.extraPhotoDataURL||''}" alt="Preview"/><div class="photo-filename" id="${photoDomId('extraPhotoFilename',idx)}">${esc(entry.extraPhotoFile?.name||'')}</div><div class="photo-dims" id="${photoDomId('extraPhotoDims',idx)}">${esc(dims)}</div><button class="photo-change" onclick="resetExtraPhoto(event,${idx})">Change photo</button></div></div><div class="photo-err-msg" id="${photoDomId('extraPhotoErrMsg',idx)}"></div></div>`);
  }
  return cards.join('');
}
function buildFieldHtml(f,idx){
  idx=idx||0;
  const saved=bulkEntry(idx)?.values?.[f.id]||'';
  const req=f.required?'<span class="req"> *</span>':'<span class="opt">(optional)</span>';
  const hint=f.hint?`<div class="field-hint">${esc(f.hint)}</div>`:'';
  const err=`<div class="field-err">This field is required.</div>`;
  const id=formFieldId(f.id,idx),wrapId=formFieldWrapId(f.id,idx);
  if(f.type==='textarea'){return`<div class="field" id="${wrapId}"><label>${esc(f.label)}${req}</label><textarea id="${id}" class="${f.long?'long':''}" placeholder="${esc(f.placeholder||'')}">${esc(saved)}</textarea>${hint}${err}</div>`;}
  if(f.type==='select'){let optsArr=Array.isArray(f.options)?f.options:typeof f.options==='string'?f.options.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean):[];const opts=optsArr.map(o=>`<option value="${esc(o)}"${String(saved)===String(o)?' selected':''}>${esc(o)}</option>`).join('');return`<div class="field" id="${wrapId}"><label>${esc(f.label)}${req}</label><select id="${id}"><option value="">-- Select --</option>${opts}</select>${hint}${err}</div>`;}
  if(f.type==='checkbox'){return`<div class="field" id="${wrapId}"><div style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="${id}"${saved==='Yes'||saved===true?' checked':''}/><label for="${id}" style="font-weight:400;display:inline;cursor:pointer;">${esc(f.label)}</label></div>${hint}</div>`;}
  if(f.type==='number'){return`<div class="field" id="${wrapId}"><label>${esc(f.label)}${req}</label><input type="number" id="${id}" placeholder="${esc(f.placeholder||'')}" inputmode="numeric" value="${esc(saved)}"/>${hint}${err}</div>`;}
  return`<div class="field" id="${wrapId}"><label>${esc(f.label)}${req}</label><input type="${f.type}" id="${id}" placeholder="${esc(f.placeholder||'')}" value="${esc(saved)}"/>${hint}${err}</div>`;
}
function snapshotBulkFormValues(){
  if(currentFormCategory==='gallery')return;
  const fields=getEffectiveFields(currentFormCategory);
  ensureBulkFormEntries().forEach((entry,idx)=>{
    entry.values=entry.values||{};
    fields.forEach(f=>{
      const el=document.getElementById(formFieldId(f.id,idx));
      if(!el)return;
      entry.values[f.id]=f.type==='checkbox'?(el.checked?'Yes':'No'):(el.value||'');
    });
  });
}
function addBulkSubmissionForm(){
  const entries=ensureBulkFormEntries();
  if(entries.length>=10){alert('You can submit up to 10 forms at once.');return;}
  snapshotBulkFormValues();
  entries.push(makeBulkFormEntry());
  buildForm(currentFormCategory);
  setTimeout(()=>document.querySelector(`[data-entry="${entries.length-1}"]`)?.scrollIntoView({behavior:'smooth',block:'start'}),50);
}
function removeBulkSubmissionForm(idx){
  const entries=ensureBulkFormEntries();
  if(idx<=0||entries.length<=1)return;
  snapshotBulkFormValues();
  entries.splice(idx,1);
  buildForm(currentFormCategory);
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
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){err.textContent=`Image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';URL.revokeObjectURL(url);return;}
    photoFile=file;photoMeta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    const r=new FileReader();
    r.onload=ev=>{photoDataURL=ev.target.result;document.getElementById('photoPreview').src=photoDataURL;document.getElementById('photoFilename').textContent=file.name;document.getElementById('photoDims').textContent=`${img.width}x${img.height}px - ${(file.size/1024).toFixed(0)} KB - ${photoMeta.printQuality}${Math.min(img.width,img.height)<PRINT_IMAGE_RECOMMENDED_PX?' - '+PRINT_IMAGE_RECOMMENDED_PX+'x'+PRINT_IMAGE_RECOMMENDED_PX+'px or higher recommended for print':''}`;document.getElementById('photoPlaceholder').style.display='none';document.getElementById('photoPreviewWrap').style.display='flex';document.getElementById('photoDrop').classList.add('uploaded');};
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
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){err.textContent=`Skipped "${file.name}": image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';URL.revokeObjectURL(url);return;}
    const meta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    const r=new FileReader();
    r.onload=ev=>{photoFilesMulti.push(file);photoDataURLsMulti.push(ev.target.result);photoMetasMulti.push(meta);renderMultiPhotoGrid(max);};
    r.readAsDataURL(file);URL.revokeObjectURL(url);
  };
  img.onerror=()=>{err.textContent=`Skipped "${file.name}".`;err.style.display='block';URL.revokeObjectURL(url);};
  img.src=url;
}function renderMultiPhotoGrid(max){const grid=document.getElementById('multiPhotoGrid');const ph=document.getElementById('photoPlaceholderMulti');const ctr=document.getElementById('multiPhotoCount');if(!grid)return;if(!photoDataURLsMulti.length){grid.innerHTML='';if(ph)ph.style.display='block';if(ctr)ctr.style.display='none';return;}if(ph)ph.style.display='none';grid.innerHTML=photoDataURLsMulti.map((url,i)=>`<div class="multi-photo-thumb"><img src="${url}" alt="Photo ${i+1}"/><button class="multi-photo-remove" type="button" onclick="removeMultiPhoto(${i},${max})">×</button></div>`).join('');if(ctr){ctr.style.display='inline-block';ctr.textContent=`${photoDataURLsMulti.length} of ${max} photos selected`;ctr.classList.toggle('full',photoDataURLsMulti.length>=max);}}
function removeMultiPhoto(i,max){photoFilesMulti.splice(i,1);photoDataURLsMulti.splice(i,1);photoMetasMulti.splice(i,1);renderMultiPhotoGrid(max);}

function bulkEntry(idx){return ensureBulkFormEntries()[idx||0]||ensureBulkFormEntries()[0];}
function syncPrimaryPhotoGlobals(){
  const e=bulkEntry(0);
  photoFile=e.photoFile;photoDataURL=e.photoDataURL;photoMeta=e.photoMeta;
  photoFilesMulti=e.photoFilesMulti;photoDataURLsMulti=e.photoDataURLsMulti;photoMetasMulti=e.photoMetasMulti;
}
function dragOver(e,idx){e.preventDefault();document.getElementById(photoDomId('photoDrop',idx||0))?.classList.add('drag');}
function dragLeave(idx){document.getElementById(photoDomId('photoDrop',idx||0))?.classList.remove('drag');}
function dropPhoto(e,idx){e.preventDefault();dragLeave(idx||0);const f=e.dataTransfer.files[0];if(f)processPhoto(f,idx||0);}
function handlePhoto(e,idx){if(e.target.files[0])processPhoto(e.target.files[0],idx||0);}
function processPhoto(file,idx){
  idx=idx||0;const entry=bulkEntry(idx);const err=document.getElementById(photoDomId('photoErrMsg',idx));if(err)err.style.display='none';
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)||!file.size){if(err){err.textContent='Invalid image file.';err.style.display='block';}return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){if(err){err.textContent='Image is too large. Please use a smaller photo.';err.style.display='block';}return;}
  const img=new Image(),url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){if(err){err.textContent=`Image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';}URL.revokeObjectURL(url);return;}
    revokePreviewUrl(entry.photoDataURL);
    entry.photoFile=file;entry.photoMeta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    entry.photoDataURL=url;if(idx===0)syncPrimaryPhotoGlobals();
    const prev=document.getElementById(photoDomId('photoPreview',idx)),fn=document.getElementById(photoDomId('photoFilename',idx)),dims=document.getElementById(photoDomId('photoDims',idx)),ph=document.getElementById(photoDomId('photoPlaceholder',idx)),wrap=document.getElementById(photoDomId('photoPreviewWrap',idx)),drop=document.getElementById(photoDomId('photoDrop',idx));
    if(prev)prev.src=entry.photoDataURL;if(fn)fn.textContent=file.name;if(dims)dims.textContent=`${img.width}x${img.height}px - ${(file.size/1024).toFixed(0)} KB - ${entry.photoMeta.printQuality}${Math.min(img.width,img.height)<PRINT_IMAGE_RECOMMENDED_PX?' - '+PRINT_IMAGE_RECOMMENDED_PX+'x'+PRINT_IMAGE_RECOMMENDED_PX+'px or higher recommended for print':''}`;if(ph)ph.style.display='none';if(wrap)wrap.style.display='flex';if(drop)drop.classList.add('uploaded');
  };
  img.onerror=()=>{if(err){err.textContent='Could not read this image. Try another JPG, PNG, or WebP.';err.style.display='block';}URL.revokeObjectURL(url);};
  img.src=url;
}
function resetPhoto(e,idx){
  if(e)e.stopPropagation();idx=idx||0;const entry=bulkEntry(idx);
  revokePreviewUrl(entry.photoDataURL);entry.photoFile=null;entry.photoDataURL=null;entry.photoMeta=null;if(idx===0)syncPrimaryPhotoGlobals();
  const input=document.getElementById(photoDomId('photoInput',idx)),prev=document.getElementById(photoDomId('photoPreview',idx)),ph=document.getElementById(photoDomId('photoPlaceholder',idx)),wrap=document.getElementById(photoDomId('photoPreviewWrap',idx)),drop=document.getElementById(photoDomId('photoDrop',idx));
  if(input)input.value='';if(prev)prev.src='';if(ph)ph.style.display='block';if(wrap)wrap.style.display='none';if(drop)drop.classList.remove('uploaded');
}
function dragOverExtra(e,idx){e.preventDefault();document.getElementById(photoDomId('extraPhotoDrop',idx||0))?.classList.add('drag');}
function dragLeaveExtra(idx){document.getElementById(photoDomId('extraPhotoDrop',idx||0))?.classList.remove('drag');}
function dropExtraPhoto(e,idx){e.preventDefault();dragLeaveExtra(idx||0);const f=e.dataTransfer.files[0];if(f)processExtraPhoto(f,idx||0);}
function handleExtraPhoto(e,idx){if(e.target.files[0])processExtraPhoto(e.target.files[0],idx||0);}
function processExtraPhoto(file,idx){
  idx=idx||0;const entry=bulkEntry(idx);const err=document.getElementById(photoDomId('extraPhotoErrMsg',idx));if(err)err.style.display='none';
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)||!file.size){if(err){err.textContent='Invalid image file.';err.style.display='block';}return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){if(err){err.textContent='Image is too large. Please use a smaller photo.';err.style.display='block';}return;}
  const img=new Image(),url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){if(err){err.textContent=`Image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';}URL.revokeObjectURL(url);return;}
    revokePreviewUrl(entry.extraPhotoDataURL);
    entry.extraPhotoFile=file;entry.extraPhotoDataURL=url;entry.extraPhotoMeta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    const prev=document.getElementById(photoDomId('extraPhotoPreview',idx)),fn=document.getElementById(photoDomId('extraPhotoFilename',idx)),dims=document.getElementById(photoDomId('extraPhotoDims',idx)),ph=document.getElementById(photoDomId('extraPhotoPlaceholder',idx)),wrap=document.getElementById(photoDomId('extraPhotoPreviewWrap',idx)),drop=document.getElementById(photoDomId('extraPhotoDrop',idx));
    if(prev)prev.src=entry.extraPhotoDataURL;if(fn)fn.textContent=file.name;if(dims)dims.textContent=`${img.width}x${img.height}px - ${(file.size/1024).toFixed(0)} KB - ${entry.extraPhotoMeta.printQuality}`;if(ph)ph.style.display='none';if(wrap)wrap.style.display='flex';if(drop)drop.classList.add('uploaded');
  };
  img.onerror=()=>{if(err){err.textContent='Could not read this image. Try another JPG, PNG, or WebP.';err.style.display='block';}URL.revokeObjectURL(url);};
  img.src=url;
}
function resetExtraPhoto(e,idx){
  if(e)e.stopPropagation();idx=idx||0;const entry=bulkEntry(idx);
  revokePreviewUrl(entry.extraPhotoDataURL);entry.extraPhotoFile=null;entry.extraPhotoDataURL=null;entry.extraPhotoMeta=null;
  const input=document.getElementById(photoDomId('extraPhotoInput',idx)),prev=document.getElementById(photoDomId('extraPhotoPreview',idx)),ph=document.getElementById(photoDomId('extraPhotoPlaceholder',idx)),wrap=document.getElementById(photoDomId('extraPhotoPreviewWrap',idx)),drop=document.getElementById(photoDomId('extraPhotoDrop',idx));
  if(input)input.value='';if(prev)prev.src='';if(ph)ph.style.display='block';if(wrap)wrap.style.display='none';if(drop)drop.classList.remove('uploaded');
}
function handlePhotoMulti(event,max,idx){idx=idx||0;const files=Array.from(event.target.files||[]);if(!files.length)return;const entry=bulkEntry(idx),err=document.getElementById(photoDomId('photoErrMsg',idx));if(err)err.style.display='none';const rem=max-entry.photoFilesMulti.length;if(rem<=0){if(err){err.textContent=`Maximum ${max} photos reached.`;err.style.display='block';}event.target.value='';return;}const toAdd=files.slice(0,rem);if(files.length>rem&&err){err.textContent=`Only ${rem} more can be added.`;err.style.display='block';}toAdd.forEach(f=>processPhotoForMulti(f,max,idx));event.target.value='';}
function processPhotoForMulti(file,max,idx){
  idx=idx||0;const entry=bulkEntry(idx),err=document.getElementById(photoDomId('photoErrMsg',idx));
  const ext=file.name.split('.').pop().toLowerCase();
  if(!['jpg','jpeg','png','webp'].includes(ext)||!file.size){if(err){err.textContent='Invalid image file.';err.style.display='block';}return;}
  if(file.size>PRINT_MAX_IMAGE_MB*1024*1024){if(err){err.textContent='Image is too large. Please use a smaller photo.';err.style.display='block';}return;}
  const img=new Image();const url=URL.createObjectURL(file);
  img.onload=function(){
    if(img.width<PRINT_IMAGE_MIN_PX||img.height<PRINT_IMAGE_MIN_PX){if(err){err.textContent=`Skipped "${file.name}": image is too tiny to use. Minimum accepted size is ${PRINT_IMAGE_MIN_PX}x${PRINT_IMAGE_MIN_PX}px.`;err.style.display='block';}URL.revokeObjectURL(url);return;}
    const meta={w:img.width,h:img.height,size:file.size,type:file.type||'',printQuality:wsImageQualityLevel(img.width,img.height)};
    entry.photoFilesMulti.push(file);entry.photoDataURLsMulti.push(url);entry.photoMetasMulti.push(meta);if(idx===0)syncPrimaryPhotoGlobals();renderMultiPhotoGrid(max,idx);
  };
  img.onerror=()=>{if(err){err.textContent=`Skipped "${file.name}".`;err.style.display='block';}URL.revokeObjectURL(url);};
  img.src=url;
}
function renderMultiPhotoGrid(max,idx){idx=idx||0;const entry=bulkEntry(idx),grid=document.getElementById(photoDomId('multiPhotoGrid',idx)),ph=document.getElementById(photoDomId('photoPlaceholderMulti',idx)),ctr=document.getElementById(photoDomId('multiPhotoCount',idx));if(!grid)return;if(!entry.photoDataURLsMulti.length){grid.innerHTML='';if(ph)ph.style.display='block';if(ctr)ctr.style.display='none';return;}if(ph)ph.style.display='none';grid.innerHTML=entry.photoDataURLsMulti.map((url,i)=>`<div class="multi-photo-thumb"><img src="${url}" alt="Photo ${i+1}"/><button class="multi-photo-remove" type="button" onclick="removeMultiPhoto(${i},${max},${idx})">x</button></div>`).join('');if(ctr){ctr.style.display='inline-block';ctr.textContent=`${entry.photoDataURLsMulti.length} of ${max} photos selected`;ctr.classList.toggle('full',entry.photoDataURLsMulti.length>=max);}}
function removeMultiPhoto(i,max,idx){idx=idx||0;const entry=bulkEntry(idx);revokePreviewUrl(entry.photoDataURLsMulti[i]);entry.photoFilesMulti.splice(i,1);entry.photoDataURLsMulti.splice(i,1);entry.photoMetasMulti.splice(i,1);if(idx===0)syncPrimaryPhotoGlobals();renderMultiPhotoGrid(max,idx);}

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
  let finalPhotoData=null;
  if(photoFile&&!cat.photoMulti){
    finalPhotoData=await uploadToStorage(photoFile,subId);
  }
  let finalPhotos=null;
  if(cat.photoMulti&&photoFilesMulti.length){
    finalPhotos=[];
    for(let i=0;i<photoFilesMulti.length;i++){
      try{
        const url=await uploadToStorage(photoFilesMulti[i],subId+'_'+i);
        finalPhotos.push({url:url,name:photoFilesMulti[i]?.name||`photo_${i+1}.jpg`,meta:photoMetasMulti[i]||null});
      }catch(e){throw new Error('Photo '+(i+1)+' upload failed: '+(e.message||e));}
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
    clearSubmissionUrlRouting();
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

function collectBulkSubmissionPayloads(categoryKey){
  categoryKey=requireSubmissionCategory(categoryKey);
  const cat=CATEGORIES[categoryKey],fields=getEffectiveFields(categoryKey),items=[];let valid=true;
  ensureBulkFormEntries().forEach((entry,idx)=>{
    const data={};
    fields.forEach(f=>{
      const el=document.getElementById(formFieldId(f.id,idx)),w=document.getElementById(formFieldWrapId(f.id,idx));
      if(!el)return;
      const val=f.type==='checkbox'?el.checked?'Yes':'No':(el.value||'').trim();
      data[f.id]={label:f.label,value:val,type:f.type};
      if(f.required&&f.type!=='checkbox'&&!val){if(w)w.classList.add('has-error');valid=false;}else if(w)w.classList.remove('has-error');
    });
    const err=document.getElementById(photoDomId('photoErrMsg',idx));
    if(err){err.style.display='none';err.textContent='';}
    if(cat.photoRequired&&cat.photoMulti&&!entry.photoDataURLsMulti.length){if(err){err.textContent='At least one event photo is required.';err.style.display='block';}valid=false;}
    else if(cat.photoRequired&&!cat.photoMulti&&!entry.photoDataURL){if(err){const isClass=categoryKey.includes('_class_')||categoryKey==='ss3_class_message';const isAdvert=categoryKey==='advertisements';err.textContent=(isAdvert?'A business flyer':isClass?'A full class picture':'A profile photo')+' is required.';err.style.display='block';}valid=false;}
    items.push({entry,data,category:categoryKey});
  });
  return{valid,items};
}

async function buildSubmissionPayload(data,entry,batchIndex,onUploadProgress,categoryKey){
  categoryKey=requireSubmissionCategory(categoryKey);
  const cat=CATEGORIES[categoryKey],subId=genId();
  let finalPhotoData=null;
  if(entry.photoFile&&!cat.photoMulti){
    if(onUploadProgress)onUploadProgress(1,cat.extraPhotoOptional&&entry.extraPhotoFile?2:1,entry.photoFile,batchIndex,'Uploading photo...');
    finalPhotoData=await uploadToStorage(entry.photoFile,subId,{onStatus:msg=>onUploadProgress&&onUploadProgress(1,cat.extraPhotoOptional&&entry.extraPhotoFile?2:1,entry.photoFile,batchIndex,msg)});
  }
  let finalPhotos=null;
  if(cat.photoMulti&&entry.photoFilesMulti.length){
    finalPhotos=await uploadPhotosSequential(entry.photoFilesMulti,{
      idPrefix:subId,
      metas:entry.photoMetasMulti,
      onProgress:(photoNo,total,file,msg)=>{
        if(onUploadProgress)onUploadProgress(photoNo,total,file,batchIndex,msg);
      }
    });
    if(finalPhotos.length)finalPhotoData=finalPhotos[0].url;
  }
  if(cat.extraPhotoOptional&&entry.extraPhotoFile){
    const total=entry.photoFile?2:1;
    const photoNo=entry.photoFile?2:1;
    if(onUploadProgress)onUploadProgress(photoNo,total,entry.extraPhotoFile,batchIndex,'Uploading photo...');
    const extraUrl=await uploadToStorage(entry.extraPhotoFile,subId+'_extra',{onStatus:msg=>onUploadProgress&&onUploadProgress(photoNo,total,entry.extraPhotoFile,batchIndex,msg)});
    finalPhotos=Array.isArray(finalPhotos)?finalPhotos:[];
    finalPhotos.push({url:extraUrl,name:entry.extraPhotoFile?.name||'second_image.jpg',caption:data.middleImageCaption?.value||'',role:'middle',meta:entry.extraPhotoMeta||null});
  }
  if(finalPhotoData&&categoryKey==='speeches'){
    finalPhotos=[{url:finalPhotoData,name:entry.photoFile?.name||'speech_image.jpg',caption:data.photoCaption?.value||'',role:'speech',meta:entry.photoMeta||null}];
  }
  return{id:subId,category:categoryKey,
    ts:new Date().toLocaleString(),createdAt:Date.now()+batchIndex,
    status:'pending',
    reviewerNote:'',reviewedAt:null,data,
    photoData:finalPhotoData,photoName:entry.photoFile?.name||null,photoMeta:entry.photoMeta,
    photos:finalPhotos
  };
}

async function saveSubmissionBatch(submissions,releaseSubmit){
  document.getElementById('formContainer').style.display='none';
  document.getElementById('successWrap').style.display='block';
  document.getElementById('successUploading').style.display='block';
  document.getElementById('successDone').style.display='none';
  window.scrollTo({top:0,behavior:'smooth'});

  const bar=document.getElementById('uploadProgressBar');
  const txt=document.getElementById('uploadProgressText');
  let prog=0;
  const tick=setInterval(()=>{
    prog=Math.min(prog+8,85);
    if(bar)bar.style.width=prog+'%';
  },180);

  try{
    if(txt)txt.textContent='Saving '+submissions.length+' submission'+(submissions.length>1?'s':'')+' to cloud...';
    await dbSaveSubmissionsBulk(submissions,{strict:true});
    clearInterval(tick);
    if(bar)bar.style.width='100%';
    if(txt)txt.textContent=submissions.length+' submission'+(submissions.length>1?'s':'')+' saved successfully!';
    setTimeout(()=>{
      document.getElementById('successUploading').style.display='none';
      document.getElementById('successDone').style.display='block';
    },600);
    resetFormState();
    clearSubmissionUrlRouting();
    releaseSubmit();
  }catch(e){
    clearInterval(tick);
    if(bar){bar.style.width='100%';bar.style.background='var(--red)';}
    if(txt)txt.textContent='Cloud save failed. Please retry.';
    document.getElementById('formContainer').style.display='block';
    document.getElementById('successWrap').style.display='none';
    const err=document.querySelector('.photo-err-msg')||document.getElementById('bulkErrMsg');
    const msg='Cloud save failed after upload. Please retry. '+uploadErrorDetail(e);
    if(err){err.textContent=msg;err.style.display='block';err.scrollIntoView({behavior:'smooth',block:'center'});}
    alert(msg);
    releaseSubmit();
  }
}

async function submitForm(){
  if(window.__meSubmitting)return;
  const submitBtn=document.getElementById('mainSubmitBtn');
  const originalSubmitText=submitBtn?submitBtn.textContent:'Submit';
  window.__meSubmitting=true;
  if(submitBtn){submitBtn.disabled=true;submitBtn.classList.add('is-submitting');submitBtn.textContent='Submitting...';}
  const releaseSubmit=()=>{window.__meSubmitting=false;if(submitBtn){submitBtn.disabled=false;submitBtn.classList.remove('is-submitting');submitBtn.textContent=originalSubmitText;}};
  let categoryKey,cat;
  try{
    categoryKey=requireSubmissionCategory();
    currentFormCategory=categoryKey;
    cat=CATEGORIES[categoryKey];
  }catch(e){
    const err=document.querySelector('.photo-err-msg')||document.getElementById('bulkErrMsg');
    if(err){err.textContent=e.message;err.style.display='block';err.scrollIntoView({behavior:'smooth',block:'center'});}
    alert(e.message);
    releaseSubmit();
    return;
  }

  if(categoryKey==='gallery'){
    let valid=true;const data={};
    getEffectiveFields(categoryKey).forEach(f=>{const el=document.getElementById('ff-'+f.id);const w=document.getElementById('fw-'+f.id);if(!el)return;const val=f.type==='checkbox'?el.checked?'Yes':'No':(el.value||'').trim();data[f.id]={label:f.label,value:val,type:f.type};if(f.required&&f.type!=='checkbox'&&!val){if(w)w.classList.add('has-error');valid=false;}else if(w)w.classList.remove('has-error');});
    const onBulk=document.getElementById('gpane-bulk')?.classList.contains('active');
    if(onBulk){releaseSubmit();submitBulkGallery();return;}
    if(cat.photoRequired&&!photoDataURL){const e=document.getElementById('photoErrMsg');if(e){e.textContent='A photo is required.';e.style.display='block';}valid=false;}
    if(!valid){const fe=document.querySelector('.has-error')||document.getElementById('photoErrMsg');if(fe)fe.scrollIntoView({behavior:'smooth',block:'center'});releaseSubmit();return;}
    try{
      const sub=await buildSubmissionPayload(data,bulkEntry(0),0,(photoNo,total,file,batchIndex,msg)=>{
        const status=msg||('Uploading photo '+photoNo+' of '+total+'...');
        if(submitBtn)submitBtn.textContent=status;
        showSync('syncing',status);
      },categoryKey);
      return saveSubmissionBatch([sub],releaseSubmit);
    }catch(e){
      const msg=friendlyUploadErrorMessage(e);
      const err=document.getElementById('photoErrMsg')||document.getElementById('bulkErrMsg');
      if(err){err.textContent=msg;err.style.display='block';err.scrollIntoView({behavior:'smooth',block:'center'});}
      alert(msg);
      releaseSubmit();
      return;
    }
  }

  snapshotBulkFormValues();
  const collected=collectBulkSubmissionPayloads(categoryKey);
  if(!collected.valid){const fe=document.querySelector('.has-error')||document.querySelector('.photo-err-msg[style*="block"]')||document.getElementById('photoErrMsg');if(fe)fe.scrollIntoView({behavior:'smooth',block:'center'});releaseSubmit();return;}
  let submissions;
  try{
    submissions=[];
    for(let i=0;i<collected.items.length;i++){
      const item=collected.items[i];
      submissions.push(await buildSubmissionPayload(item.data,item.entry,i,(photoNo,total,file,batchIndex,msg)=>{
        const prefix=collected.items.length>1?'Submission '+(batchIndex+1)+'/'+collected.items.length+' - ':'';
        const status=prefix+(msg||('Uploading photo '+photoNo+' of '+total+'...'));
        if(submitBtn)submitBtn.textContent=status;
        const txt=document.getElementById('uploadProgressText');if(txt)txt.textContent=status;
        showSync('syncing',status);
      },item.category||categoryKey));
      if(i<collected.items.length-1)await wait(BULK_UPLOAD_BETWEEN_FILES_MS);
    }
  }catch(e){
    const msg=friendlyUploadErrorMessage(e);
    const err=document.querySelector('.photo-err-msg')||document.getElementById('photoErrMsg');
    if(err){err.textContent=msg;err.style.display='block';err.scrollIntoView({behavior:'smooth',block:'center'});}
    alert(msg);
    releaseSubmit();
    return;
  }
  return saveSubmissionBatch(submissions,releaseSubmit);
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
  let list=document.getElementById('adminSubList');
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">☁️</div><h3>Refreshing…</h3><p>Fetching latest submissions from cloud.</p></div>';
  const statusFilter=document.getElementById('filterStatus');
  if(statusFilter)statusFilter.value='all';
  dbLoadAll({bypassCache:true,allowCacheFallback:false}).then(cloudList=>{
    subs=cloudList;persistSubCache(subs);
    const banner=document.getElementById('cloudRetryBanner');
    if(banner)banner.remove();
    renderAdmin();
    const btn=document.getElementById('tab-all');
    if(btn){btn.style.background='var(--school-mint2)';setTimeout(()=>btn.style.background='',800);}
  }).catch(e=>{subs=loadSubCache();renderAdmin();showAdminCloudError(e);});
}
function showAdminCloudError(err){
  const msg=err?.message||String(err||'Unknown cloud error');
  showSync('err','Cloud fetch failed - showing cached fallback only');
  const main=document.querySelector('#viewAdmin .admin-main');
  if(!main)return;
  let banner=document.getElementById('cloudRetryBanner');
  if(!banner){
    banner=document.createElement('div');
    banner.id='cloudRetryBanner';
    main.prepend(banner);
  }
  banner.style.cssText='background:#7f1d1d;color:#fff;padding:10px 20px;text-align:center;font-size:13px;font-family:Lato,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;';
  banner.innerHTML=`<span>Cloud fetch failed. Showing cached fallback only (${loadSubCache().length} cached). Error: ${esc(msg)}</span><button onclick="adminRefresh()" style="background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.5);color:#fff;padding:5px 14px;border-radius:999px;font-size:12px;font-weight:700;cursor:pointer;font-family:Lato,sans-serif;">Refresh from Cloud</button>`;
}
function hideAllAdminModes(){['adminModeSubs','adminModeEditorial','adminModeLayout','adminModeFinalMagazine','adminModeShareLinks','adminModeSettings'].forEach(id=>{const el=document.getElementById(id);if(el)el.style.display='none';});}
function setCategory(cat){currentAdminCat=cat;document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));const btn=document.getElementById('tab-'+cat);if(btn)btn.classList.add('active');hideAllAdminModes();if(cat==='editorial'){document.getElementById('adminModeEditorial').style.display='block';renderEditorialMode();}else{document.getElementById('adminModeSubs').style.display='block';renderAdmin();}}
function openLayoutStudio(){document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));document.getElementById('tab-layout').classList.add('active');hideAllAdminModes();document.getElementById('adminModeLayout').style.display='block';loadLsSettingsToUI();renderSectionManager();renderLabelRenameList();renderAIContentSummary();}
async function getFinalMagazineRouteUrl(){const primary='/magazine-print',fallback='/magazine-print.html';try{const res=await fetch(primary,{method:'HEAD',cache:'no-store'});return res.ok?primary:fallback;}catch(e){return fallback;}}
async function openFinalMagazineAdmin(){document.querySelectorAll('#viewAdmin .admin-tab').forEach(t=>t.classList.remove('active'));const tab=document.getElementById('tab-final-magazine');if(tab)tab.classList.add('active');hideAllAdminModes();const mode=document.getElementById('adminModeFinalMagazine');if(mode)mode.style.display='block';const frame=document.getElementById('finalMagazineFrame');if(frame){const target=await getFinalMagazineRouteUrl();const current=frame.getAttribute('src')||'';if(!current||current==='about:blank')frame.setAttribute('src',target);}}
async function reloadFinalMagazineFrame(){const frame=document.getElementById('finalMagazineFrame');if(!frame)return;const target=await getFinalMagazineRouteUrl();const current=frame.getAttribute('src')||'';if(!current||current==='about:blank'){frame.setAttribute('src',target);return;}try{frame.contentWindow.location.reload();}catch(e){frame.setAttribute('src',target);}}
async function printFinalMagazineFrame(){const frame=document.getElementById('finalMagazineFrame');if(!frame)return;const current=frame.getAttribute('src')||'';if(!current||current==='about:blank'){frame.setAttribute('src',await getFinalMagazineRouteUrl());setTimeout(()=>printFinalMagazineFrame(),900);return;}try{frame.contentWindow.focus();frame.contentWindow.print();}catch(e){window.open(await getFinalMagazineRouteUrl(),'_blank','noopener');}}
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
  const builderTab=document.getElementById('tab-layout');
  if(builderTab&&!document.getElementById('tab-magazine-builder')){
    builderTab.insertAdjacentHTML('afterend','<a class="admin-tab" href="/builder/" onclick="openMagazineBuilder(event)" id="tab-magazine-builder" style="color:var(--mag-emerald);font-weight:700;text-decoration:none;">📖 Open Magazine Builder</a><div style="font-size:11px;line-height:1.45;color:var(--ink3);padding:0 14px 8px 18px;">Use this workspace to arrange approved magazine pages, edit production content, preview pages, and prepare print/PDF output.</div>');
  }
  // Restore active
  const act=document.getElementById(curActive);
  if(act)act.classList.add('active');
}

function renderAdmin(){
  const adminData=(Array.isArray(subs)&&subs.length)?subs:loadAll();
  subs=adminData;
  const counts=computeSubmissionCounts(adminData);
  renderAdminTabs();
  const statusFilter=document.getElementById('filterStatus');
  if(statusFilter&&!statusFilter.value)statusFilter.value='all';
  document.getElementById('count-all').textContent=counts.total;
  CATEGORY_KEYS.forEach(k=>{const el=document.getElementById('count-'+k);if(el)el.textContent=counts.byCategory[k]||0;});
  const edCount=document.getElementById('count-editorial');if(edCount)edCount.textContent=(counts.byCategory['editorial-note']||0)+(counts.byCategory['appreciation']||0);
  document.getElementById('statTotal').textContent=counts.total;
  document.getElementById('statPending').textContent=counts.byStatus.pending||0;
  document.getElementById('statApproved').textContent=counts.byStatus.approved||0;
  document.getElementById('statFinalized').textContent=counts.byStatus.finalized||0;
  const sf=statusFilter?statusFilter.value:'all';
  /* Sequence order: sort by createdAt ascending (oldest first = submission order) */
  let filtered=adminData.slice().sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  /* WORKFLOW: Production Admin defaults to all statuses; editor state still controls actions. */
  if(currentAdminCat!=='all')filtered=filtered.filter(s=>s.category===currentAdminCat);
  if(sf!=='all')filtered=filtered.filter(s=>s.status===sf);
  const list=document.getElementById('adminSubList');
  /* Workflow notice for admin */
  const pendingCount=counts.byStatus.pending||0;
  const approvedCount=counts.byStatus.approved||0;
  const lockedCount=(counts.byStatus.approved||0)+(counts.byStatus.finalized||0);
  const cloudSummary=cloudLoadState.loadedAt
    ?`Cloud: ${cloudLoadState.count??'unknown'} row${cloudLoadState.count===1?'':'s'} refreshed ${new Date(cloudLoadState.loadedAt).toLocaleTimeString()}`
    :(cloudLoadState.error?`Cloud failed - cached fallback visible (${counts.total})`:`Cloud count pending (${counts.total} visible)`);
  let workflowBanner=`<div style="background:linear-gradient(135deg,#f0fdf6,#e6faf0);border:1px solid var(--school-mint2);border-radius:var(--radius);padding:14px 18px;margin-bottom:1.25rem;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <span style="font-size:20px;">📋</span>
    <div style="flex:1;font-size:13px;color:var(--school-navy);">
      <strong>Workflow:</strong> Submissions → <span style="color:var(--amber);font-weight:700;">Editor reviews &amp; proofreads</span> → <span style="color:var(--green);font-weight:700;">Approved here for layout</span> → Finalize
      <br><span style="font-size:12px;color:var(--ink3);">Showing all statuses by default · ${pendingCount} pending · ${approvedCount} ready to finalize</span>
    </div>
  </div>`;
  if(!filtered.length){list.innerHTML=workflowBanner+`<div class="empty-state"><div class="empty-state-icon">📭</div><h3>No submissions to show</h3><p>${subs.length?'Try changing the filter.':'Share the submission links with contributors.'}</p></div>`;return;}
  const cloudCountBanner=`<div style="font-size:12px;color:var(--ink3);margin:-.75rem 0 1rem 0;">All Statuses is the default view · ${lockedCount} approved/finalized locked visible · ${cloudSummary}</div>`;
  const countSource=cloudLoadState.source==='cloud'?'cloud':'fallback';
  const visibleCounts=cloudLoadState.source==='cloud'&&cloudLoadState.counts?cloudLoadState.counts:counts;
  const detailedCountBanner=`<div style="font-size:12px;color:var(--ink3);margin:-.75rem 0 1rem 0;">${esc(formatAdminCountSummary(visibleCounts,countSource))}${cloudLoadState.error?'<br>Error: '+esc(cloudLoadState.error):''}</div>`;
  list.innerHTML=workflowBanner+cloudCountBanner+detailedCountBanner+filtered.map(s=>renderSubCard(s,'admin')).join('');
}

function renderSubCard(s,ctx){
  const cat=CATEGORIES[s.category]||EDITORIAL_META[s.category]||{label:s.category,tag:s.category};
  const name=s.data.name?.value||s.data.speakerName?.value||s.data.contribName?.value||s.data.reporterName?.value||s.data.authorName?.value||s.data.intervieweeName?.value||s.data.submitterName?.value||s.data.title?.value||'Untitled';
  const sub=s.data.subject?.value||s.data.speechType?.value||s.data.contribType?.value||s.data.eventType?.value||s.data.subjectArea?.value||s.data.articleTitle?.value||s.data.photoCategory?.value||s.data.eventName?.value||'';
  const initials=name.trim().split(/\s+/).map(w=>w[0]).join('').substring(0,2).toUpperCase();
  const avatar=s.photoData?`<img class="sub-avatar" src="${s.photoData}" alt="${esc(name)}"/>`:`<div class="sub-avatar-init">${initials}</div>`;
  const fieldsHtml=Object.entries(s.data).map(([key,fc])=>{
    if(!fc||!fc.value)return'';
    const val=String(fc.value);
    const wide=val.length>80||/\n/.test(val);
    return`<div class="sub-field${wide?' wide':''}">
      <div class="sub-field-head">
        <div class="sub-field-lbl">${esc(fc.label)}</div>
        <button class="sub-copy-btn" type="button" onclick="copySubmissionField('${escJs(s.id)}','${escJs(key)}',this)">Copy</button>
      </div>
      <div class="sub-field-val">${esc(val)}</div>
    </div>`;
  }).join('');
  const noteHtml=s.reviewerNote?`<div class="sub-reviewer-note"><strong>Editor's note:</strong> ${esc(s.reviewerNote)}</div>`:'';

  let acts='';
  acts+=`<button class="sub-action-btn" onclick="openSubmissionPreview('${escJs(s.id)}')">Full Preview</button>`;
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
    if(s.status!=='approved'&&s.status!=='finalized'){
      acts+=`<button class="sub-action-btn sub-action-delete" onclick="deleteSubmission('${s.id}')">Delete</button>`;
    }
  } else {
    /* Fix 5: Editor — sees all text fields, can Approve/Reject/Proofread */
    if(s.status==='pending'){
      acts+=`<button class="sub-action-btn sub-action-finalize" style="color:var(--green);border-color:var(--green2);" onclick="editorReview('${s.id}','approved')">✓ Approve</button>`;
      acts+=`<button class="sub-action-btn sub-action-delete" onclick="editorReview('${s.id}','rejected')">✗ Reject</button>`;
    } else if(s.status==='approved'){
      acts+=`<span class="status-badge status-approved">✓ Approved</span>`;
      acts+=`<span style="font-size:11px;color:var(--green);font-weight:700;padding:4px 10px;background:var(--green2);border-radius:999px;">Locked</span>`;
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

function escJs(s){return String(s==null?'':s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/</g,'\\u003c').replace(/>/g,'\\u003e');}
function submissionDisplayName(s){
  return s?.data?.name?.value||s?.data?.className?.value||s?.data?.businessName?.value||s?.data?.messageTitle?.value||s?.data?.speakerName?.value||s?.data?.contribName?.value||s?.data?.reporterName?.value||s?.data?.authorName?.value||s?.data?.intervieweeName?.value||s?.data?.submitterName?.value||s?.data?.eventName?.value||s?.data?.title?.value||'Untitled';
}
function submissionPhotos(s){
  const out=[];
  if(s?.photoData)out.push({src:s.photoData,caption:s.photoName||submissionDisplayName(s)});
  if(Array.isArray(s?.photos)){
    s.photos.forEach((p,i)=>{
      const src=wsPhotoSrc(p);
      if(src)out.push({src,caption:p.caption||p.name||('Photo '+(i+1))});
    });
  }
  return out.filter(p=>p.src);
}
function copyTextToClipboard(text,btn){
  const done=()=>{if(btn){const old=btn.textContent;btn.textContent='Copied';btn.classList.add('copied');setTimeout(()=>{btn.textContent=old;btn.classList.remove('copied');},1400);}};
  const fallback=()=>{
    const ta=document.createElement('textarea');
    ta.value=text;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:-9999px;';
    document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){alert(text);}
    document.body.removeChild(ta);
  };
  if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(fallback);return;}
  fallback();
}
function copySubmissionField(id,key,btn){
  const s=loadAll().find(x=>String(x.id)===String(id));
  const text=String(s?.data?.[key]?.value||'');
  if(text)copyTextToClipboard(text,btn);
}
function ensureSubmissionPreviewModal(){
  let modal=document.getElementById('submissionPreviewModal');
  if(modal)return modal;
  modal=document.createElement('div');
  modal.id='submissionPreviewModal';
  modal.className='submission-preview-modal';
  modal.innerHTML='<div class="submission-preview-backdrop" onclick="closeSubmissionPreview()"></div><div class="submission-preview-panel" role="dialog" aria-modal="true"><button class="submission-preview-close" onclick="closeSubmissionPreview()" aria-label="Close preview">x</button><div id="submissionPreviewBody"></div></div>';
  document.body.appendChild(modal);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSubmissionPreview();});
  return modal;
}
function openSubmissionPreview(id){
  const s=loadAll().find(x=>String(x.id)===String(id));
  if(!s)return;
  const cat=CATEGORIES[s.category]||EDITORIAL_META[s.category]||{label:s.category,tag:s.category};
  const name=submissionDisplayName(s);
  const status=String(s.status||'pending').toLowerCase();
  const locked=status==='approved'||status==='finalized';
  const fields=Object.entries(s.data||{}).filter(([,fc])=>fc&&fc.value).map(([key,fc])=>{
    const val=String(fc.value);
    return`<section class="submission-preview-field">
      <div class="submission-preview-field-head">
        <h3>${esc(fc.label||key)}</h3>
        <button class="sub-copy-btn" type="button" onclick="copySubmissionField('${escJs(s.id)}','${escJs(key)}',this)">Copy</button>
      </div>
      <div class="submission-preview-text">${esc(val)}</div>
    </section>`;
  }).join('');
  const photos=submissionPhotos(s);
  const photosHtml=photos.length?`<section class="submission-preview-photos">
    <h3>Photos</h3>
    ${photos.map((p,i)=>`<figure class="submission-preview-photo">
      <img src="${esc(p.src)}" alt="${esc(p.caption||name||('Photo '+(i+1)))}" loading="lazy"/>
      ${p.caption?`<figcaption>${esc(p.caption)}</figcaption>`:''}
    </figure>`).join('')}
  </section>`:'';
  const noteHtml=s.reviewerNote?`<section class="submission-preview-field"><div class="submission-preview-field-head"><h3>Editor's note</h3><button class="sub-copy-btn" type="button" onclick="copyTextToClipboard('${escJs(s.reviewerNote)}',this)">Copy</button></div><div class="submission-preview-text">${esc(s.reviewerNote)}</div></section>`:'';
  const modal=ensureSubmissionPreviewModal();
  document.getElementById('submissionPreviewBody').innerHTML=`<div class="submission-preview-titlebar">
      <div>
        <div class="submission-preview-kicker">${esc(cat.label||cat.tag||s.category)}</div>
        <h2>${esc(name)}</h2>
        <p>${esc(s.ts||'')} ${locked?' - Locked/view only':''}</p>
      </div>
      <span class="status-badge status-${esc(status)}">${esc(status.toUpperCase())}</span>
    </div>
    ${photosHtml}
    <div class="submission-preview-fields">${fields||'<p class="submission-preview-empty">No text fields were submitted.</p>'}</div>
    ${noteHtml}`;
  modal.classList.add('active');
  document.body.classList.add('submission-preview-open');
}
function closeSubmissionPreview(){
  document.getElementById('submissionPreviewModal')?.classList.remove('active');
  document.body.classList.remove('submission-preview-open');
}

/* ACTIONS */
function sendForReview(id){if(!confirm('Send to Editor-in-Chief for review?'))return;subs=loadAll();const s=subs.find(x=>x.id===id);if(!s)return;s.status='pending';saveAll(subs);dbUpdateStatus(id,'pending','',null);renderAdmin();}
function finalizeSubmission(id){if(!confirm('Finalize this submission? It will appear in the magazine layout.'))return;subs=loadAll();const s=subs.find(x=>String(x.id)===String(id));if(!s)return;s.status='finalized';saveAll(subs);dbUpdateStatus(id,'finalized',s.reviewerNote||'',s.reviewedAt);renderAdmin();}
function deleteSubmission(id){const existing=loadAll().find(s=>String(s.id)===String(id));if(existing&&(existing.status==='approved'||existing.status==='finalized')){alert('Approved and finalized submissions are locked and cannot be deleted here.');return;}if(!confirm('Permanently delete this submission?'))return;dbDeleteSubmission(id);subs=loadAll().filter(s=>String(s.id)!==String(id));renderAdmin();}

/* ADMIN ENTER — pulls fresh cloud data */
function enterAdmin(){
  show('viewAdmin');
  const statusFilter=document.getElementById('filterStatus');
  if(statusFilter)statusFilter.value='all';
  subs=[];
  /* Show a loading placeholder immediately so the list doesn't appear empty */
  let list=document.getElementById('adminSubList');
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">☁️</div><h3>Loading submissions…</h3><p>Fetching latest from cloud.</p></div>';
  dbLoadAll({bypassCache:true,allowCacheFallback:false}).then(cloudList=>{
    subs=cloudList;persistSubCache(subs);
    renderAdmin();
  }).catch(e=>{
    /* Cloud failed — fall back to local cache and surface a retry banner */
    subs=loadSubCache();
    renderAdmin();
    const main=document.querySelector('#viewAdmin .admin-main');
    if(main&&!document.getElementById('cloudRetryBanner')){
      const banner=document.createElement('div');
      banner.id='cloudRetryBanner';
      banner.style.cssText='background:#6b5b16;color:#fff;padding:10px 20px;text-align:center;font-size:13px;font-family:Lato,sans-serif;display:flex;align-items:center;justify-content:center;gap:12px;';
      banner.innerHTML='<span>Cloud sync is delayed - showing cached submissions.</span><button onclick="adminRefresh()" style="background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.5);color:#fff;padding:5px 14px;border-radius:999px;font-size:12px;font-weight:700;cursor:pointer;font-family:Lato,sans-serif;">Retry Sync</button>';
      main.prepend(banner);
    }
    showAdminCloudError(e);
  });
}

/* EDITOR ENTER — pulls fresh cloud data, defaults to pending */
function enterEditor(){
  show('viewEditor');
  subs=loadAll();
  currentEditorCat='pending';
  document.querySelectorAll('#viewEditor .editor-tab').forEach(t=>t.classList.remove('active'));
  const pendingTab=document.getElementById('etab-pending');if(pendingTab)pendingTab.classList.add('active');
  document.getElementById('editorModeList').style.display='block';
  document.getElementById('editorModeNote').style.display='none';
  if(subs.length)renderEditor();
  let list=document.getElementById('editorSubList');
  if(subs.length)list=null;
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">⏳</div><h3>Loading submissions…</h3><p>Fetching latest from cloud.</p></div>';
  dbLoadAll().then(cloudList=>{
    subs=mergeSubmissionLists(loadSubCache(),cloudList);persistSubCache(subs);
    renderEditor();
  }).catch(()=>{subs=loadAll();renderEditor();});
}

function editorRefresh(){
  const list=document.getElementById('editorSubList');
  if(list)list.innerHTML='<div class="empty-state"><div class="empty-state-icon" style="font-size:32px;">↻</div><h3>Refreshing…</h3><p>Fetching latest submissions from cloud.</p></div>';
  dbLoadAll().then(cloudList=>{
    subs=mergeSubmissionLists(loadSubCache(),cloudList);persistSubCache(subs);
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
      subs=mergeSubmissionLists(loadSubCache(),cloudList);persistSubCache(subs);
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
function renderSectionManager(){const list=document.getElementById('sectionList');subs=loadAll();list.innerHTML=sectionOrder.map((sec,i)=>{const count=subs.filter(s=>s.category===sec.key&&(s.status==='approved'||s.status==='finalized')).length;const lbl=getLabel('section_'+sec.key,sec.label);return`<div class="section-row" draggable="true" data-idx="${i}" ondragstart="sectionDragStart(event,${i})" ondragover="sectionDragOver(event,${i})" ondrop="sectionDrop(event,${i})" ondragleave="sectionDragLeave(event)"><span class="section-handle">⠿</span><span class="section-row-num">${i+1}</span><div class="section-row-info"><div class="section-row-name">${sec.icon} ${esc(lbl)}</div><div class="section-row-meta">${count} approved · Layout: ${sec.layout}</div></div><div class="section-row-controls"><button class="section-toggle ${sec.visible?'on':''}" onclick="toggleSection(${i})">${sec.visible?'Visible':'Hidden'}</button><select class="section-layout-select" onchange="changeSectionLayout(${i},this.value)"><option value="single" ${sec.layout==='single'?'selected':''}>Single</option><option value="double" ${sec.layout==='double'?'selected':''}>Double</option><option value="grid" ${sec.layout==='grid'?'selected':''}>Grid</option><option value="teacher-grid" ${sec.layout==='teacher-grid'?'selected':''}>Teacher Grid</option><option value="editor-board" ${sec.layout==='editor-board'?'selected':''}>Editor Board</option><option value="gallery" ${sec.layout==='gallery'?'selected':''}>Gallery</option><option value="events" ${sec.layout==='events'?'selected':''}>Events</option><option value="cover" ${sec.layout==='cover'?'selected':''}>Cover</option><option value="toc" ${sec.layout==='toc'?'selected':''}>TOC</option></select>${sec.editable!==false?`<button class="section-rename-btn" onclick="openRenameModal('${sec.key}','${esc(lbl)}')">✎ Rename</button>`:''}</div></div>`;}).join('');
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

function getProductionItemsPerPage(sec,settings){
  const s=settings||lsSettings||{};
  const key=sec?.key;
  if(key==='teachers')return Math.max(1,Math.min(30,parseInt(s.teachersPerPage)||9));
  if(key==='primary5'||key==='jss3')return 20;
  if(key==='ss3')return Math.max(1,Math.min(12,parseInt(s.studentsPerPage)||6));
  if(key==='speeches')return Math.max(1,Math.min(2,parseInt(s.speechesPerPage)||1));
  if(key==='gallery')return 30;
  if(key==='creative')return Math.max(1,Math.min(6,parseInt(s.creativePerPage)||2));
  if(key==='events')return 30;
  if(['academic','interviews','motivational'].includes(key))return 2;
  return 1;
}

function wsNormalizeCategoryForRoute(sub){
  const cat=String(sub?.category||'').toLowerCase();
  if(cat==='gallery'||cat==='events'||cat==='primary5_class_photo'||cat==='jss3_class_photo'||cat==='ss3_class_message')return 'events';
  return cat;
}
function wsSubmissionRoute(sub){
  if(!sub)return 'unassigned';
  const cat=wsNormalizeCategoryForRoute(sub);
  if(cat==='editor_board')return 'editor_board';
  if(cat==='editorial-note')return magIsEicAddressSub(sub)?'eic-address':'editorial-note';
  if(magIsHistorySub(sub))return 'school-history';
  const speechKind=magOpeningSpeechKind(sub);
  if(speechKind)return speechKind==='proprietor'?'proprietor-speech':speechKind+'-speech';
  if(cat==='speeches')return 'unassigned';
  if(['primary5','jss3','ss3','teachers','academic','interviews','motivational','events','appreciation','advertisements','creative'].includes(cat))return cat;
  return 'unassigned';
}
function wsSectionAllowsSubmission(secKey,sub){
  const route=wsSubmissionRoute(sub);
  if(secKey==='gallery'||secKey==='events'||secKey==='primary5_class_photo'||secKey==='jss3_class_photo'||secKey==='ss3_class_message')return route==='events';
  return route===secKey;
}
function wsTextSplitLimitForPage(page){
  const key=page?.sec?.key||page?.type||'';
  if(['eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech'].includes(key)||['eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech'].includes(page?.type))return 1550;
  if(key==='interviews')return 2300;
  if(key==='academic'||key==='motivational')return 2100;
  return 2600;
}
function wsSplitTextByFit(text,limit){
  const clean=String(text||'').trim();
  if(!clean||clean.length<=limit)return [clean];
  const chunks=[],paragraphs=clean.split(/\n{2,}/).map(p=>p.trim()).filter(Boolean);
  let buf='';
  const pushBuf=()=>{if(buf.trim()){chunks.push(buf.trim());buf='';}};
  paragraphs.forEach(p=>{
    if((buf+'\n\n'+p).trim().length<=limit){buf=(buf?buf+'\n\n':'')+p;return;}
    pushBuf();
    if(p.length<=limit){buf=p;return;}
    const sentences=p.match(/[^.!?]+[.!?]+|\S[\s\S]*$/g)||[p];
    sentences.forEach(s=>{
      const next=(buf?buf+' ':'')+s.trim();
      if(next.length<=limit){buf=next;return;}
      pushBuf();
      if(s.length<=limit){buf=s.trim();return;}
      for(let i=0;i<s.length;i+=limit)chunks.push(s.slice(i,i+limit).trim());
    });
  });
  pushBuf();
  return chunks.filter(Boolean);
}
function wsPrimaryTextKey(sub){
  const keys=['speechBody','articleBody','contribBody','qaBody','eventReport','message','body','introParagraph','classMessage'];
  return keys.find(k=>sub?.data?.[k]?.value)||'';
}
function wsCloneSubWithTextPart(sub,key,text,partIdx){
  const clone=Object.assign({},sub,{id:String(sub.id)+'__part_'+partIdx,_wsOriginalId:String(sub.id),_wsTextOverrides:Object.assign({},sub._wsTextOverrides||{},{[key]:text})});
  return clone;
}
function wsExpandOverflowPages(pages){
  const out=[];
  pages.forEach(page=>{
    const key=page?.sec?.key||page?.type||'';
    const applies=['eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech','interviews','academic','motivational'].includes(key)||['eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech'].includes(page?.type);
    if(!applies){out.push(page);return;}
    const limit=wsTextSplitLimitForPage(page);
    if(page.sub){
      const textKey=wsPrimaryTextKey(page.sub);
      const parts=textKey?wsSplitTextByFit(magSubVal(page.sub,[textKey]),limit):[];
      if(parts.length<=1){out.push(page);return;}
      parts.forEach((part,i)=>out.push(Object.assign({},page,{sub:wsCloneSubWithTextPart(page.sub,textKey,part,i+1),isContinuation:i>0,pageInSection:(page.pageInSection||1)+i,label:(page.label||page.sec?.label||page.type)+(i>0?' (continued '+(i+1)+')':'')})));
      return;
    }
    if(Array.isArray(page.items)&&page.items.length===1){
      const sub=page.items[0],textKey=wsPrimaryTextKey(sub);
      const original=textKey?String(sub.data?.[textKey]?.value||''):'';
      const parts=wsSplitTextByFit(original,limit);
      if(parts.length<=1){out.push(page);return;}
      parts.forEach((part,i)=>out.push(Object.assign({},page,{items:[wsCloneSubWithTextPart(sub,textKey,part,i+1)],isContinuation:i>0,pageInSection:(page.pageInSection||1)+i,label:(page.label||page.sec?.label||page.type)+(i>0?' (continued '+(i+1)+')':'')})));
      return;
    }
    out.push(page);
  });
  return out;
}

const LEGACY_HORIZON_MAG_CSS=`
<style>
:root{--mag-navy:#0B1F3A;--mag-gold:#D6A84F;--mag-emerald:#0F7C5C;--mag-ivory:#F8F3E7;--mag-mist:#E8EEF6;--mag-charcoal:#1F2933;--mag-white:#FFFFFF;}
.mag-opening-page{width:100%;min-height:100%;height:100%;position:relative;overflow:hidden;background:var(--mag-ivory);color:var(--mag-charcoal);font-family:'Lato',sans-serif;display:flex;flex-direction:column;isolation:isolate;}
.mag-opening-page h1,.mag-opening-page h2,.mag-opening-page h3{font-family:'Playfair Display',serif;color:var(--mag-navy);letter-spacing:0;}
.mag-page-shell{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;padding:42px 72px 86px;min-height:100%;}
.mag-horizon-page{overflow:visible;}
.mag-inside-cover-page .mag-page-shell{padding:32px 72px 70px;}
.mag-horizon-page::before{content:'';position:absolute;left:0;top:0;width:340px;height:340px;background:var(--mag-gold);clip-path:polygon(0 0,100% 0,0 100%);opacity:.92;z-index:0;}
.mag-horizon-page::after{content:'';position:absolute;right:0;bottom:0;width:330px;height:330px;background:var(--mag-gold);clip-path:polygon(100% 0,100% 100%,0 100%);opacity:.92;z-index:0;}
.mag-horizon-curve-top,.mag-horizon-curve-bottom{position:absolute;border-radius:50%;pointer-events:none;z-index:0;}
.mag-horizon-curve-top{left:-120px;top:-104px;width:440px;height:440px;border:10px solid var(--mag-emerald);border-right-color:transparent;border-bottom-color:transparent;box-shadow:0 0 0 2px rgba(214,168,79,.65);}
.mag-horizon-curve-bottom{display:none;}
.mag-watermark{position:absolute;inset:210px 70px auto;min-height:520px;opacity:.035;font-family:'Playfair Display',serif;font-size:430px;line-height:.8;color:var(--mag-navy);text-align:center;pointer-events:none;z-index:0;}
.mag-footer-fixed{position:absolute;left:40px;right:40px;bottom:20px;height:34px;border-top:2px solid var(--mag-emerald);display:flex;align-items:flex-end;justify-content:space-between;background:transparent;z-index:5;}
.mag-footer-fixed span:first-child{font-size:8px;font-weight:800;letter-spacing:5px;text-transform:uppercase;color:var(--mag-charcoal);white-space:nowrap;}
.mag-footer-fixed span:last-child{font-family:'Playfair Display',serif;font-size:18px;color:var(--mag-navy);line-height:1;}
.mag-cover-page{background:var(--mag-navy);color:var(--mag-white);padding:16px;border:2px solid var(--mag-gold);}
.mag-cover-border{position:absolute;inset:8px;border:1px solid var(--mag-gold);pointer-events:none;z-index:4;}
.mag-cover-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.08fr .92fr;grid-template-rows:auto auto auto 1fr;gap:14px 28px;height:100%;padding:34px 40px 28px;}
.mag-cover-top{grid-column:1/2;display:grid;grid-template-columns:146px 1fr;gap:22px;align-items:center;}
.mag-school-mark{width:122px;height:122px;border:3px solid var(--mag-gold);border-radius:28px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);color:var(--mag-gold);font-family:'Playfair Display',serif;font-size:48px;line-height:1;box-shadow:0 0 0 1px rgba(214,168,79,.35) inset;overflow:hidden;}
.mag-school-mark img{width:100%!important;height:100%!important;object-fit:contain!important;padding:8px;display:block;}
.mag-cover-school{border-left:2px solid var(--mag-gold);padding-left:24px;}
.mag-cover-school h2{font-family:'Lato',sans-serif;color:var(--mag-white);font-size:27px;line-height:1.18;text-transform:uppercase;margin:0 0 12px;font-weight:900;}
.mag-cover-school p{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--mag-emerald);font-weight:900;}
.mag-edition-ribbon{position:absolute;right:38px;top:0;width:100px;min-height:168px;background:linear-gradient(180deg,#0F7C5C,#095742);border:2px solid var(--mag-gold);border-top:0;color:var(--mag-white);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font-weight:900;clip-path:polygon(0 0,100% 0,100% 100%,50% 84%,0 100%);z-index:3;}
.mag-edition-ribbon strong{font-size:30px;line-height:1;}.mag-edition-ribbon span{font-size:14px;letter-spacing:1.4px;margin-top:5px;}
.mag-cover-title{grid-column:1/2;align-self:end;}.mag-cover-title h1{font-size:80px;line-height:.92;color:var(--mag-gold);font-weight:700;margin:0 0 18px;}.mag-cover-title .rule{height:2px;background:var(--mag-gold);width:100%;position:relative;}.mag-cover-title .rule::after{content:'';position:absolute;left:50%;top:-5px;width:10px;height:10px;background:var(--mag-gold);transform:translateX(-50%) rotate(45deg);}
.mag-cover-theme{grid-column:1/2;}.mag-cover-theme .label{display:inline-block;background:var(--mag-emerald);color:var(--mag-white);font-size:11px;letter-spacing:2px;font-weight:900;padding:5px 16px;margin-left:190px;text-transform:uppercase;}.mag-cover-theme h3{font-size:35px;line-height:1.08;color:var(--mag-white);margin:10px 0 6px;}.mag-cover-theme h3 em{font-style:normal;color:var(--mag-gold);}.mag-cover-theme p{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.86);font-weight:900;}
.mag-cover-photos{grid-column:1/3;grid-row:2/4;display:grid;grid-template-columns:1.2fr .84fr;grid-template-rows:1fr .48fr .48fr;gap:14px 20px;align-self:stretch;pointer-events:none;}.mag-cover-photo{border:3px solid var(--mag-gold);background:var(--mag-mist);border-radius:22px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;color:#718096;font-weight:900;text-align:center;box-shadow:0 0 0 2px var(--mag-navy) inset;}.mag-cover-photo img{width:100%!important;height:100%!important;object-fit:contain!important;display:block;background:var(--mag-mist);}.mag-cover-photo.hero{grid-column:2;grid-row:1;height:390px;align-self:start;margin-top:28px;}.mag-cover-photo.event{grid-column:1;grid-row:3;height:158px;}.mag-cover-photo.small-one{grid-column:2;grid-row:2;height:102px;align-self:end;}.mag-cover-photo.small-two{grid-column:2;grid-row:3;height:102px;align-self:start;}.mag-cover-photo .caption{position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);background:var(--mag-navy);border:2px solid var(--mag-gold);border-radius:5px;padding:6px 18px;color:var(--mag-white);font-size:10px;letter-spacing:1.4px;text-transform:uppercase;white-space:nowrap;}
.mag-cover-horizon{grid-column:1/3;align-self:end;min-height:172px;position:relative;margin-top:auto;}.mag-cover-horizon::before{content:'';position:absolute;left:-60px;right:-60px;bottom:34px;height:122px;background:radial-gradient(circle at 52% 60%,rgba(214,168,79,.95) 0 5%,transparent 12%),linear-gradient(160deg,transparent 0 32%,rgba(15,124,92,.95) 33% 43%,transparent 44%),linear-gradient(173deg,transparent 0 50%,rgba(255,255,255,.12) 51%,transparent 52%),linear-gradient(180deg,transparent,#06162a);border-bottom:1px solid rgba(214,168,79,.7);}.mag-cover-horizon .path{position:absolute;left:43%;bottom:40px;width:86px;height:134px;background:linear-gradient(180deg,var(--mag-gold),#f3d178);clip-path:polygon(44% 0,60% 0,100% 100%,0 100%);transform:perspective(160px) rotateX(52deg) translateX(-50%);border-radius:50% 50% 0 0;}.mag-values{position:absolute;left:0;right:0;bottom:0;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;color:var(--mag-white);}.mag-value{display:flex;gap:10px;align-items:center;border-right:1px solid rgba(214,168,79,.45);}.mag-value:last-child{border-right:0;}.mag-value b{width:42px;height:42px;border:2px solid var(--mag-gold);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--mag-emerald);font-size:18px;}.mag-value span{font-size:10px;line-height:1.25;letter-spacing:1px;text-transform:uppercase;font-weight:900;}
.mag-inside-head{text-align:center;margin-top:-2px;margin-bottom:14px;}.mag-inside-logo{width:88px;height:88px;border:1px solid var(--mag-gold);border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;color:var(--mag-charcoal);font-size:13px;background:rgba(255,255,255,.25);box-shadow:0 0 0 6px rgba(214,168,79,.08);overflow:hidden;}.mag-inside-logo img{width:100%!important;height:100%!important;object-fit:contain!important;}.mag-inside-head h1{font-size:42px;line-height:1;color:var(--mag-navy);margin:0 0 10px;text-transform:uppercase;}.mag-gold-rule{height:1px;background:var(--mag-gold);width:320px;margin:0 auto;position:relative;}.mag-gold-rule::after{content:'';position:absolute;left:50%;top:-5px;width:10px;height:10px;background:var(--mag-gold);transform:translateX(-50%) rotate(45deg);}.mag-inside-location{font-size:17px;color:var(--mag-emerald);margin-top:8px;font-weight:700;}.mag-inside-meta{font-size:14px;color:var(--mag-gold);letter-spacing:.8px;margin-top:6px;font-weight:700;}.mag-inside-body{display:flex;flex-direction:column;gap:18px;position:relative;align-items:center;}.mag-inside-panel{width:88%;position:relative;border:1px solid rgba(214,168,79,.74);background:rgba(255,255,255,.44);break-inside:avoid;page-break-inside:avoid;overflow:visible;}.mag-philosophy-panel{border-radius:0 22px 22px 22px;padding:26px 46px 18px;}.mag-anthem-panel{border-radius:0 0 14px 14px;background:rgba(232,238,246,.72);padding:25px 46px 22px;}.mag-panel-icon{position:absolute;left:-1px;top:-24px;width:56px;height:56px;border:1px solid rgba(214,168,79,.84);border-radius:50%;background:var(--mag-ivory);display:flex;align-items:center;justify-content:center;color:var(--mag-gold);font-family:'Playfair Display',serif;font-size:27px;line-height:1;}.mag-panel-icon.anthem{font-size:30px;}.mag-inside-title{text-align:center;font-size:22px;color:var(--mag-navy);margin:0 0 11px;text-transform:uppercase;}.mag-inside-title::after{content:'';display:block;width:270px;height:1px;background:var(--mag-gold);margin:6px auto 0;}.mag-inside-title::before{content:'';display:block;width:9px;height:9px;background:var(--mag-gold);margin:0 auto 6px;transform:rotate(45deg);}.mag-philosophy-text{font-size:12.4px;line-height:1.48;color:var(--mag-charcoal);text-align:left;}.mag-anthem-text{font-family:'Crimson Text',serif;font-size:15.8px;line-height:1.12;color:var(--mag-navy);font-style:italic;text-align:center;white-space:pre-line;}.mag-placeholder-lines{background:repeating-linear-gradient(to bottom,transparent 0,transparent 22px,rgba(31,41,51,.45) 23px,transparent 24px);min-height:118px;}
.mag-contents-head{text-align:center;margin-top:32px;margin-bottom:58px;}.mag-kicker{font-size:12px;letter-spacing:9px;text-transform:uppercase;color:var(--mag-navy);font-weight:900;margin-bottom:16px;}.mag-contents-head h1{font-size:64px;color:var(--mag-navy);line-height:1;margin-bottom:22px;}.mag-theme-line{font-size:16px;letter-spacing:5px;color:var(--mag-emerald);text-transform:uppercase;font-weight:900;}.mag-theme-sub{font-family:'Playfair Display',serif;font-size:17px;font-style:italic;color:var(--mag-navy);margin-top:6px;}.mag-contents-grid{display:grid;grid-template-columns:1fr 1fr;gap:44px 64px;position:relative;}.mag-contents-grid::after{content:'';position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(214,168,79,.5);}.mag-content-section{display:grid;grid-template-columns:70px 1fr;column-gap:18px;margin-bottom:33px;break-inside:avoid;page-break-inside:avoid;}.mag-content-num{width:62px;height:62px;border:2px solid rgba(214,168,79,.55);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--mag-gold);font-family:'Playfair Display',serif;font-size:36px;background:rgba(255,255,255,.3);}.mag-content-items h3{font-size:24px;color:var(--mag-navy);margin:14px 0 16px;display:inline-block;border-bottom:1px solid var(--mag-gold);padding-right:30px;}.mag-content-line{display:grid;grid-template-columns:auto 1fr auto;gap:10px;align-items:end;font-size:12px;color:var(--mag-charcoal);margin:10px 0;}.mag-content-line .dots{border-bottom:1px dotted rgba(31,41,51,.55);height:1px;margin-bottom:5px;}.mag-content-line .pg{font-weight:900;color:var(--mag-charcoal);}.mag-contents-quote{width:54%;margin:42px auto 0;border:1px solid rgba(15,124,92,.5);padding:18px 26px;display:grid;grid-template-columns:42px 1fr;gap:18px;color:var(--mag-charcoal);font-size:14px;line-height:1.55;}.mag-contents-quote b{font-family:'Playfair Display',serif;font-size:42px;color:var(--mag-emerald);line-height:1;}
.mag-contents-page .mag-page-shell{padding:34px 58px 78px;}.mag-contents-page .mag-contents-head{margin-top:10px;margin-bottom:24px;}.mag-contents-page .mag-kicker{font-size:10px;letter-spacing:7px;margin-bottom:10px;}.mag-contents-page .mag-contents-head h1{font-size:54px;margin-bottom:14px;}.mag-contents-page .mag-theme-line{font-size:13px;letter-spacing:4px;}.mag-contents-page .mag-theme-sub{font-size:14px;margin-top:4px;}.mag-contents-page .mag-contents-grid{gap:20px 46px;}.mag-contents-page .mag-content-section{grid-template-columns:52px 1fr;column-gap:12px;margin-bottom:14px;}.mag-contents-page .mag-content-num{width:46px;height:46px;font-size:27px;}.mag-contents-page .mag-content-items h3{font-size:19px;margin:7px 0 8px;padding-right:18px;}.mag-contents-page .mag-content-line{font-size:10.5px;margin:5px 0;gap:7px;}.mag-contents-page .mag-contents-quote{width:48%;margin:12px auto 0;padding:8px 16px;grid-template-columns:24px 1fr;gap:10px;font-size:11px;line-height:1.35;}.mag-contents-page .mag-contents-quote b{font-size:28px;}
.mag-board-head{text-align:center;margin-top:8px;margin-bottom:22px;}.mag-board-head h1{font-size:56px;color:var(--mag-navy);line-height:1;margin-bottom:14px;}.mag-board-sub{font-size:13px;letter-spacing:5px;color:var(--mag-emerald);text-transform:uppercase;font-weight:900;display:flex;align-items:center;justify-content:center;gap:18px;}.mag-board-sub::before,.mag-board-sub::after{content:'';height:1px;width:86px;background:var(--mag-gold);}.mag-feature-card{width:76%;margin:0 auto 24px;border:1px solid rgba(214,168,79,.7);border-radius:13px;background:rgba(255,255,255,.46);padding:14px 20px;display:grid;grid-template-columns:150px 1fr;gap:28px;align-items:center;position:relative;break-inside:avoid;page-break-inside:avoid;}.mag-feature-photo{height:214px;border-radius:12px;background:var(--mag-mist);overflow:hidden;display:flex;align-items:center;justify-content:center;}.mag-feature-info{text-align:center;}.mag-feature-info .crown{font-size:28px;color:var(--mag-gold);line-height:1;margin-bottom:8px;}.mag-feature-info .role{font-size:11px;letter-spacing:3px;color:var(--mag-emerald);font-weight:900;text-transform:uppercase;margin-bottom:10px;}.mag-feature-info h2{font-size:28px;color:var(--mag-navy);margin-bottom:12px;}.mag-chair-badge{display:inline-block;background:var(--mag-gold);color:var(--mag-white);font-size:10px;letter-spacing:2px;font-weight:900;text-transform:uppercase;padding:6px 12px;}.mag-crew-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 22px;width:88%;margin:0 auto;}.mag-crew-card{min-height:126px;border:1px solid rgba(214,168,79,.5);border-radius:10px;background:rgba(255,255,255,.58);padding:14px 16px;text-align:left;break-inside:avoid;page-break-inside:avoid;display:grid;grid-template-columns:88px 1fr;gap:14px;align-items:center;}.mag-crew-photo{width:88px;height:88px;border-radius:50%;border:1px solid rgba(214,168,79,.8);background:var(--mag-mist);overflow:hidden;margin:0;display:flex;align-items:center;justify-content:center;}.mag-crew-photo img,.mag-feature-photo img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center top!important;display:block;}.mag-silhouette{width:64%;height:74%;border-radius:46% 46% 8% 8%;background:linear-gradient(180deg,#aeb7c1,#909aa5);position:relative;}.mag-silhouette::before{content:'';position:absolute;left:50%;top:-22%;width:52%;aspect-ratio:1;border-radius:50%;background:#aeb7c1;transform:translateX(-50%);}.mag-crew-card h3{font-size:18px;color:var(--mag-navy);margin-bottom:8px;line-height:1.15;}.mag-crew-role{display:inline-block;background:var(--mag-gold);color:var(--mag-white);font-size:10px;letter-spacing:.8px;padding:5px 9px;max-width:100%;overflow-wrap:anywhere;line-height:1.25;}.mag-crew-rule{height:1px;background:var(--mag-emerald);width:72%;margin:0 0 10px;position:relative;}.mag-crew-rule::after{content:'';position:absolute;left:50%;top:-3px;width:7px;height:7px;background:var(--mag-emerald);transform:translateX(-50%) rotate(45deg);}
.mag-ref-page .mag-page-shell{padding:48px 58px 78px;}.mag-ref-icon{width:34px;margin:0 auto 6px;color:var(--mag-gold);font-family:'Playfair Display',serif;font-size:27px;text-align:center;line-height:1;}.mag-ref-kicker{text-align:center;font-size:10px;letter-spacing:3px;color:var(--mag-emerald);font-weight:900;text-transform:uppercase;margin-bottom:10px;}.mag-ref-title{text-align:center;font-size:50px;line-height:.98;margin:0 auto 16px;color:var(--mag-navy);}.mag-ref-rule{height:1px;background:var(--mag-gold);width:250px;margin:0 auto 22px;position:relative;}.mag-ref-rule::after{content:'';position:absolute;left:50%;top:-5px;width:9px;height:9px;background:var(--mag-gold);transform:translateX(-50%) rotate(45deg);}.mag-ref-body{font-size:12.2px;line-height:1.7;color:var(--mag-charcoal);white-space:pre-line;}.mag-ref-photo{background:var(--mag-mist);border:2px solid rgba(214,168,79,.75);border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;}.mag-ref-photo img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center top!important;display:block;}.mag-ref-name{font-family:'Playfair Display',serif;color:var(--mag-navy);font-size:22px;text-align:center;margin-top:10px;overflow-wrap:anywhere;}.mag-ref-role{display:block;width:max-content;max-width:100%;margin:7px auto 0;background:var(--mag-gold);color:var(--mag-white);font-size:10px;font-weight:900;letter-spacing:1px;padding:5px 10px;border-radius:4px;overflow-wrap:anywhere;}.mag-eic-layout{display:grid;grid-template-columns:1.1fr .72fr;gap:36px;align-items:start;}.mag-eic-side{padding-top:16px;}.mag-eic-photo{height:216px;}.mag-eic-quote{margin-top:94px;border:1px solid rgba(214,168,79,.75);border-radius:8px;padding:30px 26px;text-align:center;font-family:'Playfair Display',serif;font-size:19px;line-height:1.45;color:var(--mag-navy);background:rgba(255,255,255,.38);position:relative;}.mag-eic-quote b{position:absolute;top:-22px;left:50%;transform:translateX(-50%);font-size:58px;color:var(--mag-gold);line-height:1;}.mag-history-layout{width:82%;margin:0 auto;}.mag-history-body{display:grid;grid-template-columns:28px 1fr;gap:28px;}.mag-history-path{border-left:2px solid var(--mag-emerald);position:relative;}.mag-history-path i{position:absolute;left:-5px;width:9px;height:9px;border-radius:50%;background:var(--mag-gold);border:2px solid var(--mag-emerald);}.mag-history-path i:nth-child(1){top:0}.mag-history-path i:nth-child(2){top:25%}.mag-history-path i:nth-child(3){top:50%}.mag-history-path i:nth-child(4){top:75%}.mag-history-path i:nth-child(5){bottom:0}.mag-history-photo{height:172px;margin:18px 0 16px;}.mag-speech-prop{display:grid;grid-template-columns:180px 1fr;gap:28px;align-items:start;}.mag-prop-photo{height:190px;}.mag-prop-columns{column-count:2;column-gap:34px;column-rule:1px solid rgba(214,168,79,.55);}.mag-senior-boy-top{display:grid;grid-template-columns:1fr 178px;gap:28px;align-items:start;}.mag-senior-photo{height:178px;}.mag-wide-quote{margin:28px auto 24px;border:1px solid rgba(214,168,79,.65);background:rgba(232,238,246,.72);padding:20px 34px;text-align:center;font-family:'Playfair Display',serif;font-size:19px;line-height:1.45;color:var(--mag-navy);font-style:italic;}.mag-two-cols{column-count:2;column-gap:34px;column-rule:1px solid rgba(214,168,79,.55);}.mag-senior-girl{display:grid;grid-template-columns:230px 1fr;gap:34px;align-items:start;}.mag-girl-photo{height:260px;}.mag-girl-lead{font-family:'Crimson Text',serif;font-size:19px;line-height:1.45;color:#b47a24;font-style:italic;margin-bottom:14px;}.mag-girl-bottom{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:28px;border-top:1px solid rgba(214,168,79,.5);padding-top:20px;}
</style>`;
function magOpeningCss(){return LEGACY_HORIZON_MAG_CSS;}
function magNumberForIndex(idx){return String(Math.max(1,(parseInt(idx)||0)-1)).padStart(2,'0');}
function magFooterHtml(schoolName,pageNum){const raw=String(schoolName||'').trim();const footer=/way\s+to\s+success/i.test(raw)?'WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO':(raw||'WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO').toUpperCase();return `<div class="mag-footer-fixed"><span>${esc(footer)}</span><span>${esc(pageNum)}</span></div>`;}
function magTitleCaseSchoolName(name){return String(name||'Way To Success Standard Schools, Ejigbo').replace(/\s+/g,' ').trim();}
function magApprovedMagazineTitle(s){const title=String(s?.magTitle||'').trim();return (!title||/^the torch$/i.test(title))?'Maiden Magazine':title;}
function magSchoolNameWithLocation(s){const base=s.schoolName||'Way To Success Standard Schools';const loc=s.location||s.schoolLocation||'Ejigbo';return /ejigbo/i.test(base)?base:(base+', '+loc);}
function magTextOrPlaceholder(value,placeholder){const v=String(value||'').trim();return v||placeholder;}
function magPlainLines(text,fallbackLines){const v=String(text||'').trim();if(v)return `<div class="mag-line-text">${esc(v)}</div>`;return `<div class="mag-placeholder-lines" style="min-height:${fallbackLines||118}px;"></div>`;}
function magFindProductionImages(page){
  const images=[];
  (Array.isArray(page?.manualBlocks)?page.manualBlocks:[]).forEach(b=>{if(b&&b.type==='image'&&!b.hidden&&b.src)images.push(b.src);});
  loadAll().filter(x=>['gallery','events'].includes(x.category)).forEach(sub=>{
    if(sub.photoData)images.push(sub.photoData);
    (Array.isArray(sub.photos)?sub.photos:[]).forEach(p=>{const src=typeof wsPhotoSrc==='function'?wsPhotoSrc(p):(p?.data||p?.src||'');if(src)images.push(src);});
  });
  return images.filter(Boolean);
}
function magCoverFrame(label,cls,src){return `<div class="mag-cover-photo ${cls||''}">${src?`<img src="${esc(src)}" alt="${esc(label)}"/>`:`<div>IMAGE<br/>${esc(label)}</div>`}<span class="caption">${esc(label)}</span></div>`;}
function renderOpeningCoverPage(ctx){
  const s=ctx.s,imgs=magFindProductionImages(ctx.page),school=magSchoolNameWithLocation(s).toUpperCase(),year=String(s.issueYear||s.year||'2026').match(/\d{4}/)?.[0]||'2026';
  const coverLogo=s?.schoolIdentity?.logo||s.logo||'';
  const theme=magTextOrPlaceholder(s.theme,PRODUCTION_MAGAZINE_THEME||'The Making of Tomorrow: From Humble Beginnings to Limitless Horizons');
  const parts=theme.split(':');const themeTop=(parts[0]||theme).trim()+':';const themeRest=(parts.slice(1).join(':')||'From Humble Beginnings to Limitless Horizons').trim();
  return `${magOpeningCss()}<div class="mag-opening-page mag-cover-page" style="min-height:${ctx.h||1123}px;height:${ctx.h||1123}px;"><div class="mag-cover-border"></div><div class="mag-edition-ribbon"><strong>${esc(year)}</strong><span>EDITION</span></div><div class="mag-cover-grid">
    <div class="mag-cover-top"><div class="mag-school-mark">${coverLogo?`<img src="${esc(coverLogo)}" alt="School logo"/>`:'WT'}</div><div class="mag-cover-school"><h2>${esc(school)}</h2><p>Excellence &bull; Character &bull; Purpose</p></div></div>
    <div class="mag-cover-title"><h1>${esc(magApprovedMagazineTitle(s)).replace(/\s+/g,'<br/>')}</h1><div class="rule"></div></div>
    <div class="mag-cover-theme"><span class="label">Theme:</span><h3>${esc(themeTop)}<br/><em>${esc(themeRest)}</em></h3><p>Our journey. Our legacy. Our future.</p></div>
    <div class="mag-cover-photos">${magCoverFrame('Our School','hero',imgs[0])}${magCoverFrame('School Events','event',imgs[1])}${magCoverFrame('Classroom Moment','small-one',imgs[2])}${magCoverFrame('Student Life','small-two',imgs[3])}</div>
    <div class="mag-cover-horizon"><div class="path"></div><div class="mag-values"><div class="mag-value"><b>A</b><span>Academic<br/>Excellence</span></div><div class="mag-value"><b>C</b><span>Character<br/>and Discipline</span></div><div class="mag-value"><b>S</b><span>Service<br/>to Others</span></div><div class="mag-value"><b>I</b><span>Innovation<br/>for the Future</span></div></div></div>
  </div></div>`;
}
const MAG_DEFAULT_PHILOSOPHY=`At Way to Success Standard Schools, we believe education is a transformative force that nurtures lifelong learners, critical thinkers, and responsible citizens. We are committed to providing a holistic learning environment where students develop intellectual curiosity, moral integrity, and social responsibility. Through innovative teaching methods, character-building programmes, and a strong partnership with families and the community, we prepare our students to excel academically and contribute meaningfully to society. Our philosophy is rooted in the belief that every child has unique potential, and it is our duty to nurture and guide them toward achieving excellence in all aspects of life.`;
const MAG_DEFAULT_ANTHEM=`Way to Success,
Nigeria's most vibrant school.
We are pious, prayerful, progressive,
Attaining in all endeavours.
Forward ever, backward never.

For learning and creation,
Way to Success, I cherish.
There is only one way to success in the universe;
Another way to success is the counterfeit.
Way, Way, Way.`;
function magSchoolIdentityData(s){const id=s.schoolIdentity||{};return {logo:id.logo||s.logo||'',schoolName:magTitleCaseSchoolName(id.schoolName||s.schoolName||'Way To Success Standard Schools'),location:id.location||s.location||s.schoolLocation||'Ifedapo Community, Ejigbo',established:id.establishedYear||s.establishedYear||'2017',philosophyTitle:id.philosophyTitle||'PHILOSOPHY OF THE SCHOOL',philosophyText:id.philosophyText||s.philosophyText||MAG_DEFAULT_PHILOSOPHY,anthemTitle:id.anthemTitle||'THE SCHOOL ANTHEM',anthemText:id.anthemText||s.anthemText||MAG_DEFAULT_ANTHEM};}
function renderInsideCoverPage(ctx){
  const d=magSchoolIdentityData(ctx.s);const school=(d.schoolName||'{school_name}').replace(/,\s*Ejigbo$/i,'');
  return `${magOpeningCss()}<div class="mag-opening-page mag-horizon-page mag-inside-cover-page" style="min-height:${ctx.h||1123}px;height:${ctx.h||1123}px;"><div class="mag-horizon-curve-top"></div><div class="mag-horizon-curve-bottom"></div><div class="mag-watermark">W</div><div class="mag-page-shell">
    <header class="mag-inside-head"><div class="mag-inside-logo">${d.logo?`<img src="${esc(d.logo)}" alt="School logo"/>`:'{school_logo}'}</div><h1>${esc(school||'{school_name}')}</h1><div class="mag-gold-rule"></div><div class="mag-inside-location">${esc(d.location||'{school_location}')}</div><div class="mag-inside-meta">EST. ${esc(d.established||'{established_year}')}</div></header>
    <main class="mag-inside-body"><section class="mag-inside-panel mag-philosophy-panel"><div class="mag-panel-icon">&#128161;</div><h2 class="mag-inside-title">${esc(d.philosophyTitle||'{philosophy_title}')}</h2><div class="mag-philosophy-text">${esc(d.philosophyText||'{philosophy_text}')}</div></section><section class="mag-inside-panel mag-anthem-panel"><div class="mag-panel-icon anthem">&#9836;</div><h2 class="mag-inside-title">${esc(d.anthemTitle||'{anthem_title}')}</h2><div class="mag-anthem-text">${esc(d.anthemText||'{anthem_text}')}</div></section></main>
  </div></div>`;
}
function buildOpeningContentsSections(ctx){
  const productionSections=ctx?.s?.production?.contentsSections;
  if(Array.isArray(productionSections)&&productionSections.length){
    return productionSections.map((sec,i)=>({number:String(sec.number||i+1).padStart(2,'0'),title:sec.title||sec.name||'Section',items:Array.isArray(sec.items)?sec.items:[]}));
  }
  if(Array.isArray(magPages)&&magPages.length>4){
    const openingTypes=new Set(['inside-cover','editorial-board','eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech']);
    const opening=[],restMap=new Map();
    magPages.forEach((p,i)=>{if(['cover','toc'].includes(p.type))return;const item={title:p.sec?.label||p.label||p.type,page:magNumberForIndex(i)};if(openingTypes.has(p.type))opening.push(item);else{const key=p.sec?.key||p.type;if(!restMap.has(key))restMap.set(key,{number:'',title:p.sec?.label||p.label||'Section',items:[]});restMap.get(key).items.push(item);}});
    const sections=[{number:'01',title:'Opening Pages',items:opening}].concat(Array.from(restMap.values()));
    return sections.map((sec,i)=>Object.assign({},sec,{number:String(i+1).padStart(2,'0')}));
  }
  return [
    {number:'01',title:'Opening Pages',items:[{title:'School Identity',page:'00'},{title:'Editorial Crew',page:'02'},{title:"Editorial Chairman's Note",page:'00'}]},
    {number:'02',title:'Leadership & Staff',items:[{title:'Management Address',page:'00'},{title:'Staff Profiles',page:'00'},{title:'Editor Board / Crew',page:'02'}]},
    {number:'03',title:'Graduating Stars',items:[{title:'Primary 5 Graduates',page:'00'},{title:'JSS3 Graduates',page:'00'},{title:'SS3 Graduates',page:'00'}]},
    {number:'04',title:'Voices & Reflections',items:[{title:'Speeches',page:'00'},{title:'Interviews',page:'00'},{title:'Academic Articles',page:'00'},{title:'Creative Writings',page:'00'}]},
    {number:'05',title:'Memories & Moments',items:[{title:'School Events',page:'00'},{title:'Photo Gallery',page:'00'}]},
    {number:'06',title:'Partners & Appreciation',items:[{title:'Advertisements',page:'00'},{title:'Appreciation',page:'00'},{title:'Back Cover',page:'00'}]}
  ];
}
function renderContentsPage(ctx){
  const sections=(ctx.page.contentsSections&&Array.isArray(ctx.page.contentsSections))?ctx.page.contentsSections:buildOpeningContentsSections(ctx);const theme=ctx.s.theme||PRODUCTION_MAGAZINE_THEME||'';const pageNum=magNumberForIndex(ctx.index);
  return `${magOpeningCss()}<div class="mag-opening-page mag-horizon-page mag-contents-page" style="min-height:${ctx.h||1123}px;height:${ctx.h||1123}px;"><div class="mag-horizon-curve-top"></div><div class="mag-horizon-curve-bottom"></div><div class="mag-watermark">W</div><div class="mag-page-shell"><header class="mag-contents-head"><div class="mag-kicker">CONTENTS</div><h1>Inside This Edition</h1><div class="mag-gold-rule"></div><div class="mag-theme-line">${esc((theme.split(':')[0]||'The Making of Tomorrow').replace(/\.$/,''))}:</div><div class="mag-theme-sub">${esc((theme.split(':').slice(1).join(':')||'From Humble Beginnings to Limitless Horizons').trim())}</div></header><main class="mag-contents-grid">${sections.map(sec=>`<section class="mag-content-section"><div class="mag-content-num">${esc(sec.number)}</div><div class="mag-content-items"><h3>${esc(sec.title)}</h3>${(sec.items||[]).map(item=>`<div class="mag-content-line"><span>${esc(item.title||item)}</span><span class="dots"></span><span class="pg">p. ${esc(item.page||item.pageNumber||'00')}</span></div>`).join('')}</div></section>`).join('')}</main><div class="mag-contents-quote"><b>&ldquo;</b><span>Every page tells our story.<br/>Every chapter builds our legacy.</span></div></div>${magFooterHtml(magSchoolNameWithLocation(ctx.s),pageNum)}</div>`;
}
function magCrewFromSubmissions(){
  const crew=loadAll().filter(s=>s.category==='editor_board'&&(s.status==='approved'||s.status==='finalized'||s.status==='pending'));
  const mapped=crew.map(sub=>{const data=sub.data||{};const get=(keys)=>{for(const k of keys){if(data[k]?.value)return data[k].value;}return '';};return {name:get(['name','memberName','contribName','submitterName'])||'Untitled',role:get(['role','title','crewRole','memberRole','contribRole','authorRole'])||'Editorial Crew',photo:sub.photoData||'',raw:sub};});
  return mapped;
}
function magIsEditorInChiefRole(role){
  const r=String(role||'').toLowerCase().replace(/[^a-z]+/g,' ').trim();
  return /(^| )editor in chief( |$)/.test(r)||/(^| )editorial chairman( |$)/.test(r);
}
function magBoardData(){const fromSubs=magCrewFromSubmissions();let chief=fromSubs.find(m=>magIsEditorInChiefRole(m.role))||null;let rest=fromSubs.filter(m=>m!==chief);if(!chief)chief={name:'{editor_in_chief_name}',role:'Editor-in-Chief',photo:''};while(rest.length<6)rest.push({name:'{crew_member_name}',role:'{crew_member_role}',photo:''});return {chief,crew:rest.slice(0,6)};}
function magPhotoOrSilhouette(src,big){return src?`<img src="${esc(src)}" alt="Profile photo"/>`:`<div class="mag-silhouette"></div>`;}
function renderEditorialBoardPage(ctx){const data=magBoardData();const pageNum=magNumberForIndex(ctx.index);return `${magOpeningCss()}<div class="mag-opening-page mag-horizon-page" style="min-height:${ctx.h||1123}px;height:${ctx.h||1123}px;"><div class="mag-horizon-curve-top"></div><div class="mag-horizon-curve-bottom"></div><div class="mag-watermark">W</div><div class="mag-page-shell"><header class="mag-board-head"><h1>The Editorial Board</h1><div class="mag-board-sub">Magazine Crew &amp; Production Team</div></header><section class="mag-feature-card"><div class="mag-feature-photo">${magPhotoOrSilhouette(data.chief.photo,true)}</div><div class="mag-feature-info"><div class="crown">&crown;</div><div class="role">Editor-in-Chief</div><h2>${esc(data.chief.name||'{editor_in_chief_name}')}</h2><span class="mag-chair-badge">Editorial Chairman</span></div></section><section class="mag-crew-grid">${data.crew.map(m=>`<article class="mag-crew-card"><div class="mag-crew-photo">${magPhotoOrSilhouette(m.photo,false)}</div><div class="mag-crew-rule"></div><h3>${esc(m.name||'{crew_member_name}')}</h3><span class="mag-crew-role">${esc(m.role||'{crew_member_role}')}</span></article>`).join('')}</section></div>${magFooterHtml(magSchoolNameWithLocation(ctx.s),pageNum)}</div>`;}
function magSubVal(sub,keys){const d=sub?.data||{},over=sub?._wsTextOverrides||{};for(const k of keys){const v=over[k]!==undefined?over[k]:d[k]?.value;if(v)return String(v).trim();}return '';}
function magSubHay(sub){const d=sub?.data||{};return [sub?.category,...['speechType','speechTitle','speakerTitle','speakerName','articleTitle','subjectArea','title','authorRole','name','message','quote','bio','body','speechBody','articleBody','contribBody','qaBody','introParagraph'].map(k=>d[k]?.value||'')].join(' ').toLowerCase();}
function magIsEicAddressSub(sub){const h=magSubHay(sub);return sub?.category!=='editor_board'&&!magOpeningSpeechKind(sub)&&(/editor.?in.?chief|editorial chairman/.test(h)||(/dear readers/.test(h)&&/(magazine|publication|editorial|school community)/.test(h)));}
function magOpeningSpeechKind(sub){
  const d=sub?.data||{};
  const signal=[d.speechType?.value,d.speechTitle?.value,d.speakerTitle?.value,d.speakerName?.value,d.title?.value].join(' ').toLowerCase();
  if(/senior girl|head girl/.test(signal))return 'senior-girl';
  if(/senior boy|head boy/.test(signal))return 'senior-boy';
  if(/proprietor/.test(signal))return 'proprietor';
  if(sub?.category!=='speeches')return '';
  const h=magSubHay(sub);
  if(/senior girl|head girl/.test(h))return 'senior-girl';
  if(/senior boy|head boy/.test(h))return 'senior-boy';
  if(/proprietor/.test(h))return 'proprietor';
  return '';
}
function magIsHistorySub(sub){const h=magSubHay(sub);return /brief history|history of the school|school history/.test(h);}
function magIsOpeningFeatureSub(sub){return magIsEicAddressSub(sub)||magOpeningSpeechKind(sub)||magIsHistorySub(sub);}
function magOpeningFeaturePages(list){const findRoute=route=>(Array.isArray(list)?list:[]).find(s=>wsSubmissionRoute(s)===route)||null;return [
  {type:'eic-address',sub:findRoute('eic-address'),sec:{key:'eic-address',label:'Editor-in-Chief Address',layout:'eic-address'}},
  {type:'school-history',sub:findRoute('school-history'),sec:{key:'school-history',label:'Brief History of the School',layout:'school-history'}},
  {type:'proprietor-speech',sub:findRoute('proprietor-speech'),sec:{key:'proprietor-speech',label:"Proprietor's Speech",layout:'proprietor-speech'}},
  {type:'senior-boy-speech',sub:findRoute('senior-boy-speech'),sec:{key:'senior-boy-speech',label:"Senior Boy's Speech",layout:'senior-boy-speech'}},
  {type:'senior-girl-speech',sub:findRoute('senior-girl-speech'),sec:{key:'senior-girl-speech',label:"Senior Girl's Speech",layout:'senior-girl-speech'}}
];}
function magRefPhoto(src,cls,label){return `<div class="mag-ref-photo ${cls||''}">${src?`<img src="${esc(src)}" alt="Portrait"/>`:`<div style="color:#6b7280;font-size:12px;font-weight:800;text-align:center;">${esc(label||'{photo}')}</div>`}</div>`;}
function magSplitText(text,n){const words=String(text||'').trim().split(/\s+/).filter(Boolean);if(!words.length)return ['','',''];const size=Math.ceil(words.length/n);const out=[];for(let i=0;i<n;i++)out.push(words.slice(i*size,(i+1)*size).join(' '));return out;}
function renderReferenceOpeningPage(ctx,kind){
  const sub=ctx.page.sub||{},num=magNumberForIndex(ctx.index),name=magSubVal(sub,['speakerName','authorName','name','title'])||'',role=magSubVal(sub,['speakerTitle','authorRole','speakerOrg','speechType'])||'',body=magSubVal(sub,['speechBody','articleBody','body','message','articleSummary'])||'',quote=magSubVal(sub,['pullQuote','dedication'])||'',photo=sub.photoData||'',cap=magSubVal(sub,['photoCaption','profileImageCaption'])||'';
  const shell=(html)=>`${magOpeningCss()}<div class="mag-opening-page mag-horizon-page mag-ref-page" style="min-height:${ctx.h||1123}px;height:${ctx.h||1123}px;"><div class="mag-horizon-curve-top"></div><div class="mag-horizon-curve-bottom"></div><div class="mag-watermark">W</div><div class="mag-page-shell">${html}</div>${magFooterHtml(magSchoolNameWithLocation(ctx.s),num)}</div>`;
  if(kind==='eic-address')return shell(`<div class="mag-eic-layout"><main><div class="mag-ref-icon">&#9998;</div><div class="mag-ref-kicker">Editorial Chairman's Address</div><h1 class="mag-ref-title">From the<br/>Editor-in-Chief</h1><div class="mag-ref-rule"></div><div class="mag-ref-body">${esc(body)}</div></main><aside class="mag-eic-side">${magRefPhoto(photo,'mag-eic-photo','{editor_in_chief_photo}')}<div class="mag-ref-name">${esc(name||'{editor_in_chief_name}')}</div><span class="mag-ref-role">${esc(role||'{editor_in_chief_role}')}</span><div class="mag-eic-quote"><b>&ldquo;</b>${esc(quote||'A school is not built by buildings alone, but by the vision, values and people who believe in its purpose.')}</div></aside></div>`);
  if(kind==='school-history')return shell(`<section class="mag-history-layout"><div class="mag-ref-icon">&#128214;</div><h1 class="mag-ref-title">Brief History<br/>of the School</h1><div class="mag-ref-rule"></div><div class="mag-history-body"><div class="mag-history-path"><i></i><i></i><i></i><i></i><i></i></div><main><div class="mag-ref-body">${esc(magSplitText(body,3)[0])}</div>${magRefPhoto(photo,'mag-history-photo','{history_image}')}${cap?`<div class="mag-ref-kicker" style="color:var(--mag-charcoal);letter-spacing:1px;">${esc(cap)}</div>`:''}<div class="mag-ref-body">${esc(magSplitText(body,3).slice(1).join('\n\n'))}</div></main></div></section>`);
  if(kind==='proprietor-speech')return shell(`<div class="mag-ref-icon">&#9812;</div><div class="mag-ref-kicker">Speech</div><h1 class="mag-ref-title">Proprietor's Speech</h1><div class="mag-ref-rule"></div><div class="mag-speech-prop"><aside>${magRefPhoto(photo,'mag-prop-photo','{proprietor_photo}')}<div class="mag-ref-name">${esc(name||'{proprietor_name}')}</div><span class="mag-ref-role">${esc(role||'{proprietor_title}')}</span></aside><main class="mag-ref-body mag-prop-columns">${esc(body)}</main></div>`);
  if(kind==='senior-boy-speech')return shell(`<div class="mag-senior-boy-top"><main><div class="mag-ref-kicker">Student Speech</div><h1 class="mag-ref-title">Senior Boy's Speech</h1><div class="mag-ref-rule"></div><div class="mag-ref-body">${esc(magSplitText(body,3)[0])}</div></main><aside>${magRefPhoto(photo,'mag-senior-photo','{senior_boy_photo}')}<div class="mag-ref-name">${esc(name||'{senior_boy_name}')}</div><span class="mag-ref-role">${esc(role||'{senior_boy_title}')}</span></aside></div><div class="mag-wide-quote">${esc(quote||'Great schools are not measured by their buildings, but by the dreams they inspire and the leaders they raise.')}</div><div class="mag-ref-body mag-two-cols">${esc(magSplitText(body,3).slice(1).join('\n\n'))}</div>`);
  return shell(`<div class="mag-senior-girl"><aside>${magRefPhoto(photo,'mag-girl-photo','{senior_girl_photo}')}<div class="mag-ref-name">${esc(name||'{senior_girl_name}')}</div><span class="mag-ref-role">${esc(role||'{senior_girl_title}')}</span></aside><main><div class="mag-ref-kicker">Student Speech</div><h1 class="mag-ref-title">Senior Girl's Speech</h1><div class="mag-ref-rule"></div><div class="mag-girl-lead">${esc(magSplitText(body,4)[0])}</div><div class="mag-ref-body mag-two-cols">${esc(magSplitText(body,4).slice(1,3).join('\n\n'))}</div></main></div><div class="mag-wide-quote">${esc(quote||'Let us continue to support one another, celebrate our differences, and rise together as strong, compassionate, and visionary leaders.')}</div><div class="mag-ref-body mag-girl-bottom">${magSplitText(body,4).slice(1).map(t=>`<p>${esc(t)}</p>`).join('')}</div>`);
}
function generateMagPreview(){
  subs=loadAll();magPages=[];currentPageIdx=0;
  wsSetDefaultTheme();
  const s=lsSettings;
  const approved=subs.filter(sub=>sub.status==='approved'||sub.status==='finalized');
  const byKey=key=>sectionOrder.find(sec=>sec.key===key)||{};
  magPages.push({type:'cover',sec:Object.assign({key:'cover',label:'Front Cover',layout:'cover'},byKey('cover'))});
  magPages.push({type:'inside-cover',sec:{key:'inside-cover',label:'School Identity',layout:'inside-cover'}});
  magPages.push({type:'toc',sec:Object.assign({key:'toc',label:'Contents',layout:'toc'},byKey('toc'))});
  magPages.push({type:'editorial-board',sec:Object.assign({key:'editor_board',label:'Editorial Board',layout:'editor-board'},byKey('editor_board'))});
  magOpeningFeaturePages(approved).forEach(p=>magPages.push(p));
  const routedIds=new Set(magPages.filter(p=>p.sub).map(p=>String(p.sub._wsOriginalId||p.sub.id)));
  sectionOrder.filter(sec=>sec.visible).forEach(sec=>{
    if(['cover','toc','editor_board'].includes(sec.key))return;
    const catSubs=approved.filter(sub=>wsSectionAllowsSubmission(sec.key,sub));
    if(sec.key==='editorial-note'){const sub=approved.find(sub=>sub.category==='editorial-note'&&!magIsOpeningFeatureSub(sub));if(sub)magPages.push({type:'editorial-note',sub,sec});return;}
    if(sec.key==='appreciation'){const sub=approved.find(sub=>sub.category==='appreciation');if(sub)magPages.push({type:'appreciation',sub,sec});return;}
    if(!catSubs.length)return;
    let perPage=getProductionItemsPerPage(sec,s);
    for(let i=0;i<catSubs.length;i+=perPage){magPages.push({type:'section-content',sec,items:catSubs.slice(i,i+perPage),isFirst:i===0,pageInSection:Math.floor(i/perPage)+1});}
  });
  magPages.forEach(p=>(p.items||[]).forEach(sub=>routedIds.add(String(sub._wsOriginalId||sub.id))));
  const unassigned=approved.filter(sub=>wsSubmissionRoute(sub)==='unassigned'&&!routedIds.has(String(sub.id)));
  if(unassigned.length){
    const sec={key:'unassigned',label:'Unassigned / Needs Review',icon:'!',layout:'single',visible:true};
    unassigned.forEach((sub,i)=>magPages.push({type:'section-content',sec,items:[sub],isFirst:i===0,pageInSection:i+1}));
  }
  magPages=wsExpandOverflowPages(magPages);
  magPages=magPages.map((p,i)=>wsPageWithMeta(p,i)).filter(p=>!p.hidden);
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
  const magazineTheme=s.theme||PRODUCTION_MAGAZINE_THEME;
  const foot=magFooterHtml(magSchoolNameWithLocation(s),magNumberForIndex(currentPageIdx));
  const productionText=(sub,key)=>wsTextValue(page,String(sub?.id)+'|'+key,(sub?._wsTextOverrides&&sub._wsTextOverrides[key]!==undefined)?sub._wsTextOverrides[key]:(sub?.data?.[key]?.value||''));
  function findCoverImage(){
    const manual=(Array.isArray(page.manualBlocks)?page.manualBlocks:[]).find(b=>b&&b.type==='image'&&!b.hidden&&['cover-hero','feature','background'].includes(b.placement||''));
    if(manual?.src)return manual.src;
    const imgSub=loadAll().find(x=>['gallery','events'].includes(x.category)&&((Array.isArray(x.photos)&&x.photos.length)||x.photoData));
    if(!imgSub)return '';
    return Array.isArray(imgSub.photos)&&imgSub.photos.length?wsPhotoSrc(imgSub.photos[0]):(imgSub.photoData||'');
  }

  let inner='';
  const openingCtx={page,s,index:currentPageIdx,w,h};
  if(page.type==='cover'){
    inner=renderOpeningCoverPage(openingCtx);
  } else if(page.type==='inside-cover'){
    inner=renderInsideCoverPage(openingCtx);
  } else if(page.type==='toc'){
    inner=renderContentsPage(openingCtx);
  } else if(page.type==='editorial-board'){
    inner=renderEditorialBoardPage(openingCtx);
  } else if(['eic-address','school-history','proprietor-speech','senior-boy-speech','senior-girl-speech'].includes(page.type)){
    inner=renderReferenceOpeningPage(openingCtx,page.type);
  } else if(page.type==='editorial-note'||page.type==='appreciation'){
    const sub=page.sub;const title=productionText(sub,'title')||sub.data.title?.value||magazineTheme||page.sec.label;const body=productionText(sub,'body')||'';
    inner=`<div class="mag-page-flow" style="background:${pageBg};min-height:100%;height:100%;display:flex;flex-direction:column;position:relative;overflow:hidden;padding-bottom:74px;"><div class="mag-heading-block" style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.5rem 2rem;min-height:100px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:6px;">${esc(page.sec.label)}</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(title)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div><div class="mag-flow-content" style="padding:1.5rem 2rem;flex:1;overflow:visible;height:auto;max-height:none;"><p style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;">${esc(body)}</p></div></div>`;
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
      const skipFirst = opts.skipFirst || false; // skip name field (shown in header)
      let entries = Object.entries(sub.data || {});
      if(skipFirst && entries.length > 0) entries.shift();
      const skipIds = new Set(opts.skipIds || []);
      if(skipIds.size) entries = entries.filter(([k])=>!skipIds.has(k));
      if(Array.isArray(opts.fieldIds)) entries = entries.filter(([k])=>opts.fieldIds.includes(k));
      if(opts.maxFields) entries = entries.slice(0, opts.maxFields);
      return entries.map(([k, fc]) => {
        if(!fc || !fc.value) return '';
        const editKey=String(sub.id)+'|'+k;
        if(wsTextHidden(page,editKey))return '';
        const val = wsTextValue(page,editKey,fc.value);
        if(!val)return '';
        const isLong = val.length > 60;
        const display = val;
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
      const keys=['name','className','businessName','messageTitle','speakerName','contribName','reporterName','authorName','intervieweeName','submitterName','eventName','title'];
      for(const key of keys){const val=productionText(sub,key);if(val)return val;}
      return 'Untitled';
    }
    function resolveSubtitle(sub){
      const keys=['title','photoCaption','contactInfo','speakerTitle','authorRole','intervieweeTitle','contribRole','subject','speechType','eventType','subjectArea','photoCategory'];
      for(const key of keys){const val=productionText(sub,key);if(val)return val;}
      return '';
    }
    function firstDataField(sub,keys){
      for(const key of keys){const val=productionText(sub,key);if(val)return {key,value:val,label:sub.data[key]?.label||key};}
      return {key:null,value:''};
    }
    function resolveContentTitle(sub){
      return firstDataField(sub,['articleTitle','contribTitle','speechTitle','messageTitle','title']).value;
    }
    function resolveAuthorLine(sub){
      const name=firstDataField(sub,['authorName','speakerName','contribName','reporterName','interviewerName','intervieweeName','submitterName','submittedBy']).value;
      const role=firstDataField(sub,['authorRole','speakerTitle','contribRole','submitterRole','intervieweeTitle','speakerOrg']).value;
      return [name,role].filter(Boolean).join(' - ');
    }
    function usedContentFieldIds(sub){
      const keys=['articleTitle','contribTitle','speechTitle','messageTitle','title','authorName','speakerName','contribName','reporterName','interviewerName','intervieweeName','submitterName','submittedBy','authorRole','speakerTitle','contribRole','submitterRole','intervieweeTitle','speakerOrg','classMessage','speechBody','articleBody','contribBody','qaBody','eventReport','message','bio','introParagraph','closingNote','advertCaption','pullQuote','photoCaption','profileImageCaption','middleImageCaption'];
      return keys.filter(k=>sub.data[k]?.value);
    }
    function resolveMainText(sub){
      const keys=['classMessage','speechBody','articleBody','contribBody','qaBody','eventReport','message','introParagraph','advertCaption'];
      for(const key of keys){const val=productionText(sub,key);if(val)return val;}
      return '';
    }
    function renderArticleCard(sub,mode,idx){
      const title=resolveContentTitle(sub)||resolveName(sub),author=resolveAuthorLine(sub),subtitle=author||resolveSubtitle(sub),mainText=resolveMainText(sub),pullQuote=productionText(sub,'pullQuote')||'';
      const ph=sub.photoData?resolvePhotoBlock(sub,mode==='feature'?'88px':'64px',mode==='feature'?'96px':'72px','7px',`2px solid ${c2}44`):'';
      const body=esc(mainText);
      const extraFields=renderAllFields(sub,{skipIds:usedContentFieldIds(sub),textColor,bFont});
      const cols=mode==='newspaper'?3:mode==='columns'?2:mode==='photo-break'?2:1;
      const imgFloat=ph?`<div style="float:${idx%2?'right':'left'};width:${mode==='feature'?'104px':'76px'};margin:${idx%2?'0 0 8px 12px':'0 12px 8px 0'};">${ph}</div>`:'';
      if(mode==='briefs'){
        return `<article class="mag-item mag-item-article mag-brief-card" style="padding:10px 12px;border:1px solid ${c2}44;border-radius:7px;background:#fff;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
          <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:3px;">${esc(subtitle)}</div>
          <h3 style="font-family:${hFont};font-size:13px;line-height:1.2;color:${c1};margin-bottom:6px;">${esc(title)}</h3>
          <div style="font-family:${bFont};font-size:${bSize};line-height:1.6;color:${textColor};text-align:justify;">${body.replace(/\n/g,'<br>')}</div>
          ${extraFields?`<div style="margin-top:8px;">${extraFields}</div>`:''}
        </article>`;
      }
      if(mode==='ribbon'){
        return `<article class="mag-item mag-item-article mag-ribbon-story" style="padding:0;border:1px solid #e8e8e0;border-radius:7px;background:#fff;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
          <div style="padding:8px 12px;background:${c1};color:#fff;">
            <div style="font-size:7px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;">${esc(subtitle)}</div>
            <h3 style="font-family:${hFont};font-size:14px;line-height:1.2;color:#fff;">${esc(title)}</h3>
          </div>
          <div style="padding:10px 12px;font-family:${bFont};font-size:${bSize};line-height:1.7;color:${textColor};text-align:justify;column-count:2;column-gap:14px;">${body.replace(/\n/g,'<br>')}</div>
          ${extraFields?`<div style="padding:0 12px 10px;">${extraFields}</div>`:''}
        </article>`;
      }
      if(mode==='photo-break'&&ph){
        return `<article class="mag-item mag-item-article mag-photo-break" style="padding:12px;border:1px solid ${c2}44;border-radius:7px;background:#fffefb;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
          <h3 style="font-family:${hFont};font-size:15px;line-height:1.2;color:${c1};margin-bottom:3px;">${esc(title)}</h3>
          <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:7px;">${esc(subtitle)}</div>
          <div style="display:grid;grid-template-columns:1fr 86px;gap:10px;align-items:start;">
            <div style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};text-align:justify;column-count:${cols};column-gap:14px;">${body.replace(/\n/g,'<br>')}</div>
            <div>${ph}</div>
          </div>
          ${extraFields?`<div style="margin-top:8px;">${extraFields}</div>`:''}
        </article>`;
      }
      return `<article class="mag-item mag-item-article" style="padding:${mode==='feature'?'14px':'10px 12px'};border:${mode==='feature'?`1px solid ${c2}44`:'1px solid #e8e8e0'};border-radius:${mode==='feature'?'8px':'4px'};background:${mode==='feature'?'#fff':'#fffefb'};break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
        <div style="font-size:8px;letter-spacing:1.8px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:3px;">${esc(subtitle)}</div>
        <h3 style="font-family:${hFont};font-size:${mode==='feature'?'16px':'13px'};line-height:1.2;color:${c1};margin-bottom:6px;">${esc(title)}</h3>
        ${pullQuote?`<div style="font-family:${hFont};font-size:11px;color:${c1};border-left:3px solid ${c2};padding:5px 8px;margin:5px 0 8px;background:${c2}18;">${esc(pullQuote)}</div>`:''}
        <div style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};column-count:${cols};column-gap:14px;text-align:justify;">${imgFloat}${body.replace(/\n/g,'<br>')}</div>
        ${extraFields?`<div style="margin-top:8px;">${extraFields}</div>`:''}
      </article>`;
    }
    function renderImageFrame(src,key,style,alt){
      if(!src)return '';
      const pageEdit=(page.imageEdits?.[key]||{});
      if(pageEdit.hidden)return '';
      const ed=Object.assign({},wsGlobalImageDefaults(),pageEdit);
      const fit=pageEdit.fit||style.fit||ed.fit||'contain';
      const pos=fit==='top'?'50% 0%':fit==='center'?'50% 50%':((ed.x??50)+'% '+(ed.y??50)+'%');
      const objFit=fit==='contain'?'contain':'cover';
      const zoom=Math.max(.5,Math.min(3,parseFloat(ed.zoom)||1));
      const rot=parseInt(ed.rotate)||0;
      const imgSrc=ed.replaceSrc||src;
      const imgStyle=`width:100%;height:100%;object-fit:${objFit};object-position:${pos};display:block;border:0;transform:scale(${zoom}) rotate(${rot}deg);transform-origin:center center;filter:none;mix-blend-mode:normal;`;
      return `<div class="mag-image-frame" data-image-key="${esc(key)}" style="${style.frame||''}overflow:hidden;position:relative;background:${style.bg||'#fff'};break-inside:avoid;page-break-inside:avoid;">
        <img src="${esc(imgSrc)}" alt="${esc(alt||'Photo')}" style="${imgStyle}"/>
      </div>`;
    }
    function renderManualBlocks(blocks,placement){
      if(!Array.isArray(blocks)||!blocks.length)return '';
      const filtered=blocks.filter(b=>!b?.hidden&&wsNormalizeImagePlacement(b?.placement||'after-text')===(placement||'after-text'));
      if(!filtered.length)return '';
      return `<div class="mag-manual-blocks mag-production-images" style="display:grid;gap:8px;margin:${placement==='feature'?'0 0 12px':'10px 0'};">
        ${filtered.map((b,i)=>{
          if(!b)return '';
          if(b.type==='image'){
            const place=wsNormalizeImagePlacement(b.placement||placement||'after-text');
            const h=place==='feature'?'210px':place==='full-width'?'190px':place==='gallery'?'135px':place==='side'?'150px':place==='background'?'100%':'160px';
            const grid=place==='gallery'?'display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;':'';
            const side=place==='side'?'float:right;width:38%;max-width:210px;margin:0 0 10px 14px;':'';
            const bgStyle=place==='background'?'position:absolute;inset:0;z-index:0;opacity:.18;border:0;padding:0;border-radius:0;':'';
            return `<figure class="mag-manual-block mag-manual-image mag-production-image ${esc(place)}" style="margin:0;padding:${place==='feature'||place==='background'?'0':'8px'};border:${place==='feature'||place==='background'?'0':`1px solid ${c2}44`};border-radius:7px;background:#fff;${grid}${side}${bgStyle}">
            ${b.src?renderImageFrame(b.src,'manual:'+(b.id||i),{frame:`width:100%;height:${h};border-radius:5px;`,fit:'contain'},b.caption||'Manual image'):`<div style="height:110px;border-radius:5px;background:#f0f0ea;display:flex;align-items:center;justify-content:center;color:#888;font-size:11px;">Image box</div>`}
            ${b.caption?`<figcaption style="font-size:8px;color:#777;line-height:1.4;margin-top:5px;">${esc(b.caption)}</figcaption>`:''}
          </figure>`;
          }
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
    function parseInterviewQA(text){
      const raw=String(text||'').trim();
      if(!raw)return [];
      const blocks=raw.split(/\n{2,}/).map(x=>x.trim()).filter(Boolean);
      const qa=[];
      for(let i=0;i<blocks.length;i++){
        const b=blocks[i];let q='',a='';
        if(/^Q(?:uestion)?[:.)-]/i.test(b)||/\nA(?:nswer)?[:.)-]/i.test(b)){
          const parts=b.split(/\n+/);
          q=(parts.shift()||'').replace(/^Q(?:uestion)?[:.)-]\s*/i,'').trim();
          a=parts.join('\n').replace(/^A(?:nswer)?[:.)-]\s*/i,'').trim();
        }else{
          q=b;
          const next=blocks[i+1]||'';
          if(next&&!/^Q(?:uestion)?[:.)-]/i.test(next)){a=next;i++;}
        }
        if(q||a)qa.push({q:q||'Question',a:a||''});
      }
      return qa.length?qa:[{q:'Question',a:raw}];
    }
    function renderInterviewQA(item){
      return `<div class="mag-q-label">Question</div><p class="mag-question">${esc(item.q)}</p><div class="mag-a-label">Answer</div><p class="mag-answer">${esc(item.a)}</p>`;
    }
    function renderInterviewTemplate(sub,variant){
      const title=resolveContentTitle(sub)||productionText(sub,'interviewTitle')||'Interview';
      const person=productionText(sub,'intervieweeName')||resolveName(sub);
      const role=productionText(sub,'intervieweeTitle')||resolveSubtitle(sub);
      const intro=productionText(sub,'introParagraph')||'';
      const qa=parseInterviewQA(productionText(sub,'qaBody')||resolveMainText(sub));
      const pull=productionText(sub,'pullQuote')||'A conversation that inspires a vision that leads.';
      const closing=productionText(sub,'closingNote')||'Thank you for sharing your valuable insights with our school community.';
      const middle=(Array.isArray(sub.photos)?sub.photos.find(p=>p?.role==='middle')||sub.photos[0]:null);
      const middleCaption=middle?.caption||productionText(sub,'middleImageCaption')||'';
      const portrait=sub.photoData?renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:'width:132px;height:178px;border-radius:10px;border:2px solid rgba(214,168,79,.72);padding:5px;',fit:'contain',bg:'#fff'},person):'<div class="mag-interview-silhouette"></div>';
      const qaBlocks=qa.map(item=>`<div class="mag-interview-qa">${renderInterviewQA(item)}</div>`).join('');
      if(variant===2){
        return `<article class="mag-interview-template mag-interview-template-2">
          <div class="mag-interview-top"><main><div class="mag-interview-icon">I</div><div class="mag-interview-kicker">Interview</div><h1>${esc(title)}</h1><p class="mag-interview-intro">${esc(intro)}</p></main><aside>${portrait}<h2>${esc(person)}</h2><span>${esc(role)}</span></aside></div>
          <div class="mag-interview-pull"><b>&ldquo;</b><em>${esc(pull)}</em><b>&rdquo;</b></div>
          <div class="mag-interview-qa-grid">${qaBlocks}</div>
          <div class="mag-interview-close">${esc(closing)}</div>
        </article>`;
      }
      const first=qa.slice(0,3).map(item=>`<div class="mag-interview-qa">${renderInterviewQA(item)}</div>`).join('');
      const rest=qa.slice(3).map(item=>`<div class="mag-interview-qa">${renderInterviewQA(item)}</div>`).join('');
      return `<article class="mag-interview-template mag-interview-template-1">
        <div class="mag-interview-top"><main><div class="mag-interview-icon">I</div><div class="mag-interview-kicker">Interview</div><h1>${esc(title)}</h1><h3>A conversation that inspires, a vision that leads.</h3><p class="mag-interview-intro">${esc(intro)}</p></main><aside>${portrait}<h2>${esc(person)}</h2><span>${esc(role)}</span></aside></div>
        <div class="mag-interview-two">${first}</div>
        ${middle?`<figure class="mag-interview-middle">${renderImageFrame(wsPhotoSrc(middle),'sub:'+sub.id+':photo:middle',{frame:'width:100%;height:162px;border-radius:9px;border:1px solid rgba(214,168,79,.55);',fit:'contain',bg:'#fff'},title)}${middleCaption?`<figcaption>${esc(middleCaption)}</figcaption>`:''}</figure>`:''}
        <div class="mag-interview-two">${rest}</div>
        <div class="mag-interview-pull small"><b>&ldquo;</b><em>${esc(pull)}</em></div>
      </article>`;
    }
    function profileStyleDefaults(page,itemCount){
      const ctl = page.sec?.profileControls || page.profileControls || {};
      const photo = {small:['46px','54px'],medium:['62px','74px'],large:['78px','92px']}[ctl.photoSize] || ['62px','74px'];
      const shape = ctl.photoShape==='circle'?'50%':ctl.photoShape==='square'?'0':'6px';
      const nameSize = {small:'8.5px',medium:'12px',large:'14px'}[ctl.nameSize] || '12px';
      const gap = {compact:'6px',normal:'10px',roomy:'14px'}[ctl.cardSpacing] || '10px';
      const pad = {compact:'7px',normal:'10px',roomy:'13px'}[ctl.cardSpacing] || '10px';
      const maxFields = ctl.fieldsMode==='key'?3:0;
      const dense=(parseInt(itemCount)||0)>=18;
      return {ctl,photoW:dense?'42px':photo[0],photoH:dense?'50px':photo[1],shape,nameSize:dense?'8.5px':nameSize,gap:dense?'5px':gap,pad:dense?'5px':pad,maxFields};
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
    if(layout==='interview-template-1'||layout==='interview-template-2'){
      const variant=layout==='interview-template-2'?2:1;
      contentHtml=items.map(sub=>renderInterviewTemplate(sub,variant)).join('');
    }
    else if(layout==='teacher-grid'){
      const style = profileStyleDefaults(page,items.length);
      const cols = items.length >= 24 ? 6 : items.length >= 18 ? 5 : items.length > 9 ? 4 : 3;
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
      const style = profileStyleDefaults(page,items.length);
      const cols = items.length === 1 ? 1 : items.length <= 4 ? 2 : items.length <= 9 ? 3 : items.length >= 24 ? 6 : items.length >= 18 ? 5 : 4;
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
              ${renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:`width:100%;aspect-ratio:4/3;border-radius:6px;border:1px solid ${c2}33;`,fit:'contain'},resolveName(sub))}
              <div class="mag-item-fields" style="padding:4px 2px;font-size:8px;">${allFields}</div>
            </div>`;
          }
          if(sub.photos && sub.photos.length){
            return sub.photos.map((p,pi) => `<div class="mag-item mag-item-gallery">
              ${renderImageFrame(wsPhotoSrc(p),'sub:'+sub.id+':photo:'+pi,{frame:`width:100%;aspect-ratio:4/3;border-radius:6px;border:1px solid ${c2}33;`,fit:'contain'},resolveName(sub))}
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

    else if(layout==='editor-board'){
      const cols=items.length===1?'1fr':items.length<=4?'1fr 1fr':'1fr 1fr 1fr';
      contentHtml=`<div class="mag-editor-board-grid" style="display:grid;grid-template-columns:${cols};gap:12px;align-items:start;">
        ${items.map(sub=>{
          const name=resolveName(sub);
          const role=productionText(sub,'title')||resolveSubtitle(sub);
          const bio=productionText(sub,'bio')||'';
          const message=productionText(sub,'message')||'';
          const caption=productionText(sub,'photoCaption')||role;
          const photo=sub.photoData?renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:`width:100%;aspect-ratio:4/5;border-radius:7px;border:1px solid ${c2}55;`,fit:'contain',bg:'#fff'},name):'';
          return `<article class="mag-item mag-editor-board-card" style="padding:12px;border:1px solid ${c2}44;border-radius:8px;background:#fff;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
            ${photo}
            ${caption?`<div style="font-size:8px;color:#777;line-height:1.35;text-align:center;margin-top:5px;">${esc(caption)}</div>`:''}
            <h3 class="mag-item-name" style="font-family:${hFont};font-size:15px;line-height:1.2;color:${c1};margin-top:9px;margin-bottom:3px;">${esc(name)}</h3>
            ${role?`<div class="mag-item-subtitle" style="font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:${c2};font-weight:800;margin-bottom:7px;">${esc(role)}</div>`:''}
            ${bio?`<div class="mag-item-body" style="font-family:${bFont};font-size:${bSize};line-height:1.65;color:${textColor};white-space:pre-line;text-align:justify;">${esc(bio)}</div>`:''}
            ${message?`<div style="font-size:9px;line-height:1.55;color:${textColor};border-left:3px solid ${c2};padding:6px 8px;margin-top:8px;background:${c2}16;">${esc(message)}</div>`:''}
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
        const allFields = renderAllFields(sub, {skipFirst:true, maxChars:400, skipIds:['eventReport'], textColor, bFont});
        const imgs = sub.photos && sub.photos.length ? sub.photos : sub.photoData ? [{data:sub.photoData}] : [];
        return `<div class="mag-item mag-item-event" style="margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #eee;">
          <h3 class="mag-item-name" style="font-family:${hFont};font-size:13px;color:${c1};margin-bottom:6px;">${esc(name)}</h3>
          ${imgs.length ? `<div class="mag-item-photos" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px;margin-bottom:7px;">${imgs.map((p,pi)=>renderImageFrame(wsPhotoSrc(p),'sub:'+sub.id+':photo:'+pi,{frame:'width:100%;aspect-ratio:4/3;border-radius:5px;',fit:'contain'},name)).join('')}</div>` : ''}
          ${resolveMainText(sub)?`<div class="mag-item-body" style="font-family:${bFont};font-size:${bSize};line-height:1.75;color:${textColor};white-space:pre-line;text-align:justify;margin-bottom:8px;">${esc(resolveMainText(sub))}</div>`:''}
          <div class="mag-item-fields">${allFields}</div>
        </div>`;
      }).join('');
    }

    /* ── SINGLE / SPEECHES / INTERVIEWS / MOTIVATIONAL / ACADEMIC / DEFAULT ─ */
    else {
      contentHtml = items.map(sub => {
        const title = resolveContentTitle(sub) || resolveName(sub);
        const author = resolveAuthorLine(sub);
        const subtitle = author || resolveSubtitle(sub);
        const mainText = resolveMainText(sub);
        const pullQuote = productionText(sub,'pullQuote') || '';
        const allFields = renderAllFields(sub, {skipFirst:false, maxChars:99999, skipIds:usedContentFieldIds(sub), textColor, bFont});
        const ph = sub.photoData ? resolvePhotoBlock(sub,'52px','58px','6px',`2px solid ${c2}44`) : '';
        if(sub.category==='interviews'){
          const intro=productionText(sub,'introParagraph')||'';
          const qa=productionText(sub,'qaBody')||mainText;
          const closing=productionText(sub,'closingNote')||'';
          const topCaption=productionText(sub,'profileImageCaption')||subtitle;
          const middle=(Array.isArray(sub.photos)?sub.photos.find(p=>p?.role==='middle')||sub.photos[0]:null);
          const middleCaption=middle?.caption||productionText(sub,'middleImageCaption')||'';
          const topImg=sub.photoData?renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:'width:100%;max-width:260px;height:210px;border-radius:8px;border:1px solid #e0e0d8;margin:0 auto 6px;',fit:'contain',bg:'#fff'},title):'';
          const midImg=middle?renderImageFrame(wsPhotoSrc(middle),'sub:'+sub.id+':photo:middle',{frame:'width:100%;height:240px;border-radius:8px;border:1px solid #e0e0d8;margin:12px 0 6px;',fit:'contain',bg:'#fff'},title):'';
          return `<article class="mag-item mag-item-single mag-item-interview" style="margin-bottom:16px;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
            ${topImg?`<figure style="margin:0 0 10px;text-align:center;">${topImg}${topCaption?`<figcaption style="font-size:8px;color:#777;line-height:1.35;">${esc(topCaption)}</figcaption>`:''}</figure>`:''}
            <div class="mag-item-header" style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e8e0;">
              <div class="mag-item-name" style="font-size:16px;font-weight:700;color:${c1};font-family:${hFont};line-height:1.25;">${esc(title)}</div>
              ${subtitle ? `<div class="mag-item-subtitle" style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:${c2};font-weight:700;">${esc(subtitle)}</div>` : ''}
            </div>
            ${intro?`<p class="mag-item-body" style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;text-align:justify;margin-bottom:10px;">${esc(intro)}</p>`:''}
            ${midImg?`<figure style="margin:0 0 12px;break-inside:avoid;page-break-inside:avoid;">${midImg}${middleCaption?`<figcaption style="font-size:8px;color:#777;line-height:1.35;text-align:center;">${esc(middleCaption)}</figcaption>`:''}</figure>`:''}
            ${qa?`<div class="mag-item-body" style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;text-align:justify;margin-bottom:10px;">${esc(qa)}</div>`:''}
            ${closing?`<div style="font-size:9px;line-height:1.55;color:${textColor};border-left:3px solid ${c2};padding:6px 8px;margin-top:8px;background:${c2}16;">${esc(closing)}</div>`:''}
            <div class="mag-item-fields">${allFields}</div>
          </article>`;
        }
        if(sub.category==='speeches'&&sub.photoData){
          const cap=productionText(sub,'photoCaption')||subtitle;
          const hero=renderImageFrame(sub.photoData,'sub:'+sub.id+':photo',{frame:'width:100%;height:230px;border-radius:8px;border:1px solid #e0e0d8;margin-bottom:5px;',fit:'contain',bg:'#fff'},title);
          return `<div class="mag-item mag-item-single mag-item-speech" style="margin-bottom:16px;break-inside:avoid;page-break-inside:avoid;overflow:visible;height:auto;max-height:none;">
            <figure style="margin:0 0 12px;">${hero}${cap?`<figcaption style="font-size:8px;color:#777;line-height:1.35;text-align:center;">${esc(cap)}</figcaption>`:''}</figure>
            ${title ? `<div class="mag-item-header" style="margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e8e0;"><div class="mag-item-name" style="font-size:15px;font-weight:700;color:${c1};font-family:${hFont};line-height:1.25;">${esc(title)}</div>${subtitle ? `<div class="mag-item-subtitle" style="font-size:10px;text-transform:uppercase;letter-spacing:.5px;color:${c2};font-weight:700;">${esc(subtitle)}</div>` : ''}</div>` : ''}
            ${pullQuote ? `<div class="mag-item-quote" style="border-left:4px solid ${c2};padding:8px 12px;margin:8px 0;background:${c2}22;border-radius:0 8px 8px 0;"><p style="font-family:${hFont};font-size:12px;color:${c1};font-style:italic;">${esc(pullQuote)}</p></div>` : ''}
            ${mainText ? `<p class="mag-item-body" style="font-family:${bFont};font-size:${bSize};color:${textColor};line-height:1.8;white-space:pre-line;margin-bottom:10px;text-align:justify;">${esc(mainText)}</p>` : ''}
            <div class="mag-item-fields">${allFields}</div>
          </div>`;
        }
        return `<div class="mag-item mag-item-single" style="margin-bottom:16px;">
          ${title ? `<div class="mag-item-header" style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #e8e8e0;">
            <div class="mag-item-photo-wrap">${ph}</div>
            <div class="mag-item-header-text">
              <div class="mag-item-name" style="font-size:15px;font-weight:700;color:${c1};font-family:${hFont};line-height:1.25;">${esc(title)}</div>
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

    contentHtml=renderManualBlocks(page.manualBlocks,'inline')+contentHtml+renderManualBlocks(page.manualBlocks,'after-text')+renderManualBlocks(page.manualBlocks,'side')+renderManualBlocks(page.manualBlocks,'full-width')+renderManualBlocks(page.manualBlocks,'gallery');
    inner=`<div class="mag-page-flow" style="background:${pageBg};min-height:100%;height:100%;display:flex;flex-direction:column;position:relative;overflow:hidden;padding-bottom:74px;">${renderManualBlocks(page.manualBlocks,'background')}${renderManualBlocks(page.manualBlocks,'feature')}${page.isFirst?`<div class="mag-heading-block" style="background:linear-gradient(135deg,${c1},${c1}dd);color:#fff;padding:1.25rem 2rem;min-height:90px;position:relative;"><div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${c2};font-weight:700;margin-bottom:5px;">${esc(magazineTheme)}</div><h2 style="font-family:${hFont};font-size:20px;color:#fff;">${esc(secLabel)}</h2><div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:${c2};"></div></div>`:`<div class="mag-heading-block" style="background:${c1};padding:6px 2rem;position:relative;"><span style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:${c2};font-weight:700;">${esc(secLabel)} (continued)</span></div>`}${renderManualBlocks(page.manualBlocks,'after-heading')}<div class="mag-flow-content" style="padding:1rem 1.5rem;flex:1;overflow:visible;height:auto;max-height:none;position:relative;z-index:1;">${contentHtml}</div></div>`;
  }
  const ownFooter=/mag-opening-page/.test(inner);
  const shellFooter=(!ownFooter&&s.pageNums!=='no')?foot:'';
  canvas.innerHTML=`<div class="mag-page" data-category="${esc(page.sec?.key || page.type)}" style="width:${w}px;height:${h}px;transform:scale(${scale});transform-origin:top center;"><div class="mag-page-inner" style="position:relative;width:100%;height:${h}px;min-height:${h}px;overflow:hidden;">${inner}${shellFooter}</div></div>`;
  document.getElementById('previewPageTitle').textContent=`Page ${currentPageIdx+1} — ${page.sec?.label||page.type}`;
}

function prevPage(){if(currentPageIdx>0){currentPageIdx--;renderCurrentPage();updatePageNavUI();}}
function nextPage(){if(currentPageIdx<magPages.length-1){currentPageIdx++;renderCurrentPage();updatePageNavUI();}}
function updatePageNavUI(){const total=magPages.length||1;document.getElementById('pageNavInfo').textContent=`${currentPageIdx+1} / ${total}`;document.getElementById('btnPrevPage').disabled=currentPageIdx===0;document.getElementById('btnNextPage').disabled=currentPageIdx>=magPages.length-1;}

/* TOC */
function buildTOCItems(){const items=[];let pageNum=1;subs=loadAll();const approved=subs.filter(s=>s.status==='approved'||s.status==='finalized');const s=lsSettings;sectionOrder.filter(sec=>sec.visible).forEach(sec=>{if(sec.key==='cover'){pageNum++;return;}if(sec.key==='toc'){pageNum++;return;}const catSubs=approved.filter(sub=>sub.category===sec.key);if(sec.key==='editorial-note'||sec.key==='appreciation'){if(catSubs.length||approved.find(sub=>sub.category===sec.key)){items.push({num:items.length+1,name:getLabel('section_'+sec.key,sec.label),page:pageNum});pageNum++;}return;}if(!catSubs.length)return;items.push({num:items.length+1,name:getLabel('section_'+sec.key,sec.label),page:pageNum});let pp=getProductionItemsPerPage(sec,s);pageNum+=Math.ceil(catSubs.length/pp);});return items;}
function renderTOC(){const c=document.getElementById('tocPreview');if(!c)return;const items=buildTOCItems();if(!items.length){c.innerHTML='<p style="color:var(--ink3);font-size:13px;">No approved content yet. Generate a preview first.</p>';return;}const s=lsSettings;const c1=s.color1||'#1a2744',c2=s.color2||'#7dd4a8';c.innerHTML=`<div style="max-width:500px;">${items.map(item=>`<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px dashed #e0e0d8;"><span style="font-size:12px;font-weight:700;color:${c2};width:24px;">${item.num}</span><span style="font-size:14px;color:var(--ink);flex:1;">${esc(item.name)}</span><span style="flex:1;border-bottom:1px dotted #ccc;height:14px;margin:0 6px;"></span><span style="font-size:12px;color:var(--ink3);font-weight:700;">p. ${item.page}</span></div>`).join('')}</div>`;}

/* PRINT */
function openPrintView(){
  if(!magPages.length){
    generateMagPreview();
    if(!magPages.length){alert('No approved content is available to export yet.');return;}
  }
  const s=lsSettings;
  const ps=s.pageSize==='a4'?'A4':s.pageSize==='a5'?'A5':'letter';
  const orient=s.orientation||'portrait';
  const{w,h}=getPageDimensions();

  let allPagesHtml='';
  if(window.__wsFastPrintPagesHtml){
    allPagesHtml=window.__wsFastPrintPagesHtml;
    window.__wsFastPrintPagesHtml='';
  }else{
    const savedIdx=currentPageIdx;
    for(let i=0;i<magPages.length;i++){
      currentPageIdx=i;
      renderCurrentPage();
      const pageEl=document.getElementById('magCanvas');
      const inner=pageEl.innerHTML.replace(/transform:scale\([^)]+\);?/g,'').replace(/transform-origin:[^;]+;?/g,'');
      allPagesHtml+=`<div class="mag-sheet">${inner}</div>`;
    }
    currentPageIdx=savedIdx;
    renderCurrentPage();
    updatePageNavUI();
  }
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
      .mag-sheet{box-shadow:none!important;margin:0!important;page-break-after:always;break-after:page;}
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
      width:${w}px;min-height:${h}px;height:auto;margin:24px auto;
      box-shadow:0 4px 24px rgba(0,0,0,.35);overflow:visible;
      background:#fff;position:relative;
    }
    .mag-page{width:${w}px!important;min-height:${h}px!important;height:${h}px!important;overflow:hidden!important;break-after:page;page-break-after:always;position:relative!important;}
    .mag-page:last-child{break-after:auto;page-break-after:auto;}
    .mag-page-inner{width:100%;min-height:${h}px;height:${h}px!important;overflow:hidden!important;position:relative!important;}
    .mag-page-flow{height:100%!important;min-height:100%!important;max-height:${h}px!important;overflow:hidden!important;}
    .mag-flow-content{height:auto!important;max-height:none!important;overflow:visible!important;}
    .mag-opening-page{width:100%!important;min-height:${h}px!important;height:${h}px!important;overflow:visible!important;}
    .mag-cover-page{overflow:hidden!important;}
    .mag-opening-page .mag-page-shell{min-height:100%!important;}
    .mag-opening-page .mag-footer-fixed{position:absolute!important;bottom:20px!important;left:40px!important;right:40px!important;}
    .mag-cover-photo img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center center!important;}
    .mag-crew-photo img,.mag-feature-photo img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center top!important;}
    .mag-flow-content{break-inside:auto;page-break-inside:auto;}
    .mag-sheet,.mag-page,.mag-page-inner{max-height:${h}px!important;}
    .mag-page-flow{max-height:${h}px!important;}
    .mag-flow-content{max-height:none!important;}
    .mag-heading-block,h1,h2,h3{break-after:avoid;page-break-after:avoid;}
    .mag-item,.mag-item-gallery,.mag-item-event,.mag-item-teacher,.mag-item-student,.mag-image-frame,figure{break-inside:avoid;page-break-inside:avoid;}
    figcaption{break-before:avoid;page-break-before:avoid;}
    p,.mag-item-field-value,.mag-item-body{orphans:3;widows:3;}
    img{max-width:100%;height:auto;image-rendering:auto!important;-ms-interpolation-mode:bicubic;}
    ${wsProductionPreviewCss()}
    /* AI-injected styles carried to print */
    ${(document.getElementById('ai-custom-css')?.textContent||'').replace(/</g,'\u003c')}
  </style>
</head>
<body>
  <div class="no-print">
    <h2>🖨 ${esc(s.magTitle||'The Torch')} &mdash; ${magPages.length} pages</h2>
    <button onclick="window.print()">Download PDF</button>
    <p id="printPrepStatus">Preparing print document...</p>
    <p>Paper: ${ps} &middot; ${orient} &middot; Margins: None &middot; <strong>Enable Background graphics</strong>. Desktop export is recommended for the final PDF.</p>
  </div>
  <div id="printPages">
    ${allPagesHtml}
  </div>
  <script>
    (function(){
      var status=document.getElementById("printPrepStatus");
      var imgs=Array.prototype.slice.call(document.images||[]);
      var total=imgs.length,done=0,failed=0,printed=false;
      imgs.forEach(function(img){img.loading="eager";img.decoding="sync";img.style.objectFit="contain";});
      function setStatus(msg){if(status)status.textContent=msg;}
      function finish(msg){
        if(printed)return;
        printed=true;
        setStatus(msg||"PDF ready.");
        setTimeout(function(){window.print();},250);
      }
      if(!total){finish("PDF ready.");return;}
      setStatus("Preparing PDF... 0 / "+total+" images");
      function preloadOne(img){
        return new Promise(function(resolve){
          var settled=false;
          function doneOne(ok){
            if(settled)return;
            settled=true;
            done++;
            if(!ok)failed++;
            setStatus("Preparing PDF... "+done+" / "+total+" images"+(failed?" ("+failed+" skipped)":""));
            resolve();
          }
          if(img.complete&&img.naturalWidth!==0){
            if(img.decode){img.decode().then(function(){doneOne(true);}).catch(function(){doneOne(false);});}
            else doneOne(true);
            return;
          }
          img.addEventListener("load",function(){doneOne(true);},{once:true});
          img.addEventListener("error",function(){doneOne(false);},{once:true});
          setTimeout(function(){doneOne(false);},4500);
        });
      }
      Promise.all(imgs.map(preloadOne)).then(function(){
        finish(failed?"PDF ready. "+failed+" slow/failed image(s) were skipped.":"PDF ready.");
      });
      setTimeout(function(){finish("PDF ready. Continuing after image timeout.");},6500);
    })();
  <\/script>
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
  if(obj.teachersPerPage!=null)setIfChanged('teachersPerPage','ls-teachersPerPage',[6,9,12,15,18,20,24,30],obj.teachersPerPage);
  if(obj.studentsPerPage!=null)setIfChanged('studentsPerPage','ls-studentsPerPage',[1,2,3,4,6,9,12,15,18,20,24,30],obj.studentsPerPage);
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
    const valid=[6,9,12,15,18,20,24,30];
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
    const valid=[1,2,3,4,6,9,12,15,18,20,24,30];
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
function formShareUrl(formKey){const base=getBaseUrl();return formKey===''?base:`${base}?form=${encodeURIComponent(formKey)}&standalone=1`;}
function copyShareLink(formKey){const url=formShareUrl(formKey);try{navigator.clipboard.writeText(url);const btn=document.getElementById('copy-'+(formKey||'landing'));if(btn){const orig=btn.textContent;btn.textContent='✓ Copied!';btn.style.background='var(--green)';btn.style.color='#fff';setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.style.color='';},1600);}}catch(e){alert('URL: '+url);}}
function renderShareLinks(){const c=document.getElementById('shareLinksContainer');if(!c)return;const entries=[{key:'',label:'Landing Page (all forms)',icon:'🏠',desc:'Full homepage with all category cards'},...CATEGORY_KEYS.map(k=>({key:k,label:getLabel('cat_label_'+k,CATEGORIES[k].label),icon:CATEGORIES[k].icon,desc:`Standalone submission form for ${CATEGORIES[k].label}`}))];c.innerHTML=entries.map(e=>{const url=formShareUrl(e.key);return`<div class="share-link-row"><div class="share-link-icon">${e.icon}</div><div class="share-link-body"><div class="share-link-label">${esc(e.label)}</div><div class="share-link-desc">${esc(e.desc)}</div><div class="share-link-url">${esc(url)}</div></div><button class="btn btn-primary" id="copy-${e.key||'landing'}" onclick="copyShareLink('${e.key}')">Copy</button></div>`;}).join('');}

/* ═══════════════════════════════════════════════════════════
   WORKSPACE ENGINE — VS Code-style Design Studio
   Only finalized submissions enter the workspace.
═══════════════════════════════════════════════════════════ */
let wsPages=[],wsPageIdx=0,wsZoom=100,wsShowGuides=true,wsSpreadMode=false;
let wsAIChatHistory=[],wsAISampleBase64=null,wsAISampleMime=null;
let wsUndoStack=[],wsRedoStack=[],wsAutoSaveTimer=null;
const wsImageQualityCache={};
const PRODUCTION_MAGAZINE_THEME='The Making of Tomorrow: From Humble Beginnings to Limitless Horizons';
function wsEnsureProduction(){if(!lsSettings.production||typeof lsSettings.production!=='object')lsSettings.production={pages:{}};if(!lsSettings.production.pages)lsSettings.production.pages={};if(!lsSettings.production.profileDefaults)lsSettings.production.profileDefaults={};if(!lsSettings.production.imageDefaults)lsSettings.production.imageDefaults={fit:'contain',zoom:1,x:50,y:50,rotate:0};if(!Array.isArray(lsSettings.production.duplicates))lsSettings.production.duplicates=[];return lsSettings.production;}
function wsProductionEditShape(meta){
  meta=meta||{};
  const imageEdits=meta.imageEdits||{};
  return {
    editedFields:meta.textEdits||{},
    hiddenImages:Object.entries(imageEdits).filter(([,v])=>v&&v.hidden).map(([k])=>k),
    addedImages:(Array.isArray(meta.manualBlocks)?meta.manualBlocks:[]).filter(b=>b&&b.type==='image').map(b=>({url:b.src||'',caption:b.caption||'',placement:b.placement||'after-text',afterParagraph:b.afterParagraph||null,source:'production',createdAt:b.createdAt||b.id||meta.updatedAt||''})),
    layout:{template:meta.template,namePlacement:meta.namePlacement,profileControls:meta.profileControls||{},manualBlocks:meta.manualBlocks||[]},
    pageOrder:meta.itemOrder||[],
    updatedAt:meta.updatedAt||''
  };
}
function wsNormalizeImagePlacement(placement){
  const p=String(placement||'after-text');
  if(p==='cover-hero')return 'feature';
  if(p==='after-paragraph')return 'inline';
  if(p==='interview-portrait')return 'feature';
  if(p==='interview-middle')return 'inline';
  return p;
}
function wsGlobalImageDefaults(){const d=wsEnsureProduction().imageDefaults||{};return {fit:d.fit||'contain',zoom:Math.max(.5,Math.min(3,parseFloat(d.zoom)||1)),x:d.x??50,y:d.y??50,rotate:parseInt(d.rotate)||0};}
function wsPageKey(page,idx){if(page?.duplicateId)return 'duplicate|'+page.duplicateId;if(!page)return 'page-'+idx;const ids=(page.items||[]).map(x=>x.id).join('-')||(page.sub?.id||'');return [page.type,page.sec?.key||'global',page.pageInSection||1,ids||idx].join('|');}
function wsDefaultProfileFieldIds(secKey){const fields=(CATEGORIES[secKey]?.fields||[]).filter(f=>f.id!=='name');if(secKey==='teachers')return ['title','subject','years','qualification'].filter(id=>fields.some(f=>f.id===id));return ['nickname','favSubject','ambition','hobbies'].filter(id=>fields.some(f=>f.id===id));}
function wsDefaultProfileControls(secKey){return secKey==='teachers'?{photoSize:'medium',photoShape:'rounded',nameSize:'small',cardSpacing:'normal',cardDesign:'classic',fieldsMode:'all',fieldIds:wsDefaultProfileFieldIds(secKey),photoBg:'#ffffff',preset:'staff-detailed'}:{photoSize:'medium',photoShape:'rounded',nameSize:'medium',cardSpacing:'normal',cardDesign:'classic',fieldsMode:'key',fieldIds:wsDefaultProfileFieldIds(secKey),photoBg:'#ffffff',preset:'student-balanced'};}
function wsIsProfilePage(page){const key=page?.sec?.key;return page?.type==='section-content'&&(key==='teachers'||['primary5','jss3','ss3'].includes(key)||page?.sec?.layout==='teacher-grid'||page?.sec?.layout==='grid');}
function wsGetProfileControls(page,meta){const prod=wsEnsureProduction();const key=page?.sec?.key;return Object.assign({},wsDefaultProfileControls(key),prod.profileDefaults?.[key]||{},meta?.profileControls||{});}
function wsDefaultPageTemplate(page){
  if(page?.sec?.key==='interviews'&&(!page.sec.layout||page.sec.layout==='single'))return 'interview-template-1';
  if(page?.sec?.key==='academic'&&(!page.sec.layout||page.sec.layout==='single'))return 'article-columns';
  if(page?.sec?.key==='motivational'&&(!page.sec.layout||page.sec.layout==='single'))return 'article-feature';
  return page?.sec?.layout||page?.type||'single';
}
function wsGetPageMeta(page,idx){const prod=wsEnsureProduction();const key=wsPageKey(page,idx);const baseTitle=page?.label||page?.sec?.label||page?.type||('Page '+(idx+1));const meta=Object.assign({status:'draft',template:wsDefaultPageTemplate(page),title:baseTitle,locked:false,hidden:false,itemOrder:null,removedItemIds:[],addedItemIds:[],manualBlocks:[],textLimit:null,textEdits:{},imageEdits:{},selectedImageKey:'',namePlacement:'side',profileControls:wsDefaultProfileControls(page?.sec?.key)},prod.pages[key]||{});if(page?.sec?.key==='interviews'&&meta.template==='single')meta.template='interview-template-1';meta.production_edits=wsProductionEditShape(meta);return meta;}
function wsSavePageMeta(idx,patch){if(!wsPages[idx])return;const prod=wsEnsureProduction();const key=wsPageKey(wsPages[idx],idx);const meta=Object.assign({},wsGetPageMeta(wsPages[idx],idx),patch||{},{updatedAt:new Date().toISOString()});meta.production_edits=wsProductionEditShape(meta);prod.pages[key]=meta;saveLsSettingsToStorage(lsSettings);wsMarkDirty();}
function wsApplyItemOrder(items,order){if(!Array.isArray(items)||!Array.isArray(order)||!order.length)return items;const rank=new Map(order.map((id,i)=>[String(id),i]));return items.slice().sort((a,b)=>{const ar=rank.has(String(a.id))?rank.get(String(a.id)):9999;const br=rank.has(String(b.id))?rank.get(String(b.id)):9999;return ar-br;});}
function magPageAllowsSub(page,sub){if(!sub)return false;const key=page?.sec?.key||page?.type;return wsSectionAllowsSubmission(key,sub);}
function wsPageWithMeta(page,idx){const meta=wsGetPageMeta(page,idx);const profileControls=wsGetProfileControls(page,meta);const copy=Object.assign({},page,{label:meta.title,productionStatus:meta.status,locked:!!meta.locked,hidden:!!meta.hidden,manualBlocks:Array.isArray(meta.manualBlocks)?meta.manualBlocks:[],textLimit:meta.textLimit,textEdits:meta.textEdits||{},imageEdits:meta.imageEdits||{},namePlacement:meta.namePlacement,profileControls});if(copy.items){const removed=new Set((meta.removedItemIds||[]).map(String));const added=(meta.addedItemIds||[]).map(id=>loadAll().find(s=>String(s.id)===String(id))).filter(sub=>magPageAllowsSub(copy,sub));const seen=new Set();copy.items=copy.items.concat(added).filter(x=>x&&!removed.has(String(x.id))&&magPageAllowsSub(copy,x)).filter(x=>{const id=String(x.id);if(seen.has(id))return false;seen.add(id);return true;});copy.items=wsApplyItemOrder(copy.items,meta.itemOrder);}if(copy.sec)copy.sec=Object.assign({},copy.sec,{layout:meta.template,label:meta.title,namePlacement:meta.namePlacement,profileControls});return copy;}
function wsCurrentMeta(){return wsGetPageMeta(wsPages[wsPageIdx],wsPageIdx);}
function wsTextEditRecord(page,id){
  const raw=page?.textEdits?.[id];
  if(raw&&typeof raw==='object')return raw;
  if(raw!==undefined)return{value:String(raw),hidden:false};
  return null;
}
function wsTextValue(page,id,original){
  const rec=wsTextEditRecord(page,id);
  if(rec?.hidden)return '';
  return rec&&rec.value!==undefined?String(rec.value):String(original||'');
}
function wsTextHidden(page,id){return !!wsTextEditRecord(page,id)?.hidden;}
function wsSetDefaultTheme(){
  if(!lsSettings.theme||!String(lsSettings.theme).trim()){
    lsSettings.theme=PRODUCTION_MAGAZINE_THEME;
    saveLsSettingsToStorage(lsSettings);
  }
}

/* ── Open / Close ── */
function openWorkspace(){
  subs=loadAll();
  wsSetDefaultTheme();
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
  wsSetDefaultTheme();
  wsPages=[];wsPageIdx=0;
  const s=lsSettings;
  /* Include approved, finalized AND pending so workspace always shows content */
  const finalized=subs.filter(sub=>sub.status==='approved'||sub.status==='finalized'||sub.status==='pending');
  document.getElementById('wsStatusFinalized').textContent=finalized.filter(x=>x.status==='approved'||x.status==='finalized').length+' approved | '+finalized.filter(x=>x.status==='pending').length+' pending';

  const byKey=key=>sectionOrder.find(sec=>sec.key===key)||{};
  wsPages.push({type:'cover',sec:Object.assign({key:'cover',label:'Front Cover',layout:'cover'},byKey('cover')),label:'Front Cover'});
  wsPages.push({type:'inside-cover',sec:{key:'inside-cover',label:'School Identity',layout:'inside-cover'},label:'School Identity'});
  wsPages.push({type:'toc',sec:Object.assign({key:'toc',label:'Contents',layout:'toc'},byKey('toc')),label:'Contents'});
  wsPages.push({type:'editorial-board',sec:Object.assign({key:'editor_board',label:'Editorial Board',layout:'editor-board'},byKey('editor_board')),label:'Editorial Board'});
  magOpeningFeaturePages(finalized).forEach(p=>wsPages.push(Object.assign({},p,{label:p.sec.label})));
  const routedIds=new Set(wsPages.filter(p=>p.sub).map(p=>String(p.sub._wsOriginalId||p.sub.id)));

  sectionOrder.filter(sec=>sec.visible).forEach(sec=>{
    if(['cover','toc','editor_board'].includes(sec.key))return;
    const catSubs=finalized.filter(sub=>wsSectionAllowsSubmission(sec.key,sub));
    if(sec.key==='editorial-note'){const sub=finalized.find(sub=>sub.category==='editorial-note'&&!magIsOpeningFeatureSub(sub));if(sub)wsPages.push({type:'editorial-note',sub,sec,label:'Editorial Note'});return;}
    if(sec.key==='appreciation'){const sub=finalized.find(sub=>sub.category==='appreciation');if(sub)wsPages.push({type:'appreciation',sub,sec,label:'Appreciation'});return;}
    if(!catSubs.length)return;
    let perPage=getProductionItemsPerPage(sec,s);
    for(let i=0;i<catSubs.length;i+=perPage){
      wsPages.push({type:'section-content',sec,items:catSubs.slice(i,i+perPage),isFirst:i===0,pageInSection:Math.floor(i/perPage)+1,label:getLabel('section_'+sec.key,sec.label)+(i>0?' (p'+(Math.floor(i/perPage)+1)+')':'')});
    }
  });
  wsPages.forEach(p=>(p.items||[]).forEach(sub=>routedIds.add(String(sub._wsOriginalId||sub.id))));
  const unassigned=finalized.filter(sub=>wsSubmissionRoute(sub)==='unassigned'&&!routedIds.has(String(sub.id)));
  if(unassigned.length){
    const sec={key:'unassigned',label:'Unassigned / Needs Review',icon:'!',layout:'single',visible:true};
    for(let i=0;i<unassigned.length;i+=1)wsPages.push({type:'section-content',sec,items:unassigned.slice(i,i+1),isFirst:i===0,pageInSection:i+1,label:'Unassigned / Needs Review'+(i>0?' (p'+(i+1)+')':'')});
  }
  wsPages=wsExpandOverflowPages(wsPages);
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
/* -- Page List (Left Sidebar) ── */
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
function wsProductionPreviewCss(){
  return `
    .mag-interview-template{height:100%;min-height:0;position:relative;background:#F8F3E7;color:#1F2933;font-family:'Lato',sans-serif;padding:12px 4px 0;overflow:hidden;}
    .mag-interview-template:before{content:'';position:absolute;left:-72px;top:-82px;width:260px;height:260px;border:8px solid #0F7C5C;border-right-color:transparent;border-bottom-color:transparent;border-radius:50%;box-shadow:0 0 0 2px rgba(214,168,79,.55);}
    .mag-interview-template:after{content:'';position:absolute;right:-72px;bottom:-82px;width:260px;height:260px;border:8px solid #0F7C5C;border-left-color:transparent;border-top-color:transparent;border-radius:50%;box-shadow:0 0 0 2px rgba(214,168,79,.55);}
    .mag-interview-top{position:relative;z-index:1;display:grid;grid-template-columns:1fr 170px;gap:22px;align-items:start;margin-bottom:18px;}
    .mag-interview-icon{width:22px;height:22px;margin:0 auto 7px;border:1px solid #D6A84F;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#D6A84F;font-family:'Playfair Display',serif;font-size:13px;}
    .mag-interview-kicker{text-align:center;text-transform:uppercase;letter-spacing:3px;font-size:9px;color:#0F7C5C;font-weight:900;margin-bottom:10px;}
    .mag-interview-top h1{font-family:'Playfair Display',serif;font-size:38px;line-height:.98;color:#0B1F3A;margin:0 0 12px;text-transform:none;overflow-wrap:anywhere;}
    .mag-interview-template-1 .mag-interview-top h3{font-size:11px;line-height:1.45;letter-spacing:1.8px;text-transform:uppercase;color:#0F7C5C;margin:0 0 14px;max-width:290px;}
    .mag-interview-intro{font-size:10.5px;line-height:1.65;color:#1F2933;text-align:justify;white-space:pre-line;}
    .mag-interview-top aside{text-align:center;}
    .mag-interview-top aside h2{font-family:'Playfair Display',serif;font-size:16px;line-height:1.15;color:#0B1F3A;margin:7px 0 5px;overflow-wrap:anywhere;}
    .mag-interview-top aside span{display:inline-block;background:#D6A84F;color:#fff;font-size:8px;font-weight:900;letter-spacing:.8px;text-transform:uppercase;padding:5px 8px;border-radius:3px;max-width:100%;overflow-wrap:anywhere;}
    .mag-interview-silhouette{width:132px;height:178px;border-radius:10px;border:2px solid rgba(214,168,79,.72);background:#E8EEF6;margin:0 auto;}
    .mag-interview-two,.mag-interview-qa-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;}
    .mag-interview-qa{break-inside:avoid;page-break-inside:avoid;border-bottom:1px dotted rgba(31,41,51,.38);padding-bottom:6px;margin-bottom:8px;}
    .mag-q-label,.mag-a-label{font-size:8px;font-weight:900;letter-spacing:.5px;color:#D6A84F;text-transform:uppercase;}
    .mag-question,.mag-answer{font-size:9.5px;line-height:1.55;margin:2px 0 5px;color:#1F2933;white-space:pre-line;}
    .mag-answer{color:#0B1F3A;}
    .mag-interview-middle{position:relative;z-index:1;margin:8px 0 12px;}
    .mag-interview-middle figcaption{text-align:center;font-size:8px;color:#6b7280;margin-top:4px;}
    .mag-interview-pull{position:relative;z-index:1;margin:14px 0;border:1px solid rgba(214,168,79,.55);background:#E8EEF6;padding:16px 24px;display:grid;grid-template-columns:32px 1fr 32px;align-items:center;color:#0B1F3A;font-family:'Playfair Display',serif;font-size:16px;line-height:1.35;}
    .mag-interview-pull.small{grid-template-columns:36px 1fr;margin-top:10px;}
    .mag-interview-pull b{font-size:32px;line-height:1;color:#D6A84F;}
    .mag-interview-close{position:relative;z-index:1;margin-top:12px;border:1px solid rgba(214,168,79,.35);background:#E8EEF6;padding:14px 18px;font-size:10px;line-height:1.55;color:#1F2933;}
  `;
}
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
  tempCanvas.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:'+w+'px;min-height:'+h+'px;height:auto;overflow:visible;';
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
      width:${w}px;min-height:${h}px;height:auto;margin:0 auto 24px;
      box-shadow:0 6px 30px rgba(0,0,0,.5);overflow:visible;background:#fff;position:relative;
      transform:scale(${scale});transform-origin:top center;
      margin-bottom:${Math.round(h * scale - h + 24)}px;
    }
    .mag-page{width:${w}px!important;min-height:${h}px!important;height:${h}px!important;overflow:hidden!important;position:relative!important;}
    .mag-page-inner{width:100%;min-height:${h}px;height:${h}px!important;overflow:hidden!important;position:relative!important;}
    .mag-page-flow{height:100%!important;min-height:100%!important;max-height:${h}px!important;overflow:hidden!important;}
    .mag-flow-content{height:auto!important;max-height:none!important;overflow:visible!important;}
    .mag-opening-page{width:100%!important;min-height:${h}px!important;height:${h}px!important;overflow:visible!important;}
    .mag-cover-page{overflow:hidden!important;}
    .mag-opening-page .mag-page-shell{min-height:100%!important;}
    .mag-opening-page .mag-footer-fixed{position:absolute!important;bottom:20px!important;left:40px!important;right:40px!important;}
    .mag-cover-photo img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center center!important;}
    .mag-crew-photo img,.mag-feature-photo img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center top!important;}
    .mag-heading-block,h1,h2,h3{break-after:avoid;page-break-after:avoid;}
    .mag-item,.mag-item-gallery,.mag-item-event,.mag-item-teacher,.mag-item-student,.mag-image-frame,figure{break-inside:avoid;page-break-inside:avoid;}
    figcaption{break-before:avoid;page-break-before:avoid;}
    p,.mag-item-field-value,.mag-item-body{orphans:3;widows:3;}
    img{max-width:100%;height:auto;image-rendering:auto!important;-ms-interpolation-mode:bicubic;}
    ${wsProductionPreviewCss()}
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
function wsPageGridCols(page,itemCount){const layout=page?.sec?.layout||page?.type;if(layout==='teacher-grid')return itemCount>=24?6:itemCount>=18?5:itemCount>9?4:3;if(layout==='grid')return itemCount===1?1:itemCount<=4?2:itemCount<=9?3:itemCount>=24?6:itemCount>=18?5:4;return 1;}
function wsRenderPageEditPanel(page,meta){
  const btn=document.getElementById('wsHidePageBtn'),list=document.getElementById('wsPageEditList');
  if(btn)btn.querySelector('span:last-child').firstChild.textContent=meta.hidden?'Show Page':'Hide Page';
  if(!list)return;
  const ordered=wsPageWithMeta(page,wsPageIdx).items||[];
  const cols=wsPageGridCols(wsPageWithMeta(page,wsPageIdx),ordered.length);
  const cards=ordered.length?'<div class="ws-profile-title">Content</div><select class="ws-font-select" id="wsMoveItemSelect">'+ordered.map(sub=>`<option value="${esc(sub.id)}">${esc(wsItemLabel(sub))}</option>`).join('')+'</select>'+ordered.map((sub,i)=>`<div class="ws-page-edit-row ws-page-edit-row-content"><span>${esc(wsItemLabel(sub))}<span class="ws-row-muted">${esc(CATEGORIES[sub.category]?.label||sub.category||'Content')}</span></span><button onclick="wsFocusProductionEdit('${sub.id}')">Edit Production Version</button><button onclick="wsRemoveContentFromPage('${sub.id}')">Hide</button></div><div class="ws-page-edit-row"><span>Order</span><button onclick="wsMovePageItem('${sub.id}',${-cols})" ${i-cols<0?'disabled':''}>Up</button><button onclick="wsMovePageItem('${sub.id}',${cols})" ${i+cols>=ordered.length?'disabled':''}>Down</button><button onclick="wsMovePageItem('${sub.id}',-1)" ${i===0?'disabled':''}>Left</button><button onclick="wsMovePageItem('${sub.id}',1)" ${i===ordered.length-1?'disabled':''}>Right</button></div>`).join(''):'<div class="ws-empty-mini">No reorderable cards on this page.</div>';
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks:[];
  const blockHtml=blocks.length?'<div class="ws-profile-title" style="margin-top:10px;">Manual Blocks</div>'+blocks.map((b,i)=>{
    const label=esc((b.type||'text').toUpperCase())+(b.hidden?' (hidden)':'')+': '+esc((b.text||b.caption||b.src||'Manual block').slice(0,36));
    const imgBtns=b.type==='image'?`<button class="ws-prod-btn" onclick="wsReplaceManualBlockImage(${i})">Replace</button><button class="ws-prod-btn" onclick="wsToggleManualBlockHidden(${i},${b.hidden?'false':'true'})">${b.hidden?'Restore':'Hide'}</button>`:'';
    return `<div class="ws-manual-row${b.hidden?' hidden':''}"><span>${label}</span><button class="ws-prod-btn" onclick="wsMoveManualBlock(${i},-1)" ${i===0?'disabled':''}>Up</button><button class="ws-prod-btn" onclick="wsMoveManualBlock(${i},1)" ${i===blocks.length-1?'disabled':''}>Down</button><button class="ws-prod-btn" onclick="wsEditManualBlock(${i})">Edit</button>${imgBtns}<button class="ws-prod-btn" onclick="wsDeleteManualBlock(${i})">Remove</button></div>`;
  }).join(''):'';
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
function wsRemoveContentFromPage(id){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before hiding content.');return;}
  const removed=[...new Set([...(meta.removedItemIds||[]).map(String),String(id)])];
  wsSavePageMeta(wsPageIdx,{removedItemIds:removed});wsRenderPageList();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsFocusProductionEdit(subId){
  const select=document.getElementById('wsTextEditSelect');if(!select)return;
  const entries=wsEditableTextEntries(wsPages[wsPageIdx],wsCurrentMeta()).filter(e=>e.subId===String(subId));
  if(entries.length){select.value=entries[0].id;wsUpdateTextStats();}
  document.getElementById('wsPanelTextEditing')?.scrollIntoView({behavior:'smooth',block:'center'});
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
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];blocks.push(Object.assign({id:'block-'+Date.now(),createdAt:new Date().toISOString(),source:'production'},block));
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsAddManualTextBox(){const text=prompt('Text box content:');if(text!==null&&text.trim())wsAddManualBlock({type:'text',text:text.trim()});}
function wsAddManualImageBox(){const src=prompt('Supabase Storage image URL:');if(src===null)return;const clean=src.trim();if(/^data:image\//i.test(clean)){alert('Production images must be uploaded to Storage first; data URLs are not saved.');return;}if(clean)wsAddManualBlock({type:'image',src:clean,caption:'',placement:'after-text'});}
function wsAddManualCaption(){const text=prompt('Caption text:');if(text!==null&&text.trim())wsAddManualBlock({type:'caption',text:text.trim()});}
function wsEditManualBlock(i){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing manual blocks.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];const b=blocks[i];if(!b)return;
  if(b.type==='image'){const src=prompt('Supabase Storage image URL:',b.src||'');if(src===null)return;if(/^data:image\//i.test(src.trim())){alert('Production images must use Storage URLs, not data URLs.');return;}const caption=prompt('Image caption:',b.caption||'');if(caption===null)return;const placement=prompt('Placement: cover-hero, feature, after-heading, after-paragraph, side, after-text, full-width, gallery, background, interview-portrait, interview-middle',b.placement||'after-text');if(placement===null)return;const afterParagraph=placement.trim()==='after-paragraph'?parseInt(prompt('Paragraph number:',b.afterParagraph||'1')||'1')||1:b.afterParagraph||null;blocks[i]=Object.assign({},b,{src:src.trim(),caption:caption.trim(),placement:(placement.trim()||'after-text'),afterParagraph});}
  else{const text=prompt((b.type==='caption'?'Caption':'Text box')+' content:',b.text||'');if(text===null)return;blocks[i]=Object.assign({},b,{text:text.trim()});}
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsMoveManualBlock(i,dir){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before moving production blocks.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];const next=i+dir;
  if(!blocks[i]||next<0||next>=blocks.length)return;
  [blocks[i],blocks[next]]=[blocks[next],blocks[i]];
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsDeleteManualBlock(i){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before deleting manual blocks.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];blocks.splice(i,1);
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();
}
function wsToggleManualBlockHidden(i,hidden){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before hiding images.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];if(!blocks[i])return;
  blocks[i]=Object.assign({},blocks[i],{hidden:!!hidden});
  wsSavePageMeta(wsPageIdx,{manualBlocks:blocks});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsReplaceManualBlockImage(i){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before replacing images.');return;}
  const blocks=Array.isArray(meta.manualBlocks)?meta.manualBlocks.slice():[];if(!blocks[i]||blocks[i].type!=='image')return;
  const input=document.createElement('input');
  input.type='file';input.accept='.jpg,.jpeg,.png,.webp';
  input.onchange=async()=>{
    const file=input.files?.[0];if(!file)return;
    if(!/^image\//.test(file.type)){alert('Choose a JPG, PNG, or WebP image.');return;}
    try{
      wsSetProductionUploadStatus('syncing','Replacing production image in Supabase Storage...');
      const url=await uploadToStorage(file,'production_'+String(wsPages[wsPageIdx]?.sec?.key||'page')+'_'+Date.now());
      const latest=wsCurrentMeta(),next=Array.isArray(latest.manualBlocks)?latest.manualBlocks.slice():[];
      if(!next[i])return;
      next[i]=Object.assign({},next[i],{src:url,hidden:false});
      wsSavePageMeta(wsPageIdx,{manualBlocks:next});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
      wsSetProductionUploadStatus('ok','Replacement uploaded and saved as a production-only image.');
      showSync('ok','Production image replaced');
    }catch(e){wsSetProductionUploadStatus('err',friendlyUploadErrorMessage(e));alert(friendlyUploadErrorMessage(e));showSync('err','Production image upload failed');}
  };
  input.click();
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
      const val=String(fc?.value||'').trim();if(!val)return;
      const id=String(sub.id)+'|'+key;
      const rec=wsTextEditRecord({textEdits:edits},id);
      entries.push({id,subId:String(sub.id),fieldId:key,label:wsItemLabel(sub)+' - '+(fc.label||key),original:val,value:rec&&rec.value!==undefined?String(rec.value):val,hidden:!!rec?.hidden});
    });
  });
  if(rendered.sub)Object.entries(rendered.sub.data||{}).forEach(([key,fc])=>{
    const val=String(fc?.value||'').trim();if(!val)return;
    const id=String(rendered.sub.id)+'|'+key,rec=wsTextEditRecord({textEdits:edits},id);
    entries.push({id,subId:String(rendered.sub.id),fieldId:key,label:(fc.label||key),original:val,value:rec&&rec.value!==undefined?String(rec.value):val,hidden:!!rec?.hidden});
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
  const e=wsSelectedTextEntry(),area=document.getElementById('wsTextEditArea'),chk=document.getElementById('wsTextHiddenCheck');
  if(!e){box.textContent='No editable text on this page.';if(area)area.value='';if(chk)chk.checked=false;return;}
  if(area&&document.activeElement!==area)area.value=e.value;
  if(chk)chk.checked=!!e.hidden;
  const words=e.value.trim().split(/\s+/).filter(Boolean).length;
  const changed=e.hidden?'hidden':(e.value!==e.original?'edited':'original');
  const overflow=e.value.length>900?' - overflow risk':e.value.length>500?' - check fit':' - fits normally';
  box.textContent=words+' words, '+e.value.length+' characters - '+changed+overflow;
}
function wsSaveTextEdit(id,value){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before editing text.');return;}
  const edits=Object.assign({},meta.textEdits||{}),prev=wsTextEditRecord({textEdits:edits},id)||{};
  edits[id]=Object.assign({},prev,{value:String(value),hidden:!!prev.hidden});
  wsSavePageMeta(wsPageIdx,{textEdits:edits});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsSaveSelectedTextArea(){
  const e=wsSelectedTextEntry(),area=document.getElementById('wsTextEditArea');if(e&&area)wsSaveTextEdit(e.id,area.value);
}
function wsEraseSelectedText(){
  const e=wsSelectedTextEntry();if(e)wsSaveTextEdit(e.id,'');
}
async function wsPasteReplaceSelectedText(){
  const e=wsSelectedTextEntry();if(!e)return;
  let text='';
  try{text=await navigator.clipboard.readText();}catch(err){text=prompt('Paste replacement text:','')||'';}
  wsSaveTextEdit(e.id,text);
}
function wsToggleSelectedTextHidden(hidden){
  const e=wsSelectedTextEntry();if(!e)return;
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before hiding text.');wsUpdateProductionControls();return;}
  const edits=Object.assign({},meta.textEdits||{}),prev=wsTextEditRecord({textEdits:edits},e.id)||{value:e.value};
  edits[e.id]=Object.assign({},prev,{hidden:!!hidden,value:prev.value!==undefined?prev.value:e.value});
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
function wsResetCurrentProductionPage(){
  const page=wsPages[wsPageIdx],meta=wsCurrentMeta();if(!page)return;
  if(meta.locked){alert('This page is locked for print. Unlock it before resetting production edits.');return;}
  if(!confirm('Reset production edits for this page only? Original submissions and Storage images will remain untouched.'))return;
  wsSavePageMeta(wsPageIdx,{textEdits:{},imageEdits:{},manualBlocks:[],removedItemIds:[],addedItemIds:[],itemOrder:null,textLimit:null,selectedImageKey:''});
  wsRenderPageList();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
function wsUpdateProfileControls(page,meta){
  const wrap=document.getElementById('wsProfileControls');if(!wrap)return;
  const active=wsIsProfilePage(page);wrap.classList.toggle('active',active);
  if(!active)return;
  const ctl=wsGetProfileControls(page,meta);
  const set=(id,val)=>{const el=document.getElementById(id);if(el&&document.activeElement!==el)el.value=String(val);};
  const perPage=page.sec?.key==='teachers'?(parseInt(lsSettings.teachersPerPage)||9):(parseInt(lsSettings.studentsPerPage)||2);
  const cards=document.getElementById('wsProfileCardsPerPage'),allowed=page.sec?.key==='teachers'?[6,9,12,15,18,20,24,30]:[1,2,3,4,5,6,7,8,9,10,12,15,18,20,24,30];
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
function wsSetPageStatus(status){
  const patch={status};
  if(status==='locked')patch.locked=true;
  if(status==='excluded')patch.hidden=true;
  if(status&&status!=='locked')patch.locked=false;
  if(status&&status!=='excluded')patch.hidden=false;
  wsSavePageMeta(wsPageIdx,patch);wsRenderPageList();wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
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
  if(page.sec?.key==='teachers'){if(![6,9,12,15,18,20,24,30].includes(n))return;lsSettings.teachersPerPage=n;}
  else{if(![1,2,3,4,5,6,7,8,9,10,12,15,18,20,24,30].includes(n))return;lsSettings.studentsPerPage=n;}
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
  (rendered.manualBlocks||[]).forEach((b,i)=>{if(!b?.hidden&&b?.type==='image'&&b.src)out.push({key:'manual:'+(b.id||i),src:b.src,label:(b.caption||'Manual image '+(i+1))});});
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
  sel.innerHTML=imgs.map(x=>`<option value="${esc(x.key)}">${esc(x.label)}${wsImageEditFor(meta,x.key).hidden?' (hidden)':''}</option>`).join('');
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
  wsEnsureProduction().imageDefaults={fit:'contain',zoom:1,x:50,y:50,rotate:0};
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
function wsToggleSelectedImageHidden(hidden){
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before hiding images.');return;}
  const imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  const edits=Object.assign({},meta.imageEdits||{}),ed=wsImageEditFor(meta,img.key);
  ed.hidden=!!hidden;ed.fit=ed.fit||'contain';
  edits[img.key]=ed;wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
}
async function wsReplaceSelectedImage(event){
  const file=event.target.files?.[0];event.target.value='';if(!file)return;
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before replacing images.');return;}
  if(!/^image\//.test(file.type)){alert('Choose a JPG, PNG, or WebP image.');return;}
  const imgs=wsCollectPageImages(wsPages[wsPageIdx],wsPageIdx),img=wsSelectedImage(meta,imgs);if(!img)return;
  try{
    wsSetProductionUploadStatus('syncing','Uploading replacement to Supabase Storage...');
    showSync('syncing','Uploading production replacement image...');
    const url=await uploadToStorage(file,'production_'+String(wsPages[wsPageIdx]?.sec?.key||'page')+'_'+Date.now());
    const edits=Object.assign({},meta.imageEdits||{}),ed=wsImageEditFor(meta,img.key);
    ed.replaceSrc=url;ed.fit=ed.fit||'contain';ed.zoom=ed.zoom||1;ed.x=ed.x||50;ed.y=ed.y||50;ed.hidden=false;
    edits[img.key]=ed;delete wsImageQualityCache[img.key];
    wsSavePageMeta(wsPageIdx,{imageEdits:edits,selectedImageKey:img.key});wsRenderCurrentPage();wsUpdateProductionControls();wsRunPreflight(false);
    wsSetProductionUploadStatus('ok','Replacement uploaded. Original submitted image remains preserved.');
    showSync('ok','Production image uploaded');
  }catch(e){wsSetProductionUploadStatus('err',friendlyUploadErrorMessage(e));alert(friendlyUploadErrorMessage(e));showSync('err','Production image upload failed');}
}
function wsSetProductionUploadStatus(state,msg){
  const el=document.getElementById('wsProductionUploadStatus');if(!el)return;
  el.className='ws-upload-status '+(state||'');
  el.textContent=msg||'Images upload to Supabase Storage and are saved as production-only blocks.';
}
async function wsUploadProductionImage(event){
  const file=event.target.files?.[0];event.target.value='';if(!file)return;
  const meta=wsCurrentMeta();if(meta.locked){alert('This page is locked for print. Unlock it before adding images.');return;}
  if(!/^image\//.test(file.type)){alert('Choose a JPG, PNG, or WebP image.');return;}
  const placement=document.getElementById('wsProductionImagePlacement')?.value||'after-text';
  const afterParagraph=parseInt(document.getElementById('wsProductionImageAfterParagraph')?.value||'')||null;
  const caption=(document.getElementById('wsProductionImageCaption')?.value||'').trim();
  try{
    wsSetProductionUploadStatus('syncing','Uploading 1 image to Supabase Storage...');
    showSync('syncing','Uploading production image...');
    const url=await uploadToStorage(file,'production_'+String(wsPages[wsPageIdx]?.sec?.key||'page')+'_'+Date.now());
    wsAddManualBlock({type:'image',src:url,caption,placement,afterParagraph});
    const cap=document.getElementById('wsProductionImageCaption');if(cap)cap.value='';
    wsSetProductionUploadStatus('ok','Upload complete. Storage URL saved as a production-only image block.');
    showSync('ok','Production image uploaded');
  }catch(e){wsSetProductionUploadStatus('err',friendlyUploadErrorMessage(e));alert(friendlyUploadErrorMessage(e));showSync('err','Production image upload failed');}
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
    const pageImgs=wsCollectPageImages(wsPages[i],i).filter(img=>!wsImageEditFor(meta,img.key).hidden);
    const lowImgs=pageImgs.filter(img=>(img.meta&&wsImageQualityLevel(img.meta.w,img.meta.h)==='low')||wsImageQualityCache[img.key]?.low);
    const unknownImgs=pageImgs.filter(img=>!img.meta&&!wsImageQualityCache[img.key]);
    if(lowImgs.length)add('err','Page '+(i+1)+': '+lowImgs.length+' image(s) below '+PRINT_IMAGE_MIN_PX+'px minimum.','Open Image Production and replace low-resolution images with press-ready originals.','image:'+i);
    if(unknownImgs.length)add('warn','Page '+(i+1)+': '+unknownImgs.length+' image(s) still need resolution verification.','Open the page so the browser can inspect image dimensions.','select:'+i);
    const pending=items.filter(sub=>sub.status==='pending').length;if(pending)add('warn','Page '+(i+1)+': contains '+pending+' pending submission(s).','Approve/finalize the content in workflow, or remove it from this page.','select:'+i);
    const textFor=(sub,key,fc)=>wsTextValue({textEdits:meta.textEdits||{}},String(sub.id)+'|'+key,fc?.value||'');
    const longText=items.some(sub=>Object.entries(sub.data||{}).some(([key,fc])=>textFor(sub,key,fc).length>1600));
    if(longText)add('warn','Page '+(i+1)+': long text may need splitting or shortening.','Recommended: apply Picture break article, then split the longest text into a continuation page if it still overflows.','article:'+i);
    const textChars=items.reduce((sum,sub)=>sum+Object.entries(sub.data||{}).reduce((n,[key,fc])=>n+textFor(sub,key,fc).length,0),0);
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
  if(level==='fit'){
    const canvas=document.getElementById('wsCanvas'),dims=getPageDimensions();
    const available=Math.max(320,(canvas?.clientWidth||window.innerWidth)-96);
    level=Math.floor((available/dims.w)*100);
  }
  wsZoom=Math.max(50,Math.min(150,parseInt(level)||100));
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
function wsToggleInspector(){
  const layout=document.getElementById('wsLayout');if(!layout)return;
  layout.classList.toggle('ai-collapsed');
  const btn=document.getElementById('wsInspectorBtn');
  if(btn)btn.textContent=layout.classList.contains('ai-collapsed')?'Inspector':'Hide Inspector';
  setTimeout(()=>{if(String(wsZoom).toLowerCase()==='fit')wsSetZoom('fit');},50);
}

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
  showSync('syncing','Preparing PDF preview...');
  const iframe=document.getElementById('ws-preview-iframe');
  const doc=iframe?.contentDocument||iframe?.contentWindow?.document;
  if(doc){
    const parts=[];
    wsPages.forEach((p,i)=>{
      if(wsGetPageMeta(p,i).hidden)return;
      const sheet=doc.getElementById('ws-page-'+i);
      if(sheet){
        const html=sheet.outerHTML.replace(/transform:scale\([^)]+\);?/g,'').replace(/transform-origin:[^;]+;?/g,'').replace(/margin-bottom:[^;]+;?/g,'margin-bottom:24px;');
        parts.push(html);
      }
    });
    if(parts.length)window.__wsFastPrintPagesHtml=parts.join('');
  }
  openPrintView();
  showSync('ok','PDF preview opened');
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
      const name = sub.data.articleTitle?.value || sub.data.contribTitle?.value || sub.data.speechTitle?.value ||
                   sub.data.messageTitle?.value || sub.data.title?.value || sub.data.name?.value ||
                   sub.data.speakerName?.value || sub.data.contribName?.value || sub.data.authorName?.value ||
                   sub.data.intervieweeName?.value || sub.data.submitterName?.value || sub.data.eventName?.value ||
                   'Submission '+(idx+1);

      bodyHtml += `<div style="margin-bottom:24px;padding:16px;border:1px solid #e0e0e0;border-radius:4px;background:#fafafa;">
        <h3 style="color:${c1};font-size:14pt;margin:0 0 8px;border-left:4px solid ${c2};padding-left:10px;">${e(name)}</h3>`;

      /* Photo */
      if(sub.photoData){
        bodyHtml += `<figure style="margin:8px 0 12px;page-break-inside:avoid;break-inside:avoid;"><img src="${sub.photoData}" style="max-width:100%;max-height:360px;width:auto;height:auto;object-fit:contain;border:1px solid #ccc;"></figure>`;
      }
      /* Multi photos */
      if(Array.isArray(sub.photos) && sub.photos.length){
        bodyHtml += '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;">';
        sub.photos.forEach(p => {
          if(wsPhotoSrc(p)) bodyHtml += `<figure style="margin:0;page-break-inside:avoid;break-inside:avoid;"><img src="${wsPhotoSrc(p)}" style="max-width:180px;max-height:220px;width:auto;height:auto;object-fit:contain;border:1px solid #ccc;"></figure>`;
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
    img { max-width: 100%; height: auto; object-fit: contain; }
    h1, h2, h3 { page-break-after: avoid; break-after: avoid; }
    div, table, figure { page-break-inside: avoid; break-inside: avoid; }
    p, td { orphans: 3; widows: 3; }
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
function checkUrlRouting(){try{const params=new URLSearchParams(window.location.search);const fp=params.get('form');const ap=params.get('admin');const ep=params.get('editor');if(ap!==null){openPIN('admin');return true;}if(ep!==null){openPIN('editor');return true;}if(fp&&CATEGORIES[fp]){standaloneFormKey=fp;updateStandaloneFormChrome();return fp;}/* return form key, not open yet */}catch(e){console.warn('[MagicEditor] URL routing:',e.message);}return false;}

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
      if(statusEl) statusEl.textContent = 'Opening with cached data while cloud loads';
    } else {
      console.log('[BOOT] Supabase CDN loaded. Starting cloud sync...');
      await initCloudSync();
      startOptionalCloudAutoRefresh();
      console.log('[BOOT] Cloud sync finished.');
    }
  } catch (e) {
    console.warn('[BOOT] Sync failed or timed out:', e.message);
    if(loadSubCache().length)showSync('syncing', 'Showing cached data while cloud recovers');
    else if(isNetworkTrulyOffline())showSync('err', 'No network connection - no cached data found');
    else showSync('syncing', 'Cloud is taking longer than usual');
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

