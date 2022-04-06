function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x * y; // This defines the operation to be performed when we print the function in our console.
}
console.log(myFunction(64)); // will return 640. We did not write a secondvalue but still we recieved the output. This is possible because the default value of y is set to 10.

function main(a01, a02 = main()) {
    return a01 + a02;
}
console.log(main()); // This will give error ;-)