let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      },
    },
  },
};

function deepFreeze(obj) {
  
  let propNames = Object.getOwnPropertyNames(obj);
  
  propNames.forEach(function (name) {
    let prop = obj[name];
    
    if (typeof prop === "object" && prop !== null) deepFreeze(prop);
  });

  return Object.freeze(obj);
}


deepFreeze(user);

//Проверка объекта
user.test = "test";

console.log(user.test); // если объект "заморожен", то получаем undefined

console.log(Object.isFrozen(user));
console.log(Object.isFrozen(user.data));
console.log(Object.isFrozen(user.data.www));
