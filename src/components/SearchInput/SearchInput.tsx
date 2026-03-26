import styles from './SearchInput.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

function SearchInput({ value, onChange, placeholder = 'Search' }: Props) {
  return (
    <div className={styles.wrapper}>
      <svg className={styles.icon} viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="6" stroke="#aaaaaa" strokeWidth="1.5" />
        <path d="M13.5 13.5L17 17" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchInput
