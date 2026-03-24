let array = [1, 2, 3];

function reverseArray(arr) {
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray(array)); 