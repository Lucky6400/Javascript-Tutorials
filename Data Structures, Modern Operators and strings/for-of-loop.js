'use strict';

// this  will loop through entire array and give us access to current array element.

const india = ['Sachin', 'Sehwag', 'Yuvraj'];
const newIndia = ['Dhoni', 'Raina', 'Gambhir'];

const combinedIndia = [...india, ...newIndia];

for( const [i, el] of combinedIndia.entries()) {
    console.log(`${i + 1} : ${el}`);
}