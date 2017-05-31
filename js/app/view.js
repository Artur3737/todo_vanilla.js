function View (_model) {
	var container = document.getElementById('root'),
		foundation = document.createElement('div'),
		model = _model;

	this.addFondation = function () {
		container.innerHTML = template.basicFrame;
	};

	this.addFondation();

	// mediator.pub('addStructure', template.basicFrame);

	this.render = function () {

	};

	return this;
}