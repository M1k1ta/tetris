import { TypeDropSpeeds } from '../types/TypeDropSpeed';

export const dropSpeeds: TypeDropSpeeds = {
  easy: {
    name: 'easy',
    speed: (level: number) => (900 / (level + 1)) + (900 / (level + 1) * 0.7),
  },
  normal: {
    name: 'normal',
    speed: (level: number) => (700 / (level + 1)) + (700 / (level + 1) * 0.5),
  },
  hard: {
    name: 'hard',
    speed: (level: number) => (500 / (level + 1)) + (500 / (level + 1) * 0.3),
  },
};
