"use strict";

const BUILDER_STATE_KEY = "magazine_builder_state_v1";
const SUPA_URL = "https://srkgolzstppnyntrkemk.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2dvbHpzdHBwbnludHJrZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMjg4MTAsImV4cCI6MjA5MjgwNDgxMH0.M1uVsgraBxXGDrLSqBgz9e3QFRmSjaZBgz7xoGlOo3c";

const PAGE_STATUSES = [
  "Placeholder Design",
  "Awaiting Text",
  "Awaiting Images",
  "Needs Revision",
  "Final Design",
  "Ready for PDF"
];

const TEMPLATE_GROUPS = [
  { id: "front-cover", label: "Front Cover", defaultTitle: "Maiden Magazine", defaultSubtitle: "The Making of Tomorrow", unnumbered: true },
  { id: "inside-cover", label: "Inside Cover / School Identity", defaultTitle: "Way To Success Standard Schools", defaultSubtitle: "Ifedapo Community, Ejigbo", unnumbered: true },
  { id: "contents", label: "Contents Page", defaultTitle: "Contents", defaultSubtitle: "The Making of Tomorrow: From Humble Beginnings to Limitless Horizons" },
  { id: "editorial-board", label: "Editorial Board / Magazine Crew", defaultTitle: "The Editorial Board", defaultSubtitle: "Magazine Crew & Production Team" },
  { id: "eic-address", label: "Editor-in-Chief Address", defaultTitle: "From the Editor-in-Chief", defaultSubtitle: "Editorial Chairman's Address" },
  { id: "brief-history", label: "Brief History of the School", defaultTitle: "Brief History of the School", defaultSubtitle: "" },
  { id: "proprietor-speech", label: "Proprietor's Speech", defaultTitle: "Proprietor's Speech", defaultSubtitle: "Speech" },
  { id: "senior-boy-speech", label: "Senior Boy's Speech", defaultTitle: "Senior Boy's Speech", defaultSubtitle: "Student Speech" },
  { id: "senior-girl-speech", label: "Senior Girl's Speech", defaultTitle: "Senior Girl's Speech", defaultSubtitle: "Student Speech" },
  { id: "interview-1", label: "Interview Template 1", defaultTitle: "Interview", defaultSubtitle: "A conversation that inspires, a vision that leads." },
  { id: "interview-2", label: "Interview Template 2", defaultTitle: "Interview", defaultSubtitle: "" },
  { id: "class-message", label: "Graduating Class Message", defaultTitle: "Graduating Class Message", defaultSubtitle: "Class of 2025/2026" },
  { id: "ss3-profiles", label: "SS3 Graduate Profiles", defaultTitle: "SS3 Graduate Profiles", defaultSubtitle: "Celebrating Our Graduating Stars" },
  { id: "jss3-profiles", label: "JSS3 Student Profiles", defaultTitle: "JSS3 Student Profiles", defaultSubtitle: "Celebrating Our Junior Graduates" },
  { id: "primary5-profiles", label: "Primary 5 Graduate Profiles", defaultTitle: "Primary 5 Graduate Profiles", defaultSubtitle: "Celebrating Our Young Achievers" },
  { id: "class-cross-section", label: "Cross Section of Classes", defaultTitle: "Cross Section of Classes", defaultSubtitle: "A Glimpse Across Our Early Years and Primary Classes" },
  { id: "staff-profiles", label: "Staff Profiles", defaultTitle: "Staff Profiles", defaultSubtitle: "The People Behind the Journey" },
  { id: "academic-contents", label: "Academic & Educational Contents", defaultTitle: "Academic & Educational Contents", defaultSubtitle: "Ideas, Knowledge and Expressions from Our School Community" },
  { id: "school-life", label: "School Life Events / Photo Splash", defaultTitle: "School Life Events", defaultSubtitle: "Moments from our school community" },
  { id: "advert", label: "Advertisement Page", defaultTitle: "Advertisement", defaultSubtitle: "" },
  { id: "appreciation", label: "Appreciation / Acknowledgement", defaultTitle: "Appreciation", defaultSubtitle: "Acknowledgement" },
  { id: "back-cover", label: "Back Cover", defaultTitle: "Way To Success Standard Schools", defaultSubtitle: "God - Knowledge - Leadership", unnumbered: true }
];

const CATEGORY_LABELS = {
  teachers: "Staff Profiles",
  primary5: "Primary 5 Graduates",
  jss3: "JSS3 Graduates",
  ss3: "SS3 Graduates",
  ss3_class_message: "Graduating Class Message",
  speeches: "Speeches & Addresses",
  academic: "Academic & Educational",
  creative: "Creative Corner",
  events: "School Life & Events",
  interviews: "Interviews",
  gallery: "Photo Gallery",
  advertisements: "Advertisements",
  editor_board: "Editor Board / Crew",
  "editorial-note": "Editorial Note",
  appreciation: "Appreciation"
};

const COMPATIBLE_CATEGORIES = {
  "editorial-board": ["editor_board"],
  "eic-address": ["editorial-note", "speeches", "editor_board"],
  "proprietor-speech": ["speeches"],
  "senior-boy-speech": ["speeches"],
  "senior-girl-speech": ["speeches"],
  "interview-1": ["interviews"],
  "interview-2": ["interviews"],
  "class-message": ["ss3_class_message"],
  "ss3-profiles": ["ss3"],
  "jss3-profiles": ["jss3"],
  "primary5-profiles": ["primary5"],
  "staff-profiles": ["teachers"],
  "academic-contents": ["academic", "creative", "motivational"],
  "school-life": ["events", "gallery"],
  "advert": ["advertisements"],
  appreciation: ["appreciation"]
};

let state = loadBuilderState();
let selectedPageId = state.pages[0]?.id || null;
let approvedSubmissions = loadLocalApprovedSubmissions();

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheEls();
  wireEvents();
  fillTemplateSelect();
  if (!state.pages.length) seedStarterPages(false);
  renderAll();
  refreshApprovedSubmissions();
});

function cacheEls() {
  els.templateSelect = document.getElementById("templateSelect");
  els.addPageBtn = document.getElementById("addPageBtn");
  els.refreshSubmissionsBtn = document.getElementById("refreshSubmissionsBtn");
  els.seedPagesBtn = document.getElementById("seedPagesBtn");
  els.pageList = document.getElementById("pageList");
  els.collectorCount = document.getElementById("collectorCount");
  els.previewCanvas = document.getElementById("previewCanvas");
  els.editorPanel = document.getElementById("editorPanel");
  els.selectedPageLabel = document.getElementById("selectedPageLabel");
  els.duplicatePageBtn = document.getElementById("duplicatePageBtn");
  els.deletePageBtn = document.getElementById("deletePageBtn");
  els.printSelectedBtn = document.getElementById("printSelectedBtn");
  els.printFullBtn = document.getElementById("printFullBtn");
  els.printRoot = document.getElementById("printRoot");
  els.previewWarnings = document.getElementById("previewWarnings");
}

