function Templater () {
	this.basicFrame = '<div calss="frame">\
				  		<label>type toDo`s <input type="text"></label>\
				  		<button calss="btn">Add_ToDo</button>\
				  		<ul> {{ todoList }} </ul>\
				  	</div>';

	this.toDoItem = '<li> {{ todo }} <li/>';

	return this;
}