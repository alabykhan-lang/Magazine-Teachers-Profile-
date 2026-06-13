"use strict";

const BUILDER_STATE_KEY = "magazine_builder_state_v1";
const SUPA_URL = "https://srkgolzstppnyntrkemk.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNya2dvbHpzdHBwbnludHJrZW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyMjg4MTAsImV4cCI6MjA5MjgwNDgxMH0.M1uVsgraBxXGDrLSqBgz9e3QFRmSjaZBgz7xoGlOo3c";
const STORAGE_BUCKET = "photos";

const PAGE_STATUSES = [
  "Placeholder Design",
  "Awaiting Text",
  "Awaiting Images",
  "Needs Revision",
  "Final Design",
  "Ready for PDF"
];

const TEMPLATE_GROUPS = [
  { id: "front-cover", label: "Front Cover", defaultTitle: "Maiden Magazine", defaultSubtitle: "The Making of Tomorrow: From Humble Beginnings to Limitless Horizons", unnumbered: true },
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
  { id: "class-cross-section", label: "Cross Section of Classes", defaultTitle: "Cross Section of Classes", defaultSubtitle: "Primary Classes and Secondary Stages" },
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
  motivational: "Motivational Articles",
  events: "School Life & Events",
  interviews: "Interviews",
  gallery: "Photo Gallery",
  advertisements: "Advertisements",
  editor_board: "Editor Board / Crew",
  "editorial-note": "Editorial Note",
  appreciation: "Appreciation"
};

const COMPATIBLE_CATEGORIES = {
  "front-cover": [],
  "inside-cover": [],
  contents: [],
  "editorial-board": ["editor_board"],
  "eic-address": ["editorial-note", "speeches", "editor_board"],
  "brief-history": [],
  "proprietor-speech": ["speeches"],
  "senior-boy-speech": ["speeches"],
  "senior-girl-speech": ["speeches"],
  "interview-1": ["interviews"],
  "interview-2": ["interviews"],
  "class-message": ["ss3_class_message"],
  "ss3-profiles": ["ss3"],
  "jss3-profiles": ["jss3"],
  "primary5-profiles": ["primary5"],
  "class-cross-section": [],
  "staff-profiles": ["teachers"],
  "academic-contents": ["academic", "creative", "motivational"],
  "school-life": ["events", "gallery"],
  advert: ["advertisements"],
  appreciation: ["appreciation"],
  "back-cover": []
};

const TEMPLATE_FIELDS = {
  "front-cover": {
    fields: [
      textField("schoolName", "School Name"),
      textField("theme", "Theme"),
      textField("session", "Session / Edition"),
      textField("motto", "Motto")
    ],
    images: [imageField("coverImage", "Cover Image", "contain")]
  },
  "inside-cover": {
    fields: [
      textField("schoolName", "School Name"),
      textField("location", "Location"),
      textField("estYear", "Establishment Year"),
      longField("philosophy", "Philosophy of the School"),
      longField("anthem", "School Anthem")
    ],
    images: [imageField("logo", "School Logo", "contain")]
  },
  contents: { fields: [textField("contentsQuote", "Contents Footer Quote")], images: [] },
  "editorial-board": {
    fields: [longField("itemsJson", "Manual Crew JSON")],
    images: [imageField("portrait", "Editor-in-Chief Portrait", "portrait")]
  },
  "eic-address": {
    fields: [
      textField("sectionLabel", "Section Label"),
      textField("name", "Speaker Name"),
      textField("role", "Speaker Role"),
      longField("body", "Main Address Body"),
      longField("closing", "Closing Paragraph"),
      longField("quote", "Quote Text")
    ],
    images: [imageField("portrait", "Portrait Image", "portrait")]
  },
  "brief-history": {
    fields: [
      longField("timelineItems", "Timeline Items"),
      textField("section1Title", "Section 1 Title"),
      longField("section1Body", "Section 1 Body"),
      textField("section2Title", "Section 2 Title"),
      longField("section2Body", "Section 2 Body"),
      textField("section3Title", "Section 3 Title"),
      longField("section3Body", "Section 3 Body"),
      textField("section4Title", "Section 4 Title"),
      longField("section4Body", "Section 4 Body"),
      longField("closingQuote", "Closing Quote")
    ],
    images: [
      imageField("mainImage", "Main History Photo", "contain"),
      imageField("secondary1", "Secondary History Photo 1", "contain"),
      imageField("secondary2", "Secondary History Photo 2", "contain")
    ]
  },
  "proprietor-speech": speechSchema("Proprietor Name"),
  "senior-boy-speech": speechSchema("Senior Boy Name"),
  "senior-girl-speech": speechSchema("Senior Girl Name"),
  "interview-1": {
    fields: [
      textField("name", "Interviewee Name"),
      textField("role", "Interviewee Role"),
      longField("intro", "Introduction"),
      longField("qaBody", "Q&A Transcript Body"),
      textField("caption", "Middle Image Caption"),
      longField("closing", "Closing Note")
    ],
    images: [
      imageField("portrait", "Portrait Image", "portrait"),
      imageField("group", "Middle Group Image", "contain")
    ]
  },
  "interview-2": {
    fields: [
      textField("name", "Interviewee Name"),
      textField("role", "Interviewee Role"),
      longField("intro", "Introduction"),
      longField("qaBody", "Q&A Transcript Body"),
      textField("caption", "Portrait Caption"),
      longField("closing", "Closing Note")
    ],
    images: [imageField("portrait", "Portrait Image", "portrait")]
  },
  "class-message": {
    fields: [
      longField("body", "Message Body"),
      textField("caption", "Group Photo Caption"),
      longField("closing", "Closing Statement")
    ],
    images: [imageField("group", "Group Photo", "contain")]
  },
  "ss3-profiles": profileSchema("SS3 Manual Students JSON"),
  "jss3-profiles": profileSchema("JSS3 Manual Students JSON"),
  "primary5-profiles": profileSchema("Primary 5 Manual Pupils JSON"),
  "class-cross-section": {
    fields: [
      selectField("classPage", "Class Spread Page", [["early", "Page 1 - Creche to Primary 3"], ["upper", "Page 2 - Primary 4 to SS2"]]),
      longField("itemsJson", "Manual Classes JSON")
    ],
    images: ["class1","class2","class3","class4","class5","class6","class7","class8"].map((key, i) => imageField(key, `Class Photo ${i + 1}`, "contain"))
  },
  "staff-profiles": {
    fields: [longField("itemsJson", "Manual Staff JSON")],
    images: []
  },
  "academic-contents": {
    fields: [
      textField("contentType", "Content Type"),
      textField("contentTitle", "Content Title"),
      textField("author", "Author"),
      textField("authorRole", "Author Class / Role"),
      longField("body", "Content Body"),
      textField("caption", "Image Caption"),
      longField("itemsJson", "Manual Content Blocks JSON")
    ],
    images: [imageField("contentImage", "Content Image", "contain")]
  },
  "school-life": {
    fields: [
      textField("eventTitle", "Event Title"),
      textField("eventDate", "Event Date"),
      longField("body", "Event Description"),
      longField("itemsJson", "Manual Event Photos JSON")
    ],
    images: ["event1","event2","event3","event4","event5","event6"].map((key, i) => imageField(key, `Event Image ${i + 1}`, "contain"))
  },
  advert: {
    fields: [
      selectField("placement", "Placement Type", [["full", "Full-page"], ["half", "Half-page"], ["modular", "Modular"]]),
      textField("advertiser", "Advertiser / Business Name"),
      textField("contact", "Contact Details"),
      longField("body", "Advert Text / Details")
    ],
    images: [imageField("advertImage", "Advert Image", "contain")]
  },
  appreciation: {
    fields: [longField("body", "Formal Appreciation Text"), longField("names", "Names / List")],
    images: []
  },
  "back-cover": {
    fields: [textField("schoolName", "School Name"), textField("motto", "Motto"), longField("body", "Back Cover Text")],
    images: [imageField("logo", "Logo / Brand Mark", "contain")]
  }
};

