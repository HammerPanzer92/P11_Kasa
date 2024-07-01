import * as React from "react";
import { Navigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Tagslist from "./Tagslist";
import Profil from "./Profil";
import Rating from "./Rating";
import InfoLogement from "./InfoLogement";

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
            <Tagslist tags={logement.tags}/>
          </div>
          <div>
            <Profil name={nomPrenom} picture={logement.host.picture}/>
            <Rating score={parseInt(logement.rating)}/>
          </div>
        </div>
        <InfoLogement description={logement.description} equipements={logement.equipments} />
      </main>
    </>
  );
}

export default Logement;
