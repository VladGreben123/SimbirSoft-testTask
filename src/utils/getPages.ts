export function getPages(current: number, totalPages: number): (number | '...')[] {
  const pages: (number | '...')[] = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
    return pages
  }

  const hasLeftDots = current > 4
  const hasRightDots = current < totalPages - 2

  if (hasLeftDots && hasRightDots) {
    pages.push('...')
    for (let i = current - 2; i <= current + 2; i++) pages.push(i)
    pages.push('...')
  } else if (!hasLeftDots) {
    for (let i = 1; i <= 6; i++) pages.push(i)
    pages.push('...')
  } else {
    pages.push('...')
    for (let i = totalPages - 5; i <= totalPages; i++) pages.push(i)
  }

  return pages
}
