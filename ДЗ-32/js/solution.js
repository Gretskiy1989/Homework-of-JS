'use strict';

//Выводим каждый элемент списка в консоль
let liElement = document.querySelectorAll('li');

for (let i of liElement) {
  console.log(i);
}

//Выводим общее кол-во элементов в консоль
console.log('Count <li>: ' + liElement.length);


//Вытягиваем текст из тегов li и записываем текст содержащийся в каждом элементе в массив. (Массив выводим в консоль)
let arrLi = [];
for (let i of liElement) {
  arrLi.push(i.innerHTML);
}
console.log(arrLi);


//Вытягиваем все аттрибуты которые есть в теге ul, перебираем их (for..of) и записываем значение каждого аттрибута в массив (выводим данный массив в консоль). Так-же записываем в отдельный массив каждое имя аттрибута и выводим массив в консоль.

let ulElement = document.querySelector('ul');
let valueAttrArray = []; //значение в атрибутах
let nameAttrArray = []; //имя атрибута
console.log(ulElement);
for (let i of ulElement.attributes) {
  valueAttrArray.push(i.value);
  nameAttrArray.push(i.name);
}
console.log(valueAttrArray); //массив со значениями
console.log(nameAttrArray); //массив с name

//С помощью JS изменяем текст в последнем теге li на — «Привет меня зовут » + имя
ulElement.lastElementChild.innerHTML = 'Привет! Меня зовут Иван';

//Добавляем первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать имя
ulElement.firstElementChild.setAttribute('data-my-name', 'Иван');

//Удаляем у тега ul аттрибут ‘data-dog-tail‘
ulElement.removeAttribute('data-dog-tail');

// -----------------------------------------------------------------
// 2. Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:

let numbersArray = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  let ul = document.createElement('ul'); 
  
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li'); 

    li.textContent = array[i]; 

    if (Array.isArray(array[i])) {
      li.textContent = '';
      li.append(generateList(array[i])); //если получаем массив, то добавляем пустую строку и делаем рекурсию, создавая новый <ul>
    }

    ul.append(li); //добавляем <li> в <ul>
  }
  document.body.append(ul); 
  return ul;
}
generateList(numbersArray);


//3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100

function createTable(row = 10, col = 10) {
  let table = document.createElement('bodyTable');
  document.body.append(table);

  let c = 1;
  for (let i = 0; i < row; i++) {
    let indicators = document.createElement('indicators');
    table.append(indicators);
    for (let j = 0; j < col; j++) {
      let sheet = document.createElement('sheet');
      sheet.style.padding = '10px';
      sheet.style.border = '1px solid black';
      sheet.style.textAlign = 'center';
      sheet.innerHTML = c;
      indicators.append(sheet);
      c++;
    }
  }
}

createTable(1, 100);