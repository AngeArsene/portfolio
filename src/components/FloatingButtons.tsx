import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4 flex flex-col gap-4 z-50">
      <a
        href="tel:+237699512438"
        className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Call"
        itemProp="telephone"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/237699512438"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};