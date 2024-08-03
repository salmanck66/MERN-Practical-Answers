let arr = [3, 7, 1, 2, 6, 4, 5];
let n = 8;
console.log(findMissingNumber(arr, n)); // Output: 6
function findMissingNumber(arr, n) {
    totalShould = n*(n+1)/2
    totalSum = arr.reduce((prev,curr)=>prev+curr)
    return  totalShould - totalSum 
}
