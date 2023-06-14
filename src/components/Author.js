const artists = [
  'Guilt',
  'Dynoro, Outwork, Mr. Gee',
  'Ali Bakgor',
  'Стоункат, Psychopath',
  'Jaded, Will Clarke, AR/CO',
  'HYBIT, Mr. Black, Offer Nissim, Hi Profile'
]
function Author() {
  return (
    <div
      className="filter__dropdown"
      style={{
        position: 'absolute',
        top: '50px',
        left: '110px'
      }}
    >
      {Array.from(artists).map((artist) => {
        return (
          <span className="filter__dropdown__text" key={artist}>
            {artist}
          </span>
        )
      })}
    </div>
  )
}
export default Author
