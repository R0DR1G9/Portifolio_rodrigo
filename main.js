/* main.js — Rodrigo Barbosa Portfolio v2 */

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => io.observe(el));

// ── Mobile burger ──
const burger   = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ── Timeline filter (conquistas page) ──
const filterBtns = document.querySelectorAll('.flt');
const tlItems    = document.querySelectorAll('.tl-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;
    tlItems.forEach(item => {
      const match = f === 'all' || item.dataset.cat === f;
      item.classList.toggle('hidden', !match);
    });
  });
});

// ── Subtle parallax on hero number ──
const heroNum = document.querySelector('.hero-number');
if (heroNum) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroNum.style.transform = `translateY(${y * 0.15}px)`;
  }, { passive: true });
}
