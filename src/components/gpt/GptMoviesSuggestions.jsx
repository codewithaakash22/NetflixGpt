import { useSelector } from "react-redux"
import MovieList from "../movies/MovieList";

const GptMoviesSuggestions = () => {
  const {searchQuery, moviesResults, loading} = useSelector(store => store.gpt);
  if (loading) {
    return <div className="bg-black/70 h-[50vh] mx-3 my-10 pb-10 flex justify-center items-center rounded-lg">
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  if (!searchQuery) {
    return <div className="bg-black/70 h-[50vh] mx-3 my-10 pb-10 flex justify-center items-center rounded-lg"><p className="text-white ">Search for something</p></div>;
  }

  // Check if all results are empty
  const allEmpty = moviesResults.length === 0;

  if (allEmpty) {
    return (
      <div className="bg-black/70 h-[50vh] mx-3 my-10 pb-10 flex flex-col justify-center items-center rounded-lg">
          <p  className="text-white text-lg my-2"> Movie not found</p>
      </div>
    );
  }

  return (
    <div className="bg-black/80 text-white mx-3 my-10 pb-10 rounded-lg">
          <MovieList title={searchQuery} movies={moviesResults} />
    </div>
  );
}

export default GptMoviesSuggestions;