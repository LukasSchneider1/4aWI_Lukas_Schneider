import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import GetScores from "./GetScorers";
import GetTeams from "./GetTeams";
import GetStandings from "./GetStandings";
import "./ButtonS.css"

function GetLeague() {
  const location = useLocation();
  const data = location.state;
  const [state, setState] = useState({ content: "" });

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {    
    setState({ content: "" });
  }, [data]);

  const getTeams = () => {
    setState({ content: <GetTeams data={data}></GetTeams> });
  };

  const getScorers = () => {
    setState({ content: <GetScores data={data}></GetScores> });
  };

  const getStandings = () => {
    setState({ content: <GetStandings data={data}></GetStandings>})};

  return (
    <div>
      <NavBar></NavBar>
      <div className="header">
        <button className="buttonS" onClick={getStandings}>Standings</button>
        <button className="buttonS" color="secondary" onClick={getTeams}>Teams</button>
        <button className="buttonS" color="primary" onClick={getScorers}>Top Scorer</button>
      </div>
      <div className="body">{state.content}</div>
    </div>
  );
}

export default GetLeague;
