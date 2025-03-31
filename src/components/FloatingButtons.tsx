import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-20 right-4 flex flex-col gap-4 z-50">
      <a
        href="tel:+237699512438"
        className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Call"
        itemProp="telephone"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/237699512438"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};