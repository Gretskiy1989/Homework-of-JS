//task#1

let x = 15;
let y = 8;
alert( (x > y) ? "x больше, чем y" : "x не больше, чем y" );

//task#2

let someNumber = prompt('Введите число');

if (someNumber % 2 == 0) {
  alert( "Число " + someNumber + " четное" );
} else {
  alert( "Число " + someNumber + " нечетное" );
}

//task#3

let num = prompt('Введите число', 0);

if (num == 0) {
  alert( "Число " + num + " нoль" );
} else if (num > 0 && num < 10) {
  alert( "Число " + num + " однозначное положительное" );
} else if (num >= 10 && num < 100) {
  alert( "Число " + num + " двухзначное положительное" );
} else if (num >= 100) {
  alert( "Число " + num + " трехзначное положительное и более" );
} else if (num < 0 && num > -10) {
  alert( "Число " + num + " однозначное отрицательное" );
} else if (num <= -10 && num > -100) {
  alert( "Число " + num + " двухзначное отрицательное" );
} else {
  alert( "Число " + num + " трехзначное отрицательное и более" );
}

//task#4

let a = prompt('Введите число а', '');
let b = prompt('Введите число b', '');
let c = prompt('Введите число c', '');
  
if (a >= b && a >= c) {
  alert( "Максимальное число " + a );
}
else if (b >= a && b >= c) {
  alert( "Максимальное число " + b );
}
else {
  alert( "Максимальное число " + c );
}

//task#5

let side1 = prompt('Введите длину стороны "а" предполагаемого треугольника', '');
let side2 = prompt('Введите длину стороны "b" предполагаемого треугольника', '');
let side3 = prompt('Введите длину стороны "c" предполагаемого треугольника', '');
 
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
alert('Треугольник существует!');
} else {
alert('При данных условиях треугольник не может существовать!');
}