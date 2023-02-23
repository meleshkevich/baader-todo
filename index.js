/*Please include index.js in HTML code for using this.*/

ToDoConstructor = function(){
	this.toDoList = [];
	this.addThisTask = function(params){
		// This function should get title, description and priority and add a new object in the toDoList with these details and one unique id, generated here.
	}
	this.removetask = function(id){
		// This function accepts id of a task to be removed from toDoList
	}
};

function init(){
	var taskAppObj = new ToDoConstructor();
	// Initialize all the objects that you may need later
}

function clearVars(){
	var taskAppObj = null;
	// Reset all the objects initialized in init() here
}

//As the page loads, call init, as it unloads, call clearVars