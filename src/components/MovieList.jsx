import { MovieCard } from './MovieCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
function MovieList({title, movies}) {
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='py-2 px-16'>
        <h2 className='text-2xl font-semibold py-4 text-white'>{title}</h2>
    <div>
        <Slider {...settings}>
            { 
                movies.map((movie)=>
                    <Link to={"/"} key={movie.id}>
                    <MovieCard  poster={movie.poster_path}/>
                    </Link>
                )
            }
        </Slider>
    </div>
    </div>
  )
}

export default MovieList;