import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTeams } from '../api'
import type { Team } from '../types'
import SearchInput from '../components/SearchInput/SearchInput'
import Pagination from '../components/Pagination/Pagination'
import styles from './CardPage.module.css'

const PAGE_SIZE = 16

function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getTeams()
      .then((data) => setTeams(data.teams))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const query = search.toLowerCase()
  const filtered = teams.filter((t) => t.name.toLowerCase().includes(query))

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  return (
    <main className={styles.page}>
      <SearchInput value={search} onChange={handleSearch} />

      {loading && <p className={styles.message}>Загрузка...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <>
          <div className={styles.grid}>
            {paginated.map((team) => (
              <div
                key={team.id}
                className={styles.card}
                onClick={() => navigate(`/teams/${team.id}`)}
              >
                <img src={team.crest} alt={team.name} className={styles.image} />
                <p className={styles.name}>{team.name}</p>
              </div>
            ))}
          </div>

          <Pagination
            current={page}
            total={filtered.length}
            pageSize={PAGE_SIZE}
            onChange={setPage}
          />
        </>
      )}
    </main>
  )
}

export default TeamsPage
