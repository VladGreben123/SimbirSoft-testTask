import { describe, it, expect } from 'vitest'
import { getPages } from './getPages'

describe('getPages', () => {
  it('возвращает все страницы если их <= 7', () => {
    expect(getPages(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(getPages(3, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('добавляет многоточие справа когда текущая страница в начале', () => {
    const pages = getPages(1, 10)
    expect(pages).toEqual([1, 2, 3, 4, 5, 6, '...'])
  })

  it('добавляет многоточие слева когда текущая страница в конце', () => {
    const pages = getPages(10, 10)
    expect(pages).toEqual(['...', 5, 6, 7, 8, 9, 10])
  })

  it('добавляет многоточия с обеих сторон когда текущая страница посередине', () => {
    const pages = getPages(6, 12)
    expect(pages).toEqual(['...', 4, 5, 6, 7, 8, '...'])
  })

  it('всегда возвращает ровно 7 элементов при totalPages > 7', () => {
    expect(getPages(1, 10)).toHaveLength(7)
    expect(getPages(5, 10)).toHaveLength(7)
    expect(getPages(10, 10)).toHaveLength(7)
  })
})
