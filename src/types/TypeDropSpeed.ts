export interface TypeDropSpeed {
  name: string;
  speed: (level: number) => number;
}

export interface TypeDropSpeeds {
  easy: TypeDropSpeed,
  normal: TypeDropSpeed,
  hard: TypeDropSpeed,
}