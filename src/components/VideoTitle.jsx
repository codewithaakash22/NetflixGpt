import { Link } from "react-router-dom"

const VideoTitle = ({title, overview,movieId}) => {

  return (
    <div className="w-screen pt-[42%] pb-[5%] md:pt-[25%] md:pb-[20%] px-6 md:px-16 absolute bg-gradient-to-tr from-black/80 text-white ">
      <h2 className=" md:text-4xl text-2xl font-bold">{title}</h2>
      <p className="hidden md:block md:w-4/12 mt-4 text-justify">{overview}</p>
      <div className="my-4">
        <button className="rounded-sm bg-gray-500/50 text-white md:bg-white md:text-black font-bold w-20 p-1 md:w-28  md:p-2 md:rounded-lg md:mr-2 hover:opacity-80"><Link to={'/movie/' + movieId}><i className="fa-solid fa-play"></i> Play</Link></button>
        <button className="bg-gray-600 text-white font-bold w-20 md:w-28 p-2 rounded-lg opacity-80 hover:opacity-100 hidden md:inline"><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;