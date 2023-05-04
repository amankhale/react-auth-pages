export interface Assets {
  id: number;
  value: string;
}

export const GRADUATION: Assets[] = [
  { id: 1, value: "10th" },
  { id: 2, value: "12th" },
  { id: 3, value: "B.Tech" },
  { id: 4, value: "M.Tech" },
  { id: 5, value: "PhD" },
];

export const DESIGNATION: Assets[] = [
  { id: 1, value: "SE" },
  { id: 2, value: "SSE" },
  { id: 3, value: "ATL" },
  { id: 4, value: "TL" },
  { id: 5, value: "PH" },
];

export const TECH_STACK: Assets[] = [
  { id: 1, value: "React" },
  { id: 2, value: "Angular" },
  { id: 3, value: "Node" },
];

export const LOCATION_TYPE: Assets[] = [
  { id: 1, value: "Remote" },
  { id: 2, value: "On-site" },
  { id: 3, value: "Hybrid" },
];
