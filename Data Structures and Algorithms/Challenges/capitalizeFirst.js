/** Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array. */

function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    function helper(index){
        if(index === arr.length) return;
        arr[index] = arr[index][0].toUpperCase() + arr[index].slice(1);
        helper(index + 1)
    }
    helper(0)

    console.log(arr)
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']