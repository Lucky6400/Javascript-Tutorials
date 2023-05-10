/*
?Two main approaches
BFS - Breadth first search
DFS - Depth first search
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        let current = this.root;

        while (true) {
            if (val === current.val) return undefined;
            if (val > current.val) {
                if (current.right === null) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) return current;
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            }
        }
        return false;
    }

    invert() {
        function swap(node) {
            if (!node) return;
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            swap(node.left);
            swap(node.right);
        }
        swap(this.root);
        return this;
    }

    breadthFirstSearch() {
        let queue = [this.root];
        let visited = [];
        while (queue.length) {
            let node = queue.shift();
            visited.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return visited;
    }

    depthFirstPreOrder() {
        let visited = [];

        function traverse(node) {
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }

    depthFirstInOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }

    depthFirstPostOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }

        traverse(this.root);
        return visited;
    }

    findSecondLargest() {
        if (!this.root) return undefined;

        let current = this.root;
        let max = this.root.value;
        let secondMax = this.root.value;

        function helper(node) {
            if (node.value > max) {
                secondMax = max;
                max = node.value;
            }

            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }

        helper(current);
        return secondMax;
    }

    isBalanced() {
        let left = this.root.left;
        let right = this.root.right;

        if (!this.root) return false;
        if (this.root && !left && !right) return true;

        let leftC = 0;
        let rightC = 0;

        if (left) {
            while (left.left || left.right) {
                if (left.left) {
                    left = left.left;
                } else if (left.right) {
                    left = left.right;
                }
                leftC++;
            }
        }

        if (right) {
            while (right.left || right.right) {
                if (right.left) {
                    right = right.left
                } else if (right.right) {
                    right = right.right;
                }

                rightC++;
            }
        }


        let value = leftC - rightC;

        if (value >= 0 && value <= 1) {
            return true;
        }

        return false;
    }
}

/*
?BFS or DFS, which is better? 

BFS is generally better when you want to find the shortest path between two nodes. Since BFS visits all nodes at a given depth before moving on to the next level, it can find the shortest path from the starting node to any other node in the graph or tree.

DFS is generally better when you want to explore all possible paths in a graph or tree. DFS explores each path as far as possible before backtracking, which makes it useful for tasks such as finding all connected components or checking for cycles.

BFS requires more memory than DFS, as it has to keep track of all nodes at a given depth before moving on to the next level. DFS, on the other hand, only needs to keep track of the current path and can therefore use less memory.

The worst-case time complexity for both BFS and DFS is O(V + E), where V is the number of vertices and E is the number of edges. However, the average-case time complexity can vary depending on the structure of the graph or tree. In general, BFS may perform better when the branching factor (the average number of children per node) is low, while DFS may perform better when the branching factor is high.
*/