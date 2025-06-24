import { useSelector } from "react-redux";
import Footer from "./Footer"
import Login from "./Login"
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import FAQ from "./FAQ";
import faqData from '../utils/faq';

const Home = () => {
    usePopularMovies();
    const movies = useSelector((store)=>store.movies);
  return (movies.popularMovies &&
    <> 
        
        <Header />
        <Login/>
      <div className="bg-black px-14 py-2">
      <MovieList  title={"Trending"} movies={movies.popularMovies}/>

      {/* FAQ component section */}
      <div className="text-white text-lg  mx-auto mt-10 px-20">
        <h1 >Frequently Asked Questions</h1>
        { 
        faqData.map((data)=>
        <FAQ data={data} key={data.id}/>
        )
        }

      {/* Footer Component Section */}
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home;