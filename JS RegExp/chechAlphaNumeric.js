let valid = /[a-zA-Z0-9]/

console.log(valid.test("r")) // returns true
console.log(valid.test("2")) // returns true
console.log(valid.test("$")) // returns false

