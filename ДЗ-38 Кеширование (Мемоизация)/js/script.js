// Функция memoizer функция используется для хранения кэша, который индексируется входными параметрами функции. Если нужные аргументы в кэше – кэшированное значение возвращается. В противном случае функция выполняется и вновь вычисленное значение добавляется в кэш.

const memoizer = (func) => {
  let cache = {}
  return (n) => {
      if (cache[n] != undefined) {
          console.log(`<= Fetching: "${n}" from cache`)
          return cache[n]
      } else {
          console.log(`=> Write: "${n}" in cache`)
          let result = func(n)
          cache[n] = result
          return result
      }
  }
}

// функция, которая требует условной оптимизации нагрузки в виде кеширования данных

const myFunc = (x) => {
  return x
}

const myFuncMem = memoizer(myFunc)

console.log('myFuncMem:', myFuncMem(1000))  // в случае первого вызова функции, данные записываются в "кэш"
console.log('myFuncMem:', myFuncMem(1000))  // все последующие случаи вызовов берём уже из "кэша"
console.log('myFuncMem:', myFuncMem(1000))
console.log('myFuncMem:', myFuncMem(1000))
console.log('myFuncMem:', myFuncMem(500))  // в случае первого вызова функции, данные записываются в "кэш"
console.log('myFuncMem:', myFuncMem(500))  // все последующие случаи вызовов берём уже из "кэша"
console.log('myFuncMem:', myFuncMem(500))
console.log('myFuncMem:', myFuncMem(500))
console.log('myFuncMem:', myFuncMem(500))
console.log('myFuncMem:', myFuncMem('Иван 1989'))  // в случае первого вызова функции, данные записываются в "кэш"
console.log('myFuncMem:', myFuncMem('Иван 1989'))  // все последующие случаи вызовов берём уже из "кэша"
console.log('myFuncMem:', myFuncMem('Иван 1989'))
console.log('myFuncMem:', myFuncMem('Иван 1989'))
console.log('myFuncMem:', myFuncMem('Иван 1989'))