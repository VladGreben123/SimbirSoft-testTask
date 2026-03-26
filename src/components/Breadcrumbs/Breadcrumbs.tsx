import { Link } from 'react-router-dom'
import styles from './Breadcrumbs.module.css'

interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items: BreadcrumbItem[]
}

function Breadcrumbs({ items }: Props) {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, index) => (
        <span key={index} className={styles.item}>
          {index > 0 && <span className={styles.separator}>&gt;</span>}
          {item.to ? (
            <Link to={item.to} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumbs
