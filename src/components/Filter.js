import { useState } from 'react'
import Author from './Author'
import Year from './Year'
import Genre from './Genre'

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
        className={`filter__button button-author _btn-text ${
          visibleFilter === 'author' ? 'filter__active' : '_btn-text'
        }`}
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && <Author />}
      <div
        onClick={() => toggleVisibleFilter('year')}
        className={`filter__button button-author _btn-text ${
          visibleFilter === 'year' ? 'filter__active' : '_btn-text'
        }`}
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && <Year />}

      <div
        onClick={() => toggleVisibleFilter('genre')}
        className={`filter__button button-author _btn-text ${
          visibleFilter === 'genre' ? 'filter__active' : '_btn-text'
        }`}
      >
        жанру
      </div>
      {visibleFilter === 'genre' && <Genre />}
    </div>
  )
}

export default Filter
