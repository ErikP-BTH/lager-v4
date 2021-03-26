var cache = {};

function longComputationTime(number) {
    return number * number;
}

function getData(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i, cache);

        if (!cache.hasOwnProperty(i)) {
            cache[i] = longComputationTime(i);
        }
    }
}

getData(6);
getData(10);

console.log(cache);
