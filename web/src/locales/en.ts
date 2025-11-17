import type { LocaleContent } from "./types";

export const en: LocaleContent = {
  meta: {
    id: "en",
    lang: "en",
    languageName: "English",
    languageShortLabel: "EN",
    title: "Coden - Building solutions, nurturing communities",
  },
  header: {
    navigation: [
      { label: "Home", target: "home" },
      { label: "About", target: "about" },
      { label: "Services", target: "works" },
      { label: "Contact", target: "contact" },
    ],
    ctaLabel: "Contact us",
    logoAlt: "Coden logo",
    goHomeLabel: "Go to homepage",
    mobileMenu: {
      open: "Open navigation menu",
      close: "Close navigation menu",
    },
    languageSwitcher: {
      label: "Language",
      ariaLabel: "Change display language",
    },
  },
  home: {
    hero: {
      titleLineOne: "Boldest ideas deserve",
      titleLineTwo: "a clear path to reality",
      description:
        "At Coden, technology is more than a toolkit—it is the catalyst that turns vision into tangible value. With systems thinking, a dedicated team, and real-world delivery experience, we help you craft data-driven solutions that are breakthrough, efficient, and sustainable.",
      primaryCta: {
        label: "Talk to us",
        target: "contact",
      },
      secondaryCta: {
        label: "Explore services",
        target: "works",
      },
      imageAlt: "Technology team collaborating on laptops",
    },
    features: {
      title: "Why choose Coden?",
      description:
        "Coden goes beyond shipping technology. We act as a strategic partner who combines technical depth, systems thinking, and a service mindset to help your organization unlock the full value of data and software.",
      items: [
        {
          icon: "innovation",
          title: "Holistic strategy",
          description:
            "We unpack your needs in depth and define a technology roadmap with measurable outcomes.",
        },
        {
          icon: "precision",
          title: "Reliable execution",
          description:
            "A seasoned engineering team ships resilient solutions that scale with your operations.",
        },
        {
          icon: "partnership",
          title: "Enduring partnership",
          description:
            "We work as an extension of your team and support every milestone in your digital journey.",
        },
      ],
    },
    cta: {
      title: "Ready to bring your ideas to life?",
      description:
        "Let’s talk today to kickstart your transformation journey and discover how far technology can take you with Coden.",
      buttonLabel: "Contact us",
    },
  },
  about: {
    heroTitle: "Who are we?",
    heroSubtitle: "A collective of kind, passionate technologists who pursue sustainable impact.",
    storyParagraphs: [
      "Coden was born from a simple yet profound aspiration: build a community of human-centered software developers.",
      "We believe technology exists to serve people—not to replace them. In an ever-changing world, trust is the rare glue that connects us. We honor that truth and create a space where trust grows from sincerity, integrity, and a commitment to long-term value.",
      "Coden also symbolizes connection—between people and technology, between ideas and execution, between organizations. We strive to bring digital tools into practical use so businesses can solve their challenges efficiently and adaptively.",
      "As a group of technology lovers who enjoy problem solving and care about giving back, we keep people at the center of every solution. From small ideas to high-impact products, we build software with empathy and responsibility.",
    ],
    storyImageAlt: "Team members collaborating in the office",
    valuesTitle: "Core values",
    valuesDescription: "Principles that shape our culture and guide how we work every day.",
    values: [
      {
        icon: "efficiency",
        title: "Efficiency",
        description:
          "We value clarity, focus, and lean execution. Every effort aims to optimize resources, processes, and outcomes.",
      },
      {
        icon: "integrity",
        title: "Integrity",
        description:
          "Coden stands on honesty, transparency, and long-term commitment. We honor our word, protect privacy, and stay consistent.",
      },
      {
        icon: "empathy",
        title: "Empathy",
        description:
          "Deep listening and expert responses anchor our work. Each solution is crafted from genuine understanding of the problem.",
      },
      {
        icon: "sustainability",
        title: "Sustainability",
        description:
          "From people to products to community impact, we focus on long-term value and responsible growth.",
      },
    ],
    teamTitle: "Featured team members",
    teamDescription: "A diverse team of talents working together to build remarkable products.",
    teamMembers: [
      { image: "thanh", name: "Thành Vũ", role: "Chief Technology Officer" },
      { image: "duc", name: "Đức Phạm", role: "Chief Business Officer" },
      { image: "cuong", name: "Cương Đỗ", role: "Head of Culture & People" },
      { image: "minh", name: "Minh Phạm", role: "Creative Director" },
    ],
  },
  works: {
    heroTitle: "Our services",
    heroDescription:
      "Coden delivers end-to-end technology capabilities that move your business forward. From strategy through execution, we are the partner you can trust on every digital initiative.",
    services: [
      {
        key: "strategy",
        title: "Strategy consulting",
        description:
          "We help you identify the best technology responses to your business challenges through actionable strategy engagements.",
        features: ["Business analysis", "Technology assessment", "ROI optimization", "Digital transformation"],
      },
      {
        key: "architecture",
        title: "Architecture design",
        description:
          "We craft scalable, resilient system architectures tailored to your needs—built to endure and grow with your organization.",
        features: ["System design", "Microservices architecture", "Cloud solutions", "API design"],
      },
      {
        key: "development",
        title: "Software development",
        description:
          "Full-stack engineering services using modern technologies. From web to mobile, we build products people love to use.",
        features: ["Web applications", "Mobile applications", "Custom software", "API development"],
      },
      {
        key: "data",
        title: "Data enablement",
        description:
          "Turn raw data into insight. We design pipelines, ETL workflows, and analytics that inform confident decisions.",
        features: ["Data pipelines", "ETL solutions", "Big data analytics", "Data warehousing"],
      },
      {
        key: "project",
        title: "Project management",
        description:
          "Comprehensive delivery management that keeps every engagement on time and on quality using agile best practices.",
        features: ["Agile/Scrum", "Project planning", "Risk management", "Quality assurance"],
      },
      {
        key: "security",
        title: "Security testing",
        description:
          "End-to-end security testing that surfaces vulnerabilities early and keeps your systems hardened against attacks.",
        features: ["Vulnerability assessments", "Security audits", "Compliance testing", "Threat modeling"],
      },
    ],
    learnMoreLabel: "Learn more",
    processTitle: "Delivery process",
    processDescription: "A proven approach that ensures every project is delivered successfully.",
    processSteps: [
      { step: "01", title: "Discover", description: "Understand your needs and goals" },
      { step: "02", title: "Plan", description: "Shape a roadmap for success" },
      { step: "03", title: "Build", description: "Design, develop, and launch the solution" },
      { step: "04", title: "Support", description: "Maintain and optimize continuously" },
    ],
    cta: {
      title: "Ready to make your vision real?",
      description:
        "Let’s explore which of our services can accelerate your goals. Our team is ready to turn your ideas into reality.",
      primaryLabel: "Book a consultation",
      secondaryLabel: "View case studies",
    },
  },
  contact: {
    heroTitle: "Contact us",
    heroSubtitle:
      "Have a question or want to collaborate? We’d love to hear from you. Send us a note and we’ll reply as soon as possible.",
    formTitle: "Send us a message",
    formFields: {
      nameLabel: "Full name *",
      namePlaceholder: "Your full name",
      emailLabel: "Email *",
      emailPlaceholder: "you@email.com",
      companyLabel: "Company",
      companyPlaceholder: "Where do you work?",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your goals or challenges...",
    },
    submitLabel: "Send message",
    submittingLabel: "Sending...",
    infoTitle: "Contact information",
    infoDescription:
      "Reach out through any of the following channels. We are always ready to answer your questions.",
    infoItems: [
      { icon: "email", title: "Email", detail: "info@coden.org", link: "mailto:info@coden.org" },
      { icon: "phone", title: "Phone", detail: "+84 93639 7751", link: "tel:+84936397751" },
      {
        icon: "office",
        title: "Office",
        detail: "14F, Viet Á Building, 09 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam.",
        link: "#",
      },
    ],
    mapLabel: "Map location",
    mapDescription: "Coden office pinned on Google Maps",
    toasts: {
      success: "Message received! We will get back to you shortly.",
      error: "Something went wrong while sending. Please try again.",
    },
  },
  footer: {
    tagline: "Building solutions, nurturing communities.",
    sections: [
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Team", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        title: "Products & Services",
        links: [
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Security", href: "#" },
          { label: "Release notes", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Docs", href: "#" },
          { label: "Guides", href: "#" },
          { label: "API status", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy policy", href: "/privacy-policy", target: "privacy" },
      { label: "Terms of service", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
    rightsReserved: "All rights reserved.",
  },
  images: {
    errorAlt: "Placeholder image when the original fails to load",
  },
  privacy: {
    title: "Privacy policy",
    lastUpdatedLabel: "Last updated",
    lastUpdatedDate: "November 1, 2024",
    introduction:
      "This sample policy describes how we collect, use, and protect your personal information. It acts as placeholder content and can be updated to reflect actual legal requirements and operational processes.",
    sections: [
      {
        title: "Scope",
        paragraphs: [
          "The policy applies to every product, service, and digital property operated by Coden. It explains what happens to data whenever you visit our website or interact with our team.",
          "Where local regulations require it, we will provide additional notices or obtain explicit consent before gathering information.",
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "We may collect basic contact details such as your name, email address, phone number, and organization, along with technical information like IP address, browser type, or cookies.",
          "Forms, surveys, or signup flows will always clarify which data points are needed and the purpose behind each request.",
        ],
      },
      {
        title: "How we use and protect data",
        paragraphs: [
          "Data helps us answer support inquiries, personalize services, improve our experience, and keep our systems secure.",
          "We apply organizational and technical safeguards to prevent unauthorized access. Only authorized personnel may process personal information.",
        ],
      },
      {
        title: "Contact us",
        paragraphs: [
          "For any questions about this privacy policy or to exercise your data rights, email us at info@coden.org.",
          "Coden will respond as soon as possible and update this sample policy whenever significant changes occur.",
        ],
      },
    ],
  },
};
