'use strict';

/*

? HIGHER ORDER FUNCTIONS

! A function that recieves another function as an arguement.

! A function that returns a new function.

! A function that does both.

*/

/*

ice world naive hobby learn scare myth tiny embrace scorpion move fancy

? FIRST CLASS FUNCTIONS

! functions stored as variables or properties, passed as arguements, returned from other functions etc...

*/

const btn = document.getElementById('lucky');

btn.addEventListener('click', () => {
    console.log('Clicked');
})

/*

In the above example, addEventListener is a higher order function and the function passed in that as an arguement is called callback function.

*/

const greet = (greeting) => {
    return (name)=>{
        console.log(greeting, name)
    }
}

// greet is a higher order function.