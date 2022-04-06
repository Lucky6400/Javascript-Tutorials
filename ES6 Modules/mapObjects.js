/*
Being able to use an Object as a key is an important Map feature.



*/ // Create Objects
const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a new Map
const fruits = new Map();

/*
You can add elements to a Map with the set() method.
The set() method can also be used to change existing Map values.
*/

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// get() method is used to get the value of key.
console.warn("get() method \n");
console.log(fruits.get(apples));
console.log("\n");


// size method returns no. of elements
console.warn("size method \n");
console.log(fruits.size);
console.log("\n");
console.log(fruits);

// The delete() method removes a Map element
console.warn("delete() method \n");
fruits.delete(apples);
console.log(fruits);
console.log("\n");

// use clear() to remove all elements.

// has() method
console.log("has() method \n");
console.log(fruits.has(oranges));
console.log(fruits.has(apples));
console.log("\n");