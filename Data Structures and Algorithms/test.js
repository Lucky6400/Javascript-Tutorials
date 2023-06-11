function majorityElement(nums, target) {
    let obj = {};
    let max = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        obj[nums[i]] = ++obj[nums[i]] || 1;
        console.log(nums[i])

        if (obj[nums[i]] > (n / 2)) {
            max = Math.max(max, nums[i])
        }
    }

    console.log(max)

    return max;
}

majorityElement([3, 2, 3])