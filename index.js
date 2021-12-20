function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++){
      if (word[i] !== word[word.length - 1 - i]) {
        return false
      }
    }
    return true
}

/* 
  iterate over string from the first letter to the middle letter
  compare each letter to the corresponding letter at the end of the string
    if any letters don't match, return false
  if we reach the middle and all letter match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
