// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function zeroEnd(array) {
  let loc = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    if(array[loc]==0)
    {
        loc--
    }
    if (array[i] == 0) {
      let temp = array[i];
      array[i] = array[loc];
      array[loc] = temp;
      loc--;
    }
  }
  return array;
}
console.log(zeroEnd([1, 0, 6, 0, 65, 5, 6, 5,0]));
