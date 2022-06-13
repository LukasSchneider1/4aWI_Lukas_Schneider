import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Standings.css"

function GetTeams(props) {
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
      "http://api.football-data.org/v2/competitions/" + props.data + "/teams",
      config
    )
    .then((res) => {
      const team = res.data.teams;
      setTeam(team);
    });
  }, [data]);

  
  return (
    <div className={"card"}>
     {team.map(team =>  
     <Card sx={{ width: 300, height: 225, justify: "center", textAlign: "center", margin: 1, position: "relative"}}>
     <CardMedia
       component="img"       
       style={{height: 50, width:50, paddingLeft: 125, paddingTop: 20}}       
       alt={team.name}       
       image={team.crestUrl}
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {team.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {team.name}
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" href={team.website} style={{position: "absolute", bottom: 10, left: 125}}>Visit</Button>       
     </CardActions>
   </Card>   
        )}        
    </div>    
  );
}

export default GetTeams;