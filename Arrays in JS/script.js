const chelsea = ['Costa', 'Hazard', 'Fabregas', 'Willian']

const barcelona = new Array('Messi', 'Xavi', 'Iniesta', 'Villa', 'Pedro')

console.log(chelsea, barcelona)

console.log(`Lionel ${barcelona[0]} is the greatest of all time.`)

console.log(`Diego ${chelsea[0]} is the greatest of all time.`)

// To find the index of last element in the array

console.log(chelsea.length - 1)

// Array is not a primitive value, so we can mutate it even if it is declared in const

chelsea[chelsea.length - 1] = 'Ramirez';

console.log(chelsea) // now we replaced Willian with Ramirez