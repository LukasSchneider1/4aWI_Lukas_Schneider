import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./TeamCard.css";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

function GetLeague() {
  const [team, setTeam] = useState([]);
  const location = useLocation();
  const data = location.state;
  const [state, setState] = useState({content: ''}); 

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };

  const fetchData = () => {
    axios
      .get(
        "http://api.football-data.org/v2/competitions/" + data + "/teams",
        config
      )
      .then((res) => {
        const team = res.data.teams;
        setTeam(team);
      });
<<<<<<< HEAD
  };

  useEffect(() => {
    fetchData();
=======
      setState({content:""})
>>>>>>> a8548e42807e399677fe13addcf8f5dff13bf699
  }, [data]);

  /*<div className="card" key={team.id}>
        <div className="clubname">{team.name}</div>
        <div className="clubpicture">
          <img src={team.crestUrl} width="150px" height="150px"></img>
        </div>
      </div>*/

<<<<<<< HEAD
  const getTeams = () => {    
      {team.map(item => {
        return <div className="clubname">{item.name}</div>
      })}   
=======
  const getTeams = () => {   
    setState({content: team.map(team => <p>{team.name}</p>)})        
  };

  const getMannschaft = () => {   
    setState({content: team.map(team => <p>{team.id}</p>)})        
>>>>>>> a8548e42807e399677fe13addcf8f5dff13bf699
  };

  return (
    <div>
      <NavBar></NavBar>
<<<<<<< HEAD
      
      <Button variant="contained" color="primary">
        Tabelle
      </Button>
      <Button variant="contained" color="secondary" onClick={getTeams}>
        Mannschaften
=======
      <Button variant="contained" color="primary" onClick={getTeams}>
        Standings
      </Button>
      <Button variant="contained" color="secondary" onClick={getMannschaft}>
        Teams
>>>>>>> a8548e42807e399677fe13addcf8f5dff13bf699
      </Button>
      <Button variant="contained" color="primary">
        Top Scorer
      </Button>
<<<<<<< HEAD
=======
      <div>{state.content}</div>
>>>>>>> a8548e42807e399677fe13addcf8f5dff13bf699
    </div>
  );
}

export default GetLeague;
