var isValid = function (s) {
    let valid = false;
    function helper(s) {
        if (s.includes('()')) {
            helper(s.replace('()', ''))
        } else if (s.includes('[]')) {
            helper(s.replace('[]', ''))
        } else if (s.includes('{}')) {
            helper(s.replace('{}', ''))
        } else if (s.length === 0) {
            valid = true;
        }
    }
    helper(s);

    return valid;
};

console.log(isValid("()[]}"))