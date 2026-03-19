const arr = [10, 20, 30, 40];
let sum =0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}  
console.log(sum);

sum2 = 0; 

for (const element of arr) {
    sum2+= element;
}
console.log(sum2);