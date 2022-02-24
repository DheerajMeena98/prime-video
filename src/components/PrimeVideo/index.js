import MoviesSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMoviesList = moviesList.filter(
    item => item.categoryId === 'COMEDY',
  )
  const actionMoviesList = moviesList.filter(
    item => item.categoryId === 'ACTION',
  )
  return (
    <div className="prime-video-bcg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="action-movies-container">
        <h1 className="action-movies-heading"> Action Movies </h1>
        <MoviesSlider moviesDetails={actionMoviesList} />
      </div>
      <div className="comedy-movies-container">
        <h1 className="action-movies-heading"> Comedy Movies </h1>
        <MoviesSlider moviesDetails={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
