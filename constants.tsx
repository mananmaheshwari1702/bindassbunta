
import React from 'react';
import type { NavLink, Feature, Tour } from './types';
import { GroupIcon, WorldIcon, LikeIcon, HostedIcon, CarIcon, MountainIcon, SnowflakeIcon, UtensilsIcon, CompassIcon, BuildingIcon } from './components/Icons';

export const NAV_LINKS_LEFT: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Curated Adventures", href: "#curated-adventures" },
  { label: "Personalised Tours", href: "#" },
];

export const NAV_LINKS_RIGHT: NavLink[] = [
  { label: "Meet the Founder", href: "#founder" },
  { label: "Contact Us", href: "#contact" },
];

export const HERO_IMAGES: string[] = [
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
  "Public/pexels-gibson-chan-1622383532-34504240.jpg",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  "Public/pexels-fmaderebner-340566.jpg",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
  "Public/pexels-sohailone-5191333.jpg",
];

export const FEATURES: Feature[] = [
  {
    icon: <GroupIcon />,
    title: "Boutique Group Travel"
  },
  {
    icon: <WorldIcon />,
    title: "Authentic Experiences"
  },
  {
    icon: <LikeIcon />,
    title: "A Community of Travellers"
  },
  {
    icon: <HostedIcon />,
    title: "Expertly Curated & Hosted"
  },
  {
    icon: <CompassIcon />,
    title: "Seamless Journeys"
  },
  {
    icon: <BuildingIcon />,
    title: "Handpicked Stays"
  }
];

