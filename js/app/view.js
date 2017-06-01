function View (_model) {
	var container = document.getElementById('root'),
		button = document.createElement('btn'),
		model = _model;

	this.addFondation = function () {
		container.innerHTML = templater.basicFrame;
	};

	function fillToDos () {
		
		
		return this;
	}

	function createNewToDo () {
		model.getToDos.forEach(function (todo) {
			templater.toDoItem.replace('{{ todo }}', model.getToDos);
		});

		return this;
		console.log(model.getToDos());
	}

	this.render = function () {
		model.getTodos();
	};

	return this;
}