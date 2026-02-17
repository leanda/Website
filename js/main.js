/* ============================================
   main.js
   Dark/light mode toggle + scroll fade-in
   observer. Site works without JS — animations
   and theme toggle are progressive enhancements.
   ============================================ */

(function () {
  'use strict';

  /* ----- Dark / Light mode toggle ---------- */

  var toggle = document.querySelector('.theme-toggle');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ----- Mobile nav toggle ----------------- */

  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  /* ----- Scroll fade-in observer ----------- */

  var fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IntersectionObserver support — show everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
