(function () {
    let str = prompt ('Введите любое натуральное число', ''); 
    
    if (isNaN (str)) {
        alert ('Вы ввели не число'); 
        return;
    }
    if (parseInt (str) != str || str <= 0) {
        alert ('Вы ввели не натуральное число'); 
        return;
    }
 
    var j = 0, le = str.length - 1, pal = true;
    
    while (j <= le - j) {pal = pal && (str.charAt (j) == str.charAt (le - j)); j++}
    
    alert ('Введённое число ' + str + (pal ? ' ' : ' не ') + 'является палиндромом');

})();