console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("May the force be with you")); // 5
console.log(findLongestWord("To be or not to be")); // 2

// myans
function findLongestWord(input)
{
    let array = input.split(" ")
    let big = 0
    array.forEach(element => {
        if(element.length > big)
            {
                big = element.length
            } 
    });
    return big
}
//gptans
function findLongestWordGPT(input) {
    let words = input.split(" ");
    let maxLength = 0;
    
    words.forEach(word => {
        maxLength = Math.max(maxLength, word.length);
    });
    
    return maxLength;
}

console.log(findLongestWordGPT("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordGPT("May the force be with you")); // 5
console.log(findLongestWordGPT("To be or not to be")); // 2
