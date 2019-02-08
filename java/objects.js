//1

function nameCheck(object, string) {
	var object = {};
	var string = "";
	return ("string" in object);
}

//2

var poorManDinner = {
	name: "quick noodles",
	ingridients: {
		package: 1,
		noodles: 1,
		water: 300"ml"
	},
	portions: 1;
}

function recipe(poorManDinner, people) {
	if (people > 1) {
		for (var i in poorManDinner) {
			return (i * people);
		}
	}
}

//3

let cilinder = {
	radius: x,
	height: y,
	volume: function(x, y){
		return (this.radius * this.height);
	}
}

//4

let penguin = {
	name: "Pen",
	creator: "Anno",
	title: "Evangelion",
	canfly: false,
	sayHello: function() {
		console.log("Hi, I am " + this.name + "from" + this.title + "created by" + this.creator);
	},
	fly: function() {
		console.log(canfly);
	}
}