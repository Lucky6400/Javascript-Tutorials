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


}

let dll = new DoublyLinkedList();
dll.push("First push");
dll.push("Second push");
dll.push("Third push");
dll.push("Fourth push")
dll.unshift("Zeroth Push");
console.log(dll.get(3))
console.log(dll)