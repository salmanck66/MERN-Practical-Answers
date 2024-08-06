// Input: "aabcccccaaa"
// Output: "a2b1c5a3"

// Input: "abcdef"
// Output: "abcdef"

function stringComp(arr) {
  let newArr = 1;
  let arrrr = [];
  for (let i = 0; i < arr.length; i++) {


    if (arr[i] == arr[i + 1]) {
      newArr++;
    } else {

      if (newArr > 1) {
        arrrr.push(arr[i],newArr);
        newArr = 1;
      } else {
        arrrr.push(arr[i],newArr);
      }
    }


  }
  return arrrr.join('');
}

console.log(stringComp("aabcccccaaa"));