function wireEvents() {
  els.addPageBtn.addEventListener("click", () => addPage(els.templateSelect.value));
  els.refreshSubmissionsBtn.addEventListener("click", refreshApprovedSubmissions);
  els.seedPagesBtn.addEventListener("click", () => seedStarterPages(true));
  els.duplicatePageBtn.addEventListener("click", duplicateSelectedPage);
  els.deletePageBtn.addEventListener("click", deleteSelectedPage);
  els.printSelectedBtn.addEventListener("click", () => printMagazine("selected"));
  els.printFullBtn.addEventListener("click", () => printMagazine("full"));
}

function fillTemplateSelect() {
  els.templateSelect.innerHTML = TEMPLATE_GROUPS.map(t => `<option value="${esc(t.id)}">${esc(t.label)}</option>`).join("");
}

function loadBuilderState() {
  try {
    const raw = JSON.parse(localStorage.getItem(BUILDER_STATE_KEY) || "null");
    if (raw && Array.isArray(raw.pages)) return normalizeState(raw);
  } catch (err) {
    console.warn("[Builder] State load failed", err);
  }
  return { pages: [], updatedAt: new Date().toISOString() };
}

function normalizeState(raw) {
  return {
    pages: raw.pages.map((page, index) => normalizePage(page, index)),
    updatedAt: raw.updatedAt || new Date().toISOString()
  };
}

function saveBuilderState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(BUILDER_STATE_KEY, JSON.stringify(state));
}

function normalizePage(page, index) {
  const tpl = getTemplate(page.templateType) || TEMPLATE_GROUPS[0];
  return {
    id: page.id || createId(),
    templateType: page.templateType || tpl.id,
    title: page.title || tpl.defaultTitle,
    subtitle: page.subtitle || tpl.defaultSubtitle || "",
    status: PAGE_STATUSES.includes(page.status) ? page.status : "Placeholder Design",
    order: Number.isFinite(page.order) ? page.order : index,
    pageNumber: page.pageNumber || "",
    includeInExport: page.includeInExport !== false,
    hidden: !!page.hidden,
    sourceType: page.sourceType || "manual",
    sourceSubmissionId: page.sourceSubmissionId || "",
    manualFields: page.manualFields && typeof page.manualFields === "object" ? page.manualFields : {},
    images: page.images && typeof page.images === "object" ? page.images : {},
    notes: page.notes || "",
    createdAt: page.createdAt || new Date().toISOString(),
    updatedAt: page.updatedAt || new Date().toISOString()
  };
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "builder-" + Date.now() + "-" + Math.random().toString(16).slice(2);
}

function getTemplate(id) {
  return TEMPLATE_GROUPS.find(t => t.id === id);
}

function addPage(templateType, options = {}) {
  const tpl = getTemplate(templateType) || TEMPLATE_GROUPS[0];
  const page = normalizePage({
    id: createId(),
    templateType: tpl.id,
    title: options.title || tpl.defaultTitle,
    subtitle: options.subtitle !== undefined ? options.subtitle : (tpl.defaultSubtitle || ""),
    status: options.status || "Placeholder Design",
    sourceType: options.sourceType || "manual",
    manualFields: options.manualFields || {},
    images: options.images || {},
    includeInExport: options.includeInExport !== false
  }, state.pages.length);
  state.pages.push(page);
  selectedPageId = page.id;
  persistAndRender();
}

function seedStarterPages(confirmFirst) {
  if (confirmFirst && state.pages.length && !confirm("Add the starter Builder page set to the current collector?")) return;
  const starters = [
    "inside-cover",
    "contents",
    "editorial-board",
    "eic-address",
    "brief-history",
    "senior-girl-speech",
    "staff-profiles",
    "ss3-profiles",
    "academic-contents"
  ];
  starters.forEach(type => {
    const tpl = getTemplate(type);
    state.pages.push(normalizePage({
      id: createId(),
      templateType: type,
      title: tpl.defaultTitle,
      subtitle: tpl.defaultSubtitle,
      status: type === "contents" ? "Final Design" : "Placeholder Design"
    }, state.pages.length));
  });
  selectedPageId = selectedPageId || state.pages[0]?.id || null;
  persistAndRender();
}

function persistAndRender() {
  renumberPages();
  saveBuilderState();
  renderAll();
}

function persistAndRefreshPreview() {
  renumberPages();
  saveBuilderState();
  renderPageList();
  renderPreview();
  const page = selectedPage();
  const tpl = page ? getTemplate(page.templateType) : null;
  els.selectedPageLabel.textContent = page ? `${page.pageNumber ? "Page " + page.pageNumber + " / " : ""}${page.title || tpl?.label || "Untitled"}` : "No page selected";
}

function renderAll() {
  renumberPages();
  renderPageList();
  renderPreview();
  renderEditor();
}

function visibleExportPages() {
  return orderedPages().filter(p => p.includeInExport && !p.hidden);
}

function orderedPages() {
  return [...state.pages].sort((a, b) => (a.order || 0) - (b.order || 0));
}

function renumberPages() {
  const pages = orderedPages();
  let next = 1;
  pages.forEach((page, index) => {
    page.order = index;
    const tpl = getTemplate(page.templateType);
    if (!page.includeInExport || page.hidden || tpl?.unnumbered) {
      page.pageNumber = "";
    } else {
      page.pageNumber = String(next).padStart(2, "0");
      next += 1;
    }
  });
}

