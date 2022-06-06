'use strict';

const arr = [1,2,3,4,5,6,7,8,9,10];

arr.fill('lucky', 4, 7);
console.log(arr);
/*
[
  1,       2,       3,
  4,       'lucky', 'lucky',
  'lucky', 8,       9,
  10
]
*/

const newArr = new Array(7)
console.log(newArr); // output: [ <7 empty items> ]

newArr.fill('Kishore Kumar');
console.log(newArr);
/*
[
  'Kishore Kumar',
  'Kishore Kumar',
  'Kishore Kumar',
  'Kishore Kumar',
  'Kishore Kumar',
  'Kishore Kumar',
  'Kishore Kumar'
]
*/