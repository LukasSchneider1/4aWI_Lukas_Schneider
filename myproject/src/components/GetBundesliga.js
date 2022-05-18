import React, { useEffect, useState } from "react";
import axios from "axios";

function Bundesliga() {
  const [bulliTeam, setBulliTeam] = useState([]);  

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {
    axios.get('http://api.football-data.org/v2/competitions/2002/teams', config)
      .then(res => {
        const bulliTeam = res.data.teams;
        setBulliTeam(bulliTeam);
      });
    }, []);

  return (
    <div>
        <ul>
      {bulliTeam.map(team => (
        <li>{team.name}<img src={team.crestUrl}></img></li>
      ))}
      </ul>
    </div>
  );
}

export default Bundesliga;
