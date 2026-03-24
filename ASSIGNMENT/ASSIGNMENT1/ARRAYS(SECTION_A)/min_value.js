let arr = [3, 5, 1, 0, 4];

const minValue = arr =>
    arr.reduce((min, v) => v < min ? v : min, Infinity);

console.log(minValue(arr)); 