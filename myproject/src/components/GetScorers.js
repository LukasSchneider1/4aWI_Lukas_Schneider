import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function GetScores(props) {
  const [scorers, setScorers] = useState([]);
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
        "https://api.football-data.org/v2/competitions/" + props.data + "/scorers",
        config
      )
      .then((res) => {
        const scorers = res.data.scorers;
        setScorers(scorers);
      });
  }, [data]);

  return (               
    <div className="tbl">
    <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
            <tr>                              
                <th>Player</th>
                <th>Nationality</th>
                <th>Team</th>
                <th>Goals Scored</th>
            </tr>
            </thead>
        </table>
    </div>
    <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
            {scorers.map(scorers =>
            <tr key={scorers.player.id}>              
                <td>{scorers.player.name}</td>                
                <td><div><img src={"https://countryflagsapi.com/png/" + (scorers.player.nationality).replace(/\s+/g, '') + "/"} width="20px" height="20px"></img></div>
                <div>{scorers.player.nationality}</div>
                </td>
                <td>{scorers.team.name}</td>
                <td>{scorers.numberOfGoals}</td>
            </tr>
            )}
            </tbody>
        </table>  
    </div>                                                  
</div>  
      );  
}

export default GetScores;