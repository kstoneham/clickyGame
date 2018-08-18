import React from "react";

const Winner = props => {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Your power level is so high I can't even sense it!</h1>
          <button className="button" onClick={() => props.resetState()}>Play Again</button>
        </div>
      </div>
    ); 
} 

export default Winner;