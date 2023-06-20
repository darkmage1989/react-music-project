import { useState } from 'react'
import styles from './Burger.module.css'
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
              <a href="http://" className={styles.menu__link}>
                Главное
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="http://" className={styles.menu__link}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="http://" className={styles.menu__link}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
export default Burger
