import * as React from "react";
import Linknav from "./Linknav";

function Nav() {
  return (
    <header>
      <nav>
        <div>
          <img src="/logo_kasa.png" alt="logo de Kasa"></img>
        </div>
        <div>
          <Linknav to="/" name="Acceuil" />
          <Linknav to="/apropos" name="A propos" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
