//1.  Дан элемент #elem. Добавьте ему класс "www".

let elem = document.getElementById('elem');

elem.setAttribute('class', "www");

//2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

if (elem.className == "www") {
	elem.className = undefined;
}

//3. Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу. 
//Поиск идет в теге body

function recursiveSearchTags(document, tagName) {
	let elemArray = [];
		elemArray += document.getElementsByTagName('tagName');
}

//4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.

let list = document.getElementsByTagName('ul'),
    array = []
    ;

for (var i = 0; i < array.length; i++) {
    	var listItem = document.createElement('li');
    	listItem.innerHTML = array[i];
    	if (i%2 == 0) {listItem.setAttribute(background-colour, 'red')}
    	list.appendChild(listItem);
    }    



//5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let sibling = document.getElementById("elem");

sibling.previousSibling.innerHTML += '!'

//6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф


//7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.
//В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter