function Year() {
  return (
    <div
      className="filter__dropdown filter__dropdown__year"
      style={{
        position: 'absolute',
        top: '50px',
        left: '130px'
      }}
    >
      <div className="filter__dropdown__text">
        <input className="filter__dropdown__input" type="radio" name="filter" id="older" />
        <label>Более новые</label>
      </div>
      <div className="filter__dropdown__text">
        <input className="filter__dropdown__input" type="radio" name="filter" id="younger" />
        <label>Более старые</label>
      </div>
    </div>
  )
}
export default Year
