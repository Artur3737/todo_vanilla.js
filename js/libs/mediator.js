function Mediator () {
	var actions = {};

	this.sub = function (chanel, callback) {
		if(!actions[chanel]){
			actions[chanel] = [];
		}
		actions[chanel].push(callback);
	};

	this.pub = function (chanel, data) {
		if(actions[chanel]){
			actions.forEach(function (action){
				action(data);
			});
		}
	};

	return this;
}