'use strict';

const print = console.log;

print('Game has started!')

const scores = [];
var a = 0;
document.querySelector('.score').innerHTML = a;

// the function passed in below code is called event handler
document.querySelector('.check').addEventListener('click', function () {
    // getting the value of input and printing it to console
    const guessedNumber = Number(document.querySelector('.guess').value);

    const myNumber = Math.floor(Math.random() * 20)
    console.log(myNumber)

    if (guessedNumber === myNumber) {
        document.querySelector('.message').textContent = "Correct Number";
        a += 20;
        document.querySelector('.score').innerHTML = a;
    } else if (guessedNumber !== myNumber) {
        document.querySelector('.message').textContent = 'Incorrect Number';
        a -= 20;
        document.querySelector('.score').innerHTML = a;
    } else if (!guessedNumber) {
        document.querySelector('.message').textContent = "Kindly Enter a value";
    }

    scores.push(document.querySelector('.score').textContent)
    console.log(scores)

    document.querySelector('.highscore').innerHTML = Math.max(...scores)

})