function firstNonRepeatingChar(inp) {
    let arr = inp.split("");
    let dupes = {};

    // Count the frequency of each character
    for (let i = 0; i < arr.length; i++) {
        if (dupes[arr[i]]) {
            dupes[arr[i]]++;

        } else {
            dupes[arr[i]] = 1;
        }
    }

    // Find the first non-repeating character
    for (let i = 0; i < arr.length; i++) {
        if (dupes[arr[i]] === 1) {
            return arr[i];
        }
    }
    console.log(dupes)
    return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("hello")); // Output: "h"
console.log(firstNonRepeatingChar("aabb")); // Output: null
