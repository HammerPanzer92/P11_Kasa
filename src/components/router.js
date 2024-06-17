import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';

// Création du router (export vers index.js ?)
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,      
    },
]);

function BrowserRouter(){
  return (
    <RouterProvider router={router} />
  )
}

export default BrowserRouter;