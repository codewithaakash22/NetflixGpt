import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  //fetch trailer video & updating the store with trailer video data
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);

  return (
    <div className=" bg-black pt-10 md:pt-0 w-full aspect-video ">
      <iframe
        className=" w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=XhpJROUrivkSqBU5&amp;controls=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      
    </div>
  );
};

export default VideoBackground;