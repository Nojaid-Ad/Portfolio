/**
 * Navigation — mobile menu toggle, smooth-scroll, active highlighting.
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

  /* ── Smart Header & Back to Top ── */
  const header = document.getElementById('mainHeader');
  const backToTop = document.getElementById('backToTopBtn');
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
    if (header && currentScrollY > 60) {
      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        // Scrolling down -> hide header
        header.classList.add('header-hidden');
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        // Scrolling up -> show header
        header.classList.remove('header-hidden');
      }
    } else if (header && currentScrollY <= 60) {
      // At the top -> show header
      header.classList.remove('header-hidden');
    }

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
}
