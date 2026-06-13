(function(){
  'use strict';

  const FOOTER_TEXT = 'WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO';

  const anthemLines = [
    'Way to Success,',
    'Nigeria’s most vibrant school.',
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

  const tocGroups = [
    {
      no: '01',
      title: 'Opening Pages',
      keys: [
        ['editorial-board', 'The Editorial Board'],
        ['editorial-chairman-address', 'Editor-in-Chief Address'],
        ['school-history', 'Brief History of the School']
      ]
    },
    {
      no: '02',
      title: 'Addresses & Speeches',
      keys: [
        ['proprietor-speech', 'Proprietor’s Speech'],
        ['senior-boy-speech', 'Senior Boy’s Speech'],
        ['senior-girl-speech', 'Senior Girl’s Speech']
      ]
    },
    {
      no: '03',
      title: 'Interviews & Messages',
      keys: [
        ['interview-section', 'Interview Section'],
        ['graduating-class-message', 'Graduating Class Message']
      ]
    },
    {
      no: '04',
      title: 'Graduate Profiles',
      keys: [
        ['ss3-graduate-profiles', 'SS3 Graduate Profiles'],
        ['jss3-student-profiles', 'JSS3 Student Profiles'],
        ['primary5-graduate-profiles', 'Primary 5 Graduate Profiles']
      ]
    },
    {
      no: '05',
      title: 'School Community',
      keys: [
        ['cross-section-classes', 'Cross Section of Classes'],
        ['staff-profiles', 'Staff Profiles'],
        ['school-life-events', 'School Life Events']
      ]
    },
    {
      no: '06',
      title: 'Features & Closing',
      keys: [
        ['academic-educational', 'Academic & Educational Contents'],
        ['advertisements', 'Advertisements'],
        ['appreciation', 'Appreciation / Acknowledgement']
      ]
    }
  ];

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
    observer.observe(target, {childList:true, subtree:false});
  }

  function applyOpeningPages(){
    if (applying) return;
    applying = true;

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

    if (contents && !contents.dataset.openersApplied && !isStaticPage(contents)) {
      contents.classList.add('mp-opening-ready', 'mp-opening-contents');
      contents.dataset.openersApplied = 'true';
      const content = contents.querySelector('.mp-page__content');
      if (content) content.innerHTML = renderContentsPage();
      liveOpenersApplied = true;
    }

    renumberMagazinePages();
    updateStatusNote(liveOpenersApplied);
    applying = false;
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
    if (!page) return '--';
    return page.getAttribute('data-page-number') || '--';
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
          <div class="lh-card-icon" aria-hidden="true">♔</div>
          <h2>PHILOSOPHY OF THE SCHOOL</h2>
          <div class="lh-card-rule" aria-hidden="true"></div>
          <p>${escapeHtml(philosophyText)}</p>
        </section>

        <section class="lh-info-card lh-anthem-card">
          <div class="lh-card-icon" aria-hidden="true">♬</div>
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
    const left = tocGroups.slice(0, 3);
    const right = tocGroups.slice(3);

    return `
      <section class="lh-contents">
        <header class="lh-contents-head">
          <div class="lh-contents-symbol" aria-hidden="true">☀</div>
          <div class="lh-contents-kicker">CONTENTS</div>
          <h1 class="lh-contents-title">Contents</h1>
          <div class="lh-contents-title-rule" aria-hidden="true"></div>
          <div class="lh-contents-theme">
            <span>THE MAKING OF TOMORROW:</span>
            <em>From Humble Beginnings to Limitless Horizons</em>
          </div>
        </header>

        <div class="lh-contents-body">
          <div class="lh-contents-col">
            ${left.map(renderTocGroup).join('')}
          </div>
          <div class="lh-contents-col">
            ${right.map(renderTocGroup).join('')}
          </div>
        </div>

        <aside class="lh-contents-quote">
          <span>“</span>
          <p>Every page tells our story.<br>Every chapter builds our legacy.</p>
        </aside>
      </section>
    `;
  }

  function renderTocGroup(group){
    return `
      <section class="lh-toc-group">
        <div class="lh-toc-num">${escapeHtml(group.no)}</div>
        <div class="lh-toc-line" aria-hidden="true"></div>
        <div>
          <h2>${escapeHtml(group.title)}</h2>
          <div class="lh-toc-small-rule" aria-hidden="true"></div>
          <ol>
            ${group.keys.map(function(item){
              const key = item[0];
              const title = item[1];
              const page = pageNumberFor(key);
              return `
                <li>
                  <span>${escapeHtml(title)}</span>
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
