import * as React from "react";
import { useLocation, Link } from "react-router-dom";

function Nav() {

  const location = useLocation();

  return (
    <nav>
      <div>
        <img src="/logo_kasa.png" alt="logo de Kasa"></img>
      </div>
      <div>
        <Link to="/">Accueil</Link>
        <a>A Propos</a>
      </div>
    </nav>
  );
}

export default Nav;
