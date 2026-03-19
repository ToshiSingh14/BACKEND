const arr = [10, 20, 30, 40];
let max = arr[0];

for(const ele of arr){
    if(ele>max){
        max = ele;
    }
}
console.log(max);