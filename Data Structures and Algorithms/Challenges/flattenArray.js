/** Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. */

function flatten(arr) {

    let result = [];

    const helper = d1 => {
        if (d1.length === 0) return;     // base case 

        Array.isArray(d1[0])            // check if arr[0] is array
            ? helper(d1[0])               // if so send arr[0] back
            : result.push(d1[0]);         // if not array, add to result

        helper(d1.slice(1)); // call again and decrement array by 1, till no more elements left in either outer or inner loop
    }

    helper(arr);

    return result;
}

flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]