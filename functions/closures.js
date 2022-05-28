'use strict';

const secureGame = () => {
    let player = 0;

    return () => {
        player++;
        console.log(player);
    };
};

const gamer = secureGame();

gamer();
gamer();
gamer();

/***** Another Example *****/

let p01;

const glory = () => {
    const p02 = 'Virendra Sehwag';
    p01 = () => {
        console.log(`${p02} is the best cricketer.`)
    }
}

glory();
p01();

/*
A closure is a feature of JavaScript. We cannot create or alter a closure manually. It is completely automatic.

A closure makes a function remember all the variables that existed at the function's birthplace essentially.

A Closure is a closed-over variable environment of the exection context in whch a function was created, even after that execution context is gone.
*/