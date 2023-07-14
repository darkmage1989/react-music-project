import Nav from '../../components/Nav/Nav'
import Centerblock from '../../components/Centralblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import Bar from '../../components/Bar/Bar'
import styles from './Main.module.css'
function Main() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <Centerblock />
        <Sidebar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </div>
  )
}
export default Main