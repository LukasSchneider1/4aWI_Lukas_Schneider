let teams = "https://api.football-data.org/v2/competitions/2002/teams";
const team = [];

loadTeams();

function loadTeams1(){  
    fetch(teams, {
        headers:{
            "x-auth-token": "819babcd7902454f930c154272296d78"
        }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {      
      data.teams.forEach(element => {
        html += "<div class='container'><div class='logo'><img src='" + element.crestUrl + "' width='150px' height='150px'></div><div class='team'>" + element.name + "</div><div class='website'><button class='viewWebsite'><a href='"+ element.website +"'>VISIT</a></button><button class='viewWebsite' data-id='" + index + "' onclick='loadTeamDescription(this)'>DETAILS</button></div></div>"
        index++
        team.push(element)
      });
      document.getElementById("wrapper").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}

console.log(team)

function loadTeams(){
  let index = 0
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
        html += "<div class='container'><div class='logo'><img src='" + element.crestUrl + "' width='150px' height='150px'></div><div class='team'>" + element.name + "</div><div class='website'><button class='viewWebsite'><a href='"+ element.website +"'>VISIT</a></button><button class='viewWebsite' data-id='" + index + "' onclick='loadTeamDescription(this)'>DETAILS</button></div></div>"
        index++
        team.push(element)
      });
      document.getElementById("wrapper").innerHTML = html;
    })
    .catch(function (err) {
      console.log(err);
    });
}


function loadTeamDescription(element){
  let index = element.attributes["data-id"].value
  let html ="" 
  console.log(team[index].id)  
    html += "<div class='container'><div class='logo'><img src='" + team[index].crestUrl + "' width='150px' height='150px'><div>" + team[index].name + "</div></div><div class='team'>" + team[index].shortName + "</div><div class='website'>"+ team[index].address +"<button class='viewWebsite' onclick=loadTeams()>BACK</button></div></div>"      
  document.getElementById("wrapper").innerHTML = html;
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
