'use strict';

// without default parameters
const details = [];

function playerDetails(name, position) {

    const detail = {
        name,
        position,
    }
    console.log(detail);
    details.push(detail);

}

playerDetails('Yuvraj Singh');
// { name: 'Yuvraj Singh', position: undefined }



// with default parameters
function playerDetails01(name, position = 5) {

    const detail = {
        name,
        position,
    }
    console.log(detail);
    details.push(detail);
    
}

playerDetails01('Yuvraj Singh');
// { name: 'Yuvraj Singh', position: 5 }

// we can overrde the default value
playerDetails01('Yuvraj Singh', 4);
// { name: 'Yuvraj Singh', position: 4 }

// NOTE: parameters are specified in order. 

// if we want to skip a parameter then set it to undefined, so that it will take the value that we defined.
playerDetails01('Yuvraj Singh', undefined);
// { name: 'Yuvraj Singh', position: 5 }