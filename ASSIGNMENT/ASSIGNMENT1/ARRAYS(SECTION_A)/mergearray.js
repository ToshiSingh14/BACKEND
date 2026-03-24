function mergeArrays(a, b) {
    let result = [];

    for (let x of a) result.push(x);
    for (let x of b) result.push(x);

    return result;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));