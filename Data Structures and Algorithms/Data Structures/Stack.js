/** There is more than one way of implementing a Stack.
 * Stacks are a LIFO (Last In First Out) data structure.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/** 
Insertion --> O(1)
Removal --> O(1)
Searching --> O(n)
Access --> O(n)
*/

/** Implementation using Linked List */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            let first = this.first;
            this.first = node;
            node.next = first;
        }
        this.size++;
        return this.size;
    }

    pop() {
        if (this.size === 0) return null;
        let first = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = first.next;
        }
        this.size--;
        return first.value;
    }

}


/** Implementation using Array */
class Stack {
    constructor() {
        this.items = [];
    }

    // Adds a new item to the top of the stack
    push(item) {
        this.items.push(item);
    }

    // Removes the top item from the stack and returns it
    pop() {
        return this.items.pop();
    }

    // Returns the top item from the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.items.length === 0;
    }

    // Returns the number of items in the stack
    size() {
        return this.items.length;
    }

    // Removes all items from the stack
    clear() {
        this.items = [];
    }
}  