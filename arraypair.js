const nums = [2, 11, 22, 15, 3, 6];
const target = 9;

function findPair(nums, target) {
  let pair = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pair.push(nums[i], nums[j]);
        return pair;
      }
    }
  }
  return pair;
}

console.log(findPair(nums, target)); // Output: [3, 6]
