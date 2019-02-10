//1

function nameCheck(object, string) {
	var object = {}; // зачем переписали
	var string = ""; // аргументы?
	return ("string" in object); // хорошо, но скобки необязательны
}

//2

var poorManDinner = {
	name: "quick noodles",
	ingridients: {
		package: 1,
		noodles: 1,
		water: 300"ml"
	},
	portions: 1; // 1 не больше 1
}

function recipe(poorManDinner, people) {
	if (people > 1) {
		for (var i in poorManDinner) { // что будет с полем name? нужно идти по ingridients верно же
			return (i * people);
		}
	}
}

//3

let cilinder = {
	radius: x,
	height: y,
	volume: function(x, y){ // в задаче нужно объявить объект а после присвоить метод
		return (this.radius * this.height);
	}
}

//4

let penguin = {
	name: "Pen",
	creator: "Anno",
	title: "Evangelion",
	canfly: false,
	sayHello: function() { // аналогично с 3 задачей
		console.log("Hi, I am " + this.name + "from" + this.title + "created by" + this.creator);
	},
	fly: function() {
		console.log(canfly);
	}
}
