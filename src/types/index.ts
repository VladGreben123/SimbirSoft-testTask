export interface Area {
  name: string
}

export interface Competition {
  id: number
  name: string
  area: Area
  emblem: string
}

export interface CompetitionsResponse {
  count: number
  competitions: Competition[]
}

export interface Team {
  id: number
  name: string
  crest: string
}

export interface TeamsResponse {
  count: number
  teams: Team[]
}

export interface Score {
  fullTime: { home: number | null; away: number | null } | null
  extraTime: { home: number | null; away: number | null } | null
  penalties: { home: number | null; away: number | null } | null
}

export interface Match {
  id: number
  utcDate: string
  status: string
  homeTeam: { name: string }
  awayTeam: { name: string }
  score: Score
  competition: { name: string }
}

export interface MatchesResponse {
  count: number
  matches: Match[]
}
