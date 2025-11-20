
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
  "pexels-gibson-chan-1622383532-34504240.jpg",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
  "pexels-fmaderebner-340566.jpg",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
  "pexels-sohailone-5191333.jpg",
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
        image: "pexels-tomas-malik-793526-3408354.jpg",
        description: "Arrive at Narita. Meet English-speaking driver at the arrival lobby and transfer to your hotel for check-in. Evening at leisure in Ginza."
      },
      {
        day: 2,
        title: "Tokyo Full-Day Sightseeing",
        date: "Mon, 30 March 2026",
        image: "pexels-david-tran-1629960371-34644895.jpg",
        description: "Meet your guide at the hotel lobby (8h). Explore Asakusa Senso-ji & Nakamise, Tokyo Skytree (view from base), Imperial Palace (photo stop), Shinjuku Gyoen Park, Meiji Shrine, Harajuku stroll, and Shibuya Crossing. Return to hotel on your own."
      },
      {
        day: 3,
        title: "Hakone Day Trip",
        date: "Tue, 31 March 2026",
        image: "japan-4924856_1280.jpg",
        description: "Early start: train to Shinjuku and board the Odakyu Romancecar. Hakone sightseeing by public transport: Hakone Open-Air Museum, ropeway to Owakudani, Lake Ashi cruise to Motohakone. Evening Romancecar back to Shinjuku. Luggage sent ahead to Kyoto."
      },
      {
        day: 4,
        title: "Shinkansen to Kyoto + Gion & Fushimi",
        date: "Wed, 01 April 2026",
        image: "japan-4649393_1280.jpg",
        description: "Take the Shinkansen to Kyoto via Tsuruga; meet guide at platform and proceed by public transport to hotel, receive luggage. Kyoto touring: Kiyomizu-dera, Gion stroll, and Fushimi Inari Shrine."
      },
      {
        day: 5,
        title: "Kyoto Classics & Arashiyama",
        date: "Thu, 02 April 2026",
        image: "architecture-1869398_1280.jpg",
        description: "Full-day Kyoto sightseeing: Kinkaku-ji (Golden Pavilion), Ryoan-ji, Arashiyama Bamboo Grove, Togetsu Bridge, and Tenryu-ji. Return to hotel."
      },
      {
        day: 6,
        title: "To Osaka + City Highlights",
        date: "Fri, 03 April 2026",
        image: "japan-4549082_1280.jpg",
        description: "Transfer to Osaka with guide. Leave luggage at hotel and explore by public transport: Osaka Castle and Shinsaibashi shopping street. Overnight in Osaka."
      },
      {
        day: 7,
        title: "Hiroshima & Miyajima Day Trip",
        date: "Sat, 04 April 2026",
        image: "pexels-alankrantas-31355868.jpg",
        description: "Local train to Kyoto Station, Shinkansen to Hiroshima. Visit Peace Memorial Park, Museum, and Atomic Bomb Dome. Ferry to Miyajima for Itsukushima Shrine. Shinkansen back to Osaka; overnight."
      },
      {
        day: 8,
        title: "Departure from Osaka",
        date: "Sun, 05 April 2026",
        image: "pexels-thinkscotty-2574091.jpg",
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
    image: "christmas-market-7664171_1920.jpg",
    heroImage: "christmas-market-7664171_1920.jpg",
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
        image: "trail-5726987_1280.jpg",
        title: "Gaudí & Tapas Trails",
        description: "Marvel at Sagrada Familia’s spires, wander Park Güell, and indulge in authentic Spanish tapas."
      },
      {
        image: "pexels-helenalopes-696218.jpg",
        title: "Montserrat & Wine Tasting",
        description: "Ride the cogwheel up to Montserrat, sip Catalonian wines, and savor gourmet tapas with a view."
      },
      {
        image: "pexels-liisbet-luup-121486327-33005624.jpg",
        title: "White Villages & Ronda",
        description: "Drive through Andalucía’s scenic Pueblos Blancos and gaze into the breathtaking Ronda gorge."
      },
      {
        image: "pexels-muratmarangoz-15416779.jpg",
        title: "Cordoba’s Living History",
        description: "Step into the Mezquita, a masterpiece where Islamic arches meet Christian domes in timeless harmony."
      },
      {
        image: "pexels-ahrphotography-21855184.jpg",
        title: "Madrid Royal Heritage",
        description: "Stroll through the Royal Palace and Prado Museum, surrounded by Spanish grandeur and art."
      },
      {
        image: "pexels-shvets-2574641.jpg",
        title: "Paris Icons by Day & Night",
        description: "See the Louvre, cruise the Seine, and watch the Eiffel Tower sparkle as night falls on the City of Light."
      },
      {
        image: "pexels-kirandeepsingh-17220698.jpg",
        title: "Versailles Grandeur",
        description: "Walk the Hall of Mirrors and gardens once ruled by kings, where opulence knows no bounds."
      },
      {
        image: "pexels-peterfazekas-876610.jpg",
        title: "Street Life of Europe",
        description: "From Seville’s orange-lined lanes to Paris’s boulevards, every stroll tells a story."
      }
    ],
    itinerary: [
    {
      day: 1,
      title: "Arrival in Barcelona",
      date: "13 April 2025",
      image: "pexels-apasaric-1388030.jpg",
      description: "Private transfer from Barcelona Airport to your hotel. Relax and enjoy your first evening exploring the local cafés or the vibrant streets near Las Ramblas."
    },
    {
      day: 2,
      title: "Barcelona Highlights – Hop-On Hop-Off & Landmarks",
      date: "14 April 2025",
      image: "overlook-4841320_1280.jpg",
      description: "Start your exploration with a 48-hour Hop-On Hop-Off pass, covering major attractions. Enjoy audioguided visits to the magnificent Sagrada Familia, Park Güell, and ride the Montjuïc Cable Car for sweeping city views."
    },
    {
      day: 3,
      title: "Modernist Marvels",
      date: "15 April 2025",
      image: "casa-mila-4399343_1280.jpg",
      description: "Visit Gaudí’s Casa Milà (La Pedrera) during the Art Season for a glimpse into his iconic architecture. Spend the rest of the day exploring Passeig de Gràcia and local tapas bars."
    },
    {
      day: 4,
      title: "Montserrat & Gourmet Wine Tasting",
      date: "16 April 2025",
      image: "pexels-laker-5732808.jpg",
      description: "Take a day trip to Montserrat via cogwheel train. Explore the monastery, sample local wines, and enjoy a tapas lunch in a serene Catalonian vineyard setting."
    },
    {
      day: 5,
      title: "Barcelona to Seville",
      date: "17 April 2025",
      image: "city-5164368_1280.jpg",
      description: "Private transfer to the airport, then fly to Seville (under own arrangement). After arrival and hotel check-in, enjoy a relaxed evening along the Guadalquivir River."
    },
    {
      day: 6,
      title: "Seville Heritage & Flamenco Night",
      date: "18 April 2025",
      image: "barber-895148_1280.jpg",
      description: "Guided visit to Seville Cathedral and the Royal Alcázar. In the evening, attend an authentic Flamenco performance — an unmissable cultural experience."
    },
    {
      day: 7,
      title: "White Villages & Ronda Excursion",
      date: "19 April 2025",
      image: "spain-7611895_1280.jpg",
      description: "Full-day trip to Andalusia’s famous ‘Pueblos Blancos’ and the cliffside town of Ronda. Discover stunning views and local crafts before returning to Seville."
    },
    {
      day: 8,
      title: "Cordoba – Mosque-Cathedral & City Tour",
      date: "20 April 2025",
      image: "boat-7767575_1280.jpg",
      description: "Embark on a guided city tour of Cordoba to visit the Mezquita (Mosque-Cathedral), the Jewish Quarter, and the flower-lined patios that define the city’s charm."
    },
    {
      day: 9,
      title: "Seville to Madrid",
      date: "21 April 2025",
      image: "madrid-328111_1280.jpg",
      description: "Take a high-speed train to Madrid. Drop your bags and enjoy an easy walking orientation through Puerta del Sol and Plaza Mayor."
    },
    {
      day: 10,
      title: "Royal Palace & Prado Museum",
      date: "22 April 2025",
      image: "castle-park-2487017_1280.jpg",
      description: "Discover Spain’s royal heritage with skip-the-line access to the Royal Palace and Prado Museum. Explore masterpieces by Goya, Velázquez, and El Greco."
    },
    {
      day: 11,
      title: "Flight to Paris & Louvre Visit",
      date: "23 April 2025",
      image: "louvre-5767708_1280.jpg",
      description: "Fly to Paris and transfer privately to your hotel. Later, visit the world-renowned Louvre Museum with an audio guide and explore nearby Tuileries Gardens."
    },
    {
      day: 12,
      title: "Paris City Tour, Seine Cruise & Eiffel Tower",
      date: "24 April 2025",
      image: "paris-4353533_1280.jpg",
      description: "Panoramic city tour by coach, followed by a scenic Seine River cruise and reserved-access entry to the Eiffel Tower’s 2nd floor for stunning city views."
    },
    {
      day: 13,
      title: "Versailles & Departure",
      date: "25 April 2025",
      image: "versailles-94574_1280.jpg",
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
    image: "nature-2749610_1280.jpg",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    title: "Australia & New Zealand Explorer",
    subtitle: "From Sydney’s Harbours to Queenstown’s Peaks",
    subtitleIcon: <MountainIcon />,
    date: "15 Nights / 16 Days",
    slug: "australia-newzealand",
    price: 425000,
    taxesText: "plus taxes",
    duration: "16 Days, 15 Nights",
    locations: "Sydney, Cairns, Gold Coast, Christchurch, Queenstown, Melbourne",

    tripSnapshot: [
      {
        image: "bridge-965076_1280.jpg",
        title: "Sydney Harbour Walk",
        description: "Stroll along Darling Harbour and soak in iconic views of the Opera House and Harbour Bridge."
      },
      {
        image: "waterfall-9128051_1280.jpg",
        title: "Blue Mountains & Waterfalls",
        description: "Witness dramatic cliffs, waterfalls and enchanting mountain views with local picnic lunch."
      },
      {
        image: "heart-reef-1649218_1280.jpg",
        title: "Great Barrier Reef Snorkeling",
        description: "Explore colourful coral gardens and underwater life through a guided reef adventure."
      },
      {
        image: "pexels-oskar-gross-1074333632-34760272.jpg",
        title: "Kuranda Skyrail & Scenic Train",
        description: "Glide above a rainforest canopy and return via a heritage scenic railway."
      },
      {
        image: "stork-7543256_1280.jpg",
        title: "Currumbin Wildlife Sanctuary",
        description: "Interact with native wildlife at Australia’s famous conservation park."
      },
      {
        image: "hut-3705346_1280.jpg",
        title: "Christchurch Gondola & Antarctic Centre",
        description: "Experience panoramic city views and an immersive Antarctic encounter."
      },
      {
        image: "church-2464899_1280.jpg",
        title: "Mt Cook & Lake Tekapo",
        description: "Travel through alpine landscapes, glacial lakes and New Zealand’s highest peak."
      },
      {
        image: "fiord-483189_1280.jpg",
        title: "Fiords & Waterfall Cruise",
        description: "Cruise through mystical fiords surrounded by towering cliffs and cascading waterfalls."
      },
      {
        image: "twelve-apostles-587818_1280.jpg",
        title: "Great Ocean Road & Twelve Apostles",
        description: "Witness one of the world’s most scenic coastal drives ending at the majestic Apostles."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive in Sydney",
        date: "21 Dec 2025",
        image: "sydney-opera-house-354375_1280.jpg",
        description:
          "Arrive in Sydney. Private transfer to hotel. Dinner along the harbour on your own. Overnight at Novotel City Centre."
      },
      {
        day: 2,
        title: "Sydney City Tour",
        date: "22 Dec 2025",
        image: "sydney-4670481_1280.jpg",
        description:
          "Walk at Darling Harbour and explore Sydney using the Hop-On Hop-Off ticket. Includes Opera House Guided Tour."
      },
      {
        day: 3,
        title: "Blue Mountain Tour",
        date: "23 Dec 2025",
        image: "kleinwalsertal-2920166_1280.jpg",
        description:
          "Blue Mountain Tour with waterfall walk and picnic lunch by locals. Overnight at Novotel City Centre."
      },
      {
        day: 4,
        title: "Sydney – Free Day",
        date: "24 Dec 2025",
        image: "sydney-366022_1280.jpg",
        description: "Day at leisure. Overnight in Sydney."
      },
      {
        day: 5,
        title: "Fly to Cairns",
        date: "25 Dec 2025",
        image: "lake-2354731_1280.jpg",
        description:
          "Fly to Cairns. Private transfer to hotel. Reef Adventure may shift to Day 6 due to Christmas. Overnight at Mercure City Centre."
      },
      {
        day: 6,
        title: "Reef Adventure + Kuranda",
        date: "26 Dec 2025",
        image: "moorea-7603918_1280.jpg",
        description:
          "Great Barrier Reef Adventure. Skyrail Rainforest Cableway & Scenic Rail. Overnight in Cairns."
      },
      {
        day: 7,
        title: "Fly to Gold Coast",
        date: "27 Dec 2025",
        image: "pexels-mikhail-nilov-6965510.jpg",
        description:
          "Fly to Gold Coast. Visit Currumbin Wildlife Sanctuary. Overnight at Mercure Gold Coast Resort."
      },
      {
        day: 8,
        title: "Gold Coast Adventure",
        date: "28 Dec 2025",
        image: "pexels-risshi-dharane-709174843-28785866.jpg",
        description:
          "Whale Watching not operating; Suggested: Warner Bros Movie World. Overnight at Mercure Gold Coast Resort."
      },
      {
        day: 9,
        title: "Fly to Christchurch",
        date: "29 Dec 2025",
        image: "new-zealand-4826675_1280.jpg",
        description: "Flight via Brisbane. Overnight at IBIS Christchurch."
      },
      {
        day: 10,
        title: "Christchurch City Highlights",
        date: "30 Dec 2025",
        image: "scenery-4857957_1280.jpg",
        description:
          "Full-day tour including Gondola Ride & Antarctica Centre. Overnight at IBIS Christchurch."
      },
      {
        day: 11,
        title: "Mt Cook & Lake Tekapo",
        date: "31 Dec 2025",
        image: "church-2464899_1280.jpg",
        description: "Drive to Queenstown via Mt Cook, Lake Pukaki and Lake Tekapo. Overnight at Novotel Queenstown Lakeside."
      },
      {
        day: 12,
        title: "Queenstown Adventure",
        date: "01 Jan 2026",
        image: "nature-2749610_1280.jpg",
        description:
          "Skyline Gondola & Shotover Jet (1 excursion included). Overnight at Novotel Queenstown."
      },
      {
        day: 13,
        title: "Lake Wakatipu – Walter Peak Farm Cruise",
        date: "02 Jan 2026",
        image: "lake-wakatipu-2143141_1280.jpg",
        description:
          "Cruise + Gourmet BBQ lunch. Overnight at Novotel Queenstown Lakeside."
      },
      {
        day: 14,
        title: "Fly to Melbourne",
        date: "03 Jan 2026",
        image: "melbourne-4718955_1280.jpg",
        description:
          "Fly to Melbourne. Meet & Greet. Overnight at Mercure Melbourne."
      },
      {
        day: 15,
        title: "Great Ocean Road Tour",
        date: "04 Jan 2026",
        image: "twelve-apostles-587818_1280.jpg",
        description:
          "Full-day tour including 12 Apostles. Return to Melbourne."
      },
      {
        day: 16,
        title: "Departure from Melbourne",
        date: "05 Jan 2026",
        image: "pexels-pixabay-46148.jpg",
        description:
          "Morning at leisure. Transfer to airport for flight to India."
      }
    ],

    inclusions: [
      "15 nights accommodation with breakfast",
      "All airport transfers",
      "Sydney: City Tour, Blue Mountains Tour, Opera House Tour",
      "Cairns: Great Barrier Reef Adventure, Skyrail + Scenic Rail",
      "Gold Coast: Currumbin Sanctuary",
      "Christchurch: Gondola + Antarctica Centre",
      "Queenstown: Mt Cook Day Trip, Skyline Gondola / Shotover, Walter Peak Cruise",
      "Melbourne: Great Ocean Road Tour",
      "Internal flights (Sydney–Cairns, Cairns–Gold Coast, Gold Coast–Christchurch, Queenstown–Melbourne)"
    ],

    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Meals not mentioned",
      "Optional tours",
      "Tips and personal expenses"
    ],

    hotels: [
      {
        name: "Sydney: Novotel City Centre (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Cairns: Mercure City Centre (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Gold Coast: Mercure Gold Coast Resort (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Christchurch: IBIS Christchurch (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Queenstown: Novotel Lakeside (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Melbourne: Mercure Melbourne (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      }
    ]
  },
  {
    image: "tanzania-4544596_1280.jpg",
    heroImage: "zebra-4614297_1280.jpg",
    title: "Tanzania Wildlife Safari",
    subtitle: "Face to Face with the Great Migration",
    subtitleIcon: <CarIcon />,
    date: "7 Nights / 8 Days",
    slug: "tanzania-wildlife-safari",
    price: 245000,
    taxesText: "plus taxes",
    duration: "8 Days, 7 Nights",
    locations: "Arusha, Tarangire, Serengeti (Central & North), Ngorongoro, Lake Manyara",

    tripSnapshot: [
      {
        image: "wildebeest-5730597_1280.jpg",
        title: "Wildebeest River Crossing",
        description: "Watch thousands of wildebeest and zebras take on the mighty Mara River during peak migration."
      },
      {
        image: "elephant-4389434_1280.jpg",
        title: "Tarangire Elephant Kingdom",
        description: "Explore Tarangire National Park, home to the world’s largest elephant herds and ancient baobab trees."
      },
      {
        image: "jaguar-1807171_1280.jpg",
        title: "Big Cat Encounters",
        description: "Spot lions, cheetahs, and elusive leopards across Tanzania’s most iconic national parks."
      },
      {
        image: "safari-1845202_1280.jpg",
        title: "Ngorongoro Crater Wonder",
        description: "Descend into the world’s largest unbroken caldera, home to over 30,000 animals including black rhinos."
      },
      {
        image: "cow-7200409_1280.jpg",
        title: "Serengeti Endless Plains",
        description: "Experience sunrise game drives across golden savannahs filled with wildlife."
      },
      {
        image: "birds-4644652_1280.jpg",
        title: "Lake Manyara Flamingos",
        description: "See vibrant flamingo flocks, hippos, and tree‑climbing lions in this scenic national park."
      }
    ],

    itinerary: [
      {
        day: 0,
        title: "Arrival – Arusha & Safari Briefing",
        date: "04 July 2026",
        image: "leopard-163035_1280.jpg",
        description:
          "Arrive at Kilimanjaro Airport and transfer to Arusha Serena Hotel. Rest from jet lag and receive safari briefing. Dinner & overnight in Arusha."
      },
      {
        day: 1,
        title: "Arusha → Tarangire National Park",
        date: "05 July 2026",
        image: "elephant-6956176_1280.jpg",
        description:
          "Early breakfast followed by a full‑day Tarangire game drive. Packed lunch en route. Spot elephants, lions, cheetahs, kudu, and massive herds along the Tarangire River. Dinner & overnight near Tarangire."
      },
      {
        day: 2,
        title: "Tarangire → Serengeti National Park",
        date: "06 July 2026",
        image: "zebras-1016064_1280.jpg",
        description:
          "Drive through Ngorongoro Conservation Area into the endless plains of Serengeti. Full‑day game drive tracking wildebeest, zebras, gazelles, and predators. Sunset arrival at lodge/tented camp."
      },
      {
        day: 3,
        title: "Serengeti – Central to Northern Region",
        date: "07 July 2026",
        image: "giraffe-2369813_1280.jpg",
        description:
          "Full‑day migration tracking toward the Mara River. Expect sightings of lions, leopards, cheetahs, crocodiles, hippos, elephants, and more. Overnight at Tanzania Bush Camp – Mara River."
      },
      {
        day: 4,
        title: "Great Migration – Mara River Crossing",
        date: "08 July 2026",
        image: "wildebeest-5730597_1280.jpg",
        description:
          "Spend the day at the riverbanks witnessing the dramatic migration crossing as wildebeest battle crocodiles and currents. Picnic lunch and full‑day game viewing. Overnight in Northern Serengeti."
      },
      {
        day: 5,
        title: "Northern Serengeti → Ngorongoro",
        date: "09 July 2026",
        image: "tanzania-7455086_1280.jpg",
        description:
          "Morning game drive before departing for Ngorongoro Conservation Area. Scenic drive past Maasai villages and highland landscapes. Overnight near Ngorongoro Crater."
      },
      {
        day: 6,
        title: "Ngorongoro Crater – Full‑Day Safari",
        date: "10 July 2026",
        image: "safari-1845202_1280.jpg",
        description:
          "Descend 600m into the world’s largest intact volcanic caldera. A 5–6 hour game drive reveals black rhinos, lions, elephants, buffalo, hippos, and vibrant birdlife. Evening transfer to Karatu."
      },
      {
        day: 7,
        title: "Lake Manyara → Arusha",
        date: "11 July 2026",
        image: "giraffes-7505706_1280.jpg",
        description:
          "Village walk through Mto wa Mbu visiting farms, local factories, schools, and artisan workshops. Afternoon game drive in Lake Manyara National Park—famous for flamingos & tree‑climbing lions. Drive back to Arusha."
      },
      {
        day: 8,
        title: "Departure",
        date: "12 July 2026",
        image: "pexels-pixabay-46148.jpg",
        description:
          "Depending on flight schedule, transfer to Kilimanjaro Airport. Bid farewell to an unforgettable African journey."
      }
    ],

    inclusions: [
      "7 nights – 3/4/5‑star stays with half‑board meal plan",
      "All meals and accommodations during the safari",
      "Snacks & drinking water in safari vehicle",
      "Tarangire, Serengeti, Ngorongoro & Manyara park entrance fees",
      "Crater service fees & concession fees",
      "Airport transfers",
      "Safari Land Cruiser with pop‑up roof",
      "Professional English‑speaking driver‑guide",
      "Unlimited game drives (no km limit)",
      "Government taxes"
    ],

    exclusions: [
      "International & domestic flights",
      "Tips to guides & drivers",
      "Drinks at lodges",
      "Visa fees & travel insurance",
      "Early check‑in",
      "Personal expenses",
      "Optional excursions",
      "GST & TCS as applicable"
    ],

    hotels: [
      {
        name: "Arusha Serena Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Tarangire Area Lodge (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Serengeti Tented Camp (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Tanzania Bush Camp – Mara River (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Ngorongoro/Karatu Lodge (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      }
    ]
  },
  {
    image: "ocean-829715_1280.jpg",
    heroImage: "ocean-829715_1280.jpg",
    title: "Mauritius – Tropical Luxury Escape",
    subtitle: "Beaches, Lagoons & Island Adventures",
    subtitleIcon: <CarIcon />,
    date: "5 Nights / 6 Days",
    slug: "mauritius-tour",
    price: 155000,
    taxesText: "plus taxes",
    duration: "6 Days, 5 Nights",
    locations: "Port Louis, Ile Aux Cerfs, Tamarind Waterfalls, Chamarel, Gris Gris, South West Mauritius",

    tripSnapshot: [
      {
        image: "cruise-ship-4460493_1280.jpg",
        title: "Catamaran Cruise to Ile Aux Cerfs",
        description: "Sail across turquoise lagoons, snorkel in crystal waters, and enjoy a hot BBQ lunch on board."
      },
      {
        image: "iceland-1768744_1280.jpg",
        title: "Tamarind Waterfall Adventure",
        description: "Hike through lush jungle, swim in natural pools, and explore Mauritius’ iconic cascades."
      },
      {
        image: "glacier-583419_1280.jpg",
        title: "South West Wonders",
        description: "Visit Chamarel, Alexandra Falls, Grand Crater Lake, Gris Gris cliffs, and Rochester Falls."
      },
      {
        image: "lake-200027_1280.jpg",
        title: "Port Louis Culture Walk",
        description: "Experience markets, history, local fruits, sugarcane juice, and the oceanfront promenade."
      },
      {
        image: "man-5462849_1280.jpg",
        title: "Water Sports Paradise",
        description: "Optional: parasailing, banana ride, undersea walk, snorkeling, water-skiing, and more."
      },
      {
        image: "travel-3113734_1280.jpg",
        title: "Sunset Dinners by the Beach",
        description: "Celebrate magical evenings with beachfront dining, cocktails, and ocean breezes."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Mauritius",
        date: "05 June 2026",
        image: "airport-2373727_1280.jpg",
        description:
          "Meet & greet by English-speaking driver. Transfer through sugarcane-lined roads to your resort. Welcome drink and check-in. Enjoy a lazy lunch, beachfront stroll, acclimatization dip, and a sunset welcome dinner. Meals: N/A."
      },
      {
        day: 2,
        title: "Port Louis City + Markets + Aquarium",
        date: "06 June 2026",
        image: "hamburg-4103411_1280.jpg",
        description:
          "After breakfast, head to Port Louis for a relaxed city tour. Explore the Central Market, try tropical fruit juices, and enjoy lunch at the waterfront. Visit Odysseo Aquarium or the casino. Evening: gala celebrations. Meals: B."
      },
      {
        day: 3,
        title: "Catamaran Cruise – Ile Aux Cerfs",
        date: "07 June 2026",
        image: "cruise-ship-4460493_1280.jpg",
        description:
          "Full-day catamaran excursion to Ile Aux Cerfs. Enjoy snorkeling, lagoon swimming, parasailing, water sports (optional), and a hot BBQ lunch on board. Return for a laid-back resort dinner. Meals: B, L."
      },
      {
        day: 4,
        title: "Hike – Tamarind Waterfalls",
        date: "08 June 2026",
        image: "iceland-1768744_1280.jpg",
        description:
          "Half-day guided adventure at Tamarind Waterfall. Hike through jungle trails, explore cascades, swim in natural pools, and enjoy a local snack. Return to hotel for leisure time. Meals: B."
      },
      {
        day: 5,
        title: "South West Mauritius – Full-Day Tour",
        date: "09 June 2026",
        image: "pexels-harrison-reilly-78972762-34783367.jpg",
        description:
          "Explore Rochester Falls, Gris Gris cliffs, Grand Bassin Lake, Alexandra Falls, Chamarel viewpoints. Optional: Tulawaka Mountain Coaster or African Truck Safari. Includes a 3-course Mauritian lunch. Meals: B."
      },
      {
        day: 6,
        title: "Departure",
        date: "10 June 2026",
        image: "pexels-pixabay-46148.jpg",
        description:
          "After breakfast, pack your bags and transfer to the airport. Leave Mauritius with heartwarming memories and stunning photos."
      }
    ],

    inclusions: [
      "5 nights – 4 & 5-star stay on a sharing basis with breakfast",
      "All excursions listed (except optional items)",
      "Private car at disposal with English-speaking driver",
      "Catamaran cruise with BBQ lunch",
      "South West full-day tour with 3-course meal",
      "Tamarind waterfall guided hike",
      "Airport transfers",
      "All taxes (except city tax where applicable)"
    ],

    exclusions: [
      "International airfare",
      "Early check-in / late checkout",
      "Meals not listed",
      "Alcoholic and non-alcoholic beverages",
      "Visa fees & travel insurance",
      "Tips to drivers and guides (USD 2 per person per day)",
      "Optional excursions (parasailing, undersea walk, water sports)",
      "GST & TCS extra",
      "Hotel city tax payable directly"
    ],

    hotels: [
      {
        name: "Mauritius Beach Resort (4/5-Star or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      }
    ]
  },
  {
    image: "italy-1215430_1280.jpg",
    heroImage: "italy-1215430_1280.jpg",
    title: "Slovenia & South Basilicata Boutique Tour",
    subtitle: "Hidden Europe – From Lakes to Caves & Stone Cities",
    subtitleIcon: <CarIcon />,
    date: "9 Nights / 10 Days",
    slug: "slovenia-basilicata-boutique-tour",
    price: 199000,
    taxesText: "plus taxes",
    duration: "10 Days, 9 Nights",
    locations: "Ljubljana, Lake Bled, Postojna, Predjama, Matera, Potenza, Venosa, Sorrento, Amalfi, Rome",

    tripSnapshot: [
      {
        image: "pexels-eugene-kuznetsov-3741806-5565328.jpg",
        title: "Ljubljana Old Town Stroll",
        description: "Begin in Slovenia’s charming capital — riverside cafés, Triple Bridge, and a lively market. Perfect intro to local life."
      },
      {
        image: "pexels-marton-novak-81427533-9244260.jpg",
        title: "Lake Bled & Island Church",
        description: "Row to Bled Island, ring the wishing bell, and visit Bled Castle for sweeping views of the lake and Julian Alps."
      },
      {
        image: "pexels-brett-bennett-162270261-20107303.jpg",
        title: "Postojna Cave & Predjama Castle",
        description: "Explore Slovenia’s dramatic karst landscape — an underground train ride through Postojna Cave and the cliff-hanging Predjama Castle."
      },
      {
        image: "pexels-emilio-sanchez-hernandez-285921208-34776483.jpg",
        title: "Culinary Slovenia",
        description: "Taste local delights from rustic potica to Idrija žlikrofi — a delicious blend of Alpine and Mediterranean flavours."
      },
      {
        image: "pexels-gsn-travel-28277491.jpg",
        title: "Scenic Drives & Vineyards",
        description: "Drive through postcard landscapes, stop at quaint villages, and sample boutique wines in the Karst and Vipava regions."
      },
      {
        image: "pexels-bogdan-giurca-1141359795-26077660.jpg",
        title: "Matera’s Stone Labyrinth",
        description: "From Slovenia’s serenity to Matera’s ancient Sassi — history carved in stone and unforgettable rooftop vistas."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive Ljubljana – Easy Afternoon",
        date: "12 Nov 2025",
        image: "ljubljana-3855146_1280.jpg",
        description: "Arrive in Ljubljana. Private transfer to your hotel. Afternoon at leisure to recover and explore the riverside cafes. Evening guided walking tour of Old Town and dinner suggestion at a traditional Slovenian gostilna."
      },
      {
        day: 2,
        title: "Ljubljana Morning & Lake Bled Afternoon",
        date: "13 Nov 2025",
        image: "pexels-marton-novak-81427533-9244260.jpg",
        description: "Morning: optional Ljubljana Castle funicular for panoramic views and the Central Market for local produce. After lunch, transfer to Lake Bled. Enjoy a pletna boat ride to the island church and time at Bled Castle. Evening transfer to Trieste area for onward flight to Bari and then transfer to Matera."
      },
      {
        day: 3,
        title: "Matera – Sassi & Rupestrian Churches",
        date: "14 Nov 2025",
        image: "matera-2777091_1280.jpg",
        description: "Explore Matera’s UNESCO-listed Sassi district, rock churches and cave dwellings. Rooftop aperitivo with views over the stone city and an evening photography walk."
      },
      {
        day: 4,
        title: "Matera – Local Foods & Cave Wines",
        date: "15 Nov 2025",
        image: "stones-of-matera-4605685_1280.jpg",
        description: "Bread and cheese tasting (Pane di Matera & caciocavallo), visit Palombaro Lungo cistern, optional cycling in Murgia Park, and wine tasting in an ancient cave cellar."
      },
      {
        day: 5,
        title: "Matera → Potenza via Grumentum",
        date: "16 Nov 2025",
        image: "italy-1215430_1280.jpg",
        description: "En route to Potenza, stop at the Grumentum archaeological park. Evening Potenza walking tour including the Cathedral and San Gerardo neighbourhood."
      },
      {
        day: 6,
        title: "Day Trip to Venosa – Wine & Ruins",
        date: "17 Nov 2025",
        image: "pexels-szafran-16702247.jpg",
        description: "Visit Venosa’s Abbey of the Holy Trinity, Aragonese Castle and Roman amphitheatre. Afternoon Aglianico del Vulture vineyard visit with tasting and lunch. Return to Potenza."
      },
      {
        day: 7,
        title: "Potenza → Sorrento – Coastal Arrival",
        date: "18 Nov 2025",
        image: "pexels-daniel-eliashevsky-30667400-10045314.jpg",
        description: "Scenic drive to Sorrento. Evening at leisure in Piazza Tasso and Marina Grande. Optional limoncello tasting experience."
      },
      {
        day: 8,
        title: "Amalfi Coast Day Trip – Positano, Amalfi, Ravello",
        date: "19 Nov 2025",
        image: "pexels-hellojoshwithers-27025482.jpg",
        description: "Full-day private excursion along the Amalfi Coast, stopping at cliffside cafés, ceramic workshops and panoramic viewpoints. Optional Villa Cimbrone gardens visit."
      },
      {
        day: 9,
        title: "Sorrento → Rome – Ancient Icons",
        date: "20 Nov 2025",
        image: "pexels-meperdinaviagem-2064827.jpg",
        description: "Transfer to Rome. Afternoon guided tour of the Colosseum and Roman Forum. Evening farewell dinner near Piazza Navona."
      },
      {
        day: 10,
        title: "Departure from Rome",
        date: "21 Nov 2025",
        image: "pexels-pixabay-46148.jpg",
        description: "Breakfast and free time for last-minute shopping at East Point or nearby boutiques. Private transfer to the airport for your flight home."
      }
    ],

    inclusions: [
      "9 nights – 4-star hotels with breakfast",
      "Private airport transfers and intercity travel",
      "All excursions listed (except optional activities)",
      "English-speaking guides as required",
      "Meals: 9 breakfasts, 1 lunch, 2 dinners",
      "Wine tasting experience in Basilicata region",
      "Lake Bled day trip (supplement applies)"
    ],

    exclusions: [
      "International & domestic flights",
      "Early check-in or late checkout",
      "Meals not mentioned",
      "Alcoholic & non-alcoholic beverages",
      "Visa fees & travel insurance",
      "Tips for guides & drivers (EUR 2 per person per day)",
      "GST & TCS as applicable",
      "Hotel city taxes payable directly"
    ],

    hotels: [
      {
        name: "Ljubljana: City Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Matera: Cave Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Potenza: Boutique Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Sorrento: Seaside Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      }
    ]
  },
  {
    image: "pexels-rachel-claire-7276577.jpg",
    heroImage: "pexels-rachel-claire-7276709.jpg",
    title: "Vietnam — Landscapes, Culture & Island Escapes",
    subtitle: "Hanoi • Halong Bay • Da Nang • Hoi An • Phu Quoc • Ho Chi Minh",
    subtitleIcon: <UtensilsIcon />,
    date: "8 Nights / 9 Days",
    slug: "vietnam-8n-9d",
    price: 165000,
    taxesText: "plus taxes",
    duration: "9 Days, 8 Nights",
    locations: "Hanoi, Halong Bay, Da Nang, Hoi An, Phu Quoc, Ho Chi Minh City, Mekong Delta, Cu Chi",

    tripSnapshot: [
      {
        image: "pexels-rachel-claire-7276709.jpg",
        title: "Overnight Halong Cruise",
        description: "Sail through limestone karsts, enjoy sunset decks, onboard cooking demos and a peaceful night aboard." 
      },
      {
        image: "one-pillar-pagoda-7222501_1280.jpg",
        title: "Hanoi’s Heritage Walk",
        description: "Visit the Ho Chi Minh Complex, One Pillar Pagoda, Tran Quoc and stroll the bustling Old Quarter." 
      },
      {
        image: "panorama-2154194_1280.jpg",
        title: "Golden Bridge at Ba Na Hills",
        description: "Glide up by cable car and walk the iconic hands-held ‘Golden Bridge’ with mountain panoramas." 
      },
      {
        image: "hoi-an-6564496_1280.jpg",
        title: "Hoi An Lantern Evenings",
        description: "Wander the lantern-lit streets, visit heritage houses and enjoy local craft demonstrations." 
      },
      {
        image: "sea-4168234_1280.jpg",
        title: "Phu Quoc Island Hopping",
        description: "Speedboat across coral reefs, snorkel clear lagoons and relax on powder-white sands." 
      },
      {
        image: "caption.jpg",
        title: "Mekong Delta & Cu Chi",
        description: "Sampan cruises, floating markets, village cycling and a visit to the Cu Chi tunnels." 
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival — Hanoi Highlights",
        date: "24 Nov 2025",
        image: "pexels-ama-journey-2157145868-34744702.jpg",
        description: "Arrive at Noi Bai. Transfer to hotel. Afternoon guided tour: Ho Chi Minh Complex (outside), One Pillar Pagoda, Tran Quoc Pagoda, Hoan Kiem Lake & Ngoc Son Temple. Evening: Old Quarter walk & dinner suggestions. Overnight Hanoi. Meals: B"
      },
      {
        day: 2,
        title: "Hanoi → Halong Bay — Embark Cruise",
        date: "25 Nov 2025",
        image: "pexels-foodoncam-58597.jpg",
        description: "Drive through Red River delta to Halong (approx. 3.5 hrs). Board cruise at midday. Afternoon visit to stalactite caves, kayaking (weather permitting), sunset on deck, onboard cooking demo and dinner. Overnight cabin on cruise. Meals: B/L/D"
      },
      {
        day: 3,
        title: "Halong Morning — Return to Hanoi → Fly to Da Nang",
        date: "26 Nov 2025",
        image: "pexels-quang-nguyen-vinh-222549-2582794.jpg",
        description: "Morning tai chi and island hike or beach time. Disembark after brunch and transfer to Hanoi airport for flight to Da Nang. Evening at leisure in Da Nang. Meals: B/L"
      },
      {
        day: 4,
        title: "Ba Na Hills — Golden Bridge & French Village",
        date: "27 Nov 2025",
        image: "pexels-quang-nguyen-vinh-222549-2162459.jpg",
        description: "Cable car ascent to Ba Na Hills. Walk the Golden Bridge, visit Linh Ung Pagoda, French Village and flower gardens. Return to Da Nang; evening visit to Dragon Bridge. Meals: B"
      },
      {
        day: 5,
        title: "Marble Mountains & Hoi An Ancient Town",
        date: "28 Nov 2025",
        image: "pexels-arthousestudio-4638265.jpg",
        description: "Visit Marble Mountains (lift), Non Nuoc stone carving village; transfer to Hoi An. Basket-boat ride in Cam Thanh coconut forest, heritage walking tour including Japanese Covered Bridge, local markets and tailor shops. Lantern-lit evening with optional riverboat. Meals: B"
      },
      {
        day: 6,
        title: "Fly to Phu Quoc — Island Leisure",
        date: "29 Nov 2025",
        image: "pexels-quang-nguyen-vinh-222549-26742988.jpg",
        description: "Morning transfer and flight to Phu Quoc. Check-in, beach time, optional spa, and explore Dinh Cau night market. Meals: B"
      },
      {
        day: 7,
        title: "Phu Quoc — 4-Island Speedboat Tour",
        date: "30 Nov 2025",
        image: "pexels-borishamer-33498699.jpg",
        description: "Full-day island hopping: Gam Ghi, Buom (or Mong Tay), May Rut, Thom Island. Snorkel coral reefs, swim in lagoons and enjoy a beachfront lunch. Optional sea-walking activity available. Meals: B/L"
      },
      {
        day: 8,
        title: "Grand World & Fly to Ho Chi Minh City",
        date: "01 Dec 2025",
        image: "pexels-quang-nguyen-vinh-222549-2144905.jpg",
        description: "Visit Grand World complex (Venetian canals, cultural shows, museums). Afternoon flight to Ho Chi Minh City. Evening at leisure. Meals: B"
      },
      {
        day: 9,
        title: "Mekong Delta Exploration & Cu Chi Tunnels",
        date: "02 Dec 2025",
        image: "pexels-fungfung852-6138224.jpg",
        description: "Transfer to Mekong Delta—sampan cruise, village walk, cycle around An Binh Island, floating market stops and local tasting. Return to HCMC for Cu Chi Tunnel visit (or swap order per logistics). Evening farewell dinner in HCMC. Meals: B/L/D"
      },
      {
        day: 10,
        title: "Departure from Ho Chi Minh City",
        date: "03 Dec 2025",
        image: "pexels-pixabay-46148.jpg",
        description: "Breakfast, check-out and private transfer to Tan Son Nhat Airport for your onward flight home. Meals: B"
      }
    ],

    inclusions: [
      "8 nights accommodation in 4-star hotels (or similar)",
      "Halong Bay overnight cruise with meals as specified",
      "Internal flights: Hanoi → Da Nang → Phu Quoc → Ho Chi Minh City (as per itinerary)",
      "All private transfers & touring by air-conditioned vehicle",
      "English-speaking local guides on sightseeing days",
      "Ba Na Hills cable car & Golden Bridge entry",
      "4-island speedboat tour in Phu Quoc (lunch included)",
      "Mekong Delta day tour including boat & village visits",
      "Cu Chi Tunnel entrance & guided visit",
      "Daily breakfasts plus meals specified in the itinerary",
      "Park and entry fees where mentioned"
    ],

    exclusions: [
      "International airfare and airport taxes",
      "Visa fees and travel insurance",
      "Meals not specified in the itinerary",
      "Alcoholic and soft drinks unless specified",
      "Optional activities (sea-walking, spa treatments, premium water-sports)",
      "Tips for drivers/guides (suggested USD 2 per person per day)",
      "Personal expenses and laundry",
      "GST, TCS or local city taxes payable directly"
    ],

    hotels: [
      {
        name: "Hanoi: Central Boutique Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Halong: 4-Star Cruise Cabin (overnight)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Da Nang: Seafront Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Phu Quoc: Beach Resort (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Ho Chi Minh City: Central Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      }
    ]
  },
  {
    image: "singapore-243671_1280.jpg",
    heroImage: "pexels-jahoo-867092.jpg",
    title: "Singapore & Malaysia – City Skylines to Highlands",
    subtitle: "Singapore • Kuala Lumpur • Genting • Putrajaya",
    subtitleIcon: <CarIcon />,
    date: "8 Nights / 9 Days",
    slug: "singapore-malaysia-9n10d",
    price: 145000,
    taxesText: "plus taxes",
    duration: "9 Days, 8 Nights",
    locations: "Singapore, Sentosa Island, Gardens by the Bay, Night Safari, Kuala Lumpur, Genting Highlands, Batu Caves, Putrajaya",

    tripSnapshot: [
      {
        image: "pexels-elina-sazonova-1907053.jpg",
        title: "Gardens by the Bay",
        description: "Experience the Flower Dome, Cloud Forest & the spectacular indoor waterfall."
      },
      {
        image: "pexels-joerg-hartmann-626385254-28748435.jpg",
        title: "Sentosa Island Adventures",
        description: "Cable car sky pass, beaches, attractions & the Wings of Time fireworks show."
      },
      {
        image: "pexels-soulful-pizza-2080276-3914755.jpg",
        title: "Singapore Night Safari",
        description: "A rainforest tram ride into the world's first nocturnal wildlife park."
      },
      {
        image: "pexels-umaraffan499-22804.jpg",
        title: "Kuala Lumpur City Highlights",
        description: "KL Tower, Merdeka Square, Kings Palace, and Petronas skyline views."
      },
      {
        image: "pexels-niko-cezar-1713157-3731615.jpg",
        title: "Genting Highlands & Batu Caves",
        description: "Enjoy the Genting Cable Car & visit Malaysia’s iconic Batu Cave temple." 
      },
      {
        image: "mosque-470792_1280.jpg",
        title: "Putrajaya Architecture Tour",
        description: "Explore lakes, boulevards & pink-domed mosques of Malaysia’s planned capital city."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        date: "25 Nov 2025",
        image: "pexels-timo-volz-837240-1842332.jpg",
        description: "Arrive at Changi Airport and transfer to your hotel. Rest of the day free. Meals: —"
      },
      {
        day: 2,
        title: "Singapore Panoramic Drive + Gardens by the Bay",
        date: "26 Nov 2025",
        image: "singapore-2432477_1280.jpg",
        description: "Morning panoramic city tour. Afternoon visit to Gardens by the Bay including Cloud Forest, Flower Dome & Jurassic World Experience. Meals: B"
      },
      {
        day: 3,
        title: "Sentosa Island – Cable Car + Wings of Time",
        date: "27 Nov 2025",
        image: "cable-car-2632487_1280.jpg",
        description: "Enjoy Sentosa attractions, sky cable car ride and the stunning Wings of Time evening show. Meals: B"
      },
      {
        day: 4,
        title: "Singapore Night Safari",
        date: "28 Nov 2025",
        image: "singapore-1132358_1280.jpg",
        description: "Day at leisure. Evening visit to the world-famous Night Safari with tram ride. Meals: B"
      },
      {
        day: 5,
        title: "Fly / Transfer to Kuala Lumpur",
        date: "29 Nov 2025",
        image: "city-1284258_1280.jpg",
        description: "Transfer to Singapore Airport and fly/drive to Kuala Lumpur. Hotel check-in and free evening. Meals: B"
      },
      {
        day: 6,
        title: "Kuala Lumpur City Tour + KL Tower",
        date: "30 Nov 2025",
        image: "pexels-umaraffan499-22804.jpg",
        description: "Half-day KL city tour including KL Tower Observation Deck entry. Meals: B"
      },
      {
        day: 7,
        title: "Genting Highlands + Batu Caves",
        date: "01 Dec 2025",
        image: "pexels-niko-cezar-1713157-3731615.jpg",
        description: "Drive to Batu Caves temple complex. Continue to Genting Highlands with cable car ride. Meals: B"
      },
      {
        day: 8,
        title: "Putrajaya Tour",
        date: "02 Dec 2025",
        image: "mosque-470792_1280.jpg",
        description: "Visit Putrajaya’s iconic mosques, lakefronts, and architectural landmarks. Meals: B"
      },
      {
        day: 9,
        title: "Departure from Kuala Lumpur",
        date: "03 Dec 2025",
        image: "pexels-pixabay-46148.jpg",
        description: "Private transfer to Kuala Lumpur International Airport for departure. Meals: B"
      }
    ],

    inclusions: [
      "8 nights — 4-star accommodations with breakfast",
      "Private car with English-speaking driver throughout",
      "All excursions listed (Sentosa, Gardens by the Bay, Night Safari, KL City Tour, Genting, Batu Caves, Putrajaya)",
      "Entry tickets: Cloud Forest + Flower Dome, KL Tower, Genting Cable Car, Wings of Time",
      "Airport & intercity transfers",
      "Taxes (except city tax where applicable)"
    ],

    exclusions: [
      "International airfare",
      "Visa fees and travel insurance",
      "Meals not listed",
      "Optional activities at Sentosa or Genting",
      "Tips to drivers & guides",
      "GST & TCS",
      "Hotel city taxes payable directly"
    ],

    hotels: [
      {
        name: "Singapore: V Hotel Lavender (4-Star or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Kuala Lumpur: Hotel Grand Continental (4-Star or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      }
    ]
  },
  {
    image: "mountain-7343375_1280.jpg",
    heroImage: "pexels-tanathip-rattanatum-1050216-2026454.jpg",
    title: "Truly Switzerland Experience",
    subtitle: "Mountains, Chocolate, Waterfalls & Scenic Europe",
    subtitleIcon: <MountainIcon />,
    date: "4 Nights / 5 Days",
    slug: "truly-switzerland-experience",
    price: 185000,
    taxesText: "plus taxes",
    duration: "5 Days, 4 Nights",
    locations: "Zurich, Jungfrau, Interlaken, Black Forest, Rhine Falls",

    tripSnapshot: [
      {
        image: "pexels-marek-piwnicki-3907296-34720600.jpg",
        title: "Jungfrau – Top of Europe",
        description: "Ride a cogwheel train to the highest station in Europe with snow, ice palace & alpine views."
      },
      {
        image: "pexels-susydrake-15214034.jpg",
        title: "Zurich Old Town",
        description: "Walk through Niederdorf’s cobbled lanes filled with boutiques, cafes & evening vibes."
      },
      {
        image: "gettyimages-689917085-612x612.jpg",
        title: "Black Forest Drive",
        description: "A scenic orientation tour through pine valleys, lakes & traditional Swiss–German countryside."
      },
      {
        image: "pexels-jean-paul-wettstein-677916508-33651736.jpg",
        title: "Rhine Falls Boat Ride",
        description: "Get up close to Europe’s most powerful waterfall with a thrilling 15-minute boat cruise."
      },
      {
        image: "lindt-home-of-chocolate-en-1440x550-1.webp",
        title: "Lindt Home of Chocolate",
        description: "Dive into Switzerland’s sweet world with tastings & immersive chocolate exhibits."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive in Zurich + Niederdorf Street",
        date: "09 Sep 2025",
        image: "pexels-magda-ehlers-pexels-32008398.jpg",
        description: "Meet & greet at Zurich Airport → private coach transfer (coach at disposal up to 12 hrs). Lunch at Indian restaurant en route. Hotel check-in after 3 PM. Evening visit to Niederdorf Old Town — lively cafés, shops, and Zurich nightlife ambiance. Dinner at Indian restaurant. Overnight at Hilton Zurich Airport. Meals: L, D."
      },
      {
        day: 2,
        title: "Full-Day Excursion to Jungfrau + Interlaken",
        date: "10 Sep 2025",
        image: "pexels-marek-piwnicki-3907296-34720600.jpg",
        description: "Breakfast at hotel. Scenic transfer to Grindelwald Grund and board the cogwheel train to Jungfraujoch – Top of Europe. Explore Ice Palace, Sphinx Terrace & snow play areas. Lunch at the top. Evening orientation tour of Interlaken. Transfer back to Zurich. Dinner at Indian restaurant. Overnight at Hilton Zurich Airport. Meals: B, L, D."
      },
      {
        day: 3,
        title: "Zurich City Tour + Lindt Chocolate Factory + Gala Dinner",
        date: "11 Sep 2025",
        image: "lindt-home-of-chocolate-en-1440x550-1.webp",
        description: "Breakfast at hotel. Guided 3-hour Zurich city tour — Bahnhofstrasse, Old Town, lakeside & iconic landmarks. Visit Lindt Home of Chocolate with multimedia tour & shopping. Lunch at Indian restaurant. Evening conference from 5–7 PM in Cinnamon Restaurant. Gala Dinner with 2 hours free-flow alcohol + Bollywood music. Overnight at Hilton Zurich Airport. Meals: B, L, D."
      },
      {
        day: 4,
        title: "Black Forest + Rhine Falls Boat Ride",
        date: "12 Sep 2025",
        image: "pexels-jean-paul-wettstein-677916508-33651736.jpg",
        description: "Breakfast at hotel. Drive to the scenic Black Forest region for an orientation tour. Continue to Rhine Falls for a thrilling 15-minute boat ride. Lunch at top Indian restaurant. Return to Zurich for dinner. Overnight at Hilton Zurich Airport. Meals: B, L, D."
      },
      {
        day: 5,
        title: "Departure from Zurich",
        date: "13 Sep 2025",
        image: "pexels-pixabay-46148.jpg",
        description: "Breakfast at hotel. Private transfer to Zurich Airport for your flight home. Meals: B."
      }
    ],

    inclusions: [
      "4 nights – Hilton Zurich Airport (or similar) with daily breakfast",
      "Airport transfers (9th & 13th Sept) by private coach",
      "Coach at disposal for all touring (max 12 hrs/day)",
      "Excursions & meals as per itinerary",
      "Jungfrau cogwheel train",
      "Rhine Falls boat ride",
      "Zurich guided city tour",
      "Lindt Chocolate Factory entry",
      "Gala dinner with 2 hrs free-flow alcohol"
    ],

    exclusions: [
      "Meals not mentioned",
      "Alcoholic & non-alcoholic beverages (except gala dinner)",
      "Personal expenses & medical costs",
      "Travel insurance & visa fees",
      "City taxes (if applicable)"
    ],

    hotels: [
      {
        name: "Zurich: Hilton Zurich Airport (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      }
    ]
  },
  {
    image: "busan-7271234_1280.jpg",
    heroImage: "pexels-gije-18495179.jpg",
    title: "South Korea – Culture, Nature & City Vibes",
    subtitle: "Busan • Jeju Island • Seoul",
    subtitleIcon: <CarIcon />,
    date: "7 Nights / 8 Days",
    slug: "south-korea-7n8d",
    price: 178000,
    taxesText: "plus taxes",
    duration: "8 Days, 7 Nights",
    locations: "Busan, Jeju Island, Seoul, Nami Island",

    tripSnapshot: [
      {
        image: "busan-3476918_1280.jpg",
        title: "Gamcheon Culture Village",
        description: "Korea’s iconic colourful hillside village filled with art, murals & scenic alleys."
      },
      {
        image: "cheonjiyeon-falls-1594590_1280.jpg",
        title: "Jeju Waterfalls & Beaches",
        description: "Explore Cheonjiyeon Falls, Hyeopjae Beach & Jeju’s stunning volcanic landscapes."
      },
      {
        image: "49.jpg",
        title: "Seongsan Ilchulbong (Sunrise Peak)",
        description: "One of Jeju’s most iconic UNESCO volcanic cones formed 5,000 years ago."
      },
      {
        image: "pexels-heesang-park-322733791-13716545.jpg",
        title: "N Seoul Tower & Myeongdong",
        description: "Stunning city panoramas, romantic cable car rides & Seoul's shopping paradise."
      },
      {
        image: "elderly-couple-2623639_1280.jpg",
        title: "Nami Island",
        description: "Tree-lined boulevards, lakeside scenery & K-drama filming locations."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival → KTX to Busan",
        date: "—",
        image: "busan-7271234_1280.jpg",
        description: "Arrive at Incheon Airport → meet driver → transfer to Gwangmyung Station → KTX to Busan. Pick-up at Busan Station & hotel check-in."
      },
      {
        day: 2,
        title: "Busan City Tour",
        date: "—",
        image: "busan-3476918_1280.jpg",
        description: "Visit Haedong Yonggungsa Temple, Haeundae Beach, Gamcheon Culture Village, Songdo Cloud Trails, Songdo Beach & Songdo Cable Car."
      },
      {
        day: 3,
        title: "Fly to Jeju + West Jeju Tour",
        date: "—",
        image: "pexels-i-love-pixel-391111544-14747539.jpg",
        description: "Fly: Busan → Jeju. Visit Osulloc Tea Museum, Hyeopjae Beach, Hallim Park & Ssangyonggul Cave."
      },
      {
        day: 4,
        title: "East + South Jeju Tour",
        date: "—",
        image: "cheonjiyeon-falls-1594590_1280.jpg",
        description: "Visit Camellia Hill, Cheonjiyeon Falls, Seongeup Folk Village, Seongsan Sunrise Peak & Hamdeok Beach (sunset)."
      },
      {
        day: 5,
        title: "Fly to Seoul + City Highlights",
        date: "—",
        image: "pexels-heesang-park-322733791-13716545.jpg",
        description: "Flight: Jeju → Seoul. Visit N Seoul Tower (with cable car), Myeongdong Street, Cheonggyecheon Stream, Bukchon Hanok Village, Royal Guard Ceremony at Gyeongbokgung Palace & Insadong."
      },
      {
        day: 6,
        title: "Nami Island + Seoul Markets",
        date: "—",
        image: "elderly-couple-2623639_1280.jpg",
        description: "Day trip to Nami Island. Return to Seoul & visit Namdaemun Market & Gwangjang Market."
      },
      {
        day: 7,
        title: "Optional: Lotte World or Free Day",
        date: "—",
        image: "pexels-pixabay-237211.jpg",
        description: "Free day or optional visit to Lotte World Mall (theme park, Aquarium, Seoul Sky). Tickets & transfers not included."
      },
      {
        day: 8,
        title: "Departure",
        date: "—",
        image: "pexels-pixabay-46148.jpg",
        description: "Hotel pickup → transfer to Incheon Airport → depart with memories of Korea."
      }
    ],

    inclusions: [
      "7 nights – 4-star hotels with half-board meal plan",
      "Private car with English-speaking driver-guide",
      "All excursions mentioned (except optional days)",
      "Domestic flights: Busan → Jeju & Jeju → Seoul",
      "KTX high-speed train from Seoul → Busan",
      "Entry fees where mentioned",
      "Daily breakfast + meals as per itinerary"
    ],

    exclusions: [
      "International airfare",
      "Meals not mentioned",
      "Alcoholic & soft beverages",
      "Visa fees & travel insurance",
      "Optional tours (Lotte World, special activities)",
      "Tips for guide/driver",
      "GST & TCS",
      "Hotel city tax (payable directly)"
    ],

    hotels: [
      {
        name: "Busan: 4-Star Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Jeju Island: 4-Star Resort (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      },
      {
        name: "Seoul: 4-Star City Hotel (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      }
    ]
  },
  {
    image: "pexels-freestockpro-1031659.jpg",
    heroImage: "pexels-tirachard-kumtanom-112571-472309.jpg",
    title: "Thailand – Koh Samui & Bangkok Girls' Getaway",
    subtitle: "Koh Samui • Bangkok",
    subtitleIcon: <UtensilsIcon />,
    date: "5 Nights / 6 Days",
    slug: "thailand-5n6d",
    price: 78000,
    taxesText: "plus taxes",
    duration: "6 Days, 5 Nights",
    locations: "Koh Samui, Ang Thong Marine Park, Koh Tao, Bangkok, Chatuchak, Chao Phraya",

    tripSnapshot: [
      {
        image: "pexels-mike-to-323754-5567082.jpg",
        title: "Koh Samui Beach Time",
        description: "Cocktails, beachfront sunsets & chilled island vibes."
      },
      {
        image: "pexels-imagevain-2346015.jpg",
        title: "Island Hopping",
        description: "Snorkel turquoise waters at Ang Thong or Koh Tao & Nang Yuan."
      },
      {
        image: "street-4659633_1280.jpg",
        title: "Bangkok Rooftop Sunsets",
        description: "Sunset cocktails overlooking riverside temples."
      },
      {
        image: "pexels-maksim-romashkin-13914842.jpg",
        title: "Nightlife & Fire Shows",
        description: "Beach clubs, neon nights & spectacular fire shows."
      },
      {
        image: "pexels-markus-winkler-1430818-12100587.jpg",
        title: "Bangkok Shopping",
        description: "Chatuchak, Siam Paragon, Platinum Mall & trendy markets."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive in Koh Samui — Beach & Cocktails",
        date: "23 Jan 2026",
        image: "pexels-tirachard-kumtanom-112571-472309.jpg",
        description: "Arrive in Koh Samui → private transfer to beachfront hotel. Relax by the beach, sip cocktails. Optional sunset paddleboarding at Choeng Mon or Bangrak. Dinner & drinks at Ark Bar. Meals: —"
      },
      {
        day: 2,
        title: "Koh Samui Waterfalls + Big Buddha + Nightlife",
        date: "24 Jan 2026",
        image: "pexels-julito-elizalde-1831753719-28544981.jpg",
        description: "Breakfast. Visit Na Muang Waterfalls, Secret Buddha Garden & Big Buddha. Massage near Lamai + Thai lunch. Evening party at Green Mango Club or Bar Solo. Meals: B"
      },
      {
        day: 3,
        title: "Island Hopping + Snorkeling + Fire Show",
        date: "25 Jan 2026",
        image: "pexels-imagevain-2346015.jpg",
        description: "Breakfast. Full-day island hopping to Ang Thong Marine Park OR Koh Tao + Nang Yuan (snorkeling, kayaking, beach hopping). Evening fire show on the beach. Optional: Muay Thai class. Meals: B"
      },
      {
        day: 4,
        title: "Fly to Bangkok + Rooftop Drinks",
        date: "26 Jan 2026",
        image: "street-4659633_1280.jpg",
        description: "Breakfast. Fly to Bangkok & check in. Massage at Shewa Spa or Darin Beauty. Sunset drinks at Sala Rattanakosin or 342 Bar. Meals: B"
      },
      {
        day: 5,
        title: "Bangkok Shopping + Culture + Party Finale",
        date: "27 Jan 2026",
        image: "pexels-markus-winkler-1430818-12100587.jpg",
        description: "Breakfast. Shop at Chatuchak (weekend), Siam Paragon & Platinum Mall. Visit Wat Pho or take a Chao Phraya boat ride. Final night party at Phranakorn Bar or The Club Khaosan. Meals: B"
      },
      {
        day: 6,
        title: "Departure",
        date: "28 Jan 2026",
        image: "pexels-pixabay-46148.jpg",
        description: "Breakfast, checkout & private transfer to Bangkok Airport. Meals: B"
      }
    ],

    inclusions: [
      "5 nights – 4-star accommodation with breakfast",
      "Private airport & intercity transfers",
      "All excursions listed (except optional activities)",
      "English-speaking guide where mentioned",
      "Island hopping speedboat tour",
      "Half-day Bangkok cultural tour",
      "Daily breakfast",
      "Taxes except city tax"
    ],

    exclusions: [
      "International airfare",
      "Visa fees & travel insurance",
      "Meals not listed",
      "Optional Muay Thai class",
      "Alcoholic beverages",
      "Tips to drivers/guides",
      "GST & TCS",
      "Hotel city taxes payable directly"
    ],

    hotels: [
      {
        name: "Koh Samui: 4-Star Beach Resort (or similar)",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/Villa-Fountaine-Tokyo-Ueno-1.jpg"
        ]
      },
      {
        name: "Bangkok: Sukhumvit / Khao San 4-Star Hotel",
        images: [
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo.jpg",
          "https://trotr.world/wp-content/uploads/2025/06/My-Stays-Kyoto-Shijo-1.jpg"
        ]
      }
    ]
  }
];

export const GALLERY_IMAGES: string[] = [
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop",
    "louvre-7146800_1280.jpg",
    "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
    "tram-8352473_1280.jpg",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop",
    "tokyo-skytree-8645455_1280.jpg"
];
