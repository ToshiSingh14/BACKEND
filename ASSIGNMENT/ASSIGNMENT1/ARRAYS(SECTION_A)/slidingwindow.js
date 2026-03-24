function slidingWindowSum(arr, k) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    result.push(sum);

    for (let i = k; i < arr.length; i++) {
        sum += arr[i];
        sum -= arr[i - k];
        result.push(sum);
    }

    return result;
}

console.log(slidingWindowSum([1,2,3,4], 2));
