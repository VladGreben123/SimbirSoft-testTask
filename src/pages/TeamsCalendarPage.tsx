import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTeam, getTeamMatches } from '../api'
import type { Match } from '../types'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import DateRangePicker from '../components/DateRangePicker/DateRangePicker'
import MatchRow from '../components/MatchRow/MatchRow'
import Pagination from '../components/Pagination/Pagination'
import { formatDateForApi } from '../utils'
import styles from './CalendarPage.module.css'

const PAGE_SIZE = 10

function TeamsCalendarPage() {
  const { id } = useParams<{ id: string }>()
  const [matches, setMatches] = useState<Match[]>([])
  const [teamName, setTeamName] = useState('')
  const [dateFrom, setDateFrom] = useState<Date | null>(null)
  const [dateTo, setDateTo] = useState<Date | null>(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return

    const from = dateFrom && dateTo ? formatDateForApi(dateFrom) : undefined
    const to = dateFrom && dateTo ? formatDateForApi(dateTo) : undefined

    Promise.all([getTeam(Number(id)), getTeamMatches(Number(id), from, to)])
      .then(([team, matchesData]) => {
        setTeamName(team.name)
        setMatches(matchesData.matches)
      })
      .catch(() => setError('Не удалось загрузить данные. Попробуйте позже.'))
      .finally(() => setLoading(false))
  }, [id, dateFrom, dateTo])

  const paginated = matches.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleDateFromChange = (date: Date | null) => {
    setDateFrom(date)
    setPage(1)
  }

  const handleDateToChange = (date: Date | null) => {
    setDateTo(date)
    setPage(1)
  }

  return (
    <main className={styles.page}>
      <Breadcrumbs items={[{ label: 'Команды', to: '/teams' }, { label: teamName }]} />

      <DateRangePicker
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={handleDateFromChange}
        onDateToChange={handleDateToChange}
      />

      {loading && <p className={styles.message}>Загрузка...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <>
          <div className={styles.table}>
            {paginated.length === 0 ? (
              <p className={styles.message}>Матчи не найдены</p>
            ) : (
              paginated.map((match) => <MatchRow key={match.id} match={match} />)
            )}
          </div>

          <Pagination
            current={page}
            total={matches.length}
            pageSize={PAGE_SIZE}
            onChange={setPage}
          />
        </>
      )}
    </main>
  )
}

export default TeamsCalendarPage
