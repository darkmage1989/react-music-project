import styles from '../Registration/Registration.module.css'
import logo from '../../img/logo.png'
function Registration() {
  return (
<div className={styles.registration}>
    <div className={styles.registration__container}>
      <img className={styles.registration__logo} src={logo} alt="logo"></img>
        <input className={styles.registration__input} placeholder='Логин'></input>
        <input className={styles.registration__input} placeholder='Пароль' type='password'></input>
        <input className={styles.registration__input} placeholder='Повторите пароль' type='password'></input>
        <button className={styles.registration__button}>Зарегистрироваться</button>
    </div>
</div>
  )
}
export default Registration
