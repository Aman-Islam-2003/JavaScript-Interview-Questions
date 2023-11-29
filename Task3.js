// Reverse Words in a String
// Write a function reverseWords that takes a string as an input and returns the same string with each word reversed, while maintaining the order of the words in the original string.

let string1 = "Hello World";

const reverseWords = (str)=>{
    //Split the string into an array of words
   let characters = str.split(' ');
   console.log(characters);

   const reversedWords = characters.map((ch)=>{
    return (ch.split('').reverse().join());
   });
   const reversedString = reversedWords.join(' ');
   //console.log(reversedString);
   return reversedString
}


//reverseWords(string1); // Output: "olleH dlroW"
console.log(reverseWords("The quick brown fox")); // Output: "ehT kciuq nworb xof"

// Words are separated by a single space.
// You can assume that the input string does not have leading or trailing spaces.
// The function should handle consecutive spaces between words gracefully.
