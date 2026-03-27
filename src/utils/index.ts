import { format } from 'date-fns'
import type { Score } from '../types'

export function formatDate(utcDate: string): string {
  return format(new Date(utcDate), 'dd.MM.yyyy')
}

export function formatTime(utcDate: string): string {
  return format(new Date(utcDate), 'HH:mm')
}

export function translateStatus(status: string): string {
  const map: Record<string, string> = {
    SCHEDULED: 'Запланирован',
    TIMED: 'Запланирован',
    LIVE: 'В прямом эфире',
    IN_PLAY: 'В игре',
    PAUSED: 'Пауза',
    FINISHED: 'Завершён',
    POSTPONED: 'Отложен',
    SUSPENDED: 'Приостановлен',
    CANCELED: 'Отменён',
  }
  return map[status] ?? status
}

export function formatScore(score: Score): string {
  const { fullTime, extraTime, penalties } = score

  if (!fullTime || fullTime.home === null || fullTime.away === null) return ''

  let result = `${fullTime.home}:${fullTime.away}`

  if (extraTime && extraTime.home !== null && extraTime.away !== null) {
    result += ` (${extraTime.home}:${extraTime.away})`
  }

  if (penalties && penalties.home !== null && penalties.away !== null) {
    result += ` (${penalties.home}:${penalties.away})`
  }

  return result
}

export function formatDateForApi(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}
