import { useSelector } from "react-redux";

const MovieInfo = () => {
  const {details} = useSelector((store)=>store.movies.selectedMovie);
  if(!details) return;
  return (
    <div className="text-white mt-8 px-16">
      <h2 className="text-4xl font-bold">{details.original_title}</h2>
      <div className="mt-2">
        <span className="pr-4">{details.release_date.slice(0,4)}</span>
        <span className="pr-4"><i className="fa-regular fa-clock pr-2"></i>{(details.runtime/60).toString().slice(0,3)} hrs </span>
        <span className="p-1 bg-gray-600/70 rounded-sm">PG-13</span>
      </div>
      <div className="py-4">
        <span className="pr-4"> <i className="fa-solid fa-star text-amber-300 pr-2"></i>{details.vote_average.toString().slice(0,3)}/10</span>
        {
          details.genres.map((genere)=>(
            <span  key={genere.id} className="px-4 py-0.5 text-red-400 bg-red-950 rounded-2xl border border-red-500 mx-1 ">{genere.name}</span>
          ))
        }
      </div>
      <div className="py-2">
        <button className="px-4 py-2 bg-gray-500/50 rounded-lg mr-1 cursor-pointer"><i className="fa-solid fa-plus"></i> Add to List</button>
        <button className="px-2 py-1 border border-white rounded-4xl mx-1 cursor-pointer"><i className="fa-regular fa-thumbs-up"></i></button>
        <button className="px-2 py-1 border border-white rounded-4xl mx-1 cursor-pointer"><i className="fa-regular fa-thumbs-down"></i></button>
        <button className="px-2 py-1 border border-white rounded-4xl mx-1 cursor-pointer"><i className="fa-solid fa-share-nodes"></i></button>
        <button className="px-2 py-1 border border-white rounded-4xl mx-1 cursor-pointer"><i className="fa-solid fa-download"></i></button>
      </div>
      <div className="py-2 w-3/4 text-justify">
        {details.overview}
      </div>
      <hr className="my-5 text-lg text-gray-300/30"/>
    </div>
  )
};

export default MovieInfo;