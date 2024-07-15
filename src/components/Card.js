import * as React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const route = "/logement/" + props.id;

  return (
    <Link to={route}>
      <div
        className="card-container"
        style={{ backgroundImage: `url(${props.cover})` }}
      >
        <div className="card-content">
          <p>{props.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
