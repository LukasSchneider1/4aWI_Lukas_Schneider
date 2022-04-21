const task = []

printTaskList();

function getTask(){
    let html = "";   
    let index = 0 
    task.forEach(element => {
        html += "<li>"+ element.aufgabe + " - " + element.responsible + " " + "<button id='remove' onclick='removeTask(this)' data-id='" + index + "'>Remove</button></li>"        
    index++
    });
    return html
}

function removeTask(element){  
    let index = element.attributes["data-id"].value                  
    task.splice(index, 1)                              
    printTaskList();
}

function printTaskList(){
    document.getElementById("zuTun").innerHTML = getTask();
}

let aufgabe = ""
let id = 0

document.getElementById("addTask").addEventListener("click", function(){
    aufgabe = document.getElementById("aufgabe").value
    zuständig = document.getElementById("responsible").value
    

    var task1 = {aufgabe: aufgabe, isDone: false, responsible: zuständig}    
    task.push(task1)
    printTaskList()
})

