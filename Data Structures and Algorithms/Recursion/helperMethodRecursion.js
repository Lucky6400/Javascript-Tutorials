/** Collect all the odd values inside of array */

function OddValues(nums){
    let odds = [];

    function helper(value){
        if(value === (nums.length -1)) return false;
        if(nums[value]%2 !== 0){
            odds.push(nums[value]);
        }
        helper(value+1)
    }
    helper(0)
    console.log(odds)
    return odds
}

OddValues([1,2,3,4,5,6,7,8,9,0])