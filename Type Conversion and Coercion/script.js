// Type conversion is when we manually convert the type of variables.
// Type Coercion is when JavaScript automatically does it for us.

// Type Conversion example

const year = "2000";
console.log(year + 1) // this will return 20001 because string gets concatenated with 1
console.log(Number(year) + 1) // this will return 2001 because we converted the data type of variable 'year' from string to number

// Type Coercion example
// This actually happens while dealing with two variables of different types.

console.log('David Villa won World Cup in ' + 2010);
console.log('69' - '69' + '69');

// Here we see that 2010 is converted to a string type without we being informed. In second example, we saw that String 69 was converted to a number and the value was calculated. That is how coercion works.

