import { Navigate } from 'react-router-dom'
import LeaguesPage from './pages/LeaguesPage'
import LeaguesCalendarPage from './pages/LeagueCalendarPage'
import TeamsPage from './pages/TeamsPage'
import TeamsCalendarPage from './pages/TeamsCalendarPage'

export const routes = [
  { path: '/', element: <Navigate to="/leagues" replace /> },
  { path: '/leagues', element: <LeaguesPage /> },
  { path: '/leagues/:id', element: <LeaguesCalendarPage /> },
  { path: '/teams', element: <TeamsPage /> },
  { path: '/teams/:id', element: <TeamsCalendarPage /> },
]
