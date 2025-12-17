import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, User, Code, Briefcase, FolderGit, GraduationCap, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { href: '#home', icon: Home, label: t('nav.home') },
    { href: '#about', icon: User, label: t('nav.about') },
    { href: '#skills', icon: Code, label: t('nav.skills') },
    { href: '#projects', icon: FolderGit, label: t('nav.projects') },
    { href: '#contact', icon: Phone, label: t('nav.contact') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg z-40">
      <div className="container mx-auto px-2">
        <div className="flex justify-around py-2 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center min-w-0 px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs truncate">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};