import { NavLink } from 'react-router-dom'
import logo from '../../assets/pngwing.com.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt="FIFA" className={styles.logo} />
        <nav className={styles.nav}>
          <NavLink
            to="/leagues"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Лиги
          </NavLink>
          <NavLink
            to="/teams"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            Команды
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
