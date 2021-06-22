//task#1

let x = 15;
let y = 8;
alert( (x > y) ? "x больше, чем y" : "x не больше, чем y" );

//task#2

let someNumber = prompt('Введите число');

(someNumber % 2 == 0) ? alert( "Число " + someNumber + " четное" ) : alert( "Число " + someNumber + " нечетное" );

 


//task#3

let num = +prompt('Введите число');

switch (true) {
  case num == 0:
    alert("Число " + num + " нoль");
    break;

  case num > 0 && num < 10:
    alert("Число " + num + " однозначное положительное");
    break;

  case num >= 10 && num < 100:
    alert("Число " + num + " двухзначное положительное");
    break;

  case num >= 100:
    alert("Число " + num + " трехзначное положительное и более");
    break;

  case num < 0 && num > -10:
    alert("Число " + num + " однозначное отрицательное");
    break;

  case num <= -10 && num > -100:
    alert("Число " + num + " двухзначное отрицательное");
    break;
default:
    alert( "Число " + num + " трехзначное отрицательное и более" );
} 
  

//task#4

let a = +prompt('Введите число а');
let b = +prompt('Введите число b');
let c = +prompt('Введите число c');
  
switch (true) {
  case a >= b && a >= c:
    alert( "Максимальное число " + a );
    break;
  case b >= a && b >= c:
    alert( "Максимальное число " + b );
  default:
    alert( "Максимальное число " + c );
}


//task#5

let side1 = +prompt('Введите длину стороны "а" предполагаемого треугольника', '');
let side2 = +prompt('Введите длину стороны "b" предполагаемого треугольника', '');
let side3 = +prompt('Введите длину стороны "c" предполагаемого треугольника', '');

let result = (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) ? alert('Треугольник существует!') : alert('При данных условиях треугольник не может существовать!')
 
