import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCompetitions } from '../api'
import type { Competition } from '../types'
import SearchInput from '../components/SearchInput/SearchInput'
import Pagination from '../components/Pagination/Pagination'
import styles from './LeaguesPage.module.css'

const PAGE_SIZE = 16

function LeaguesPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getCompetitions()
      .then((data) => setCompetitions(data.competitions))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const filtered = competitions.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))

  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
  }

  return (
    <main className={styles.page}>
      <SearchInput value={search} onChange={handleSearch} />

      {!loading && !error && (
        <>
          <div className={styles.grid}>
            {paginated.map((competition) => (
              <div
                key={competition.id}
                className={styles.card}
                onClick={() => navigate(`/leagues/${competition.id}`)}
              >
                <img src={competition.emblem} alt={competition.name} className={styles.emblem} />
                <p className={styles.name}>{competition.name}</p>
                <p className={styles.area}>{competition.area.name}</p>
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

export default LeaguesPage
