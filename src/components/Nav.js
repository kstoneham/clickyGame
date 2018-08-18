import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="container">
    <nav className="navbar ">
      <p>Click each Saiyan only once to power up, or lose it all by repeating clicks!</p>
      <p className="justify-content-end">Power Level: {props.count} </p> 
    </nav>
  </div>
)

export default Nav;