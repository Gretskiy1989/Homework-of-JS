// task#1
var arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + arr[1]);
alert(arr[2] + arr[3]);

// task#2
var arr = [2, 5, 3, 9];
let result = 2 * 5 + 3 * 9;
alert(result);
    
// task#3
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(arr[1][0]);
    
// task#4
var lang = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

alert(lang['js'][0]);
			
// task#5
var arr = [];
var str = '';
for (var i = 0; i < 10; i++) {
str += 'x';
arr.push(str);
}
console.log(arr);
    
// task#6
var arr = [];
var str;
for (var i = 1; i < 10; i++) {
str = '';
for (var j = 1; j <= i; j++) {
str += i;
}
arr.push(str);
}
console.log(arr);
   
// task#7
function arrayFill(a, b) {
    var arr = [];
    for (var i = 0; i < b; i++) {
    arr.push(a);
    }

    return arr;
}
console.log(arrayFill('x', 6));
    
// task#8
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
    break;
    }
}
console.log(i + 1);
    
// task#9
function arrGlobal(a) {
    var b = [];
    for (var i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
    }
    return b;
    }
    console.log(arrGlobal([1, 5, 6, 7]));
   
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

function value(a) {
    var b=0;
    for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++){
    b += a[i][j];
    }
    }
    return b;
    }
    console.log(value([[1, 2, 3], [4, 5], [6]]));


// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

function addition(a) {
    var b = 0;
    for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++){
    for (var k = 0; k < a[i][j].length; k++){
    b += a[i][j][k];
    }
    }
    }
    return b;
}
console.log(addition([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));
   

