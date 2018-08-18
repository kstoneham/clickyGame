import React from "react";
import "./Matrix.css";

const Matrix = props => (
    <div className="card-sm" key={props.saiyans.id} onClick={() => props.handleClick(props.saiyans.id)}>
      <img className="card-img-top" src={props.saiyans.image} alt="wut hapen" />
    </div>
);
  
  export default Matrix;
  