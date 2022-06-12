import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeamCard.css";
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

  const getScorers = () => { 
        scorers.map(area => <p>{area.player.name}</p>)        
  };


  return (
    scorers.map(area =>     
    <div className="card" key={area.player.id}>
        <div className="clubname">{area.player.name}</div>
        <div className="clubname">{area.team.name}</div>        
      </div>
        ) 
  );
}

export default GetScores;