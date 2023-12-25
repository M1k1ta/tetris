import { TypeCell } from "../types/TypeCell";

export const STAGE_WIDTH = 16;
export const STAGE_HEIGHT = 26;

export const createStage = () => (
  Array.from(Array(STAGE_HEIGHT), () => (
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )) as TypeCell[][]
);
