import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Clock, MessageCircle } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header = ({ scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 100;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        <div className="bg-dark-600 border-b border-dark-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-orange" />
                  <span>Mon-Sun: 8AM - 8PM</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-6">
                <a href="mailto:parsifalart@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-orange transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>parsifalart@gmail.com</span>
                </a>
                <a href="tel:07861479598" className="flex items-center gap-2 text-gray-400 hover:text-orange transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>07861 479598</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-dark-500/95 backdrop-blur-md shadow-lg' 
            : 'top-10 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-black font-display font-bold text-xl">Q</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-2xl font-semibold text-white">QuickFix</span>
                <span className="block text-xs text-orange -mt-1">Handyman Services</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-orange transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/447861479598"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-500 text-white px-3 py-2 rounded-lg font-medium text-xs hover:bg-green-600 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="tel:07861479598"
                className="inline-flex items-center gap-2 bg-orange text-black px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange/30"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-orange transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-dark-500 transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-display font-medium text-white hover:text-orange transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/447861479598"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-medium text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
          <a
            href="tel:07861479598"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 inline-flex items-center gap-2 bg-orange text-black px-8 py-3 rounded-lg font-medium text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
