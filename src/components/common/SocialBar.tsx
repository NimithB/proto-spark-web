import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const SocialBar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-l-lg z-50">
      <div className="flex flex-col gap-4 p-3">
        <a
          href="https://www.facebook.com/share/1AwEhTVWkP/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/proto_bots?igsh=ZzBmd3dtamZ6bzN1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://wa.me/918904688500"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;