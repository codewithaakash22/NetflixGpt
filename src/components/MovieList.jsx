import { MovieCard } from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { RESPONSIVE } from '../utils/constants';
function MovieList({title, movies}) {

const validMovies = movies?.filter(movie => movie && movie.poster_path) || [];

  return (
    <div className='py-2 px-4 md:px-16'>
        <h2 className='text-2xl font-semibold py-4 text-white'>{title}</h2>
    <div>
         <Carousel
                responsive={RESPONSIVE}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
            { 
                validMovies.map((movie)=>
                    <Link to={'/movie/' + movie.id} key={movie.id}>
                    <MovieCard  poster={movie.poster_path}/>
                    </Link>
                )
            }
            </Carousel>
    </div>
    </div>
  )
}

export default MovieList;