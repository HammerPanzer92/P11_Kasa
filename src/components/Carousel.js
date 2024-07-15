import React, { useState } from "react";

const Carousel = (props) => {
  const data = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = (increment) => {
    if (increment > 0) {
      if (currentIndex === data.length - 1) {
        return setCurrentIndex(0);
      }
    } else if (increment < 0) {
      if (currentIndex === 0) {
        return setCurrentIndex(data.length - 1);
      }
    }

    return setCurrentIndex(currentIndex + increment);
  };

  const btnPlus = () => {
    carouselInfiniteScroll(1);
  };

  const btnMinus = () => {
    carouselInfiniteScroll(-1);
  };

  return (
    <>
      <div className="carousel-container">
        {data.map((item, index) => {
          return (
            <img
              className="carousel-item"
              src={item}
              alt="Logement"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            />
          );
        })}
        {data.length > 1 && (
          <>
            <p className="carousel-compteur">
              {currentIndex + 1} / {data.length}
            </p>
            <div className="nextBtn" onClick={btnPlus}>
              <img src="/arrow.svg" alt="Photo suivante" />
            </div>
            <div className="prevBtn" onClick={btnMinus}>
              <img src="/arrow.svg" alt="Photo précédente" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;
