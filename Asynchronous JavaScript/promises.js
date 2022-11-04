'use strict';

/*
? PROMISE is an object that is used as a placeholder for the future result of an asynchronous operation.

? We no longer need to rely on callbacks.

? We can chain promises for a sequence of asynchronous operations. This is called escaping callback hell.

? ES6 feature
*/

// const request = fetch('https://restcountries.com/v2/name/india');

// console.log(request); // view in browser only

const getData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json(), (error) => console.log(error))
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log(`This 'finally' method is called no matter the promise is fulfilled or rejected.`)
    })
};

// 'then' method always returns a promise, no matter we return anything or not. But when we return something inside 'then' method, it becomes a fulfillment value.

// we can pass second callback function inside a 'then' method to handle rejected promise. Alternatively we can use 'catch' method too


getData('india');