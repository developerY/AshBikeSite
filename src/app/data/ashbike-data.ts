export interface AppSuiteItem {
  id: string;
  name: string;
  platform: string;
  stage: string;
  tagline: string;
  description: string;
  highlights: string[];
  metricLabel: string;
  metricValue: string;
  icon: string;
}

export interface SensorNode {
  id: string;
  name: string;
  role: string;
  capability: string;
  safetyOrPerformance: 'Safety' | 'Navigation' | 'Performance';
  icon: string;
  detail: string;
}

export interface SustainabilityBenefit {
  id: string;
  title: string;
  summary: string;
  metric: string;
  icon: string;
}

export interface EssayLink {
  title: string;
  topic: string;
  summary: string;
  url: string;
}

export const ASHBIKE_IMAGES = {
  hero: '/assets/images/hero_sunlit_cycling_1794878305519.jpg',
  cockpit: '/assets/images/tech_smart_cockpit_1794878307521.jpg',
  h2Bike: '/assets/images/hardware_h2_ebike_1794878308866.jpg',
  city: '/assets/images/city_vertical_park_1794878308469.jpg',
} as const;

export const APP_SUITE: AppSuiteItem[] = [
  {
    id: 'ashbike',
    name: 'AshBike',
    platform: 'Android · Google Health Connect',
    stage: 'Phase One Prototype',
    tagline: 'Your private, weather-aware cycling companion.',
    description:
      'Real-time wind and weather updates, live speed and distance telemetry, traffic-dodging terrain-tailored routes, and optional Google Health Connect syncing—all stored exclusively on your device.',
    highlights: [
      'Real-time wind, weather, speed, and elevation tracking',
      'Custom route planning by surface and traffic density',
      'Private on-device SQLite storage with zero external servers',
      'Optional Google Health Connect read/write fitness sync',
    ],
    metricLabel: 'Data Architecture',
    metricValue: '100% On-Device',
    icon: 'directions_bike',
  },
  {
    id: 'swift-bike-shift',
    name: 'Swift Bike Shift',
    platform: 'Android · Downtown San Francisco',
    stage: 'Early Alpha',
    tagline: 'Shared bike station discovery and turn-by-turn routing.',
    description:
      'Locate shared bike stations across downtown San Francisco, step through nearby hubs, explore points of interest, and launch turn-by-turn Google Maps directions—with calendar-mapped reservations on the roadmap.',
    highlights: [
      'Station browser with previous/next and map pin selection',
      'Integrated points of interest near every dock',
      'One-tap turn-by-turn directions via Google Maps',
      'Upcoming calendar event mapping and bike reservations',
    ],
    metricLabel: 'Coverage Focus',
    metricValue: 'Downtown SF Docks',
    icon: 'share_location',
  },
  {
    id: 'goswift',
    name: 'GoSwift',
    platform: 'iOS · Apple Health · WearOS',
    stage: 'Shared Mobility + Fitness',
    tagline: 'Turn every shared bike trip into gym-grade fitness & local perks.',
    description:
      'Connects your calendar events and Apple Health metrics to locate nearby shared bikes right before your next outing. Tracks cycling distance, steps, and heart health while generating collectible NFTs redeemable for real-world gear.',
    highlights: [
      'Calendar-aware shared bike discovery by time and location',
      'Apple Health integration for steps, distance, and heart health',
      'Companion WearOS watch face for wrist-glance ride metrics',
      'Redeemable NFT rewards for shirts, stickers, and local perks',
    ],
    metricLabel: 'Ecosystem',
    metricValue: 'iOS + Watch + WearOS',
    icon: 'watch',
  },
  {
    id: 'smart-glass-hud',
    name: 'Smart Glass HUD',
    platform: 'Android & iOS Smart Glasses',
    stage: 'Heads-Up Telemetry',
    tagline: 'Eyes on the road, essential ride telemetry in peripheral view.',
    description:
      'Projects turn prompts, speed, wind advisories, and hazard alerts directly onto Android and iOS smart glasses so riders never have to glance down at handlebars in busy traffic.',
    highlights: [
      'Minimal peripheral speed, cadence, and turn cues',
      'Hands-free voice and ambient light auto-dimming',
      'Collision-avoidance visual callouts synced from phone cameras',
      'Seamless handoff between handlebar mount and smart eyewear',
    ],
    metricLabel: 'Safety Focus',
    metricValue: 'Heads-Up Glance',
    icon: 'visibility',
  },
  {
    id: 'gamification',
    name: 'AR & VR Cycling Worlds',
    platform: 'Outdoor AR · Indoor VR',
    stage: 'Gamification Engine',
    tagline: 'Blend everyday rides with scavenger quests, teams, and café perks.',
    description:
      'Outdoor augmented reality overlays collectibles, checkpoints, and team-held gyms onto familiar streets—while partner cafés reward passing cyclists with real-world discounts.',
    highlights: [
      'Outdoor AR collectibles, mini-challenges, and XP leveling',
      'Team-based territory and friendly neighborhood leaderboards',
      'City & local café sponsorships redeemed along your route',
      'Immersive VR stationary experiences for rainy-day training',
    ],
    metricLabel: 'Engagement',
    metricValue: 'Real-World Perks',
    icon: 'explore',
  },
];

