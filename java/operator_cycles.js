/*задание 1 */


var flat_number = prompt ("введите номер квартиры", "");

if (flat_number > 0 && 20 >= flat_number) { // можно и общее решение сделать, подумайте, как вы будете писать код для 1000000 квартир
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

if (carLabel === "BMW") { // такие вещи лучше писать через switch case
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
var multiplier = 1; // это тут не нужно

for (multiplier = 1; multiplier <= 10; multiplier++) { // потому что есть здесь
	console.log(multiplyTable + "x" + multiplier, "=", (multiplyTable*multiplier)); // такие строки лучше разбивать
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
}


/* задание 6 */

var firstFluidValue = 1;
var secondFluidValue = 1;
var i = 0;

console.log(firstFluidValue);
console.log(secondFluidValue);


for (i; i < 15; i++) {
  var divident = i % 2;
  if(divident > 0) {
	console.log(firstFluidValue + secondFluidValue);
	firstFluidValue += secondFluidValue;
	}
  else if(divident < 1) {
    console.log(firstFluidValue + secondFluidValue);
    secondFluidValue += firstFluidValue;
	}
}


/* задание 7 */

var hashtag = "#";
var space = " ";
var i = 1;
var evenString = hashtag + space + hashtag + space + hashtag + space + hashtag;
var oddString = space + hashtag + space + hashtag + space + hashtag + space + hashtag;

for (i = 1; i < 9; i++) {           /* same as i=0;i<8;i++ */ // вы дважды присвоили одинаковое значение в i, а ваш комментарий (ваш?) мне вообще не ясен
    var divident = i % 2;
    if(divident > 0) {
    console.log(oddString);
    }
    else if(divident < 1) {
    console.log(evenString);
    }
}
