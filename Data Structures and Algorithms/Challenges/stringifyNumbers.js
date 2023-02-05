
/**Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this! */
function stringifyNumbers(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));

    let helper = (obj) => {

        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                obj[key] = obj[key].toString();
            } else if (typeof obj[key] === 'object') {
                obj[key] = obj[key]
                helper(obj[key]);
            }
        }
    }

    helper(newObj);
    return newObj;
}

console.log(stringifyNumbers({
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}))