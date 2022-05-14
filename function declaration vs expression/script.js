// function declaration

function goOut (distance){
    return 2000 - distance; 
}

console.log(`I have travelled ${goOut(1234)}KMs distance.`)

// Can be called before declaration

////////////////////////////////////////////////

// function expression

const eveningWalk = function (distance){
    return 500 - distance; 
}

// Cannot be called before declaration

console.log(`I have travelled ${eveningWalk(123)}KMs distance.`)

/////////////////////////////////////////////////

// A function is also a value, so that we can store them into a variable.