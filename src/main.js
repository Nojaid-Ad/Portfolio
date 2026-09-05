/* ── Styles ── */
import './styles/base.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/education.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/components.css';

/* ── Vendor CSS ── */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* ── Modules ── */
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { initTheme, toggleTheme } from './theme.js';
import { initLanguage, toggleLanguage, getLanguage } from './i18n/index.js';
import { LiquidCanvas } from './hero-canvas.js';
import { initNavigation } from './navigation.js';

/* ═══════════════════════════════════════
   INITIALISATION
   ═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Theme (runs first to avoid flash) */
  initTheme();

  /* 2. Language / i18n */
  initLanguage();

  /* 3. Navigation */
  initNavigation();

  /* 4. Theme toggle button */
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  /* 5. Language switch button */
  const langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);

  /* 6. Hero liquid canvas */
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) new LiquidCanvas(heroCanvas);

  /* 7. Swiper for projects */
  initSwiper();

  /* 8. Scroll reveal animations (replaces AOS) */
  initScrollReveal();

  /* 9. Skill progress bar animation on scroll */
  initSkillProgress();

  /* 10. Contact form handling */
  initContactForm();

  /* 11. Re-init swiper direction on lang change */
  window.addEventListener('languageChanged', () => {
    initSwiper();
  });
});

/* ── Apply theme before DOM load to prevent flash ── */
initTheme();

/* ═══════════════════════════════════════
   SCROLL REVEAL (replaces AOS)
   Custom IntersectionObserver — works on GitHub Pages
   ═══════════════════════════════════════ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-scale');

  if (!revealElements.length) return;

  /* Check for reduced motion preference */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach(el => el.classList.add('active'));
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
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════
   SKILL PROGRESS BARS
   Animate fill width when scrolled into view
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
      threshold: 0.3,
    }
  );

  fills.forEach((fill) => observer.observe(fill));
}

/* ═══════════════════════════════════════
   SWIPER
   ═══════════════════════════════════════ */
let swiperInstance = null;

function initSwiper() {
  const el = document.querySelector('.projects-wrapper');
  if (!el) return;

  /* Destroy previous instance if re-initialising */
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new Swiper(el, {
    modules: [Navigation, Pagination],
    loop: false,
    spaceBetween: 20,
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
      640:  { slidesPerView: 1.3 },
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

/* ═══════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════ */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const msgEl = form.querySelector('.form-message');
    if (!msgEl) return;

    /* Basic validation */
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
          ? 'يرجى ملء جميع الحقول بشكل صحيح.'
          : 'Please fill in all fields correctly.';
      msgEl.classList.add('error');
      msgEl.style.display = 'block';
      return;
    }

    /* Success (no backend yet) */
    const lang = getLanguage();
    msgEl.textContent =
      lang === 'ar'
        ? 'تم إرسال الرسالة بنجاح!'
        : 'Message sent successfully!';
    msgEl.classList.add('success');
    msgEl.style.display = 'block';
    form.reset();

    setTimeout(() => {
      msgEl.style.display = 'none';
    }, 4000);
  });
}
