import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoBlack from '../assets/logo-horizontal-black.png';
import { defaultLocale } from '../locales';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    navigation,
    ctaLabel,
    ariaGoHome,
    logoAlt,
  } = defaultLocale.header;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            type="button"
            className="cursor-pointer flex items-center bg-transparent border-0 p-0"
            onClick={() => onNavigate('home')}
            aria-label={ariaGoHome}
          >
            <img
              src={logoBlack}
              alt={logoAlt}
              className="h-8 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => onNavigate('contact')}>
              {ctaLabel}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