export const SMARTPHONE_SENSORS: SensorNode[] = [
  {
    id: 'accelerometer',
    name: 'Accelerometer',
    role: 'Impact & Motion Sensing',
    capability: 'Detects sudden deceleration and orientation shifts to trigger automatic crash alerts.',
    safetyOrPerformance: 'Safety',
    icon: 'speed',
    detail:
      'Continuously samples 3-axis acceleration to distinguish normal road vibration from sudden fall impacts, notifying emergency contacts with exact coordinates.',
  },
  {
    id: 'gyroscope',
    name: 'Gyroscope',
    role: 'Lean & Terrain Stability',
    capability: 'Measures angular velocity to tune electronic suspension and cornering stability.',
    safetyOrPerformance: 'Performance',
    icon: 'screen_rotation',
    detail:
      'Works alongside accelerometer telemetry over BLE to stiffen damping during climbs and soften compression over cobblestones or trail roots.',
  },
  {
    id: 'gps',
    name: 'Multi-Band GPS',
    role: 'Route & Station Precision',
    capability: 'Powers live distance, speed, shared-bike dock routing, and incident re-routing.',
    safetyOrPerformance: 'Navigation',
    icon: 'my_location',
    detail:
      'Logs complete route geometry locally on-device while supporting preference-based filtering for flat, paved, gravel, or low-traffic streets.',
  },
  {
    id: 'barometer',
    name: 'Barometer',
    role: 'Gradient & Elevation Gain',
    capability: 'Calculates climb rates to anticipate steep hills and pre-shift electronic drivetrains.',
    safetyOrPerformance: 'Performance',
    icon: 'terrain',
    detail:
      'Provides vertical elevation accuracy far sharper than GPS alone, feeding predictive shifting algorithms before your cadence drops.',
  },
  {
    id: 'ambient-light',
    name: 'Ambient Light Sensor',
    role: 'Adaptive Visibility',
    capability: 'Automatically scales smart headlight output and HUD contrast at dusk or tunnels.',
    safetyOrPerformance: 'Safety',
    icon: 'wb_sunny',
    detail:
      'Balances daytime legibility on your handlebar or smart glasses while triggering high-visibility beacon pulses under bridges and twilight.',
  },
  {
    id: 'cameras',
    name: 'High-Res Cameras & ML',
    role: 'Collision & AR Overlay',
    capability: 'Identifies approaching hazards in real time and anchors AR checkpoints on the street.',
    safetyOrPerformance: 'Safety',
    icon: 'center_focus_strong',
    detail:
      'On-device computer vision watches blind spots and road obstructions while rendering location-based cultural landmarks and café perks.',
  },
  {
    id: 'magnetometer',
    name: 'Magnetometer',
    role: 'True Compass Heading',
    capability: 'Locks directional bearing instantly at intersections before wheel speed builds.',
    safetyOrPerformance: 'Navigation',
    icon: 'explore',
    detail:
      'Eliminates compass spin when leaving a coffee shop or vertical bike tower so turn-by-turn cues point accurately from meter zero.',
  },
  {
    id: 'proximity',
    name: 'Proximity & BLE Hub',
    role: 'Cockpit & Drivetrain Link',
    capability: 'Pairs low-energy electronic brakes, suspension, and smart glasses into one brain.',
    safetyOrPerformance: 'Performance',
    icon: 'bluetooth_connected',
    detail:
      'Orchestrates sub-second Bluetooth Low Energy handshakes between rider profile, regenerative brake telemetry, and adaptive hardware.',
  },
];

