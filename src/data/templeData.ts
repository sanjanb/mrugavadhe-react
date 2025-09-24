export interface Deity {
  id: string;
  name: string;
  description: string;
  image: string;
  significance: string;
  offerings: string[];
  timings: string;
}

export interface Festival {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
  duration: string;
  specialEvents: string[];
}

export interface Pooja {
  id: string;
  name: string;
  description: string;
  duration: string;
  cost: number;
  timing: string;
  benefits: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
}

export const templeInfo = {
  name: 'श्री मल्लिकार्जुन स्वामी मंदिर',
  englishName: 'Sri Mallikarjuna Swamy Temple',
  location: 'Mrugavadhe',
  district: 'Shivamogga',
  state: 'Karnataka',
  pincode: '577432',
  river: 'Tunga',
  historicalSignificance: 'According to Ramayana, this is where Lord Rama installed a Shivalinga after slaying demon Maricha who came in the form of a golden deer.',
  mainDeity: 'Lord Mallikarjuna (Shiva)',
  specialFeature: '4.5 feet tall Shivalinga',
  originalName: 'Malahanikareshwar',
  establishedBy: 'Lord Rama',
  architecturalStyle: 'Ancient Dravidian',
  riverLocation: 'On the banks of River Tunga'
};

export const deities: Deity[] = [
  {
    id: 'mallikarjuna',
    name: 'श्री मल्लिकार्जुन स्वामी',
    description: 'The main deity of the temple, Lord Mallikarjuna is a form of Lord Shiva. The temple houses a magnificent 4.5 feet tall Shivalinga.',
    image: '/images/mallikarjuna-deity.jpg',
    significance: 'Installed by Lord Rama himself after slaying demon Maricha. Originally named Malahanikareshwar.',
    offerings: ['Milk Abhisheka', 'Rudrabhisheka', 'Bilva Leaves', 'Flowers', 'Fruits'],
    timings: 'Morning: 6:00 AM - 12:00 PM, Evening: 4:00 PM - 8:00 PM'
  },
  {
    id: 'ganesha',
    name: 'श्री गणेश',
    description: 'Lord Ganesha, the remover of obstacles, blesses devotees at the temple entrance.',
    image: '/images/ganesha-deity.jpg',
    significance: 'Worshipped before beginning any ritual or prayer in the temple.',
    offerings: ['Modak', 'Coconut', 'Flowers', 'Durva Grass'],
    timings: 'Morning: 6:00 AM - 12:00 PM, Evening: 4:00 PM - 8:00 PM'
  }
];

export const festivals: Festival[] = [
  {
    id: 'mahashivratri',
    name: 'महाशिवरात्रि',
    date: 'February/March (Phalguna Krishna Chaturdashi)',
    description: 'The most important festival celebrating Lord Shiva. Devotees observe fast and perform night-long prayers.',
    image: '/images/mahashivratri.jpg',
    duration: '1 day',
    specialEvents: ['Night-long prayers', 'Rudrabhisheka', 'Cultural programs', 'Anna Daana']
  },
  {
    id: 'kartik-deepotsav',
    name: 'कार्तिक दीपोत्सव',
    date: 'October/November (Kartik Purnima)',
    description: 'Festival of lights celebrated with thousands of oil lamps illuminating the temple.',
    image: '/images/deepotsav.jpg',
    duration: '3 days',
    specialEvents: ['Lamp lighting ceremony', 'River aarti', 'Devotional singing', 'Prasada distribution']
  },
  {
    id: 'annual-jatra',
    name: 'वार्षिक जात्रा',
    date: 'January/February',
    description: 'Annual temple festival with grand celebrations and cultural performances.',
    image: '/images/annual-jatra.jpg',
    duration: '5 days',
    specialEvents: ['Deity procession', 'Cultural performances', 'Trade fair', 'Community feast']
  }
];

