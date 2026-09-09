export const SITE_URL = 'https://www.meridian-immigration.com';
export const SITE_NAME = 'Meridian Immigration';

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'Licensed immigration advisers helping individuals, families, and employers navigate visas, residence, and citizenship with clarity and care.',
  url: SITE_URL,
  telephone: '+1-555-0142',
  email: 'hello@meridian-immigration.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '120 Harbourview Boulevard, Suite 400',
    addressLocality: 'Riverside',
    addressRegion: 'ON',
    postalCode: '00000',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/meridian-immigration',
    'https://www.facebook.com/meridianimmigration',
    'https://www.instagram.com/meridianimmigration',
  ],
  priceRange: 'Contact for pricing',
  areaServed: [{ '@type': 'Country', name: 'Worldwide' }],
};
