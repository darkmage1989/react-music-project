import styles from '../Login/Login.module.css'
import logo from '../../img/logo.png'
function Login() {
  return (
<div className={styles.login}>
    <div className={styles.login__container}>
      <img className={styles.login__logo} src={logo} alt="logo"></img>
        <input className={styles.login__input} placeholder='Логин'></input>
        <input className={styles.login__input} placeholder='Пароль' type='password'></input>
        <button className={styles.login__button}>Войти</button>
        <button className={styles.login__registration}>Зарегистрироваться</button>
    </div>
</div>
  )
}
export default Login
