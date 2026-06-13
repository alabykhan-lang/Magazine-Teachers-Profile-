(function(){
  'use strict';

  const LOGO_SRC='production-assets/magazine/school-logo.jpg';
  const PHILOSOPHY_TEXT='At Way to Success Standard Schools, we believe education is a transformative force that nurtures lifelong learners, critical thinkers, and responsible citizens. We are committed to providing a holistic learning environment where students develop intellectual curiosity, moral integrity, and social responsibility. Through innovative teaching methods, character-building programmes, and a strong partnership with families and the community, we prepare our students to excel academically and contribute meaningfully to society. Our philosophy is rooted in the belief that every child has unique potential, and it is our duty to nurture and guide them toward achieving excellence in all aspects of life.';
  const ANTHEM_TEXT=[
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
    'Way! Way!! Way!!!'
  ].join('\n');

  function escapeHtml(value){
    return String(value==null?'':value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function lockInsideCover(){
    const page=document.querySelector('.mp-page--inside-cover');
    if(!page)return;
    const content=page.querySelector('.mp-page__content');
    if(!content)return;

    page.classList.add('mp-page--inside-cover-locked');
    page.dataset.insideCoverLocked='v2';
    page.dataset.pageNumber='';

    content.innerHTML=`
      <section class="mp-inside-cover-exact" aria-label="Inside Cover / School Identity">
        <figure class="mp-inside-logo-exact">
          <img src="${LOGO_SRC}" alt="Way to Success Standard Schools logo" loading="eager" decoding="sync" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'mp-inside-logo-fallback',textContent:'WAY TO SUCCESS SCHOOLS'}))"/>
        </figure>
        <span class="mp-inside-top-diamond" aria-hidden="true"></span>
        <h1 class="mp-inside-school-title">WAY TO SUCCESS<br/>STANDARD SCHOOLS</h1>
        <div class="mp-inside-location-line"><span>Ifedapo Community, Ejigbo</span></div>
        <div class="mp-inside-est">EST. 2017</div>

        <article class="mp-inside-card mp-inside-philosophy">
          <div class="mp-inside-icon" aria-hidden="true">♕</div>
          <h2>PHILOSOPHY OF THE SCHOOL</h2>
          <div class="mp-inside-heading-rule" aria-hidden="true"></div>
          <p>${escapeHtml(PHILOSOPHY_TEXT)}</p>
        </article>

        <article class="mp-inside-card mp-inside-anthem">
          <div class="mp-inside-icon" aria-hidden="true">♬</div>
          <h2>THE SCHOOL ANTHEM</h2>
          <div class="mp-inside-heading-rule" aria-hidden="true"></div>
          <p>${escapeHtml(ANTHEM_TEXT)}</p>
        </article>

        <span class="mp-inside-footer-diamond" aria-hidden="true"></span>
        <footer class="mp-inside-custom-footer">WAY TO SUCCESS STANDARD SCHOOLS, EJIGBO</footer>
      </section>
    `;
  }

  function scheduleLock(){
    setTimeout(lockInsideCover,0);
    setTimeout(lockInsideCover,350);
    setTimeout(lockInsideCover,1200);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scheduleLock);
  }else{
    scheduleLock();
  }

  const target=document.getElementById('mpPages');
  if(target){
    const observer=new MutationObserver(()=>{
      const page=document.querySelector('.mp-page--inside-cover');
      if(page&&page.dataset.insideCoverLocked!=='v2')lockInsideCover();
    });
    observer.observe(target,{childList:true,subtree:true});
  }else{
    document.addEventListener('DOMContentLoaded',()=>{
      const pages=document.getElementById('mpPages');
      if(!pages)return;
      const observer=new MutationObserver(()=>{
        const page=document.querySelector('.mp-page--inside-cover');
        if(page&&page.dataset.insideCoverLocked!=='v2')lockInsideCover();
      });
      observer.observe(pages,{childList:true,subtree:true});
    });
  }
})();
