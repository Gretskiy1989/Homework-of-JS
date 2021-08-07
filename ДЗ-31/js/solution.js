"use strict";

// выводим каждый элемент списка в консоль:

let elementLi = document.getElementsByTagName("li");

for (let i of elementLi) {
  console.log(i);
}

//Выводим общее кол-во элементов в консоль:

console.log("Count <li>: " + elementLi.length);

//Вытягиваем текст из тегов li и записіваем текст содержащийся в каждом элементе в массив (массив выводим в консоль)

function getArrayLi() {
  let arrLi = [];
  for (let i of elementLi) {
    arrLi.push(i.innerHTML);
  }
  console.log(arrLi);
}
getArrayLi();