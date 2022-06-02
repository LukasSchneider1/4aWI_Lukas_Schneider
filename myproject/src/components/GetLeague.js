import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css";
import { useLocation } from "react-router-dom";

function GetLeague() {
  
  const [team, setTeam] = useState([]);
  const location = useLocation();
  const data = location.state;

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {
    axios
      .get(
        "http://api.football-data.org/v2/competitions/" + data + "/teams",
        config
      )
      .then((res) => {
        const team = res.data.teams;
        setTeam(team);
      });
  }, [data]);

  return (
    <div>
      <NavBar></NavBar>
      {team.map((team) => (
        <div className="card" key={team.id}>
          <div className="clubname">{team.name}</div>
          <div className="clubpicture">
            <img src={team.crestUrl} width="150px" height="150px"></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetLeague;
