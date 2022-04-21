
var Person = [
    {
        "firstname": "Lukas",
        "lastname": "Schneider",
        "image": "https://assets.orf.at/mims/2022/16/42/crops/w=171,q=90,r=1/1315815_1k_470942_fus_bl_runde_27_hartberg_admira_g.jpg?s=8e4b76752d3fe4cff195efb89649e0890d33eb58",
    },
    {
        "firstname": "Lucas",
        "lastname": "Hartmann",
        "image": "https://assets.orf.at/mims/2022/16/42/crops/w=171,q=90,r=1/1315815_1k_470942_fus_bl_runde_27_hartberg_admira_g.jpg?s=8e4b76752d3fe4cff195efb89649e0890d33eb58",
    },
    {
        "firstname": "Robin",
        "lastname": "Grabher",
        "image": "https://assets.orf.at/mims/2022/16/42/crops/w=171,q=90,r=1/1315815_1k_470942_fus_bl_runde_27_hartberg_admira_g.jpg?s=8e4b76752d3fe4cff195efb89649e0890d33eb58",
    }
]


var html = "";

for(i = 0; i < Person.length; i++){

html += "<div class ='first'>";
html += "<ul>";
html += "<li>" + Person[i].firstname + "</li>";
html += "<li>" + Person[i].lastname + "</li>";
html += "<li>" + "<img src=" + Person[i].image + "></img>" + "</li>";
html += "</ul>";
html += "</div>";

}

document.getElementById("container").innerHTML = html;


