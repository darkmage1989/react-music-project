/* eslint-disable react/prop-types */
import styles from '../Login/Login.module.css'
import logo from '../../img/logo.png'
import { useNavigate } from 'react-router'
function Login() {
  const navigate = useNavigate()
  const registrationClick = () => {
    navigate('/Registration')
  }
  const loginBtnClick = () => {
    localStorage.setItem('login', 'tester')
    navigate('/')
  }
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <img className={styles.login__logo} src={logo} alt="logo"></img>
        <input className={styles.login__input} placeholder="Логин"></input>
        <input
          className={styles.login__input}
          placeholder="Пароль"
          type="password"
        ></input>
        <button onClick={loginBtnClick} className={styles.login__button}>Войти</button>
        <button
          onClick={registrationClick}
          className={styles.login__registration}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}
export default Login
