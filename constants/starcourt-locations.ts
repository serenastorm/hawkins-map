export type StarCourtLocationFloor1 = "scoops-ahoy" | "starcourt-base";

export type StarCourtLocation = {
  id: StarCourtLocationFloor1;
  coords: { x: number; y: number }[];
  title: string;
};

export const locations: StarCourtLocation[] = [
  {
    id: "starcourt-base",
    coords: [
      { x: 968, y: 69 },
      { x: 1097, y: 69 },
      { x: 1097, y: 157 },
      { x: 968, y: 157 },
    ],
    title: "Starcourt Base",
  },
  {
    id: "scoops-ahoy",
    coords: [
      { x: 658.97, y: 936 },
      { x: 751.54, y: 936 },
      { x: 751.54, y: 1036.74 },
      { x: 747.27, y: 1036.74 },
      { x: 747.27, y: 1046.16 },
      { x: 751.54, y: 1046.16 },
      { x: 751.54, y: 1106.29 },
      { x: 740.87, y: 1106.29 },
      { x: 740.87, y: 1106.29 },
      { x: 740.87, y: 1114.85 },
      { x: 751.54, y: 1114.85 },
      { x: 751.54, y: 1156.22 },
      { x: 679.45, y: 1156.22 },
      { x: 679.45, y: 1151.55 },
      { x: 686.28, y: 1151.55 },
      { x: 686.28, y: 1137.02 },
      { x: 677.29, y: 1137.02 },
      { x: 677.29, y: 1142.56 },
      { x: 670.04, y: 1142.56 },
      { x: 670.04, y: 1156.22 },
      { x: 658.97, y: 1156.22 },
      { x: 658.97, y: 1114.85 },
      { x: 664.09, y: 1114.85 },
      { x: 664.09, y: 1106.29 },
      { x: 658.97, y: 1106.29 },
      { x: 658.97, y: 1045.73 },
      { x: 682.87, y: 1045.73 },
      { x: 682.87, y: 1036.32 },
      { x: 658.97, y: 1036.32 },
    ],
    title: "Scoops Ahoy!",
  },
];
