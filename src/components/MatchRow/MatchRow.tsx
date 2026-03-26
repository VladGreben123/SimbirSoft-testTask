import type { Match } from '../../types'
import { formatDate, formatTime, formatScore, translateStatus } from '../../utils'
import styles from './MatchRow.module.css'

interface Props {
  match: Match
}

function MatchRow({ match }: Props) {
  return (
    <div className={styles.row}>
      <span className={styles.date}>{formatDate(match.utcDate)}</span>
      <span className={styles.time}>{formatTime(match.utcDate)}</span>
      <span className={styles.status}>{translateStatus(match.status)}</span>
      <span className={styles.teams}>
        {match.homeTeam.name} - {match.awayTeam.name}
      </span>
      <span className={styles.score}>{formatScore(match.score)}</span>
    </div>
  )
}

export default MatchRow
