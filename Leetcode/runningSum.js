function runningSum(nums) {
    let arr = [];
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current+=nums[i]
        arr.push(current)
    }
    return arr;
}

console.log(runningSum([1, 2, 3, 4]))