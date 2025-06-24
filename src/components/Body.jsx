import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Browse from './Browse';
import Home from "./Home";


const Body = () => {

  const appRouter = createBrowserRouter([
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/browse',
        element: <Browse/>
      },
]);

  return (
    <RouterProvider router={appRouter}/>
  )

}

export default Body