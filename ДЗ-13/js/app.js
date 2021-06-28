function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
      result *= x;
  }

  return result;
}

let x  = +prompt('Введите число');
let n = +prompt('В какую степень Вы хотели бы возвести число введённое выше? Введите число');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} 
if (typeof n !== "number" || Number.isNaN(n)) {
  alert('Введённое значение не является числом!');
}
else {
  alert('Ваш результат: ' + pow(x, n));
}
