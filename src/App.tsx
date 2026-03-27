import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import LeaguesPage from './pages/LeaguesPage'
import LeaguesCalendarPage from './pages/LeagueCalendarPage'
import TeamsPage from './pages/TeamsPage'
import TeamsCalendarPage from './pages/TeamsCalendarPage'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/leagues" replace />} />
        <Route path="/leagues" element={<LeaguesPage />} />
        <Route path="/leagues/:id" element={<LeaguesCalendarPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/teams/:id" element={<TeamsCalendarPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
