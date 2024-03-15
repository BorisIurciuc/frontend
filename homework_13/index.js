const formElement = document.getElementById("form");
const listElement = document.getElementById("list");
const clearAllBtnElement = document.getElementById("clear-all");

const tasks = [];

const clearAll = function() {
    while(listElement.hasChildNodes()) {
        listElement.firstChild.remove();
    }
}
function clearInput(event) {
    event.target.inputtask.value = "";
}
function completedTask(taskElement){
    if(taskElement.style.textDecoration === "line-through") {
        taskElement.style.textDecoration = "none";
    } else {
        taskElement.style.textDecoration = "line-through"
    }
}
clearAllBtnElement.addEventListener("click", clearAll);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = {
        nametask: event.target.inputtask.value
    }
    tasks.push(task);

    const liElement = document.createElement("li");
    liElement.innerHTML = `${task.nametask} <button onclick="removeTask(event)">Delete task</button>`;

    const completBtnElement = document.createElement("button");
    completBtnElement.textContent = "Mark as done";
    completBtnElement.classList.add("btn");
    completBtnElement.addEventListener("click", () => {
        completedTask(liElement)
    });
    listElement.append(liElement);
    liElement.append(completBtnElement);
    clearInput(event);
})

function removeTask(event) {
    const liElement = event.target.parentNode;
    liElement.remove();
}