function renderPageList() {
  const pages = orderedPages();
  els.collectorCount.textContent = `${pages.length} page${pages.length === 1 ? "" : "s"}`;
  els.pageList.innerHTML = pages.map((page, index) => {
    const tpl = getTemplate(page.templateType);
    const missing = missingContent(page);
    return `
      <article class="collector-row ${page.id === selectedPageId ? "active" : ""}" data-page-id="${esc(page.id)}">
        <div class="collector-row-top" role="button" tabindex="0" data-select-page="${esc(page.id)}">
          <div class="collector-number">${page.pageNumber || "--"}</div>
          <div>
            <div class="collector-title">${esc(page.title || tpl?.label || "Untitled")}</div>
            <div class="collector-meta">${esc(tpl?.label || page.templateType)}<br>${esc(sourceLabel(page))} / ${page.includeInExport && !page.hidden ? "included" : "excluded"}</div>
            ${missing ? `<div class="collector-meta">Missing: ${esc(missing)}</div>` : ""}
          </div>
          <span class="collector-status">${esc(page.status)}</span>
        </div>
        <div class="collector-tools">
          <button type="button" data-move="${index}:-1">Up</button>
          <button type="button" data-move="${index}:1">Down</button>
          <button type="button" data-toggle-include="${esc(page.id)}">${page.includeInExport ? "Exclude" : "Include"}</button>
          <button type="button" data-toggle-hidden="${esc(page.id)}">${page.hidden ? "Show" : "Hide"}</button>
        </div>
      </article>
    `;
  }).join("");

  els.pageList.querySelectorAll("[data-select-page]").forEach(row => {
    row.addEventListener("click", () => selectPage(row.dataset.selectPage));
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") selectPage(row.dataset.selectPage);
    });
  });
  els.pageList.querySelectorAll("[data-move]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.stopPropagation();
      const [index, delta] = btn.dataset.move.split(":").map(Number);
      movePage(index, delta);
    });
  });
  els.pageList.querySelectorAll("[data-toggle-include]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.stopPropagation();
      const page = state.pages.find(p => p.id === btn.dataset.toggleInclude);
      if (!page) return;
      page.includeInExport = !page.includeInExport;
      page.updatedAt = new Date().toISOString();
      persistAndRender();
    });
  });
  els.pageList.querySelectorAll("[data-toggle-hidden]").forEach(btn => {
    btn.addEventListener("click", event => {
      event.stopPropagation();
      const page = state.pages.find(p => p.id === btn.dataset.toggleHidden);
      if (!page) return;
      page.hidden = !page.hidden;
      page.updatedAt = new Date().toISOString();
      persistAndRender();
    });
  });
}

function selectPage(id) {
  selectedPageId = id;
  renderAll();
}

function selectedPage() {
  return state.pages.find(p => p.id === selectedPageId) || state.pages[0] || null;
}

function movePage(index, delta) {
  const pages = orderedPages();
  const target = index + delta;
  if (target < 0 || target >= pages.length) return;
  const moved = pages.splice(index, 1)[0];
  pages.splice(target, 0, moved);
  pages.forEach((page, idx) => page.order = idx);
  state.pages = pages;
  persistAndRender();
}

function duplicateSelectedPage() {
  const page = selectedPage();
  if (!page) return;
  const copy = normalizePage(JSON.parse(JSON.stringify(page)), state.pages.length);
  copy.id = createId();
  copy.title = `${copy.title} Copy`;
  copy.createdAt = new Date().toISOString();
  copy.updatedAt = copy.createdAt;
  copy.order = page.order + 0.5;
  state.pages.push(copy);
  selectedPageId = copy.id;
  persistAndRender();
}

function deleteSelectedPage() {
  const page = selectedPage();
  if (!page) return;
  if (!confirm("Delete this Builder page only? Original submissions will not be changed.")) return;
  state.pages = state.pages.filter(p => p.id !== page.id);
  selectedPageId = orderedPages()[0]?.id || null;
  persistAndRender();
}

function updatePageField(id, value, fullRender = true) {
  const page = selectedPage();
  if (!page) return;
  page[id] = value;
  page.updatedAt = new Date().toISOString();
  if (fullRender) persistAndRender();
  else persistAndRefreshPreview();
}

function updateManualField(key, value) {
  const page = selectedPage();
  if (!page) return;
  page.manualFields[key] = value;
  page.updatedAt = new Date().toISOString();
  persistAndRefreshPreview();
}

function updateImageField(key, value) {
  const page = selectedPage();
  if (!page) return;
  page.images[key] = value;
  page.updatedAt = new Date().toISOString();
  persistAndRefreshPreview();
}

function renderEditor() {
  const page = selectedPage();
  els.duplicatePageBtn.disabled = !page;
  els.deletePageBtn.disabled = !page;
  els.printSelectedBtn.disabled = !page;
  if (!page) {
    els.selectedPageLabel.textContent = "No page selected";
    els.editorPanel.innerHTML = `<div class="editor-note">Create a page to begin production editing.</div>`;
    return;
  }
  const tpl = getTemplate(page.templateType);
  els.selectedPageLabel.textContent = `${page.pageNumber ? "Page " + page.pageNumber + " / " : ""}${page.title || tpl.label}`;
  const compatible = compatibleSubmissions(page.templateType);
  const selectedSource = approvedSubmissions.find(s => String(s.id) === String(page.sourceSubmissionId));
  const dynamicButton = dynamicPageButton(page);
  els.editorPanel.innerHTML = `
    <div class="editor-field">
      <label>Template</label>
      <select data-editor-field="templateType">
        ${TEMPLATE_GROUPS.map(t => `<option value="${esc(t.id)}" ${page.templateType === t.id ? "selected" : ""}>${esc(t.label)}</option>`).join("")}
      </select>
    </div>
    <div class="editor-row">
      <label class="toggle-line"><input type="checkbox" data-editor-bool="includeInExport" ${page.includeInExport ? "checked" : ""}> Include in export</label>
      <label class="toggle-line"><input type="checkbox" data-editor-bool="hidden" ${page.hidden ? "checked" : ""}> Hide page</label>
    </div>
    <div class="editor-field">
      <label>Status</label>
      <select data-editor-field="status">${PAGE_STATUSES.map(status => `<option ${status === page.status ? "selected" : ""}>${esc(status)}</option>`).join("")}</select>
    </div>
    <div class="editor-field">
      <label>Page Title</label>
      <input data-editor-field="title" value="${escAttr(page.title)}">
    </div>
    <div class="editor-field">
      <label>Subtitle</label>
      <input data-editor-field="subtitle" value="${escAttr(page.subtitle)}">
    </div>
    <div class="editor-field">
      <label>Source Type</label>
      <select data-editor-field="sourceType">
        ${["manual", "approved submission", "mixed"].map(type => `<option value="${type}" ${page.sourceType === type ? "selected" : ""}>${type}</option>`).join("")}
      </select>
    </div>
    <div class="editor-field">
      <label>Approved Submission Source</label>
      <select data-editor-field="sourceSubmissionId">
        <option value="">No linked source</option>
        ${compatible.map(s => `<option value="${esc(s.id)}" ${String(page.sourceSubmissionId) === String(s.id) ? "selected" : ""}>${esc(submissionLabel(s))}</option>`).join("")}
      </select>
    </div>
    <div class="editor-note">
      Render priority: production/manual fields first, then selected approved submission data, then clean placeholders. Original submissions are never overwritten.
      ${selectedSource ? `<br>Linked source: ${esc(submissionLabel(selectedSource))}` : ""}
    </div>
    ${dynamicButton}
    ${manualFieldControls(page)}
    <div class="editor-field">
      <label>Portrait / Main Image URL</label>
      <input data-image-field="portrait" value="${escAttr(page.images.portrait || "")}" placeholder="Paste original Storage URL">
    </div>
    <div class="editor-field">
      <label>Group / Secondary Image URL</label>
      <input data-image-field="group" value="${escAttr(page.images.group || "")}" placeholder="Paste original Storage URL">
    </div>
    <div class="editor-field">
      <label>Notes</label>
      <textarea data-editor-field="notes">${esc(page.notes)}</textarea>
    </div>
  `;

  els.editorPanel.querySelectorAll("[data-editor-field]").forEach(input => {
    const field = input.dataset.editorField;
    if (input.tagName === "SELECT") {
      input.addEventListener("change", () => updatePageField(field, input.value, true));
    } else {
      input.addEventListener("input", () => updatePageField(field, input.value, false));
      input.addEventListener("change", () => updatePageField(field, input.value, true));
    }
  });
  els.editorPanel.querySelectorAll("[data-editor-bool]").forEach(input => {
    input.addEventListener("change", () => updatePageField(input.dataset.editorBool, input.checked));
  });
  els.editorPanel.querySelectorAll("[data-manual-field]").forEach(input => {
    input.addEventListener("input", () => updateManualField(input.dataset.manualField, input.value));
  });
  els.editorPanel.querySelectorAll("[data-image-field]").forEach(input => {
    input.addEventListener("input", () => updateImageField(input.dataset.imageField, input.value));
  });
  const autoBtn = els.editorPanel.querySelector("[data-auto-pages]");
  if (autoBtn) autoBtn.addEventListener("click", () => autoGeneratePages(page.templateType));
}

