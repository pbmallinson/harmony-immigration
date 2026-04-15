export const languages = {
  en: 'English',
  hu: 'Magyar',
  it: 'Italiano',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.visas': 'Visas',
    'nav.employers': 'For Employers',
    'nav.blog': 'Blog',
    'nav.events': 'Events',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.book': 'Book Free Consultation',

    // Hero
    'hero.tagline': 'Together We Get You There',
    'hero.subtitle': 'Licensed immigration advisers for New Zealand & Australia. Trusted by hundreds of families.',
    'hero.cta.book': 'Book Free 30-min Consultation',
    'hero.cta.assess': 'Check Visa Eligibility',

    // Principles
    'principles.title': 'Our Foundation',
    'principles.subtitle': 'Every decision we make is guided by three core commitments.',
    'principles.ethical.title': 'Ethical',
    'principles.ethical.desc': 'Impartial, professional conduct that prioritises your welfare above all else.',
    'principles.professional.title': 'Professional',
    'principles.professional.desc': 'Compassionate service that builds genuine trust through respectful, expert assistance.',
    'principles.reliable.title': 'Reliable',
    'principles.reliable.desc': 'Thorough follow-through with full accountability and continuous improvement.',

    // Services section
    'services.title': 'How We Help You',
    'services.subtitle': 'Comprehensive immigration support for every step of your journey.',
    'services.learnmore': 'Learn more',
    'services.viewall': 'View all services',

    // Visas section
    'visas.title': 'Visa Pathways',
    'visas.subtitle': 'We guide you through every New Zealand and Australian visa category.',
    'visas.learnmore': 'Learn more',
    'visas.viewall': 'View all visa types',
    'visas.free': 'Free of charge',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Real stories from people we have helped build new lives.',
    'testimonials.source.google': 'Google Review',
    'testimonials.viewall': 'View all reviews',

    // CTA section
    'cta.title': 'Ready to Start Your Journey?',
    'cta.subtitle': 'Book a free 30-minute consultation and take the first step toward your new life.',
    'cta.book': 'Book Free Consultation',
    'cta.assess': 'Free Eligibility Assessment',

    // About page
    'about.title': 'About Harmony Immigration',
    'about.subtitle': 'Personal experience, professional expertise, genuine care.',
    'about.team.title': 'Our Team',
    'about.credentials.title': 'Professional Accreditations',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are here to help. Reach out by phone, email, or book a free consultation.',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hours.weekdays': 'Monday – Friday',
    'contact.hours.time': '9:00 am – 5:00 pm',
    'contact.book.title': 'Book a Free Consultation',
    'contact.book.desc': 'Schedule your complimentary 30-minute discovery session via Calendly.',
    'contact.book.btn': 'Open Booking Calendar',
    'contact.social': 'Follow Us',

    // Footer
    'footer.tagline': 'NZ & Australia — Together We Get You There',
    'footer.lia': 'LIA #202001046',
    'footer.marn': 'MARN #2418597',
    'footer.copyright': '© {year} Harmony Immigration Ltd. All rights reserved.',
    'footer.links.services': 'Services',
    'footer.links.visas': 'Visas',
    'footer.links.about': 'About',
    'footer.links.contact': 'Contact',
    'footer.links.blog': 'Blog',
    'footer.links.employers': 'For Employers',

    // Blog
    'blog.title': 'Immigration Insights',
    'blog.subtitle': 'Guides, success stories, and the latest policy updates from Dr Edit.',
    'blog.readmore': 'Read article',
    'blog.by': 'By',
    'blog.min_read': 'min read',

    // Events
    'events.title': 'Events & Workshops',
    'events.subtitle': 'Join us for free webinars, community workshops, and info evenings.',
    'events.none': 'No upcoming events at the moment — check back soon.',
    'events.online': 'Online',
    'events.register': 'Register',
    'events.past': 'Past Events',

    // For Employers
    'employers.title': 'For Employers',
    'employers.subtitle': 'Build a skilled, diverse workforce with our employer immigration services.',
    'employers.aewv.title': 'Accredited Employer Work Visa (AEWV)',
    'employers.aewv.desc': 'We simplify the accreditation process so you can hire skilled migrants quickly and compliantly.',

    // Visa detail
    'visa.enquire': 'Enquire About This Visa',
    'visa.free_badge': 'Provided free of charge',
    'visa.faq.title': 'Frequently Asked Questions',

    // Meta
    'meta.site_name': 'Harmony Immigration',
    'meta.default_desc': 'Licensed immigration advisers for New Zealand and Australia. Expert visa guidance, translation, and settlement support.',
  },

  hu: {
    'nav.about': 'Rólunk',
    'nav.services': 'Szolgáltatások',
    'nav.visas': 'Vízumok',
    'nav.employers': 'Munkáltatóknak',
    'nav.blog': 'Blog',
    'nav.events': 'Események',
    'nav.testimonials': 'Vélemények',
    'nav.contact': 'Kapcsolat',
    'nav.book': 'Ingyenes konzultáció',

    'hero.tagline': 'Együtt Célba Érünk',
    'hero.subtitle': 'Engedéllyel rendelkező bevándorlási tanácsadók Új-Zélandra és Ausztráliába. Több száz család bizalmával.',
    'hero.cta.book': 'Ingyenes 30 perces konzultáció',
    'hero.cta.assess': 'Vízumjogosultság ellenőrzése',

    'principles.title': 'Alapelveink',
    'principles.subtitle': 'Minden döntésünket három alapvető elkötelezettség vezérli.',
    'principles.ethical.title': 'Etikus',
    'principles.ethical.desc': 'Pártatlan, szakszerű magatartás, amely az Ön érdekeit helyezi előtérbe.',
    'principles.professional.title': 'Professzionális',
    'principles.professional.desc': 'Empatikus szolgáltatás, amely valódi bizalmat épít tiszteletteli, szakértői segítséggel.',
    'principles.reliable.title': 'Megbízható',
    'principles.reliable.desc': 'Alapos utánkövetés teljes elszámoltathatósággal és folyamatos fejlődéssel.',

    'services.title': 'Hogyan Segítünk',
    'services.subtitle': 'Átfogó bevándorlási támogatás utazása minden lépéséhez.',
    'services.learnmore': 'Tovább',
    'services.viewall': 'Összes szolgáltatás',

    'visas.title': 'Vízum Lehetőségek',
    'visas.subtitle': 'Minden új-zélandi és ausztrál vízumkategórián végigvezetjük Önt.',
    'visas.learnmore': 'Tovább',
    'visas.viewall': 'Összes vízumtípus',
    'visas.free': 'Ingyenes',

    'testimonials.title': 'Ügyfeleink Véleménye',
    'testimonials.subtitle': 'Valódi történetek azoktól, akiknek új életet indítottunk.',
    'testimonials.source.google': 'Google Értékelés',
    'testimonials.viewall': 'Összes vélemény',

    'cta.title': 'Készen áll az utazásra?',
    'cta.subtitle': 'Foglaljon ingyenes 30 perces konzultációt, és tegye meg az első lépést az új élete felé.',
    'cta.book': 'Ingyenes konzultáció',
    'cta.assess': 'Ingyenes jogosultság felmérés',

    'about.title': 'A Harmony Immigrationről',
    'about.subtitle': 'Személyes tapasztalat, szakmai tudás, valódi törődés.',
    'about.team.title': 'Csapatunk',
    'about.credentials.title': 'Szakmai Akkreditációk',

    'contact.title': 'Lépjen Kapcsolatba Velünk',
    'contact.subtitle': 'Örömmel segítünk. Keressen telefonon, e-mailben, vagy foglaljon ingyenes konzultációt.',
    'contact.address': 'Cím',
    'contact.phone': 'Telefon',
    'contact.email': 'E-mail',
    'contact.hours': 'Nyitvatartás',
    'contact.hours.weekdays': 'Hétfő – Péntek',
    'contact.hours.time': '9:00 – 17:00',
    'contact.book.title': 'Ingyenes Konzultáció Foglalása',
    'contact.book.desc': 'Foglalja le ingyenes 30 perces megbeszélését Calendly-n keresztül.',
    'contact.book.btn': 'Időpontfoglaló megnyitása',
    'contact.social': 'Kövessen Minket',

    'footer.tagline': 'Új-Zéland & Ausztrália — Együtt Célba Érünk',
    'footer.lia': 'LIA #202001046',
    'footer.marn': 'MARN #2418597',
    'footer.copyright': '© {year} Harmony Immigration Ltd. Minden jog fenntartva.',
    'footer.links.services': 'Szolgáltatások',
    'footer.links.visas': 'Vízumok',
    'footer.links.about': 'Rólunk',
    'footer.links.contact': 'Kapcsolat',
    'footer.links.blog': 'Blog',
    'footer.links.employers': 'Munkáltatóknak',

    'blog.title': 'Bevándorlási Hírek',
    'blog.subtitle': 'Útmutatók, sikertörténetek és a legfrissebb jogszabályi változások.',
    'blog.readmore': 'Cikk olvasása',
    'blog.by': 'Szerző:',
    'blog.min_read': 'perc olvasás',

    'events.title': 'Események és Workshopok',
    'events.subtitle': 'Ingyenes webináriumok, közösségi workshopok és tájékoztató estek.',
    'events.none': 'Jelenleg nincsenek közelgő események — látogasson vissza hamarosan.',
    'events.online': 'Online',
    'events.register': 'Regisztráció',
    'events.past': 'Korábbi Események',

    'employers.title': 'Munkáltatóknak',
    'employers.subtitle': 'Képzett, sokszínű munkaerőt építhet a mi segítségünkkel.',
    'employers.aewv.title': 'Akkreditált Munkáltatói Munkavállalási Vízum (AEWV)',
    'employers.aewv.desc': 'Egyszerűsítjük az akkreditációs folyamatot, hogy gyorsan és megfelelően alkalmazhasson külföldi munkavállalókat.',

    'visa.enquire': 'Érdeklődjön erről a vízumról',
    'visa.free_badge': 'Ingyenesen biztosítva',
    'visa.faq.title': 'Gyakran Ismételt Kérdések',

    'meta.site_name': 'Harmony Immigration',
    'meta.default_desc': 'Engedéllyel rendelkező bevándorlási tanácsadók Új-Zélandra és Ausztráliába.',
  },

  it: {
    'nav.about': 'Chi Siamo',
    'nav.services': 'Servizi',
    'nav.visas': 'Visti',
    'nav.employers': 'Per Datori di Lavoro',
    'nav.blog': 'Blog',
    'nav.events': 'Eventi',
    'nav.testimonials': 'Testimonianze',
    'nav.contact': 'Contatti',
    'nav.book': 'Consulenza Gratuita',

    'hero.tagline': 'Insieme Ti Portiamo Lì',
    'hero.subtitle': 'Consulenti di immigrazione autorizzati per Nuova Zelanda e Australia. La fiducia di centinaia di famiglie.',
    'hero.cta.book': 'Prenota Consulenza Gratuita 30 min',
    'hero.cta.assess': 'Verifica Idoneità Visto',

    'principles.title': 'I Nostri Valori',
    'principles.subtitle': 'Ogni decisione che prendiamo è guidata da tre impegni fondamentali.',
    'principles.ethical.title': 'Etico',
    'principles.ethical.desc': 'Condotta imparziale e professionale che mette il tuo benessere al primo posto.',
    'principles.professional.title': 'Professionale',
    'principles.professional.desc': 'Assistenza compassionevole che costruisce fiducia autentica attraverso un aiuto rispettoso e competente.',
    'principles.reliable.title': 'Affidabile',
    'principles.reliable.desc': 'Follow-through accurato con piena responsabilità e miglioramento continuo.',

    'services.title': 'Come Ti Aiutiamo',
    'services.subtitle': 'Supporto completo all\'immigrazione per ogni fase del tuo percorso.',
    'services.learnmore': 'Scopri di più',
    'services.viewall': 'Tutti i servizi',

    'visas.title': 'Percorsi di Visto',
    'visas.subtitle': 'Ti guidiamo attraverso ogni categoria di visto per Nuova Zelanda e Australia.',
    'visas.learnmore': 'Scopri di più',
    'visas.viewall': 'Tutti i tipi di visto',
    'visas.free': 'Gratuito',

    'testimonials.title': 'Cosa Dicono i Nostri Clienti',
    'testimonials.subtitle': 'Storie reali di persone che abbiamo aiutato a costruire nuove vite.',
    'testimonials.source.google': 'Recensione Google',
    'testimonials.viewall': 'Tutte le recensioni',

    'cta.title': 'Pronto a Iniziare il Tuo Percorso?',
    'cta.subtitle': 'Prenota una consulenza gratuita di 30 minuti e fai il primo passo verso la tua nuova vita.',
    'cta.book': 'Prenota Consulenza Gratuita',
    'cta.assess': 'Valutazione Gratuita',

    'about.title': 'Chi è Harmony Immigration',
    'about.subtitle': 'Esperienza personale, competenza professionale, cura genuina.',
    'about.team.title': 'Il Nostro Team',
    'about.credentials.title': 'Accreditamenti Professionali',

    'contact.title': 'Contattaci',
    'contact.subtitle': 'Siamo qui per aiutarti. Contattaci per telefono, email, o prenota una consulenza gratuita.',
    'contact.address': 'Indirizzo',
    'contact.phone': 'Telefono',
    'contact.email': 'Email',
    'contact.hours': 'Orari di Apertura',
    'contact.hours.weekdays': 'Lunedì – Venerdì',
    'contact.hours.time': '9:00 – 17:00',
    'contact.book.title': 'Prenota una Consulenza Gratuita',
    'contact.book.desc': 'Prenota il tuo colloquio gratuito di 30 minuti tramite Calendly.',
    'contact.book.btn': 'Apri Calendario Prenotazioni',
    'contact.social': 'Seguici',

    'footer.tagline': 'Nuova Zelanda & Australia — Insieme Ti Portiamo Lì',
    'footer.lia': 'LIA #202001046',
    'footer.marn': 'MARN #2418597',
    'footer.copyright': '© {year} Harmony Immigration Ltd. Tutti i diritti riservati.',
    'footer.links.services': 'Servizi',
    'footer.links.visas': 'Visti',
    'footer.links.about': 'Chi Siamo',
    'footer.links.contact': 'Contatti',
    'footer.links.blog': 'Blog',
    'footer.links.employers': 'Per Datori di Lavoro',

    'blog.title': 'Approfondimenti sull\'Immigrazione',
    'blog.subtitle': 'Guide, storie di successo e ultime notizie sulle politiche migratorie.',
    'blog.readmore': 'Leggi l\'articolo',
    'blog.by': 'Di',
    'blog.min_read': 'min di lettura',

    'events.title': 'Eventi e Workshop',
    'events.subtitle': 'Webinar gratuiti, workshop comunitari e serate informative.',
    'events.none': 'Nessun evento in programma al momento — torna presto.',
    'events.online': 'Online',
    'events.register': 'Registrati',
    'events.past': 'Eventi Passati',

    'employers.title': 'Per Datori di Lavoro',
    'employers.subtitle': 'Costruisci una forza lavoro qualificata e diversificata con i nostri servizi di immigrazione.',
    'employers.aewv.title': 'Visto di Lavoro per Datori di Lavoro Accreditati (AEWV)',
    'employers.aewv.desc': 'Semplifichiamo il processo di accreditamento per assumere lavoratori qualificati in modo rapido e conforme.',

    'visa.enquire': 'Informazioni su Questo Visto',
    'visa.free_badge': 'Fornito gratuitamente',
    'visa.faq.title': 'Domande Frequenti',

    'meta.site_name': 'Harmony Immigration',
    'meta.default_desc': 'Consulenti di immigrazione autorizzati per Nuova Zelanda e Australia.',
  },

  de: {
    'nav.about': 'Über Uns',
    'nav.services': 'Leistungen',
    'nav.visas': 'Visa',
    'nav.employers': 'Für Arbeitgeber',
    'nav.blog': 'Blog',
    'nav.events': 'Veranstaltungen',
    'nav.testimonials': 'Bewertungen',
    'nav.contact': 'Kontakt',
    'nav.book': 'Kostenlose Beratung',

    'hero.tagline': 'Gemeinsam Zum Ziel',
    'hero.subtitle': 'Lizenzierte Einwanderungsberater für Neuseeland und Australien. Vertraut von Hunderten von Familien.',
    'hero.cta.book': 'Kostenlose 30-minütige Beratung buchen',
    'hero.cta.assess': 'Visa-Berechtigung prüfen',

    'principles.title': 'Unsere Grundsätze',
    'principles.subtitle': 'Jede unserer Entscheidungen wird von drei Kernverpflichtungen geleitet.',
    'principles.ethical.title': 'Ethisch',
    'principles.ethical.desc': 'Unparteiische, professionelle Vorgehensweise, die Ihr Wohl an erste Stelle setzt.',
    'principles.professional.title': 'Professionell',
    'principles.professional.desc': 'Einfühlsamer Service, der echtes Vertrauen durch respektvolle, sachkundige Unterstützung aufbaut.',
    'principles.reliable.title': 'Zuverlässig',
    'principles.reliable.desc': 'Gründliche Nachverfolgung mit voller Verantwortlichkeit und kontinuierlicher Verbesserung.',

    'services.title': 'Wie Wir Helfen',
    'services.subtitle': 'Umfassende Einwanderungsberatung für jeden Schritt Ihrer Reise.',
    'services.learnmore': 'Mehr erfahren',
    'services.viewall': 'Alle Leistungen',

    'visas.title': 'Visa-Wege',
    'visas.subtitle': 'Wir begleiten Sie durch jede Visakategorie für Neuseeland und Australien.',
    'visas.learnmore': 'Mehr erfahren',
    'visas.viewall': 'Alle Visa-Typen',
    'visas.free': 'Kostenlos',

    'testimonials.title': 'Was Unsere Kunden Sagen',
    'testimonials.subtitle': 'Echte Geschichten von Menschen, denen wir geholfen haben, ein neues Leben aufzubauen.',
    'testimonials.source.google': 'Google-Bewertung',
    'testimonials.viewall': 'Alle Bewertungen',

    'cta.title': 'Bereit für Ihren Start?',
    'cta.subtitle': 'Buchen Sie eine kostenlose 30-minütige Beratung und machen Sie den ersten Schritt in Ihr neues Leben.',
    'cta.book': 'Kostenlose Beratung buchen',
    'cta.assess': 'Kostenlose Eignungsprüfung',

    'about.title': 'Über Harmony Immigration',
    'about.subtitle': 'Persönliche Erfahrung, professionelle Expertise, echte Fürsorge.',
    'about.team.title': 'Unser Team',
    'about.credentials.title': 'Professionelle Akkreditierungen',

    'contact.title': 'Kontakt',
    'contact.subtitle': 'Wir sind für Sie da. Erreichen Sie uns per Telefon, E-Mail oder buchen Sie eine kostenlose Beratung.',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.weekdays': 'Montag – Freitag',
    'contact.hours.time': '9:00 – 17:00 Uhr',
    'contact.book.title': 'Kostenlose Beratung Buchen',
    'contact.book.desc': 'Vereinbaren Sie Ihr kostenloses 30-minütiges Gespräch über Calendly.',
    'contact.book.btn': 'Buchungskalender öffnen',
    'contact.social': 'Folgen Sie Uns',

    'footer.tagline': 'Neuseeland & Australien — Gemeinsam Zum Ziel',
    'footer.lia': 'LIA #202001046',
    'footer.marn': 'MARN #2418597',
    'footer.copyright': '© {year} Harmony Immigration Ltd. Alle Rechte vorbehalten.',
    'footer.links.services': 'Leistungen',
    'footer.links.visas': 'Visa',
    'footer.links.about': 'Über Uns',
    'footer.links.contact': 'Kontakt',
    'footer.links.blog': 'Blog',
    'footer.links.employers': 'Für Arbeitgeber',

    'blog.title': 'Einwanderungs-Einblicke',
    'blog.subtitle': 'Ratgeber, Erfolgsgeschichten und aktuelle Richtlinien-Updates.',
    'blog.readmore': 'Artikel lesen',
    'blog.by': 'Von',
    'blog.min_read': 'Min. Lesezeit',

    'events.title': 'Veranstaltungen & Workshops',
    'events.subtitle': 'Kostenlose Webinare, Community-Workshops und Informationsabende.',
    'events.none': 'Derzeit keine bevorstehenden Veranstaltungen — schauen Sie bald wieder vorbei.',
    'events.online': 'Online',
    'events.register': 'Anmelden',
    'events.past': 'Vergangene Veranstaltungen',

    'employers.title': 'Für Arbeitgeber',
    'employers.subtitle': 'Bauen Sie mit unseren Einwanderungsdienstleistungen eine qualifizierte, vielfältige Belegschaft auf.',
    'employers.aewv.title': 'Akkreditiertes Arbeitgeber-Arbeitsvisum (AEWV)',
    'employers.aewv.desc': 'Wir vereinfachen den Akkreditierungsprozess, damit Sie schnell und rechtskonform Fachkräfte einstellen können.',

    'visa.enquire': 'Über dieses Visum anfragen',
    'visa.free_badge': 'Kostenlos bereitgestellt',
    'visa.faq.title': 'Häufig Gestellte Fragen',

    'meta.site_name': 'Harmony Immigration',
    'meta.default_desc': 'Lizenzierte Einwanderungsberater für Neuseeland und Australien.',
  },
};
