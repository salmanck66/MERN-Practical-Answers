// Input: [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
function rotate(array, k) {
  let firstpart = array.slice(0,k+1)
  let second = array.slice(k+1,array.length)
  return second.concat(firstpart);
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
