import * as React from "react";
import Card from "./Card";


function Gallery(props) {

    const cards = props.liste.map((element, index) => <Card key={index} title={element.title} id={element.id}/>)

    return(
        <div className="gallery">
            {cards}
        </div>
    )

}

export default Gallery;