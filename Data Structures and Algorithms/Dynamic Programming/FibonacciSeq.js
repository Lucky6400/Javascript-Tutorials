/** O(2^n) (worse than O(n^2)☹️)
 * Without DP
 */

function fib(n) {
    if (isNaN(n)) return "Please provide a number";
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

//console.log(fib());

/*
~ Memoization
Storing the results of expensive function calls and returning the cached result when the same inputs occur again.
*/

/** O(n)😍👌
 *  With DP
 */
function memoizedFib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    const res = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    memo[n] = res;
    return res;
};

// without recursion (or tabulation method, bottom-up approach) O(n) 😍😍😍
function fibWithoutRecursion(n) {
    if (n <= 1) return n;

    let prevPrevNum = 0;
    let prevNum = 1;
    let result;

    for (let i = 2; i <= n; i++) {
        result = prevNum + prevPrevNum;
        prevPrevNum = prevNum;
        prevNum = result;
    }

    return result;
}

console.log(BigInt(memoizedFib(1020)))
console.log(fibWithoutRecursion(7)) // 1,1,2,3,5,8,13