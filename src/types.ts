export type FavoritePuzzle = {
  rank: number;
  puzzleId: string;
  timesPlayed: number;
};

export type User = {
  id: string;
  activePuzzles: string[];
  totalPlayingTime: number;
  favoritePuzzles: FavoritePuzzle[];
  lastLogin: string;
};

export type Puzzle = {
  id: string;
  yDimension: number;
  xDimension: number;
  pieces: Array<unknown>;
  complete: boolean;
  users: string[];
  size: number;
};
