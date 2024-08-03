//Slice method doesn't mutate the original array but it returns the subset as a new array.
const a = [1,2,3,5,6]

console.log(a.slice(0,2))
console.log(a.slice(2))
console.log(a.slice(-4,-1))

console.log(a)