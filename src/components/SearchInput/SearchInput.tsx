import searchIcon from '../../assets/icons/Search.svg'
import styles from './SearchInput.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchInput({ value, onChange, placeholder = 'Search' }: Props) {
  return (
    <div className={styles.wrapper}>
      <img src={searchIcon} alt="" className={styles.icon} />
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button className={styles.clear} onClick={() => onChange('')} aria-label="Очистить">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchInput
