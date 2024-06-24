import * as React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
  <div class="card-container">

    <Link to="/test">{props.title}</Link>
  </div>
);
}

export default Card;
