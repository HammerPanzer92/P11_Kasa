import * as React from 'react';

import {
    createBrowserRouter,
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