const nums = [2, 11, 22, 15, 3, 7];
const target = 9;

function findPair(nums, target) {
  let add = 0;
  let pair = [Math.min(...nums)];
  console.log(pair)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target - (pair[i] ? pair[i] : 0) && nums[i]+pair[0]==target) {
        pair.push(nums[i])
    }
  }
  return pair
}
console.log(findPair(nums, target)); // Output: [0, 1]
