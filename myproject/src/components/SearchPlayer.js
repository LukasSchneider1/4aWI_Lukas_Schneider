import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function Players() {
    let playerURL = ""
    const [players, setPlayers] = useState([]);

    const config = {
      headers: {
        "x-auth-token": "819babcd7902454f930c154272296d78",
      },
    };    

    const getPlayer = () => {
        playerURL = ""
        const player = document.getElementById("playerID").value;   
        playerURL += 'http://api.football-data.org/v2/players/' + player            
        console.log(playerURL);    
        
        axios
        .get(playerURL, config)
        .then((res) => {
          const players = res.data;
          setPlayers(players);
        });
    }

    return (               
        <div>  
            <NavBar></NavBar> 
            <div>
            <input id = "playerID" type="Textfield"></input>
            <button onClick={getPlayer}>Search</button> 
            <div>
                {players.name}
            </div>
            </div>           
        </div>
     );
}

export default Players;