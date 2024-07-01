import React from "react";

function Collapse(props) {
  if (props.map) {
    const contentMap = () =>
      props.content.map((element, index) => {
        return <li key={index}>{element}</li>;
      });

    return (
      <>
        <button type="button" className="collapsible">
          {props.title}
        </button>
        <div className="content">
          <ul>{contentMap()}</ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button type="button" className="collapsible">
          {props.title}
        </button>
        <div className="content">
          <p>{props.content}</p>
        </div>
      </>
    );
  }
}

export default Collapse;
