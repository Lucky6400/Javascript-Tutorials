/** Write a function to find the factorial of a number */

// function factorialIterative(num){
//     let sum = 1;
//     for(i = num; i > 0; i--){
//         sum *= i;
//     }
//     console.log(sum);
// }

// factorialIterative(5)

function factorialRecursive(num) {
    // since factorial of 1 is 1
    return num !== 1 ? num * factorialRecursive(num - 1) : 1;
}

console.log(`Recursive factorial ${factorialRecursive(5)}`)
