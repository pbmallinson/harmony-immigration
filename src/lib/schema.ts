export const SITE_URL = 'https://harmony-immigration.com';

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Harmony Immigration Ltd',
  description:
    'Licensed immigration advisers for New Zealand and Australia. Expert visa guidance, translation, and settlement support.',
  url: SITE_URL,
  telephone: '+6421270 4860',
  email: 'harmonyimmigration.nz@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '48 Holdens Road',
    addressLocality: 'Henderson',
    addressRegion: 'Auckland',
    postalCode: '0612',
    addressCountry: 'NZ',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/harmony-immigration',
    'https://www.facebook.com/profile.php?id=100063787283052',
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr Edit Fellner-Andrejkovics',
    jobTitle: 'Licensed Immigration Adviser',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Licensed Immigration Adviser',
        credentialCategory: 'licence',
        identifier: '202001046',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Registered Migration Agent (Australia)',
        credentialCategory: 'licence',
        identifier: 'MARN 2418597',
      },
    ],
    knowsLanguage: ['en', 'hu', 'it', 'de'],
  },
  priceRange: 'Contact for pricing',
  currenciesAccepted: 'NZD',
  areaServed: [
    { '@type': 'Country', name: 'New Zealand' },
    { '@type': 'Country', name: 'Australia' },
  ],
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr Edit Fellner-Andrejkovics',
  jobTitle: 'Licensed Immigration Adviser & Director',
  worksFor: {
    '@type': 'Organization',
    name: 'Harmony Immigration Ltd',
    url: SITE_URL,
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'PhD in Law',
      credentialCategory: 'degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master\'s in Translation, Interpreting and Intercultural Communication',
      credentialCategory: 'degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Licensed Immigration Adviser — LIA #202001046',
      credentialCategory: 'licence',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Registered Migration Agent Australia — MARN #2418597',
      credentialCategory: 'licence',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified Translator (English–Hungarian) — NAATI',
      credentialCategory: 'certificate',
    },
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'English' },
    { '@type': 'Language', name: 'Hungarian' },
    { '@type': 'Language', name: 'Italian' },
    { '@type': 'Language', name: 'German' },
  ],
};
