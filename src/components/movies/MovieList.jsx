import { MovieCard } from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { RESPONSIVE } from '../../utils/constants';
import ShimmerCard from '../ui/ShimmerCard';
function MovieList({title, movies, isLoading = false}) {

const validMovies = movies?.filter(movie => movie && movie.poster_path) || [];

  return (
    <div className='py-2 px-4  md:px-16'>
        <h2 className='text-2xl px-2 font-semibold py-4 text-white'>{title}</h2>
    <div>
         <Carousel
                responsive={RESPONSIVE}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
            { isLoading ? Array(10).fill(0).map((_, index) => <ShimmerCard key={index} />):
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