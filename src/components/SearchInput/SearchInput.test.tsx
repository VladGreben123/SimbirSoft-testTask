import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from './SearchInput'

describe('SearchInput', () => {
  it('рендерит инпут с placeholder', () => {
    render(<SearchInput value="" onChange={() => {}} placeholder="Поиск" />)
    expect(screen.getByPlaceholderText('Поиск')).toBeInTheDocument()
  })

  it('кнопка очистки не отображается при пустом значении', () => {
    render(<SearchInput value="" onChange={() => {}} />)
    expect(screen.queryByLabelText('Очистить')).toBeNull()
  })

  it('кнопка очистки отображается при наличии текста', () => {
    render(<SearchInput value="текст" onChange={() => {}} />)
    expect(screen.getByLabelText('Очистить')).toBeInTheDocument()
  })

  it('вызывает onChange с пустой строкой при клике на очистку', async () => {
    const onChange = vi.fn()
    render(<SearchInput value="текст" onChange={onChange} />)
    await userEvent.click(screen.getByLabelText('Очистить'))
    expect(onChange).toHaveBeenCalledWith('')
  })
})
