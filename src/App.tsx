import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Facebook, ExternalLink } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';
import './i18n';

const technologies = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'ReactJs',
  'WordPress', 'MySQL', 'PHP', 'MVC Architecture', 'API Integration',
  'Laravel', 'Git', 'GitHub', 'Docker', 'SSH'
];

const projects = [
  {
    name: 'Woowa Webhooks',
    url: 'https://github.com/AngeArsene/woowa-webhooks',
    description: 'Webhook integration system'
  },
  {
    name: 'MTN MoMo Payment GateWay',
    url: 'https://github.com/AngeArsene/mtn_momo_api',
    description: 'Mobile Money API integration'
  },
  {
    name: 'PHP MVC Framework',
    url: 'https://github.com/AngeArsene/php_mvc_framework',
    description: 'Custom MVC framework implementation'
  },
  {
    name: 'Attendance Monitoring System',
    url: 'https://github.com/AngeArsene/Attendance-Monitoring-System',
    description: 'System for tracking attendance'
  }
];

function App() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Add structured data for React Helmet
  useEffect(() => {
    document.title = `${t('hero.name')} - ${t('hero.role')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">
              <span itemProp="name">Nken Mandeng Ange Arsene</span>
            </h1>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-20 pb-24">
        {/* Hero Section */}
        <section id="home" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('hero.greeting')} <span className="text-blue-600 dark:text-blue-400" itemProp="name">{t('hero.name')}</span>
          </h2>
          <p className="text-xl mb-8" itemProp="jobTitle">{t('hero.role')}</p>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400" itemProp="description">{t('hero.description')}</p>
            <p className="text-lg text-gray-600 dark:text-gray-400">{t('hero.commitment')}</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('skills.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {t('skills.expertise', { returnObjects: true }).map((expertise: string, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-lg" itemProp="knowsAbout">{expertise}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div key={tech} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center" itemProp="knowsAbout">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('experience.title')}</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" itemProp="worksFor">
              <h3 className="text-xl font-bold">{t('experience.allready.company')}</h3>
              <p className="text-blue-600 dark:text-blue-400">{t('experience.allready.position')}</p>
              <p className="text-gray-600 dark:text-gray-400">{t('experience.allready.duration')}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{t('experience.bjft.company')}</h3>
              <p className="text-blue-600 dark:text-blue-400">{t('experience.bjft.position')}</p>
              <p className="text-gray-600 dark:text-gray-400">{t('experience.bjft.duration')}</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('projects.viewMore')} <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            {t('contact.cta')}
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/AngeArsene/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              itemProp="sameAs"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/ange-arsene-nken-mandeng-58895827a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              itemProp="sameAs"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550317312174"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              itemProp="sameAs"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </section>
      </main>

      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;