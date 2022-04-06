/*     ---SYNTAX---

for (variable of iterable) {
  // code block to be executed
}

      ---def---
      for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

*/
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}