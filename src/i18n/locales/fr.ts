export default {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    education: 'Formation',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Nken Mandeng Ange Arsène',
    role: 'Ingénieur Full-Stack',
    subtitle: 'Expert Laravel + React.js + Automation',
    description: 'Ingénieur Full-Stack avec plus de 3 ans d\'expérience dans la création d\'applications évolutives Laravel + Inertia.js + React.js. Fort en architecture backend, intégrations API (MTN MoMo API, WhatsApp API), et interfaces frontend dynamiques.',
    passion: 'Passionné par l\'automatisation, les outils de productivité et l\'itération rapide. Locuteur natif français avec une maîtrise professionnelle de l\'anglais.',
    cta: 'Construisons quelque chose d\'extraordinaire ensemble',
  },
  about: {
    title: 'À Propos de Moi',
    description: 'Je suis un Ingénieur Full-Stack dévoué qui combine l\'expertise technique avec la résolution créative de problèmes pour livrer des solutions web exceptionnelles.',
    highlights: [
      'Mentalité orientée produit avec un fort sens UX/UI',
      'Développeur indépendant et débrouillard',
      'Expert en automatisation et outils de productivité',
      'Passionné par l\'itération rapide et les solutions évolutives',
    ],
  },
  skills: {
    title: 'Compétences Techniques',
    backend: {
      title: 'Développement Backend',
      skills: ['Laravel 11+', 'PHP', 'MySQL', 'Files d\'attente', 'Notifications', 'Eloquent ORM', 'APIs REST'],
    },
    frontend: {
      title: 'Développement Frontend',
      skills: ['React.js', 'Inertia.js', 'TailwindCSS', 'HTML5', 'CSS3', 'WordPress', 'Elementor', 'Design Responsive', 'Zustand'],
    },
    automation: {
      title: 'Automatisation & Intégration',
      skills: ['API WhatsApp', 'Automatisation Excel', 'Webhooks', 'Intégration Google Sheets', 'API MTN MoMo'],
    },
    tools: {
      title: 'Outils & Méthodologies',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'WooCommerce'],
    },
  },
  experience: {
    title: 'Expérience Professionnelle',
    allready: {
      company: 'AllReady237',
      position: 'Développeur Backend & Full-Stack',
      duration: '2023 - Présent',
      location: 'Douala, Cameroun',
      achievements: [
        "J'ai créé un site Web de commerce électronique multifournisseur avec WordPress WooCommerce, WCFM, WP Bakery Page Builder et le thème Woodmart",
        "Développé des packages PHP évolutifs pour l'automatisation du marketing WhatsApp, la passerelle de paiement MTN MoMo, etc.",
        "Développé une passerelle de paiement WooCommerce supportant MTN Mobile Money et Orange Money via l'API Smobilpay S3P avec webhooks automatisés et notifications bilingues",
        "Conçu des interfaces utilisateur réactives et une expérience utilisateur intuitive pour améliorer l'engagement des utilisateurs",
        'Automatisation des flux de travail (Vérificateur Excel WhatsApp, Automatisation Prospecteur)',
        'Livraison de projets de bout en bout avec supervision minimale',
      ],
    },
    bjft: {
      company: 'BJFT Academy',
      position: 'Stagiaire Développeur Web',
      duration: '2022',
      location: 'Douala, Cameroun',
      achievements: [
        'Assistance dans la création de sites web WordPress responsives',
        'Contribution aux flux de travail Agile et à la documentation',
        'Participation aux projets de recherche et développement',
      ],
    },
  },
  education: {
    title: 'Formation',
    hnd: {
      degree: 'HND en Génie Logiciel',
      school: 'I.U.G-I.S.T.A, Cameroun',
      year: '2024',
    },
    baccalaureate: {
      degree: 'GCE Advanced Level en Sciences & Mathématiques',
      school: 'G.B.H.S Génie Militaire, Cameroun',
      year: '2021',
    },
  },
  projects: {
    title: 'Projets Clés',
    viewCode: 'Voir le Code',
    viewLive: 'Voir en Direct',
    projects: [
      {
        name: 'Package d\'Automatisation Marketing WhatsApp',
        description: "J'ai développé un package PHP qui récupère automatiquement les données client à partir de Google Sheets, génère des messages de prospection personnalisés à l'aide des détails du produit à partir d'un fichier Excel et les envoie aux clients, le tout orchestré via des tâches cron planifiées",
        tech: ['PHP', 'API WhatsApp', 'Webhooks'],
      },
      {
        name: "Passerelle de Paiement WooCommerce Smobilpay",
        description: "Plugin de passerelle de paiement permettant les transactions MTN MoMo et Orange Money pour les commerçants camerounais avec webhooks automatisés et notifications bilingues",
        tech: ["PHP", "Développement de Plugin WordPress", "API WooCommerce", "Intégration de Passerelle de Paiement", "API REST"]
      },
      {
        name: "Optimum Fly - le site web d'un Services de visas et d'immigration",
        description: "Site web professionnel multilingue (français/anglais) pour Optimum Fly, une société camerounaise d'assistance en matière de visas et d'immigration. Développé avec React, TypeScript et Tailwind CSS.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "i18n"]
      },
      {
        name: 'Système de Gestion des Tâches',
        description: "J'ai créé une application Laravel + React avec une fonctionnalité glisser-déposer et une gestion d'état Zustand, dotée d'une interface utilisateur en mode sombre et d'une UX intuitive pour gérer efficacement les tâches et les projets.",
        tech: ['Laravel', 'React.js', 'Zustand', 'Inertia.js'],
      },
      {
        name: 'Hub de Campagne WhatsApp',
        description: "Outil d'automatisation du marketing et des médias sociaux WhatsApp qui permet aux utilisateurs d'envoyer des messages WhatsApp en masse à des contacts préenregistrés, de les gérer efficacement et de planifier des campagnes de marketing et de médias sociaux générées par l'IA.",
        tech: ['Laravel', 'API WhatsApp', 'MySQL'],
      },
      {
        name: 'Passerelle de Paiement MTN MoMo',
        description: 'Intégration PHP pour paiements mobiles sécurisés utilisant l\'API MTN Mobile Money',
        tech: ['PHP', 'API MTN MoMo', 'Traitement des Paiements'],
      },
      {
        name: 'Framework PHP MVC Personnalisé',
        description: 'Framework MVC léger construit à partir de zéro pour un développement rapide',
        tech: ['PHP', 'Architecture MVC', 'POO'],
      },
      {
        name: 'Vérificateur Excel WhatsApp',
        description: 'Outil qui valide les numéros de téléphone et les trie pour les campagnes WhatsApp',
        tech: ['PHP', 'Traitement Excel', 'API WhatsApp'],
      },
    ],
    websites: [
      {
        name: 'AllReady237',
        url: 'https://allready.cm',
        description: "Site e-commerce multi-vendeurs d'AllReady, proposant une large gamme de produits disponibles à l'achat en ligne au Cameroun, avec livraison à domicile à Douala et Yaoundé.",
      },
      {
        name: 'Optimum Fly - le site web d\'un Services de visas et d\'immigration',
        url: 'https://optimumfly.com',
        description: "Site web professionnel multilingue (français/anglais) pour Optimum Fly, une société camerounaise d'assistance en matière de visas et d'immigration.",
      },
      {
        name: 'Portfolio personnel de Franky Kuidou',
        url: 'https://franky.allready.cm',
        description: "Portfolio personnel de Franky Kuidou, PDG d'Allready237 - une plateforme de commerce électronique multi-fournisseurs leader au Cameroun offrant une large gamme de produits avec livraison à domicile à Douala et Yaoundé.",
      },
      {
        name: 'Arno But',
        url: 'https://arno-but.allready.cm',
        description: 'Plateforme e-commerce innovante offrant des solutions d’affaires personnalisées pour optimiser vos ventes en ligne.'
      },
      {
        name: 'Investissement AllReady',
        url: 'https://investir.allready.cm',
        description: "La plateforme d'investissement d'AllReady.cm, la principale place de marché e-commerce multi-vendeurs du Cameroun, met en relation les investisseurs avec des opportunités de croissance tout en soutenant une plateforme qui vend presque tout localement, avec une livraison à domicile fiable à Douala et Yaoundé.",
      },
      {
        name: 'VendorHub AllReady',
        url: 'https://vendorhub.allready.cm',
        description: "VendorHub.AllReady.cm est le centre de ressources dédié aux fournisseurs AllReady, fournissant tout le matériel d'apprentissage essentiel et les conseils nécessaires pour démarrer et développer leur ventes sur www.allready.cm",
      },
    ],
  },
  contact: {
    title: 'Prenons Contact',
    subtitle: 'Prêt à collaborer sur votre prochain projet ?',
    description: 'Je suis toujours intéressé à discuter de nouvelles opportunités, de projets innovants et de moyens d\'aider à donner vie à vos idées grâce à la technologie.',
    email: 'nkenmandenga@gmail.com',
    phone: '+237 699 512 438',
    cta: 'Commençons une conversation',
  },
  theme: {
    light: 'Clair',
    dark: 'Sombre',
  },
};