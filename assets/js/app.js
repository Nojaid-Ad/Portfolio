(function () {

  /* --- i18n\en.js --- */
  const en = {
    /* ───── Navigation ───── */
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },

    /* ───── Hero ───── */
    hero: {
      name: 'Nojaid Abdullah Issa',
      title: 'Software Engineer',
      description:
        'A Software Engineer specializing in building modern, scalable applications using Flutter, Laravel, and clean architecture. Focused on delivering high-quality code, intuitive user experiences, and efficient system design.',
      projectsBtn: 'My Projects',
      cvBtn: 'Download CV',
    },

    /* ───── About ───── */
    about: {
      title: 'About',
      titleHighlight: 'Me',
      description:
        "I'm a Software Engineer with a Bachelor's degree in Software Engineering from the Faculty of Information Technology – Al-Jumail, University of Sabratha. I specialize in mobile app development with Flutter (using GetX, REST APIs, Firebase, and SqFlite) and full-stack web development with Laravel, PHP, and MySQL. My approach centers on clean architecture, maintainable code, and scalable solutions. I'm passionate about turning ideas into polished, production-ready applications with great user experiences.",
      stat1Label: 'Education',
      stat1Value: "B.Sc. Software Engineering",
      stat2Label: 'Focus',
      stat2Value: 'Mobile & Web Development',
      stat3Label: 'Core Tech',
      stat3Value: 'Flutter · Laravel · MySQL',
    },

    /* ───── Skills ───── */
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      flutter: {
        name: 'Flutter',
        percent: '85%',
        description:
          'Building scalable mobile apps using Flutter, GetX, REST APIs, Firebase, and clean architecture.',
      },
      laravel: {
        name: 'Laravel',
        description: 'Developing robust backend systems, APIs, and web apps with Laravel, PHP, and Eloquent ORM.'
      },
      fullstack: {
        name: 'Full Stack',
        percent: '80%',
        description:
          'Developing backend systems with Laravel, MySQL, authentication, APIs, and modern frontend integration.',
      },
      uiux: {
        name: 'UI / UX Design',
        percent: '75%',
        description:
          'Designing clean, usable interfaces with strong hierarchy, spacing, accessibility, and motion principles.',
      },
      java: {
        name: 'Java Swing',
        percent: '70%',
        description:
          'Building desktop applications with Java Swing, JDBC, and database-driven architectures.',
      },
      unity: {
        name: 'C# & Unity',
        percent: '65%',
        description:
          'Creating 2D and 3D games with structured gameplay logic, physics, and performance awareness.',
      },
      htmlcss: {
        name: 'HTML & CSS',
        percent: '90%',
        description:
          'Crafting responsive layouts, animations, and modern UI components with clean, maintainable CSS.',
      },
    },

    /* ───── Projects ───── */
    projects: {
      title: 'Projects',
      library: { badge: 'Library System', tech: 'Java Swing + MySQL' },
      geoLocator: { badge: 'Geo Locator', tech: 'Java Swing' },
      caloriator: { badge: 'Caloriator', tech: 'Flutter + SqFlite + GetX' },
      taskly: { badge: 'TaskLy', tech: 'Flutter + SqFlite + GetX' },
      roboRampage: { badge: 'Robo Rampage', tech: 'Unity using C#' },
      smartMeter: { badge: 'Libyan Smart Meter Platform', tech: 'Flutter + Laravel + ESP32 + MySQL' },
      dayManagement: { badge: 'Libyan Smart Meter Platform', tech: 'Flutter + Laravel + ESP32 + MySQL' },
    },

    /* ───── Education ───── */
    education: {
      title: 'Education',
      college:
        'Faculty of Information Technology — Al-Jumail, University of Sabratha',
      degree: "Bachelor's Degree in Software Engineering",
      status: 'Graduated — GPA: 81%',
      details:
        "Graduated with a Bachelor's degree in Software Engineering from the Faculty of Information Technology, University of Sabratha (Al-Jumail campus). Academic focus on designing, developing, and optimizing software systems and mobile applications using modern technologies such as Flutter, PHP, MySQL, and GetX.",
      collegeLinkText: 'Faculty of IT — Al-Jumail',
      keyCoursesTitle: 'Key Courses:',
      course1: 'Object-Oriented Programming (OOP)',
      course2: 'Data Structures',
      course3: 'Design Patterns',
      course4: 'Advanced Java',
      course5: 'Database Systems',
      course6: 'Software Design and Architecture',
      course7: 'Internet Programming (HTML, CSS, JavaScript, PHP)',
      course8: 'Encryption Protocols and Algorithms',
    },

    /* ───── Contact ───── */
    contact: {
      title: 'Contact',
      titleHighlight: 'Me',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email',
      phonePlaceholder: 'Phone Number',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your Message...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successMsg: 'Thank you! Your message has been sent successfully.',
      errorMsg: 'Failed to send message. Please try again or email directly to nojaidnojaid@gmail.com.',
      validation: {
        required: 'This field is required.',
        nameInvalid: 'Please enter your full name (at least 2 words, e.g. Ahmed Ali).',
        emailInvalid: 'Please enter a valid email address (e.g. name@example.com).',
        phoneInvalid: 'Please enter a valid phone number (8 to 15 digits).',
        subjectTooShort: 'Subject must be at least 4 characters.',
        messageTooShort: 'Message must be at least 10 characters.',
      },
    },

    /* ───── Footer ───── */
    footer: {
      description:
        'Software Engineer focused on building modern, efficient applications.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      developedBy: 'Developed by',
      name: 'Nojaid Abdullah Issa',
      rights: '© 2025 All Rights Reserved.',
    },

    /* ───── Language switcher ───── */
    language: {
      code: 'EN',
      switchTo: 'العربية',
    },

    /* ───── Accessibility (aria-labels) ───── */
    a11y: {
      themeToggle: 'Toggle dark / light mode',
      langSwitch: 'Switch language',
      mobileMenu: 'Toggle navigation menu',
      scrollDown: 'Scroll down',
      viewProject: 'View project on GitHub',
      linkedin: 'LinkedIn profile',
      telegram: 'Telegram',
      github: 'GitHub profile',
      email: 'Send email',
      backToTop: 'Back to top',
    },
  };




  /* --- i18n\ar.js --- */
  const ar = {
    /* ───── التنقل ───── */
    nav: {
      about: 'عنّي',
      skills: 'المهارات',
      projects: 'المشاريع',
      education: 'التعليم',
      contact: 'تواصل',
    },

    /* ───── الواجهة الرئيسية ───── */
    hero: {
      name: 'نجيد عبدالله عيسى',
      title: 'مهندس برمجيات',
      description:
        'متخصص في بناء تطبيقات حديثة وقابلة للتوسع باستخدام Flutter و Laravel والهندسة المعمارية النظيفة. أركز على تقديم كود عالي الجودة وتجارب مستخدم سلسة وتصميم أنظمة فعّالة.',
      projectsBtn: 'مشاريعي',
      cvBtn: 'تحميل السيرة الذاتية',
    },

    /* ───── عنّي ───── */
    about: {
      title: 'عن',
      titleHighlight: 'نفسي',
      description:
        'أنا مهندس برمجيات حاصل على درجة البكالوريوس في هندسة البرمجيات من كلية تقنية المعلومات الجميل، جامعة صبراتة. متخصص في تطوير تطبيقات الموبايل باستخدام Flutter (مع GetX و REST APIs و Firebase و SqFlite) وتطوير الويب المتكامل باستخدام Laravel و PHP و MySQL. نهجي يرتكز على الهندسة المعمارية النظيفة والكود القابل للصيانة والحلول القابلة للتوسع. شغوف بتحويل الأفكار إلى تطبيقات جاهزة للإنتاج بتجربة مستخدم ممتازة.',
      stat1Label: 'التعليم',
      stat1Value: 'بكالوريوس هندسة البرمجيات',
      stat2Label: 'التخصص',
      stat2Value: 'تطوير الموبايل والويب',
      stat3Label: 'التقنيات الأساسية',
      stat3Value: 'Flutter · Laravel · MySQL',
    },

    /* ───── المهارات ───── */
    skills: {
      title: '',
      titleHighlight: 'مهاراتي',
      flutter: {
        name: 'Flutter',
        percent: '85%',
        description:
          'بناء تطبيقات موبايل قابلة للتوسع باستخدام Flutter و GetX و REST APIs و Firebase والهندسة المعمارية النظيفة.',
      },
      laravel: {
        name: 'Laravel',
        description: 'تطوير أنظمة واجهة خلفية قوية وتطبيقات ويب باستخدام Laravel و PHP و Eloquent ORM.'
      },
      fullstack: {
        name: 'Full Stack',
        percent: '80%',
        description:
          'تطوير أنظمة الواجهة الخلفية باستخدام Laravel و MySQL والمصادقة و APIs والتكامل الحديث للواجهة الأمامية.',
      },
      uiux: {
        name: 'تصميم UI / UX',
        percent: '75%',
        description:
          'تصميم واجهات نظيفة وسهلة الاستخدام مع تسلسل هرمي قوي وتباعد وإمكانية وصول ومبادئ حركة.',
      },
      java: {
        name: 'Java Swing',
        percent: '70%',
        description:
          'بناء تطبيقات سطح المكتب باستخدام Java Swing و JDBC وبنيات قواعد البيانات.',
      },
      unity: {
        name: 'C# & Unity',
        percent: '65%',
        description:
          'إنشاء ألعاب ثنائية وثلاثية الأبعاد مع منطق لعب منظم وفيزياء ووعي بالأداء.',
      },
      htmlcss: {
        name: 'HTML & CSS',
        percent: '90%',
        description:
          'تصميم تخطيطات متجاوبة ورسوم متحركة ومكونات واجهة مستخدم حديثة بأنماط CSS نظيفة وقابلة للصيانة.',
      },
    },

    /* ───── المشاريع ───── */
    projects: {
      title: 'المشاريع',
      library: { badge: 'نظام المكتبة', tech: 'Java Swing + MySQL' },
      geoLocator: { badge: 'محدد المواقع', tech: 'Java Swing' },
      caloriator: { badge: 'حاسبة السعرات', tech: 'Flutter + SqFlite + GetX' },
      taskly: { badge: 'TaskLy', tech: 'Flutter + SqFlite + GetX' },
      roboRampage: { badge: 'Robo Rampage', tech: 'Unity باستخدام C#' },
      smartMeter: { badge: 'منصة العداد الذكي الليبي', tech: 'Flutter + Laravel + ESP32 + MySQL' },
      dayManagement: { badge: 'منصة العداد الذكي الليبي', tech: 'Flutter + Laravel + ESP32 + MySQL' },
    },

    /* ───── التعليم ───── */
    education: {
      title: 'التعليم',
      college: 'كلية تقنية المعلومات — الجميل، جامعة صبراتة',
      degree: 'بكالوريوس هندسة البرمجيات',
      status: 'متخرج — المعدل: 81%',
      details:
        'متحصل على درجة البكالوريوس في هندسة البرمجيات من كلية تقنية المعلومات الجميل، جامعة صبراتة. التركيز الأكاديمي على تصميم وتطوير وتحسين أنظمة البرمجيات وتطبيقات الموبايل باستخدام تقنيات حديثة مثل Flutter و PHP و MySQL و GetX.',
      collegeLinkText: 'كلية تقنية المعلومات — الجميل',
      keyCoursesTitle: 'المقررات الرئيسية:',
      course1: 'البرمجة كائنية التوجه (OOP)',
      course2: 'هياكل البيانات',
      course3: 'أنماط التصميم',
      course4: 'Java المتقدمة',
      course5: 'أنظمة قواعد البيانات',
      course6: 'تصميم وهندسة البرمجيات',
      course7: 'برمجة الإنترنت (HTML, CSS, JavaScript, PHP)',
      course8: 'بروتوكولات وخوارزميات التشفير',
    },

    /* ───── التواصل ───── */
    contact: {
      title: 'تواصل',
      titleHighlight: 'معي',
      namePlaceholder: 'الاسم الكامل',
      emailPlaceholder: 'البريد الإلكتروني',
      phonePlaceholder: 'رقم الهاتف',
      subjectPlaceholder: 'الموضوع',
      messagePlaceholder: 'رسالتك...',
      sendBtn: 'إرسال الرسالة',
      sendingBtn: 'جارٍ الإرسال...',
      successMsg: 'شكراً لك! تم إرسال رسالتك بنجاح.',
      errorMsg: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو المراسلة مباشرة عبر nojaidnojaid@gmail.com.',
      validation: {
        required: 'هذا الحقل مطلوب.',
        nameInvalid: 'يرجى إدخال الاسم الكامل (كلمتان على الأقل، مثل: أحمد علي).',
        emailInvalid: 'يرجى إدخال بريد إلكتروني صالح (مثل: name@example.com).',
        phoneInvalid: 'يرجى إدخال رقم هاتف صالح (من 8 إلى 15 رقماً).',
        subjectTooShort: 'الموضوع يجب أن يحتوي على 4 أحرف على الأقل.',
        messageTooShort: 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل.',
      },
    },

    /* ───── التذييل ───── */
    footer: {
      description: 'مهندس برمجيات متخصص في بناء تطبيقات حديثة وفعّالة.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'تواصل',
      developedBy: 'تطوير',
      name: 'نجيد عبدالله عيسى',
      rights: '© 2025 جميع الحقوق محفوظة.',
    },

    /* ───── تبديل اللغة ───── */
    language: {
      code: 'AR',
      switchTo: 'English',
    },

    /* ───── إمكانية الوصول ───── */
    a11y: {
      themeToggle: 'تبديل الوضع الداكن / الفاتح',
      langSwitch: 'تبديل اللغة',
      mobileMenu: 'فتح / إغلاق القائمة',
      scrollDown: 'التمرير للأسفل',
      viewProject: 'عرض المشروع على GitHub',
      linkedin: 'ملف LinkedIn',
      telegram: 'تيليجرام',
      github: 'ملف GitHub',
      email: 'إرسال بريد إلكتروني',
      backToTop: 'العودة للأعلى',
    },
  };




  /* --- i18n\index.js --- */



  const translations = { en, ar };

  /**
   * Resolve a dot-notated key against a translation object.
   * Example: resolve('hero.name', en) → 'Nojaid Abdullah Issa'
   */
  function resolve(key, obj) {
    return key.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  /** Return the currently active language code. */
  function getLanguage() {
    return localStorage.getItem('lang') || 'en';
  }

  /** Translate a key for the current language. */
  function t(key) {
    const lang = getLanguage();
    return resolve(key, translations[lang]) ?? key;
  }

  /**
   * Walk the DOM and apply translations to every element
   * that carries a data-i18n* attribute.
   */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    /* Body font */
    document.body.style.fontFamily =
      lang === 'ar'
        ? "'Cairo', sans-serif"
        : "'Inter', sans-serif";

    /* textContent */
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = resolve(el.dataset.i18n, translations[lang]);
      if (val !== undefined) el.textContent = val;
    });

    /* placeholder */
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = resolve(el.dataset.i18nPlaceholder, translations[lang]);
      if (val !== undefined) el.placeholder = val;
    });

    /* aria-label */
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = resolve(el.dataset.i18nAria, translations[lang]);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    /* Phone input direction handling for RTL/LTR */
    const phoneInput = document.querySelector('.contact-form input[type="tel"]');
    if (phoneInput) {
      phoneInput.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    }

    /* Dispatch custom event so other modules can react */
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  /** Toggle between 'en' and 'ar'. */
  function toggleLanguage() {
    const next = getLanguage() === 'en' ? 'ar' : 'en';
    applyLanguage(next);
  }

  /** Initialise with saved preference or default. */
  function initLanguage() {
    applyLanguage(getLanguage());
  }


  /* --- theme.js --- */
  /**
   * Theme manager — dark / light mode with localStorage persistence.
   * Adds smooth transition class during theme change.
   */

  const STORAGE_KEY = 'theme';

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || getSystemPreference();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';

    /* Add transitioning class for smooth color change */
    document.body.classList.add('theme-transitioning');
    applyTheme(next);

    /* Remove after transition completes */
    setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, 500);
  }

  function initTheme() {
    applyTheme(getTheme());
  }


  /* --- hero-canvas.js --- */
  /**
   * Hero liquid / water canvas effect.
   *
   * Renders soft, semi-transparent gradient blobs that drift slowly
   * and respond gently to mouse position — creating a subtle
   * "liquid movement" feel without overwhelming the content.
   *
   * Respects `prefers-reduced-motion`.
   */

  class LiquidCanvas {
    constructor(canvas) {
      if (!canvas) return;

      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.blobs = [];
      this.mouse = { x: -9999, y: -9999 };
      this.raf = null;
      this.running = false;

      this.reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      this._onResize = this._resize.bind(this);
      this._onMouse = this._trackMouse.bind(this);
      this._onVisibility = this._handleVisibility.bind(this);

      this._resize();
      this._createBlobs();

      window.addEventListener('resize', this._onResize);
      document.addEventListener('visibilitychange', this._onVisibility);

      /* Let the hero section area handle mouse tracking */
      const heroSection = canvas.closest('.hero-section') || canvas.parentElement;
      heroSection.addEventListener('mousemove', this._onMouse);
      heroSection.addEventListener('mouseleave', () => {
        this.mouse.x = -9999;
        this.mouse.y = -9999;
      });

      if (!this.reducedMotion) {
        this._start();
      } else {
        /* Draw a single static frame so the canvas isn't blank */
        this._draw();
      }
    }

    /* ─── Private ─── */

    _resize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    _createBlobs() {
      const w = this.canvas.width || 1200;
      const h = this.canvas.height || 800;

      const palette = [
        'rgba(51, 156, 255, 0.07)',
        'rgba(102, 204, 255, 0.055)',
        'rgba(0, 51, 102, 0.045)',
        'rgba(51, 156, 255, 0.035)',
        'rgba(99, 179, 237, 0.04)',
      ];

      this.blobs = palette.map((color, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        baseRadius: 120 + Math.random() * 180,
        radius: 120 + Math.random() * 180,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        phase: (Math.PI * 2 * i) / palette.length,
        color,
      }));
    }

    _trackMouse(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    }

    _draw() {
      const { ctx, canvas, blobs, mouse } = this;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const blob of blobs) {
        /* Slow phase drift */
        blob.phase += 0.004;

        /* Base motion */
        blob.x += blob.vx + Math.sin(blob.phase) * 0.25;
        blob.y += blob.vy + Math.cos(blob.phase * 0.8) * 0.25;

        /* Subtle breathing */
        blob.radius =
          blob.baseRadius + Math.sin(blob.phase * 1.2) * 18;

        /* Gentle mouse attraction */
        if (mouse.x > 0) {
          const dx = mouse.x - blob.x;
          const dy = mouse.y - blob.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 400) {
            const force = 0.0015 * (1 - dist / 400);
            blob.x += dx * force;
            blob.y += dy * force;
          }
        }

        /* Wrap around */
        const r = blob.radius;
        if (blob.x < -r) blob.x = canvas.width + r;
        if (blob.x > canvas.width + r) blob.x = -r;
        if (blob.y < -r) blob.y = canvas.height + r;
        if (blob.y > canvas.height + r) blob.y = -r;

        /* Draw radial gradient blob */
        const grad = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius,
        );
        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    _loop() {
      if (!this.running) return;
      this._draw();
      this.raf = requestAnimationFrame(() => this._loop());
    }

    _start() {
      if (this.running) return;
      this.running = true;
      this._loop();
    }

    _stop() {
      this.running = false;
      if (this.raf) cancelAnimationFrame(this.raf);
    }

    _handleVisibility() {
      if (document.hidden) {
        this._stop();
      } else if (!this.reducedMotion) {
        this._start();
      }
    }

    /** Call when the component is destroyed. */
    destroy() {
      this._stop();
      window.removeEventListener('resize', this._onResize);
      document.removeEventListener('visibilitychange', this._onVisibility);
    }
  }


  /* --- navigation.js --- */
  /**
   * Navigation — mobile menu toggle, smooth-scroll, active highlighting, scroll spy.
   */

  let menuOpen = false;

  function initNavigation() {
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


  /* --- main.js --- */
  /* ═══════════════════════════════════════
     PORTFOLIO MAIN JAVASCRIPT
     Clean vanilla ES module with zero runtime build dependencies
     ═══════════════════════════════════════ */






  /* ═══════════════════════════════════════
     INITIALISATION
     ═══════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {
    /* 1. Theme (runs early to avoid flash) */
    initTheme();

    /* 2. Language / i18n */
    initLanguage();

    /* 3. Navigation */
    initNavigation();

    /* 4. Theme toggle button */
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        toggleTheme();
      });
    }


    /* 5. Language switch dropdown */
    const langDropdown = document.querySelector('.lang-dropdown');
    const langBtn = document.getElementById('langSwitchBtn');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langBtn && langDropdown) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
      });

      document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
      });

      langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
          const selectedLang = e.currentTarget.getAttribute('data-lang');
          if (selectedLang !== getLanguage()) {
            applyLanguage(selectedLang);
            updateLanguageButton();
          }
        });
      });
    }

    updateLanguageButton();

    /* 6. Hero liquid canvas */
    const heroCanvas = document.getElementById('heroCanvas');
    if (heroCanvas) {
      try {
        new LiquidCanvas(heroCanvas);
      } catch (e) {
        console.warn('Canvas init bypassed:', e);
      }
    }

    /* 7. Swiper for projects */
    initSwiper();

    /* 8. Scroll reveal animations (Custom IntersectionObserver replacing AOS) */
    initScrollReveal();

    /* 9. Skill progress bar animation on scroll */
    initSkillProgress();

    /* 10. Contact form handling */
    initContactForm();

    /* 11. Typewriter effect for Hero */
    initTypewriter();

    /* 12. Re-init on language change */
    window.addEventListener('languageChanged', () => {
      updateLanguageButton();
      initSwiper();
      initTypewriter();
    });
  });

  /* Run theme immediately on script execution */
  initTheme();

  /* ═══════════════════════════════════════
     LANGUAGE BUTTON UPDATE
     Shows AR when in English, EN when in Arabic
     ═══════════════════════════════════════ */
  function updateLanguageButton() {
    const codeEl = document.querySelector('.lang-switch-btn .lang-code');
    if (!codeEl) return;
    const current = getLanguage();
    codeEl.textContent = current === 'ar' ? 'AR' : 'EN';
  }

  /* ═══════════════════════════════════════
     TYPEWRITER EFFECT (Continuous Loop)
     ═══════════════════════════════════════ */
  let typewriterTimeout = null;

  function initTypewriter() {
    const nameEl = document.querySelector('.hero-name');
    if (!nameEl) return;

    if (typewriterTimeout) {
      clearTimeout(typewriterTimeout);
      typewriterTimeout = null;
    }

    const currentLang = getLanguage();
    const textToType = currentLang === 'ar' ? 'نجيد عبدالله عيسى' : 'Nojaid Abdullah Issa';

    let charIndex = 0;
    let isDeleting = false;
    nameEl.textContent = '';

    function tick() {
      // If language changed while ticking, stop this loop
      if (getLanguage() !== currentLang) return;

      if (!isDeleting) {
        charIndex++;
        nameEl.textContent = textToType.substring(0, charIndex);

        if (charIndex === textToType.length) {
          isDeleting = true;
          typewriterTimeout = setTimeout(tick, 2500);
          return;
        }
        typewriterTimeout = setTimeout(tick, 85);
      } else {
        charIndex--;
        nameEl.textContent = textToType.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          typewriterTimeout = setTimeout(tick, 600);
          return;
        }
        typewriterTimeout = setTimeout(tick, 45);
      }
    }

    typewriterTimeout = setTimeout(tick, 200);
  }

  /* ═══════════════════════════════════════
     SCROLL REVEAL (Reliable IntersectionObserver)
     Works 100% on GitHub Pages, Live Server & Vite
     ═══════════════════════════════════════ */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-stagger, .reveal-scale'
    );

    if (!revealElements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((el) => el.classList.add('active'));
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
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /* ═══════════════════════════════════════
     SKILL PROGRESS BARS
     Smooth width animation upon scrolling into view
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
        threshold: 0.25,
      }
    );

    fills.forEach((fill) => observer.observe(fill));
  }

  /* ═══════════════════════════════════════
     SWIPER SLIDER
     Supports both window.Swiper (CDN) & bundle
     ═══════════════════════════════════════ */
  let swiperInstance = null;

  function initSwiper() {
    const el = document.querySelector('.projects-wrapper');
    if (!el) return;

    const SwiperClass = typeof window !== 'undefined' && window.Swiper ? window.Swiper : null;
    if (!SwiperClass) {
      console.warn('Swiper library not loaded yet');
      return;
    }

    if (swiperInstance && typeof swiperInstance.destroy === 'function') {
      swiperInstance.destroy(true, true);
    }

    swiperInstance = new SwiperClass(el, {
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
        0: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
    });
  }

  /* ═══════════════════════════════════════
     CONTACT FORM HANDLING & VALIDATION
     ═══════════════════════════════════════ */
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const nameInput = form.querySelector('input[name="fullname"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const sendBtn = form.querySelector('.send-btn');
    const formMsg = form.querySelector('.form-message');

    // Initialise phone input direction matching current language
    if (phoneInput) {
      phoneInput.setAttribute('dir', getLanguage() === 'ar' ? 'rtl' : 'ltr');
    }

    const fields = [
      {
        input: nameInput,
        errorEl: form.querySelector('#fullnameError'),
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return 'required';
          const words = trimmed
            .split(/\s+/)
            .filter((w) => /[\p{L}\p{M}]/u.test(w) && w.length >= 2);
          if (words.length < 2) return 'nameInvalid';
          return null;
        },
      },
      {
        input: emailInput,
        errorEl: form.querySelector('#emailError'),
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return 'required';
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailRegex.test(trimmed)) return 'emailInvalid';
          return null;
        },
      },
      {
        input: phoneInput,
        errorEl: form.querySelector('#phoneError'),
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return 'required';
          // Normalize Arabic-Indic digits if entered
          const normalized = trimmed.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
          const digits = normalized.replace(/\D/g, '');

          if (digits.length < 8 || digits.length > 15) return 'phoneInvalid';
          if (/^(\d)\1+$/.test(digits)) return 'phoneInvalid';
          if ('0123456789012345'.includes(digits) || '9876543210987654'.includes(digits)) {
            return 'phoneInvalid';
          }

          const phoneRegex = /^[\+]?[(]?[0-9٠-٩]{1,4}[)]?[-\s\./0-9٠-٩]{6,15}$/;
          if (!phoneRegex.test(trimmed)) return 'phoneInvalid';

          return null;
        },
      },
      {
        input: subjectInput,
        errorEl: form.querySelector('#subjectError'),
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return 'required';
          if (trimmed.length < 4) return 'subjectTooShort';
          return null;
        },
      },
      {
        input: messageInput,
        errorEl: form.querySelector('#messageError'),
        validate: (val) => {
          const trimmed = val.trim();
          if (!trimmed) return 'required';
          if (trimmed.length < 10) return 'messageTooShort';
          return null;
        },
      },
    ];

    // Map tracking current active error key per input
    const fieldErrors = new Map();

    function validateField(item, isUserAction = false) {
      if (!item.input) return true;
      const errorKey = item.validate(item.input.value);

      if (errorKey) {
        fieldErrors.set(item.input, errorKey);
        if (isUserAction) {
          item.input.classList.add('is-invalid');
          item.input.classList.remove('is-valid');
          if (item.errorEl) {
            item.errorEl.textContent = t(`contact.validation.${errorKey}`);
            item.errorEl.classList.add('visible');
          }
        }
        return false;
      } else {
        fieldErrors.delete(item.input);
        item.input.classList.remove('is-invalid');
        if (item.input.value.trim().length > 0) {
          item.input.classList.add('is-valid');
        } else {
          item.input.classList.remove('is-valid');
        }
        if (item.errorEl) {
          item.errorEl.textContent = '';
          item.errorEl.classList.remove('visible');
        }
        return true;
      }
    }

    // Manage success/error message timeout
    let formMsgTimeout = null;

    function clearFormMessage() {
      if (formMsgTimeout) {
        clearTimeout(formMsgTimeout);
        formMsgTimeout = null;
      }
      if (formMsg) {
        formMsg.style.display = 'none';
        formMsg.className = 'form-message';
        formMsg.textContent = '';
      }
    }

    // Live input and blur listeners
    fields.forEach((item) => {
      if (!item.input) return;

      item.input.addEventListener('blur', () => {
        validateField(item, true);
      });

      item.input.addEventListener('input', () => {
        // If success message was shown and user begins typing again, remove it
        if (formMsg && formMsg.classList.contains('success')) {
          clearFormMessage();
        }

        if (
          item.input.classList.contains('is-invalid') ||
          item.input.classList.contains('is-valid')
        ) {
          validateField(item, true);
        }
      });
    });

    // Re-translate active error messages & form status upon language switch
    window.addEventListener('languageChanged', (e) => {
      const currentLang = e.detail?.lang || getLanguage();
      if (phoneInput) {
        phoneInput.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
      }
      fields.forEach((item) => {
        const errorKey = fieldErrors.get(item.input);
        if (errorKey && item.errorEl && item.input.classList.contains('is-invalid')) {
          item.errorEl.textContent = t(`contact.validation.${errorKey}`);
        }
      });

      // Update success / error message translation if currently visible
      if (formMsg && formMsg.style.display !== 'none' && formMsg.textContent) {
        if (formMsg.classList.contains('success')) {
          formMsg.textContent = t('contact.successMsg');
        } else if (formMsg.classList.contains('error')) {
          formMsg.textContent = t('contact.errorMsg');
        }
      }
    });

    // Form submission with real email sending to nojaidnojaid@gmail.com
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let formValid = true;
      let firstInvalid = null;

      fields.forEach((item) => {
        const ok = validateField(item, true);
        if (!ok) {
          formValid = false;
          if (!firstInvalid) firstInvalid = item.input;
        }
      });

      if (!formValid) {
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Clear any prior message
      clearFormMessage();

      // Set sending UI state
      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerHTML = `<span class="spinner" aria-hidden="true"></span>${t('contact.sendingBtn')}`;
      }

      const portfolioUrl = 'https://nojaid-ad.github.io/Portfolio/';
      const payload = {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        phone: phoneInput ? phoneInput.value.trim() : '',
        subject: subjectInput ? subjectInput.value.trim() : '',
        message: messageInput ? messageInput.value.trim() : '',
        portfolio_url: portfolioUrl,
        portfolio_website: portfolioUrl,
        _url: portfolioUrl,
        _next: portfolioUrl,
        _subject: `New Portfolio Message: ${subjectInput ? subjectInput.value.trim() : 'Contact'} (${nameInput ? nameInput.value.trim() : ''})`,
        _template: 'table',
        _captcha: 'false',
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/nojaidnojaid@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          referrerPolicy: 'unsafe-url',
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => null);

        if (response.ok && (data?.success === 'true' || data?.success === true || response.status < 400)) {
          if (formMsg) {
            formMsg.textContent = t('contact.successMsg');
            formMsg.className = 'form-message success';
            formMsg.style.display = 'block';

            // Auto-hide success message after 5 seconds
            formMsgTimeout = setTimeout(() => {
              clearFormMessage();
            }, 5000);
          }
          form.reset();
          fieldErrors.clear();
          fields.forEach((item) => {
            if (item.input) {
              item.input.classList.remove('is-valid', 'is-invalid');
            }
            if (item.errorEl) {
              item.errorEl.textContent = '';
              item.errorEl.classList.remove('visible');
            }
          });
          if (phoneInput) {
            phoneInput.setAttribute('dir', getLanguage() === 'ar' ? 'rtl' : 'ltr');
          }
        } else {
          throw new Error(data?.message || 'Form submission failed');
        }
      } catch (err) {
        console.error('Contact form submission error:', err);
        if (formMsg) {
          formMsg.textContent = t('contact.errorMsg');
          formMsg.className = 'form-message error';
          formMsg.style.display = 'block';
        }
      } finally {
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = t('contact.sendBtn');
        }
      }
    });
  }


})();