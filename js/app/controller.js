function Controller () {
	var model = new Model(),
		view = new View(model);

	start();
	
	function start () {
		view.addFondation();
	};

	return this;
}