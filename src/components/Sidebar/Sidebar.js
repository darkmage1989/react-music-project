import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
        <div className={styles.sidebar__avatar}></div>
      </div>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to= '/day'>
              <img
                className={styles.sidebar__img}
                src={playlist01}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to= '/dance'>
              <img
                className={styles.sidebar__img}
                src={playlist02}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} to= '/indy'>
              <img
                className={styles.sidebar__img}
                src={playlist03}
                alt="day's playlist"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
