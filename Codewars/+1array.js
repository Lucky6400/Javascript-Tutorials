let arr = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let truth = arr.find(item => item > 9 || item < 0);

if (!truth) {
    let num = BigInt(arr.join(""))
    if (num > Number.MAX_SAFE_INTEGER) {
        let sum = num + BigInt(1);
        let result = sum.toString().split("").map(item => +item)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                result.unshift(0)
            } else break;
        }
        console.log(result)
    } else {
        let num = +arr.join("")
        let sum = num + 1
        console.log(sum.toString().split("").map(item => +item))
    }

}


//console.log(arr)