/* ═══════════════════════════════════════════════════════════
   VISUAL BUILDER LOGIC
═══════════════════════════════════════════════════════════ */
function openVisualBuilder() {
  hideAllAdminModes();
  const vb = document.getElementById('viewVisualBuilder');
  if(vb) vb.style.display = 'block';
  
  // Update Tabs
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  const t = document.getElementById('tab-visualbuilder');
  if(t) t.classList.add('active');
  
  document.getElementById('viewAdmin').classList.add('ws-active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function closeVisualBuilder() {
  document.getElementById('viewVisualBuilder').style.display = 'none';
  document.getElementById('viewAdmin').classList.remove('ws-active');
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('adminModeLayout').style.display = 'none';
  
  // Show standard admin body
  const adminBody = document.querySelector('.admin-body');
  if(adminBody) adminBody.style.display = 'block';
  
  // Default back to gallery or first tab
  setCategory('gallery'); 
}

function vbDragStart(e, type) {
  e.dataTransfer.setData('text/plain', type);
}

function vbDragOver(e) {
  e.preventDefault();
}

function vbDrop(e) {
  e.preventDefault();
  const type = e.dataTransfer.getData('text/plain');
  const canvas = document.getElementById('vbCanvas');
  if(!canvas) return;
  
  const el = document.createElement('div');
  el.className = 'vb-dropped-element';
  el.onclick = function(ev) {
    ev.stopPropagation();
    document.querySelectorAll('.vb-dropped-element').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    vbSelectElement(el, type);
  };
  
  if(type === 'header') {
    el.innerHTML = '<h1 style="font-size:24px; font-family:Playfair Display, serif; color:var(--ink); margin:0;">New Header</h1>';
  } else if(type === 'text') {
    el.innerHTML = '<p style="font-size:14px; color:var(--ink2); margin:0;">This is a customizable text block. Select it to edit properties.</p>';
  } else if(type === 'image') {
    el.innerHTML = '<div style="background:#e8e8e0; width:100%; height:200px; display:flex; align-items:center; justify-content:center; color:#888;">Placeholder Image</div>';
  } else if(type === 'columns') {
    el.innerHTML = '<div style="display:flex; gap:20px;"><div style="flex:1; background:#f0f0ea; padding:20px; text-align:center;">Column 1</div><div style="flex:1; background:#f0f0ea; padding:20px; text-align:center;">Column 2</div></div>';
  }
  
  canvas.appendChild(el);
}

function vbSelectElement(el, type) {
  const propsBody = document.getElementById('vbPropsBody');
  if(!propsBody) return;
  
  let html = '<div style="margin-bottom:15px; font-size:11px; font-weight:700; color:var(--school-mint3); text-transform:uppercase;">Editing: ' + type + '</div>';
  
  if(type === 'header' || type === 'text') {
    html += `
      <div class="ls-field">
        <label>Text Content</label>
        <textarea id="vbTextVal" style="height:60px;">` + el.innerText + `</textarea>
      </div>
      <div class="ls-field">
        <label>Color</label>
        <input type="color" id="vbColorVal" value="#1c1c1e" />
      </div>
      <button class="ls-save-btn" onclick="vbApplyTextProps()">Apply Changes</button>
      <button class="ls-save-btn" style="background:var(--red); margin-top:10px;" onclick="vbDeleteSelected()">Delete Element</button>
    `;
  } else {
    html += `<div style="font-size:12px; color:var(--ink3);">Properties for ` + type + ` coming soon.</div>
             <button class="ls-save-btn" style="background:var(--red); margin-top:10px;" onclick="vbDeleteSelected()">Delete Element</button>`;
  }
  
  propsBody.innerHTML = html;
  window._vbSelectedEl = el;
}

function vbApplyTextProps() {
  if(!window._vbSelectedEl) return;
  const txt = document.getElementById('vbTextVal').value;
  const col = document.getElementById('vbColorVal').value;
  
  if(window._vbSelectedEl.querySelector('h1')) {
    const h1 = window._vbSelectedEl.querySelector('h1');
    h1.innerText = txt;
    h1.style.color = col;
  } else if(window._vbSelectedEl.querySelector('p')) {
    const p = window._vbSelectedEl.querySelector('p');
    p.innerText = txt;
    p.style.color = col;
  }
}

function vbDeleteSelected() {
  if(window._vbSelectedEl) {
    window._vbSelectedEl.remove();
    window._vbSelectedEl = null;
    document.getElementById('vbPropsBody').innerHTML = '<div style="font-size:12px; color:var(--ink3); text-align:center; padding:20px;">Select an element to edit properties.</div>';
  }
}

function vbSave() {
  alert('Visual Builder layout saved! (This is a prototype demonstration)');
}
