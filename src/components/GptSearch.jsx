import { BANNER } from "../utils/constants";
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
      <div>
        <div >
        <img src={BANNER} alt='background' className="fixed -z-10"/>
        </div>
        <GptSearchBar/>
        <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch;