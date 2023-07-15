import styles from '../Dropdown/Dropdown.module.css'
function Track() {
  const artists = [
    'Guilt',
    'Dynoro, Outwork, Mr. Gee',
    'Ali Bakgor',
    'Стоункат, Psychopath',
    'Jaded, Will Clarke, AR/CO',
    'HYBIT, Mr. Black, Offer Nissim, Hi Profile'
  ]
  return Array.from(artists).map((artist) => {
    return (
      <span className= {styles.item} key={artist}>
        {artist}
      </span>
    )
  })
}

export default Track
