import style from './Dropdown.module.css'
function Year() {
  return (
    <div
      className={`${style.dropdown} ${style.dropdown__year}`}
      style={{
        position: 'absolute',
        top: '50px',
        left: '130px'
      }}
    >
      <div className={style.item}>
        <input className="filter__dropdown__input" type="radio" name="filter" id="older" />
        <label>Более новые</label>
      </div>
      <div className={style.item}>
        <input className="filter__dropdown__input" type="radio" name="filter" id="younger" />
        <label>Более старые</label>
      </div>
    </div>
  )
}
export default Year
