import * as React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "./Carousel";

function Logement() {
  const params = useParams();
  
  const listeLogements = require("../data/logements.json");

  const logement = listeLogements.find((element) => element.id === params.id);

  console.log(logement);

  return (
    <>
      <Nav />
      <main id="logement">
        <Carousel />
        <div className="logement_profil">
            <div>
                <h1>Nom logement</h1>
                <p>Location, Logement</p>
                <div className="tagslist">
                    <div>
                        <p>Tag</p>
                        <p>Tag 2</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="profil_container">
                    <p>Prénom <br/>Nom</p>
                    <img src="" alt="Photo de profil" />
                </div>
                <div className="rating">
                    <p>Note : mettre SVG étoiles</p>
                </div>
            </div>
        </div>
        <div className="logement_info">

        </div>
      </main>
    </>
  );
}

export default Logement;