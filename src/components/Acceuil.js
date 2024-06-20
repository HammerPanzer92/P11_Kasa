import * as React from 'react';
import Banner from './banner';
import Gallery from './Gallery';

function Accueil(){


    return(
        <main id="accueil">
            <Banner src="/logo_kasa.png" text="Chez vous, partout et ailleurs" alt="Banniére"/>
        </main>
    )
}

export default Accueil;