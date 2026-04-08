export type LocaleId = "vi" | "en";
export type PageId = "home" | "about" | "works" | "contact" | "privacy" | "privacyGreenVector";
export type HeaderNavigationItem =
  | { label: string; target: PageId; href?: never }
  | { label: string; href: string; target?: never };

export type HomeFeatureIcon = "innovation" | "precision" | "partnership";
export type WorksServiceKey =
  | "strategy"
  | "architecture"
  | "development"
  | "data"
  | "project"
  | "security";
export type ValueIconKey = "efficiency" | "integrity" | "empathy" | "sustainability";
export type ContactInfoIconKey = "email" | "phone" | "office";
export type TeamImageKey = "thanh" | "duc" | "cuong" | "minh";

export interface LocaleContent {
  meta: {
    id: LocaleId;
    lang: string;
    languageName: string;
    languageShortLabel: string;
    title: string;
  };
  header: {
    navigation: HeaderNavigationItem[];
    ctaLabel: string;
    logoAlt: string;
    goHomeLabel: string;
    mobileMenu: {
      open: string;
      close: string;
    };
    languageSwitcher: {
      label: string;
      ariaLabel: string;
    };
  };
  home: {
    hero: {
      titleLineOne: string;
      titleLineTwo: string;
      description: string;
      primaryCta: { label: string; target: PageId };
      secondaryCta: { label: string; target: PageId };
      imageAlt: string;
    };
    features: {
      title: string;
      description: string;
      items: { icon: HomeFeatureIcon; title: string; description: string }[];
    };
    cta: {
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    storyParagraphs: string[];
    storyImageAlt: string;
    valuesTitle: string;
    valuesDescription: string;
    values: { icon: ValueIconKey; title: string; description: string }[];
    teamTitle: string;
    teamDescription: string;
    teamMembers: { image: TeamImageKey; name: string; role: string }[];
  };
  works: {
    heroTitle: string;
    heroDescription: string;
    services: {
      key: WorksServiceKey;
      title: string;
      description: string;
      features: string[];
    }[];
    learnMoreLabel: string;
    processTitle: string;
    processDescription: string;
    processSteps: { step: string; title: string; description: string }[];
    cta: {
      title: string;
      description: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  contact: {
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    formFields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
    };
    submitLabel: string;
    submittingLabel: string;
    infoTitle: string;
    infoDescription: string;
    infoItems: {
      icon: ContactInfoIconKey;
      title: string;
      detail: string;
      link: string;
    }[];
    mapLabel: string;
    mapDescription: string;
    toasts: {
      success: string;
      error: string;
    };
  };
  footer: {
    tagline: string;
    sections: { title: string; links: { label: string; href: string; target?: PageId }[] }[];
    legalLinks: { label: string; href: string; target?: PageId }[];
    rightsReserved: string;
  };
  images: {
    errorAlt: string;
  };
  privacy: {
    title: string;
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
    introduction: string;
    bodyHtml: string;
  };
  privacyAddendums: {
    greenVector: {
      title: string;
      lastUpdatedLabel: string;
      lastUpdatedDate: string;
      introduction: string;
      bodyHtml: string;
    };
  };
}
