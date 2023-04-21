/*
A tree is a collection of nodes that are connected by edges. In a tree, there is a root node from which all other nodes descend, and each node may have zero or more child nodes.

A binary tree is a tree in which each node has at most two child nodes. These child nodes are referred to as the left child and the right child.

A binary search tree (BST) is a binary tree in which the value of each node's left child is less than the value of the node, and the value of each node's right child is greater than or equal to the value of the node. This property makes it easier to search for elements in the tree, as we can eliminate one half of the remaining nodes in each step of the search.

?Tree Terminology:

Node: A fundamental part of a tree. It contains data and may have zero or more child nodes.

Root: The topmost node in a tree, which has no parent node.

Parent: A node that has one or more child nodes.

Child: A node that has a parent node.

Leaf: A node with no child nodes.

Sibling: Nodes that have the same parent node.

Level: The level of a node is the number of edges between the node and the root node.

Height: The height of a tree is the maximum number of levels in the tree.

Subtree: A tree consisting of a node and all its descendants.

Binary tree: A tree in which each node has at most two child nodes.
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * BigO 
 *@ Insertion - average O(logn), worst O(n)
 *@ Searching - average O(logn), worst O(n)
**/
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

    /** The invert method uses a recursive helper function swap to traverse the tree and swap the left and right child nodes of each node.
    */

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
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(0);
bst.insert(45);
bst.insert(30);
bst.insert(23);
bst.insert(40);
console.log(bst.find(30));
console.log(bst.invert())


/* 
The time complexity of the invert method is O(n), where n is the number of nodes in the tree. This is because the method traverses every node in the tree once and swaps the left and right child nodes of each node.

The space complexity of the invert method is O(h), where h is the height of the tree. This is because the method uses a recursive approach to traverse the tree, and the maximum depth of the recursion is equal to the height of the tree. Therefore, the space required for the call stack is proportional to the height of the tree. In the worst case, if the tree is unbalanced and has a height of n, the space complexity of the invert method could be O(n). However, in a balanced binary search tree, the height is proportional to log(n), so the space complexity of the invert method would be O(log(n)).
*/

/*
?Applications of Trees:

File Systems: File systems use a tree-like structure to store files and directories, with the root directory at the top of the tree.

Network Routing: In computer networks, routing algorithms use trees to find the most efficient path for data to flow through the network.

Hierarchical data representation: Trees are used to represent hierarchical data such as family trees, organizational charts, or taxonomies.

Search Algorithms: Many search algorithms like Binary Search Tree, AVL tree, Red-Black tree are based on the tree data structure.

Compiler Design: The syntax tree is a type of tree that compilers use to analyze the structure of programming languages.

Artificial Intelligence: Decision trees are used in artificial intelligence to model decision-making processes.

Game Development: Game development often makes use of trees to represent game objects and their relationships, such as collision detection and physics simulation.
*/