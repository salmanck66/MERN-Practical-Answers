// Input: [3, 7, 1, 2, 8, 4, 5]
// Output: 6

// Input: [1, 2, 3, 5]
// Output: 4
// function miss(inp) {
//   let array = inp.sort((a, b) => a - b);

//   for (let i = 1; i <= array.length; i++) {
//     // console.log(i,array[i-1])
//     if (i != array[i - 1]) {
//       return i;
//     }
//   }
// }

console.log(newMiss([3, 7, 1, 2, 8, 4, 5]));

function newMiss(inp)
{
    let n = inp.length+1
    let actSum = (n*(n+1))/2
    let arraySum = inp.reduce((acc,curr)=>acc+curr,0)
    return actSum-arraySum
}
