function generateParenthesis(n) {
    const result = [];

    function backtrack(combination, open, close) {
        if (combination.length === n * 2) {
            result.push(combination);
            return;
        }

        if (open < n) {
            backtrack(combination + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(combination + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

// Example usage:
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
console.log(generateParenthesis(4));
/* Above line returns following:-
[
  '(((())))', '((()()))',
  '((())())', '((()))()',
  '(()(()))', '(()()())',
  '(()())()', '(())(())',
  '(())()()', '()((()))',
  '()(()())', '()(())()',
  '()()(())', '()()()()'
]
*/
