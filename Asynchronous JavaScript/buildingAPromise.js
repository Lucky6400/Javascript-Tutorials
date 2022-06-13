'use strict';

const myPromise = new Promise(function (resolve, reject) {
    if(Math.random() >= 1){
        resolve('Promise resolved'); // this will mark the promise as a fulfilled promise
    } else {
        reject('Promise rejected');
    }
});

// consuming the above promise
myPromise.then(res => console.log(res)).catch(error => console.log(error));