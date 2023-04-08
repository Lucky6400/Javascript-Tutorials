/*
push
pop
shift
unshift
find
findIndex
indexOf
map
filter
reduce
join
slice
splice
sort
isArray
includes
reduceRight
forEach
some
every
reverse
flat
flatMap
concat
from

*/

let obj = {
    one: "123",
    two: "234",
    dhai: "2.5",
    poneTeen: "2.75",
    three: "456"
};

/*
Object.entries();
Object.keys();
Object.values();
Object.hasOwnProperty();
*/

console.log(Object.entries(obj).map((item) => {
    let obj1 = {};
    obj1["key"] = item[0];
    obj1["value"] = item[1];

    return obj1;
}))