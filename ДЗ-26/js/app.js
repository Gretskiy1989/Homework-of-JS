function getRandomInt(max = 100) {
    return Math.floor(Math.random() * max);
}

function closure() {
    let arr = [];
    let counter = 0;

    function innerFunc() {
        if(arr.length === 100) return {arr, counter};
        ++counter;

        const randomInt = getRandomInt;

        if(arr.includes(randomInt)) {
            return innerFunc();
        }
        arr.push(randomInt);

        return {
            num: randomInt,
            arr,
            counter
        };
    }
    return innerFunc;
}

let cl = closure();

for(let i = 1; i <= 100; i++) {
    console.log(cl());
}