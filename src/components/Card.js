import * as React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const route = "/logement/" + props.id;

  return (
    <Link to={route}>
      <div className="card-container"><p>{props.title}</p></div>
    </Link>
  );
}

export default Card;
