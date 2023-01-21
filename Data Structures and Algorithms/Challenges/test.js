const flag = Array.isArray(2);
// console.log(flag);

let arr = [[2,3], 4,5]
let newArr = []
//arr = [...arr[0], ...arr.slice(1)]

newArr.push(...arr[0])

console.log(newArr)
