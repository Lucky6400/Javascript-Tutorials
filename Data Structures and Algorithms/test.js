var subsetsWithDup = function (nums) {
    const map = new Map();
    //  const subsets = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            let subset = nums.slice(i, j);
            let subset2 = [nums[i], nums[j]];
            if (!map.get(JSON.stringify(subset))) {
                //      subsets.push(subset);
                map.set(JSON.stringify(subset), 1);
            }
            if (!map.get(JSON.stringify(subset2)) && nums[j] !== undefined && i !== j) {
                console.log(subset2)
                //      subsets.push(subset2);
                map.set(JSON.stringify(subset2), 1);
            }
        }
    }
    console.log(map);
    const result = [...map.keys()].map(v => JSON.parse(v))
    console.log(result.length)

    return result;
};

console.log(subsetsWithDup([1, 2, 2, 3]))