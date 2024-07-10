import * as React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main id="errorNotFound">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retour a la page d'accueil</Link>
    </main>
  );
}

export default PageNotFound;