function manualFieldControls(page) {
  const fields = [
    ["name", "Name / Speaker"],
    ["role", "Role / Title"],
    ["body", "Main Text"],
    ["quote", "Quote / Pull Quote"],
    ["caption", "Image Caption"],
    ["itemsJson", "Manual Items JSON"]
  ];
  return fields.map(([key, label]) => {
    const value = page.manualFields[key] || "";
    const isLong = key === "body" || key === "itemsJson";
    return `
      <div class="editor-field">
        <label>${esc(label)}</label>
        ${isLong ? `<textarea class="${key === "body" ? "tall" : ""}" data-manual-field="${key}">${esc(value)}</textarea>` : `<input data-manual-field="${key}" value="${escAttr(value)}">`}
      </div>
    `;
  }).join("");
}

function dynamicPageButton(page) {
  if (!["ss3-profiles", "jss3-profiles", "primary5-profiles", "staff-profiles"].includes(page.templateType)) return "";
  return `<button type="button" class="primary-btn" data-auto-pages="${esc(page.templateType)}">Auto-fill pages from approved records</button>
    <div class="editor-note">This creates Builder pages only. It does not change submitted records.</div>`;
}

function renderPreview() {
  const page = selectedPage();
  if (!page) {
    els.previewCanvas.innerHTML = document.getElementById("emptyPageTemplate").innerHTML;
    els.previewWarnings.classList.remove("visible");
    els.previewWarnings.textContent = "";
    return;
  }
  els.previewCanvas.innerHTML = renderPage(page);
  showWarningsForRenderedImages(els.previewCanvas);
}

function renderPage(page) {
  const tpl = getTemplate(page.templateType);
  const body = renderTemplateBody(page);
  return `
    <section class="mag-page ${tpl?.unnumbered ? "unnumbered" : ""}" data-template="${esc(page.templateType)}">
      <span class="mag-curve-top"></span>
      <span class="mag-curve-bottom"></span>
      <span class="mag-watermark"></span>
      <div class="mag-page-body">${body}</div>
      <footer class="mag-page-footer">
        <span>Way To Success Standard Schools, Ejigbo</span>
        <span class="mag-page-no">${esc(page.pageNumber || "")}</span>
      </footer>
    </section>
  `;
}

function renderTemplateBody(page) {
  switch (page.templateType) {
    case "inside-cover": return renderInsideCover(page);
    case "contents": return renderContents(page);
    case "editorial-board": return renderEditorialBoard(page);
    case "eic-address": return renderEicAddress(page);
    case "brief-history": return renderBriefHistory(page);
    case "senior-girl-speech": return renderSpeech(page, "Senior Girl");
    case "proprietor-speech": return renderSpeech(page, "Proprietor");
    case "senior-boy-speech": return renderSpeech(page, "Senior Boy");
    case "ss3-profiles": return renderStudentProfiles(page, "ss3", 10, true);
    case "jss3-profiles": return renderStudentProfiles(page, "jss3", 20, false);
    case "primary5-profiles": return renderStudentProfiles(page, "primary5", 20, false);
    case "staff-profiles": return renderStaffProfiles(page);
    case "academic-contents": return renderAcademicContents(page);
    case "class-cross-section": return renderClassCrossSection(page);
    case "interview-1": return renderInterview(page, true);
    case "interview-2": return renderInterview(page, false);
    case "class-message": return renderClassMessage(page);
    default: return renderPlaceholderTemplate(page);
  }
}

function pageHead(page, kicker = "") {
  return `
    ${kicker ? `<div class="mag-kicker">${esc(kicker)}</div>` : ""}
    <h1 class="mag-title">${esc(page.title)}</h1>
    ${page.subtitle ? `<div class="mag-subtitle">${esc(page.subtitle)}</div>` : ""}
    <div class="mag-rule"></div>
  `;
}

function renderInsideCover(page) {
  const philosophy = getValue(page, "body", ["body", "philosophy"]) || "At Way to Success Standard Schools, we believe education is a transformative force that nurtures lifelong learners, critical thinkers, and responsible citizens. We are committed to providing a holistic learning environment where students develop intellectual curiosity, moral integrity, and social responsibility.";
  const anthem = getValue(page, "quote", ["anthem"]) || "Way to Success,\nNigeria's most vibrant school.\nWe are pious, prayerful, progressive,\nAttaining in all endeavours.\nForward ever, backward never.";
  return `
    <div class="identity-logo">W</div>
    <h1 class="mag-title">Way To Success<br>Standard Schools</h1>
    <div class="mag-subtitle">Ifedapo Community, Ejigbo</div>
    <div class="mag-rule"></div>
    <div class="identity-panel">
      <h2 class="mag-name" style="text-align:center;margin-bottom:14px;">Philosophy of the School</h2>
      <div class="mag-body-text">${esc(philosophy)}</div>
    </div>
    <div class="anthem-panel">
      <h2 class="mag-name" style="text-align:center;margin-bottom:12px;">The School Anthem</h2>
      <div class="mag-body-text">${esc(anthem)}</div>
    </div>
  `;
}

