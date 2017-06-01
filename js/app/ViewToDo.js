function ViewToDo (_model) {
	var model = _model,
		;

	function createToDo () {
		model.getToDos.forEach(function (todo) {
			templater.toDoItem.replace('{{ todo }}', model.getToDos);
		});
		return 
	}


	return this;
}