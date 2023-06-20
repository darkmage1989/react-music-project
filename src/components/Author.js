import Track from './Track'
import styles from './Dropdown.module.css'
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
