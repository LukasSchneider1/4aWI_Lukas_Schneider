import React, { Component } from "react";
import "./NavBar.css";
import {Route, Link, NavLink} from 'react-router-dom'
import GetBundesliga from "./GetBundesliga";

function NavBar() {
  return (
    <div className="navBar">
      <a href="/">Home</a>
      <a href="/Players">Player</a>
      <div className="dropdown">
        <button className="dropbtn">
          Leagues          
        </button>
        <div className="dropdown-content">        
          <a href="/GetPremierLeague">Premier League</a>
          <a href="/GetLigueA">Ligue 1</a>
          <a href="/GetBundesliga">Bundesliga</a>               
        </div>
      </div>
    </div>
  );
}

export default NavBar;
