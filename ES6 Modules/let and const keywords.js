let a = 64;
// The scope of "let" is limited to a block. 
// We cannot declare this let with same variable name again because we are currently in the same block.
console.log(a);
if (true) {
    let a01 = 12; // This is limited to this block only and the next let will print another value for the same name of this variable.
    console.log(a01);
}
if (true) {
    let a01 = 13; // As we can see in the terminal, the value of this let is printed along with the value of prev let while keeping the names of variables same.
    console.log(a01);
}

// The const keyword allows you to declare a constant(a JavaScript variable with a constant value).
const a02 = 64;
console.log(a02);
// let a02 = 22; This will give error ;-)
// Constants are similar to let variables, except that the value cannot be changed.