import React from "react";

function Tagslist(props) {
  const tags = props.tags;

  const tagsDOM = tags.map((tag, index) => <li key={index}>{tag}</li>);


  return (
      <div className="tagslist">
        <ul>{tagsDOM}</ul>
      </div>
  );
}

export default Tagslist;
