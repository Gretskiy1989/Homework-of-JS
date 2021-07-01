function pow(x, n) {
  if (typeof x !== 'number' || isNaN(x)) {
    return `Введённое значение ${x} не является числом!`;
  } 
  if (typeof n !== 'number' || isNaN(n)) {
    return 'Введённое значение не является числом!';
  }
  return x ** n;
}

let x  = +prompt('Введите число');
let n = +prompt('В какую степень Вы хотели бы возвести число введённое выше? Введите число');

alert(pow(x, n))