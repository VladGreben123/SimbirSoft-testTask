import { describe, it, expect } from 'vitest'
import { translateStatus } from './translateStatus'

describe('translateStatus', () => {
  it('переводит известные статусы на русский', () => {
    expect(translateStatus('SCHEDULED')).toBe('Запланирован')
    expect(translateStatus('TIMED')).toBe('Запланирован')
    expect(translateStatus('LIVE')).toBe('В прямом эфире')
    expect(translateStatus('IN_PLAY')).toBe('В игре')
    expect(translateStatus('PAUSED')).toBe('Пауза')
    expect(translateStatus('FINISHED')).toBe('Завершён')
    expect(translateStatus('POSTPONED')).toBe('Отложен')
    expect(translateStatus('SUSPENDED')).toBe('Приостановлен')
    expect(translateStatus('CANCELED')).toBe('Отменён')
  })

  it('возвращает исходную строку для неизвестного статуса', () => {
    expect(translateStatus('UNKNOWN')).toBe('UNKNOWN')
  })
})
