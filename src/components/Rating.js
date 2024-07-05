import React from "react";

function Rating(props) {
  const score = props.score;

  const stars = [];

  const starsDOM = () => {
    for (let i = 0; i < 5; i++) {
      if (i < score) {
        stars[i] = <div key={i} className="star filled"></div>;
      } else {
        stars[i] = <div key={i} className="star"></div>;
      }
    }

    return stars;
  };


  return <div className="rating">{starsDOM()}</div>;
}

export default Rating;
