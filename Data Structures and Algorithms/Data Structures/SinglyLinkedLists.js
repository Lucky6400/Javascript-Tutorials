/*
A linked list is a linear data structure where each element of the list contains a pointer to its next element. It consists of nodes where each node contains a data field and a reference (link) to the next node in the list. The last node is linked to a terminator used to signify the end of the list.

~ TRAVERSING A LINKED LIST
* Traversing a linked list means visiting every node of the linked list to perform some operation on the nodes. It is the most common operation that is performed in almost every scenario of singly linked list. Traversing means accessing or printing the values (i.e., data items stored inside each node) of a singly linked list exactly once until the end node is reached.


~ TIME COMPLEXITY
* Insertion - O(1)
* Removal - O(1) -- O(n) (depends on condition)
* Search - O(n)
* Access - O(n)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // adding a new node to the list
    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        //return the linked list
        return this;
    }

    // remove the last node from the list
    /*
    if the list is empty, return undefined. Then, we can traverse through the list using a while loop until we reach the second to last node in the list. Once we get to it, we can set that node as the new tail of the list, since the last node will be popped off. Finally, we set the new tail’s next pointer to null and decrement the length of the list.
    */
    pop() {
        if (!this.length) return undefined;
        let current = this.head;
        let newTail = current;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }

        while (current.next) {
            if (current.next.next == null) {
                newTail = current;
                current = current.next;
            } else {
                current = current.next;
            }
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        // return the removed element
        return current;
    }

    // remove the first node from the list
    shift() {
        if (!this.length) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        return current;
    }

    // adding a node to the beginning of the list
    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    //get the node at specific position in the list
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // set the value of node at specific position in the list
    set(index, val) {
        if (index < 0 || index >= this.length) return null;
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    // adding a node at specific position in the list
    insert(index, val) {
        if (index < 0 || index > this.length) return null;

        if (index === this.length) {
            this.push(val);
            return true;
        };
        if (index === 0) {
            this.unshift(val);
            return true;
        };

        if (index > 0 && index < this.length) {
            let node = this.get(index - 1)
            let newNode = new Node(val);
            let temp = node.next;
            node.next = newNode;
            newNode.next = temp;
        }
        this.length++;
        return true;
    }

    // removing a node from specific position in the list
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        let node = this.get(index - 1);
        let nextNode = this.get(index);

        if (index === (this.length - 1)) {
            return this.pop();
        } else if (index === 0) {
            return this.shift();
        } else {
            node.next = nextNode.next;
            this.length--;
            return nextNode;
        }
    }

    // reversing a linked list
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;

        // setting this null because the end of the list i.e tail definitely needs to be null
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;

    }

    rotate(num) {
        num = num % this.length;
        if(num === 0 || num > this.length) return this;
        
        if(num < 0) num = num + this.length;
        
        let current = this.head;
        let count = 0;
        
        while(count < num) {
            this.push(current.val);
            this.shift();
            current = current.next;
            count++;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push("Testpushing1");
list.push("Testpushing2");
list.push("Testpushing3");
list.push("Testp pushing4");
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift("Testp pushing5"));
console.log(list.insert(0, "this test1"));
console.log(list.remove(3));
console.log(list.reverse());