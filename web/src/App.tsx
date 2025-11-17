import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { WorksPage } from './components/WorksPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { GreenVectorAddendumPage } from './components/GreenVectorAddendumPage';
import { Toaster } from './components/ui/sonner';
import type { PageId } from './locales';

const pageToPath: Record<PageId, string> = {
  home: '/',
  about: '/about',
  works: '/works',
  contact: '/contact',
  privacy: '/privacy-policy',
  privacyGreenVector: '/privacy-policy/green-vector',
};

const pathToPage = Object.entries(pageToPath).reduce<Record<string, PageId>>((acc, [page, path]) => {
  acc[path] = page as PageId;
  return acc;
}, {});

const normalizePath = (path: string) => {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
};

const getPageFromLocation = () => {
  if (typeof window === 'undefined') return 'home';
  const path = normalizePath(window.location.pathname);
  return pathToPage[path] ?? 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromLocation);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      const path = pageToPath[page] ?? '/';
      const normalized = normalizePath(window.location.pathname);
      if (normalized !== path) {
        window.history.pushState({ page }, '', path);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'works':
        return <WorksPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'privacyGreenVector':
        return <GreenVectorAddendumPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}
