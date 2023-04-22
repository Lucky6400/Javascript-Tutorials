/*
In heap, value of parent is always greater than that of child.
Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.

?Difference b/w Heaps and Trees
Both heaps and trees are data structures used to organize and store elements in a hierarchical way. However, there are some key differences between them:

Structure: A tree is a hierarchical data structure 
consisting of nodes connected by edges, where each node has 
zero or more child nodes. A heap is a specialized tree-based 
data structure that satisfies the heap property, which is a 
specific ordering condition between parent and child nodes.

Ordering: A tree can be ordered or unordered, depending on
the specific application. In an ordered tree, the nodes are 
arranged in a specific order (e.g., binary search trees). In 
contrast, heaps are always ordered, either in the form of a 
min heap or a max heap, depending on the specific implementation.

Shape: Trees can have various shapes and depths, depending 
on the specific arrangement of nodes and edges. In contrast, 
heaps have a specific shape, which is a complete binary 
tree, meaning that every level of the tree is completely 
filled, except possibly the last level, which is filled from 
left to right.

Usage: Trees are used for various purposes, such as organizing data for efficient searching or sorting, representing hierarchical relationships, or modeling decision-making processes. Heaps, on the other hand, are typically used for efficient priority queue operations, such as finding the minimum or maximum element, inserting or deleting elements, or sorting elements in ascending or descending order.


Big O (it's incredible😍)
Insertion -> O(logN)
Removal -> O(logN)
Search -> O(N)
*/


class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/** MAX BINARY HEAP */
class PriorityQueueMax {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        let currentIndex = this.values.length - 1;
        const element = this.values[currentIndex];


        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority <= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[currentIndex] = parent;
            currentIndex = parentIndex;
        }
        return this;
    }


    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}


/** MIN BINARY HEAP */
class PriorityQueueMin {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);
        this.values.push(node);
        let currentIndex = this.values.length - 1;
        const element = this.values[currentIndex];


        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[currentIndex] = parent;
            currentIndex = parentIndex;
        }
        return this;
    }


    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}