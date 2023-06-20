import Nav from '../src/components/Nav'
import Centerblock from '../src/components/Centerblock'
import Sidebar from '../src/components/Sidebar'
import Bar from '../src/components/Bar'
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
