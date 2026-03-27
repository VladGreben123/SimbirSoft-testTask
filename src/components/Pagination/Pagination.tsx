import { getPages } from '../../utils'
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

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Предыдущая страница"
      >
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
          <path
            d="M4 1L1 4.5L4 8"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {getPages(current, totalPages).map((page, index) =>
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
        aria-label="Следующая страница"
      >
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none">
          <path
            d="M1 1L4 4.5L1 8"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
