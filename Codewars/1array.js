function incrementer(nums) {
    // code goes here
    return nums.map((item, index) => (item + index + 1) > 9 ? ((item + index + 1) % 10) : (item + index + 1))
}

console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]))