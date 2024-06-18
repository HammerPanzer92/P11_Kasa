import * as React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import PageNotFound from './404';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,      
    },{
      path: "*",
      element: <PageNotFound />,      
    }
]);

function BrowserRouter(){
  return (
    <RouterProvider router={router} />
  )
}

export default BrowserRouter;