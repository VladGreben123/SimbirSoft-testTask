import styles from './Pagination.module.css'

interface Props {
  current: number
  total: number
  pageSize: number
  onChange: (page: number) => void
}

function Pagination({ current, total, pageSize, onChange }: Props) {
  const totalPages = Math.ceil(total / pageSize)

  if (totalPages <= 1) return null

  const getPages = () => {
    const pages: (number | '...')[] = []

    if (totalPages <= 7) {
      for (let i = 0; i <= totalPages; i++) pages.push(i)
      return pages
    }

    pages.push(1)
    if (current < 3) pages.push('...')
    for (let i = Math.max(2, current - 1); i <= Math.min(totalPages - 1, current + 1); i++) {
      pages.push(i)
    }
    if (current < totalPages - 2) pages.push('...')
    pages.push(totalPages)

    return pages
  }

  return (
    <div className={styles.Pagination}>
      <button
        className={styles.arrow}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
      >
        &lt;
      </button>

      {getPages().map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`${styles.page} ${page === current ? styles.active : ''}`}
            onClick={() => onChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.arrow}
        onClick={() => onChange(current + 1)}
        disabled={current === totalPages}
      >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
