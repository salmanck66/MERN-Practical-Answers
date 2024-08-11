const arr = [1, 2, 3, 4, 5];
const index = 3;

function rotate(array, index) {
  const length = array.length;
  const rotations = index % length;
  console.log(rotations)

  for (let i = 0; i < rotations; i++) {
    let temp = array[0];
    for (let j = 0; j < length - 1; j++) {
      array[j] = array[j + 1];
    }
    array[length - 1] = temp;
  }
  return array;
}


console.log(rotate(arr, index)); 

