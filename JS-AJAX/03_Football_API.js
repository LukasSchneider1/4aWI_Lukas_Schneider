let teams = "https://api.football-data.org/v2/competitions/2002/teams"

loadTeams();

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
        html += "<div class='container'><div class='logo'><img src='" + element.crestUrl + "' width='150px' height='150px'></div><div class='team'>" + element.name + "</div><div class='website'><button class='viewWebsite'><a href='"+ element.website +"'>VIEW</a></button></div></div>"          
      });
      document.getElementById("wrapper").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function loadSeason(){
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
    
        html += "<li>" + data.competition.code + "</li>";
    
    document.getElementById("list").innerHTML = html;
  })
  .catch(function (err) {
    console.log(err);
  });
}
