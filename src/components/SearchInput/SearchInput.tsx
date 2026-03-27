import searchIcon from '../../assets/icons/Search.svg'
import closeIcon from '../../assets/icons/Close.svg'
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
          <img src={closeIcon} alt="" />
        </button>
      )}
    </div>
  )
}

export default SearchInput
