function Templater () {
	this.basicFrame = '<div calss="frame">\
				  		<label>type toDo`s<input type="text"><label/>\
				  		<ul> {{ item }} <ul/>\
				  	</div>';

	this.toDoItem = '<li> {{ todo }} <li/>';

	return this;
}