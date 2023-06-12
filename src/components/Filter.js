import { useState } from 'react'

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        onClick={() => toggleVisibleFilter('author')}
        className="filter__button button-author _btn-text"
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && (
        <div className="test">
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
        </div>
      )}
      <div
        onClick={() => toggleVisibleFilter('year')}
        className="filter__button button-year _btn-text"
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && (
        <div className="test">
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
        </div>
      )}
      <div
        onClick={() => toggleVisibleFilter('genre')}
        className="filter__button button-genre _btn-text"
      >
        жанру
      </div>
      {visibleFilter === 'genre' && (
        <div className="test">
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
          <span>dasfdsgdfgdff</span>
        </div>
      )}
    </div>
  )
}

export default Filter
