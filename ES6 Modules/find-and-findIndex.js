let x = [10,20,30,40,50,64]
let y = x.find(a01 => {
    return a01 > 20;
} );
let z = x.findIndex(a02 => {
    return a02<64;
});
console.log(y);
console.log("\n");
console.log(z);