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
      'مهندس برمجيات متخصص في بناء تطبيقات حديثة وقابلة للتوسع باستخدام Flutter و Laravel والهندسة المعمارية النظيفة. أركز على تقديم كود عالي الجودة وتجارب مستخدم سلسة وتصميم أنظمة فعّالة.',
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
    dayManagement: { badge: 'إدارة اليوم', tech: 'Flutter + GetX + PHP + MySQL' },
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
    successMsg: 'تم إرسال الرسالة بنجاح!',
    errorMsg: 'يرجى ملء جميع الحقول بشكل صحيح.',
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

export default ar;
