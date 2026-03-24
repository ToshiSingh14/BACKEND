function removeDuplicates(arr) {
    let seen = {};
    let result = [];

    for (let item of arr) {
        if (!seen[item]) {
            seen[item] = true;
            result.push(item);
        }
    }

    return result;
}

let arr = [1, 2, 2, 3, 1];
console.log(removeDuplicates(arr)); 