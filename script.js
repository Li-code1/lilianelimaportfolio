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
    // Alt text of screenshots follows the selected language
    document.querySelectorAll('img[data-alt-pt]').forEach(function (img) {
      img.setAttribute('alt', lang === 'en' ? img.getAttribute('data-alt-en') : img.getAttribute('data-alt-pt'));
    });
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

  // Lightbox for project screenshots
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  document.querySelectorAll('.shot').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      if (typeof lightbox.showModal !== 'function') {
        window.open(img.currentSrc || img.src, '_blank', 'noopener');
        return;
      }
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightbox.setAttribute('aria-label', img.alt);
      lightbox.showModal();
    });
  });
  // Any click on the dialog (backdrop, image or close button) closes it; Esc works natively
  lightbox.addEventListener('click', function () { lightbox.close(); });
})();

/* ============================================================
   Efeitos tecnológicos: rede animada no banner, digitação,
   contadores e entrada suave das seções
   ============================================================ */
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function currentLang() { return root.classList.contains('lang-en') ? 'en' : 'pt'; }

  /* ---------- 1) Texto digitando no banner ---------- */
  var typedEl = document.getElementById('typedText');
  var phrases = {
    pt: [
      'Desenvolvimento web full stack',
      'Sites em WordPress',
      'Lojas virtuais com Shopify',
      'SEO e foco em conversão',
      'Python · Java · React',
      'IA generativa aplicada'
    ],
    en: [
      'Full stack web development',
      'WordPress websites',
      'Online stores with Shopify',
      'SEO and conversion focus',
      'Python · Java · React',
      'Applied generative AI'
    ]
  };
  var tIdx = 0, cIdx = 0, deleting = false, typeTimer = null;

  function typeTick() {
    var list = phrases[currentLang()];
    var full = list[tIdx % list.length];
    if (!deleting) {
      cIdx++;
      typedEl.textContent = full.slice(0, cIdx);
      if (cIdx >= full.length) { deleting = true; typeTimer = setTimeout(typeTick, 1700); return; }
      typeTimer = setTimeout(typeTick, 55 + Math.random() * 45);
    } else {
      cIdx--;
      typedEl.textContent = full.slice(0, cIdx);
      if (cIdx <= 0) { deleting = false; tIdx++; typeTimer = setTimeout(typeTick, 350); return; }
      typeTimer = setTimeout(typeTick, 26);
    }
  }
  function startTyping() {
    clearTimeout(typeTimer);
    tIdx = 0; cIdx = 0; deleting = false;
    if (!typedEl) return;
    if (reduceMotion) { typedEl.textContent = phrases[currentLang()][0]; return; }
    typedEl.textContent = '';
    typeTick();
  }
  if (typedEl) {
    startTyping();
    // reinicia a digitação quando o idioma muda (PT/EN)
    new MutationObserver(startTyping).observe(root, { attributes: true, attributeFilter: ['data-lang'] });
  }

  /* ---------- 2) Rede de partículas (canvas) ---------- */
  var banner = document.getElementById('techBanner');
  var canvas = document.getElementById('techCanvas');
  if (banner && canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, dpr = 1, nodes = [], raf = null, visible = true;
    var mouse = { x: -9999, y: -9999 };
    var CYAN = '126, 231, 255', LILAC = '206, 160, 255';

    function buildNodes() {
      var count = Math.max(26, Math.min(85, Math.round((w * h) / 9000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.8,
          c: Math.random() < 0.7 ? CYAN : LILAC
        });
      }
    }
    function resize() {
      var rect = banner.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
      if (reduceMotion) draw(false);
    }
    function draw(move) {
      ctx.clearRect(0, 0, w, h);
      var link = Math.min(150, Math.max(90, w / 6));
      var i, j, a, b, dx, dy, d, alpha;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        if (move) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
          // atração suave pelo mouse/dedo
          dx = mouse.x - a.x; dy = mouse.y - a.y; d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140 && d > 1) { a.x += (dx / d) * 0.35; a.y += (dy / d) * 0.35; }
        }
        for (j = i + 1; j < nodes.length; j++) {
          b = nodes[j];
          dx = a.x - b.x; dy = a.y - b.y; d = Math.sqrt(dx * dx + dy * dy);
          if (d < link) {
            alpha = (1 - d / link) * 0.55;
            ctx.strokeStyle = 'rgba(' + a.c + ',' + alpha.toFixed(3) + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // linhas ligando ao ponteiro
        dx = mouse.x - a.x; dy = mouse.y - a.y; d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) {
          alpha = (1 - d / 160) * 0.8;
          ctx.strokeStyle = 'rgba(' + CYAN + ',' + alpha.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(' + a.c + ',0.95)';
        ctx.shadowColor = 'rgba(' + a.c + ',0.9)';
        ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    function loop() {
      draw(true);
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!raf && visible && !document.hidden && !reduceMotion) loop(); }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    banner.addEventListener('pointermove', function (e) {
      var r = banner.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    banner.addEventListener('pointerleave', function () { mouse.x = -9999; mouse.y = -9999; });

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        visible ? start() : stop();
      }).observe(banner);
    }
    resize();
    start();
  }

  /* ---------- 3) Contadores do hero (0 → valor) ---------- */
  var counters = document.querySelectorAll('.hero-stats strong');
  if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.textContent, 10);
        cio.unobserve(el);
        if (isNaN(target)) return;
        var startTime = null, duration = 1100;
        function step(ts) {
          if (!startTime) startTime = ts;
          var p = Math.min((ts - startTime) / duration, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        }
        el.textContent = '0';
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- 4) Entrada suave das seções ao rolar ---------- */
  if ('IntersectionObserver' in window && !reduceMotion) {
    var targets = document.querySelectorAll(
      '.section-head, .about-grid > div, .timeline .item, .skill-card, .project, .exp-card, .work-item, .contact-card'
    );
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        rio.unobserve(el);
        el.classList.add('in');
        // depois da animação remove as classes para não interferir nos efeitos de hover
        setTimeout(function () {
          el.classList.remove('reveal', 'in');
          el.style.transitionDelay = '';
        }, 1000);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) {
      var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = ((idx % 3) * 90) + 'ms';
      el.classList.add('reveal');
      rio.observe(el);
    });
  }
})();

