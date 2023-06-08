import Search from './Search'
import Filter from './Filter'
import PlaylistTitle from './PlaylistTitle'
import Playlist from './Playlist'
function Centerblock() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <div className="centerblock__content">
        <PlaylistTitle />
        <Playlist />
      </div>
    </div>
  )
}

export default Centerblock
