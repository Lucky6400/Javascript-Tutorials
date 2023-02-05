/** Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects. */
function nestedEvenSum(obj) {
    let sum = 0;
    let val = Object.values(obj);

    const helper = input => {
        if (!input.length) return 0;
        if (typeof input[0] === 'number' && input[0] % 2 === 0) {
            sum += input[0];
        } else if (typeof input[0] === 'object') {
            let newInput = Object.values(input[0]);
            helper(newInput);
        }
        helper(input.slice(1));
    }

    helper(val);
    return sum;
}