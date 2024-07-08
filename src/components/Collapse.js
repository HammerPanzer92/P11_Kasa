import React, { useRef } from "react";

function Collapse(props) {
  const myRef = useRef(null);

  const collapseClick = () => {
    if (myRef) {
      const btn = myRef.current;
      btn.classList.toggle("active");
      var content = btn.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  };

  if (props.map) {
    const contentMap = () =>
      props.content.map((element, index) => {
        return <li key={index}>{element}</li>;
      });

    return (
      <div className="collapsible">
        <button ref={myRef} onClick={collapseClick} type="button">
          {props.title}
        </button>
        <div className="content">
          <ul>{contentMap()}</ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="collapsible">
        <button ref={myRef} onClick={collapseClick} type="button">
          {props.title}
        </button>
        <div className="content">
          <p>{props.content}</p>
        </div>
      </div>
    );
  }
}

export default Collapse;
