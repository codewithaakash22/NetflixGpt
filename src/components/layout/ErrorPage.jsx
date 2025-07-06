import { useRouteError } from "react-router-dom";

const ErrorPage = ()  => {
  const err = useRouteError();
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
 <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Error number */}
        <h1 className="md:text-8xl font-bold text-4xl">
          <span className="text-red-600">{err?.status || "404"}</span>
        </h1>
        
        {/* Error message */}
        <div className="md:space-y-4 px-4 md:px-0">
          <h2 className="md:text-2xl font-semibold">{err?.statusText || "Page Not Found"}</h2>
          <p className="text-gray-400 ">
            {err?.error?.message || "Sorry, we can't find that page. You'll find lots to explore on the home page."}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 md:px-6 md:py-3 rounded font-medium transition-colors"
          ><i className="fa-solid fa-house"></i>
            Netflix Home
          </button>
          
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 md:px-6 md:py-3 rounded font-medium transition-colors"
          ><i className="fa-solid fa-arrows-rotate"></i>
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;