import logo from '../img/logo.png'
import Burger from './Burger'
function Nav() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo"></img>
      </div>
      <Burger />
    </nav>
  )
}
export default Nav
