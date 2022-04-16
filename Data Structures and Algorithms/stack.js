// ! var stack = []; // this is our stack

// ! var item = "oil drum";

// ! var reverseItem = "";

/*

~ FOLLOWING METHODS ARE USED IN A STACK:

? PUSH:
TO ADD AN ELEMENT TO THE TOP OF THE STACK.

? POP: 
TO REMOVE TOP ELEMENT FROM THE STACK.

? PEEK: 
FOR DISPLAYING THE TOP ELEMENT OF THE STACK.

? LENGTH / SIZE: 
HOW MANY ELEMENTS ARE ON A STACK.

*/


// * putting the letters of item into stack

// for(var i = 0; i < item.length; i++){
//     stack.push(item[i]);
// }

// * console.log("And the result of first operation is:    "+ stack);

// /****************************************************************/

// * reversing a stack

// for(var i = 0; i <item.length; i++){
//     reverseItem += stack.pop();
// }

// * console.log(reverseItem);


// ? Create a stack

var stack = function () {

    this.count = 0; // this will keep track of how many items are in the stack

    this.storage = {};

    // * Add a value to end of the STACK

    this.push = function (value) {

        this.storage[this.count] = value;

        this.count++;

    }

    // * Remove and return the value at the end of the stack

    this.pop = function () {
        if (this.count === 0) {
            return undefined
        }

        this.count--;

        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;

    }
    // * Return the no. of items in a stack

    this.size = function () {
        return this.count;
    }

    // * Return the value at the end of the stack

    this.peek = function (value) {
        return this.storage[this.count - 1];
    }

}

// ? Use that stack
var myStack = new stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());