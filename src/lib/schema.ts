export const SITE_URL = 'https://www.harmony-immigration.com';
export const SITE_NAME = 'Harmony Immigration Services';

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'Licensed immigration advisers helping individuals, families, and employers navigate visas, residence, and citizenship with clarity and care.',
  url: SITE_URL,
  telephone: '+64 21 270 4860',
  email: 'info@harmony-immigration.com',
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
  priceRange: 'Contact for pricing',
  areaServed: [
    { '@type': 'Country', name: 'New Zealand' },
    { '@type': 'Country', name: 'Australia' },
  ],
};
