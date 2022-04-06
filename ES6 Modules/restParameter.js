// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array

const sum = (...marks) => {
    return marks;
};

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);