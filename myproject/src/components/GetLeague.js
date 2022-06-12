import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import GetScores from "./GetScorers";

function GetLeague() {
  const [team, setTeam] = useState([]);
  const [areas, setAreas] = useState([]);
  const [standings, setStandings] = useState([]);
  const location = useLocation();
  const data = location.state;
  const [state, setState] = useState({content: ''}); 

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  useEffect(() => {   
    /*axios
      .get(
        "http://api.football-data.org/v2/competitions/" + data + "/teams",
        config
      )
      .then((res) => {
        const team = res.data.teams;
        setTeam(team);
      });

      axios
      .get(
        "https://api.football-data.org/v2/competitions/" + data + "/scorers",
        config
      )
      .then((res) => {
        const areas = res.data.scorers;
        setAreas(areas);
      });
      axios
      .get("https://api.football-data.org/v2/competitions/" + data + "/standings", config)
      .then((res) => {
        const standings = res.data.standings[0].table;
        setStandings(standings);
      });*/
      setState({content:""})
  }, [data]);

/*<div className="card" key={team.id}>
        <div className="clubname">{team.name}</div>
        <div className="clubpicture">
          <img src={team.crestUrl} width="150px" height="150px"></img>
        </div>
      </div>
      
      
      <Button variant="contained" color="primary" onClick={getScorers}>
        Top Scorer
      </Button>
      
      */

  const getTeams = () => {    
    setState({content: team.map(team => <p>{team.name}</p>)})        
  };

  const getScorers = () => { 
    setState({content: <GetScores data={data}></GetScores>})        
  };

  const getStandings = () => { 
    setState({content: standings.map(standings => <p>{standings.team.name}</p>)})        
};

  return (
    <div>
      <NavBar></NavBar>
      <Button variant="contained" color="primary" onClick={getStandings}>
        Standings
      </Button>
      <Button variant="contained" color="secondary" onClick={getTeams}>
        Teams
      </Button>
      <Button variant="contained" color="primary" onClick={getScorers}>
        Top Scorer
      </Button>
      <div>{state.content}</div>
    </div>
  );
}

export default GetLeague;