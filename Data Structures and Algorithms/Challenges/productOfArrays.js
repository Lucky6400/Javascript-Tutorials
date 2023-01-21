/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(nums) {
    if(nums.length === 0) return 0;
    let product = 1;

    function helper(value) {
        if (value === nums.length) return 0;
        product *= nums[value]
        helper(value + 1)
    }
    helper(0)

    return product;
}

console.log(productOfArray([1,2,3]))