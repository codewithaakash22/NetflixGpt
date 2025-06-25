import { MovieCard } from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
function MovieList({title, movies}) {

const validMovies = movies?.filter(movie => movie && movie.poster_path) || [];

const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 5,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
};

  return (
    <div className='py-2 px-16'>
        <h2 className='text-2xl font-semibold py-4 text-white'>{title}</h2>
    <div>
         <Carousel
                responsive={responsive}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
            { 
                validMovies.map((movie)=>
                    <Link to={"/"} key={movie.id}>
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