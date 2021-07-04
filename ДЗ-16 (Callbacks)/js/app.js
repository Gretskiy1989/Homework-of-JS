function pow(a, b) {
  const result = a ** b;
  alert(result);
}

function multiply(a, b) {
  const result = a * b;
  alert(result);
}

function division(a, b) {
  const result = a / b;
  alert(result);
}

function mod(a, b) {
  const result = a % b;
  alert(result);
}

function mainFunction(callback) {
  const a = +prompt("Введите первое число");
  const b = +prompt("Введите второе число");

  if (!Number.isNaN(a) && !Number.isNaN(b) && typeof callback === "function") {
    callback(a, b);
  }
}

mainFunction(pow);
mainFunction(multiply);
mainFunction(division);
mainFunction(mod);
