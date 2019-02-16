// task 1

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

// task 3

function palyndrom(text) {
	let half = "",
	otherHalf = ""
	;
	for (var i = 0; i < text.length; i++) {
		half += text[i];
		otherHalf += text[text.length-(i+1)];
	}
	return half == otherHalf;
}

// task 4

function mostCommonLetter(text) {
	let emptyString = "";

	for (var i = 0; i < text.length; i++) {
		emptyString.indexOf(text[i]);
	}
}


// task 5

function textReplacer(str, search, replace) {
	var array = [];
	for (var i = 0; i < str.length; i++) {
		var numbers = str.indexOf(search, str[i]);

		for (var i = 0; i < str.length; i++) {
			array[i] = numbers;
		}
	}
}