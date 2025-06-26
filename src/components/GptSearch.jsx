import { BANNER } from "../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
      <div>
        <div >
        <img src={BANNER} alt='background' className="fixed -z-10 h-screen object-cover md:w-screen md:object-fill"/>
        </div>
        <GptSearchBar/>
        <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch;