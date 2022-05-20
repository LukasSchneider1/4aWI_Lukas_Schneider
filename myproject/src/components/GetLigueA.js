import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css"

function GetLigueA() {
  const [LigueATeam, setLigueATeam] = useState([]);

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {
    axios
      .get("http://api.football-data.org/v2/competitions/FL1/teams", config)
      .then((res) => {
        const LigueATeam = res.data.teams;
        setLigueATeam(LigueATeam);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>      
        {LigueATeam.map((team) => (
          <div className="card">
            <div className="clubname">                
            {team.name}
            </div>
            <div className="clubpicture">
            <img src={team.crestUrl} width="150px" height="150px"></img>  
            </div>                  
          </div>
        ))}      
    </div>
  );
}

export default GetLigueA;