function renderContents(page) {
  const items = visibleExportPages()
    .filter(p => !["front-cover", "inside-cover", "contents", "back-cover"].includes(p.templateType))
    .map(p => ({ title: p.title || getTemplate(p.templateType)?.label || "Untitled", page: p.pageNumber || "00", type: getTemplate(p.templateType)?.label || p.templateType }));
  const groups = chunk(items, Math.ceil(Math.max(items.length, 1) / 6) || 1).slice(0, 6);
  while (groups.length < 6) groups.push([]);
  return `
    <div class="mag-kicker">Contents</div>
    <h1 class="mag-title">${esc(page.title || "Contents")}</h1>
    <div class="mag-rule"></div>
    <div class="mag-subtitle">${esc(page.subtitle || "The Making of Tomorrow: From Humble Beginnings to Limitless Horizons")}</div>
    <div class="contents-grid">
      ${groups.map((group, index) => `
        <section class="contents-section">
          <div class="contents-index">${String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>${esc(group[0]?.type || "Section Title")}</h3>
            ${(group.length ? group : [{ title: "Item title", page: "00" }]).slice(0, 4).map(item => `
              <div class="contents-line"><span>${esc(item.title)}</span><i></i><b>p. ${esc(item.page)}</b></div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
    <div class="identity-panel" style="width:58%;text-align:center;margin-top:34px;padding:18px;">
      <div class="mag-body-text">Every page tells our story.<br>Every chapter builds our legacy.</div>
    </div>
  `;
}

function renderEditorialBoard(page) {
  const crew = getManualItems(page);
  const approvedCrew = approvedSubmissions.filter(s => s.category === "editor_board");
  const allCrew = crew.length ? crew : approvedCrew.map(subToPerson);
  const editor = allCrew.find(p => /editor[- ]?in[- ]?chief|editorial chairman/i.test(`${p.role || ""} ${p.title || ""}`));
  const members = allCrew.filter(p => p !== editor).slice(0, 6);
  return `
    ${pageHead(page, "Magazine Crew & Production Team")}
    ${editor ? `
      <div class="board-feature">
        ${photoBox(editor.photo || page.images.portrait, "portrait-img")}
        <div class="board-info">
          <div class="mag-kicker">Editor-in-Chief</div>
          <h2 class="mag-name">${esc(editor.name)}</h2>
          <span class="mag-badge">${esc(editor.role || "Editorial Chairman")}</span>
          <div class="mag-rule"></div>
          <div class="mag-body-text">${esc(editor.bio || editor.message || "")}</div>
        </div>
      </div>
    ` : `<div class="editor-note" style="width:72%;margin:0 auto 24px;">Editor-in-Chief hero slot is waiting for a crew member marked Editor-in-Chief or Editorial Chairman.</div>`}
    <div class="crew-grid">
      ${(members.length ? members : placeholderPeople(6, "Crew Member")).map(member => `
        <article class="crew-card">
          ${photoBox(member.photo, "portrait-img")}
          <h3>${esc(member.name)}</h3>
          <span class="mag-badge">${esc(member.role || "Crew Member")}</span>
        </article>
      `).join("")}
    </div>
  `;
}

function renderEicAddress(page) {
  const sub = getSelectedSubmission(page);
  const isAllowed = !sub || sub.category === "editorial-note" || sub.category === "editor_board" || (sub.category === "speeches" && /editor|chairman/i.test(fieldValue(sub, ["speechType", "speakerTitle", "title"])));
  const body = page.manualFields.body || (isAllowed ? fieldValue(sub, ["body", "speechBody", "message", "bio"]) : "");
  const name = page.manualFields.name || (isAllowed ? fieldValue(sub, ["speakerName", "name", "authorName"]) : "") || "editor_in_chief_name";
  const role = page.manualFields.role || (isAllowed ? fieldValue(sub, ["speakerTitle", "title", "authorRole"]) : "") || "Editorial Chairman";
  const quote = page.manualFields.quote || (isAllowed ? fieldValue(sub, ["quote", "pullQuote"]) : "") || "A school is not built by buildings alone, but by the vision, values and people who believe in its purpose.";
  const portrait = page.images.portrait || (isAllowed ? firstPhoto(sub, 0) : "");
  return `
    <div class="mag-kicker">${esc(page.subtitle || "Editorial Chairman's Address")}</div>
    <h1 class="mag-title" style="font-size:42px;">${esc(page.title)}</h1>
    <div class="mag-rule"></div>
    <div class="eic-layout">
      <div>
        <div class="mag-body-text">${body ? esc(body) : `<span class="clean-placeholder">Paste the Editor-in-Chief address here or link the correct approved submission.</span>`}</div>
      </div>
      <aside class="eic-side">
        ${photoBox(portrait, "portrait-img")}
        <h2 class="mag-name">${esc(name)}</h2>
        <span class="mag-badge">${esc(role)}</span>
        <div class="quote-box eic-quote">${esc(quote)}</div>
      </aside>
    </div>
  `;
}

function renderBriefHistory(page) {
  const body = getValue(page, "body", ["body", "history", "articleBody"]) || "Way to Success Standard Schools began with a simple yet profound vision - to create a learning environment where children are equipped with knowledge, character, and the confidence to excel in life.\n\nThe school was established in 2017 in Ifedapo Community, Ejigbo, with a handful of students, dedicated teachers, and a commitment to excellence.\n\nFrom these humble beginnings, the school has grown steadily, expanding its facilities, embracing innovation, and upholding strong values that have become the foundation of our identity.";
  return `
    ${pageHead(page, "School Community")}
    <div class="history-layout">
      <div class="history-path"><i></i><i></i><i></i><i></i><i></i></div>
      <div>
        <div class="mag-body-text">${esc(body.split("\n\n")[0] || body)}</div>
        <div class="history-photo">${photoBox(getImage(page, "group"), "group-img")}</div>
        <div class="mag-kicker" style="font-size:10px;letter-spacing:1px;">${esc(getValue(page, "caption", ["photoCaption"]) || "history image caption")}</div>
        <div class="mag-body-text">${esc(body.split("\n\n").slice(1).join("\n\n"))}</div>
      </div>
    </div>
  `;
}

function renderSpeech(page, requiredType) {
  const sub = getSelectedSubmission(page);
  const exact = !sub || (sub.category === "speeches" && fieldValue(sub, ["speechType", "speakerTitle"]).toLowerCase().includes(requiredType.toLowerCase()));
  const body = page.manualFields.body || (exact ? fieldValue(sub, ["speechBody"]) : "");
  const name = page.manualFields.name || (exact ? fieldValue(sub, ["speakerName"]) : "") || `${requiredType.toLowerCase().replace(/\s+/g, "_")}_name`;
  const role = page.manualFields.role || (exact ? fieldValue(sub, ["speakerTitle"]) : "") || `${requiredType} Title`;
  const lead = page.manualFields.quote || (exact ? fieldValue(sub, ["speechTitle"]) : "") || "Let us continue to support one another, celebrate our differences, and rise together as strong, compassionate, and visionary leaders.";
  const portrait = page.images.portrait || (exact ? firstPhoto(sub, 0) : "");
  if (requiredType === "Senior Girl") {
    return `
      ${pageHead(page, "Student Speech")}
      <div class="speech-girl">
        <aside>
          ${photoBox(portrait, "portrait-img")}
          <h2 class="mag-name" style="text-align:center;margin-top:10px;">${esc(name)}</h2>
          <span class="mag-badge" style="display:block;width:max-content;margin:8px auto 0;">${esc(role)}</span>
        </aside>
        <div>
          <div class="speech-lead">${esc(lead)}</div>
          <div class="mag-body-text">${body ? esc(body) : `<span class="clean-placeholder">Paste the Senior Girl's speech here or link the exact Senior Girl approved submission. No other speech type is used as fallback.</span>`}</div>
        </div>
      </div>
      <div class="quote-box" style="margin-top:26px;">${esc(lead)}</div>
      <div class="speech-bottom">
        <p>To our teachers, thank you for nurturing us with wisdom and kindness.</p>
        <p>To our parents, thank you for being our strongest support system.</p>
        <p>We are proud of how far we have come, and excited about where we are going.</p>
      </div>
    `;
  }
  return `
    ${pageHead(page, requiredType === "Proprietor" ? "Speech" : "Student Speech")}
    <div class="eic-layout">
      <div class="mag-body-text">${body ? esc(body) : `<span class="clean-placeholder">Paste the ${esc(requiredType)} speech here or link the exact approved submission. No other speech type is used as fallback.</span>`}</div>
      <aside class="eic-side">
        ${photoBox(portrait, "portrait-img")}
        <h2 class="mag-name">${esc(name)}</h2>
        <span class="mag-badge">${esc(role)}</span>
      </aside>
    </div>
    <div class="quote-box" style="margin-top:26px;">${esc(lead)}</div>
  `;
}

function renderStudentProfiles(page, category, perPage, detailed) {
  const all = getManualItems(page);
  const approved = approvedSubmissions.filter(s => s.category === category).map(subToPerson);
  const source = all.length ? all : approved;
  const start = Number(page.manualFields.chunkStart || 0);
  const entries = source.slice(start, start + perPage);
  const placeholders = placeholderPeople(perPage - entries.length, "Student");
  const finalEntries = entries.concat(placeholders);
  const kicker = "Class of 2025/2026";
  if (detailed) {
    return `
      ${pageHead(page, kicker)}
      <div class="profile-grid ss3">
        ${finalEntries.map((student, index) => `
          <article class="ss3-card">
            <span class="card-ribbon">${String(start + index + 1).padStart(2, "0")}</span>
            ${photoBox(student.photo, "portrait-img")}
            <div>
              <h3>${esc(student.name)}</h3>
              ${profileField("Birthday", student.birthday || student.dob)}
              ${profileField("Compound", student.compound || student.parents)}
              ${profileField("Career Ambition", student.ambition)}
              <div class="profile-field" style="color:var(--mag-navy);font-family:'Crimson Text',serif;font-style:italic;">${esc(student.quote || student.message || "")}</div>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }
  return `
    ${pageHead(page, kicker)}
    <div class="mini-profile-grid">
      ${finalEntries.map((student, index) => `
        <article class="mini-profile-card">
          <span class="card-ribbon">${String(start + index + 1).padStart(2, "0")}</span>
          ${photoBox(student.photo, "portrait-img")}
          <h3>${esc(student.name)}</h3>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStaffProfiles(page) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => s.category === "teachers").map(subToPerson);
  const staff = manual.length ? manual : approved;
  const categories = [
    ["Administrative Staff / School Leadership", /principal|head|director|admin|bursar|lead/i],
    ["Full-Time Teachers", /full|teacher|subject|class/i],
    ["Part-Time Teachers", /part/i],
    ["Non-Academic Staff", /non|driver|cleaner|security|cook/i]
  ];
  const used = new Set();
  const groups = categories.map(([label, matcher]) => {
    const people = staff.filter((person, index) => {
      if (used.has(index)) return false;
      const match = matcher.test(`${person.role || ""} ${person.status || ""} ${person.title || ""}`);
      if (match) used.add(index);
      return match;
    });
    return [label, people];
  });
  staff.forEach((person, index) => {
    if (!used.has(index)) groups[1][1].push(person);
  });
  if (!staff.length) groups[0][1] = placeholderPeople(6, "Staff");
  return `
    ${pageHead(page, "Our Educators & Administrators")}
    ${groups.filter(([, people]) => people.length).map(([label, people]) => `
      <div class="staff-section-title"><span>${esc(label)}</span></div>
      <div class="staff-grid">
        ${people.slice(0, 18).map(person => `
          <article class="staff-card">
            ${photoBox(person.photo, "portrait-img")}
            <h3>${esc(person.name)}</h3>
            <div class="staff-role">${esc(person.role || person.title || "Staff")}</div>
            ${person.qualification ? `<div class="staff-qual">${esc(person.qualification)}</div>` : ""}
          </article>
        `).join("")}
      </div>
    `).join("")}
  `;
}

function renderAcademicContents(page) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => ["academic", "creative", "motivational"].includes(s.category)).map(subToArticle);
  const items = manual.length ? manual : approved;
  const fallback = [
    { type: "Featured Content", title: getValue(page, "name", ["articleTitle"]) || "Content Title", author: "content_author", body: getValue(page, "body", ["articleBody"]) || "", photo: getImage(page, "group") },
    { type: "Poem", title: "Content Title", author: "content_author", body: "" },
    { type: "Riddle", title: "Content Title", author: "content_author", body: "" }
  ];
  const display = (items.length ? items : fallback).slice(0, 6);
  return `
    ${pageHead(page, "Learning & Reflections")}
    <div class="academic-grid">
      ${display.map((item, index) => `
        <article class="academic-panel ${index === 0 ? "featured" : ""}">
          <div>
            <span class="panel-label">${esc(item.type || "Educational Note")}</span>
            <h3>${esc(item.title || "Content Title")}</h3>
            <p style="font-size:12px;margin:0 0 10px;">By ${esc(item.author || "content_author")}<br>${esc(item.role || "")}</p>
            <div class="mag-body-text">${item.body ? esc(item.body).slice(0, 850) : `<span class="clean-placeholder">Production content can be pasted here.</span>`}</div>
          </div>
          ${index === 0 ? photoBox(item.photo, "group-img") : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function renderClassCrossSection(page) {
  const classes = (page.manualFields.itemsJson ? getManualItems(page).map(x => x.name || x.title) : [
    "Creche", "KG 1", "KG 2", "Nursery 1", "Nursery 2", "Primary 1", "Primary 2", "Primary 3"
  ]).slice(0, 8);
  return `
    ${pageHead(page, "School Community")}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;">
      ${classes.map(name => `
        <figure>
          <div style="height:128px;">${photoBox("", "group-img")}</div>
          <figcaption class="mag-badge" style="display:block;width:max-content;margin:-18px auto 16px;position:relative;">${esc(name)}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function renderInterview(page, hasMiddleImage) {
  const intro = getValue(page, "body", ["introParagraph"]) || "In this interview, the conversation reflects on leadership, learning, values, and the future of Way to Success Standard Schools.";
  const qa = getValue(page, "quote", ["qaBody"]) || "Q: What inspires you?\nA: A commitment to learning and service.\n\nQ: What message do you have for students?\nA: Keep working hard and believe in your future.";
  return `
    ${pageHead(page, "Interview")}
    <div class="eic-layout">
      <div>
        <div class="mag-body-text">${esc(intro)}</div>
      </div>
      <aside class="eic-side">
        ${photoBox(getImage(page, "portrait"), "portrait-img")}
        <h2 class="mag-name">${esc(getValue(page, "name", ["intervieweeName"]) || "Interview Person")}</h2>
        <span class="mag-badge">${esc(getValue(page, "role", ["intervieweeTitle"]) || "Interview Role")}</span>
      </aside>
    </div>
    ${hasMiddleImage ? `<div style="height:150px;margin:20px 0;">${photoBox(getImage(page, "group"), "group-img")}</div>` : ""}
    <div class="mag-body-text" style="column-count:2;column-gap:30px;">${esc(qa)}</div>
  `;
}

function renderClassMessage(page) {
  return `
    ${pageHead(page, "Class of 2025/2026")}
    <div style="height:340px;margin:10px 0 24px;">${photoBox(getImage(page, "group"), "group-img")}</div>
    <div class="mag-body-text">${esc(getValue(page, "body", ["classMessage"]) || "Paste the SS3 collective class message here.")}</div>
  `;
}

function renderPlaceholderTemplate(page) {
  return `
    ${pageHead(page, getTemplate(page.templateType)?.label || "Template")}
    <div class="placeholder-template">
      <h2>${esc(getTemplate(page.templateType)?.label || page.title)}</h2>
      <p>This approved template slot is reserved in the Builder. It uses the shared magazine shell, fixed footer, live text, and original image URL handling.</p>
      <div style="height:260px;margin-top:24px;">${photoBox(getImage(page, "group"), "group-img")}</div>
    </div>
  `;
}

function photoBox(src, mode) {
  if (!src) return `<div class="mag-placeholder">Image Placeholder</div>`;
  return `<div class="mag-photo ${mode || "portrait-img"}"><img src="${escAttr(src)}" alt="" loading="eager" decoding="async"></div>`;
}

function profileField(label, value) {
  if (!value) return "";
  return `<div class="profile-field"><b>${esc(label)}:</b><br>${esc(value)}</div>`;
}

function getImage(page, slot) {
  const selected = getSelectedSubmission(page);
  if (page.images[slot]) return page.images[slot];
  if (slot === "portrait") return firstPhoto(selected, 0);
  if (slot === "group") return firstPhoto(selected, 1) || firstPhoto(selected, 0);
  return "";
}

function getValue(page, manualKey, sourceKeys) {
  const manual = page.manualFields[manualKey];
  if (manual && String(manual).trim()) return manual;
  return fieldValue(getSelectedSubmission(page), sourceKeys);
}

function getSelectedSubmission(page) {
  if (!page?.sourceSubmissionId) return null;
  return approvedSubmissions.find(s => String(s.id) === String(page.sourceSubmissionId)) || null;
}

function fieldValue(sub, keys) {
  if (!sub || !sub.data) return "";
  for (const key of keys || []) {
    const field = sub.data[key];
    const value = typeof field === "object" && field ? field.value : field;
    if (value !== undefined && value !== null && String(value).trim()) return String(value).trim();
  }
  return "";
}

function subToPerson(sub) {
  return {
    id: sub.id,
    name: fieldValue(sub, ["name", "speakerName", "intervieweeName", "authorName"]) || "Student Name",
    role: fieldValue(sub, ["title", "speakerTitle", "intervieweeTitle", "authorRole", "subject"]),
    status: fieldValue(sub, ["status", "staffStatus"]),
    qualification: fieldValue(sub, ["qualification"]),
    birthday: fieldValue(sub, ["birthday", "dob"]),
    dob: fieldValue(sub, ["dob"]),
    parents: fieldValue(sub, ["parents"]),
    compound: fieldValue(sub, ["compound"]),
    ambition: fieldValue(sub, ["ambition", "career"]),
    quote: fieldValue(sub, ["quote"]),
    message: fieldValue(sub, ["message", "bio"]),
    bio: fieldValue(sub, ["bio"]),
    photo: firstPhoto(sub, 0)
  };
}

function subToArticle(sub) {
  return {
    id: sub.id,
    type: sub.category === "creative" ? fieldValue(sub, ["contribType"]) || "Creative Piece" : (sub.category === "motivational" ? "Learning Tip" : "Educational Note"),
    title: fieldValue(sub, ["articleTitle", "contribTitle", "title"]) || "Content Title",
    author: fieldValue(sub, ["authorName", "contribName"]),
    role: fieldValue(sub, ["authorRole", "contribRole", "subjectArea"]),
    body: fieldValue(sub, ["articleBody", "contribBody", "articleSummary"]),
    photo: firstPhoto(sub, 0)
  };
}

function firstPhoto(sub, index) {
  if (!sub) return "";
  if (index === 0 && sub.photoData) return sub.photoData;
  const photos = Array.isArray(sub.photos) ? sub.photos : [];
  const photo = photos[index] || photos[0];
  return photo?.url || photo?.data || "";
}

function getManualItems(page) {
  const raw = page.manualFields.itemsJson;
  if (!raw || !String(raw).trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function placeholderPeople(count, label) {
  return Array.from({ length: Math.max(0, count) }, (_, index) => ({
    name: `${label} ${index + 1}`,
    role: label,
    photo: "",
    ambition: "",
    quote: "",
    message: ""
  }));
}

function compatibleSubmissions(templateType) {
  const cats = COMPATIBLE_CATEGORIES[templateType];
  const list = cats ? approvedSubmissions.filter(s => cats.includes(s.category)) : approvedSubmissions;
  return list.sort((a, b) => submissionLabel(a).localeCompare(submissionLabel(b)));
}

function sourceLabel(page) {
  if (page.sourceSubmissionId) {
    const sub = approvedSubmissions.find(s => String(s.id) === String(page.sourceSubmissionId));
    return sub ? "source: " + submissionLabel(sub) : "source: linked submission";
  }
  return "source: " + page.sourceType;
}

function submissionLabel(sub) {
  const name = fieldValue(sub, ["name", "speakerName", "intervieweeName", "authorName", "contribName", "className", "businessName", "title", "articleTitle"]) || sub.id;
  return `${CATEGORY_LABELS[sub.category] || sub.category}: ${name}`;
}

function missingContent(page) {
  const misses = [];
  if (!page.title) misses.push("title");
  if (["eic-address", "brief-history", "senior-girl-speech", "academic-contents"].includes(page.templateType) && !page.manualFields.body && !page.sourceSubmissionId) misses.push("text");
  if (["eic-address", "senior-girl-speech"].includes(page.templateType) && !page.images.portrait && !getImage(page, "portrait")) misses.push("portrait");
  return misses.join(", ");
}

function autoGeneratePages(templateType) {
  const cfg = {
    "ss3-profiles": { cat: "ss3", per: 10 },
    "jss3-profiles": { cat: "jss3", per: 20 },
    "primary5-profiles": { cat: "primary5", per: 20 },
    "staff-profiles": { cat: "teachers", per: 30 }
  }[templateType];
  if (!cfg) return;
  const records = approvedSubmissions.filter(s => s.category === cfg.cat);
  if (!records.length) {
    alert("No approved records found for this template yet.");
    return;
  }
  const tpl = getTemplate(templateType);
  const count = Math.ceil(records.length / cfg.per);
  for (let i = 0; i < count; i += 1) {
    state.pages.push(normalizePage({
      id: createId(),
      templateType,
      title: count > 1 ? `${tpl.defaultTitle} ${i + 1}` : tpl.defaultTitle,
      subtitle: tpl.defaultSubtitle,
      status: "Awaiting Images",
      sourceType: "approved submission",
      manualFields: { chunkStart: String(i * cfg.per) }
    }, state.pages.length));
  }
  selectedPageId = state.pages[state.pages.length - count].id;
  persistAndRender();
}

function printMagazine(mode) {
  renumberPages();
  const pages = mode === "selected" ? [selectedPage()].filter(Boolean) : visibleExportPages();
  if (!pages.length) {
    alert("No pages available to print.");
    return;
  }
  els.printRoot.innerHTML = pages.map(page => renderPage(page)).join("");
  preloadImages(els.printRoot).then(warnings => {
    if (warnings.length) {
      console.warn("[Builder] Print image warnings", warnings);
      alert(`${warnings.length} image(s) could not be preloaded. They will print as browser fallbacks/placeholders if unavailable.`);
    }
    window.print();
  });
}

function preloadImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  const warnings = [];
  return Promise.all(images.map(img => new Promise(resolve => {
    if (img.complete && img.naturalWidth) {
      resolve();
      return;
    }
    img.onload = () => resolve();
    img.onerror = () => {
      warnings.push(img.src);
      resolve();
    };
  }))).then(() => warnings);
}

function showWarningsForRenderedImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  if (!images.length) {
    els.previewWarnings.classList.remove("visible");
    els.previewWarnings.textContent = "";
    return;
  }
  let failed = 0;
  images.forEach(img => {
    img.onerror = () => {
      failed += 1;
      els.previewWarnings.textContent = `${failed} image URL(s) failed to load. The Builder will keep placeholders for failed images.`;
      els.previewWarnings.classList.add("visible");
    };
  });
  els.previewWarnings.classList.remove("visible");
  els.previewWarnings.textContent = "";
}

function loadLocalApprovedSubmissions() {
  try {
    const list = JSON.parse(localStorage.getItem("me_subs") || "[]");
    return normalizeSubmissions(Array.isArray(list) ? list : []).filter(isApproved);
  } catch (err) {
    return [];
  }
}

async function refreshApprovedSubmissions() {
  const local = loadLocalApprovedSubmissions();
  let cloud = [];
  if (window.supabase) {
    try {
      const sb = window.supabase.createClient(SUPA_URL, SUPA_KEY);
      const { data, error } = await sb.from("submissions").select("id,category,ts,created_at,status,reviewer_note,reviewed_at,data,photo_url,photo_name,photos").in("status", ["approved", "finalized"]).order("created_at", { ascending: true }).limit(1000);
      if (error) throw error;
      cloud = normalizeSubmissions(data || []);
    } catch (err) {
      console.warn("[Builder] Cloud approved data load failed", err);
    }
  }
  const map = new Map();
  local.concat(cloud).forEach(sub => map.set(String(sub.id), sub));
  approvedSubmissions = Array.from(map.values()).filter(isApproved);
  renderAll();
}

function normalizeSubmissions(list) {
  return list.map(row => {
    const data = typeof row.data === "string" ? safeJson(row.data, {}) : (row.data || {});
    const photos = typeof row.photos === "string" ? safeJson(row.photos, []) : (Array.isArray(row.photos) ? row.photos : []);
    return {
      id: row.id,
      category: row.category,
      ts: row.ts || row.created_at || "",
      status: row.status || "pending",
      reviewerNote: row.reviewer_note || row.reviewerNote || "",
      data,
      photoData: row.photo_url || row.photoData || row.photo_data || "",
      photoName: row.photo_name || row.photoName || "",
      photos
    };
  }).filter(sub => sub.id && sub.category);
}

function isApproved(sub) {
  return sub.status === "approved" || sub.status === "finalized";
}

function safeJson(raw, fallback) {
  try { return JSON.parse(raw); } catch (err) { return fallback; }
}

function chunk(items, size) {
  const output = [];
  for (let i = 0; i < items.length; i += size) output.push(items.slice(i, i + size));
  return output;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escAttr(value) {
  return esc(value).replace(/\n/g, " ");
}
