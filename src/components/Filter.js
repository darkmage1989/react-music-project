import { useState } from 'react'
import Author from './Author'
import Year from './Year'
import Genre from './Genre'
import styles from './Filter.module.css'

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null)
  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter)
  }
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Искать по:</div>
      <div
        onClick={() => toggleVisibleFilter('author')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'author' ? styles.filter__active : styles.btn_text
        }`}
      >
        исполнителю
      </div>
      {visibleFilter === 'author' && <Author />}
      <div
        onClick={() => toggleVisibleFilter('year')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'year' ? styles.filter__active : styles.btn_text
        }`}
      >
        году выпуска
      </div>
      {visibleFilter === 'year' && <Year />}

      <div
        onClick={() => toggleVisibleFilter('genre')}
        className={`${styles.filter__button} ${styles.btn_text} ${
          visibleFilter === 'genre' ? styles.filter__active : styles.btn_text
        }`}
      >
        жанру
      </div>
      {visibleFilter === 'genre' && <Genre />}
    </div>
  )
}

export default Filter
