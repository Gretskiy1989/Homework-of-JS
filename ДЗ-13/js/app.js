function loopPow(arg1, arg2) {
  let res = 1;
  if(arg1==1 || arg2 == 0) return res;
  if(arg2==1) return arg1;
  while (arg2 > 0) {
      res *= arg1;
      arg2--;
  }
  return res;
}

let arg1  = +prompt('Введите число');
let arg2 = +prompt('В какую степень Вы хотели бы возвести число введённое выше? Введите число');

if (arg2 < 1) {
  alert(`Степень ${arg2} не поддерживается, используйте натуральное число`);
} else {
  alert('Ваш результат: ' + loopPow(arg1, arg2));
}