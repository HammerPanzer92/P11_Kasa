import * as React from "react";

function Banner(props) {

  if (props.text) {
    return (
      <div className="banner">
        <img className="shadowed" src={props.src} alt={props.alt} />
        <p>{props.text}</p>
      </div>
    );
  } else {
    return(
        <div className="banner">
            <img src={props.src} alt={props.alt} />
        </div>
    )
  }
}

export default Banner;
