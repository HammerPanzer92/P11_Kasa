import * as React from 'react';
import Banner from './banner';
import Gallery from './Gallery';

function Accueil(){

    const listeLogements = require("../data/logements.json");

    return(
        <main id="accueil">
            <Banner src="/logo_kasa.png" text="Chez vous, partout et ailleurs" alt="Banniére"/>
            <Gallery liste={listeLogements} />
        </main>
    )
}

export default Accueil;