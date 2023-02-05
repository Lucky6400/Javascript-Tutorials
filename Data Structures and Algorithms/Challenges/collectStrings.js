function collectStrings(obj) {

    let values = Object.values(obj);
    let arr = [];

    function helper (input) {
        if(!input.length) return 0;
        if(typeof input[0] === 'string'){
            arr.push(input[0]);
            helper(input.slice(1));
        } else if(typeof input[0] === 'object') {
            helper(Object.values(input[0]));
        } else {
            helper(input.slice(1));
        }
    }

    helper(values);

    return arr;
}

console.log(collectStrings({
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}))