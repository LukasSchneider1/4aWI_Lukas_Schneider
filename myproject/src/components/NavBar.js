import React, { Component } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <a href="#home">Home</a>
      <a href="#news">Player</a>
      <div className="dropdown">
        <button className="dropbtn">
          Leagues          
        </button>
        <div className="dropdown-content">        
          <a href="#test">Premier League</a>
          <a href="#test">La Liga</a>
          <a href="Bundesliga">Bundesliga</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
