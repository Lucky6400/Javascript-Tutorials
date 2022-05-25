'use strict';
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//   console.log(flights.split('+'));

for (let flight of flights.split('+')) {

    const [status, from, to, time] = flight.split(';'); 

    console.log(`${status.startsWith('_Delayed') ? '🔴':''}${status.replace(/_/g, ' ')} from ${from.replace(from, from.slice(0,3).toUpperCase())} to ${to.slice(0,3).toUpperCase()} ${time.replace(time, `(${time.replace(':', 'H ').concat('M')})`)}`);
}

/*

🔴 Delayed Departure from FAO to TXL (11H 25M)
 Arrival from BRU to FAO (11H 45M)
🔴 Delayed Arrival from HEL to FAO (12H 05M)
 Departure from FAO to LIS (12H 30M)

*/