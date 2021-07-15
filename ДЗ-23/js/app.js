// task#1 рекурсивная функция, которая находит факториал переданного в нее числа

function getfactorial(num) {
    if (num < 0) { 
        return -1;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return (num * getfactorial(num - 1));
    }    
}

let result = getfactorial(3);

console.log(result); 


// task#2 рекурсивная функция, которая находит и возводит число в степень

function pow(num, degree) {
    
    if (degree === 0) 
      return 1;
    else
      return num * pow(num, degree - 1);
}
  
console.log(pow(2, 6));


// task#3 Рекурсивное суммирование

function sum(a, b) {
    if(b === 0)
       return a;

    return sum(a + 1, b - 1);
}

console.log(sum(8, 2));
  
