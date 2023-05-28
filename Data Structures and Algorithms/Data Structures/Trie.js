/*
Trie Basics:

Trie, also known as a prefix tree, is a tree-like data structure used for efficient retrieval of keys.
Each node in the Trie represents a character or a part of a key.
Trie allows fast prefix-based searching, making it suitable for applications like autocomplete and spell-checking.
Trie Node:

We start by defining a basic TrieNode class that represents a node in the Trie.
Each node contains a value (the character it represents), a flag indicating whether it is the end of a word, and a children object to store references to its child nodes.
*/

class TrieNode {
    constructor(value) {
        this.value = value;
        this.isEndOfWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('');
    }

    insert(key) {
        let node = this.root;
        for (let char of key) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(char);
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(key) {
        let node = this.root;
        for (let char of key) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    prefixSearch(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return this._collectKeys(node, prefix);
    }

    _collectKeys(node, prefix, results = []) {
        if (node.isEndOfWord) {
            results.push(prefix);
        }
        for (let char in node.children) {
            this._collectKeys(node.children[char], prefix + char, results);
        }
        return results;
    }

    delete(key) {
        this._deleteHelper(this.root, key, 0);
    }

    _deleteHelper(node, key, index) {
        if (index === key.length) {
            if (!node.isEndOfWord) {
                return; // Key doesn't exist in the Trie
            }
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0; // Check if the node has no children
        }
        let char = key[index];
        if (!node.children[char]) {
            return; // Key doesn't exist in the Trie
        }
        let shouldDelete = this._deleteHelper(node.children[char], key, index + 1);
        if (shouldDelete) {
            delete node.children[char];
            return Object.keys(node.children).length === 0; // Check if the node has no children after deletion
        }
        return false;
    }

    findWord(index) {
        let node = this.root;
        let wordCount = 0;

        const traverse = (currentNode) => {
            if (currentNode.isEndOfWord) {
                wordCount++;
                if (wordCount === index) {
                    return true;
                }
            }

            for (let char in currentNode.children) {
                if (traverse(currentNode.children[char])) {
                    return true;
                }
            }

            return false;
        };

        return traverse(node);
    }
}
