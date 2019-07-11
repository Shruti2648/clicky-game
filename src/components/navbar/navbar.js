import React from 'react';
import "./navbar.css";

const NavBar = props => {
  return (
    <div className="navbar">
      <div className="score">Score: {props.score}</div>
      <div className="max-score">Max Score: {props.maxScore}</div>
    </div>
  );
};

export default NavBar;