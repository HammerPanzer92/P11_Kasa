import * as React from "react";

function Banner(props) {

  if (props.text) {
    return (
      <div class="banner">
        <img class="shadowed" src={props.src} alt={props.alt} />
        <p>{props.text}</p>
      </div>
    );
  } else {
    return(
        <div class="banner">
            <img src={props.src} alt={props.alt} />
        </div>
    )
  }
}

export default Banner;