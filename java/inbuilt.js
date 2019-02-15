function getRandomArbitrary(min, max, len) {
  var randomArr = [];
  randomArr.length = len;
  for (var i = 0; i < len; i++) {
	randomArr[i] = (Math.random() * (max - min) + min);
}
  var arrayObject = [];
	for (var i = 0; i < len; i++) {
		arrayObject[i] = { 
			initial: randomArr[i].toFixed(0),
			sqrt: Math.sqrt(randomArr[i]).toFixed(0),
			floor: Math.floor(randomArr[i]) == Math.round(randomArr[i]),
			ceil: Math.ceil(randomArr[i]) == Math.round(randomArr[i])
		}
	}
	return arrayObject;
}