var longestCommonPrefix = function (strs) {
    let prefix = '';
    let i = 0;

    while (i < strs[0].length) {
        let truth = strs.every(item => item[i] === strs[0][i]);
        if (truth) {
            prefix += strs[0][i];
            i++;
        } else break;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flop", "flight"]))