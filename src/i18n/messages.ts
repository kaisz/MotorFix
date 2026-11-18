export const locales = ["fr", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

const fr = {
  meta: {
    title: "MotorFix — réparation de moteurs électriques",
    description:
      "MotorFix répare les moteurs électriques : appareils ménagers, scooters, trottinettes et véhicules électriques. Activité en cours de développement. Contact WhatsApp pour envoyer des photos et obtenir une estimation.",
  },
  skip: "Aller au contenu",
  languageLabel: "Choisir la langue",
  themeToggle: "Changer le thème",
  brand: { tagline: "Moteurs électriques" },
  nav: {
    menu: "Menu",
    home: "Accueil",
    motors: "Moteurs",
    maintenance: "Maintenance",
    payment: "Paiement",
    whatsapp: "WhatsApp",
  },
  banner: "Site en cours de construction — ouverture progressive de l’atelier.",
  hero: {
    kicker: "Atelier de moteurs électriques",
    title: "MotorFix remet les moteurs en mouvement.",
    lead: "L'activité est en cours de développement. Le site présente déjà les familles de moteurs que l’atelier couvre, de la maison jusqu’au véhicule électrique.",
    browse: "Parcourir les moteurs",
    photos: "Envoyer des photos",
    cardTitle: "Quatre familles, un même geste",
    cardText: "Appareils ménagers, scooters électriques, trottinettes et véhicules électriques.",
  },
  motors: {
    kicker: "Familles de moteurs",
    heading: "Choisissez le type de moteur",
    intro:
      "Filtrez les catégories. Chaque fiche indique ce qu’il est utile de photographier pour une estimation.",
    statusAll: "Toutes les familles sont affichées.",
    statusOne: "{label} : fiche affichée.",
    all: "Tous",
    filterLabel: "Filtrer les types de moteurs",
    items: {
      menager: {
        label: "Appareils ménagers",
        kicker: "Maison",
        text: "Lave-linge, sèche-linge, lave-vaisselle, aspirateur, VMC, pompe ou petit moteur d’atelier : envoyez des photos de la plaque et de la panne.",
        points: ["Plaque signalétique", "Bruit, blocage, échauffement", "Estimation avant déplacement"],
      },
      scooter: {
        label: "Scooters électriques",
        kicker: "Deux-roues",
        text: "Moteur de traction d’un scooter électrique : perte de puissance, à-coups, bruit métallique ou connectique abîmée.",
        points: ["Moteur de traction", "Faisceau et connecteurs", "Photos du symptôme"],
      },
      trottinette: {
        label: "Trottinettes",
        kicker: "Mobilité",
        text: "Trottinettes électriques : moteur-roue, surchauffe, coupure en charge ou jeu anormal dans la roue motrice.",
        points: ["Moteur-roue", "Surchauffe et coupures", "Vue du câblage"],
      },
      vehicule: {
        label: "Véhicules électriques",
        kicker: "Véhicule",
        text: "Voitures et petits utilitaires électriques : moteurs de traction et moteurs auxiliaires. L’estimation part des photos, avant toute intervention.",
        points: ["Traction et auxiliaires", "Contexte de la panne", "Pas d’intervention à l’aveugle"],
      },
    },
  },
  maintenance: {
    kicker: "Maintenance",
    heading: "Un relais, le temps de l’ouverture",
    text: "Nous disposons déjà de certains contacts pour assurer la maintenance, contre une commission. Le suivi se précise avec les photos du moteur, avant d’organiser la suite.",
  },
  payment: {
    kicker: "Paiement",
    heading: "Bientôt disponible",
    text: "Le moyen de paiement sera choisi plus tard. Aucun règlement n’est possible sur ce site pour le moment : cette section reste un emplacement, le temps de trancher.",
  },
  contact: {
    kicker: "WhatsApp",
    heading: "Envoyez vos photos sur WhatsApp : nous estimons avant tout appel.",
    lead: "Photographiez le moteur, la plaque et le problème. MotorFix prépare une estimation à partir de ces images, avant d’appeler — ensuite, c’est plus compliqué.",
    note: "Un seul bouton, le temps d’ajouter le vrai numéro WhatsApp.",
    button: "Envoyer mes photos sur WhatsApp",
    disclaimer:
      "Le support ne concerne pas tous les moteurs. Envoyez d'abord des photos pour que nous puissions l'étudier, avant tout engagement.",
  },
  footer: { line: "Réparation de moteurs électriques · en cours de construction" },
};

export const messages = {
  fr,
  en: {
    meta: {
      title: "MotorFix — electric motor repair",
      description:
        "MotorFix repairs electric motors: household appliances, electric scooters, e-scooters, and electric vehicles. The business is still being developed. Contact us on WhatsApp to send photos and get an estimate.",
    },
    skip: "Skip to content",
    languageLabel: "Choose language",
    themeToggle: "Switch theme",
    brand: { tagline: "Electric motors" },
    nav: {
      menu: "Menu",
      home: "Home",
      motors: "Motors",
      maintenance: "Maintenance",
      payment: "Payment",
      whatsapp: "WhatsApp",
    },
    banner: "Site under construction — the workshop is opening in stages.",
    hero: {
      kicker: "Electric motor workshop",
      title: "MotorFix gets motors moving again.",
      lead: "The business is still being developed. The site already shows the motor families the workshop covers, from the home to the electric vehicle.",
      browse: "Browse motors",
      photos: "Send photos",
      cardTitle: "Four families, the same craft",
      cardText: "Household appliances, electric scooters, e-scooters, and electric vehicles.",
    },
    motors: {
      kicker: "Motor families",
      heading: "Choose the motor type",
      intro: "Filter the categories. Each card shows what is useful to photograph for an estimate.",
      statusAll: "All families are shown.",
      statusOne: "{label}: card shown.",
      all: "All",
      filterLabel: "Filter motor types",
      items: {
        menager: {
          label: "Household appliances",
          kicker: "Home",
          text: "Washing machines, dryers, dishwashers, vacuum cleaners, ventilation units, pumps, or small workshop motors: send photos of the nameplate and the fault.",
          points: ["Nameplate", "Noise, jamming, overheating", "Estimate before a visit"],
        },
        scooter: {
          label: "Electric scooters",
          kicker: "Two-wheelers",
          text: "Traction motor of an electric scooter: loss of power, jerking, metallic noise, or damaged connectors.",
          points: ["Traction motor", "Harness and connectors", "Photos of the symptom"],
        },
        trottinette: {
          label: "E-scooters",
          kicker: "Mobility",
          text: "Electric e-scooters: hub motor, overheating, cut-out under load, or unusual play in the drive wheel.",
          points: ["Hub motor", "Overheating and cut-outs", "View of the wiring"],
        },
        vehicule: {
          label: "Electric vehicles",
          kicker: "Vehicle",
          text: "Electric cars and small electric vans: traction motors and auxiliary motors. The estimate starts from the photos, before any work.",
          points: ["Traction and auxiliaries", "Context of the fault", "No work done blind"],
        },
      },
    },
    maintenance: {
      kicker: "Maintenance",
      heading: "A handoff while the workshop opens",
      text: "We already have some contacts who can handle maintenance, for a commission. The next step becomes clear with photos of the motor, before anything else is arranged.",
    },
    payment: {
      kicker: "Payment",
      heading: "Coming soon",
      text: "The payment method will be chosen later. No payment can be made on this site for the moment: this section is only a placeholder until that decision is made.",
    },
    contact: {
      kicker: "WhatsApp",
      heading: "Send your photos on WhatsApp: we estimate before any call.",
      lead: "Photograph the motor, the nameplate, and the problem. MotorFix prepares an estimate from these pictures before calling — after that, it gets more complicated.",
      note: "A single button, until the real WhatsApp number is added.",
      button: "Send my photos on WhatsApp",
      disclaimer:
        "Support does not cover every motor. Send photos first so we can look into it, before any commitment.",
    },
    footer: { line: "Electric motor repair · under construction" },
  },
  ar: {
    meta: {
      title: "MotorFix — إصلاح المحركات الكهربائية",
      description:
        "يصلح MotorFix المحركات الكهربائية: الأجهزة المنزلية، والدراجات البخارية الكهربائية، والسكوترات، والمركبات الكهربائية. النشاط قيد التطوير. التواصل عبر واتساب لإرسال الصور والحصول على تقدير.",
    },
    skip: "تخطي إلى المحتوى",
    languageLabel: "اختيار اللغة",
    themeToggle: "تبديل المظهر",
    brand: { tagline: "محركات كهربائية" },
    nav: {
      menu: "القائمة",
      home: "الرئيسية",
      motors: "المحركات",
      maintenance: "الصيانة",
      payment: "الدفع",
      whatsapp: "واتساب",
    },
    banner: "الموقع قيد الإنشاء — افتتاح الورشة يتم تدريجيًا.",
    hero: {
      kicker: "ورشة المحركات الكهربائية",
      title: "MotorFix يعيد المحركات إلى الحركة.",
      lead: "النشاط قيد التطوير. يعرض الموقع بالفعل فئات المحركات التي تغطيها الورشة، من المنزل حتى المركبة الكهربائية.",
      browse: "تصفح المحركات",
      photos: "إرسال الصور",
      cardTitle: "أربع فئات، والعمل نفسه",
      cardText: "الأجهزة المنزلية، والدراجات البخارية الكهربائية، والسكوترات، والمركبات الكهربائية.",
    },
    motors: {
      kicker: "فئات المحركات",
      heading: "اختر نوع المحرك",
      intro: "صفِّ الفئات. توضح كل بطاقة ما يفيد تصويره من أجل التقدير.",
      statusAll: "تُعرض جميع الفئات.",
      statusOne: "{label}: البطاقة معروضة.",
      all: "الكل",
      filterLabel: "تصفية أنواع المحركات",
      items: {
        menager: {
          label: "الأجهزة المنزلية",
          kicker: "المنزل",
          text: "غسالة، نشّافة، غسالة صحون، مكنسة كهربائية، وحدة تهوية، مضخة، أو محرك ورشة صغير: أرسل صور لوحة البيانات وصور العطل.",
          points: ["لوحة البيانات", "ضجيج أو انحباس أو سخونة", "تقدير قبل الزيارة"],
        },
        scooter: {
          label: "الدراجات البخارية الكهربائية",
          kicker: "ذات العجلتين",
          text: "محرك جرّ دراجة بخارية كهربائية: فقدان القدرة، أو نفضات، أو ضجيج معدني، أو موصلات تالفة.",
          points: ["محرك الجر", "الضفيرة والموصلات", "صور العَرَض"],
        },
        trottinette: {
          label: "السكوترات",
          kicker: "التنقل",
          text: "السكوترات الكهربائية: محرك العجلة، أو سخونة زائدة، أو انقطاع تحت الحمل، أو خلخلة غير طبيعية في عجلة الدفع.",
          points: ["محرك العجلة", "سخونة وانقطاع", "صورة الأسلاك"],
        },
        vehicule: {
          label: "المركبات الكهربائية",
          kicker: "المركبة",
          text: "السيارات والمركبات النفعية الصغيرة الكهربائية: محركات الجر والمحركات المساعدة. يبدأ التقدير من الصور، قبل أي تدخل.",
          points: ["الجر والمحركات المساعدة", "سياق العطل", "لا تدخل من دون معاينة"],
        },
      },
    },
    maintenance: {
      kicker: "الصيانة",
      heading: "حلقة وصل إلى حين الافتتاح",
      text: "لدينا بالفعل بعض جهات الاتصال لتأمين الصيانة، مقابل عمولة. تتضح المتابعة مع صور المحرك، قبل ترتيب ما يلي.",
    },
    payment: {
      kicker: "الدفع",
      heading: "قريبًا",
      text: "ستُختار وسيلة الدفع لاحقًا. لا يمكن إجراء أي دفع على هذا الموقع حاليًا: يبقى هذا القسم مكانًا محجوزًا إلى حين الحسم.",
    },
    contact: {
      kicker: "واتساب",
      heading: "أرسل صورك عبر واتساب: نُعدّ التقدير قبل أي اتصال.",
      lead: "صوّر المحرك ولوحة البيانات والمشكلة. يُعد MotorFix تقديرًا من هذه الصور قبل الاتصال — بعد ذلك يصبح الأمر أكثر تعقيدًا.",
      note: "زر واحد، إلى حين إضافة رقم واتساب الحقيقي.",
      button: "إرسال صوري عبر واتساب",
      disclaimer: "لا يشمل الدعم جميع المحركات. أرسل الصور أولًا حتى نتمكن من دراستها، قبل أي التزام.",
    },
    footer: { line: "إصلاح المحركات الكهربائية · قيد الإنشاء" },
  },
} as const;

export type Catalog = typeof messages.fr;
