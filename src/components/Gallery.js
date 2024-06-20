import * as React from "react";
import Card from "./Card";


function Gallery(props) {

    const cards = props.liste.map((element) => <Card title={element.title} />)

    return(
        <div class="gallery">
            {cards}
        </div>
    )

}

export default Gallery;