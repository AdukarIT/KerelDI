function getRandomArbitrary(min, max) {
  var randomMassive = {};
  randomMassive.lenght = Math.random() * (max - min) + min;
  return randomMassive;
}


function massiveOfRandomNum(len) {
	var randomMassive = {};
	randomMassive.lenght = len;
	for (var i = 0; randomMassive[i] < randomMassive.length; i++) {
		randomMassive[i] = Math.random();
	}
}