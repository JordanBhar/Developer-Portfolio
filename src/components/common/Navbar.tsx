import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_TITLE } from '../../../src/constants/app';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-5 bg-gradient-to-b from-dark-primary to-dark-primary/80 backdrop-blur-xl border-b border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 py-4">

        
        <div className="flex items-center justify-between">
          {/* Logo */}

          <a href="#hero" className="text-2xl font-bold font-mono text-accent-teal hover:text-accent-cyan transition-colors">
            <div className="flex items-center gap-3">
              <img
                src="../../../public/assets/icons/logo.png"
                alt="Logo"
                className="w-10 h-10"
              />
              {SITE_TITLE}
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-accent-teal transition-colors font-mono text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-accent-teal transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border-dark/30 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-accent-teal transition-colors font-mono text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
