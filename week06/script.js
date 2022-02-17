
window.onload = loadToDoList() {
    if (!localStorage.toDoList){
        var toDoList = {};
    }
}

console.log("Hello");




document.getElementById('add-btn').addEventListener('click', addElement);

function addElement {

    let newtask = document.getElementById('newtask').value;
    
    tasks.apend(newtask)
    // Save
    var tasks = ["1", "2", "3"];
    localStorage["tasks"] = JSON.stringify(tasks);

    // Retrieve
    var stored_datas = JSON.parse(localStorage["tasks"]);
}

