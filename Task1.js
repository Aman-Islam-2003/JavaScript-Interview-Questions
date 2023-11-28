// You are given an array containing n distinct numbers taken from the range 1 to n+1. This means there is one number missing from the range. Write a function to find and return the missing number.


function findMissingNumber(arr) {
  // Your code here
  //totalElementsIncludingMissingValue
  const n = arr.length +1;

  //sum of first n natural numbers
  const expectedSum = n*(n+1)/2;

  //sum of the given array using the reduce method
  const actualSum = arr.reduce((accumulator, element)=>{
      return accumulator+element;
  }, 0)

    return missingValue = expectedSum-actualSum;
}

// Example usage:
const missingNumber = findMissingNumber([3, 7, 1, 2, 8, 4, 5]);
console.log(missingNumber); // Output should be 6
