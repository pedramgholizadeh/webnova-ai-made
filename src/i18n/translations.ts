export const languages = {
  en: 'EN',
  de: 'DE',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// Base path for GitHub Pages (e.g. '/webnova-ai-made' or '')
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function stripBase(pathname: string): string {
  if (BASE && BASE !== '/' && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length) || '/';
  }
  return pathname;
}

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in touch',

    // Language
    'lang.switchTo': 'Switch to German',
    'lang.current': 'English',

    // Hero
    'hero.title': 'We craft digital experiences that resonate across Europe.',
    'hero.subtitle': 'A premium creative agency based in Berlin. Precision, creativity, and impact for ambitious brands.',
    'hero.cta.primary': 'Explore our work',
    'hero.cta.secondary': 'Meet WebNova',

    // Home sections
    'home.services.title': 'What we do best',
    'home.services.subtitle': 'Full-spectrum creative services for brands ready to lead.',
    'home.work.title': 'Selected work',
    'home.work.subtitle': 'Recent projects that moved the needle.',
    'home.why.title': 'Why WebNova',
    'home.why.subtitle': 'German engineering meets bold creativity.',
    'home.testimonials.title': 'Trusted by forward-thinking brands',
    'home.cta.title': 'Ready to create something extraordinary?',
    'home.cta.subtitle': 'Let’s discuss your next project.',

    // Common
    'common.viewAll': 'View all work',
    'common.learnMore': 'Learn more',
    'common.getStarted': 'Get started',
    'common.close': 'Close',
    'common.filterAll': 'All',

    // About
    'about.title': 'About WebNova',
    'about.subtitle': 'Precision. Creativity. European ambition.',
    'about.story.title': 'Our Story',
    'about.story.p1': 'Founded in Berlin in 2021, WebNova was born from a desire to bring together the meticulous attention to detail that defines German design with the fearless, boundary-pushing creativity of the best European studios.',
    'about.story.p2': 'Today we work with ambitious brands across Germany, France, the Netherlands, and beyond — helping them tell stories that feel both timeless and unmistakably modern.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'To create digital work that is beautiful, functional, and culturally resonant. We believe great design is not decoration — it is strategy.',
    'about.values.title': 'What we believe',
    'about.team.title': 'The team',
    'about.locations.title': 'Where we work',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'End-to-end creative partnerships. From strategy to execution.',
    'services.cta': 'Discuss your project',

    // Work
    'work.title': 'Work',
    'work.subtitle': 'A selection of projects we’re proud of.',
    'work.filter.all': 'All',
    'work.filter.branding': 'Branding',
    'work.filter.digital': 'Digital',
    'work.filter.campaign': 'Campaigns',
    'work.filter.motion': 'Motion',
    'work.filter.web': 'Web & Product',
    'work.viewCase': 'View case study',

    // Contact
    'contact.title': 'Let’s create together',
    'contact.subtitle': 'Tell us about your project. We typically respond within 48 hours.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.success': 'Thank you. We’ll be in touch shortly.',
    'contact.form.error': 'Something went wrong. Please try again or email us directly.',
    'contact.office.title': 'Berlin Office',
    'contact.office.address': 'Torstraße 1, 10119 Berlin, Germany',
    'contact.office.phone': '+49 30 123 4567',
    'contact.office.email': 'hello@webnova.studio',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',

    // Why section
    'why.1.title': 'Strategic depth',
    'why.1.desc': 'Every pixel serves a business goal. We start with strategy, not moodboards.',
    'why.2.title': 'Craft obsession',
    'why.2.desc': 'We sweat the details. From micro-interactions to brand systems.',
    'why.3.title': 'European perspective',
    'why.3.desc': 'Local roots with a pan-European mindset. We understand diverse markets.',
    'why.4.title': 'Long-term partners',
    'why.4.desc': 'We don’t chase projects. We build lasting relationships with ambitious clients.',

    // Team (fake)
    'team.anna.name': 'Anna Bergmann',
    'team.anna.role': 'Creative Director & Founder',
    'team.anna.bio': 'Formerly at Meta and a leading German design studio. Obsessed with clarity and emotional impact.',
    'team.max.name': 'Maximilian Voss',
    'team.max.role': 'Head of Strategy',
    'team.max.bio': '10+ years helping European brands find their voice. Previously at Wolff Olins and a Berlin VC.',
    'team.sofia.name': 'Sofia Laurent',
    'team.sofia.role': 'Design Director',
    'team.sofia.bio': 'Award-winning designer with a passion for systems thinking and digital craftsmanship.',
    'team.julian.name': 'Technical Director',
    'team.julian.bio': 'Bridges design and engineering. Previously led digital product teams at a major European tech company.',

    // Values
    'value.clarity': 'Clarity over complexity',
    'value.craft': 'Craft is our religion',
    'value.cultural': 'Cultural intelligence',
    'value.partnership': 'Partnership, not projects',
  },
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.work': 'Arbeiten',
    'nav.contact': 'Kontakt',
    'nav.getInTouch': 'Kontakt aufnehmen',

    // Language
    'lang.switchTo': 'Zu Deutsch wechseln',
    'lang.current': 'Deutsch',

    // Hero
    'hero.title': 'Wir gestalten digitale Erlebnisse, die in Europa ankommen.',
    'hero.subtitle': 'Eine Premium-Kreativagentur mit Sitz in Berlin. Präzision, Kreativität und Wirkung für ambitionierte Marken.',
    'hero.cta.primary': 'Unsere Arbeiten entdecken',
    'hero.cta.secondary': 'WebNova kennenlernen',

    // Home sections
    'home.services.title': 'Was wir am besten können',
    'home.services.subtitle': 'Umfassende kreative Dienstleistungen für Marken, die führen wollen.',
    'home.work.title': 'Ausgewählte Arbeiten',
    'home.work.subtitle': 'Aktuelle Projekte, die etwas bewegt haben.',
    'home.why.title': 'Warum WebNova',
    'home.why.subtitle': 'Deutsche Präzision trifft mutige Kreativität.',
    'home.testimonials.title': 'Vertraut von visionären Marken',
    'home.cta.title': 'Bereit, etwas Außergewöhnliches zu schaffen?',
    'home.cta.subtitle': 'Lassen Sie uns über Ihr nächstes Projekt sprechen.',

    // Common
    'common.viewAll': 'Alle Arbeiten ansehen',
    'common.learnMore': 'Mehr erfahren',
    'common.getStarted': 'Projekt starten',
    'common.close': 'Schließen',
    'common.filterAll': 'Alle',

    // About
    'about.title': 'Über WebNova',
    'about.subtitle': 'Präzision. Kreativität. Europäischer Ehrgeiz.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.p1': 'Gegründet 2021 in Berlin, entstand WebNova aus dem Wunsch, die akribische Detailverliebtheit deutscher Gestaltung mit der furchtlosen, grenzüberschreitenden Kreativität der besten europäischen Studios zu verbinden.',
    'about.story.p2': 'Heute arbeiten wir mit ambitionierten Marken in Deutschland, Frankreich, den Niederlanden und darüber hinaus – und helfen ihnen, Geschichten zu erzählen, die zeitlos und unverkennbar modern wirken.',
    'about.mission.title': 'Unsere Mission',
    'about.mission.text': 'Digitale Arbeiten zu schaffen, die schön, funktional und kulturell resonant sind. Wir glauben, dass großartiges Design keine Dekoration ist – es ist Strategie.',
    'about.values.title': 'Wofür wir stehen',
    'about.team.title': 'Das Team',
    'about.locations.title': 'Wo wir arbeiten',

    // Services
    'services.title': 'Leistungen',
    'services.subtitle': 'Kreative Partnerschaften von A bis Z. Von der Strategie bis zur Umsetzung.',
    'services.cta': 'Projekt besprechen',

    // Work
    'work.title': 'Arbeiten',
    'work.subtitle': 'Eine Auswahl von Projekten, auf die wir stolz sind.',
    'work.filter.all': 'Alle',
    'work.filter.branding': 'Branding',
    'work.filter.digital': 'Digital',
    'work.filter.campaign': 'Kampagnen',
    'work.filter.motion': 'Motion',
    'work.filter.web': 'Web & Produkt',
    'work.viewCase': 'Fallstudie ansehen',

    // Contact
    'contact.title': 'Lassen Sie uns gemeinsam schaffen',
    'contact.subtitle': 'Erzählen Sie uns von Ihrem Projekt. Wir antworten in der Regel innerhalb von 48 Stunden.',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.company': 'Unternehmen',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.success': 'Vielen Dank. Wir melden uns in Kürze.',
    'contact.form.error': 'Etwas ist schiefgelaufen. Bitte erneut versuchen oder uns direkt E-Mail schreiben.',
    'contact.office.title': 'Büro Berlin',
    'contact.office.address': 'Torstraße 1, 10119 Berlin, Deutschland',
    'contact.office.phone': '+49 30 123 4567',
    'contact.office.email': 'hello@webnova.studio',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',

    // Why
    'why.1.title': 'Strategische Tiefe',
    'why.1.desc': 'Jedes Pixel dient einem Geschäftsziel. Wir beginnen mit Strategie, nicht mit Moodboards.',
    'why.2.title': 'Besessen vom Handwerk',
    'why.2.desc': 'Wir schwitzen die Details aus. Von Micro-Interactions bis zu Markensystemen.',
    'why.3.title': 'Europäische Perspektive',
    'why.3.desc': 'Lokale Wurzeln mit paneuropäischem Mindset. Wir verstehen unterschiedliche Märkte.',
    'why.4.title': 'Langfristige Partner',
    'why.4.desc': 'Wir jagen keine Projekte. Wir bauen dauerhafte Beziehungen zu ambitionierten Kunden auf.',

    // Team
    'team.anna.name': 'Anna Bergmann',
    'team.anna.role': 'Creative Director & Gründerin',
    'team.anna.bio': 'Ehemals bei Meta und einem führenden deutschen Designstudio. Besessen von Klarheit und emotionaler Wirkung.',
    'team.max.name': 'Maximilian Voss',
    'team.max.role': 'Head of Strategy',
    'team.max.bio': 'Über 10 Jahre Erfahrung dabei, europäischen Marken ihre Stimme zu geben. Zuvor bei Wolff Olins und einem Berliner VC.',
    'team.sofia.name': 'Sofia Laurent',
    'team.sofia.role': 'Design Director',
    'team.sofia.bio': 'Preisgekrönte Designerin mit Leidenschaft für Systemdenken und digitales Handwerk.',
    'team.julian.name': 'Julian Keller',
    'team.julian.role': 'Technical Director',
    'team.julian.bio': 'Verbindet Design und Engineering. Leitete zuvor digitale Produktteams bei einem großen europäischen Tech-Unternehmen.',

    // Values
    'value.clarity': 'Klarheit vor Komplexität',
    'value.craft': 'Handwerk ist unsere Religion',
    'value.cultural': 'Kulturelle Intelligenz',
    'value.partnership': 'Partnerschaft, keine Projekte',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  let pathname = url.pathname;

  // Strip base if present
  if (BASE && pathname.startsWith(BASE)) {
    pathname = pathname.slice(BASE.length) || '/';
  }

  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first === 'de') return 'de';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Ensure path starts with /
  let cleanPath = path.startsWith('/') ? path : `/${path}`;

  let localizedPath: string;

  if (lang === defaultLang) {
    localizedPath = cleanPath;
  } else {
    if (cleanPath === '/') {
      localizedPath = '/de';
    } else {
      localizedPath = `/de${cleanPath}`;
    }
  }

  // Prepend base if set and not already present
  if (BASE && BASE !== '/' && !localizedPath.startsWith(BASE)) {
    localizedPath = BASE + localizedPath;
  }

  return localizedPath;
}