export const SUSTAINABILITY_BENEFITS: SustainabilityBenefit[] = [
  {
    id: 'physical-health',
    title: 'Cardiovascular & Physical Vitality',
    summary:
      'Integrates natural movement into daily errands and commutes—strengthening heart health, circulation, and healthy weight without carving out separate gym hours.',
    metric: '150+ min/wk easy aerobic goal',
    icon: 'favorite_border',
  },
  {
    id: 'zero-emissions',
    title: 'Clean Air & Lower Greenhouse Gases',
    summary:
      'Every car trip replaced with a bicycle or e-bike eliminates tailpipe pollutants and cuts urban CO₂ footprints immediately.',
    metric: '0 g/km tailpipe emissions',
    icon: 'eco',
  },
  {
    id: 'less-congestion',
    title: 'Less Gridlock, Faster Neighborhood Trips',
    summary:
      'Compact two-wheeled mobility allows far more people to move smoothly through existing street space—unlocking lanes for trees, patios, and bikes.',
    metric: '6–10 bikes per 1 car lane',
    icon: 'traffic',
  },
  {
    id: 'quiet-streets',
    title: 'Calmer, Quieter Urban Streetscapes',
    summary:
      'Replacing engine roar and horn honking with near-silent pedaling transforms bustling corridors into welcoming public squares.',
    metric: '~35 dB quieter street ambiance',
    icon: 'volume_down',
  },
  {
    id: 'mental-health',
    title: 'Stress Relief & Sharper Mood',
    summary:
      'Open-air motion lowers daily commute stress and anxiety, reconnecting riders with daylight, seasons, and neighborhood life.',
    metric: 'Open-air mindfulness daily',
    icon: 'wb_twilight',
  },
  {
    id: 'cost-savings',
    title: 'Real Household Savings Spent Locally',
    summary:
      'Zero gas bills, minimal brake wear with regenerative fronts, and no parking meters leave more discretionary income for local cafés and shops.',
    metric: '$3,500+ avg annual car savings',
    icon: 'savings',
  },
];

export const COMMERCE_BENEFITS = [
  {
    title: 'Easy Access & Quick Storefront Stops',
    description:
      'Cyclists roll right up to storefronts without circling blocks for parking, turning everyday commutes into spontaneous stops at bakeries, bookshops, and markets.',
  },
  {
    title: 'More Foot Traffic, Less Parking Hassle',
    description:
      'Removing meter anxiety invites visitors to linger, browse multiple independent shops in one outing, and build vibrant street-level energy.',
  },
  {
    title: 'Discretionary Dollars Stay Local',
    description:
      'Money saved on gasoline, insurance, and garage fees gets reinvested directly into neighborhood restaurants, coffee roasters, and community services.',
  },
  {
    title: 'Connected Neighborhood Culture',
    description:
      'Riding at human speed encourages discovery—sharing favorite routes, joining group rides, and supporting local landmarks.',
  },
];

export const RICKSHAW_POINTS = [
  {
    title: 'Easing Traffic Congestion',
    description:
      'Bike cabs take a fraction of the roadway footprint of rideshare sedans, gliding smoothly through dense city blocks.',
  },
  {
    title: 'Lowering Carbon Footprints',
    description:
      'Human-powered and electric-assisted pedicabs cut greenhouse emissions on short urban hops where cars burn fuel idling.',
  },
  {
    title: 'Empowering Micro-Entrepreneurs',
    description:
      'Local drivers bring intimate knowledge of alleys, murals, and neighborhood gems—keeping fares inside the community.',
  },
  {
    title: 'Open-Air Community Connection',
    description:
      'Instead of riding behind tinted glass, passengers feel street breezes, hear live music, and connect directly with their city.',
  },
];

