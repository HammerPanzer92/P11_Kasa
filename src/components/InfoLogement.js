import React from "react";
import Collapse from "./Collapse";

function InfoLogement(props){

    return (
        <div className="logement_info">
            <Collapse title="Description" content={props.description} />
            <Collapse title="Equipements" content={props.equipements} map={true}/>
        </div>
    )
}

export default InfoLogement;