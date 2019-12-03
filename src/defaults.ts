const defaultColors = [
  "rgba(30,144,255,",
  "rgba(107,142,35,",
  "rgba(255,215,0,",
  "rgba(255,192,203,",
  "rgba(106,90,205,",
  "rgba(173,216,230,",
  "rgba(238,130,238,",
  "rgba(152,251,152,",
  "rgba(70,130,180,",
  "rgba(244,164,96,",
  "rgba(210,105,30,",
  "rgba(220,20,60,"
];

export interface IOptions {
  colors: string[];
  maxParticleCount: number;
  particleSpeed: number;
  duration?: number;
}

export const defaultOptions: IOptions = {
  colors: defaultColors,
  maxParticleCount: 150,
  particleSpeed: 1,
  duration: 6000
};
