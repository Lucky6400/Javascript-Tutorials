function countZeroes(array) {
    // add whatever parameters you deem necessary - good luck!!!
    let leftIndex = 0;
    let rightIndex = array.length;
    let middlePoint = 0;
    while (leftIndex < rightIndex) {
        middlePoint = Math.floor((leftIndex + rightIndex) / 2);
        if (array[middlePoint] === 1) {
            leftIndex = middlePoint + 1;
        } else {
            rightIndex = middlePoint;
        }
    }
    return array.length - leftIndex;
}

countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([1, 0, 0, 0, 0]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0