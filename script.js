document.addEventListener("DOMContentLoaded", function() {

const writeTask = document.querySelector(".inputField")
const button = document.querySelector(".button")

button.addEventListener("click", function(event) {

    addTask();
});

writeTask.addEventListener("keydown", function(event) {
        if (event.key !== "Enter") {
            return;
        }
        addTask();
    })

function addTask() {
    if (writeTask.value.trim() === "") {return;}

    const taskList = document.querySelector("ul")
    const task = document.createElement("li")
    task.innerText = writeTask.value
    taskList.appendChild(task)

    writeTask.value = ""


    task.setAttribute("tabindex", "0")
    task.addEventListener("click", function(event) {
        event.target.classList.toggle("done")
    })
    taskList.addEventListener("keydown", function(event) {
        if (event.key !== "Backspace" && event.key !== "Delete")
            {return;}
        event.target.remove()
    })
    task.addEventListener("dblclick", function(event) {
        event.target.remove()
    })
}
})