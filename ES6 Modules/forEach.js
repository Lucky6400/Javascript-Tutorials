const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
}
// ! Don't use arrow function here as it will give you error.