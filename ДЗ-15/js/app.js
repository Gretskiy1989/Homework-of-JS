const arr = [1, 2, 3, -1, -2, -3];

function currentPositiveNumber(arr) {
  
  if (!Array.isArray(arr)) {
    return "Invalid argument";
  }
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result.length === 0 ? null : result;
}

let r = currentPositiveNumber([1, 2, 3, -1, -2, -3]);
console.log(r);

r = currentPositiveNumber([-1, -2, -3]);
console.log(r);