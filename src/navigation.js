/**
 * Navigation — mobile menu toggle, smooth-scroll, active highlighting, scroll spy.
 */

let menuOpen = false;

export function initNavigation() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');

  if (!btn || !nav) return;

  /* ── Toggle hamburger ── */
  btn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    btn.classList.toggle('open', menuOpen);
    nav.classList.toggle('open', menuOpen);
  });

  /* ── Close on nav-link click (mobile) ── */
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && menuOpen) {
        menuOpen = false;
        btn.classList.remove('open');
        nav.classList.remove('open');
      }
    });
  });

  /* ── Close on outside click ── */
  document.addEventListener('click', (e) => {
    if (menuOpen && !nav.contains(e.target) && !btn.contains(e.target)) {
      menuOpen = false;
      btn.classList.remove('open');
      nav.classList.remove('open');
    }
  });

  /* ── Close on Escape ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) {
      menuOpen = false;
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.focus();
    }
  });

  /* ── Smart Header, Back to Top & Scroll Spy ── */
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTopBtn');
  const navLinks = nav.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  let lastScrollY = window.scrollY;
  let ticking = false;

  const onScroll = () => {
    const currentScrollY = window.scrollY;

    /* Back to Top visibility */
    if (backToTop) {
      if (currentScrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    /* Smart Header */
    if (header) {
      /* Add scrolled class for shadow */
      if (currentScrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      if (currentScrollY > 60) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
          header.classList.remove('header-hidden');
        }
      } else {
        header.classList.remove('header-hidden');
      }
    }

    /* ── Scroll Spy — highlight active nav link ── */
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (currentScrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      lastScrollY = currentScrollY;
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* Run once on load */
  onScroll();
}
