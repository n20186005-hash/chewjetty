// Pemalar tapak yang bebas bahasa (bukan berubah mengikut terjemahan).
export const SITE = {
  name: 'Chew Jetty',
  shortTitle: 'Chew Jetty',
  country: 'MY',
  mapsUrl: 'https://maps.app.goo.gl/fa5EV5aNcFuW1jhL8',
  ga4Id: 'G-HXM22WWPKP',
} as const;

// Data berstruktur (JSON-LD) yang bebas bahasa.
export const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Pengkalan Weld',
  addressLocality: 'George Town',
  addressRegion: 'Pulau Pinang',
  postalCode: '10300',
  addressCountry: 'MY',
} as const;

export const GEO = {
  '@type': 'GeoCoordinates',
  latitude: '5.4127175',
  longitude: '100.3397723',
} as const;

export const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '09:00',
  closes: '21:00',
} as const;

export const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.1',
  reviewCount: '8000',
  bestRating: '5',
  worstRating: '1',
} as const;

export const TOURIST_TYPES = ['Cultural tourist', 'Family visitor', 'Photographer', 'History enthusiast'] as const;

export const GALLERY_COUNT = 19;

export const HERO_IMAGE = '/gallery/chew-jetty-14.jpg';

export const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0279263081957!2d100.33719201213927!3d5.412717494543811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac38d0fb545e7%3A0xc1b12a535798fa94!2z5aeT5ZGo5qGl!5e0!3m2!1sen-US!2sus!4v1786584457500!5m2!1sen-US!2sus';
