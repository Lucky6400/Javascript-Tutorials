'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Lucky Jain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Kishore Kumar',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Mohammad Rafi',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'KK',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovements(movements, sort = false) {

  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((current, next) => (
    current - next
  )) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">₹ ${mov}</div>
        </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}


/* const user = 'Abhas Kumar Ganguly'; // we want to get akg

const username = user.toLowerCase().split(' ').map((name) => (
  name[0]
)).join(''); */

function createUserName(accs) {
  // we will pass an accounts array declared on line:34

  accs.forEach((account) => {
    // adding a new username property by following method and also shrinking the username (Lucky Jain to lj) with lowercase letters.
    account.username = account.owner.toLowerCase().split(' ').map((name) => (
      name[0]
    )).join('')
  })
}

createUserName(accounts)
// console.log(accounts) forEach mutated the array and added a new username property.
// console.log(username); prints akg

function calcBalance(account) {
  account.balance = account.movements.reduce((acc, curr) => (acc + curr));
  labelBalance.textContent = `₹ ${account.balance}`;


  // maximum value
  // const max = account.movements.reduce(function(acc, curr) {
  //   if(acc > curr) return acc;
  //   else return curr;
  // }, account.movements[0])
  // console.log(max)
}


function calcSummary(account) {
  const incomes = account.movements.filter(movement => movement > 0).reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = "₹" + incomes;

  const outgoings = account.movements.filter(movement => movement < 0).reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = "₹" + Math.abs(outgoings);

  const interest = account.movements.filter(movement => movement > 0).map(movement => (movement * account.interestRate) / 100).reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = "₹" + interest
}


const updateUI = (account) => {
  displayMovements(account.movements);
  calcBalance(account);
  calcSummary(account);
}

// Login Functionality starts
let currentUser;
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    currentUser = accounts.find(account => account.username === inputLoginUsername.value);
    // console.log(currentUser);
    if (currentUser?.pin === Number(inputLoginPin.value)) {
      console.log('logged in successfully');
      labelWelcome.textContent = `Welcome again ${currentUser.owner.split(' ')[0]}`;
      containerApp.style.opacity = 1;

      updateUI(currentUser);

    } else {
      console.log('Invalid Credentials');
    }
    inputLoginUsername.value = inputLoginPin.value = '';
  });
// Login Functionality ends

// Transfer functionality starts
btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(account => account.username === inputTransferTo.value);

  if (amount > 0 &&
    receiverAccount &&
    currentUser.balance >= amount &&
    receiverAccount?.username !== currentUser.username) {
    currentUser.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentUser);
  } else {
    console.log('Transfer invalid')
  }
})
// Transfer functionality ends

// loan functionality
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 &&
    currentUser.movements.some((movement) => (movement >= amount/10))
    ){
      currentUser.movements.push(amount);
      updateUI(currentUser);
    }
})

// close account
btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if(
  inputCloseUsername.value === currentUser.username &&
  Number(inputClosePin.value) === currentUser.pin
  ){
    const indexOfCurrentUser = accounts.findIndex(account => account.username === currentUser.username)
    // delete account
    accounts.splice(indexOfCurrentUser, 1);

    // hide ui
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
    // we could use indexOf method also but it works only for those values that are present in the array.
  }
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentUser.movements, !sorted);
  sorted = !sorted;
})