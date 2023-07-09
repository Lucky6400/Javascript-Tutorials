/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IX: 9,
        IV: 4,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nxtChar = s[i + 1];
        if (numerals[char + nxtChar]) {
            count += numerals[char + nxtChar];
            i++;
        } else {
            count += numerals[char]
        }
    }

    return count
};