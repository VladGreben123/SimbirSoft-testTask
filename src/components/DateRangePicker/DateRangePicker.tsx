import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import calendarIcon from '../../assets/icons/coolicon.svg'
import styles from './DateRangePicker.module.css'

interface Props {
  dateFrom: Date | null
  dateTo: Date | null
  onDateFromChange: (date: Date | null) => void
  onDateToChange: (date: Date | null) => void
}

function DateRangePicker({ dateFrom, dateTo, onDateFromChange, onDateToChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Матчи с</span>
      <div className={styles.field}>
        <img src={calendarIcon} alt="" />
        <ReactDatePicker
          selected={dateFrom}
          onChange={onDateFromChange}
          selectsStart
          startDate={dateFrom}
          endDate={dateTo}
          dateFormat="dd.MM.yyyy"
          className={styles.input}
        />
      </div>
      <span className={styles.label}>по</span>
      <div className={styles.field}>
        <img src={calendarIcon} alt="" />
        <ReactDatePicker
          selected={dateTo}
          onChange={onDateToChange}
          selectsEnd
          startDate={dateFrom}
          endDate={dateTo}
          minDate={dateFrom ?? undefined}
          dateFormat="dd.MM.yyyy"
          className={styles.input}
        />
      </div>
    </div>
  )
}

export default DateRangePicker
