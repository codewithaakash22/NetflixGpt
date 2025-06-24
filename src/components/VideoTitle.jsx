
const VideoTitle = ({title, overview}) => {

  return (
    <div className=" w-screen p-[25%] px-12 absolute bg-gradient-to-tr from-black/80 text-white">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="w-4/12 mt-4 text-justify">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black font-bold w-28 p-2 rounded-lg mx-2 hover:opacity-80"><i className="fa-solid fa-play"></i> Play</button>
        <button className="bg-gray-600 text-white font-bold  w-28 p-2 rounded-lg opacity-80 hover:opacity-100"><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle