// 1

function rectangleTriangle(catetA, catetB, hypotenuse) {
	return catetA**2 + catetB**2 == hypotenuse**2;
}  //optimised

// 2

function repeat(str, n) {
	var str = "", // зачем
	    n =  2,  // перезаписывать аргументы?
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

// 4

var grade = 1;

function academicGrading(grade) {
	if (grade == 1 || grade == 2) {
		return "F";
	}
	if (grade == 3) {
		return "C";
	}
	if (grade == 4) {
		return "C+";
	}
	if (grade == 5) {
		return "B-";
	}
	if (grade == 6) {
		return "B";
	}
	if (grade == 7) {
		return "B+";
	}
	if (grade == 8) {
		return "A-";
	}
	if (grade == 9) {
		return "A";
	}
	if (grade == 10) {
		return "A+";
	}
	else {
		return "Нет такой оценки";
	}
}

// 5

/*

var inputZero = prompt("введите ноль", "");
do {
	var inputZero = prompt("введите ноль", "");
}
while (inputZero);

 */

var inputZero = prompt("введите ноль", "");
do {
	prompt("введите ноль", "");
}
while (inputZero); // в каком случае цикл остановиться?

// 6

do {
	var summ = prompt("введите ноль", "");
	summ += prompt("", ""); // что нужно ввести-то?)
}
while (summ < 100);

// 7 

function primeNumber(primeNumberTest) {
	if (primeNumberTest % 2 || primeNumberTest % 4 || primeNumberTest % 6 || primeNumberTest % 8 || primeNumberTest % 5) { // плохо
	    return "это не простое число";
	}
	if (primeNumberTest % 3 || primeNumberTest % 7 || primeNumberTest % 11 || primeNumberTest % 13 || primeNumberTest % 17 || primeNumberTest % 19) { // посмотрите что такое простое число
	    return "простое";
	}
}

// 8

function monthToSeason(month) {
	if (month > 0 && month < 3) { return "зима";}
	if (month > 2 && month < 6) { return "весна";}
	if (month > 5 && month < 9) { return "лето";}
	if (month > 8 && month < 12) { return "осень";}
	if (month == 12) { return "зима";}
	else { return "нет такого месяца";}
}

// 9

for (var i = 97; i > 10; i--) { // условия не верные
	if (i % 10 == 7) {
		console.log(i);
	}
	if (i % 7 == 0) {
		console.log(i);
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

// 11

function getDividers(number, x, y) {
	if (number < x || number > y) return; 
	var dividersCounter = 0;

	for (var i = 1; i < number; i++) {
			if (!(number % i)) {
				console.log(i);
				dividersCounter++;
			}
		}	
		return dividersCounter;	
}

function getDividersForRange(x, y) {
	for (var i = x; i <= y; i++) {
		console.log("this is #" + i)
		console.log(getDividers(i));
	}
}

// 12
/* запись unit = "unit" */
function bytes(size, unit) {
	if (unit == "Кб") {
		return (size * 1000) + " байт";
	}
	if (unit == "Мб") {
		return (size * 1000000) + " байт";
	}
	if (unit == "Гб") {
		return (size * 100000000) + " байт";
	}
}
