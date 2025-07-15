import { useSelector } from "react-redux"
import MovieList from "../movies/MovieList";

const GptMoviesSuggestions = () => {
  const {moviesNames, moviesResults, loading} = useSelector(store => store.gpt);

  if (loading) {
    return <div className="bg-black/70 min-h-screen mx-3 my-10 pb-10 flex justify-center items-center rounded-lg">
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  if (!moviesNames) {
    return <div className="bg-black/70 min-h-screen mx-3 my-10 pb-10 flex justify-center items-center rounded-lg"><p className="text-white ">Search for something</p></div>;
  }

  // Check if all results are empty
  const allEmpty = moviesResults.every((results) => !results || results.length === 0);

  if (allEmpty) {
    return (
      <div className="bg-black/70 min-h-screen mx-3 my-10 pb-10 flex flex-col justify-center items-center rounded-lg">
          <p  className="text-white text-lg my-2"> Movie not found</p>
      </div>
    );
  }

  return (
    <div className="bg-black/80 text-white mx-3 my-10 pb-10 rounded-lg">
      {moviesNames.map((movieName, index) =>
          <MovieList key={movieName} title={movieName} movies={moviesResults[index]} />
      )}
    </div>
  );
}

export default GptMoviesSuggestions;