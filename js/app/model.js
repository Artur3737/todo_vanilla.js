function Model () {
	var todos = ['do something'];

	this.getToDos = function () {
		return todos;
	};

	this.addToDo = function (todo) {
		todos.push(todo);
	};

	this.deleteToDo = function (i) {
		todos.splice(1, i);
	};

	return this;
}