export const TOURS: Tour[] = [
  {
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop",
    title: "Japan",
    subtitle: "Sushi, Shrines & Stories",
    subtitleIcon: <UtensilsIcon />,
    date: "7 Nights / 8 Days",
    slug: "japan",
    heroImage: "https://trotr.world/wp-content/uploads/2025/03/Japan-scaled.jpg",
    price: 195000,
    taxesText: "plus taxes",
    duration: "8 Days, 7 Nights",
    locations: "Tokyo, Mt. Fuji, Kyoto, Osaka",
    tripSnapshot: [
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Ramen-Sushi-Street-Eats.jpg",
        title: "Ramen, Sushi, Street Eats",
        description: "Slurp, bite, and snack your way through Japan’s unforgettable food scene."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Bullet-Train-Magic.jpg",
        title: "Bullet Train Magic",
        description: "Zoom past mountains and cities on the world’s sleekest train ride."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Geishas-Golden-Temples.jpg",
        title: "Geishas & Golden Temples",
        description: "Wander Kyoto’s alleys and marvel at Kinkaku-ji’s shimmering beauty."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Mount-Fuji-Day-Trip.jpg",
        title: "Meeting Fuji San",
        description: "Cruise Lake Ashi and ride a ropeway with Fuji in the backdrop."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Japan-After-Dark.jpg",
        title: "Japan After Dark",
        description: "Shop, snack, and sparkle in, Japan’s most playful, neon-lit streets."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/07/Matcha-and-Mindfulness.jpg",
        title: "Matcha and Mindfulness",
        description: "Experience a tea ceremony, where matcha meets mindfulness in a centuries-old ritual."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/08/LOCAL-IMMERSION.jpg",
        title: "LOCAL IMMERSION",
        description: "Dive deep into the Japanese culture, through guided tours with a local expert"
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/07/ancient-shrines-and-bamboo-forests.jpg",
        title: "Zen, bamboo and stillness",
        description: "Find calm among ancient shrines and bamboo forests"
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/07/Digital-Dreams-at-TeamLab.jpg",
        title: "Digital Dreams at TeamLab",
        description: "Step into a surreal world of light, water, and art that blurs the line between reality and digital."
      },
      {
        image: "https://trotr.world/wp-content/uploads/2025/06/Your-Day-Your-Way.jpg",
        title: "Hiroshima (Optional)",
        description: "A powerful day of remembrance and reflection on Japan’s resilient spirit."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Tokyo Arrival",
        date: "Sun, 29 March 2026",
        image: "Public/pexels-tomas-malik-793526-3408354.jpg",
        description: "Arrive at Narita. Meet English-speaking driver at the arrival lobby and transfer to your hotel for check-in. Evening at leisure in Ginza."
      },
      {
        day: 2,
        title: "Tokyo Full-Day Sightseeing",
        date: "Mon, 30 March 2026",
        image: "Public/pexels-david-tran-1629960371-34644895.jpg",
        description: "Meet your guide at the hotel lobby (8h). Explore Asakusa Senso-ji & Nakamise, Tokyo Skytree (view from base), Imperial Palace (photo stop), Shinjuku Gyoen Park, Meiji Shrine, Harajuku stroll, and Shibuya Crossing. Return to hotel on your own."
      },
      {
        day: 3,
        title: "Hakone Day Trip",
        date: "Tue, 31 March 2026",
        image: "Public/japan-4924856_1280.jpg",
        description: "Early start: train to Shinjuku and board the Odakyu Romancecar. Hakone sightseeing by public transport: Hakone Open-Air Museum, ropeway to Owakudani, Lake Ashi cruise to Motohakone. Evening Romancecar back to Shinjuku. Luggage sent ahead to Kyoto."
      },
      {
        day: 4,
        title: "Shinkansen to Kyoto + Gion & Fushimi",
        date: "Wed, 01 April 2026",
        image: "Public/japan-4649393_1280.jpg",
        description: "Take the Shinkansen to Kyoto via Tsuruga; meet guide at platform and proceed by public transport to hotel, receive luggage. Kyoto touring: Kiyomizu-dera, Gion stroll, and Fushimi Inari Shrine."
      },
      {
        day: 5,
        title: "Kyoto Classics & Arashiyama",
        date: "Thu, 02 April 2026",
        image: "Public/architecture-1869398_1280.jpg",
        description: "Full-day Kyoto sightseeing: Kinkaku-ji (Golden Pavilion), Ryoan-ji, Arashiyama Bamboo Grove, Togetsu Bridge, and Tenryu-ji. Return to hotel."
      },
      {
        day: 6,
        title: "To Osaka + City Highlights",
        date: "Fri, 03 April 2026",
        image: "Public/japan-4549082_1280.jpg",
        description: "Transfer to Osaka with guide. Leave luggage at hotel and explore by public transport: Osaka Castle and Shinsaibashi shopping street. Overnight in Osaka."
      },
      {
        day: 7,
        title: "Hiroshima & Miyajima Day Trip",
        date: "Sat, 04 April 2026",
        image: "Public/pexels-alankrantas-31355868.jpg",
        description: "Local train to Kyoto Station, Shinkansen to Hiroshima. Visit Peace Memorial Park, Museum, and Atomic Bomb Dome. Ferry to Miyajima for Itsukushima Shrine. Shinkansen back to Osaka; overnight."
      },
      {
        day: 8,
        title: "Departure from Osaka",
        date: "Sun, 05 April 2026",
        image: "Public/pexels-thinkscotty-2574091.jpg",
        description: "Private car transfer from hotel to Kansai Airport. Fly home with happy memories."
      }
    ],
    inclusions: [
      "7 nights — 3/4-star hotels on a sharing basis with breakfast",
      "Tokyo full-day sightseeing by public transportation with English-speaking guide",
      "Hakone day tour: Open-Air Museum, ropeway to Owakudani, Lake Ashi cruise, Odakyu Romancecar",
      "Shinkansen Tokyo → Kyoto (via Tsuruga) and guided Kyoto sightseeing (Kiyomizu-dera, Gion, Fushimi Inari / Kinkaku-ji, Ryoan-ji, Arashiyama, Tenryu-ji)",
      "Kyoto → Osaka transfer and Osaka sightseeing (Osaka Castle, Shinsaibashi)",
      "Hiroshima & Miyajima full-day trip with Shinkansen, Peace Memorial Park & Museum, Atomic Bomb Dome, ferry to Itsukushima Shrine",
      "Airport transfers: Narita → Tokyo on arrival, Osaka hotel → Kansai Airport on departure",
      "English-speaking guide on sightseeing days as specified"
    ],
    exclusions: [
      "International and domestic airfare",
      "Early check-in (if required), personal and medical expenses",
      "Meals and beverages not listed",
      "Visa fees and travel insurance",
      "Tips to drivers/guides (@ USD 2 per person per day)",
      "GST, TCS, and city/hotel taxes payable directly",
      "Optional excursions not listed under inclusions"
    ],
    hotels: [
        {
            name: "Tokyo: Villa Fountaine Tokyo Ueno (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
            ]
        },
        {
            name: "Kyoto: My Stays Kyoto Shijo (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
            ]
        }
    ]
  },
  {
    image: "Public/christmas-market-7664171_1920.jpg",
    heroImage: "Public/christmas-market-7664171_1920.jpg",
    title: "European Tour – Spain & Paris",
    subtitle: "From Gaudí to the Eiffel – A 13-Day Grand Adventure",
    subtitleIcon: <CarIcon />,
    date: "12 Nights / 13 Days",
    slug: "european-tour-spain-paris",
    price: 285000,
    taxesText: "plus taxes",
    duration: "13 Days, 12 Nights",
    locations: "Barcelona, Seville, Madrid, Paris",
    tripSnapshot: [
      {
        image: "Public/trail-5726987_1280.jpg",
        title: "Gaudí & Tapas Trails",
        description: "Marvel at Sagrada Familia’s spires, wander Park Güell, and indulge in authentic Spanish tapas."
      },
      {
        image: "Public/pexels-helenalopes-696218.jpg",
        title: "Montserrat & Wine Tasting",
        description: "Ride the cogwheel up to Montserrat, sip Catalonian wines, and savor gourmet tapas with a view."
      },
      {
        image: "Public/pexels-liisbet-luup-121486327-33005624.jpg",
        title: "White Villages & Ronda",
        description: "Drive through Andalucía’s scenic Pueblos Blancos and gaze into the breathtaking Ronda gorge."
      },
      {
        image: "Public/pexels-muratmarangoz-15416779.jpg",
        title: "Cordoba’s Living History",
        description: "Step into the Mezquita, a masterpiece where Islamic arches meet Christian domes in timeless harmony."
      },
      {
        image: "Public/pexels-ahrphotography-21855184.jpg",
        title: "Madrid Royal Heritage",
        description: "Stroll through the Royal Palace and Prado Museum, surrounded by Spanish grandeur and art."
      },
      {
        image: "Public/pexels-shvets-2574641.jpg",
        title: "Paris Icons by Day & Night",
        description: "See the Louvre, cruise the Seine, and watch the Eiffel Tower sparkle as night falls on the City of Light."
      },
      {
        image: "Public/pexels-kirandeepsingh-17220698.jpg",
        title: "Versailles Grandeur",
        description: "Walk the Hall of Mirrors and gardens once ruled by kings, where opulence knows no bounds."
      },
      {
        image: "Public/pexels-peterfazekas-876610.jpg",
        title: "Street Life of Europe",
        description: "From Seville’s orange-lined lanes to Paris’s boulevards, every stroll tells a story."
      }
    ],
    itinerary: [
    {
      day: 1,
      title: "Arrival in Barcelona",
      date: "13 April 2025",
      image: "Public/pexels-apasaric-1388030.jpg",
      description: "Private transfer from Barcelona Airport to your hotel. Relax and enjoy your first evening exploring the local cafés or the vibrant streets near Las Ramblas."
    },
    {
      day: 2,
      title: "Barcelona Highlights – Hop-On Hop-Off & Landmarks",
      date: "14 April 2025",
      image: "Public/overlook-4841320_1280.jpg",
      description: "Start your exploration with a 48-hour Hop-On Hop-Off pass, covering major attractions. Enjoy audioguided visits to the magnificent Sagrada Familia, Park Güell, and ride the Montjuïc Cable Car for sweeping city views."
    },
    {
      day: 3,
      title: "Modernist Marvels",
      date: "15 April 2025",
      image: "Public/casa-mila-4399343_1280.jpg",
      description: "Visit Gaudí’s Casa Milà (La Pedrera) during the Art Season for a glimpse into his iconic architecture. Spend the rest of the day exploring Passeig de Gràcia and local tapas bars."
    },
    {
      day: 4,
      title: "Montserrat & Gourmet Wine Tasting",
      date: "16 April 2025",
      image: "Public/pexels-laker-5732808.jpg",
      description: "Take a day trip to Montserrat via cogwheel train. Explore the monastery, sample local wines, and enjoy a tapas lunch in a serene Catalonian vineyard setting."
    },
    {
      day: 5,
      title: "Barcelona to Seville",
      date: "17 April 2025",
      image: "Public/city-5164368_1280.jpg",
      description: "Private transfer to the airport, then fly to Seville (under own arrangement). After arrival and hotel check-in, enjoy a relaxed evening along the Guadalquivir River."
    },
    {
      day: 6,
      title: "Seville Heritage & Flamenco Night",
      date: "18 April 2025",
      image: "Public/barber-895148_1280.jpg",
      description: "Guided visit to Seville Cathedral and the Royal Alcázar. In the evening, attend an authentic Flamenco performance — an unmissable cultural experience."
    },
    {
      day: 7,
      title: "White Villages & Ronda Excursion",
      date: "19 April 2025",
      image: "Public/spain-7611895_1280.jpg",
      description: "Full-day trip to Andalusia’s famous ‘Pueblos Blancos’ and the cliffside town of Ronda. Discover stunning views and local crafts before returning to Seville."
    },
    {
      day: 8,
      title: "Cordoba – Mosque-Cathedral & City Tour",
      date: "20 April 2025",
      image: "Public/boat-7767575_1280.jpg",
      description: "Embark on a guided city tour of Cordoba to visit the Mezquita (Mosque-Cathedral), the Jewish Quarter, and the flower-lined patios that define the city’s charm."
    },
    {
      day: 9,
      title: "Seville to Madrid",
      date: "21 April 2025",
      image: "Public/madrid-328111_1280.jpg",
      description: "Take a high-speed train to Madrid. Drop your bags and enjoy an easy walking orientation through Puerta del Sol and Plaza Mayor."
    },
    {
      day: 10,
      title: "Royal Palace & Prado Museum",
      date: "22 April 2025",
      image: "Public/castle-park-2487017_1280.jpg",
      description: "Discover Spain’s royal heritage with skip-the-line access to the Royal Palace and Prado Museum. Explore masterpieces by Goya, Velázquez, and El Greco."
    },
    {
      day: 11,
      title: "Flight to Paris & Louvre Visit",
      date: "23 April 2025",
      image: "Public/louvre-5767708_1280.jpg",
      description: "Fly to Paris and transfer privately to your hotel. Later, visit the world-renowned Louvre Museum with an audio guide and explore nearby Tuileries Gardens."
    },
    {
      day: 12,
      title: "Paris City Tour, Seine Cruise & Eiffel Tower",
      date: "24 April 2025",
      image: "Public/paris-4353533_1280.jpg",
      description: "Panoramic city tour by coach, followed by a scenic Seine River cruise and reserved-access entry to the Eiffel Tower’s 2nd floor for stunning city views."
    },
    {
      day: 13,
      title: "Versailles & Departure",
      date: "25 April 2025",
      image: "Public/versailles-94574_1280.jpg",
      description: "Visit the Palace of Versailles with priority access and an audio-guided tour of its opulent halls and gardens. Later, transfer to the airport for your departure."
    }
  ],
  inclusions: [
    "12 nights accommodation in 4-star hotels with daily breakfast",
    "All private airport transfers and intercity transport as specified",
    "Barcelona Hop-On Hop-Off (48h), Sagrada Familia, Park Güell, Montjuïc Cable Car, and Montserrat Tour with wine tasting",
    "Seville Cathedral, Alcázar, Flamenco Show, and full-day tours to Ronda & Cordoba",
    "Madrid train transfer, Royal Palace & Prado Museum audio tours",
    "Paris transfers, Louvre Museum, Eiffel Tower with Seine Cruise, and Versailles Palace excursion",
    "English-speaking guides for major city tours"
  ],
  exclusions: [
    "International flights",
    "Visa fees and travel insurance",
    "Meals not mentioned in inclusions",
    "Tips for drivers and guides (recommended €2 per person per day)",
    "GST, TCS, and city taxes payable directly at hotels"
  ],
  hotels: [
        {
            name: "Barcelona: Hotel HCC Montblanc (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
            ]
        },
        {
            name: "Seville: Hotel Don Paco (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
            ]
        },
        {
            name: "Madrid: Seville: Hotel Don Paco (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
            ]
        },
        {
            name: "Paris: Hotel Kyriad Paris Bercy Village (or similar)",
            images: [
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
                "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
          ]
      }
    ]
  },
  {
    image: "Public/nature-2749610_1280.jpg",
    title: "Australia & New Zealand Explorer",
    subtitle: "From Sydney’s Harbours to Queenstown’s Peaks",
    subtitleIcon: <MountainIcon />,
    date: "15 Nights / 16 Days",
    slug: "australia-newzealand",
    price: 425000,
    taxesText: "plus taxes",
    duration: "16 Days, 15 Nights",
    locations: "Sydney, Cairns, Gold Coast, Christchurch, Queenstown, Melbourne",
    itinerary: [
      { day: 1, title: "Arrive in Sydney", date: "TBC", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop", description: "G'day and welcome to Sydney! Settle in before a sunset cruise on the harbour, taking in iconic views of the Opera House and Harbour Bridge." },
      { day: 2, title: "Sydney Sights & Bondi Beach", date: "TBC", image: "https://images.unsplash.com/photo-1524293581273-79a027986522?q=80&w=2070&auto=format&fit=crop", description: "Explore the historic Rocks district, Royal Botanic Garden, and finish the day with a surf lesson or relaxing on the famous Bondi Beach." },
      { day: 3, title: "Blue Mountains Day Trip", date: "TBC", image: "https://images.unsplash.com/photo-1516466723277-286f78419329?q=80&w=1974&auto=format&fit=crop", description: "A day trip to the stunning Blue Mountains. See the Three Sisters rock formation, ride the world's steepest railway, and enjoy breathtaking valley views." },
      { day: 4, title: "Fly to Cairns & Rainforest", date: "TBC", image: "https://images.unsplash.com/photo-1547561877-388e6dbe59c3?q=80&w=2070&auto=format&fit=crop", description: "Fly to Cairns, the gateway to the tropics. In the afternoon, explore the lush Daintree Rainforest, the oldest rainforest in the world." },
      { day: 5, title: "Great Barrier Reef", date: "TBC", image: "https://images.unsplash.com/photo-1580931535873-16c9a3341b18?q=80&w=2069&auto=format&fit=crop", description: "A full-day catamaran cruise to the Great Barrier Reef. Snorkel or dive among vibrant coral gardens and an incredible array of marine life." },
      { day: 6, title: "Kia Ora, Queenstown!", date: "TBC", image: "https://images.unsplash.com/photo-1506935298137-96c21a415b3a?q=80&w=1964&auto=format&fit=crop", description: "Fly from Cairns to Queenstown, New Zealand. Settle into the adventure capital and prepare for an adrenaline-filled few days." },
      { day: 7, title: "Queenstown's Adrenaline Rush", date: "TBC", image: "https://images.unsplash.com/photo-1559825481-7d129f1a0e89?q=80&w=2070&auto=format&fit=crop", description: "Your choice of adventure! Bungee jump from the historic Kawarau Bridge, take a thrilling jet boat ride, or hike the Queenstown Hill for incredible views." },
      { day: 8, title: "Milford Sound", date: "TBC", image: "https://images.unsplash.com/photo-1509610696553-9243c3e94643?q=80&w=2070&auto=format&fit=crop", description: "A spectacular full-day trip to Milford Sound. Cruise through the fiord, marvel at Mitre Peak, and spot waterfalls, seals, and dolphins." },
      { day: 9, title: "Auckland Bound", date: "TBC", image: "https://images.unsplash.com/photo-1507699622108-49720281693e?q=80&w=2070&auto=format&fit=crop", description: "Fly to Auckland, New Zealand's largest city. Enjoy an evening exploring the vibrant Viaduct Harbour." },
      { day: 10, title: "City of Sails", date: "TBC", image: "https://images.unsplash.com/photo-1594936314811-331569a7c667?q=80&w=1974&auto=format&fit=crop", description: "Discover Auckland's highlights, including a visit to the top of the Sky Tower for panoramic city views and a ferry ride to the charming seaside village of Devonport." },
      { day: 11, title: "Waiheke Island Wineries", date: "TBC", image: "https://images.unsplash.com/photo-1588691512117-215065e93757?q=80&w=1931&auto=format&fit=crop", description: "A day trip to the beautiful Waiheke Island, known for its stunning beaches and world-class wineries. Enjoy tastings and a gourmet lunch." },
      { day: 12, title: "Hobbiton Movie Set", date: "TBC", image: "https://images.unsplash.com/photo-1619894982464-3a05a5a12158?q=80&w=2070&auto=format&fit=crop", description: "A magical day trip to the Hobbiton Movie Set. Explore The Shire and enjoy a drink at the Green Dragon Inn." },
      { day: 13, title: "Free Day", date: "TBC", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop", description: "A free day to explore your favorite city, revisit a spot, or do some last-minute souvenir shopping." },
      { day: 14, title: "Farewell Dinner", date: "TBC", image: "https://images.unsplash.com/photo-151784264-799c98b90714?q=80&w=1974&auto=format&fit=crop", description: "Enjoy a final farewell dinner with the group, sharing stories and memories from an epic journey across two countries." },
      { day: 15, title: "Relax Before Departure", date: "TBC", image: "https://images.unsplash.com/photo-1507525428034-b723a996f329?q=80&w=2070&auto=format&fit=crop", description: "A relaxed morning to pack and enjoy a final flat white before heading to the airport." },
      { day: 16, title: "Departure", date: "TBC", image: "https://images.unsplash.com/photo-1504544747357-c3a6b5796778?q=80&w=2070&auto=format&fit=crop", description: "Depart from Auckland, concluding your epic Down Under adventure." }
    ],
    inclusions: ["15 nights accommodation", "Daily breakfast, 5 dinners", "Internal flights (Sydney-Cairns, Cairns-Queenstown, Queenstown-Auckland)", "All listed tours and activities", "Experienced tour leader"],
    exclusions: ["International flights", "Visas", "Travel insurance", "Optional activities", "Most lunches and dinners"],
  },
  {
    image: "Public/tanzania-4544596_1280.jpg",
    heroImage: "Public/elephant-4389434_1280.jpg",
    title: "Tanzania Wildlife Safari",
    subtitle: "Face to Face with the Great Migration",
    subtitleIcon: <CarIcon />,
    date: "7 Nights / 8 Days",
    slug: "tanzania-wildlife-safari",
    price: 245000,
    taxesText: "plus taxes",
    duration: "8 Days, 7 Nights",
    locations: "Arusha, Tarangire, Serengeti, Ngorongoro, Lake Manyara",
    itinerary: [
      { day: 1, title: "Arrival in Arusha", date: "TBC", image: "https://images.unsplash.com/photo-1587899893233-a379a5a3c1a3?q=80&w=2070&auto=format&fit=crop", description: "Karibu! Welcome to Tanzania. Arrive at Kilimanjaro International Airport and transfer to your lodge in Arusha to relax and prepare for your safari." },
      { day: 2, title: "Tarangire National Park", date: "TBC", image: "https://images.unsplash.com/photo-1615118228747-d0e886a14a89?q=80&w=2070&auto=format&fit=crop", description: "Drive to Tarangire National Park, famous for its large elephant herds and iconic baobab trees. Enjoy your first game drive in search of wildlife." },
      { day: 3, title: "To the Serengeti", date: "TBC", image: "https://images.unsplash.com/photo-1586994723444-2bf0fb75043d?q=80&w=2070&auto=format&fit=crop", description: "Journey to the world-renowned Serengeti National Park. Enjoy a game drive en route to your camp, located in the heart of the savannah." },
      { day: 4, title: "Heart of the Serengeti", date: "TBC", image: "https://images.unsplash.com/photo-1531338328574-3323b6b63690?q=80&w=2070&auto=format&fit=crop", description: "A full day exploring the vast plains of the Serengeti. Search for the Big Five and witness the drama of the African wilderness unfold." },
      { day: 5, title: "Ngorongoro Crater", date: "TBC", image: "https://images.unsplash.com/photo-1589947938363-6d3067f1604a?q=80&w=2070&auto=format&fit=crop", description: "Descend into the Ngorongoro Crater, a UNESCO World Heritage Site. This 'Garden of Eden' is home to an incredible density of wildlife, including the rare black rhino." },
      { day: 6, title: "Crater Floor & Maasai Village", date: "TBC", image: "https://images.unsplash.com/photo-1529126426038-5c4d32f4a56c?q=80&w=2070&auto=format&fit=crop", description: "Another game drive on the crater floor. In the afternoon, visit a traditional Maasai village to learn about their unique culture and way of life." },
      { day: 7, title: "Return to Arusha", date: "TBC", image: "https://images.unsplash.com/photo-1588147810141-5a4a58434a58?q=80&w=2070&auto=format&fit=crop", description: "Enjoy a final morning game drive before driving back to Arusha. Celebrate your safari adventure with a farewell dinner." },
      { day: 8, title: "Departure", date: "TBC", image: "https://images.unsplash.com/photo-1601637503554-2c7813a24121?q=80&w=1968&auto=format&fit=crop", description: "Transfer to Kilimanjaro International Airport for your flight home, with memories of an unforgettable safari." },
    ],
    inclusions: ["7 nights in safari lodges/camps", "All meals on safari", "4x4 safari vehicle with a professional driver/guide", "All park fees and crater service fees", "Airport transfers"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Tips for your guide", "Items of a personal nature"],
  },
  {
    image: "Public/ocean-829715_1280.jpg",
    heroImage: "Public/ocean-829715_1280.jpg",
    title: "Magical Mauritius Getaway",
    subtitle: "Beaches, Waterfalls & Island Adventures",
    subtitleIcon: <CarIcon />,
    date: "5 Nights / 6 Days",
    slug: "magical-mauritius-getaway",
    price: 125000,
    taxesText: "plus taxes",
    duration: "6 Days, 5 Nights",
    locations: "Port Louis, Ile Aux Cerfs, Chamarel, Tamarind Falls"
  },  
  {
    image: "Public/italy-1215430_1280.jpg",
    heroImage: "Public/italy-1215430_1280.jpg",
    title: "Slovenia & South Basilicata Boutique Tour",
    subtitle: "Hidden Europe – From Ljubljana to Matera & the Amalfi Coast",
    subtitleIcon: <CarIcon />,
    date: "9 Nights / 10 Days",
    slug: "slovenia-basilicata-boutique-tour",
    price: 199000,
    taxesText: "plus taxes",
    duration: "10 Days, 9 Nights",
    locations: "Ljubljana, Matera, Potenza, Sorrento, Rome"
},
  {
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    title: "Full Vietnam Experience",
    subtitle: "Halong Bays, Lantern Streets & Island Escapes",
    subtitleIcon: <UtensilsIcon />,
    date: "8 Nights / 9 Days",
    slug: "full-vietnam-experience",
    price: 168000,
    taxesText: "plus taxes",
    duration: "9 Days, 8 Nights",
    locations: "Hanoi, Halong Bay, Da Nang, Hoi An, Phu Quoc, Ho Chi Minh City"
  },
  {
    image: "Public/singapore-243671_1280.jpg",
    heroImage: "Public/singapore-243671_1280.jpg",
    title: "Singapore & Malaysia Discovery",
    subtitle: "Urban Skylines, Gardens & Cultural Wonders",
    subtitleIcon: <CarIcon />,
    date: "8 Nights / 9 Days",
    slug: "singapore-malaysia-discovery",
    price: 152000,
    taxesText: "plus taxes",
    duration: "9 Days, 8 Nights",
    locations: "Singapore, Kuala Lumpur, Genting, Putrajaya"
  },
  {
    image: "Public/mountain-7343375_1280.jpg",
    title: "Truly Switzerland Experience",
    subtitle: "Alpine Beauty, Chocolate Trails & Rhine Falls",
    subtitleIcon: <MountainIcon />,
    date: "4 Nights / 5 Days",
    slug: "truly-swiss-itinerary",
  },
  {
    image: "Public/busan-7271234_1280.jpg",
    heroImage: "Public/busan-7271234_1280.jpg",
    title: "South Korea Discovery",
    subtitle: "Culture, Coastlines & City Lights",
    subtitleIcon: <CarIcon />,
    date: "7 Nights / 8 Days",
    slug: "south-korea-discovery",
    price: 189000,
    taxesText: "plus taxes",
    duration: "8 Days, 7 Nights",
    locations: "Seoul, Busan, Jeju Island, Nami Island"
  },
  {
    image: "Public/pexels-freestockpro-1031659.jpg",
    heroImage: "Public/thailand-getaway.jpg",
    title: "Thailand Girls’ Getaway",
    subtitle: "Beaches, Nightlife & Island Adventures",
    subtitleIcon: <UtensilsIcon />,
    date: "5 Nights / 6 Days",
    slug: "thailand-girls-getaway",
    price: 98000,
    taxesText: "plus taxes",
    duration: "6 Days, 5 Nights",
    locations: "Koh Samui, Bangkok"
  }
];

export const GALLERY_IMAGES: string[] = [
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop",
    "Public/louvre-7146800_1280.jpg",
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
    "Public/tram-8352473_1280.jpg",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop",
    "Public/tokyo-skytree-8645455_1280.jpg"
];
