let str = "abcdef"

let newStr = str.split("")
let set = [...new Set(str)]

console.log(newStr)
console.log(set)
