export type LocationCategory =
  | "police"
  | "residence"
  | "retail"
  | "gate"
  | "public services"
  | "cinema"
  | "school"
  | "place of interest"
  | "lake"
  | "library"
  | "hospital";
export type LocationStatus = "confirmed" | "approx" | "maybe";

type LocationWithSourceOrDescription =
  | {
      description?: never;
      source?: { quote: string; author: string };
    }
  | {
      description?: string;
      source?: never;
    };

export type Location = {
  id: string;
  address?: string;
  category: LocationCategory;
  coordinates: {
    x: number;
    y: number;
  };
  img?: string;
  title: string;
  status: LocationStatus;
  priority: number;
} & LocationWithSourceOrDescription;

export type LocationType =
  | "Government facility"
  | "Public services"
  | "School"
  | "Residence"
  | "Retail"
  | "Point of interest"
  | "Lake"
  | "Upside Down gate";

export const LOCATION_TYPES: {
  label: LocationType;
  categories: LocationCategory[];
}[] = [
  {
    label: "Government facility",
    categories: ["police"],
  },
  {
    label: "Public services",
    categories: ["library", "hospital", "public services"],
  },
  {
    label: "School",
    categories: ["school"],
  },
  {
    label: "Residence",
    categories: ["residence"],
  },
  {
    label: "Retail",
    categories: ["retail", "cinema"],
  },
  {
    label: "Point of interest",
    categories: ["place of interest"],
  },
  {
    label: "Lake",
    categories: ["lake"],
  },
  {
    label: "Upside Down gate",
    categories: ["gate"],
  },
];

const MAPLE_NOTES =
  'This is labelled Maple Avenue, not Maple Street, but Nancy tells Steve to meet her "at the corner of Maple and Dearborn" (S1E1) and Dearborn crosses Maple Avenue, so it could be a labelling error.';
const MURRAYS_MAP_NOTES = "Location estimated using Murray Bauman's map (S1E5)";

