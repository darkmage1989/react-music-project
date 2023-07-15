import Track from '../Track/Track'
import styles from '../Dropdown/Dropdown.module.css'
function Author() {
  return (
    <div
      className={styles.dropdown}
      style={{
        position: 'absolute',
        top: '50px',
        left: '110px'
      }}
    >
      <Track />
    </div>
  )
}
export default Author
