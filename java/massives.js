function getRandomArbitrary(min, max) {
  var randomMassive = [];
  randomMassive.lenght = Math.random() * (max - min) + min;
  return randomMassive;
}


function getRandomArray(len) {
	var randomArray = [];
	randomArray.lenght = len;
	for (var i = 0; i < len; i++) {
		randomArray[i] = Math.random();
	}
	return randomArray;
}

//2 

function getRandomArray(len) {
	var randomArray = [];
	randomArray.lenght = len;
	for (var i = 0; i < len; i++) {
		randomArray[i] = Math.random();
	}
	return randomArray;
	var test = 0 // весь код ниже никогда не выполниться
	for (var i = 0; i < len; i++) {
		test += randomArray[i];
	}
	var test = test / len;
	if (randomArray[i] > test) {
		console.log(randomArray[i]);
	}
}

//3

function compareNumeric(a, b) {
  return a - b;
}

function getRandomArray(len) { // название не соответствует сути
	var randomArray = [];
	randomArray.lenght = len;
	for (var i = 0; i < len; i++) {
		randomArray[i] = Math.random();
	}
	randomArray.sort(compareNumeric);
	return randomArray[0, 1];
}

//4

function getRandomArray(len) {
	var randomArray = [];
	randomArray.lenght = len;
	for (var i = 0; i < len; i++) {
		randomArray[i] = Math.random();
	}
	if (randomArray[i] < 0.3) { // вы не находитесь в цикле, поэтому проверять будете последний элемент
		randomArray[i] = 0; // не выполнено условие задачи
	}
}/*4.1*/

function getRandomArray(len) {
	var randomArray = [];
	randomArray.lenght = len;
	for (var i = 0; i < len; i++) {
		randomArray[i] = Math.random();
	}
	if (randomArray[i] < 0.3) { // тоже самое
		randomArray.splice(i, 1, "0");
	}
}/*4.2*/

//5

