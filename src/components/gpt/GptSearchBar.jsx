import { useRef } from 'react';
import lang from '../../utils/lang';
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTIONS} from '../../utils/constants';
import openai from '../../utils/openAi';
import { addGptMovieResult, setGptLoading } from '../../utils/GptSlice';
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const gptSearchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesInTMDB = async (movie) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await response.json();
    const results = await json?.results || [];
    // Try to find exact match by title (case-insensitive)
    const exactMatch =  results?.find(
      (item) => (item.title.toLowerCase() === movie.trim().toLowerCase() ) && (item.original_language == 'hi' || item.original_language == 'en')
    );
    

    // Return exact match if found, else return first result or empty array
     return exactMatch ? [exactMatch] : results.length > 0 ? [results[0]] : [];
  } catch (error) {
    console.error("TMDB search error:", error);
    return [];
  }
};

  const handleGptSearchClick = async () =>{
      dispatch(setGptLoading(true));
      const query = "Act as a movie recommendation system. If the input refers to a specific movie title with a number or subtitle, return only that exact movie name, in lowercase. If the input is a movie title without a number, return all parts with sequels of that movie, in lowercase. If the input is a general query or theme, return 5 related movies, in lowercase, separated by commas. Query: " + gptSearchText.current.value + ".";

      const getResults = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        {"role": "user", "content": query},
      ],
      });

      if(!getResults.choices){

        //error handling
      }

      const gptMovies = getResults?.choices[0]?.message?.content.split(", ");
      const promiseArray  =  gptMovies.map((movie) => searchMoviesInTMDB(movie));   
      let tmdbResults = await Promise.all(promiseArray);

    
      dispatch(addGptMovieResult({moviesNames: gptMovies, moviesResults:tmdbResults}));
      dispatch(setGptLoading(false));
  }

  return (
    <div className="pt-[20%]  md:pt-[10%] flex justify-center">
        <form className="bg-black/70 w-[90%] md:w-1/2 flex items-center  rounded-md shadow-md" onSubmit={(e)=>e.preventDefault()}>
            <input ref={gptSearchText} type='text' className='p-2 ml-2 flex-grow text-white text-sm md:text-base bg-gray-800 placeholder-gray-300 rounded-l-md outline-none ' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="bg-red-600 hover:bg-red-700 rounded-r-md px-4 py-2 my-2 mr-2 text-white text-sm md:text-base cursor-pointe font-semiboldr" onClick={handleGptSearchClick}>{lang[langKey].search}</button> 
        </form>
    </div>
  )
}

export default GptSearchBar;