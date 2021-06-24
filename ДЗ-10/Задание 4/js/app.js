//task#4

const arr = [1, 2, 3, 4, 5];
let result = 0;

for (let i = 0; i < arr.length - 1; i++) {
  result += arr[i];
}

console.log(result);

//task#5

let arrName = [1, 2, 3, 4, 5];
let num = 0;
for (let i = 0; i < arrName.length; i++) {
num += arrName[i] * arrName[i];
}
console.log(num);