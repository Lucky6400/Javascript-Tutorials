// Write a function that takes a string and returns the count of each character in that string.

function countChar(str) {
    let result = {};

    //? check if alphannumeric
    let valid = /[a-z0-9]/;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).toLowerCase();
        if (valid.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(countChar('re344rear665hs@#$re'))

//~ Cleaner approach (no performance improvement)

function countCharCleaner(str){
    let result = {};
    for(let i of str){
        if(/[a-z0-9]/.test(i)){
            result[i] = ++result[i] || 1; // if truthy then increment else set to 1
        }
    }

    return result;
}

console.log(countCharCleaner('feh9ay484y3h'))