/*
A hash function in JavaScript is a function that takes in an 
input value (or key) and produces a fixed-size string 
(or hash) that represents the input value. The purpose of a 
hash function is to quickly and efficiently map 
arbitrary-sized input data to a fixed-size output value.

Big O
Insertion --> O(1)
Deletion --> O(1)
Access --> O(1)
*/

class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let hashed = 0;
        // prime number is helpul in spreading keys more uniformly.
        let primeNumber = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            hashed = (hashed * primeNumber + value) % this.keyMap.length;
        }
        return hashed;
    }

    set(key, value) {
        let hashedIndex = this._hash(key);

        if (!this.keyMap[hashedIndex]) {
            this.keyMap[hashedIndex] = [];
        }
        this.keyMap[hashedIndex].push([key, value]);
        return this;
    }

    get(key) {
        let hashedIndex = this._hash(key);

        if (this.keyMap[hashedIndex]) {
            return this.keyMap[hashedIndex].find(item => item[0] === key)[1];
        }

        return undefined;
    }

    keys() {
        return this.keyMap.reduce((keysArr, current) => {
            if (current) {
                current.forEach(item => !keysArr.includes(item[0]) && keysArr.push(item[0]));
            }
            return keysArr;
        }, []);
    }

    values() {
        return this.keyMap.reduce((valuesArr, current) => {
            if (current) {
                current.forEach(item => 
                   !valuesArr.includes(item[1]) && valuesArr.push(item[1]));
            }
            return valuesArr;
        }, []);
    }
}


let ht = new HashTable();
ht.set("Lucky", "Jain");
ht.set("name", "Alice");
ht.set("age", "32");
ht.set("city", "New York");
ht.set("occupation", "teacher");
ht.set("hobby", "photography");
ht.set("pet", "dog");
ht.set("color", "purple");
ht.set("fav", "purple");

console.log(ht.get('name'))
console.log(ht.keys())
console.log(ht.values())