import playlist01 from '../img/playlist01.png'
import playlist02 from '../img/playlist02.png'
import playlist03 from '../img/playlist03.png'
import styles from './Sidebar.module.css'
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
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src={playlist01}
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src={playlist02}
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href="#">
              <img
                className={styles.sidebar__img}
                src={playlist03}
                alt="day's playlist"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
