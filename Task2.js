// Write a function that takes a string as input and reverses the order of the words. A word is defined as a sequence of non-space characters. The input string may contain leading or trailing spaces, but the reversed string should not.

// Use trim() to remove leading and trailing spaces from the input string.
// Use split(/\s+/) to split the string into an array of words. This regular expression (/\s+/) accounts for multiple consecutive spaces as a delimiter.
// Use reverse() to reverse the order of the array of words.
// Use join(' ') to join the reversed array of words into a string with a space between each word.


function reverseWords(str) {
  // Your code here
 let removeSpaces = str.trim();
  let array = removeSpaces.split(/\s+/); 
  //console.log(array);
 return  array.reverse().join(' ');
}

// Example usage:
const inputString = "   Hello  World   ";
const reversedString = reverseWords(inputString);
console.log(reversedString); // Output should be "World Hello"