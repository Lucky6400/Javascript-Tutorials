/**  You have N books, each with A[i] number of pages. M students need to be allocated contiguous books, with each student getting at least one book. Out of all the permutations, the goal is to find the permutation where the student with the most pages allocated to him gets the minimum number of pages, out of all possible permutations.

Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

 

Example 1:

Input:
N = 4
A[] = {12,34,67,90}
M = 2
Output:113
Explanation:Allocation can be done in 
following ways:
{12} and {34, 67, 90} Maximum Pages = 191
{12, 34} and {67, 90} Maximum Pages = 157
{12, 34, 67} and {90} Maximum Pages =113.
Therefore, the minimum of these cases is 113,
which is selected as the output. */

function findPages(a, n, m) {
    //your code here
    if (a.length < m) return -1

    function countStuds(arr, pages) {
        let students = 1;
        let pagesStudent = 0;

        for (let i = 0; i < arr.length; i++) {
            if (pagesStudent + arr[i] <= pages) pagesStudent += arr[i];
            else {
                students++;
                pagesStudent = arr[i]
            }
        }

        return students
    }

    let left = Math.max(...a);
    let right = a.reduce((acc, curr) => acc + curr, 0);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let students = countStuds(a, mid)
        if (students > m) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }

    return left;
}