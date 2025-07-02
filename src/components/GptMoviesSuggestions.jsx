import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults} = useSelector(store => store.gpt);
  
  return (!moviesNames ? <div className="min-h-screen"></div>:
    <div className="bg-black/80 text-white mx-3 my-10 pb-10">
        {
          moviesNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={moviesResults[index]}/> )
        }
    </div>
  )
}

export default GptMoviesSuggestions