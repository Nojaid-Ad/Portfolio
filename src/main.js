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
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* ── Modules ── */
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { initTheme, toggleTheme } from './theme.js';
import { initLanguage, toggleLanguage, applyLanguage, getLanguage } from './i18n/index.js';
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

  /* 6. Contact Form Prevent Default */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Optionally show a success message here
      const msg = contactForm.querySelector('.form-message');
      if (msg) {
        msg.textContent = getLanguage() === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!';
        msg.style.color = 'var(--primary)';
      }
      contactForm.reset();
    });
  }

  /* 6. Hero liquid canvas */
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) new LiquidCanvas(heroCanvas);

  /* 7. Swiper for projects */
  initSwiper();

  /* 8. AOS scroll animations */
  AOS.init({
    duration: 500,
    once: true,
    offset: 30,
    easing: 'ease-out',
  });

  /* 9. Contact form handling */
  initContactForm();

  /* 10. Re-init swiper direction on lang change */
  window.addEventListener('languageChanged', () => {
    initSwiper();
  });
});

/* ── Apply theme before DOM load to prevent flash ── */
initTheme();

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
