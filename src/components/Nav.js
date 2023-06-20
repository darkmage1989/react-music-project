import logo from '../img/logo.png'
import Burger from './Burger'
import styles from './Nav.module.css'
function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img className={styles.image} src={logo} alt="logo"></img>
      </div>
      <Burger />
    </nav>
  )
}
export default Nav
