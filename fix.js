  const avatar=s.photoData?`<img class="sub-avatar" src="${s.photoData}" alt="${esc(name)}"/>`:`<div class="sub-avatar-init">${initials}</div>`;
  const fieldsHtml=Object.entries(s.data).map(([,fc])=>{if(!fc||!fc.value)return'';const wide=typeof fc.value==='string'&&fc.value.length>80;return`<div class="sub-field${wide?' wide':''}"><div class="sub-field-lbl">${esc(fc.label)}</div><div class="sub-field-val">${esc(fc.value)}</div></div>`;}).join('');
  const noteHtml=s.reviewerNote?`<div class="sub-reviewer-note"><strong>Editor's note:</strong> ${esc(s.reviewerNote)}</div>`:'';

  let acts='';
  if(ctx==='admin'){
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
    acts+=`<button class="sub-action-btn btn-ai" style="color:#fff;background:linear-gradient(135deg,#5b3a8a,#7b52a8);border:none;padding:7px 14px;" onclick="proofreadSubmission('${s.id}')">✦ AI Proofread</button>`;
  }
  return`<div class="sub-card cat-${s.category}" id="sub-card-${s.id}" data-id="${s.id}">
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

function sendForReview(id){if(!confirm('Send to Editor-in-Chief for review?'))return;subs=loadAll();const s=subs.find(x=>x.id===id);if(!s)return;s.status='pending';saveAll(subs);dbUpdateStatus(id,'pending','',null);renderAdmin();}
function finalizeSubmission(id){if(!confirm('Finalize this submission? It will appear in the magazine layout.'))return;subs=loadAll();const s=subs.find(x=>String(x.id)===String(id));if(!s)return;s.status='finalized';saveAll(subs);dbUpdateStatus(id,'finalized',s.reviewerNote||'',s.reviewedAt);renderAdmin();}
function deleteSubmission(id){if(!confirm('Permanently delete this submission?'))return;dbDeleteSubmission(id);subs=loadAll().filter(s=>String(s.id)!==String(id));renderAdmin();}

function enterAdmin(){
  show('viewAdmin');
  dbLoadAll().then(list=>{subs=list;renderAdmin();});
}

function enterEditor(){
  show('viewEditor');
  currentEditorCat='pending';
  currentEditorFilterCat='all';
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
    const btn=document.getElementById('etab-pending');
    if(btn){btn.style.background='var(--school-mint2)';setTimeout(()=>btn.style.background='',800);}
  }).catch(()=>{subs=loadAll();renderEditor();});
}

function setEditorCategory(cat){
  currentEditorCat=cat;
  currentEditorFilterCat='all';
  document.querySelectorAll('#viewEditor .editor-tab').forEach(t=>t.classList.remove('active'));
  const btn=document.getElementById('etab-'+cat);if(btn)btn.classList.add('active');
  if(cat==='editorial'){
    document.getElementById('editorModeList').style.display='none';
    document.getElementById('editorModeNote').style.display='block';
    renderEditorNote();
  } else {
    document.getElementById('editorModeList').style.display='block';
    document.getElementById('editorModeNote').style.display='none';
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
  if(!subs||!subs.length)subs=loadAll();
  const pendingCount=subs.filter(s=>s.status==='pending').length;
  const approvedCount=subs.filter(s=>s.status==='approved').length;
  document.getElementById('ecount-pending').textContent=pendingCount;
  document.getElementById('ecount-approved').textContent=approvedCount;
  document.getElementById('ecount-rejected').textContent=subs.filter(s=>s.status==='rejected').length;
  document.getElementById('ecount-all').textContent=subs.length;
  
  renderEditorSidebarCategories();
  
  const oldChips=document.getElementById('editorCategoryFilters');
  if(oldChips)oldChips.style.display='none';
  
  let filtered=subs.slice().sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
  if(currentEditorCat!=='all')filtered=filtered.filter(s=>s.status===currentEditorCat);
  if(currentEditorFilterCat!=='all')filtered=filtered.filter(s=>s.category===currentEditorFilterCat);
  
  const list=document.getElementById('editorSubList');
  const inboxBanner=pendingCount>0?`<div style="background:linear-gradient(135deg,#2d1b4e,#4a2d7a);color:#fff;border-radius:var(--radius);padding:14px 18px;margin-bottom:1.25rem;display:flex;align-items:center;gap:12px;">
    <span style="font-size:24px;">📬</span><div>
      <div style="font-weight:700;font-size:15px;">${pendingCount} submission${pendingCount>1?'s':''} waiting for your review</div>
      <div style="font-size:12px;color:rgba(255,255,255,.7);">Proofread → Approve or Reject → Production Admin finalizes</div>
    </div></div>`:'';
  if(!filtered.length){list.innerHTML=inboxBanner+`<div class="empty-state"><div class="empty-state-icon">✎</div><h3>No submissions here</h3><p>${currentEditorCat==='pending'?'No new submissions yet. Check back soon.':'Nothing to show in this filter.'}</p></div>`;return;}
  list.innerHTML=inboxBanner+renderEditorSubmissionGroups(filtered);
}

function renderEditorSidebarCategories(){
  const container=document.getElementById('editorSidebarCategories');
  if(!container)return;
  ensureCategoriesReady();
  const allActive=currentEditorFilterCat==='all'?' active':'';
  let html=`<button class="editor-sidebar-cat-btn${allActive}" onclick="setEditorFilterCategory('all')">
    <span class="escat-icon">🗂️</span><span class="escat-label">All Categories</span><span class="escat-count">${subs.length}</span>
  </button>`;
  CATEGORY_KEYS.forEach(k=>{
    const cat=CATEGORIES[k];
    const label=getLabel('cat_label_'+k,cat.label||k);
    const totalCount=subs.filter(s=>s.category===k).length;
    const pendingInCat=subs.filter(s=>s.category===k&&s.status==='pending').length;
    const active=currentEditorFilterCat===k?' active':'';
    const badge=pendingInCat>0?`<span class="escat-pending-dot">${pendingInCat}</span>`:'';
    html+=`<button class="editor-sidebar-cat-btn${active}" onclick="setEditorFilterCategory('${k}')">
      <span class="escat-icon">${cat.icon||'📝'}</span><span class="escat-label">${esc(label)}</span>${badge}<span class="escat-count">${totalCount}</span>
    </button>`;
  });
  container.innerHTML=html;
}