let state = loadBuilderState();
let selectedPageId = state.pages[0]?.id || null;
let approvedSubmissions = loadLocalApprovedSubmissions();
let supaClient = null;
const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheEls();
  wireEvents();
  fillTemplateSelect();
  if (!state.pages.length) seedStarterPages(false);
  renderAll();
  refreshApprovedSubmissions();
});

function textField(key, label) { return { key, label, type: "text" }; }
function longField(key, label) { return { key, label, type: "textarea" }; }
function selectField(key, label, options) { return { key, label, type: "select", options }; }
function imageField(key, label, mode) { return { key, label, mode: mode || "contain" }; }
function speechSchema(nameLabel) {
  return {
    fields: [
      textField("name", nameLabel),
      textField("role", "Role / Title"),
      longField("quote", "Quote / Highlight"),
      longField("body", "Speech Body"),
      longField("closing", "Closing Paragraph")
    ],
    images: [imageField("portrait", "Portrait Image", "portrait")]
  };
}
function profileSchema(label) {
  return {
    fields: [
      textField("chunkStart", "Record Start Index"),
      longField("itemsJson", label)
    ],
    images: []
  };
}

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
    images: normalizeImages(page.images || {}),
    notes: page.notes || "",
    createdAt: page.createdAt || new Date().toISOString(),
    updatedAt: page.updatedAt || new Date().toISOString()
  };
}
function normalizeImages(images) {
  const out = {};
  Object.entries(images || {}).forEach(([key, value]) => {
    out[key] = normalizeImageValue(value);
  });
  return out;
}
function normalizeImageValue(value) {
  if (!value) return { url: "", caption: "", source: "placeholder" };
  if (typeof value === "string") return { url: value, caption: "", source: "manual url" };
  return {
    url: value.url || "",
    caption: value.caption || "",
    source: value.source || (value.url ? "manual url" : "placeholder"),
    sourceLabel: value.sourceLabel || ""
  };
}
function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return "builder-" + Date.now() + "-" + Math.random().toString(16).slice(2);
}
function getTemplate(id) { return TEMPLATE_GROUPS.find(t => t.id === id); }
function getSchema(type) { return TEMPLATE_FIELDS[type] || { fields: [], images: [imageField("mainImage", "Main Image", "contain")] }; }

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
  ["inside-cover", "contents", "editorial-board", "eic-address", "brief-history", "senior-girl-speech", "staff-profiles", "ss3-profiles", "academic-contents"].forEach(type => {
    const tpl = getTemplate(type);
    state.pages.push(normalizePage({ id: createId(), templateType: type, title: tpl.defaultTitle, subtitle: tpl.defaultSubtitle, status: type === "contents" ? "Final Design" : "Placeholder Design" }, state.pages.length));
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
  updateSelectedLabel();
}
function renderAll() {
  renumberPages();
  renderPageList();
  renderPreview();
  renderEditor();
}
function visibleExportPages() { return orderedPages().filter(p => p.includeInExport && !p.hidden); }
function orderedPages() { return [...state.pages].sort((a, b) => (a.order || 0) - (b.order || 0)); }
function renumberPages() {
  let next = 1;
  orderedPages().forEach((page, index) => {
    page.order = index;
    const tpl = getTemplate(page.templateType);
    page.pageNumber = (!page.includeInExport || page.hidden || tpl?.unnumbered) ? "" : String(next++).padStart(2, "0");
  });
}
function updateSelectedLabel() {
  const page = selectedPage();
  const tpl = page ? getTemplate(page.templateType) : null;
  els.selectedPageLabel.textContent = page ? `${page.pageNumber ? "Page " + page.pageNumber + " / " : ""}${page.title || tpl?.label || "Untitled"}` : "No page selected";
}

function renderPageList() {
  const pages = orderedPages();
  els.collectorCount.textContent = `${pages.length} page${pages.length === 1 ? "" : "s"}`;
  els.pageList.innerHTML = pages.map((page, index) => {
    const tpl = getTemplate(page.templateType);
    const missing = missingContent(page);
    return `
      <article class="collector-row ${page.id === selectedPageId ? "active" : ""}">
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
    row.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") selectPage(row.dataset.selectPage); });
  });
  els.pageList.querySelectorAll("[data-move]").forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    const [index, delta] = btn.dataset.move.split(":").map(Number);
    movePage(index, delta);
  }));
  els.pageList.querySelectorAll("[data-toggle-include]").forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    const page = state.pages.find(p => p.id === btn.dataset.toggleInclude);
    if (!page) return;
    page.includeInExport = !page.includeInExport;
    page.updatedAt = new Date().toISOString();
    persistAndRender();
  }));
  els.pageList.querySelectorAll("[data-toggle-hidden]").forEach(btn => btn.addEventListener("click", event => {
    event.stopPropagation();
    const page = state.pages.find(p => p.id === btn.dataset.toggleHidden);
    if (!page) return;
    page.hidden = !page.hidden;
    page.updatedAt = new Date().toISOString();
    persistAndRender();
  }));
}
function selectPage(id) { selectedPageId = id; renderAll(); }
function selectedPage() { return state.pages.find(p => p.id === selectedPageId) || state.pages[0] || null; }
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
  if (id === "templateType") {
    const oldTpl = getTemplate(page.templateType);
    const newTpl = getTemplate(value);
    if (newTpl && (!page.title || page.title === oldTpl?.defaultTitle)) page.title = newTpl.defaultTitle;
    if (newTpl && (!page.subtitle || page.subtitle === oldTpl?.defaultSubtitle)) page.subtitle = newTpl.defaultSubtitle || "";
  }
  page[id] = value;
  page.updatedAt = new Date().toISOString();
  if (fullRender) persistAndRender(); else persistAndRefreshPreview();
}
function updateManualField(key, value) {
  const page = selectedPage();
  if (!page) return;
  page.manualFields[key] = value;
  page.updatedAt = new Date().toISOString();
  persistAndRefreshPreview();
}
function setImageSlot(slot, patch, fullRender = false) {
  const page = selectedPage();
  if (!page) return;
  const current = normalizeImageValue(page.images[slot]);
  page.images[slot] = { ...current, ...patch };
  page.updatedAt = new Date().toISOString();
  if (fullRender) persistAndRender(); else persistAndRefreshPreview();
}
function clearImageSlot(slot) {
  setImageSlot(slot, { url: "", caption: "", source: "placeholder", sourceLabel: "" }, true);
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
  const schema = getSchema(page.templateType);
  updateSelectedLabel();
  const compatible = compatibleSubmissions(page.templateType);
  const selectedSource = approvedSubmissions.find(s => String(s.id) === String(page.sourceSubmissionId));
  els.editorPanel.innerHTML = `
    <section class="editor-section">
      <h3>Page Setup</h3>
      <div class="editor-field"><label>Template</label><select data-editor-field="templateType">${TEMPLATE_GROUPS.map(t => `<option value="${esc(t.id)}" ${page.templateType === t.id ? "selected" : ""}>${esc(t.label)}</option>`).join("")}</select></div>
      <div class="editor-row">
        <label class="toggle-line"><input type="checkbox" data-editor-bool="includeInExport" ${page.includeInExport ? "checked" : ""}> Include in export</label>
        <label class="toggle-line"><input type="checkbox" data-editor-bool="hidden" ${page.hidden ? "checked" : ""}> Hide page</label>
      </div>
      <div class="editor-field"><label>Status</label><select data-editor-field="status">${PAGE_STATUSES.map(status => `<option ${status === page.status ? "selected" : ""}>${esc(status)}</option>`).join("")}</select></div>
      <div class="editor-field"><label>Page Title</label><input data-editor-field="title" value="${escAttr(page.title)}"></div>
      <div class="editor-field"><label>Subtitle</label><input data-editor-field="subtitle" value="${escAttr(page.subtitle)}"></div>
      <div class="editor-field"><label>Notes</label><textarea data-editor-field="notes">${esc(page.notes)}</textarea></div>
    </section>
    <section class="editor-section">
      <h3>Approved Source</h3>
      <div class="editor-field"><label>Source Type</label><select data-editor-field="sourceType">${["manual", "approved submission", "mixed"].map(type => `<option value="${type}" ${page.sourceType === type ? "selected" : ""}>${type}</option>`).join("")}</select></div>
      <div class="editor-field"><label>Approved Submission Source</label><select data-editor-field="sourceSubmissionId"><option value="">No linked source</option>${compatible.map(s => `<option value="${esc(s.id)}" ${String(page.sourceSubmissionId) === String(s.id) ? "selected" : ""}>${esc(submissionLabel(s))}</option>`).join("")}</select></div>
      <div class="editor-note">Render priority: manual Builder fields, then correctly linked approved submission data, then clean placeholders. Original submissions are never overwritten.${selectedSource ? `<br>Linked source: ${esc(submissionLabel(selectedSource))}` : ""}</div>
      ${dynamicPageButton(page)}
    </section>
    <section class="editor-section">
      <h3>Template Production Fields</h3>
      ${renderTemplateFieldInputs(page, schema.fields)}
    </section>
    <section class="editor-section">
      <h3>Materials / Page Assets</h3>
      ${renderAssetRows(page, schema.images)}
    </section>
  `;
  bindEditorEvents(page);
}

function renderTemplateFieldInputs(page, fields) {
  if (!fields.length) return `<div class="editor-note">This template is generated from the Builder page list.</div>`;
  return fields.map(field => {
    const value = page.manualFields[field.key] || "";
    if (field.type === "textarea") return `<div class="editor-field"><label>${esc(field.label)}</label><textarea class="tall" data-manual-field="${esc(field.key)}">${esc(value)}</textarea></div>`;
    if (field.type === "select") return `<div class="editor-field"><label>${esc(field.label)}</label><select data-manual-field="${esc(field.key)}">${field.options.map(([val, label]) => `<option value="${esc(val)}" ${value === val ? "selected" : ""}>${esc(label)}</option>`).join("")}</select></div>`;
    return `<div class="editor-field"><label>${esc(field.label)}</label><input data-manual-field="${esc(field.key)}" value="${escAttr(value)}"></div>`;
  }).join("");
}

function renderAssetRows(page, images) {
  if (!images.length) return `<div class="editor-note">This template does not need a direct image asset. It can still use approved submission photos where relevant.</div>`;
  const approvedImages = approvedImageOptions();
  return images.map(img => {
    const current = imageObj(page, img.key);
    const url = current.url || "";
    return `
      <div class="asset-row" data-asset-row="${esc(img.key)}">
        <label>${esc(img.label)}</label>
        <div class="asset-preview">${url ? `<img src="${escAttr(url)}" alt="">` : "Image Placeholder"}</div>
        <div class="asset-source">Source: ${esc(current.source || "placeholder")}${current.sourceLabel ? " - " + esc(current.sourceLabel) : ""}</div>
        <input data-image-url="${esc(img.key)}" value="${escAttr(url)}" placeholder="Paste original image URL">
        <input data-image-caption="${esc(img.key)}" value="${escAttr(current.caption || "")}" placeholder="Optional caption" style="margin-top:7px;">
        <select data-image-select="${esc(img.key)}" style="margin-top:7px;">
          <option value="">Select existing approved image...</option>
          ${approvedImages.map(opt => `<option value="${escAttr(opt.url)}">${esc(opt.label)}</option>`).join("")}
        </select>
        <div class="asset-actions">
          <input type="file" accept="image/*" data-image-upload="${esc(img.key)}" style="display:none;">
          <button type="button" data-image-upload-btn="${esc(img.key)}">Upload Image</button>
          <button type="button" data-image-remove="${esc(img.key)}" class="danger-btn">Remove</button>
        </div>
      </div>
    `;
  }).join("");
}

function bindEditorEvents(page) {
  els.editorPanel.querySelectorAll("[data-editor-field]").forEach(input => {
    const field = input.dataset.editorField;
    if (input.tagName === "SELECT") input.addEventListener("change", () => updatePageField(field, input.value, true));
    else {
      input.addEventListener("input", () => updatePageField(field, input.value, false));
      input.addEventListener("change", () => updatePageField(field, input.value, true));
    }
  });
  els.editorPanel.querySelectorAll("[data-editor-bool]").forEach(input => input.addEventListener("change", () => updatePageField(input.dataset.editorBool, input.checked)));
  els.editorPanel.querySelectorAll("[data-manual-field]").forEach(input => input.addEventListener("input", () => updateManualField(input.dataset.manualField, input.value)));
  els.editorPanel.querySelectorAll("[data-image-url]").forEach(input => input.addEventListener("change", () => setImageSlot(input.dataset.imageUrl, { url: input.value.trim(), source: input.value.trim() ? "pasted URL" : "placeholder" }, true)));
  els.editorPanel.querySelectorAll("[data-image-caption]").forEach(input => input.addEventListener("input", () => setImageSlot(input.dataset.imageCaption, { caption: input.value }, false)));
  els.editorPanel.querySelectorAll("[data-image-select]").forEach(select => select.addEventListener("change", () => {
    if (!select.value) return;
    const label = select.options[select.selectedIndex]?.textContent || "approved image";
    setImageSlot(select.dataset.imageSelect, { url: select.value, source: "approved submission", sourceLabel: label }, true);
  }));
  els.editorPanel.querySelectorAll("[data-image-upload-btn]").forEach(btn => btn.addEventListener("click", () => {
    const input = els.editorPanel.querySelector(`[data-image-upload="${cssEscape(btn.dataset.imageUploadBtn)}"]`);
    if (input) input.click();
  }));
  els.editorPanel.querySelectorAll("[data-image-upload]").forEach(input => input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (file) uploadBuilderImage(input.dataset.imageUpload, file);
  }));
  els.editorPanel.querySelectorAll("[data-image-remove]").forEach(btn => btn.addEventListener("click", () => clearImageSlot(btn.dataset.imageRemove)));
  const autoBtn = els.editorPanel.querySelector("[data-auto-pages]");
  if (autoBtn) autoBtn.addEventListener("click", () => autoGeneratePages(page.templateType));
}

function dynamicPageButton(page) {
  if (!["ss3-profiles", "jss3-profiles", "primary5-profiles", "staff-profiles"].includes(page.templateType)) return "";
  return `<button type="button" class="primary-btn" data-auto-pages="${esc(page.templateType)}">Auto-fill pages from approved records</button><div class="editor-note">Creates Builder pages only. Submitted records are not changed.</div>`;
}

async function uploadBuilderImage(slot, file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Please choose an image file.");
    return;
  }
  const page = selectedPage();
  if (!page) return;
  try {
    const sb = getSupa();
    if (!sb) throw new Error("Supabase client is unavailable");
    const ext = imageExt(file);
    const day = new Date().toISOString().slice(0, 10);
    const safePage = page.id.replace(/[^a-z0-9_-]/gi, "_");
    const safeSlot = slot.replace(/[^a-z0-9_-]/gi, "_");
    const path = `builder/${day}/${safePage}-${safeSlot}-${Date.now()}.${ext}`;
    const { error } = await sb.storage.from(STORAGE_BUCKET).upload(path, file, {
      cacheControl: "31536000",
      contentType: file.type || `image/${ext}`,
      upsert: false
    });
    if (error) throw error;
    const { data } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(path);
    if (!data?.publicUrl) throw new Error("Upload completed without a public URL");
    setImageSlot(slot, { url: data.publicUrl, source: "manual upload", sourceLabel: file.name }, true);
  } catch (err) {
    console.warn("[Builder] Storage upload failed, using local preview only", err);
    const localUrl = URL.createObjectURL(file);
    setImageSlot(slot, { url: localUrl, source: "local-only preview", sourceLabel: "Upload failed; paste/upload final Storage URL later" }, true);
    alert("Cloud upload failed, so this image is shown as a local-only preview. It may not persist after refresh. Paste a final image URL or retry upload before final export.");
  }
}
function getSupa() {
  if (supaClient) return supaClient;
  if (!window.supabase) return null;
  supaClient = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  return supaClient;
}
function imageExt(file) {
  const fromName = (file.name || "").split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "webp"].includes(fromName)) return fromName === "jpeg" ? "jpg" : fromName;
  const fromType = (file.type || "").split("/").pop().toLowerCase();
  return fromType === "jpeg" ? "jpg" : (["jpg", "png", "webp"].includes(fromType) ? fromType : "jpg");
}

function renderPreview() {
  const page = selectedPage();
  if (!page) {
    els.previewCanvas.innerHTML = document.getElementById("emptyPageTemplate").innerHTML;
    showPreviewWarning("");
    return;
  }
  els.previewCanvas.innerHTML = renderPage(page);
  inspectRenderedPages(els.previewCanvas);
}
function renderPage(page) {
  const tpl = getTemplate(page.templateType);
  return `
    <section class="mag-page ${tpl?.unnumbered ? "unnumbered" : ""}" data-template="${esc(page.templateType)}">
      <span class="mag-curve-top"></span>
      <span class="mag-curve-bottom"></span>
      <span class="mag-watermark"></span>
      <span class="mag-overflow-flag">Content overflow - split or shorten</span>
      <div class="mag-page-body">${renderTemplateBody(page)}</div>
      <footer class="mag-page-footer">
        <span>Way To Success Standard Schools, Ejigbo</span>
        <span class="mag-page-no">${esc(page.pageNumber || "")}</span>
      </footer>
    </section>
  `;
}
function renderTemplateBody(page) {
  switch (page.templateType) {
    case "front-cover": return renderFrontCover(page);
    case "inside-cover": return renderInsideCover(page);
    case "contents": return renderContents(page);
    case "editorial-board": return renderEditorialBoard(page);
    case "eic-address": return renderEicAddress(page);
    case "brief-history": return renderBriefHistory(page);
    case "proprietor-speech": return renderSpeech(page, "Proprietor");
    case "senior-boy-speech": return renderSpeech(page, "Senior Boy");
    case "senior-girl-speech": return renderSpeech(page, "Senior Girl");
    case "interview-1": return renderInterview(page, true);
    case "interview-2": return renderInterview(page, false);
    case "class-message": return renderClassMessage(page);
    case "ss3-profiles": return renderStudentProfiles(page, "ss3", 10, true);
    case "jss3-profiles": return renderStudentProfiles(page, "jss3", 20, false);
    case "primary5-profiles": return renderStudentProfiles(page, "primary5", 20, false);
    case "class-cross-section": return renderClassCrossSection(page);
    case "staff-profiles": return renderStaffProfiles(page);
    case "academic-contents": return renderAcademicContents(page);
    case "school-life": return renderSchoolLife(page);
    case "advert": return renderAdvert(page);
    case "appreciation": return renderAppreciation(page);
    case "back-cover": return renderBackCover(page);
    default: return renderPlaceholderTemplate(page);
  }
}
function pageHead(page, kicker = "") {
  return `${kicker ? `<div class="mag-kicker">${esc(kicker)}</div>` : ""}<h1 class="mag-title">${esc(page.title)}</h1>${page.subtitle ? `<div class="mag-subtitle">${esc(page.subtitle)}</div>` : ""}<div class="mag-rule"></div>`;
}

function renderFrontCover(page) {
  const cover = imageUrl(page, "coverImage");
  return `
    <div style="height:100%;display:grid;place-items:center;text-align:center;padding:40px 0;">
      <div>
        <div class="identity-logo">${cover ? `<div class="mag-photo contain-img"><img src="${escAttr(cover)}" alt=""></div>` : esc(mf(page, "schoolName", [], "W"))}</div>
        <h1 class="mag-title">${esc(page.title || "Maiden Magazine")}</h1>
        <div class="mag-subtitle">${esc(mf(page, "theme", [], page.subtitle || "The Making of Tomorrow"))}</div>
        <div class="mag-rule"></div>
        <div class="mag-kicker">${esc(mf(page, "schoolName", [], "Way To Success Standard Schools"))}</div>
        <div style="margin-top:16px;color:var(--mag-navy);font-weight:900;">${esc(mf(page, "session", [], "2025/2026"))}</div>
      </div>
    </div>
  `;
}
function renderInsideCover(page) {
  const logo = imageUrl(page, "logo");
  const school = mf(page, "schoolName", [], "Way To Success Standard Schools");
  const location = mf(page, "location", [], "Ifedapo Community, Ejigbo");
  const est = mf(page, "estYear", [], "2017");
  const philosophy = mf(page, "philosophy", ["body", "philosophy"], "At Way to Success Standard Schools, we believe education is a transformative force that nurtures lifelong learners, critical thinkers, and responsible citizens. We are committed to providing a holistic learning environment where students develop intellectual curiosity, moral integrity, and social responsibility.");
  const anthem = mf(page, "anthem", ["anthem"], "Way to Success,\nNigeria's most vibrant school.\nWe are pious, prayerful, progressive,\nAttaining in all endeavours.\nForward ever, backward never.");
  return `
    <div class="identity-logo">${logo ? `<div class="mag-photo contain-img"><img src="${escAttr(logo)}" alt=""></div>` : "W"}</div>
    <h1 class="mag-title">${esc(school)}</h1>
    <div class="mag-subtitle">${esc(location)}</div>
    <div class="mag-kicker">Est. ${esc(est)}</div>
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
  const items = visibleExportPages().filter(p => !["front-cover", "inside-cover", "contents", "back-cover"].includes(p.templateType)).map(p => ({ title: p.title || getTemplate(p.templateType)?.label || "Untitled", page: p.pageNumber || "00", type: getTemplate(p.templateType)?.label || p.templateType }));
  const groups = chunk(items, Math.ceil(Math.max(items.length, 1) / 6) || 1).slice(0, 6);
  while (groups.length < 6) groups.push([]);
  return `
    <div class="mag-kicker">Contents</div>
    <h1 class="mag-title">${esc(page.title || "Contents")}</h1>
    <div class="mag-rule"></div>
    <div class="mag-subtitle">${esc(page.subtitle || "The Making of Tomorrow: From Humble Beginnings to Limitless Horizons")}</div>
    <div class="contents-grid">
      ${groups.map((group, index) => `<section class="contents-section"><div class="contents-index">${String(index + 1).padStart(2, "0")}</div><div><h3>${esc(group[0]?.type || "Section Title")}</h3>${(group.length ? group : [{ title: "Item title", page: "00" }]).slice(0, 4).map(item => `<div class="contents-line"><span>${esc(item.title)}</span><i></i><b>p. ${esc(item.page)}</b></div>`).join("")}</div></section>`).join("")}
    </div>
    <div class="identity-panel" style="width:58%;text-align:center;margin-top:30px;padding:16px;"><div class="mag-body-text">${esc(mf(page, "contentsQuote", [], "Every page tells our story.\nEvery chapter builds our legacy."))}</div></div>
  `;
}
function renderEditorialBoard(page) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => s.category === "editor_board").map(subToPerson);
  const all = manual.length ? manual : approved;
  const editor = all.find(p => /editor[- ]?in[- ]?chief|editorial chairman/i.test(`${p.role || ""} ${p.title || ""}`));
  const members = all.filter(p => p !== editor).slice(0, 6);
  return `
    ${pageHead(page, "Magazine Crew & Production Team")}
    ${editor ? `<div class="board-feature"><div>${photoBox(editor.photo || imageUrl(page, "portrait"), "portrait-img")}</div><div class="board-info"><div class="mag-kicker">Editor-in-Chief</div><h2 class="mag-name">${esc(editor.name)}</h2><span class="mag-badge">${esc(editor.role || "Editorial Chairman")}</span><div class="mag-rule"></div><div class="mag-body-text">${esc(editor.bio || editor.message || "")}</div></div></div>` : `<div class="editor-note" style="width:72%;margin:0 auto 24px;">Editor-in-Chief hero slot is waiting for a crew member marked Editor-in-Chief or Editorial Chairman.</div>`}
    <div class="crew-grid">${(members.length ? members : placeholderPeople(6, "Crew Member")).map(member => `<article class="crew-card">${photoBox(member.photo, "portrait-img")}<h3>${esc(member.name)}</h3><span class="mag-badge">${esc(member.role || "Crew Member")}</span></article>`).join("")}</div>
  `;
}
function renderEicAddress(page) {
  const sub = sourceFor(page, "eic-address");
  const body = mf(page, "body", ["body", "speechBody", "message", "bio"], "");
  const closing = mf(page, "closing", [], "");
  return `
    <div class="mag-kicker">${esc(mf(page, "sectionLabel", [], page.subtitle || "Editorial Chairman's Address"))}</div>
    <h1 class="mag-title small">${esc(page.title)}</h1>
    <div class="mag-rule"></div>
    <div class="eic-layout">
      <div><div class="mag-body-text">${body ? esc(body + (closing ? "\n\n" + closing : "")) : placeholder("Paste the Editor-in-Chief address here or link the correct approved submission.")}</div></div>
      <aside class="eic-side">${photoBox(imageUrl(page, "portrait") || firstPhoto(sub, 0), "portrait-img")}<h2 class="mag-name">${esc(mf(page, "name", ["speakerName", "name", "authorName"], "Editor-in-Chief Name"))}</h2><span class="mag-badge">${esc(mf(page, "role", ["speakerTitle", "title", "authorRole"], "Editorial Chairman"))}</span><div class="quote-box eic-quote">${esc(mf(page, "quote", ["quote", "pullQuote"], "A school is not built by buildings alone, but by the vision, values and people who believe in its purpose."))}</div></aside>
    </div>
  `;
}
function renderBriefHistory(page) {
  const section1 = mf(page, "section1Body", ["body", "history", "articleBody"], "Way to Success Standard Schools began with a simple yet profound vision - to create a learning environment where children are equipped with knowledge, character, and the confidence to excel in life.");
  const section2 = mf(page, "section2Body", [], "The school was established in 2017 in Ifedapo Community, Ejigbo, with dedicated teachers and a commitment to excellence.");
  const section3 = mf(page, "section3Body", [], "From these humble beginnings, the school has grown steadily, expanding its facilities, embracing innovation, and upholding strong values.");
  const section4 = mf(page, "section4Body", [], "Today, Way to Success Standard Schools stands as a beacon of hope and quality education in our community.");
  return `
    ${pageHead(page, "School Community")}
    <div class="history-layout"><div class="history-path">${timelineDots(5)}</div><div>
      <div class="mag-body-text"><b>${esc(mf(page, "section1Title", [], ""))}</b>${esc(section1)}</div>
      <div class="history-photo">${photoBox(imageUrl(page, "mainImage") || getImage(page, "mainImage"), "group-img")}</div>
      <div class="caption">${esc(imageCaption(page, "mainImage") || "History image caption")}</div>
      <div class="history-two"><div>${photoBox(imageUrl(page, "secondary1"), "group-img")}</div><div>${photoBox(imageUrl(page, "secondary2"), "group-img")}</div></div>
      <div class="mag-body-text">${esc(section2 + "\n\n" + section3 + "\n\n" + section4)}</div>
      <div class="quote-box" style="margin-top:14px;">${esc(mf(page, "closingQuote", [], "The future is ours to shape."))}</div>
    </div></div>
  `;
}
function renderSpeech(page, requiredType) {
  const sub = speechSource(page, requiredType);
  const body = page.manualFields.body || fieldValue(sub, ["speechBody"]);
  const closing = page.manualFields.closing || "";
  const portrait = imageUrl(page, "portrait") || firstPhoto(sub, 0);
  const isGirl = requiredType === "Senior Girl";
  const isBoy = requiredType === "Senior Boy";
  const layoutClass = isBoy ? "speech-layout right-photo" : "speech-layout";
  const textBlock = `<div><div class="speech-lead">${esc(mf(page, "quote", ["speechTitle"], "Great schools are not measured only by their buildings, but by the dreams they inspire and the leaders they raise."))}</div><div class="mag-body-text">${body ? esc(body + (closing ? "\n\n" + closing : "")) : placeholder(`Paste the ${requiredType} speech here or link the exact approved submission. No other speech type is used as fallback.`)}</div></div>`;
  const personBlock = `<aside class="eic-side">${photoBox(portrait, "portrait-img")}<h2 class="mag-name">${esc(mf(page, "name", ["speakerName"], `${requiredType} Name`))}</h2><span class="mag-badge">${esc(mf(page, "role", ["speakerTitle"], `${requiredType} Title`))}</span></aside>`;
  return `
    ${pageHead(page, requiredType === "Proprietor" ? "Speech" : "Student Speech")}
    <div class="${layoutClass}">${isBoy ? textBlock + personBlock : personBlock + textBlock}</div>
    ${isGirl ? `<div class="quote-box" style="margin-top:22px;">${esc(mf(page, "quote", ["speechTitle"], "Let us continue to support one another, celebrate our differences, and rise together."))}</div><div class="speech-bottom"><p>To our teachers, thank you for nurturing us with wisdom and kindness.</p><p>To our parents, thank you for being our strongest support system.</p><p>We are proud of how far we have come, and excited about where we are going.</p></div>` : ""}
  `;
}
function renderInterview(page, hasMiddleImage) {
  const sub = sourceFor(page, page.templateType);
  const intro = mf(page, "intro", ["introParagraph"], "In this interview, the conversation reflects on leadership, learning, values, and the future of Way to Success Standard Schools.");
  const qa = mf(page, "qaBody", ["qaBody"], "Q: What inspires you?\nA: A commitment to learning and service.\n\nQ: What message do you have for students?\nA: Keep working hard and believe in your future.");
  return `
    ${pageHead(page, "Interview")}
    <div class="interview-head"><div class="mag-body-text">${esc(intro)}</div><aside class="eic-side">${photoBox(imageUrl(page, "portrait") || firstPhoto(sub, 0), "portrait-img")}<h2 class="mag-name">${esc(mf(page, "name", ["intervieweeName"], "Interview Person"))}</h2><span class="mag-badge">${esc(mf(page, "role", ["intervieweeTitle"], "Interview Role"))}</span><div class="caption">${esc(imageCaption(page, "portrait") || mf(page, "caption", ["profileImageCaption"], ""))}</div></aside></div>
    ${hasMiddleImage ? `<div style="height:142px;margin:16px 0 14px;">${photoBox(imageUrl(page, "group") || firstPhoto(sub, 1), "group-img")}</div><div class="caption">${esc(imageCaption(page, "group") || mf(page, "caption", ["middleImageCaption"], ""))}</div>` : ""}
    <div class="qa-flow">${esc(qa)}</div>
  `;
}
function renderClassMessage(page) {
  const sub = sourceFor(page, "class-message");
  return `${pageHead(page, "Class of 2025/2026")}<div style="height:330px;margin:6px 0 20px;">${photoBox(imageUrl(page, "group") || firstPhoto(sub, 0), "group-img")}</div><div class="caption">${esc(mf(page, "caption", ["photoCaption"], ""))}</div><div class="mag-body-text">${esc(mf(page, "body", ["classMessage"], "Paste the SS3 collective class message here."))}</div><div class="quote-box" style="margin-top:18px;">${esc(mf(page, "closing", [], "Forward ever, backward never."))}</div>`;
}
function renderStudentProfiles(page, category, perPage, detailed) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => s.category === category).map(subToPerson);
  const source = manual.length ? manual : approved;
  const start = Number(page.manualFields.chunkStart || 0);
  const entries = source.slice(start, start + perPage);
  const finalEntries = entries.concat(placeholderPeople(perPage - entries.length, category === "primary5" ? "Pupil" : "Student"));
  const gridClass = detailed ? "profile-grid ss3" : "mini-profile-grid";
  return `${pageHead(page, "Class of 2025/2026")}<div class="${gridClass}">${finalEntries.map((student, index) => detailed ? renderSs3Card(student, start + index) : renderMiniProfile(student, start + index, category === "primary5")).join("")}</div>`;
}
function renderSs3Card(student, index) {
  return `<article class="ss3-card"><span class="card-ribbon">${String(index + 1).padStart(2, "0")}</span>${photoBox(student.photo, "portrait-img")}<div><h3>${esc(student.name)}</h3>${profileField("Birthday", student.birthday || student.dob)}${profileField("Compound", student.compound || student.parents)}${profileField("Career Ambition", student.ambition)}<div class="profile-field" style="color:var(--mag-navy);font-family:'Crimson Text',serif;font-style:italic;">${esc(student.quote || student.message || "")}</div></div></article>`;
}
function renderMiniProfile(student, index, primary) {
  return `<article class="mini-profile-card ${primary ? "primary-card" : ""}"><span class="card-ribbon">${String(index + 1).padStart(2, "0")}</span>${photoBox(student.photo, "portrait-img")}<h3>${esc(student.name)}</h3></article>`;
}
function renderClassCrossSection(page) {
  const spread = page.manualFields.classPage || "early";
  const defaults = spread === "upper" ? ["Primary 4", "Primary 5", "JSS 1", "JSS 2", "JSS 3", "SS1", "SS2"] : ["Creche", "KG 1", "KG 2", "Nursery 1", "Nursery 2", "Primary 1", "Primary 2", "Primary 3"];
  const manual = getManualItems(page);
  const classes = manual.length ? manual : defaults.map((name, i) => ({ name, imageKey: `class${i + 1}`, caption: "" }));
  return `${pageHead(page, "School Community")}<div class="class-grid">${classes.slice(0, 8).map((item, i) => `<figure class="class-card"><div class="class-photo">${photoBox(item.photo || imageUrl(page, item.imageKey || `class${i + 1}`), "group-img")}</div><figcaption class="mag-badge">${esc(item.name || item.title || defaults[i] || "Class")}</figcaption>${item.caption ? `<div class="caption">${esc(item.caption)}</div>` : ""}</figure>`).join("")}</div>`;
}
function renderStaffProfiles(page) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => s.category === "teachers").map(subToPerson);
  const staff = manual.length ? manual : approved;
  const buckets = [
    ["Administrative Staff / School Leadership", /principal|head|director|admin|bursar|lead/i],
    ["Full-Time Teachers", /full|teacher|subject|class/i],
    ["Part-Time Teachers", /part/i],
    ["Non-Academic Staff", /non|driver|cleaner|security|cook/i]
  ];
  const used = new Set();
  const groups = buckets.map(([label, matcher]) => [label, staff.filter((person, index) => {
    if (used.has(index)) return false;
    const match = matcher.test(`${person.category || ""} ${person.role || ""} ${person.status || ""} ${person.title || ""}`);
    if (match) used.add(index);
    return match;
  })]);
  staff.forEach((person, index) => { if (!used.has(index)) groups[1][1].push(person); });
  if (!staff.length) groups[0][1] = placeholderPeople(6, "Staff");
  return `${pageHead(page, "Our Educators & Administrators")}${groups.filter(([, people]) => people.length).map(([label, people]) => `<div class="staff-section-title"><span>${esc(label)}</span></div><div class="staff-grid">${people.slice(0, 18).map(renderStaffCard).join("")}</div>`).join("")}`;
}
function renderStaffCard(person) {
  return `<article class="staff-card">${photoBox(person.photo, "portrait-img")}<h3>${esc(person.name)}</h3><div class="staff-role">${esc(person.role || person.title || "Staff")}</div>${person.qualification ? `<div class="staff-qual">${esc(person.qualification)}</div>` : ""}</article>`;
}
function renderAcademicContents(page) {
  const manual = getManualItems(page);
  const approved = approvedSubmissions.filter(s => ["academic", "creative", "motivational"].includes(s.category)).map(subToArticle);
  const single = {
    type: mf(page, "contentType", [], "Featured Content"),
    title: mf(page, "contentTitle", ["articleTitle", "contribTitle"], "Content Title"),
    author: mf(page, "author", ["authorName", "contribName"], "content_author"),
    role: mf(page, "authorRole", ["authorRole", "contribRole", "subjectArea"], ""),
    body: mf(page, "body", ["articleBody", "contribBody"], ""),
    photo: imageUrl(page, "contentImage"),
    caption: mf(page, "caption", [], "")
  };
  const items = manual.length ? manual : (approved.length ? approved : [single, { type: "Poem", title: "Content Title", author: "content_author", body: "" }, { type: "Riddle", title: "Content Title", author: "content_author", body: "" }]);
  return `${pageHead(page, "Learning & Reflections")}<div class="academic-grid">${items.slice(0, 6).map((item, i) => `<article class="academic-panel ${i === 0 ? "featured" : ""}"><div><span class="panel-label">${esc(item.type || "Educational Note")}</span><h3>${esc(item.title || "Content Title")}</h3><p style="font-size:12px;margin:0 0 10px;">By ${esc(item.author || "content_author")}<br>${esc(item.role || "")}</p><div class="mag-body-text">${item.body ? esc(String(item.body)).slice(0, 950) : placeholder("Production content can be pasted here.")}</div></div>${i === 0 ? photoBox(item.photo || imageUrl(page, "contentImage"), "group-img") : ""}</article>`).join("")}</div>`;
}
function renderSchoolLife(page) {
  const manual = getManualItems(page);
  const items = manual.length ? manual : [1,2,3,4,5,6].map(i => ({ title: mf(page, "eventTitle", [], "School Life"), photo: imageUrl(page, `event${i}`), caption: i === 1 ? mf(page, "body", [], "") : "" }));
  return `${pageHead(page, "School Life")}<div class="gallery-grid">${items.slice(0, 6).map(item => `<div class="gallery-item">${photoBox(item.photo, "group-img")}${(item.caption || item.title) ? `<div class="gallery-caption">${esc(item.caption || item.title)}</div>` : ""}</div>`).join("")}</div>`;
}
function renderAdvert(page) {
  const placement = page.manualFields.placement || "full";
  return `${pageHead(page, "Advertisement")}<div class="advert-layout ${esc(placement)}"><div class="advert-art">${photoBox(imageUrl(page, "advertImage"), "contain-img")}</div><div><h2 class="mag-name">${esc(mf(page, "advertiser", ["businessName"], "Advertiser / Business Name"))}</h2><div class="mag-body-text">${esc(mf(page, "body", ["advertCaption"], "Advert details, message, products, services, and contact information can be placed here."))}</div><div class="quote-box" style="margin-top:18px;">${esc(mf(page, "contact", ["contactInfo"], "Contact details"))}</div></div></div>`;
}
function renderAppreciation(page) {
  return `${pageHead(page, "Acknowledgement")}<div class="identity-panel" style="margin-top:42px;"><div class="mag-body-text">${esc(mf(page, "body", ["body"], "Write the formal appreciation and acknowledgement text here."))}</div>${page.manualFields.names ? `<div class="quote-box" style="margin-top:20px;">${esc(page.manualFields.names)}</div>` : ""}</div>`;
}
function renderBackCover(page) {
  const logo = imageUrl(page, "logo");
  return `<div style="height:100%;display:grid;place-items:center;text-align:center;padding:60px;"><div>${logo ? `<div style="width:160px;height:160px;margin:0 auto 24px;">${photoBox(logo, "contain-img")}</div>` : `<div class="identity-logo">W</div>`}<h1 class="mag-title small">${esc(mf(page, "schoolName", [], page.title || "Way To Success Standard Schools"))}</h1><div class="mag-rule"></div><div class="mag-subtitle">${esc(mf(page, "motto", [], page.subtitle || "God - Knowledge - Leadership"))}</div><div class="mag-body-text">${esc(mf(page, "body", [], "Ifedapo Community, Ejigbo"))}</div></div></div>`;
}
function renderPlaceholderTemplate(page) {
  return `${pageHead(page, getTemplate(page.templateType)?.label || "Template")}<div class="placeholder-template"><h2>${esc(getTemplate(page.templateType)?.label || page.title)}</h2><p>This reserved template uses the shared page shell, fixed footer, live text, and original image URL handling.</p><div style="height:260px;margin-top:24px;">${photoBox(imageUrl(page, "mainImage"), "group-img")}</div></div>`;
}

