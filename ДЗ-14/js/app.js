function padString(str, length, symbol, padFromRight) {
  // Значение по-умолчанию если аргумент не передали
  if (padFromRight === undefined) {
    padFromRight = true;
  }

  if (typeof str !== "string" || str.length === 0) {
    return "Invalid string";
  }

  if (typeof length !== "number" || Number.isNaN(length) || length < 1) {
    return "Invalid length";
  }

  if (typeof symbol !== "string" || symbol.length !== 1) {
    return "Invalid symbol";
  }

  if (str.length >= length) {
    return str;
  }

  for (let i = str.length; i < length; i++) {
    if (padFromRight) {
      str += symbol;
    } else {
      str = symbol + str;
    }
  }

  return str;
}

let r = padString("hello", 8, "*");
console.log(r);

r = padString("hello", 8, "*", false);
console.log(r);