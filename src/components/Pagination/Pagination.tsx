import { getPages } from '../../utils'
import arrowLeft from '../../assets/icons/ArrowLeft.svg'
import arrowRight from '../../assets/icons/ArrowRight.svg'
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
        <img src={arrowLeft} alt="" />
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
        <img src={arrowRight} alt="" />
      </button>
    </div>
  )
}

export default Pagination
