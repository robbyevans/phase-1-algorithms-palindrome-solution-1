function isPalindrome(word) {
  // Write your algorithm here
    // create an array from the input string
    const wordArray = word.split("");
    // reverse the array
    const reversedWordArray = wordArray.reverse();
    // create a string from the reversed array
    const reversedWord = reversedWordArray.join("");
    // return the reversed string
    return (reversedWord===word);
}

/* 
  Add your pseudocode here
*/
//steps
//1*make a function called isPalindrom
//2*make a const called arrayString
//3*slplit our word using .split('') and assign to arraystring
//4*use .reverse () propery to reverse our word
//5*assign the reversed word to a new const called joinedArray
//7*return joinedArray 
//6* compare joinedArray to arrayString using strict equaliy operator

/*
  Add written explanation of your solution here

  // using javascript inbuilt function string.reverse() to change our string to and return itbackwards
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
