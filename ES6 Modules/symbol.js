/*

A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

*/

const x = { name: "Lucky", age: 21, favColor: "blue", favSinger: "Kishore Kumar" };

let a = Symbol('country');
x[a] = "India";

console.log(x);
/* 

Now the value "India" is assigned to the object but it is still undefined.

*/