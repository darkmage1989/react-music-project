import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import Playlist from '../../components/PlayList/Playlist'
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle'
import Sidebar from '../../components/Sidebar/Sidebar'
import Bar from '../../components/Bar/Bar'
import styles from './Day.module.css'
function Day() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>День</h2>
          <Filter />
          <div className={styles.centerblock__content}>
            <PlaylistTitle />
            <Playlist />
          </div>
        </div>
        <Sidebar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </div>
  )
}
export default Day
