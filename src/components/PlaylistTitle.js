function PlaylistTitle(params) {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg
          className="playlist-title__svg"
          alt="time"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="5.5" stroke="#696969" />
          <path d="M4 6H6.5V2.5" stroke="#696969" />
        </svg>
      </div>
    </div>
  )
}

export default PlaylistTitle
