import { useState } from 'react'
import Author from '../components/Author.js'
import Year from '../components/Year.js'
import Genre from '../components/Genre.js'

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }
  // на случай важных переговоров
  // useEffect(() => {
  //   const filters = document.querySelectorAll('._btn-text')
  //   filters.forEach((filter) => {
  //     filter.addEventListener('click', (event) => {
  //       const target = event.target
  //       if (visibleFilter === null) {
  //         target.classList.add('filter__active')
  //       } else {
  //         target.classList.remove('filter__active')
  //       }
  //     })
  //   })
  // })
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
