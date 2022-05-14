for(let i = 1; i <= 5; i++) {
    console.log(i); 
}

// below code will only find strings in array
const india = [{},[],55,'Sachin', 'Sehwag', 'Gambhir', 7, 8, true];

for(let i = 0; i < india.length; i++) {
if(typeof india[i] !== 'string') continue;

console.log(typeof india[i])
}

// break statement (as soon as it finds string it will stop iteration)
for (let index = 0; index < india.length; index++) {
    if(typeof india[index] === 'string') break;
    console.log( typeof india[index]);
    
}

// loop inside a loop
for(let teams = 1; teams <11; teams++){
    console.log(`Team ${teams} for ICC Cricket World Cup 2011`);

    for(let players = 1; players < 11; players++){
        console.log(`Player ${players}`)
    }
}