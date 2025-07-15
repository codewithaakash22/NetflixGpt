import { useSelector } from "react-redux";

const MoviePlayer = () => {
  const trailerVideo = useSelector((store)=>store.movies.selectedMovieTrailer);
  return (
      <div className=" bg-black  md:px-12 ">
      <iframe
        className="mx-auto aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      
    </div>
  );
};

export default MoviePlayer;
