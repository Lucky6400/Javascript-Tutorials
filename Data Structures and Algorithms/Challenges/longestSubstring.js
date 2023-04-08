/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let t = {};
    let longest = 0;
    let start = 0;

    for (let i = start; i < s.length; i++) {
        const element = s[i];
        if (!t[element]) {
            t[element] = 1;
        } else if (t[element] === 1) {
            t = {};
            start++;
            i=start-1;
        }

        longest = Math.max(longest, Object.keys(t).length);
        console.log(t)
    }

    return longest

};

console.log(lengthOfLongestSubstring("pwwkew"))