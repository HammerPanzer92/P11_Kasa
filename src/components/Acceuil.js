import * as React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";

function Accueil() {
  const listeLogements = require("../data/logements.json");

  return (
    <main id="accueil">
      <Banner
        src="/banner.png"
        text="Chez vous, partout et ailleurs"
        alt="Banniére"
      />
      <Gallery liste={listeLogements} />
    </main>
  );
}

export default Accueil;
