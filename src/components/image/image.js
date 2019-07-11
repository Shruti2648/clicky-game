import React from "react";
import "./image.css";

function Image(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img 
            alt={props.name}
            src={props.image}
            id={props.id}
            onClick={() => props.randomizeImages(props.id)}
        />
    </div>
    </div>
  );
}

export default Image;