function photoBox(src, mode) {
  if (!src) return `<div class="mag-placeholder">Image Placeholder</div>`;
  return `<div class="mag-photo ${mode || "portrait-img"}"><img src="${escAttr(src)}" alt="" loading="eager" decoding="async"></div>`;
}
function placeholder(text) { return `<span class="clean-placeholder">${esc(text)}</span>`; }
function timelineDots(count) { return Array.from({ length: count }, () => "<i></i>").join(""); }
function profileField(label, value) { return value ? `<div class="profile-field"><b>${esc(label)}:</b><br>${esc(value)}</div>` : ""; }
function imageObj(page, slot) { return normalizeImageValue(page.images?.[slot]); }
function imageUrl(page, slot) { return imageObj(page, slot).url || ""; }
function imageCaption(page, slot) { return imageObj(page, slot).caption || ""; }
function getImage(page, slot) {
  const selected = sourceFor(page, page.templateType);
  if (imageUrl(page, slot)) return imageUrl(page, slot);
  if (slot === "portrait") return firstPhoto(selected, 0);
  return firstPhoto(selected, 1) || firstPhoto(selected, 0);
}
function mf(page, manualKey, sourceKeys, fallback = "") {
  const manual = page.manualFields?.[manualKey];
  if (manual !== undefined && manual !== null && String(manual).trim()) return String(manual).trim();
  const value = fieldValue(sourceFor(page, page.templateType), sourceKeys || []);
  return value || fallback;
}
function sourceFor(page, templateType) {
  const sub = getSelectedSubmission(page);
  if (!sub) return null;
  const cats = COMPATIBLE_CATEGORIES[templateType];
  if (cats && !cats.includes(sub.category)) return null;
  if (["proprietor-speech", "senior-boy-speech", "senior-girl-speech"].includes(templateType)) return speechSource(page, speechLabelForTemplate(templateType));
  if (templateType === "eic-address" && sub.category === "speeches" && !/editor|chairman/i.test(fieldValue(sub, ["speechType", "speakerTitle", "title"]))) return null;
  return sub;
}
function speechLabelForTemplate(templateType) {
  if (templateType === "proprietor-speech") return "Proprietor";
  if (templateType === "senior-boy-speech") return "Senior Boy";
  if (templateType === "senior-girl-speech") return "Senior Girl";
  return "";
}
function speechSource(page, requiredType) {
  const sub = getSelectedSubmission(page);
  if (!sub || sub.category !== "speeches") return null;
  const type = fieldValue(sub, ["speechType", "speakerTitle", "title"]).toLowerCase();
  return type.includes(requiredType.toLowerCase()) ? sub : null;
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
    category: fieldValue(sub, ["staffCategory", "category"]),
    qualification: fieldValue(sub, ["qualification"]),
    birthday: fieldValue(sub, ["birthday", "dob"]),
    dob: fieldValue(sub, ["dob"]),
    parents: fieldValue(sub, ["parents"]),
    compound: fieldValue(sub, ["compound"]),
    ambition: fieldValue(sub, ["ambition", "career", "favSubject"]),
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
  const raw = page.manualFields?.itemsJson;
  if (!raw || !String(raw).trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}
function placeholderPeople(count, label) {
  return Array.from({ length: Math.max(0, count) }, (_, index) => ({ name: `${label} ${index + 1}`, role: label, photo: "", ambition: "", quote: "", message: "" }));
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
function approvedImageOptions() {
  const opts = [];
  approvedSubmissions.forEach(sub => {
    const label = submissionLabel(sub);
    if (sub.photoData) opts.push({ url: sub.photoData, label });
    (Array.isArray(sub.photos) ? sub.photos : []).forEach((p, i) => {
      const url = p?.url || p?.data;
      if (url) opts.push({ url, label: `${label} - photo ${i + 1}` });
    });
  });
  return opts;
}
function missingContent(page) {
  const misses = [];
  if (!page.title) misses.push("title");
  const requiredText = ["eic-address", "brief-history", "senior-girl-speech", "senior-boy-speech", "proprietor-speech", "academic-contents"];
  if (requiredText.includes(page.templateType) && !page.manualFields.body && !page.sourceSubmissionId && !page.manualFields.section1Body) misses.push("text");
  const schema = getSchema(page.templateType);
  const needsImage = schema.images.find(img => ["portrait", "mainImage", "group", "contentImage"].includes(img.key));
  if (needsImage && !imageUrl(page, needsImage.key) && !getImage(page, needsImage.key)) misses.push(needsImage.label.toLowerCase());
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
  if (!records.length) { alert("No approved records found for this template yet."); return; }
  const tpl = getTemplate(templateType);
  const count = Math.ceil(records.length / cfg.per);
  for (let i = 0; i < count; i += 1) {
    state.pages.push(normalizePage({ id: createId(), templateType, title: count > 1 ? `${tpl.defaultTitle} ${i + 1}` : tpl.defaultTitle, subtitle: tpl.defaultSubtitle, status: "Awaiting Images", sourceType: "approved submission", manualFields: { chunkStart: String(i * cfg.per) } }, state.pages.length));
  }
  selectedPageId = state.pages[state.pages.length - count].id;
  persistAndRender();
}

function printMagazine(mode) {
  renumberPages();
  const pages = mode === "selected" ? [selectedPage()].filter(Boolean) : visibleExportPages();
  if (!pages.length) { alert("No pages available to print."); return; }
  els.printRoot.innerHTML = pages.map(page => renderPage(page)).join("");
  preloadImages(els.printRoot).then(warnings => {
    inspectRenderedPages(els.printRoot, false);
    if (warnings.length) alert(`${warnings.length} image(s) could not be preloaded. Unavailable images will remain as browser fallbacks/placeholders.`);
    window.print();
  });
}
function preloadImages(root) {
  const images = Array.from(root.querySelectorAll("img"));
  const warnings = [];
  return Promise.all(images.map(img => new Promise(resolve => {
    if (img.complete && img.naturalWidth) { resolve(); return; }
    img.onload = () => resolve();
    img.onerror = () => { warnings.push(img.src); resolve(); };
  }))).then(() => warnings);
}
function inspectRenderedPages(root, showWarnings = true) {
  let failed = 0;
  let overflow = 0;
  root.querySelectorAll(".mag-page").forEach(page => {
    const body = page.querySelector(".mag-page-body");
    if (body && body.scrollHeight > body.clientHeight + 4) {
      page.classList.add("has-overflow");
      overflow += 1;
    } else {
      page.classList.remove("has-overflow");
    }
  });
  root.querySelectorAll("img").forEach(img => {
    img.onerror = () => {
      failed += 1;
      if (showWarnings) showPreviewWarning(`${failed} image URL(s) failed to load. Failed images remain as placeholders/fallbacks.`);
    };
  });
  if (showWarnings) showPreviewWarning(overflow ? `${overflow} page(s) have content overflow. Split, shorten, or duplicate the page before final print.` : "");
}
function showPreviewWarning(text) {
  if (!text) {
    els.previewWarnings.classList.remove("visible");
    els.previewWarnings.textContent = "";
    return;
  }
  els.previewWarnings.textContent = text;
  els.previewWarnings.classList.add("visible");
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
      const sb = getSupa();
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
function isApproved(sub) { return sub.status === "approved" || sub.status === "finalized"; }
function safeJson(raw, fallback) { try { return JSON.parse(raw); } catch (err) { return fallback; } }
function chunk(items, size) {
  const output = [];
  for (let i = 0; i < items.length; i += size) output.push(items.slice(i, i + size));
  return output;
}
function cssEscape(value) {
  if (window.CSS && CSS.escape) return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}
function esc(value) {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function escAttr(value) { return esc(value).replace(/\n/g, " "); }
