import Nav from '../../components/Nav'
import Centerblock from '../../components/Centerblock'
import Sidebar from '../../components/Sidebar'
import Bar from '../../components/Bar'
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
