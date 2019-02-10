// задание 1

function smallestNumber(x, y, z) {
	x = prompt("", "");
	y = prompt("", "");
	z = prompt("", "");
	if (x > y && y > z) {console.log(z);}
	if (x > z && z > y) {console.log(y);}
	else {console.log(x);}                  // same as (z > x && y > x)
}

// задание 2

function toSecondsConverter(day, hour, minute) {
	day = prompt("введите количество суток", "или не вводите");
	hour = prompt("введите количество часов", "или не вводите");
	minute = prompt("введите количество минут", "или не вводите");
	const fromDay = day * 86400;
	const fromHour = hour * 3600;
	const fromMinute = minute * 60;
	if (day > 0) {console.log(fromDay);}
	if (hour > 0) {console.log(fromHour);}
	if (minute > 0) {console.log(fromMinute);}
}

// task 3

function factorial(x) {
		return (x!=1) ? x * factorial( x - 1) : 1; // на проверке скобки не обязательны
}

// task 4

function reverser(firstChar, secondChar, thirdChar, fourthChar) { // зачем нужна эта функция? и что это за аргументы
	var firstChar = prompt("введите число до 10 тысяч по цифрам", "первая"), 
	secondChar = prompt("введите число до 10 тысяч по цифрам", "вторая"), 
	thirdChar = prompt("введите число до 10 тысяч по цифрам", "третяя"), 
	fourthChar = prompt("введите число до 10 тысяч по цифрам", "четвёртая");
	return fourthChar + thirdChar + secondChar + firstChar;
}

function	reverter(number) {
	if (number > 10) {
		return (number % 10 + reverter((number - (number % 10)) / 10));	
	} 
	else {
		return String(number); 
	} 
} 


//task 5

function squareRoots(a, b, c) {
	var a = prompt("введите три числа для подсчёта квадратных корней", "число 1");
	var b = prompt("", "число 2");
	var c = prompt("", "число 3");
	if (a => 0 && b => 0 && c => 0) { return 3; }
	else if (a < 0 || b < 0 || c < 0) { return 1; }
	else if (a < 0 && b < 0 && c < 0) { return 1; }
	else { return 2; }
}
