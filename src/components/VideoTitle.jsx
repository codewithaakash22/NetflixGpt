
const VideoTitle = ({title, overview}) => {

  return (
    <div className=" w-screen p-[20%] md:p-[25%] px-6 md:px-12 absolute bg-gradient-to-tr from-black/80 text-white">
      <h2 className=" md:text-4xl text-2xl font-bold">{title}</h2>
      <p className=" md:w-4/12 mt-4 text-justify">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black font-bold w-20 p-1 md:w-28  md:p-2 rounded-lg md:mx-2 hover:opacity-80"><i className="fa-solid fa-play"></i> Play</button>
        <button className="bg-gray-600 text-white font-bold w-20 md:w-28 p-2 rounded-lg opacity-80 hover:opacity-100 hidden md:inline"><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle