/**Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized. */
function capitalizeWords(arr) {
  //let newArray = [];

  function helper(index) {
    if(index < arr.length) {
        arr[index] = arr[index].toUpperCase();
        helper(index + 1);
    }
  }

  helper(0);

  return arr;

}

console.log(capitalizeWords(['i', 'am', 'learning', 'dsa']))