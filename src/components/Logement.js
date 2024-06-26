import * as React from "react";
import { Navigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "./Carousel";

function Logement() {
  const params = useParams();
  const listeLogements = require("../data/logements.json");

  var logement = null;

  if (params.id) {
    logement = listeLogements.find((element) => element.id === params.id);
  }

  if(!logement){
    return(
      <Navigate to="/404" />
    )
  }
  
  const nomPrenom = logement.host.name;

  return (
    <>
      <Nav />
      <main id="logement">
        <Carousel images={logement.pictures} />
        <div className="logement_profil">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tagslist">
              <div>
                <p>Tag</p>
                <p>Tag 2</p>
              </div>
            </div>
          </div>
          <div>
            <div className="profil_container">
              <p>
                {nomPrenom[0]} <br />
                {nomPrenom[1]}
              </p>
              <img src={logement.host.picture} alt="Photo de profil" />
            </div>
            <div className="rating">
              <p>Note : mettre SVG étoiles</p>
            </div>
          </div>
        </div>
        <div className="logement_info"></div>
      </main>
    </>
  );
}

export default Logement;
