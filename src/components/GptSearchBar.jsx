import { useRef } from 'react';
import lang from '../utils/lang';
import { useDispatch, useSelector } from 'react-redux';
import {API_OPTIONS} from '../utils/constants';
import openai from '../utils/openAi';
import { addGptMovieResult } from '../utils/GptSlice';
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  const gptSearchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesInTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await  data.json();
    return json.results;
  }

  const handleGptSearchClick = async () =>{
      const query = "Act as a Movie Recommandation system and suggest some moives for the query: "+ gptSearchText.current.value  +". only give me names of 5 movies, comma seperated like the example result give ahead. Example: sholay, dhadkan, golmaal, phir-hera-pheri, fukre.";

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
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({moviesNames: gptMovies, moviesResults:tmdbResults}));
  }

  return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black/80 w-1/2 grid grid-cols-12 p-2 rounded-sm" onSubmit={(e)=>e.preventDefault()}>
            <input ref={gptSearchText} type='text' className='p-2 m-2 col-span-10 text-white bg-gray-500 rounded-sm' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className="bg-red-600 rounded-sm p-3 my-2 col-span-2 text-white cursor-pointer" onClick={handleGptSearchClick}>{lang[langKey].search}</button> 
        </form>
    </div>
  )
}

export default GptSearchBar;