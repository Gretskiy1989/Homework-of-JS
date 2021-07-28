const callbacks = {
    incCb: function (arg) {
        let a =  'increase callback ' + arg;
        console.log(a);
        return a;
    },


    decCb: function (arg) {
        let a =  'decrease callback ' + arg;
        console.log(a);
        return a;
    },


    getCb: function (arg) {
        let a =  'get callback ' + arg;
        console.log(a);
        return a;
    }
}


function counter(num = 0, obj) {
    let count = num;
    let increseCounte = 0;
    let decreseCounte = 0;
    let getCounte = 0;


    function increse(num = 1) {
        ++increseCounte;
        return obj?.incCb ? obj.incCb(count += num) : count += num
    }

    function decrese(num = 1) {
        ++decreseCounte;
        return obj?.decCb ? obj.decCb(count -= num) : count -= num
    }

    function get(num = 1) {
        ++getCounte;
        return obj?.getCb ? obj.getCb(count) : count
    }

    function getStatistic() {
        return console.log({
            increse: increseCounte,
            decrese: decreseCounte,
            get: getCounte
        });
    };

    function setToZero() {
        return count = 0;
    }
    
    return {
        increse,
        decrese, 
        get,
        getStatistic,
        setToZero
    }
}

let newCounter = counter(10, callbacks);

newCounter.increse();
newCounter.increse();
newCounter.increse();
newCounter.decrese();
newCounter.get();
newCounter.getStatistic();
newCounter.setToZero();
newCounter.get();