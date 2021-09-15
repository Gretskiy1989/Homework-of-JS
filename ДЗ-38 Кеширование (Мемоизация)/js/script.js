"use strict";

// Функция memoizer функция используется для хранения кэша, который индексируется входными параметрами функции. Если нужные аргументы в кэше – кэшированное значение возвращается. В противном случае функция выполняется и вновь вычисленное значение добавляется в кэш.

const cache = new Map();

function memoizer(user) {
  
  if (!cache.has(user)) {
    console.log(`=> Write: "${user}" in cache`);
    
    if (cache.size >= 10) cache.delete(Array.from(cache.keys())[0]);
      cache.set(user, Date.now());
    
    } else {
      console.log(`<= Fetching: "${user}" from cache`);
  }
  return cache.get(user);
}

  let bentley = { name: "Bentley" };
  let mercedes_amg = { name: "Mercedes-AMG" };
  let bugatti = { name: "Bugatti" };
  let lamborghini = { name: "Lamborghini" };
  let rolls_royce = { name: "Rolls-Royce" };
  
  memoizer(bentley);
  memoizer(mercedes_amg);
  memoizer(bugatti);
  memoizer(lamborghini);
  memoizer(rolls_royce);
  memoizer(bentley);
  memoizer(lamborghini);
  memoizer(mercedes_amg);
  memoizer(bugatti);
  memoizer(rolls_royce);
  memoizer(bentley);
  memoizer(mercedes_amg);
  memoizer(lamborghini);
  memoizer(bugatti);
  
  console.log(cache);


