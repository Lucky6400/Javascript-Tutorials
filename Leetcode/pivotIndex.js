function pivotIndex(nums) {
    let index;
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums.slice(0, i).reduce((acc, curr) => acc + curr, 0)
        let num2 = nums.slice(i+1).reduce((acc, curr) => acc + curr, 0)
        console.log(num1, num2)
        if (num1 === num2) {
            index = i;
            break;
        } else {
            index = -1;
        }
    }
    return index;
}

console.log(pivotIndex([1,2,3,2,1]))