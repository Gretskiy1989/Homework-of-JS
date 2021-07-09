// task#1
    arr1 = ['1','2','3'];
    arr2 = ['4','5','6'];
    let c = arr1.concat(arr2);
    console.log(c);

// task#2
    arr1 = ['1','2','3'];
    arr2 = arr1.reverse();
    console.log(arr2);

// task#3
    arr1 = ['1','2','3'];
    arr1.push('4','5','6');
    console.log(arr1);


// task#4
    arr1 = ['1','2','3'];
    arr1.unshift('4','5','6');
    console.log(arr1);


// task#5
    var arr = ['js', 'css', 'jq'];
    var arr2 = arr.shift();
    console.log(arr2);


// task#6
    var arr = ['js', 'css', 'jq'];
    var arr2 = arr.pop();
    console.log(arr2);

// task#7
    var arr = [1, 2, 3, 4, 5];
    console.log(arr.slice(0,3));

// task#8
    var arr = [1, 2, 3, 4, 5];
    var arr2 = arr.slice(3);
    console.log(arr2);

// task#9
    var arr = [1, 2, 3, 4, 5];
    arr.splice(1,2);
    console.log(arr);

// task#10
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(1, 3);
    console.log(result);

// task#11
    var arr = [1, 2, 3, 4, 5];
    arr.splice(3, 0, 'a','b','c');
    console.log(arr);


// task#12
    var arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a','b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    console.log(arr);


// task#13
    var arr = [3, 4, 1, 2, 7];
    arr.sort();
    console.log(arr);

// task#14
    var arr = [5, 6, 7, 8, 9];
    var sum = 0;
    arr.forEach(function(elem) {
	sum += elem;
    });
    console.log(sum);
    
// task#15
    var arr = [5, 6, 7, 8, 9];
    var newArr = [];
    arr.forEach(function(extent) {
	newArr.push(extent * extent);
    });
    console.log(newArr);

// task#16

var arr = [1, -3, 5, 6, -7, 8, 9, -11];
    
function func(elem) {
    return elem < 0
}
var newArr = arr.filter(func);
console.log(newArr);  

// task#17
    
var arr = [1, -3, 5, 6, -7, 8, 9, -11];
    
function funcOff(elem) {
    return elem % 2 === 0
}
var newArrOne = arr.filter(funcOff);
console.log(newArrOne);  


// task#18
var arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
   
function massive(solid) {
    return solid.length > 5
};
var newMassive = arr.filter(massive);
console.log(newMassive); 


// task#19
var arr = [1, 'string', [3, 4], 5, [6, 7]];
   
function globalFunc(elem) {
    return Array.isArray(elem)
};
var newArrGlobal = arr.filter(globalFunc);
console.log(newArrGlobal);  


// task#20
var arr = [5, -3, 6, -5, 0, -7, 8, 9];
   
function payment(elem) {
    return elem < 0
};
var resultArr = arr.filter(payment);
console.log(resultArr.length);  