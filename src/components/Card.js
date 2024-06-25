import * as React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  const route = "/logement/" + props.id;

  return (
  <div class="card-container">
    <Link to={route} >{props.title}</Link>
  </div>
);
}

export default Card;
