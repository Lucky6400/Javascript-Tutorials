function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function(a01, a02) {
    let x = 64;

    // The producing code (this may take some time)

    if (x == 0) {
        a01("OK");
    } else {
        a02("Error");
    }
});

myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);
// ---another example---
let x = new Promise(function(a01, a02) {
    setTimeout(function() { a01("Tom and Jerry"); }, 1000);
});

x.then(function(value) {
    console.log(value);
});