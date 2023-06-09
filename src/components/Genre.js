import styles from './Dropdown.module.css'
const geners = [
  'Rock',
  'Pop',
  'Rap & Hip-Hop',
  'Easy Listening',
  'Dance & House',
  'Instrumental',
  'Metal',
  'Alternative',
  'Dubstep',
  'Jazz & Blues',
  'Drum & Bass',
  'Trance',
  'Chanson',
  'Ethnic',
  'Acoustic & Vocal',
  'Reggae',
  'Classical',
  'Indie Pop',
  'Speech',
  'Electropop & Disco',
  'Other'
]
function Genre() {
  return (
    <div
      className={styles.dropdown}
      style={{
        position: 'absolute',
        top: '50px',
        left: '400px'
      }}
    >
      {Array.from(geners).map((gener) => {
        return <span className={styles.item} key={gener}>{gener}</span>
      })}
    </div>
  )
}
export default Genre
