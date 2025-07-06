import MoviePlayerShimmer from '../ui/MoviePlayerShimmer';
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);

    if(movies == null) return <MoviePlayerShimmer/>;

    const mainMovie = movies[2];
  return (
    <div className='bg-black'>
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} movieId={mainMovie.id}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;