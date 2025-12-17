import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, ExternalLink, Mail, Phone, Code, Globe, Award, Briefcase, GraduationCap } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { FloatingButtons } from './components/FloatingButtons';
import { Footer } from './components/Footer';
import './i18n';

const projectLinks = {
  'WhatsApp Marketing Automation Package': 'https://github.com/AngeArsene/woowa-webhooks',
  'WooCommerce Smobilpay Gateway': 'https://github.com/AngeArsene/wc-smobilpay',
  'Optimum Fly - Visa & Immigration Services Web Site': 'https://github.com/AngeArsene/optimumfly',
  'Custom PHP MVC Framework': 'https://github.com/AngeArsene/php_mvc_framework',
  'Task Management System': 'https://github.com/AngeArsene/TaskFlow',
  'WhatsApp Campaign Hub': 'https://github.com/AngeArsene/WhatsApp_Campaign_Hub',
  'MTN MoMo Payment Gateway': 'https://github.com/AngeArsene/MtnMomoPaymentGateway',
  'Excel WhatsApp Verifier': 'https://github.com/AngeArsene/woowa-webhooks/blob/317860b2e2d491fc337736e9341b9850f3f60829/src/ExcelWhatsAppVerifier.php#L51',
  'Package d\'Automatisation Marketing WhatsApp': 'https://github.com/AngeArsene/woowa-webhooks',
  'Framework PHP MVC Personnalisé': 'https://github.com/AngeArsene/php_mvc_framework',
  'Système de Gestion des Tâches': 'https://github.com/AngeArsene/TaskFlow',
  'Hub de Campagne WhatsApp': 'https://github.com/AngeArsene/WhatsApp_Campaign_Hub',
  'Passerelle de Paiement MTN MoMo': 'https://github.com/AngeArsene/MtnMomoPaymentGateway',
  'Vérificateur Excel WhatsApp': 'https://github.com/AngeArsene/woowa-webhooks/blob/317860b2e2d491fc337736e9341b9850f3f60829/src/ExcelWhatsAppVerifier.php#L51',
};

function App() {
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.title = `${t('hero.name')} - ${t('hero.role')}`;
  }, [t]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <span itemProp="name">Ange Arsène</span>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-4">
              {t('hero.greeting')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" itemProp="name">{t('hero.name')}</span>
            </h2>
            <p className="text-2xl mb-2 font-semibold text-blue-600 dark:text-blue-400" itemProp="jobTitle">{t('hero.role')}</p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">{t('hero.subtitle')}</p>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300" itemProp="description">{t('hero.description')}</p>
              <p className="text-lg text-gray-700 dark:text-gray-300">{t('hero.passion')}</p>
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('hero.cta')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
              <Award className="w-8 h-8 mr-3 text-blue-600" />
              {t('about.title')}
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">{t('about.description')}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {t('about.highlights', { returnObjects: true }).map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-blue-600" />
              {t('skills.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(t('skills', { returnObjects: true })).map(([key, category]: [string, any]) => {
                if (key === 'title') return null;
                return (
                  <div key={key} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300" itemProp="knowsAbout">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Briefcase className="w-8 h-8 mr-3 text-blue-600" />
              {t('experience.title')}
            </h2>
            <div className="space-y-8">
              {Object.entries(t('experience', { returnObjects: true })).map(([key, exp]: [string, any]) => {
                if (key === 'title') return null;
                return (
                  <div key={key} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400" itemProp="worksFor">{exp.company}</h3>
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{exp.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
                        <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <GraduationCap className="w-8 h-8 mr-3 text-blue-600" />
              {t('education.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(t('education', { returnObjects: true })).map(([key, edu]: [string, any]) => {
                if (key === 'title') return null;
                return (
                  <div key={key} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2" itemProp="alumniOf">{edu.degree}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Globe className="w-8 h-8 mr-3 text-blue-600" />
              {t('projects.title')}
            </h2>
            
            {/* Key Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {t('projects.projects', { returnObjects: true }).map((project: any, index: number) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">{project.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={projectLinks[project.name as keyof typeof projectLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    {t('projects.viewCode')} <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>

            {/* Live Websites */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Live Websites</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t('projects.websites', { returnObjects: true }).map((website: any, index: number) => (
                  <div key={index} className="text-center">
                    <h4 className="font-bold mb-2">{website.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{website.description}</p>
                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      {t('projects.viewLive')} <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-xl mb-8 text-blue-600 dark:text-blue-400">{t('contact.subtitle')}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              {t('contact.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:nkenmandenga@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  itemProp="email"
                >
                  {t('contact.email')}
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <a
                  href="tel:+237699512438"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  itemProp="telephone"
                >
                  {t('contact.phone')}
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://github.com/AngeArsene"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                itemProp="sameAs"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/ange-arsene-nken-mandeng-58895827a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                itemProp="sameAs"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://angearsene.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                itemProp="url"
              >
                <Globe className="w-8 h-8" />
              </a>
            </div>

            <a
              href="mailto:nkenmandenga@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('contact.cta')}
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