import { useState } from 'react'
import styles from './Burger.module.css'
import { Link } from 'react-router-dom'
const Burger = () => {
  const [visible, setVisible] = useState(true)
  const toggleVisibility = () => setVisible(!visible)
  return (
    <>
      <div onClick={toggleVisibility} className={styles.burger}>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </div>
      {!visible && (
        <div className={styles.nav__menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
            <Link className={styles.menu__link} to = '/'>
                Главная
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} to = '/MyTracks'>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menu__item}>
            <Link className={styles.menu__link} to = '/Login'>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
export default Burger
