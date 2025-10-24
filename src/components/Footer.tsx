import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import logoWhite from '../assets/logo-horizontal-white.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Giới thiệu', href: '#' },
      { name: 'Đội ngũ', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    product: [
      { name: 'Tính năng', href: '#' },
      { name: 'Giá cả', href: '#' },
      { name: 'Bảo mật', href: '#' },
      { name: 'Cập nhật', href: '#' },
    ],
    support: [
      { name: 'Tài liệu', href: '#' },
      { name: 'Hướng dẫn', href: '#' },
      { name: 'Trạng thái API', href: '#' },
      { name: 'Hỗ trợ', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoWhite}
              alt="Coden logo"
              className="h-8 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 mb-4">
              Tạo giải pháp, dựng cộng đồng.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Thông tin Công ty</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Sản phẩm & Dịch vụ</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Tài nguyên</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
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
              alt="Coden logo"
              className="h-5 w-auto object-contain"
            />
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản dịch vụ
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Chính sách cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
