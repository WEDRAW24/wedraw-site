const BASE_URL = 'https://wedraw.uk'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: 'WEDRAW',
      url: BASE_URL,
      logo: `${BASE_URL}/icon.svg`,
      email: 'info@wedraw.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '59 Prince Street',
        addressLocality: 'Bristol',
        postalCode: 'BS1 4QH',
        addressCountry: 'GB',
      },
      areaServed: 'GB',
      description:
        'WEDRAW is an innovative event design and site planning studio. We design, we survey, we mark out — transforming spaces into unforgettable events.',
    },
    {
      '@type': 'Service',
      name: 'Event site survey',
      description:
        'Site survey for event design and planning. We gather critical information including terrain, vegetation and utilities to inform design decisions.',
      provider: { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      name: 'CAD design for events',
      description:
        'Event design and site planning using CAD. We develop designs that balance creativity with operational demands for seamless events.',
      provider: { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      name: 'Event site mark out',
      description:
        'On-site mark out using GPS technology and clear, color-coded markers. We set the project on the right path with precision and design integrity.',
      provider: { '@id': `${BASE_URL}/#organization` },
    },
  ],
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
