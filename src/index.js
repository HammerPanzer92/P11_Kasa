import React from "react";
import ReactDOM from "react-dom/client";
import "./style/styles.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Accueil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import PageNotFound from "./components/PageNotFound";
import Logement from "./components/Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Accueil} />
        <Route path="/apropos" Component={Apropos} />
        <Route path="/logement/:id" Component={Logement} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
