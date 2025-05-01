
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageSquare, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-proto-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-poppins font-extrabold text-2xl">
                Proto<span className="text-proto-cyan">bots</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-2">
              Bangalore-based tech startup offering innovation-focused services, 
              electronics component sales, prototyping, and workshop space rentals.
            </p>
            <p className="text-gray-400 mb-6 text-sm">Established in 2025</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/proto_bots?igsh=ZzBmd3dtamZ6bzN1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-proto-cyan transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/share/1AwEhTVWkP" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-proto-cyan transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://wa.me/message/7WIBMBJGEKSSI1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-proto-cyan transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-proto-cyan transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-proto-cyan transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-300 hover:text-proto-cyan transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-proto-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-proto-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">6/2 C.Ramaiah layout, Bengaluru</p>
              <p className="mb-2">Phone: +91 89046 88500</p>
              <p className="mb-2">Email: protobots.services@gmail.com</p>
              <a 
                href="https://wa.me/message/7WIBMBJGEKSSI1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-proto-cyan hover:underline mt-4"
              >
                Chat with us on WhatsApp
              </a>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Protobots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
