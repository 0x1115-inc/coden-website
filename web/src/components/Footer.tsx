import type { MouseEvent } from 'react';
import logoWhite from '../assets/logo-horizontal-white.png';
import { useLocale } from '../locales';
import type { PageId } from '../locales';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { content } = useLocale();
  const footer = content.footer;
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, target?: PageId) => {
    if (target && onNavigate) {
      event.preventDefault();
      onNavigate(target);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            © {currentYear}
            <img
              src={logoWhite}
              alt="Coden logo"
              className="h-5 w-auto object-contain"
            />
            {footer.rightsReserved}
          </p>
          <div className="flex gap-6">
            {footer.legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition-colors"
                onClick={(event) => handleLinkClick(event, link.target)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
