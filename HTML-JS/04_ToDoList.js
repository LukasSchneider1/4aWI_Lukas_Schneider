

const task = []

printTaskList();

function getTask(){
    let html = "";
    let index = 0;
    task.forEach(element => {
        let checked = ""
        if(element.isDone){
            checked = "checked"
        }
        html += "<li>"+ element.aufgabe + " - " + element.responsible + " " + "<input name='checkbox' onclick='markTask(this)' data-index='" + index + "' type='checkbox'" + checked + "/></li>"
        index++
    });
    return html
}

function markTask(element){
    let index = element.attributes["data-index"].value
    let checked = element.checked

    task[index].isDone = checked;

    printTaskList()
}

function printTaskList(){
    document.getElementById("TaskList").innerHTML = getTask();
}

let aufgabe = ""

document.getElementById("addTask").addEventListener("click", function(){
    aufgabe = document.getElementById("aufgabe").value
    zuständig = document.getElementById("responsible").value
    
    var task1 = {aufgabe: aufgabe, isDone: false, responsible: zuständig}
    task.push(task1)
    printTaskList()
})

