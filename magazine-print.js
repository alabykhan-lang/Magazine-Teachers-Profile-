(function(){
  'use strict';

  const SUPA_URL='https://srkgolzstppnyntrkemk.supabase.co';
  const SUPA_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2dvbHpzdHBwbnludHJrZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMjg4MTAsImV4cCI6MjA5MjgwNDgxMH0.M1uVsgraBxXGDrLSqBgz9e3QFRmSjaZBgz7xoGlOo3c';
  const DB_SUBMISSION_COLUMNS='id,category,ts,created_at,status,reviewer_note,reviewed_at,data,photo_url,photo_name,photos';
  const DB_PAGE_SIZE=100;

  const IDENTITY={
    schoolName:'Way to Success Standard Schools',
    location:'Ifedapo Community, Ejigbo',
    footer:'WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO',
    magazineTitle:'Maiden Magazine',
    theme:'The Making of Tomorrow: From Humble Beginnings to Limitless Horizons'
  };

  const DEFAULT_PRINT_SECTIONS=[
    {key:'front-cover',title:'Front Cover',status:'pending',source:'Manual approved cover reference',contentFields:['Approved cover reference','Cover image','Edition text']},
    {key:'inside-cover',title:'Inside Cover / School Identity',status:'implemented',source:'Magazine identity settings and approved school identity content',contentFields:['School name','Location','Logo if available','Theme']},
    {key:'contents',title:'Contents Page',status:'implemented',source:'Production section registry',contentFields:['Section order','Generated page numbers']},
    {key:'editorial-board',title:'Editorial Board / Magazine Crew',status:'pending',source:'editor_board submissions or manual crew list',categories:['editor_board'],contentFields:['Name','Role','Portrait','Bio or note']},
    {key:'editorial-chairman-address',title:"Editor-in-Chief / Editorial Chairman's Address",status:'pending',source:'Manual address or approved editorial submission',categories:['editorial-note','speeches'],contentFields:['Title','Speaker name','Speaker role','Address text','Portrait']},
    {key:'school-history',title:'Brief History of the School',status:'pending',source:'Manual approved history text and images',contentFields:['History title','History body','Archive or school image']},
    {key:'proprietor-speech',title:"Proprietor's Speech",status:'pending',source:'speeches submissions filtered by speech type',categories:['speeches'],contentFields:['Speaker name','Speaker title','Speech text','Portrait']},
    {key:'senior-boy-speech',title:"Senior Boy's Speech",status:'pending',source:'speeches submissions filtered by speech type',categories:['speeches'],contentFields:['Speaker name','Speaker title','Speech text','Portrait']},
    {key:'senior-girl-speech',title:"Senior Girl's Speech",status:'pending',source:'speeches submissions filtered by speech type',categories:['speeches'],contentFields:['Speaker name','Speaker title','Speech text','Portrait']},
    {key:'interview-section',title:'Interview Section',status:'pending',source:'interviews submissions',categories:['interviews'],contentFields:['Interviewee','Interviewer','Intro','Q and A','Original images']},
    {key:'graduating-class-message',title:'Graduating Class Message',status:'pending',source:'ss3_class_message submissions or speech entry',categories:['ss3_class_message','speeches'],contentFields:['Class name','Message title','Class message','Group photo']},
    {key:'ss3-graduate-profiles',title:'SS3 Graduate Profiles',status:'pending',source:'ss3 submissions',categories:['ss3'],contentFields:['Name','Portrait','Profile fields','Message']},
    {key:'jss3-student-profiles',title:'JSS3 Student Profiles',status:'pending',source:'jss3 submissions',categories:['jss3'],contentFields:['Name','Portrait','Profile fields','Message']},
    {key:'primary5-graduate-profiles',title:'Primary 5 Graduate Profiles',status:'pending',source:'primary5 submissions',categories:['primary5'],contentFields:['Name','Portrait','Profile fields','Message']},
    {key:'cross-section-classes',title:'Cross Section of Classes',status:'pending',source:'class photo, gallery, and event submissions',categories:['primary5_class_photo','jss3_class_photo','gallery','events'],contentFields:['Class name','Group image','Caption']},
    {key:'staff-profiles',title:'Staff Profiles',status:'pending',source:'teachers submissions',categories:['teachers'],contentFields:['Name','Position','Portrait','Bio','Message']},
    {key:'academic-educational',title:'Academic & Educational Contents',status:'pending',source:'academic submissions',categories:['academic'],contentFields:['Article title','Author','Body','Optional image']},
    {key:'school-life-events',title:'School Life Events / Photo Splash',status:'pending',source:'events and gallery submissions',categories:['events','gallery'],contentFields:['Event title','Report','Original images','Captions']},
    {key:'advertisements',title:'Advertisements',status:'pending',source:'advertisements submissions or manual adverts',categories:['advertisements'],contentFields:['Business name','Advert image','Contact note']},
    {key:'appreciation',title:'Appreciation / Acknowledgement',status:'pending',source:'appreciation submission or manual text',categories:['appreciation'],contentFields:['Acknowledgement title','Body text']},
    {key:'back-cover',title:'Back Cover',status:'pending',source:'Manual approved back-cover reference',contentFields:['Approved back-cover reference','Final image or text']}
  ];

  const state={
    submissions:[],
    approved:[],
    settings:{},
    printSections:DEFAULT_PRINT_SECTIONS.slice(),
    source:'local cache',
    errors:[]
  };

  document.addEventListener('DOMContentLoaded',boot);

  async function boot(){
    setStatus('Loading production data...');
    await loadProductionData();
    state.printSections=normalizePrintSections(state.settings.printSectionOrder||readJson('me_print_section_order',null));
    state.approved=state.submissions.filter(isApproved);
    renderMagazine();
  }

  async function loadProductionData(){
    state.submissions=readJson('me_subs',[]);
    state.settings.lsSettings=readJson('me_ls_settings',{});
    try{
      await waitForSupabase(6000);
      const sb=getSupa();
      if(!sb)throw new Error('Supabase client unavailable');
      const [settings,submissions]=await Promise.all([loadSettingsFromCloud(sb),loadSubmissionsFromCloud(sb)]);
      state.settings=Object.assign({},state.settings,settings);
      if(Array.isArray(submissions)){
        state.submissions=submissions;
        try{localStorage.setItem('me_subs',JSON.stringify(submissions));}catch(e){}
      }
      state.source='cloud';
    }catch(error){
      state.errors.push(error.message||String(error));
      state.source=state.submissions.length?'local cache':'empty fallback';
    }
  }

  function getSupa(){
    if(!window.supabase)return null;
    try{return window.supabase.createClient(SUPA_URL,SUPA_KEY);}
    catch(error){state.errors.push(error.message||String(error));return null;}
  }

  function waitForSupabase(maxMs){
    return new Promise(resolve=>{
      if(window.supabase){resolve(true);return;}
      const started=Date.now();
      const timer=setInterval(()=>{
        if(window.supabase){clearInterval(timer);resolve(true);return;}
        if(Date.now()-started>(maxMs||6000)){clearInterval(timer);resolve(false);}
      },100);
    });
  }

  async function loadSettingsFromCloud(sb){
    const output={};
    const {data,error}=await sb.from('settings').select('key,value').in('key',['ls_settings','print_section_order']);
    if(error)throw error;
    (data||[]).forEach(row=>{
      const value=parseSettingValue(row.value);
      if(row.key==='ls_settings'){
        output.lsSettings=value||{};
        try{localStorage.setItem('me_ls_settings',JSON.stringify(output.lsSettings));}catch(e){}
      }
      if(row.key==='print_section_order'){
        output.printSectionOrder=value;
        try{localStorage.setItem('me_print_section_order',JSON.stringify(value));}catch(e){}
      }
    });
    return output;
  }

  async function loadSubmissionsFromCloud(sb){
    const rows=[];
    let from=0;
    while(true){
      const to=from+DB_PAGE_SIZE-1;
      const {data,error}=await sb.from('submissions')
        .select(DB_SUBMISSION_COLUMNS)
        .order('created_at',{ascending:true})
        .range(from,to);
      if(error)throw error;
      const page=data||[];
      rows.push(...page);
      if(page.length<DB_PAGE_SIZE)break;
      from+=DB_PAGE_SIZE;
    }
    return rows.map(normalizeSubmissionRow).filter(Boolean);
  }

  function normalizeSubmissionRow(row){
    if(!row)return null;
    return {
      id:row.id,
      category:row.category,
      ts:row.ts,
      createdAt:row.created_at?new Date(row.created_at).getTime():Date.now(),
      status:row.status||'pending',
      reviewerNote:row.reviewer_note||'',
      reviewedAt:row.reviewed_at||null,
      data:parseSettingValue(row.data)||{},
      photoData:storageUrlOnly(row.photo_url),
      photoName:row.photo_name||'',
      photos:normalizePhotoList(row.photos)
    };
  }

  function normalizePhotoList(photos){
    const list=parseSettingValue(photos);
    if(!Array.isArray(list))return [];
    return list.map(photo=>{
      const url=storageUrlOnly(photo&&((photo.url)||photo.data));
      return url?Object.assign({},photo,{url,data:null}):null;
    }).filter(Boolean);
  }

  function parseSettingValue(value){
    if(value==null)return value;
    if(typeof value==='string'){
      try{return JSON.parse(value);}
      catch(e){return value;}
    }
    return value;
  }

  function isApproved(submission){
    return submission&&['approved','finalized'].includes(String(submission.status||'').toLowerCase());
  }

  function storageUrlOnly(url){
    if(!url||typeof url!=='string')return '';
    if(/^data:image\//i.test(url))return '';
    try{
      const parsed=new URL(url);
      return /^https?:$/.test(parsed.protocol)?url:'';
    }catch(e){
      return '';
    }
  }

  function normalizePrintSections(order){
    const defaults=new Map(DEFAULT_PRINT_SECTIONS.map(section=>[section.key,section]));
    if(!Array.isArray(order)||!order.length)return DEFAULT_PRINT_SECTIONS.map(section=>Object.assign({},section));
    const seen=new Set();
    const merged=[];
    order.forEach(item=>{
      if(!item||!item.key||seen.has(item.key))return;
      const base=defaults.get(item.key)||{};
      merged.push(Object.assign({},base,item));
      seen.add(item.key);
    });
    DEFAULT_PRINT_SECTIONS.forEach(section=>{
      if(!seen.has(section.key))merged.push(Object.assign({},section));
    });
    return merged.filter(section=>section.visible!==false);
  }

  function renderMagazine(){
    const pages=buildPageDefinitions();
    const html=pages.map((page,index)=>renderPage(page,index+1,pages)).join('');
    const pagesEl=document.getElementById('mpPages');
    if(pagesEl)pagesEl.innerHTML=html;
    setStatus(`${pages.length} A4 pages prepared from ${state.source}. Approved/finalized submissions available: ${state.approved.length}.`);
  }

  function buildPageDefinitions(){
    return state.printSections.flatMap(section=>{
      if(section.key==='contents')return [{type:'contents',section}];
      return [{type:section.key,section}];
    });
  }

  function renderPage(page,pageNumber,allPages){
    const section=page.section;
    const renderer=SECTION_RENDERERS[section.key]||renderPendingSection;
    const content=renderer({page,section,pageNumber,allPages});
    return `
      <section class="mp-page mp-page--${escapeAttr(section.key)}" data-section-key="${escapeAttr(section.key)}" data-page-number="${pageNumber}">
        <div class="mp-page__content">${content}</div>
        <footer class="mp-page__footer">
          <span>${escapeHtml(IDENTITY.footer)}</span>
          <span class="mp-page__number">${pageNumber}</span>
        </footer>
      </section>
    `;
  }

  const SECTION_RENDERERS={
    'front-cover':renderFrontCoverPending,
    'inside-cover':renderInsideCover,
    'contents':renderContents
  };

  function renderFrontCoverPending(){
    return `
      <section class="mp-cover-skeleton">
        <span class="mp-kicker">Front Cover Pending Approved Reference</span>
        <h1 class="mp-title">${escapeHtml(IDENTITY.magazineTitle)}</h1>
        <div class="mp-rule"></div>
        <p class="mp-cover-theme">${escapeHtml(IDENTITY.theme)}</p>
      </section>
    `;
  }

  function renderInsideCover(){
    const identity=getIdentityData();
    const logo=storageUrlOnly(identity.logo);
    return `
      <section class="mp-identity-page">
        <div class="mp-identity-logo">
          ${logo?`<img src="${escapeAttr(logo)}" alt="${escapeAttr(identity.schoolName)} logo"/>`:'W'}
        </div>
        <header class="mp-identity-head">
          <span class="mp-kicker">School Identity</span>
          <h1 class="mp-title">${escapeHtml(identity.schoolName)}</h1>
          <div class="mp-identity-location">${escapeHtml(identity.location)}</div>
        </header>
        <section class="mp-identity-theme">
          <h2>${escapeHtml(identity.magazineTitle)}</h2>
          <p>${escapeHtml(identity.theme)}</p>
        </section>
        <div class="mp-identity-status">
          <span>Live text shell. Final layout will be replaced when the approved inside-cover reference is supplied.</span>
          <span>Images remain URL-based. No screenshot page or base64 image rendering is used.</span>
        </div>
      </section>
    `;
  }

  function renderContents(ctx){
    const items=ctx.allPages
      .map((page,index)=>({section:page.section,page:index+1}))
      .filter(item=>item.section.key!=='contents');
    return `
      <section class="mp-toc">
        <span class="mp-kicker">Contents</span>
        <h1 class="mp-title">Contents</h1>
        <div class="mp-rule"></div>
        <ol class="mp-toc-list">
          ${items.map((item,index)=>`
            <li class="mp-toc-item">
              <span class="mp-toc-index">${String(index+1).padStart(2,'0')}</span>
              <span class="mp-toc-name">${escapeHtml(item.section.title)}</span>
              <span class="mp-toc-page">${item.page}</span>
            </li>
          `).join('')}
        </ol>
        <p class="mp-toc-note">Page numbers are generated from the production section registry. As approved section layouts are implemented, multi-page sections will update this list from the same route.</p>
      </section>
    `;
  }

  function renderPendingSection(ctx){
    const section=ctx.section;
    const count=countApprovedForSection(section);
    const fields=Array.isArray(section.contentFields)?section.contentFields:[];
    return `
      <section class="mp-pending">
        <header class="mp-pending__head">
          <span class="mp-kicker">Pending Section</span>
          <h1 class="mp-title">${escapeHtml(section.title)}</h1>
        </header>
        <div class="mp-pending__panel">
          <div class="mp-pending__label">Awaiting approved design reference</div>
          <p class="mp-pending__copy">This page is reserved in the final print route. It will be recreated with live HTML/CSS text and original image URLs after the approved reference image and final content are supplied.</p>
        </div>
        <div class="mp-pending__meta">
          <div>
            <strong>Content Source</strong>
            ${escapeHtml(section.source||'Manual or approved submissions')}
          </div>
          <div>
            <strong>Available Data</strong>
            ${count} approved/finalized submission${count===1?'':'s'} currently match this section.
          </div>
          <div>
            <strong>Required Fields</strong>
            ${fields.length?escapeHtml(fields.join(', ')):'Approved text and image URLs'}
          </div>
          <div>
            <strong>Print Rule</strong>
            Fixed A4 shell, bottom footer, live text, no screenshot page.
          </div>
        </div>
      </section>
    `;
  }

  function getIdentityData(){
    const ls=state.settings.lsSettings||{};
    const schoolIdentity=ls.schoolIdentity||{};
    return {
      schoolName:IDENTITY.schoolName,
      location:schoolIdentity.location||IDENTITY.location,
      magazineTitle:IDENTITY.magazineTitle,
      theme:IDENTITY.theme,
      logo:schoolIdentity.logo||ls.logo||''
    };
  }

  function countApprovedForSection(section){
    const categories=Array.isArray(section.categories)?section.categories:[];
    if(!categories.length)return 0;
    return state.approved.filter(sub=>categories.includes(sub.category)).length;
  }

  function readJson(key,fallback){
    try{
      const raw=localStorage.getItem(key);
      if(!raw)return fallback;
      const parsed=JSON.parse(raw);
      return parsed==null?fallback:parsed;
    }catch(e){
      return fallback;
    }
  }

  function setStatus(message){
    const status=document.getElementById('mpStatus');
    if(!status)return;
    const suffix=state.errors.length?` Last fallback note: ${state.errors[state.errors.length-1]}`:'';
    status.textContent=message+suffix;
  }

  function escapeHtml(value){
    return String(value==null?'':value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function escapeAttr(value){
    return escapeHtml(value).replace(/`/g,'&#96;');
  }
})();
