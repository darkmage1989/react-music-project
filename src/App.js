import Nav from './components/Nav'
import Centerblock from './components/Centerblock'
import Sidebar from './components/Sidebar'
import Bar from './components/Bar'
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
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
