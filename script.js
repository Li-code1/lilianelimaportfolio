(function () {
  var STORAGE_THEME = 'liliane-portfolio-theme';
  var root = document.documentElement;
  var themeIcon = document.getElementById('themeIcon');
  var themeToggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      root.setAttribute('data-theme', 'light');
      themeIcon.textContent = '🌙';
    }
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem(STORAGE_THEME); } catch (e) { /* storage unavailable */ }
  if (!savedTheme) {
    savedTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(STORAGE_THEME, next); } catch (e) { /* ignore */ }
  });

  // Hamburger menu
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobilePanel = document.getElementById('mobilePanel');
  hamburgerBtn.addEventListener('click', function () {
    var isOpen = mobilePanel.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    hamburgerBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
  mobilePanel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobilePanel.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll to top button
  var scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 480) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
