//1. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

let input = document.getElementById('specificInput'),
    button = document.getElementById('specificButton')
    ;

button.addEventListener('click', function(e){
	document.body.insertBefore(input.cloneNode(true), document.body.lastElementChild);
});


//2.Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered, 
//при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

let table = document.getElementById('table');

table.addEventListener('click', function(e) {
	table.setAttribute('class', 'bordered');

	table.addEventListener('click', function(e) {
    table.setAttribute('class', 'striped');
});

    table.addEventListener('click', function(e) {
	table.setAttribute('class', 'highlight');
});
});
//странно работает ^^ если убрать третий event то заработает второй, как сделать все три непонятно :\


//3.

//4.Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст.
//Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

//5.Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.

//6.при наведении мыши на картинку, изображение будет заменяться другим изображением.
//При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.

//7.Используя событие onclick реализовать аналог fancybox.
//При клике – картинка увеличивается в размерах и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.