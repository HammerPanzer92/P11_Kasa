import * as React from "react";
import Nav from "./Nav";

function PageNotFound(){
    return(
        <>
            <Nav />
            <main id="errorNotFound">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a>Retour a la page d'accueil</a>
            </main>
            
        </>
        )
    
}

export default PageNotFound;