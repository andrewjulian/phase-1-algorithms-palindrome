

function isPalindrome(word) {
  // Write your algorithm here
  var reverseWord = []
  
  for(let i = word.length-1; i>=0; i--){
    reverseWord.push(word[i])
  }
  
  console.log(reverseWord)

  for(let i = 0; i<word.length; i++){
    console.log(word[i], " ", reverseWord[i])
    if(word[i]!= reverseWord[i]){
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
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
