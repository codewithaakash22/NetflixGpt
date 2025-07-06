import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Browse from './browse/Browse';
import Home from "./home/Home";
import WatchMovie from "./movies/WatchMovie";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ErrorPage from "./layout/ErrorPage";

const AppLayout = () =>{
  return(
      <div>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
  );
}

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
        element: <Browse/>
      },
      {
        path: '/movie/:movieId',
        element: <WatchMovie/>
      },
    ]
  }
]);

  return (
    <RouterProvider router={appRouter}/>
  )

}

export default Body