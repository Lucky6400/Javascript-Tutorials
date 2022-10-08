const sectionOne = document.querySelector('#section--1');
console.log(getComputedStyle(sectionOne).height); // returns 1348.7px

//? Even if you do not define the CSS properties, this getComputedStyle method will return the current values like how much height/width that element is taking.