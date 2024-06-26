import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const data = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = (increment) => {
    if (increment > 0) {
      if (currentIndex === data.length - 1) {
        return setCurrentIndex(0);
      }
    }else if(increment < 0){
        if(currentIndex === 0){
            return setCurrentIndex(data.length - 1);
        }
    }

    return setCurrentIndex(currentIndex + increment);
  };

  const btnPlus = (e) => {
    carouselInfiniteScroll(1);
  };

  const btnMinus = (e) => {
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
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            />
          );
        })}
      </div>
      <button onClick={btnPlus}>Next</button>      
      <button onClick={btnMinus}>Prev</button>
    </>
  );
};

export default Carousel;
