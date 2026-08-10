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
}
