import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import "./Standings.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function GetStandings() {
    const [standings, setStandings] = useState([]);
    const location = useLocation();
    const data = location.state;

    const config = {
        headers: {
          "x-auth-token": "819babcd7902454f930c154272296d78",
        },
      };
    
      useEffect(() => {   
        axios
      .get("https://api.football-data.org/v2/competitions/" + data + "/standings", config)
      .then((res) => {
        const standings = res.data.standings[0].table;
        setStandings(standings);
      });
      }, [data]);

    return (   
        <div className="tbl">
                <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr>
                            <th>Teamname</th>
                            <th className="th1">Games</th>
                            <th className="th1">Won</th>
                            <th className="th1">Lost</th>
                            <th className="th1">Draw</th>
                            <th className="th1">Points</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                        {standings.map(standings =>
                        <tr key={standings.team.id}>
                            <td>{standings.team.name}</td>
                            <td className="td1">{standings.playedGames}</td>
                            <td className="td1">{standings.won}</td>
                            <td className="td1">{standings.lost}</td>
                            <td className="td1">{standings.draw}</td>
                            <td className="td1">{standings.points}</td>
                        </tr>
                        )}
                        </tbody>
                    </table>  
                </div>                                                  
            </div>        
     );
}

export default GetStandings;