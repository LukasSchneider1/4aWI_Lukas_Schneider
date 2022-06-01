import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

function GetAreas() {
  const [areas, setAreas] = useState([]);

  const config = {
    headers: {
      "x-auth-token": "819babcd7902454f930c154272296d78",
    },
  };
//https://api.football-data.org/v2/competitions/PL/standings
//https://api.football-data.org/v2/competitions/2002/scorers

  useEffect(() => {
    axios
      .get("", config)
      .then((res) => {
        const areas = res.data;
        setAreas(areas);
      });
  }, []);

  return (
      console.log(areas)
  );
}

export default GetAreas;
