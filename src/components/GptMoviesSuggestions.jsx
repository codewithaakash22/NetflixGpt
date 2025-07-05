import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults} = useSelector(store => store.gpt);
  
  return (!moviesNames ? <div className="bg-black/80 min-h-screen mx-3 my-10 pb-10 flex justify-center items-center"><p className="text-white ">No results. What would you like to watch?</p></div>:
    <div className="bg-black/80 text-white mx-3 my-10 pb-10">
        {
          moviesNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={moviesResults[index]}/> )
        }
    </div>
  )
}

export default GptMoviesSuggestions;