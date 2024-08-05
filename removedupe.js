function removeDuplicates(arr) {
  return [...new Set(arr)];
}



function removeDuplicatesNI(arr) {
  let newArr = [];
  let dupe = {};

  for (i = 0; i < arr.length; i++) {
    if(!dupe[arr[i]])
    {
        dupe[arr[i]] = true
        newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log([1,1,13,3,2,2,3,2].includes(1))
console.log(removeDuplicatesNI([1, 2, 21, 1, 1, 3, 41, 2, 4, 3, 1, 2]));