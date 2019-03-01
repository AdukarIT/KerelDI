'use strict';
// 1. Дана форма, напишите проверку: на правильность заполнения двух текстовых полей:
// имя (id="name") и минут (id="minutes")
// Используйте проверку на оставление поля пустым ("") и правильного формата. заполнения числового поля (isNaN).

let nameValue = document.forms[0].elements.name.value,
    minutesValue = document.forms[0].elements.minutes.value
    ;
document.forms[0].elements[document.getElementsByTagName('input').length - 1].addEventListener('click', function(e){ // записано очень опасно, ну а читать вообще не возможно
if (!(nameValue.search(/.\D/gi)) || !(minutesValue.search(/.\d/g))) {
	e.PreventDefault();}
});

// 2.Создать страницу с текстовым полем и двумя кнопками
//При нажатии одной из них происходит передача данных содержимого текстового поля по электронной почте (action="mailto:address@domen.domen")
//при нажатии другой – происходит очистка текстового поля.

let area = document.getElementById('testArea'),
    send = document.getElementById('send'),
    clear = document.getElementById('clear')
    ;

send.addEventListener('click', function(e){
	send.setAttribute('action', "mailto:address@domen.domen");
});
clear.addEventListener('click', function(e){
	area.value = "";
})


// 5. Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные выражения.

let marker = /функция{0,}/g,
    nodes = document.getElementsByTagName(/[A-Z]/gim); // недурно)
    ;

for (var i = 0; i < nodes.length; i++) {
	var b = nodes[i].innerHTML.search(marker); 
	console.log('b');
}
