import type { Score } from '../types'

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
