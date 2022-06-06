'use strict';

const arr = [[1, 3, 5], [ 7, 3, 6], 2, 1];

console.log(arr.flat());
/*
[
  1, 3, 5, 7, 3, 6, 2, 1
]
*/
// This just flattens the array.

const arrNew = [[1,2], 2, [[[11], 22], 33], 44];
console.log(arrNew.flat(3));
// for deep level flattening we can specify number
