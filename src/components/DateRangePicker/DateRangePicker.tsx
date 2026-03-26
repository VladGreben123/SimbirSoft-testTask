import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DateRangePicker.module.css'

interface Props {
  dateFrom: Date | null
  dateTo: Date | null
  onDateFromChange: (date: Date | null) => void
  onDateToChange: (date: Date | null) => void
}

function DateRangePicker({ dateFrom, dateTo, onDateFromChange, onDateToChange }: Props) {
  return (
    <div className={styles.label}>
      <span className={styles.label}>Матчи с</span>
      <ReactDatePicker
        selected={dateFrom}
        onChange={onDateFromChange}
        selectsStart
        startDate={dateFrom}
        endDate={dateTo}
        dateFormat="dd.MM.yyyy"
        placeholderText=""
        className={styles.input}
        showIcon
      />
      <span className={styles.label}>по</span>
      <ReactDatePicker
        selected={dateTo}
        onChange={onDateToChange}
        selectsEnd
        startDate={dateFrom}
        endDate={dateTo}
        minDate={dateFrom ?? undefined}
        dateFormat="dd.MM.yyyy"
        placeholderText=""
        className={styles.input}
        showIcon
      />
    </div>
  )
}

export default DateRangePicker
