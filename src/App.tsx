import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { routes } from './routes'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </HashRouter>
  )
}

export default App
