import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom'

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
          <Link to="/GetLeague" state={"PL"} >Premier League</Link>
          <Link to="/GetLeague" state={'BL1'}  >Bundesliga</Link>  
          <Link to="/GetLeague" state={'FL1'} >Ligue 1</Link>             
        </div>
      </div>
    </div>
  );
}

export default NavBar;
