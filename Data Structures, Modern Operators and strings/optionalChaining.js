const india = {
    openers: {
        one: 'Sachin',
        two: 'Sehwag'
    },
    middle: {
        three: 'Gambhir',
        four: 'Virat',
        five: 'Yuvraj',
        six: {
            name: 'Dhoni',
            captain: true,
            wk: true
        }
    },
    lower: {
        seven: 'Yusuf',
        eight: 'Harbhajan',
        nine: 'Zaheer',
        ten: 'Nehra',
        eleven: 'Munaf'
    }
}

// without optional chaining

if (india.middle && india.middle.six) {
    // if six property exists print this
    console.log('Dhoni exists')
};

// with optional chaining

console.log(india.middle.six?.capwtain ?? 'Property does not exist');
console.log(india.middle.six?.captain ?? 'Property does not exist'); // returns true
// the ? after six indicates that if six property exists then only read the next property
// IMPORTANT: ?? is a nullish coalescing operator that indicates that if property does not exist print this. We could do that with || operator also but it would cause bugs if the values are falsy (you already learned 5 falsy values so I won't tell here 🙂)