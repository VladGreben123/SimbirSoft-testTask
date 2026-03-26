import type { AxiosResponse } from 'axios'
import client from './client'
import type { CompetitionsResponse, MatchesResponse, TeamsResponse, Team } from '../types'

export const getCompetitions = () =>
  client
    .get<CompetitionsResponse>('/competitions')
    .then((r: AxiosResponse<CompetitionsResponse>) => r.data)

export const getCompetitionMatches = (id: number, dateFrom?: string, dateTo?: string) =>
  client
    .get<MatchesResponse>(`/competitions/${id}/matches`, {
      params: { dateFrom, dateTo },
    })
    .then((r: AxiosResponse<MatchesResponse>) => r.data)

export const getTeams = () =>
  client.get<TeamsResponse>('/teams').then((r: AxiosResponse<TeamsResponse>) => r.data)

export const getTeamMatches = (id: number, dateFrom?: string, dateTo?: string) =>
  client
    .get<MatchesResponse>(`/teams/${id}/matches`, {
      params: { dateFrom, dateTo },
    })
    .then((r: AxiosResponse<MatchesResponse>) => r.data)

export const getTeam = (id: number) =>
  client.get<Team>(`/teams/${id}`).then((r: AxiosResponse<Team>) => r.data)
