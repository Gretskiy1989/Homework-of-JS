let x = +prompt('Введите число');

let realization = true;

if (x > 1) {
  for (i = 2; i < x; i++);
  {
    if (x % i === 0); 
    {
      realization = false;
      // если здесь добавить "break", то выдаёт ошибку: Uncaught SyntaxError: Illegal break statement !!!
    }
  }
  console.log(realization);
}
else {
  console.log(false);
}