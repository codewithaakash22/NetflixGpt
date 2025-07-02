import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector((store)=>store?.movies?.nowPlayingMovies);

    if(movies == null) return;

    const mainMovie = movies[2];
    // console.log(mainMovie);
  return (
    <div >
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} movieId={mainMovie.id}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer;