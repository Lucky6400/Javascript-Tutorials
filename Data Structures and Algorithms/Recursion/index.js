/*
Recursion is a process that calls itself.

Two important parts of Recursive function:
~Base Case --> A situation when the recursion ends
~Different Input
*/

/** Simple recursive function */

function countDown(num){
    if(num <=0){
        console.log("Done")
    } else {
        console.log(num);
        num--;
        countDown(num);
    }
}

countDown(7)

/*
!Things to keep in mind while writing recursive functions

* Always have a base case else function will continue running forever
* Base case should contain 'return' keyword in order to stop the function execution.

*/