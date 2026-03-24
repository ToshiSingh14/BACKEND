function frequency(arr) {
    return arr.reduce((x, v) => {
        x[v] = (x[v] || 0) + 1;
        return x;
    }, {});
}

console.log(frequency(['a','b','a','c']));
