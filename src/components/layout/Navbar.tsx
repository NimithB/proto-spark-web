
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-proto-navy font-poppins font-extrabold text-2xl">
              Proto<span className="text-proto-cyan">bots</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              Home
            </Link>
            <Link to="/workshops" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              Workshops
            </Link>
            <Link to="/projects" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              Projects
            </Link>
            <Link to="/equipment" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              Equipment
            </Link>
            <Link to="/about" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-proto-navy hover:text-proto-cyan font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-proto-navy focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/workshops" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Workshops
            </Link>
            <Link 
              to="/projects" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/equipment" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Equipment
            </Link>
            <Link 
              to="/about" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-proto-navy hover:text-proto-cyan font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
