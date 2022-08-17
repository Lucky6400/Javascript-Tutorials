function pigIt(str) {
    const strWithoutSpecial = str.replace(/[^a-zA-Z0-9 ]/g, '');
    const secondStr = str.replace(strWithoutSpecial, "");
    let arrayOfStrings = [];
    strWithoutSpecial.split(" ").forEach((item) => {
        const obtainedStr = item.split("").slice(1, item.length).join("") + item[0] + 'ay'
        arrayOfStrings.push(obtainedStr);
    })
    console.log(arrayOfStrings)
    if(arrayOfStrings[arrayOfStrings.length - 1] === 'undefineday'){
        arrayOfStrings.pop()
    }
    if(secondStr){
        arrayOfStrings.push(secondStr)
    }
    const resultant = arrayOfStrings.join(" ")
    return resultant;
}

console.log(pigIt('Pig latin is cool !'))
