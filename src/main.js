/* ═══════════════════════════════════════
   PORTFOLIO MAIN JAVASCRIPT
   Clean vanilla ES module with zero runtime build dependencies
   ═══════════════════════════════════════ */

import { initTheme, toggleTheme } from './theme.js';
import { initLanguage, toggleLanguage, getLanguage } from './i18n/index.js';
import { LiquidCanvas } from './hero-canvas.js';
import { initNavigation } from './navigation.js';

/* ═══════════════════════════════════════
   INITIALISATION
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Theme (runs early to avoid flash) */
  initTheme();

  /* 2. Language / i18n */
  initLanguage();

  /* 3. Navigation */
  initNavigation();

  /* 4. Theme toggle button */
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      toggleTheme();
    });
  }

  /* 5. Language switch button */
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      toggleLanguage();
      updateLanguageButton();
    });
  }
  updateLanguageButton();

  /* 6. Hero liquid canvas */
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) {
    try {
      new LiquidCanvas(heroCanvas);
    } catch (e) {
      console.warn('Canvas init bypassed:', e);
    }
  }

  /* 7. Swiper for projects */
  initSwiper();

  /* 8. Scroll reveal animations (Custom IntersectionObserver replacing AOS) */
  initScrollReveal();

  /* 9. Skill progress bar animation on scroll */
  initSkillProgress();

  /* 10. Contact form handling */
  initContactForm();

  /* 11. Typewriter effect for Hero */
  initTypewriter();

  /* 12. Re-init on language change */
  window.addEventListener('languageChanged', () => {
    updateLanguageButton();
    initSwiper();
    initTypewriter();
  });
});

/* Run theme immediately on script execution */
initTheme();

/* ═══════════════════════════════════════
   LANGUAGE BUTTON UPDATE
   Shows AR when in English, EN when in Arabic
   ═══════════════════════════════════════ */
function updateLanguageButton() {
  const codeEl = document.querySelector('.lang-switch-btn .lang-code');
  if (!codeEl) return;
  const current = getLanguage();
  /* If currently in EN, button offers AR; if in AR, button offers EN */
  codeEl.textContent = current === 'ar' ? 'EN' : 'AR';
}

/* ═══════════════════════════════════════
   TYPEWRITER EFFECT
   ═══════════════════════════════════════ */
let typewriterTimeout = null;

function initTypewriter() {
  const nameEl = document.querySelector('.hero-name');
  if (!nameEl) return;

  const currentLang = getLanguage();
  const textToType = currentLang === 'ar' ? 'نجيد عبدالله عيسى' : 'Nojaid Abdullah Issa';

  if (typewriterTimeout) clearTimeout(typewriterTimeout);

  nameEl.textContent = '';
  let i = 0;

  function type() {
    if (i < textToType.length) {
      nameEl.textContent += textToType.charAt(i);
      i++;
      typewriterTimeout = setTimeout(type, 80);
    }
  }

  type();
}

/* ═══════════════════════════════════════
   SCROLL REVEAL (Reliable IntersectionObserver)
   Works 100% on GitHub Pages, Live Server & Vite
   ═══════════════════════════════════════ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-stagger, .reveal-scale'
  );

  if (!revealElements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((el) => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════
   SKILL PROGRESS BARS
   Smooth width animation upon scrolling into view
   ═══════════════════════════════════════ */
function initSkillProgress() {
  const fills = document.querySelectorAll('.skill-progress-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  fills.forEach((fill) => observer.observe(fill));
}

/* ═══════════════════════════════════════
   SWIPER SLIDER
   Supports both window.Swiper (CDN) & bundle
   ═══════════════════════════════════════ */
let swiperInstance = null;

function initSwiper() {
  const el = document.querySelector('.projects-wrapper');
  if (!el) return;

  const SwiperClass = typeof window !== 'undefined' && window.Swiper ? window.Swiper : null;
  if (!SwiperClass) {
    console.warn('Swiper library not loaded yet');
    return;
  }

  if (swiperInstance && typeof swiperInstance.destroy === 'function') {
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new SwiperClass(el, {
    loop: false,
    spaceBetween: 24,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0:    { slidesPerView: 1 },
      640:  { slidesPerView: 1.25 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

/* ═══════════════════════════════════════
   CONTACT FORM HANDLING
   ═══════════════════════════════════════ */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const msgEl = form.querySelector('.form-message');
    if (!msgEl) return;

    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach((input) => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        valid = false;
      }
      if (input.type === 'email' && input.value && !input.value.includes('@')) {
        valid = false;
      }
    });

    msgEl.classList.remove('success', 'error');

    if (!valid) {
      const lang = getLanguage();
      msgEl.textContent =
        lang === 'ar'
          ? 'يرجى ملء جميع الحقول المطلوبة بشكل صحيح.'
          : 'Please fill in all required fields correctly.';
      msgEl.classList.add('error');
      msgEl.style.display = 'block';
      return;
    }

    const lang = getLanguage();
    msgEl.textContent =
      lang === 'ar'
        ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.'
        : 'Thank you! Your message has been sent successfully.';
    msgEl.classList.add('success');
    msgEl.style.display = 'block';
    form.reset();

    setTimeout(() => {
      msgEl.style.display = 'none';
    }, 4500);
  });
}
