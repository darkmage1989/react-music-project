import Nav from '../../components/Nav/Nav'
import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter'
import PlaylistTitle from '../../components/PlaylistTitle/PlaylistTitle'
import Playlist from '../../components/PlayList/Playlist'
import Sidebar from '../../components/Sidebar/Sidebar'
import Bar from '../../components/Bar/Bar'
import styles from './Category.module.css'
import { PATH } from '../../constans'
import { useParams } from 'react-router-dom'
function Category() {
  const params = useParams()
  const pathUrl = PATH.find((linkUrl) => linkUrl.url === params.url)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <div className={styles.main__centerblock}>
          <Search />
          <h2 className={styles.centerblock__h2}>{pathUrl.name}</h2>
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
export default Category
