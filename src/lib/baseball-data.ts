export interface Player {
  id: string;
  name: string;
  position: string;
  battingAverage: number;
  homeRuns: number;
  rbis: number;
  hits: number;
  atBats: number;
  games: number;
  sluggingPercentage: number;
  onBasePercentage: number;
  fieldingPercentage?: number;
  avatar?: string;
}

export interface Game {
  id: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'upcoming' | 'completed';
}

export interface TeamStanding {
  id: string;
  name: string;
  wins: number;
  losses: number;
  battingAverage: number;
}

export interface PerformanceTrendPoint {
  game: number;
  value: number;
}

// Mock Players Data
export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Johnny Martinez',
    position: 'CF',
    battingAverage: 0.324,
    homeRuns: 15,
    rbis: 42,
    hits: 92,
    atBats: 284,
    games: 28,
    sluggingPercentage: 0.545,
    onBasePercentage: 0.398,
    fieldingPercentage: 0.985,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    position: 'SS',
    battingAverage: 0.298,
    homeRuns: 8,
    rbis: 31,
    hits: 84,
    atBats: 282,
    games: 28,
    sluggingPercentage: 0.468,
    onBasePercentage: 0.365,
    fieldingPercentage: 0.972,
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    position: '1B',
    battingAverage: 0.356,
    homeRuns: 22,
    rbis: 58,
    hits: 101,
    atBats: 284,
    games: 28,
    sluggingPercentage: 0.625,
    onBasePercentage: 0.425,
    fieldingPercentage: 0.995,
  },
  {
    id: '4',
    name: 'Aaron Judge',
    position: 'RF',
    battingAverage: 0.312,
    homeRuns: 18,
    rbis: 47,
    hits: 88,
    atBats: 282,
    games: 27,
    sluggingPercentage: 0.567,
    onBasePercentage: 0.392,
    fieldingPercentage: 0.988,
  },
  {
    id: '5',
    name: 'Lisa Wong',
    position: '3B',
    battingAverage: 0.287,
    homeRuns: 11,
    rbis: 36,
    hits: 78,
    atBats: 272,
    games: 26,
    sluggingPercentage: 0.485,
    onBasePercentage: 0.358,
    fieldingPercentage: 0.965,
  },
];

// Mock Games Data
export const mockGames: Game[] = [
  {
    id: '1',
    date: '2025-10-20',
    homeTeam: 'Tigers',
    awayTeam: 'Eagles',
    homeScore: 7,
    awayScore: 4,
    status: 'completed',
  },
  {
    id: '2',
    date: '2025-10-22',
    homeTeam: 'Lions',
    awayTeam: 'Tigers',
    homeScore: 5,
    awayScore: 3,
    status: 'completed',
  },
  {
    id: '3',
    date: '2025-10-24',
    homeTeam: 'Tigers',
    awayTeam: 'Bears',
    homeScore: 8,
    awayScore: 2,
    status: 'completed',
  },
  {
    id: '4',
    date: '2025-10-28',
    homeTeam: 'Hawks',
    awayTeam: 'Tigers',
    homeScore: 0,
    awayScore: 0,
    status: 'upcoming',
  },
  {
    id: '5',
    date: '2025-10-30',
    homeTeam: 'Tigers',
    awayTeam: 'Wolves',
    homeScore: 0,
    awayScore: 0,
    status: 'upcoming',
  },
];

// Mock Team Standings
export const mockTeamStandings: TeamStanding[] = [
  {
    id: '1',
    name: 'Tigers',
    wins: 18,
    losses: 6,
    battingAverage: 0.312,
  },
  {
    id: '2',
    name: 'Eagles',
    wins: 16,
    losses: 8,
    battingAverage: 0.298,
  },
  {
    id: '3',
    name: 'Lions',
    wins: 14,
    losses: 10,
    battingAverage: 0.287,
  },
  {
    id: '4',
    name: 'Bears',
    wins: 12,
    losses: 12,
    battingAverage: 0.275,
  },
];

// Mock Performance Trend Data
export const mockPerformanceTrend: PerformanceTrendPoint[] = [
  { game: 1, value: 0.250 },
  { game: 2, value: 0.275 },
  { game: 3, value: 0.290 },
  { game: 4, value: 0.285 },
  { game: 5, value: 0.310 },
  { game: 6, value: 0.295 },
  { game: 7, value: 0.320 },
  { game: 8, value: 0.315 },
  { game: 9, value: 0.330 },
  { game: 10, value: 0.324 },
];

// Helper Functions
export function calculateBattingAverage(hits: number, atBats: number): number {
  if (atBats === 0) return 0;
  return Number((hits / atBats).toFixed(3));
}

export function calculateSluggingPercentage(
  singles: number,
  doubles: number,
  triples: number,
  homeRuns: number,
  atBats: number
): number {
  if (atBats === 0) return 0;
  const totalBases = singles + doubles * 2 + triples * 3 + homeRuns * 4;
  return Number((totalBases / atBats).toFixed(3));
}

export function calculateOnBasePercentage(
  hits: number,
  walks: number,
  hitByPitch: number,
  atBats: number,
  sacrificeFlies: number
): number {
  const denominator = atBats + walks + hitByPitch + sacrificeFlies;
  if (denominator === 0) return 0;
  return Number(((hits + walks + hitByPitch) / denominator).toFixed(3));
}

export function formatBattingAverage(avg: number): string {
  return avg.toFixed(3);
}

export function getWinPercentage(wins: number, losses: number): number {
  const total = wins + losses;
  if (total === 0) return 0;
  return Number(((wins / total) * 100).toFixed(1));
}
