const diegoCosta = 19;

if(diegoCosta === 19) console.log('Chelsea Player') // This will check whether the variable EXACTLY equals 19.

/*

? So the difference between == and === is that === is strict equality and does not perform type coercion and == performs type coercion.

=== : Strict equality operator
==  : Loose equality operator

? In the same way

!== is strict
!= is loose

*/

console.log(19 === '19'); // returns false 
console.log(19 == '19'); // returns true 