import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from './browse/Browse';
import Home from "./home/Home";
import WatchMovie from "./movies/WatchMovie";
import ErrorPage from "./layout/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "./AppLayout";

const Body = () => {
const appRouter = createBrowserRouter([
  { 
  path: '/',
  element: <AppLayout/>,
  errorElement: <ErrorPage/>,
  children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/browse',
        element: <ProtectedRoute><Browse/></ProtectedRoute>
      },
      {
        path: '/movie/:movieId',
        element: <ProtectedRoute><WatchMovie/></ProtectedRoute>
      },
    ]
  }
]);

  return (
    <RouterProvider router={appRouter}/>
  )

}

export default Body