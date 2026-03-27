import { describe, it, expect } from 'vitest'
import { formatScore } from './formatScore'

describe('formatScore', () => {
  it('возвращает пустую строку если нет основного времени', () => {
    expect(formatScore({ fullTime: { home: null, away: null }, extraTime: null, penalties: null })).toBe('')
  })

  it('отображает только основное время', () => {
    expect(formatScore({ fullTime: { home: 2, away: 1 }, extraTime: null, penalties: null })).toBe('2:1')
  })

  it('добавляет дополнительное время если оно не null', () => {
    expect(formatScore({
      fullTime: { home: 1, away: 1 },
      extraTime: { home: 2, away: 1 },
      penalties: null,
    })).toBe('1:1 (2:1)')
  })

  it('добавляет пенальти если они не null', () => {
    expect(formatScore({
      fullTime: { home: 1, away: 1 },
      extraTime: { home: 2, away: 2 },
      penalties: { home: 4, away: 3 },
    })).toBe('1:1 (2:2) (4:3)')
  })
})
