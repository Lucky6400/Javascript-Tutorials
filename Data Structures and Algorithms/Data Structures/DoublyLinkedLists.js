/*
 * 
 * Big O
 * Insertion --> O(1)
 * Removal --> O(1)
 * Searching --> O(n)
 * Access --> O(n)
 * 
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** add to the end */
    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /** remove from the end */
    pop() {
        if (this.length === 0) return undefined;

        let tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return tail;
    }

    /** remove from beginning */
    shift() {
        if (this.length === 0) return undefined;

        let head = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = head.next;
            this.head.prev = null;
            head.next = null;
        }
        this.length--;
        return head;
    }

    /** inserting into beginning */
    unshift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    /** get a node at specific position */
    get(key) {
        if (key >= this.length || key < 0) return undefined;

        let half = this.length / 2;
        let current = this.head;
        let count = 0;

        if (key <= half) {
            while (count !== key) {
                current = current.next;
                count++;
            }
        } else if (key > half) {
            current = this.tail;
            count = this.length - 1;
            while (count !== key) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    /** set value of a node at specific position*/
    set(key, value) {
        let node = this.get(key);
        if (node) {
            node.val = value;
            return true;
        } else {
            return false;
        }
    }

    /** insert a node at specific position*/
    insert(key, value) {
        if (key < 0 || key > this.length) return false;

        if (key === 0) return !!this.unshift(value);
        if (key === this.length) return !!this.push(value);

        let node = new Node(value);

        let prevNode = this.get(key - 1);

        prevNode.next = node;
        node.prev = prevNode;
        node.next = prevNode.next;
        prevNode.next.prev = node;
        this.length++;
        return true;
    }

    /** remove from a specific position */
    remove(key) {
        if (key < 0 || key >= this.length) return undefined;

        if (key === 0) return this.shift();
        if (key === this.length - 1) return this.pop();

        let nodeToRemove = this.get(key);

        let nextNode = nodeToRemove.next;
        let prevNode = nodeToRemove.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        this.length--;
        return nodeToRemove;
    }

    /** reverse the list */
    reverse() {
        // If list is empty or only has 1 node, just return the list
        if (this.length < 2) return this;

        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let currentPrev = null, currentNext = null

        // Traverse while there is a current node
        while (currentNode) {
            currentPrev = currentNode.prev;
            currentNext = currentNode.next;

            currentNode.prev = currentNext;
            currentNode.next = currentPrev;

            currentNode = currentNext;
        }

        return this;
    }
}

let dll = new DoublyLinkedList();
dll.push("First push");
dll.push("Second push");
dll.push("Third push");
dll.push("Fourth push");
dll.unshift("Zeroth Push");
dll.insert(1, "In between Push");
dll.remove(1);
// console.log(dll.get(3))
console.log(dll.reverse());