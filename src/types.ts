export type FavoritePuzzle = {
  rank: number
  puzzleId: string
  timesPlayed: number
}

export type ActivePuzzle = {
  puzzleId: string
  timeStarted: string
}

export type CompletedPuzzle = {
  puzzleId: string
  timeStarted: string
  timeFinished: string
}

export type User = {
  id: string
  activePuzzles: ActivePuzzle[]
  completedPuzzles: CompletedPuzzle[]
  totalPlayingTime: number
  favoritePuzzles: FavoritePuzzle[]
  currentMode: string
  lastLogin: string
}

export type Puzzle = {
  id: string
  yDimension: number
  xDimension: number
  pieces: Array<unknown>
  complete: boolean
  users: string[]
  size: number
}
