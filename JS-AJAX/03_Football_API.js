let teams = "https://api.football-data.org/v2/competitions/2002/teams"

loadTeams()

function loadTeams(){
    fetch(teams, {
        headers:{
            "x-auth-token": "819babcd7902454f930c154272296d78"
        }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let html = ""
      data.teams.forEach(element => {
          html += "<li><img src='" + element.crestUrl + "'/>"+ element.name + "</li>";
      });
      document.getElementById("list").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}