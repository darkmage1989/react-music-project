import Nav from '../src/components/Nav'
import Centerblock from '../src/components/Centerblock'
import Sidebar from '../src/components/Sidebar'
import Bar from '../src/components/Bar'
import styles from './App.module.css'
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className={styles.main}>
          <Nav />
          <Centerblock />
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}
export default App
