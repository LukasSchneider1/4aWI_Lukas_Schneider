import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css"

function GetPremierLeague() {
  const [premierTeam, setpremierTeam] = useState([]);

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {
    axios
      .get("http://api.football-data.org/v2/competitions/PL/teams", config)
      .then((res) => {
        const premierTeam = res.data.teams;
        setpremierTeam(premierTeam);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>      
        {premierTeam.map((team) => (
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

export default GetPremierLeague;
