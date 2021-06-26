let x = +prompt('Введите число');

let realization = true

if (x > 0) {
  for (i = 2; i < x; i++)
  {
    if (x % i === 0) 
    {
      realization = false
    }
  }
  console.log(realization);
}
else {
  console.log(false);
}