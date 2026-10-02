(function () {
  var STORAGE_THEME = 'liliane-portfolio-theme';
  var STORAGE_LANG = 'liliane-portfolio-lang';
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

  // Language toggle
  var langPt = document.getElementById('langPt');
  var langEn = document.getElementById('langEn');

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    root.classList.remove('lang-pt', 'lang-en');
    root.classList.add(lang === 'en' ? 'lang-en' : 'lang-pt');
    langPt.setAttribute('aria-pressed', String(lang === 'pt'));
    langEn.setAttribute('aria-pressed', String(lang === 'en'));
  }

  var savedLang = null;
  try { savedLang = localStorage.getItem(STORAGE_LANG); } catch (e) { /* ignore */ }
  applyLang(savedLang === 'en' ? 'en' : 'pt');

  langPt.addEventListener('click', function () {
    applyLang('pt');
    try { localStorage.setItem(STORAGE_LANG, 'pt'); } catch (e) { /* ignore */ }
  });
  langEn.addEventListener('click', function () {
    applyLang('en');
    try { localStorage.setItem(STORAGE_LANG, 'en'); } catch (e) { /* ignore */ }
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
