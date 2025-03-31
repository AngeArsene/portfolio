import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, User, FolderGit, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          <a href="#home" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">{t('nav.home')}</span>
          </a>
          <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">{t('nav.about')}</span>
          </a>
          <a href="#projects" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <FolderGit className="w-6 h-6" />
            <span className="text-xs mt-1">{t('nav.projects')}</span>
          </a>
          <a href="#contact" className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">{t('nav.contact')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};