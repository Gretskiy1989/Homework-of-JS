let a = 10; (a == 0) ?  alert('Верно!') : alert('Неправильно.'); 

let b = 10; (b > 0) ?  alert('Верно!') : alert('Неправильно.'); 

let c = -10; (c < 0) ?  alert('Верно!') : alert('Неправильно.');

let d = 10; (d >= 0) ?  alert('Верно!') : alert('Неправильно.');

let e = 0; (e <= 0) ?  alert('Верно!') : alert('Неправильно.');

let a1 = 5; (a1 != 0) ?  alert('Верно!') : alert('Неправильно.');

let a2 = '1'; (a == 'test') ?  alert('Верно!') : alert('Неправильно.');

let a3 = '1'; (a3 === '1') ?  alert('Верно!') : alert('Неправильно.');

let a4 = 2; (a4 > 0 && a4 < 5) ?  alert('Верно!') : alert('Неправильно.');

let a10 = 10;
a10 = (a10 === 0 || a10 === 2) ? a10 + 7 : a10 / 10;
alert(a10);

let a11 = 1;
let b11 = 4;
(a11 <= 1 && b11 >= 5) ? alert(a11 + b11) : alert(a11 - b11);

let a12 = 5;
let b12 = 6;
if (a12 > 2 && a12 < 11) {
  alert('Верно! Так держать!)');
}
if (b12 >= 6 && b12 <= 14) {
  alert('Неверно!');
}

let num = 1;
switch (num) {

  case 1:
  var results = alert('зима');
  
  case 2: results = alert('весна');
  
  case 3: results = alert('лето');
  
  case 4: results = alert('осень');
  break;
}