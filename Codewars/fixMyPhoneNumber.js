let str = "v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"
let arr = [];
str.split(" ").join("").split("").forEach(item => {
    if(!isNaN(item)){
        arr.push(item);
    }
})


console.log(arr)