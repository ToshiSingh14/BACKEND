function range(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

console.log(range(3, 6));
