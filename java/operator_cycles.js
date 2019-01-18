/*задание 1 */


var flat_number = prompt ("введите номер квартиры", "");

switch (flat_number) {
	case (flat_number > 0 && 20 >= flat_number) :
	console.log("это первый подъезд");
	break;
	case (flat_number > 20 && 40 >= flat_number) :
	console.log("это второй подъезд");
	break;
	case (flat_number > 40 && 60 >= flat_number) :
	console.log("это третий подъезд");
	break;
	case (flat_number > 60 && 80 >= flat_number) :
	console.log("это четвёртый подъезд");
	break;
	case (flat_number > 80 && 100 >= flat_number) :
	console.log("это пятый подъезд");
	break;
	default:
	console.log("в этом доме нет такой квартиры");
}


/* задание 2 */

var carLabel = prompt ("введите марку автомобиля", "");

switch (carLabel) {
	case (carLabel === "BMW") :
	console.log(carLabel + " cтрана происхождения - Германия");
	break;
	case (carLabel === "Ford") :
	console.log(carLabel + " cтрана происхождения - Страна");
	break;
	case (carLabel === "Peugeot") :
	console.log(carLabel + " cтрана происхождения - Франция");
	break;
	case (carLabel === "Hyundai") :
	console.log(carLabel + " cтрана происхождения - Корея");
	break;
	case (carLabel === "KIA") :
	console.log(carLabel + " cтрана происхождения - Корея");
	break;
	case (carLabel === "Mercedes-Benz") :
	console.log(carLabel + " cтрана происхождения - Германия");
	break;
	default:
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
var zero = 0;

for (; odd < 50; odd+2) {
    if((odd%2) => 1)
    continue;
    console.log (zero + odd);
}