import { useSelector } from "react-redux"
import MovieList from "../movies/MovieList";

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults} = useSelector(store => store.gpt);
  
  return (!moviesNames ? <div className="bg-black/70 min-h-screen mx-3 my-10 pb-10 flex justify-center items-center rounded-lg"><p className="text-white ">No results...</p></div>:
    <div className="bg-black/80 text-white mx-3 my-10 pb-10 rounded-lg">
        {
          moviesNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={moviesResults[index]}/> )
        }
    </div>
  )
}

export default GptMoviesSuggestions;