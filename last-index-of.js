function lastIndexOf(array, value) {
  if (array.length === 0) {
    return -1;
    // if there’s nothing in the array , return -1
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === value) {
      return i;
      // for each element in the array, starting from the last element
      //   if the current element matches the value
      //      return the index
    }
  }
  // If nothing matches in the array;
  // as the loop has ended without returning anything.
  return -1
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 6, 6, 7], 6))

// // for loop ends and nothing is returned if none of the elements in the array matches
// // we can safely assume that no element matched within the array and just return -1;
// return -1; 
