function getRandomArbitrary(min, max) {
  var randomMassive = {};
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