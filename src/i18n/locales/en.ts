export default {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Hi, I\'m',
    name: 'Nken Mandeng Ange Arsène',
    role: 'Full-Stack Engineer',
    subtitle: 'WordPress + Laravel + React.js + Automation Expert',
    description: 'Full-Stack Engineer with 3+ years of experience building scalable WordPress and Laravel + Inertia.js + React.js applications. Strong in backend architecture, API integrations (MTN MoMo API, WhatsApp API), and dynamic frontend UIs.',
    passion: 'Passionate about automation, productivity tools, and rapid iteration. Native French speaker with professional English proficiency.',
    cta: 'Let\'s build something amazing together',
  },
  about: {
    title: 'About Me',
    description: 'I\'m a dedicated Full-Stack Engineer who combines technical expertise with creative problem-solving to deliver exceptional web solutions.',
    highlights: [
      'Product-oriented mindset with strong UX/UI sense',
      'Independent and resourceful developer',
      'Expert in automation and productivity tools',
      'Passionate about rapid iteration and scalable solutions',
    ],
  },
  skills: {
    title: 'Technical Skills',
    backend: {
      title: 'Backend Development',
      skills: ['Laravel 11+', 'PHP', 'MySQL', 'Queues', 'Notifications', 'Eloquent ORM', 'REST APIs'],
    },
    frontend: {
      title: 'Frontend Development',
      skills: ['React.js', 'Inertia.js', 'TailwindCSS', 'HTML5', 'CSS3', 'WordPress', 'Elementor', 'Responsive Design', 'Zustand'],
    },
    automation: {
      title: 'Automation & Integration',
      skills: ['WhatsApp API', 'Excel Automation', 'Webhooks', 'Google Sheets Integration', 'MTN MoMo API'],
    },
    tools: {
      title: 'Tools & Methodologies',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'WooCommerce'],
    },
  },
  experience: {
    title: 'Professional Experience',
    allready: {
      company: 'AllReady237',
      position: 'Backend & Full-Stack Developer',
      duration: '2023 - Present',
      location: 'Douala, Cameroon',
      achievements: [
        'Built a multi-vendor e-commerce website with WordPress, WooCommerce, WCFM, WP Bakery Page Builder and Woodmart theme',
        'Developed scalable PHP packages for WhatsApp marketing automation, MTN MoMo payment gateway etc.',
        "Integrated a WooCommerce payment gateway with MTN Mobile Money and Orange Money support via Smobilpay S3P API including webhooks and bilingual notifications",
        'Designed responsive UIs and intuitive UX to enhance user engagement',
        'Automated workflows (Excel WhatsApp Verifier, Prospector Automation)',
        'Delivered projects end-to-end with minimal supervision',
      ],
    },
    bjft: {
      company: 'BJFT Academy',
      position: 'Web Developer Intern',
      duration: '2022',
      location: 'Douala, Cameroon',
      achievements: [
        'Assisted in WordPress-based responsive websites',
        'Contributed to Agile workflows and documentation',
        'Participated in research and development projects',
      ],
    },
  },
  education: {
    title: 'Education',
    hnd: {
      degree: 'HND in Software Engineering',
      school: 'I.U.G-I.S.T.A, Cameroon',
      year: '2024',
    },
    baccalaureate: {
      degree: 'GCE Advanced Level in Science & Mathematics',
      school: 'G.B.H.S Génie Militaire, Cameroon',
      year: '2021',
    },
  },
  projects: {
    title: 'Key Projects',
    viewCode: 'View Code',
    viewLive: 'View Live',
    projects: [
      {
        name: 'WhatsApp Marketing Automation Package',
        description: 'Developed a PHP package that automatically fetches customer data from Google Sheets, generates personalized prospecting messages using product details from an Excel file, and sends them to customers — all orchestrated through scheduled cron jobs.',
        tech: ['PHP', 'WhatsApp API', 'Webhooks'],
      },
      {
        name: "WooCommerce Smobilpay Gateway",
        description: "Payment gateway plugin enabling MTN MoMo and Orange Money transactions for Cameroon merchants with automated webhooks and bilingual notifications",
        tech: ["PHP", "WordPress Plugin Development", "WooCommerce API", "Payment Gateway Integration", "REST API"]
      },
      {
        name: "Optimum Fly - Visa & Immigration Services Web Site",
        description: "A professional multilingual (French/English) website for Optimum Fly, a Cameroon-based visa and immigration assistance service. Built with React, TypeScript, and Tailwind CSS.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "i18n"]
      },
      {
        name: 'Task Management System',
        description: 'Built a Laravel + React application with drag-and-drop functionality and Zustand state management, featuring a dark mode UI and an intuitive UX for efficiently managing tasks and projects.',
        tech: ['Laravel', 'React.js', 'Zustand', 'Inertia.js'],
      },
      {
        name: 'WhatsApp Campaign Hub',
        description: 'WhatsApp marketing and social media automation tool that enables users to send bulk WhatsApp messages to pre-registered contacts, manage them efficiently, and schedule AI-generated marketing and social media campaigns.',
        tech: ['Laravel', 'WhatsApp API', 'MySQL'],
      },
      {
        name: 'MTN MoMo Payment Gateway',
        description: 'PHP integration for secure mobile payments using MTN Mobile Money API',
        tech: ['PHP', 'MTN MoMo API', 'Payment Processing'],
      },
      {
        name: 'Custom PHP MVC Framework',
        description: 'Lightweight MVC framework built from scratch for rapid development',
        tech: ['PHP', 'MVC Architecture', 'OOP'],
      },
      {
        name: 'Excel WhatsApp Verifier',
        description: 'Tool that validates phone numbers and sorts them for WhatsApp campaigns',
        tech: ['PHP', 'Excel Processing', 'WhatsApp API'],
      },
    ],
    websites: [
      {
        name: 'AllReady237',
        url: 'https://allready.cm',
        description: "AllReady's multi-vendor e-commerce site, offering a wide range of products available for purchase online in Cameroon, with home delivery in Douala and Yaoundé.",
      },
      {
        name: 'Optimum Fly - Visa & Immigration Services Web Site',
        url: 'https://optimumfly.com',
        description: "A professional multilingual (French/English) website for Optimum Fly, a Cameroon-based visa and immigration assistance service.",
      },
      {
        name: 'Franky Kuidou Personal Portfolio',
        url: 'https://franky.allready.cm',
        description: 'Personal portfolio of Franky Kuidou, CEO of Allready237 – a leading multi-vendor e-commerce platform in Cameroon offering a wide range of products with home delivery in Douala and Yaoundé.',
      },
      {
        name: 'Arno But',
        url: 'https://arno-but.allready.cm',
        description: 'Innovative e-commerce platform offering personalized business solutions to optimize your online sales.'
      },
      {
        name: 'Investment AllReady',
        url: 'https://investir.allready.cm',
        description: "The investment platform of AllReady.cm, Cameroon’s leading multi-vendor e-commerce marketplace. It connects investors with growth opportunities while supporting a platform that sells almost everything locally, with reliable home delivery in Douala and Yaoundé.",
      },
      {
        name: 'VendorHub AllReady',
        url: 'https://vendorhub.allready.cm',
        description: "VendorHub.AllReady.cm is the dedicated resource hub for AllReady vendors, providing all the essential learning materials and guidance needed to start and grow their business on www.allready.cm",
      },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Ready to collaborate on your next project?',
    description: 'I\'m always interested in discussing new opportunities, innovative projects, and ways to help bring your ideas to life through technology.',
    email: 'nkenmandenga@gmail.com',
    phone: '+237 699 512 438',
    cta: 'Let\'s start a conversation',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
  },
};