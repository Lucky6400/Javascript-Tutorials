/*
What is a queue?
This is a FIFO (First in First out) data structure.
Used in Background tasks, uploading resources, printing or task processing.
*/

/** Implementation using Linked List */
/** 
Insertion --> O(1)
Removal --> O(1)
Searching --> O(n)
Access --> O(n)
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /* Here's why: when we add an element to the back of a Queue, it becomes the new last element of the Queue. Therefore, we need to update the next property of the current last element to point to the new element, and then update the last pointer to point to the new element. */
    enqueue(value) {
        let node = new Node(value);
        if(this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        if(this.size === 0) return null;
        if(this.size === 1) {
            this.last = null;
        }
        let first = this.first;
        this.first = this.first.next;
        this.size--;
        return first;
    }
}

/** Implementation using Array */

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}