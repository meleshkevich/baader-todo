/*Please include index.js in HTML code for using this.*/
//add class hidden
// TODO: uncomment hidden class!!!
const taskDisplayDiv = document.getElementById("taskDisplayDiv");
const titleSpan = document.getElementById("titleSpan");
const descrSpan = document.getElementById("descrSpan");
const prioritySpan = document.getElementById("prioritySpan");
const taskLabel = document.getElementById("taskLabel");
const toDosList = document.getElementById("toDosList");
const noTaskSpan = document.getElementById("noTaskSpan");

const btn = document
  .getElementById("btn")
  .addEventListener("click", () => getData());

taskDisplayDiv.setAttribute("class", "hidden");
taskLabel.setAttribute("class", "hidden");

window.onload = init();

function ToDoConstructor() {
  this.toDoList = [];
  this.addThisTask = function (params) {
    // This function should get title, description and priority and add a new object in the toDoList with these details and one unique id, generated here.
    this.task = {
      title: params.title,
      description: params.description,
      priority: params.priority,
      id: params.id,
    };

    this.toDoList.push(this.task);
  };
  this.removetask = function (id) {
    // This function accepts id of a task to be removed from toDoList
    const newArr = this.toDoList.filter((toDo) => toDo.id != id);
    const removeItem = document.getElementById(id);
    removeItem.remove();
    this.toDoList = newArr;
  };

  this.gettask = function (id) {
    // This function accepts id of a task and returns the task item object, given its id
    const selectedTask = this.toDoList.filter((toDo) => toDo.id == id);
    return selectedTask[0];
  };
}

function init() {
  var taskAppObj = new ToDoConstructor();
  // Initialize all the objects that you may need later
  window.toDoList = taskAppObj.toDoList;
  window.addThisTask = taskAppObj.addThisTask;
  window.removetask = taskAppObj.removetask;
  window.gettask = taskAppObj.gettask;
}

function clearVars() {
  var taskAppObj = null;
  // Reset all the objects initialized in init() here
}

const getData = () => {
  let titleValue = document.getElementById("titleInput").value;
  let descriptionValue = document.getElementById("descrTextField").value;
  let priorityValue = document.getElementById("prioritySelect").value;
  const idValue = Date.now();
  const params = {
    title: titleValue,
    description: descriptionValue,
    priority: priorityValue,
    id: idValue,
  };

  addThisTask(params);
  const newItem = toDosList.appendChild(document.createElement("li"));
  newItem.setAttribute("id", idValue);
  newItem.innerHTML = `${titleValue}`;
  const xSpan = newItem.appendChild(document.createElement("span"));
  xSpan.setAttribute("class", "removeTask");
  xSpan.innerHTML = " x";
  xSpan.addEventListener("click", () => removetask(idValue));
  noTaskSpan.setAttribute("class", "hidden");
  taskLabel.setAttribute("class", "");
};

const showDetails = (e) => {
  const selectedTask = gettask(e.target.id);
  console.log(selectedTask, "selectedTask");

  taskDisplayDiv.setAttribute("class", "");
  for (const div of taskDisplayDiv.children) {
    div.setAttribute(
      "style",
      "display: flex; align-items: center; gap: 0.5em;"
    );
  }

  titleSpan.innerText = ` ${selectedTask.title}`;
  descrSpan.innerText = ` ${selectedTask.description}`;
  prioritySpan.innerText = ` ${selectedTask.priority} `;
};
//As the page loads, call init, as it unloads, call clearVars
