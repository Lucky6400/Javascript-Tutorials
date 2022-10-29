let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let string = "The quick brown fox jumps over the lazy dog"
let truth = [];

alphabet.forEach(item => {
    string.includes(item) ? truth.push(true) : truth.push(false)
})

console.log(truth, truth.length)