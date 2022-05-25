'use strict';

const log = console.log;
// STRING METHODS
const goat = 'Gautam Gambhir';
log(goat.length);
log(goat.slice(3, -1));
log(goat.indexOf('b'));

/// changing the case of the string
log(goat.toLowerCase());
log(goat.toUpperCase());
log(goat.toLocaleLowerCase());
log(goat.toLocaleUpperCase());

// fix capitalization in name
const opener = 'sEHwaG';
const openerResolved = opener[0].toUpperCase() + opener.slice(1).toLowerCase(); //
log(openerResolved); // Sehwag

// Check email
const email = 'robinuthappa@nowheree.com';
const enteredEmail = ' RobInuthappa@NOwhere.com'

const checkedEmail = enteredEmail.toLowerCase().trim();
log(checkedEmail);


// Replace parts of string
const wrongName = 'Shadid Akhti';
console.log(wrongName
    .replace('adid', 'oaib')
    .replace('ti', 'tar'));
// Shoaib Akhtar


// Regular expressions
const aboutPlayer = `Dhoni was not the only one who
 won us World Cup. 
 It was the effort of 
 Sachin, Yuvraj, Zaheer and Gambhir 
 also that we did it.`

// aboutPlayer.replace('the', ''); // will replace only first 'the'

console.log(aboutPlayer.replace(/the/g, '')) // will replace all 'the'.

// booleans
const openingBatsman = 'Sehwag';
console.log(openingBatsman.includes('S'));
console.log(openingBatsman.startsWith('Seh'));
console.log(openingBatsman.endsWith('ag'));

if (openingBatsman.startsWith('Seh')) {
    console.log('Arey Viru bhai!')
} else {
    console.log('Aap kon?');
}

// split method
console.log('Gautam+Gambhir+is+the+greatest+player+ever.'.split('+'));
/* [
  'Gautam',   'Gambhir',
  'is',       'the',
  'greatest', 'player',
  'ever.'
] */

// join method
console.log('Sachin+is+the+god+of+cricket.'.split('+').join(' '));
// Sachin is the god of cricket.


// padding method
const protectedPassword = (pswd) => {
    const str = pswd + ''; // another method to convert to string
    return str.slice(str.length).padStart(str.length, '*');
}

// console.log(protectedPassword(902537907404));
// console.log(protectedPassword('9025379074048790570943')); // returns all values in '*'

const newpswd = protectedPassword('rjeihfoibobafbcfegfew');
console.log(newpswd)

// repeat method
const holyWords = 'Om Namah Shivaay ';
console.log(holyWords.repeat(108));
// will remember bhagwan shiv 108 times

 