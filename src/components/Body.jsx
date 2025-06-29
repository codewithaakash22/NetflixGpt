import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Browse from './Browse';
import Home from "./Home";
import WatchMovie from "./WatchMovie";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () =>{
  return(
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  );
}

const Body = () => {
const appRouter = createBrowserRouter([
  { 
  path: '/',
  element: <AppLayout/>,
  errorElement: <div>Error Page</div>,
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