'use strict';
console.log('Game has started!');
var currentScore = 0;
let activePlayer = 0;
const scores = [0, 0]
const score00 = document.querySelector('#score--0');
const score01 = document.querySelector('#score--1');
const current00 = document.querySelector('#current--0');
const current01 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

//start
score00.textContent = 0;
score01.textContent = 0;
dice.classList.add('hidden');

const changePlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

rollDice.addEventListener('click', () => {
    dice.classList.remove('hidden');

    const diceNumbers = Math.floor(Math.random() * 6) + 1;

    // change dice image
    dice.src = `dice-${diceNumbers}.png`;

    if (diceNumbers !== 1) {
        currentScore += diceNumbers;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        changePlayer();
    }
});

hold.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        changePlayer();
    }
})