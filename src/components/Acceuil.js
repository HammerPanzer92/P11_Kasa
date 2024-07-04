import * as React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Nav from "./Nav";

function Accueil() {
  const listeLogements = require("../data/logements.json");

  return (
    <>
      <Nav />
      <main id="accueil">
        <Banner
          src="/banner.png"
          text="Chez vous, partout et ailleurs"
          alt="Banniére"
        />
        <Gallery liste={listeLogements} />
      </main>
    </>
  );
}

export default Accueil;
