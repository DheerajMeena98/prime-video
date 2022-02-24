import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesDetails} = props
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesDetails.map(eachMovie => (
        <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
