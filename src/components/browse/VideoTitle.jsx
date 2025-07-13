import { Link } from "react-router-dom"

const VideoTitle = ({title, overview,movieId}) => {

  return (
    <div className="w-full pt-[45%] pb-[5%] md:pt-[24%] md:pb-[10%] lg:pt-[24%] lg:pb-[20%] px-6 lg:px-16 absolute bg-gradient-to-tr from-black/80 text-white ">
      <h2 className=" lg:text-4xl md:text-2xl font-bold">{title}</h2>
      <p className="hidden md:block w-2/3  text-sm lg:w-4/12 mt-4 text-justify ">{overview}</p>
      <div className="my-3">
        <button className="rounded-sm bg-gray-500/50 text-white md:bg-white text-sm md:text-black font-bold px-4 py-1 md:px-6 md:py-2 md:rounded-lg md:mr-2 hover:opacity-80"><Link to={'/movie/' + movieId}><i className="fa-solid fa-play"></i> Play</Link></button>
        <button className="bg-gray-600 text-white font-bold  p-2 rounded-lg opacity-80 text-sm hover:opacity-100 hidden md:inline"><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;