import * as React from 'react';

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import PageNotFound from './PageNotFound';
import Accueil from './Acceuil';
import Logement from './Logement';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/logement/:id",
      element: <Logement />,
    },
    {
      path: "/404",
      element: <PageNotFound />,
    },{
      path: "*",
      element: <Navigate replace={true} to="/404" />,
    }
]);

function BrowserRouter(){
  return (
    <RouterProvider router={router} />
  )
}

export default BrowserRouter;