export const locations: Location[] = [
  {
    id: "starcourt-gate",
    category: "gate",
    coordinates: {
      x: 854,
      y: 402,
    },
    img: "/assets/starcourt-gate.jpg",
    title: "Starcourt Gate",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "starcourt-mall",
    category: "retail",
    coordinates: {
      x: 854,
      y: 442,
    },
    img: "/assets/starcourt-mall.jpg",
    title: "Starcourt Mall",
    status: "confirmed",
    priority: 2,
  },
  {
    id: "wheeler-house",
    address: "2530 Maple Street",
    category: "residence",
    coordinates: {
      x: 1327,
      y: 308,
    },
    description: MAPLE_NOTES,
    img: "/assets/wheeler-house.jpg",
    title: "Wheelers House",
    status: "maybe",
    priority: 1,
  },
  {
    id: "sinclair-house",
    address: "2550 Maple Street",
    category: "residence",
    coordinates: {
      x: 1330,
      y: 389,
    },
    description: MAPLE_NOTES,
    img: "/assets/sinclair-house.jpg",
    title: "Sinclairs house",
    status: "maybe",
    priority: 2,
  },
  {
    id: "maple-street",
    category: "place of interest",
    coordinates: {
      x: 1333,
      y: 458,
    },
    description: MAPLE_NOTES,
    img: "/assets/maple-street.jpg",
    title: "Maple Street",
    status: "maybe",
    priority: 3,
  },
  {
    id: "loch-nora",
    category: "place of interest",
    coordinates: {
      x: 687,
      y: 593,
    },
    img: "/assets/loch-nora.jpg",
    title: "Loch Nora",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "bennys-burgers",
    address: "4819 Randolph Lane",
    category: "retail",
    coordinates: {
      x: 630,
      y: 702,
    },
    description: MURRAYS_MAP_NOTES,
    img: "/assets/bennys-burgers.jpg",
    title: "Benny's Burgers",
    status: "approx",
    priority: 2,
  },
  {
    id: "sattler-quarry",
    category: "place of interest",
    coordinates: {
      x: 587,
      y: 777,
    },
    img: "/assets/sattler-quarry.jpg",
    title: "Sattler Quarry",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hawkins-general-hospital",
    category: "hospital",
    coordinates: {
      x: 1044,
      y: 616,
    },
    title: "Hawkins General Hospital",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hawkins-middle-school",
    category: "school",
    coordinates: {
      x: 1032,
      y: 716,
    },
    img: "/assets/hawkins-middle-school.jpg",
    title: "Hawkins Middle School",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hawkins-high-school",
    category: "school",
    coordinates: {
      x: 1079,
      y: 757,
    },
    img: "/assets/hawkins-high-school.jpg",
    title: "Hawkins High School",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hunting-and-camping",
    category: "retail",
    coordinates: {
      x: 1153,
      y: 744,
    },
    description:
      "In S1E6, Jonathan and Nancy go shopping for bear traps at Hunting & Camping. It is shown as being opposite to The Hawk cinema and to the left of RadioShack and Melvald's.",
    img: "/assets/hunting-and-camping.jpg",
    title: "Hunting & Camping",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "radioshack",
    address: "Hawkins townsquare",
    category: "retail",
    coordinates: {
      x: 1166,
      y: 744,
    },
    img: "/assets/radioshack.jpg",
    title: "RadioShack",
    status: "confirmed",
    priority: 3,
  },
  {
    id: "melvalds-general-store",
    address: "Hawkins townsquare",
    category: "retail",
    coordinates: {
      x: 1177,
      y: 744,
    },
    img: "/assets/melvalds.jpg",
    title: "Melvald's General Store",
    status: "confirmed",
    priority: 2,
  },
  {
    id: "the-hawk",
    category: "cinema",
    coordinates: {
      x: 1140,
      y: 765,
    },
    img: "/assets/the-hawk.jpg",
    title: "The Hawk",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hawkins-public-library",
    category: "library",
    coordinates: {
      x: 1181,
      y: 774,
    },
    img: "/assets/hawkins-public-library.jpg",
    title: "Hawkins Public Library",
    status: "confirmed",
    priority: 6,
  },
  {
    id: "gates-convergence",
    address: "Hawkins townsquare",
    category: "place of interest",
    coordinates: {
      x: 1202,
      y: 750,
    },
    img: "/assets/gates-convergence.jpg",
    title: "Convergence of the gate curses",
    status: "approx",
    priority: 4,
  },
  {
    id: "hawkins-police-station",
    category: "police",
    coordinates: {
      x: 1223,
      y: 758,
    },
    img: "/assets/hawkins-police-station.jpg",
    title: "Hawkins Police Station",
    status: "confirmed",
    priority: 5,
  },
  {
    id: "roane-county-coroner",
    category: "public services",
    coordinates: {
      x: 1243,
      y: 864,
    },
    img: "/assets/roane-county-coroner.jpg",
    title: "Roane County Coroner",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "munson-trailer",
    category: "residence",
    coordinates: {
      x: 637,
      y: 992,
    },
    img: "/assets/munson-trailer.jpg",
    title: "Munson trailer",
    status: "approx",
    priority: 2,
  },
  {
    id: "curse-gate-1",
    category: "gate",
    coordinates: {
      x: 665,
      y: 992,
    },
    description: "Victim: Chrissy Cunningham",
    img: "/assets/curse-gate-1.jpg",
    title: "Curse gate 1",
    status: "approx",
    priority: 1,
  },
  {
    id: "mayfield-trailer",
    category: "residence",
    coordinates: {
      x: 700,
      y: 951,
    },
    img: "/assets/mayfield-trailer.jpg",
    title: "Mayfield trailer",
    status: "approx",
    priority: 3,
  },
  {
    id: "van-flip",
    category: "place of interest",
    coordinates: {
      x: 782,
      y: 957,
    },
    img: "/assets/van-flip.jpg",
    title: "Van flip",
    status: "confirmed",
    source: {
      quote: "— Where are you? — Cornwallis! — Meet me at Elm & Cherry.",
      author: "Lucas and Dustin, S1E7",
    },
    priority: 2,
  },

  {
    id: "mirkwood",
    category: "place of interest",
    coordinates: {
      x: 627,
      y: 1093,
    },
    img: "/assets/mirkwood.jpg",
    title: "Mirkwood",
    status: "confirmed",
    source: {
      quote: "It's where Cornwallis and Kerley meet.",
      author: "Mike to Hopper, S1E1",
    },
    priority: 1,
  },
  {
    id: "lake-jordan",
    category: "lake",
    coordinates: {
      x: 200,
      y: 1273,
    },
    title: "Lake Jordan",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "hawkins-national-laboratory",
    category: "place of interest",
    coordinates: {
      x: 524,
      y: 1322,
    },
    img: "/assets/hawkins-national-laboratory.jpg",
    title: "Hawkins National Laboratory",
    status: "confirmed",
    priority: 2,
  },
  {
    id: "mothergate",
    category: "gate",
    coordinates: {
      x: 549,
      y: 1275,
    },
    img: "/assets/mothergate.jpg",
    title: "The Mothergate",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "byers-house",
    category: "residence",
    coordinates: {
      x: 589,
      y: 1208,
    },
    description: MURRAYS_MAP_NOTES,
    img: "/assets/byers-house.jpg",
    title: "Byers House",
    status: "approx",
    priority: 2,
  },
  {
    id: "wills-bike",
    category: "place of interest",
    coordinates: {
      x: 621,
      y: 1184,
    },
    description: MURRAYS_MAP_NOTES,
    title: "Will's bike",
    status: "approx",
    priority: 1,
  },
  {
    id: "harrington-house",
    category: "residence",
    coordinates: {
      x: 789,
      y: 1109,
    },
    description: MURRAYS_MAP_NOTES,
    img: "/assets/harrington-house.jpg",
    title: "Harrington House",
    status: "approx",
    priority: 2,
  },
  {
    id: "barbs-car",
    category: "place of interest",
    coordinates: {
      x: 809,
      y: 1076,
    },
    description: MURRAYS_MAP_NOTES,
    img: "/assets/barbs-car.jpg",
    title: "Barb's car",
    status: "approx",
    priority: 1,
  },
  {
    id: "watergate",
    category: "gate",
    coordinates: {
      x: 760,
      y: 1493,
    },
    description: "Victim: Patrick McKinney",
    img: "/assets/watergate.jpg",
    title: "Watergate / Curse Gate 3",
    status: "confirmed",
    priority: 2,
  },
  {
    id: "lovers-lake",
    category: "lake",
    coordinates: {
      x: 792,
      y: 1464,
    },
    img: "/assets/lovers-lake.jpg",
    title: "Lover's Lake",
    status: "confirmed",
    priority: 1,
  },
  {
    id: "lipton-house",
    address: "2121 Holland Rd",
    category: "residence",
    coordinates: {
      x: 841,
      y: 1437,
    },
    description: "Said to be near Lover's Lake",
    img: "/assets/lipton-house.jpg",
    title: "Lipton House (Reefer Rick's)",
    status: "approx",
    priority: 1,
  },
  {
    id: "lake-tippecanoe",
    category: "lake",
    coordinates: {
      x: 1379,
      y: 1164,
    },
    title: "Lake Tippecanoe",
    status: "confirmed",
    priority: 1,
  },

  // {
  //   id: "hawkins-town-hall",
  //   category: "public services",
  //   coordinates: {
  //     x: 1233,
  //     y: 740,
  //   },
  //   img: "/assets/hawkins-town-hall.jpg",
  //   title: "Hawkins Town Hall",
  //   status: "confirmed",
  //   priority: 1,
  // },
];
