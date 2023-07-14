import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../PlayList/Playlist'
import styles from './Centerblock.module.css'
// import MyLoader from './Skeleton'
function Centerblock() {
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <div className={styles.centerblock__content}>
        <PlaylistTitle />
        <Playlist />
      </div>
    </div>
  )
}

export default Centerblock
