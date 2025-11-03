import { Github, Twitter, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import logoWhite from '../assets/logo-horizontal-white.png';
import { defaultLocale } from '../locales';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const {
    logoAlt,
    description,
    columns,
    social,
    bottomBar,
  } = defaultLocale.footer;

  const socialIconMap: Record<string, LucideIcon> = {
    Twitter,
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoWhite}
              alt={logoAlt}
              className="h-8 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 mb-4">
              {description}
            </p>
            <div className="flex gap-4">
              {social.map((socialLink, index) => {
                const Icon = socialIconMap[socialLink.label] ?? Mail;
                return (
                  <a
                    key={index}
                    href={socialLink.href}
                    aria-label={socialLink.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">{columns.company.title}</h3>
            <ul className="space-y-2">
              {columns.company.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">{columns.product.title}</h3>
            <ul className="space-y-2">
              {columns.product.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">{columns.support.title}</h3>
            <ul className="space-y-2">
              {columns.support.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            © {currentYear}
            <img
              src={logoWhite}
              alt={logoAlt}
              className="h-5 w-auto object-contain"
            />
            {bottomBar.rights}
          </p>
          <div className="flex gap-6">
            {bottomBar.policies.map((policy, index) => (
              <a key={index} href={policy.href} className="hover:text-white transition-colors">
                {policy.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
