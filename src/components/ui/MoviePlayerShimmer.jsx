
const MoviePlayerShimmer = () => {
  return (
    <div className="w-full px-4 md:px-12 pt-10">
      <div className="relative w-full h-56 md:h-[70vh] bg-gray-800 rounded-md overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 opacity-40" />
        <div className="absolute bottom-4 left-4 w-24 h-6 bg-gray-700 rounded-sm" />
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-gray-700 rounded-full" />
      </div>
    </div>
  )
}

export default MoviePlayerShimmer;