export const MEDIUM_ESSAYS: EssayLink[] = [
  {
    title: 'From Pocket to Pedal: BicycleBrain',
    topic: 'Smartphone / Bicycle Fusion',
    summary: 'How modern smartphone sensors, ML cameras, and BLE links serve as the central brain of intelligent bicycles.',
    url: 'https://zoewave.medium.com/bicyclebrain-e5381e546ebe',
  },
  {
    title: 'Reinventing Bicycle Brakes',
    topic: 'Regenerative & Anti-Lock Hardware',
    summary: 'Replacing high-wear friction pads on the front wheel with electromagnetic generators for safer stops and continuous charging.',
    url: 'https://zoewave.medium.com/reinventing-bicycle-brakes-2cddcf269138',
  },
  {
    title: 'Smart Glass HUD for Cyclists',
    topic: 'Heads-Up Display',
    summary: 'Designing non-intrusive Android and iOS smart-eyewear telemetry that keeps eyes firmly on the road ahead.',
    url: 'https://zoewave.medium.com/smart-glass-hud-3928210476c2',
  },
  {
    title: 'Go Swift Shared Bikes & WearOS',
    topic: 'Shared Mobility & Rewards',
    summary: 'Linking calendar schedules, Apple Health / Google Health Connect, and watch faces into everyday shared bike journeys.',
    url: 'https://medium.com/@zoewave/go-swift-shared-bikes-a808dc2fdd47',
  },
  {
    title: 'eMobility Solution: eTruck, eBike & Phone',
    topic: 'Connected Commute & World',
    summary: 'Harmonizing cargo logistics, personal e-bikes, and smartphone coordination to fix daily commuting.',
    url: 'https://zoewave.medium.com/emobilty-solution-c02d91d9ff10',
  },
  {
    title: 'The Car Smartphone Revolution',
    topic: 'Cockpit Evolution',
    summary: 'Lessons from how smartphones reshaped vehicle dashboards—and how open cycling interfaces leap ahead.',
    url: 'https://zoewave.medium.com/the-car-smartphone-revolution-cf77282c635b',
  },
];

export const PRIVACY_SECTIONS = [
  {
    heading: 'Our Data Philosophy: You Are in Control',
    body: 'AshBike is designed as a private, local-first biking companion. We do not operate tracking servers, and we do not collect or store your personal ride history on external cloud databases. All ride records remain exclusively on your device.',
  },
  {
    heading: 'Location Data (Latitude & Longitude)',
    body: 'GPS coordinates track your active route, distance, and speed locally so you can review your own ride logs. Coordinates are only transmitted to third-party weather services for live wind/conditions or Yelp when you explicitly search for nearby cafés and stops.',
  },
  {
    heading: 'Optional Health Connect Integration',
    body: 'Connecting AshBike to Google Health Connect (or Apple Health on GoSwift) is strictly opt-in. When enabled, you control read/write permissions for heart rate, calories burned, and completed cycling workouts, and you may revoke access anytime in device settings.',
  },
];

export const EULA_SECTIONS = [
  {
    heading: '1. Scope & Platform Acknowledgement',
    body: 'This End User License Agreement governs your personal, non-commercial use of the AshBike application developed by ZoeWave / AshBike across Android and iOS devices, independent of Apple Inc. or Google LLC.',
  },
  {
    heading: '2. Safe Operation Guidance',
    body: 'AshBike is an informational and ride-tracking tool. Never interact with your screen while riding a bicycle or operating any vehicle—only review routes or statistics when safely stationary, and always maintain full awareness of traffic and road surfaces.',
  },
  {
    heading: '3. Educational Source & License Boundaries',
    body: 'Commercial copying, redistribution, or resale of the binary application is prohibited except where expressly permitted under the ZoeWave Source Available License (PSAL) for educational review.',
  },
];
