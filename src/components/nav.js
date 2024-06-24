import * as React from "react";
import Linknav from "./Linknav";

function Nav() {


  return (
    <nav>
      <div>
        <img src="/logo_kasa.png" alt="logo de Kasa"></img>
      </div>
      <div>
        <Linknav to="/" name="Acceuil" />
        <a>A Propos</a>
      </div>
    </nav>
  );
}

export default Nav;
