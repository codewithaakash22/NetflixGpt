import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "./Login"
import MovieList from "../movies/MovieList";
import usePopularMovies from "../../hooks/usePopularMovies";
import FAQ from "./FAQ";
import faqData from '../../utils/faq';
import LoadingSpinner from "../ui/LoadingSpinner";

const Home = () => {
    const user = useSelector((store) => store.user);
    usePopularMovies();
    const movies = useSelector((store)=>store.movies);
    
    // If user is authenticated, redirect to browse page
    if (user) {
        return <Navigate to="/browse" replace />;
    }
    
    if(!movies.popularMovies) return <LoadingSpinner/>;

  return (
    <> 
      <Login/>
      <div className="bg-black md:px-14 md:py-2">
      <MovieList  title={"Trending"} movies={movies.popularMovies} isLoading={!movies.popularMovies}/>

      {/* FAQ component section */}
      <div className="text-white  mx-auto mt-10 px-6 md:px-20 pb-10">
        <h1 className="text-lg">Frequently Asked Questions</h1>
        { 
        faqData.map((data)=>
        <FAQ data={data} key={data.id}/>
        )
        }
      </div>
      </div>
    </>
  )
}

export default Home;