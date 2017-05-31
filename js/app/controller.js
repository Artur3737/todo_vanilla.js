function Controller () {
	var model = new Model(),
		view = new View(model);

	// start();

	// function start () {
	// 	mediator.sub('addStructure', view.addFondation());
	// }

	return this;
}