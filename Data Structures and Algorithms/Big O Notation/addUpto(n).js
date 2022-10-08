

// slower method
// function addUpto(n){
//     let sum = 0;
//     for(i = 0; i <= n; i++){
//         sum += i
//     }
//     return sum; 
// }
// let t1 = performance.now();
// console.log(addUpto(40000000))
// let t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1)/1000} seconds`) // Time elapsed: 0.055950900077819825 seconds

// faster method
function addUptoFast(n){
    return n*(n+1)/2;
}

let t1 = performance.now();
console.log(addUptoFast(40000000)) 
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1)/1000} seconds`) // Time elapsed: 0.0020188000202178953 seconds