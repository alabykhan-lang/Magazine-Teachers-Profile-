(function(){
  'use strict';

  const FOOTER_TEXT = 'WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO';

  const anthemLines = [
    'Way to Success,',
    "Nigeria's most vibrant school.",
    'We are pious, prayerful, progressive,',
    'Attainment in all endeavours.',
    'Forward ever, backward never.',
    '',
    'For learning and creation,',
    'Way to Success, I cherish.',
    'There is only one way to success in the universe;',
    'Another way to success is the counterfeit.',
    'Way, Way, Way.'
  ];

  const philosophyText =
    'At Way to Success Standard Schools, we believe education is a transformative force that nurtures lifelong learners, critical thinkers, and responsible citizens. We are committed to providing a holistic learning environment where students develop intellectual curiosity, moral integrity, and social responsibility. Through innovative teaching methods, character-building programmes, and a strong partnership with families and the community, we prepare our students to excel academically and contribute meaningfully to society. Our philosophy is rooted in the belief that every child has unique potential, and it is our duty to nurture and guide them toward achieving excellence in all aspects of life.';

  const DEFAULT_CONTENT_GROUPS = [
    {
      title: 'Opening Pages',
      keys: [
        'editorial-board',
        'editorial-chairman-address',
        'school-history'
      ]
    },
    {
      title: 'Addresses & Speeches',
      keys: [
        'proprietor-speech',
        'senior-boy-speech',
        'senior-girl-speech'
      ]
    },
    {
      title: 'Interviews & Messages',
      keys: [
        'interview-section',
        'graduating-class-message'
      ]
    },
    {
      title: 'Graduate Profiles',
      keys: [
        'ss3-graduate-profiles',
        'jss3-student-profiles',
        'primary5-graduate-profiles'
      ]
    },
    {
      title: 'School Community',
      keys: [
        'cross-section-classes',
        'staff-profiles',
        'school-life-events'
      ]
    },
    {
      title: 'Features & Closing',
      keys: [
        'academic-educational',
        'advertisements',
        'appreciation',
        'back-cover'
      ]
    }
  ];

  const SECTION_TITLE_OVERRIDES = {
    'editorial-board': 'The Editorial Board',
    'editorial-chairman-address': 'Editor-in-Chief Address',
    'academic-educational': 'Academic & Educational Contents'
  };

  let applying = false;

  function start(){
    watchPages();
    waitAndApply();
  }

  function waitAndApply(){
    let attempts = 0;
    const timer = setInterval(function(){
      attempts += 1;
      const inside = document.querySelector('.mp-page[data-section-key="inside-cover"]');
      const contents = document.querySelector('.mp-page[data-section-key="contents"]');
      if ((inside && contents) || attempts > 80) {
        clearInterval(timer);
        applyOpeningPages();
      }
    }, 250);
  }

  function watchPages(){
    const target = document.getElementById('mpPages');
    if (!target || !window.MutationObserver) return;
    const observer = new MutationObserver(function(){
      if (applying) return;
      const inside = document.querySelector('.mp-page[data-section-key="inside-cover"]');
      const contents = document.querySelector('.mp-page[data-section-key="contents"]');
      if (inside && contents && !inside.classList.contains('mp-opening-ready')) {
        applyOpeningPages();
      }
    });
    observer.observe(target, {childList: true, subtree: false});
  }

  function applyOpeningPages(){
    if (applying) return;
    applying = true;

    try {
      removePendingFrontCover();

      const inside = document.querySelector('.mp-page[data-section-key="inside-cover"]');
      const contents = document.querySelector('.mp-page[data-section-key="contents"]');
      let liveOpenersApplied = false;

      if (inside && !inside.dataset.openersApplied && !isStaticPage(inside)) {
        const existingLogo = inside.querySelector('img');
        inside.classList.add('mp-opening-ready', 'mp-opening-inside');
        inside.dataset.openersApplied = 'true';
        const content = inside.querySelector('.mp-page__content');
        if (content) content.innerHTML = renderInsideCover(existingLogo ? existingLogo.getAttribute('src') : '');
        liveOpenersApplied = true;
      }

      renumberMagazinePages();

      if (contents && !contents.dataset.openersApplied && !isStaticPage(contents)) {
        contents.classList.add('mp-opening-ready', 'mp-opening-contents');
        contents.dataset.openersApplied = 'true';
        const content = contents.querySelector('.mp-page__content');
        if (content) content.innerHTML = renderContentsPage();
        liveOpenersApplied = true;
      }

      renumberMagazinePages();
      updateStatusNote(liveOpenersApplied);
    } finally {
      applying = false;
    }
  }

  function removePendingFrontCover(){
    const front = document.querySelector('.mp-page[data-section-key="front-cover"]');
    if (front && !isStaticPage(front)) front.remove();
  }

  function isStaticPage(page){
    return !!(page && (page.classList.contains('mp-page--static') || page.dataset.staticPageId));
  }

  function renumberMagazinePages(){
    const pages = Array.from(document.querySelectorAll('.mp-page'));
    let number = 0;

    pages.forEach(function(page){
      const key = page.getAttribute('data-section-key');
      const footerText = page.querySelector('.mp-page__footer span:first-child');
      const footerNo = page.querySelector('.mp-page__number');

      if (footerText) footerText.textContent = FOOTER_TEXT;

      if (key === 'inside-cover') {
        page.setAttribute('data-page-number', '');
        if (footerNo) footerNo.textContent = '';
        return;
      }

      number += 1;
      const shown = String(number).padStart(2, '0');
      page.setAttribute('data-page-number', shown);
      if (footerNo) footerNo.textContent = shown;
    });
  }

  function pageNumberFor(key){
    const page = document.querySelector('.mp-page[data-section-key="' + key + '"]');
    return pageLabelForPage(page) || '--';
  }

  function renderInsideCover(logoUrl){
    return `
      <section class="lh-inside-cover">
        <div class="lh-logo-wrap">
          ${logoUrl ? `<img src="${escapeAttr(logoUrl)}" alt="Way to Success Standard Schools logo">` : renderFallbackLogo()}
        </div>

        <div class="lh-mini-rule" aria-hidden="true"></div>

        <h1 class="lh-school-name">WAY TO SUCCESS<br>STANDARD SCHOOLS</h1>

        <div class="lh-location">Ifedapo Community, Ejigbo</div>
        <div class="lh-est">EST. 2017</div>

        <section class="lh-info-card lh-philosophy">
          <div class="lh-card-icon" aria-hidden="true">&#128161;</div>
          <h2>PHILOSOPHY OF THE SCHOOL</h2>
          <div class="lh-card-rule" aria-hidden="true"></div>
          <p>${escapeHtml(philosophyText)}</p>
        </section>

        <section class="lh-info-card lh-anthem-card">
          <div class="lh-card-icon" aria-hidden="true">&#9835;</div>
          <h2>THE SCHOOL ANTHEM</h2>
          <div class="lh-card-rule" aria-hidden="true"></div>
          <div class="lh-anthem">
            ${anthemLines.map(function(line){
              return line ? `<p>${escapeHtml(line)}</p>` : '<br>';
            }).join('')}
          </div>
        </section>
      </section>
    `;
  }

  function renderContentsPage(){
    const groups = buildContentsGroups();
    const splitAt = Math.ceil(groups.length / 2);
    const left = groups.slice(0, splitAt);
    const right = groups.slice(splitAt);
    const totalItems = groups.reduce(function(total, group){
      return total + group.items.length;
    }, 0);
    const densityClass = groups.length > 6 || totalItems > 21 ? ' lh-contents--dense' : '';

    return `
      <section class="lh-contents${densityClass}">
        <header class="lh-contents-head">
          <div class="lh-contents-symbol" aria-hidden="true">&#9728;</div>
          <div class="lh-contents-kicker">CONTENTS</div>
          <h1 class="lh-contents-title">Contents</h1>
          <div class="lh-contents-title-rule" aria-hidden="true"></div>
          <div class="lh-contents-theme">
            <span>THE MAKING OF TOMORROW:</span>
            <em>From Humble Beginnings to Limitless Horizons</em>
          </div>
        </header>

        <div class="lh-contents-body" data-group-count="${escapeAttr(groups.length)}">
          <div class="lh-contents-col">
            ${left.map(function(group, index){
              return renderTocGroup(group, index);
            }).join('')}
          </div>
          <div class="lh-contents-col">
            ${right.map(function(group, index){
              return renderTocGroup(group, index + splitAt);
            }).join('')}
          </div>
        </div>

        <aside class="lh-contents-quote">
          <span>&#8220;</span>
          <p>Every page tells our story.<br>Every chapter builds our legacy.</p>
        </aside>
      </section>
    `;
  }

  function buildContentsGroups(){
    const items = getCurrentContentsItems();
    const definitions = getContentGroupDefinitions();
    const byKey = new Map(items.map(function(item){
      return [item.key, item];
    }));
    const used = new Set();

    const groups = definitions.map(function(group){
      const groupItems = group.keys.map(function(entry){
        const key = typeof entry === 'string' ? entry : entry && entry.key;
        if (!key || !byKey.has(key)) return null;
        const item = byKey.get(key);
        used.add(key);
        return Object.assign({}, item, {
          title: entry && entry.title ? entry.title : item.title
        });
      }).filter(Boolean);
      return {title: group.title, items: groupItems};
    }).filter(function(group){
      return group.items.length;
    });

    const extraItems = items.filter(function(item){
      return !used.has(item.key);
    });
    if (extraItems.length) groups.push({title: 'More Sections', items: extraItems});

    return groups.length ? groups : buildFallbackContentsGroups(definitions);
  }

  function getCurrentContentsItems(){
    const skip = new Set(['front-cover', 'inside-cover', 'contents']);
    return Array.from(document.querySelectorAll('.mp-page[data-section-key]'))
      .map(function(page){
        const key = page.getAttribute('data-section-key') || '';
        return {
          key: key,
          title: titleForPage(page, key),
          pageLabel: pageLabelForPage(page)
        };
      })
      .filter(function(item){
        return item.key && !skip.has(item.key) && item.pageLabel;
      });
  }

  function getContentGroupDefinitions(){
    const custom = readJson('me_opening_contents_groups', null);
    const source = Array.isArray(window.MAGAZINE_CONTENT_GROUPS) ? window.MAGAZINE_CONTENT_GROUPS : custom;
    const normalized = normalizeContentGroups(source);
    return normalized.length ? normalized : DEFAULT_CONTENT_GROUPS;
  }

  function normalizeContentGroups(value){
    if (!Array.isArray(value)) return [];
    return value.map(function(group){
      const rawKeys = Array.isArray(group && group.keys) ? group.keys : [];
      const keys = rawKeys.map(function(entry){
        if (typeof entry === 'string') return entry;
        if (Array.isArray(entry) && entry[0]) return {key: String(entry[0]), title: entry[1] ? String(entry[1]) : ''};
        if (entry && entry.key) return {key: String(entry.key), title: entry.title ? String(entry.title) : ''};
        return null;
      }).filter(Boolean);
      return {
        title: group && group.title ? String(group.title) : '',
        keys: keys
      };
    }).filter(function(group){
      return group.title && group.keys.length;
    });
  }

  function buildFallbackContentsGroups(definitions){
    return definitions.map(function(group){
      return {
        title: group.title,
        items: group.keys.slice(0, 3).map(function(entry){
          const key = typeof entry === 'string' ? entry : entry.key;
          return {
            key: key,
            title: entry && entry.title ? entry.title : titleFromKey(key),
            pageLabel: '--'
          };
        })
      };
    }).filter(function(group){
      return group.items.length;
    });
  }

  function titleForPage(page, key){
    const explicit = page.getAttribute('data-toc-title');
    if (explicit) return explicit.trim();
    const liveTitle = textOf(page.querySelector('.mp-title, h1, h2'));
    return SECTION_TITLE_OVERRIDES[key] || liveTitle || titleFromKey(key);
  }

  function titleFromKey(key){
    return String(key || '')
      .split('-')
      .filter(Boolean)
      .map(function(part){
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(' ');
  }

  function textOf(node){
    return node && node.textContent ? node.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  function pageLabelForPage(page){
    if (!page) return '';
    const direct = page.getAttribute('data-page-number') || '';
    if (direct.trim()) return direct.trim();
    const footerNo = page.querySelector('.mp-page__number');
    return footerNo && footerNo.textContent ? footerNo.textContent.trim() : '';
  }

  function renderTocGroup(group, index){
    const number = String(index + 1).padStart(2, '0');
    return `
      <section class="lh-toc-group">
        <div class="lh-toc-num">${escapeHtml(number)}</div>
        <div class="lh-toc-line" aria-hidden="true"></div>
        <div>
          <h2>${escapeHtml(group.title)}</h2>
          <div class="lh-toc-small-rule" aria-hidden="true"></div>
          <ol>
            ${group.items.map(function(item){
              const page = item.pageLabel || pageNumberFor(item.key);
              return `
                <li>
                  <span class="lh-toc-label">${escapeHtml(item.title)}</span>
                  <span class="lh-toc-dots"></span>
                  <span class="lh-toc-page">p. ${escapeHtml(page)}</span>
                </li>
              `;
            }).join('')}
          </ol>
        </div>
      </section>
    `;
  }

  function renderFallbackLogo(){
    return `<div class="lh-fallback-emblem">WAY TO<br>SUCCESS<br>SCHOOLS</div>`;
  }

  function updateStatusNote(liveOpenersApplied){
    const status = document.getElementById('mpStatus');
    if (!status) return;
    const currentCount = document.querySelectorAll('.mp-page').length;
    status.textContent = status.textContent.replace(/^\d+ A4 pages/, currentCount + ' A4 pages');
    if (!liveOpenersApplied || status.dataset.openersNote) return;
    status.dataset.openersNote = 'true';
    status.textContent = status.textContent + ' Opening pages override active: Inside Cover and Contents are styled from approved references.';
  }

  function escapeHtml(value){
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(value){
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  function readJson(key, fallback){
    try {
      const raw = window.localStorage ? localStorage.getItem(key) : '';
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return parsed == null ? fallback : parsed;
    } catch (error) {
      return fallback;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
