function rectangleTriangle(catetA, catetB, hypotenuse) {
	var catetA = prompt(""),
	catetB = prompt(""),
	hypotenuse = prompt("");
	 if (catetA**2 + catetB**2 == hypotenuse**2) {
	 	return true;
	 }
}

// 2

function repeat(str, n) {
	var str = "",
	    n =  2,
	    result = "";

	for (var i = 1; i < n; i++) {
			if (i < n) {
				result = result + str;
				return result;
			}		
	}
}

// 3

function tablesCounter(pupils, tables) {
	if (pupils % 2) {
		pupils++;
	}
	if (pupils / 2 > tables) {
			return "не хватает парт:" + (((pupils - tables)/2)/2);
		}
	else if (pupils / 2 < tables) {
		    return "лишних парт:" + (tables - pupils / 2);
	}
}

// 10

function getDividers(number) {
	if (number < 2 || number > 20) return; 
	var dividersCounter = 0;

	for (var i = 1; i < number; i++) {
			if (!(number % i)) {
				console.log(i);
				dividersCounter++;
			}
		}	
		return dividersCounter;	
}

function getDividersForRange() {
	for (var i = 2; i <= 20; i++) {
		console.log("this is #" + i)
		console.log(getDividers(i));
	}
}