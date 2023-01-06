export type StarCourtLocationFloor1 = "scoops-ahoy";

export type StarCourtLocation = {
  id: StarCourtLocationFloor1;
  coords: { x: number; y: number }[];
  title: string;
};

export const locations: StarCourtLocation[] = [
  //   {
  //     id: "starcourt-gate",
  //     title: "Starcourt Gate",
  //   },
  {
    id: "scoops-ahoy",
    coords: [
      { x: 666.5, y: 982.5 },
      { x: 774.5, y: 982.5 },
      { x: 774.5, y: 1049.5 },
      { x: 721, y: 1049.5 },
      { x: 721, y: 1063.5 },
      { x: 699, y: 1063.5 },
      { x: 699, y: 1053 },
      { x: 666.5, y: 1053 },
    ],
    // coords:
    //   "666.5,982.5, 774.5,982.5, 774.5,1049.5, 721,1049.5, 721,1063.5, 699,1063.5, 699,1053, 666.5,1053",
    title: "Scoops Ahoy!",
  },
];
