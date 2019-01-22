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

function secondsCalculator(day, hour, minute) {
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