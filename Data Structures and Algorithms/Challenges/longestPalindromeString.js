function longestPalindromeString(s) {
    let longestSubstring = '';

    // helper function to expand palindrome around center
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);   // slice the substring from s
    };

    for (let i = 0; i < s.length; i++) {
        const oddLength = expandAroundCenter(i, i);
        const evenLength = expandAroundCenter(i, i + 1);

        if (oddLength.length > longestSubstring.length) {
            longestSubstring = oddLength;
        }

        if (evenLength.length > longestSubstring.length) {
            longestSubstring = evenLength;
        }
    }

    return longestSubstring;
}