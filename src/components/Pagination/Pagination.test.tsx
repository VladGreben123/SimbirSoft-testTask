import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('не рендерится если страница одна', () => {
    const { container } = render(
      <Pagination current={1} total={10} pageSize={16} onChange={() => {}} />
    )
    expect(container.firstChild).toBeNull()
  })

  it('рендерится если страниц больше одной', () => {
    render(<Pagination current={1} total={50} pageSize={16} onChange={() => {}} />)
    expect(screen.getByLabelText('Следующая страница')).toBeInTheDocument()
  })

  it('кнопка назад задизейблена на первой странице', () => {
    render(<Pagination current={1} total={50} pageSize={16} onChange={() => {}} />)
    expect(screen.getByLabelText('Предыдущая страница')).toBeDisabled()
  })

  it('кнопка вперед задизейблена на последней странице', () => {
    render(<Pagination current={4} total={50} pageSize={16} onChange={() => {}} />)
    expect(screen.getByLabelText('Следующая страница')).toBeDisabled()
  })

  it('вызывает onChange при клике на страницу', async () => {
    const onChange = vi.fn()
    render(<Pagination current={1} total={50} pageSize={16} onChange={onChange} />)
    await userEvent.click(screen.getByText('2'))
    expect(onChange).toHaveBeenCalledWith(2)
  })
})
