import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Wrench, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'TV Wall Mounting',
  'Plumbing Fixes',
  'Electrical Fixtures',
  'End-of-Tenancy Repairs',
  'Furniture Assembly',
  'General Repairs',
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-700 border-t border-dark-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-white">QuickFix</span>
                <span className="block text-xs text-orange -mt-1">Handyman Services</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional handyman services in Eltham and South East London. 
              Quality workmanship, reliable service, fair prices.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-dark-400 rounded-lg flex items-center justify-center text-gray-400 hover:bg-orange hover:text-black transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/447861479598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:07861479598"
                  className="flex items-start gap-3 text-gray-400 hover:text-orange transition-colors"
                >
                  <Phone className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm">07861 479598</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:parsifalart@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-orange transition-colors"
                >
                  <Mail className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm">parsifalart@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-sm">Eltham, London<br />SE9</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} QuickFix Handyman. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-orange transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
