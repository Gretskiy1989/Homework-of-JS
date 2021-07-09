function getAgeLabel(age) {
    if (typeof age !== "number" || Number.isNaN(age)) {
      return "invalid age";
    }
  
    const lastDigit = age % 10;
    let text = "";
  
    if (age >= 10 && age < 20) {
      text = "лет";
    } else if (lastDigit === 1) {
      text = "год";
    } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
      text = "года";
    } else {
      text = "лет";
    }
  
    return `Вам ${age} ${text}`;
}
  
  
  const age = +prompt("Введите ваш возраст");

  alert(getAgeLabel(age));
