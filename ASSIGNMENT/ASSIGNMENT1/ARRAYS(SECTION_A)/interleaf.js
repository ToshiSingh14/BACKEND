function interleave(a, b) {
    let result = [];
    let maxLen = Math.max(a.length, b.length);

    for (let i = 0; i < maxLen; i++) {
        if (i < a.length) result.push(a[i]);
        if (i < b.length) result.push(b[i]);
    }

    return result;
}

console.log(interleave([1,2], [10,20]));
