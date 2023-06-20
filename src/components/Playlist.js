import { useState, useEffect } from 'react'
import Note from './Note'
import Like from './Like'
import MyLoader from './Skeleton'

function Playlist() {
  const data = {
    name: [
      'Guilt',
      'Elektro',
      'I’m Fire',
      'Non Stop',
      'Run Run',
      'Eyes on Fire',
      'Mucho Bien',
      'Calvin Harris, Disciples',
      'Morena '
    ],
    notes: <Note />,
    likes: <Like />,
    author: [
      'Nero',
      'Dynoro, Outwork, Mr. Gee',
      'Ali Bakgor',
      'Стоункат, Psychopath',
      'Jaded, Will Clarke, AR/CO',
      'Blue Foundation, Zeds Dead',
      'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      'minthaze',
      'Calvin Harris, Disciples'
    ],
    albom: [
      'Welcome Reality',
      'Elektro',
      'I’m Fire',
      'Non Stop',
      'Run Run',
      'Eyes on Fire',
      'Mucho Bien',
      'Captivating',
      'How Deep Is Your Love'
    ],
    time: [
      '4:44',
      '2:22',
      '2:22',
      '4:12',
      '2:54',
      '5:20',
      '3:41',
      '1:48',
      '3:32'
    ]
  }
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const skeletonTImer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(skeletonTImer)
  }, [])
  return (
    <div className="content__playlist playlist">
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[1]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[1]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[1]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[1]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[2]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[2]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[2]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[2]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[3]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[3]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[3]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[3]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[4]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[4]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[4]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[4]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[5]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[5]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[5]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[5]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[6]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[6]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[6]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[6]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[7]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[7]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[7]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[7]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[8]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[8]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[8]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[8]}
            </span>
          </div>
        </div>
      </div>
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              {isLoading ? <MyLoader /> : <Note />}
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {isLoading ? <MyLoader /> : data.name[9]}{' '}
                <span className="track__title-span"></span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {isLoading ? <MyLoader /> : data.author[9]}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {isLoading ? <MyLoader /> : data.albom[9]}
            </a>
          </div>
          <div className="track__time">
            {isLoading ? <MyLoader /> : data.likes}
            <span className="track__time-text">
              {isLoading ? <MyLoader /> : data.time[9]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Playlist
