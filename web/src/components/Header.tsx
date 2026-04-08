import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import logoBlack from '../assets/logo-horizontal-black.png';
import { localeOptions, useLocale } from '../locales';
import type { LocaleId, PageId } from '../locales';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { content, localeId, setLocale } = useLocale();
  const { navigation, ctaLabel, goHomeLabel, logoAlt, languageSwitcher, mobileMenu } = content.header;

  const changeLocale = (id: LocaleId) => {
    if (id !== localeId) {
      setLocale(id);
    }
  };

  const LanguageToggle = ({ variant }: { variant: 'desktop' | 'mobile' }) => (
    <div
      className={
        variant === 'desktop'
          ? 'flex items-center gap-3'
          : 'flex flex-col gap-2 border-t border-gray-200 mt-6 pt-4 px-4 md:hidden'
      }
    >
      <span className="text-xs uppercase tracking-wide text-gray-500">{languageSwitcher.label}</span>
      <div
        className={
          variant === 'desktop'
            ? 'flex rounded-full border border-gray-200 bg-gray-50 p-1'
            : 'flex rounded-full border border-gray-200 bg-gray-50 p-1'
        }
      >
        {localeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => changeLocale(option.id)}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
              localeId === option.id
                ? 'bg-white text-indigo-600 shadow'
                : 'text-gray-500 hover:text-gray-900'
            }`}
            aria-label={`${languageSwitcher.ariaLabel}: ${option.name}`}
          >
            {option.shortLabel}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            type="button"
            className="cursor-pointer flex items-center bg-transparent border-0 p-0"
            onClick={() => onNavigate('home')}
            aria-label={goHomeLabel}
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
              'target' in item ? (
                <button
                  key={item.target}
                  onClick={() => onNavigate(item.target)}
                  className={`transition-colors ${
                    currentPage === item.target
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 transition-colors hover:text-indigo-600"
                >
                  {item.label}
                </a>
              )
            ))}
            {/* <Button onClick={() => onNavigate('contact')}>
              {ctaLabel}
            </Button> */}
            <LanguageToggle variant="desktop" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? mobileMenu.close : mobileMenu.open}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                'target' in item ? (
                  <button
                    key={item.target}
                    onClick={() => {
                      onNavigate(item.target);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.target
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left px-4 py-2 rounded-lg text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {item.label}
                  </a>
                )
              ))}
              <LanguageToggle variant="mobile" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
