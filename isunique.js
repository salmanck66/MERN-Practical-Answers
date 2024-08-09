console.log(hasUniqueCharacters("abcdefg")); // true
console.log(hasUniqueCharacters("hello")); // false
console.log(hasUniqueCharacters("123456")); // true
console.log(hasUniqueCharacters("aA")); // true (case-sensitive)

function hasUniqueCharacters(Input) {
  let obj = {};
  for (let index = 0; index < Input.length; index++) {
    if (!obj[Input[index]]) {
      obj[Input[index]] = 1
    }else
    {
        return false
    }
  }
  return true
}
