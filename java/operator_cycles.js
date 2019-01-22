/*задание 1 */


var flat_number = prompt ("введите номер квартиры", "");

if (flat_number > 0 && 20 >= flat_number) {
	console.log("это первый подъезд");
	}
else if (flat_number > 20 && 40 >= flat_number) {
	console.log("это второй подъезд");
	}
else if (flat_number > 40 && 60 >= flat_number) {
	console.log("это третий подъезд");
	}
else if (flat_number > 60 && 80 >= flat_number) {
	console.log("это четвёртый подъезд");
	}
else if (flat_number > 80 && 100 >= flat_number) {
	console.log("это пятый подъезд");
    }
else {
	console.log("в этом доме нет такой квартиры");
}


/* задание 2 */

var carLabel = prompt ("введите марку автомобиля", "");

if (carLabel === "BMW") {
	console.log(carLabel + " cтрана происхождения - Германия");
}
else if (carLabel === "Ford") {
	console.log(carLabel + " cтрана происхождения - Страна");
}
else if (carLabel === "Peugeot") {
	console.log(carLabel + " cтрана происхождения - Франция");
}
else if (carLabel === "Hyundai") {
	console.log(carLabel + " cтрана происхождения - Корея");
}
else if (carLabel === "KIA") {
	console.log(carLabel + " cтрана происхождения - Корея");
}
else if (carLabel === "Mercedes-Benz") {
	console.log(carLabel + " cтрана происхождения - Германия");
}
else {
	console.log(carLabel + " страна происхождения неизвестна");
}


/* задание 3 */

var year = prompt ("введите год", "");

if ((year%4)>0) {
	console.log("это обычный год");
}
else {
console.log("это високосный год");
}

/* задание 4 */

var multiplyTable = prompt ("введите число от 1 до 20", "");
var multiplier = 1;

for (multiplier = 1; multiplier <= 10; multiplier++) {
	console.log(multiplyTable + "x" + multiplier, "=", (multiplyTable*multiplier));
}


/* задание 5 */

var odd = 1;
var result = 0;
var divident = odd % 2;

for (odd = 1; odd < 50; odd = odd + 2) {
    if(divident => 1) {
    console.log (result + odd);
    result += odd;
    }
    else {
    break;
    }
}


/* задание 6 */


/* задание 7 */

var hashtag = "#";
var space = " ";
var i = 1;
var evenString = hashtag + space + hashtag + space + hashtag + space + hashtag;
var oddString = space + hashtag + space + hashtag + space + hashtag + space + hashtag;

for (i = 1; i < 9; i++) {
    var divident = i % 2;
    if(divident > 0) {
    console.log(oddString);
    }
    else if(divident < 1) {
    console.log(evenString);
    }
}