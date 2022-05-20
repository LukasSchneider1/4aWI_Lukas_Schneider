import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css"

function GetBundesliga() {
  const [bulliTeam, setBulliTeam] = useState([]);

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {
    axios
      .get("http://api.football-data.org/v2/competitions/2002/teams", config)
      .then((res) => {
        const bulliTeam = res.data.teams;
        setBulliTeam(bulliTeam);
      });
  }, []);

  return (
    <div>
      <NavBar></NavBar>      
        {bulliTeam.map((team) => (
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

export default GetBundesliga;