export const poojas: Pooja[] = [
  {
    id: 'rudrabhisheka',
    name: 'रुद्राभिषेक',
    description: 'Sacred abhisheka of Lord Shiva with milk, honey, and other holy substances.',
    duration: '45 minutes',
    cost: 501,
    timing: '6:30 AM, 11:00 AM, 6:00 PM',
    benefits: 'Removes negative energy, brings peace and prosperity'
  },
  {
    id: 'milk-abhisheka',
    name: 'दूध अभिषेक',
    description: 'Simple milk offering to Lord Mallikarjuna.',
    duration: '20 minutes',
    cost: 101,
    timing: 'Throughout the day',
    benefits: 'Purification of mind and soul'
  },
  {
    id: 'archana',
    name: 'अर्चना',
    description: 'Chanting of 108 names of Lord Shiva with flower offerings.',
    duration: '15 minutes',
    cost: 51,
    timing: 'Every hour during temple hours',
    benefits: 'Spiritual upliftment and divine blessings'
  },
  {
    id: 'special-seva',
    name: 'विशेष सेवा',
    description: 'Comprehensive worship including abhisheka, archana, and aarti.',
    duration: '90 minutes',
    cost: 1001,
    timing: 'By appointment',
    benefits: 'Complete spiritual purification and fulfillment of wishes'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'महाशिवरात्रि 2025 की तैयारियां शुरू',
    date: '2025-01-15',
    excerpt: 'इस वर्ष महाशिवरात्रि के लिए विशेष व्यवस्था और सांस्कृतिक कार्यक्रमों की योजना बनाई गई है।',
    content: 'मृगावधे मंदिर में महाशिवरात्रि 2025 की तैयारियां पूरे जोश के साथ शुरू हो गई हैं। इस पवित्र अवसर पर भक्तों के लिए विशेष व्यवस्था की जा रही है। रात्रि जागरण, रुद्राभिषेक, और सांस्कृतिक कार्यक्रमों का आयोजन किया जाएगा।',
    image: '/images/news-mahashivratri.jpg',
    category: 'Festival'
  },
  {
    id: '2',
    title: 'Temple Renovation Updates',
    date: '2025-01-10',
    excerpt: 'The temple renovation work is progressing well with new facilities for devotees.',
    content: 'The ongoing renovation of the temple premises is making good progress. New facilities including improved seating arrangements, better lighting, and enhanced safety measures are being implemented for the comfort of devotees.',
    image: '/images/news-renovation.jpg',
    category: 'Infrastructure'
  },
  {
    id: '3',
    title: 'New Online Booking System Launched',
    date: '2025-01-05',
    excerpt: 'Devotees can now book poojas and sevas online through our new digital platform.',
    content: 'To make it easier for devotees to participate in temple rituals, we have launched a new online booking system. Devotees can now book various poojas, sevas, and special events through our website.',
    category: 'Technology'
  }
];

export const templeImages = {
  hero: '/images/temple-hero.jpg',
  architecture: [
    '/images/temple-entrance.jpg',
    '/images/temple-tower.jpg',
    '/images/temple-courtyard.jpg',
    '/images/temple-sanctum.jpg'
  ],
  festivals: [
    '/images/festival-1.jpg',
    '/images/festival-2.jpg',
    '/images/festival-3.jpg'
  ],
  river: [
    '/images/tunga-river.jpg',
    '/images/river-view.jpg'
  ],
  general: [
    'https://www.en.thirthahalli.org/wp-content/uploads/2023/07/%E0%B2%AE%E0%B3%83%E0%B2%97%E0%B2%BE%E0%B2%B5%E0%B2%A7%E0%B3%86-4.webp',
    'https://www.en.thirthahalli.org/wp-content/uploads/2023/07/%E0%B2%AE%E0%B3%83%E0%B2%97%E0%B2%BE%E0%B2%B5%E0%B2%A7%E0%B3%86-6-.webp',
    'https://www.en.thirthahalli.org/wp-content/uploads/2024/08/IMG_20240810_132844.jpg',
    'https://www.en.thirthahalli.org/wp-content/uploads/2024/08/IMG_20240810_132848.jpg'
  ]
};