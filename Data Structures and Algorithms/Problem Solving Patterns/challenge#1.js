function anagram(a,b){
    let str1 = {};
    let str2 = {};

    for(let i of a){
        str1[i] = ++str1[i] || 1;
    }
    for(let i of b){
        str2[i] = ++str2[i] || 1;
    }
    for(let key in str1){
        if(!key in str2){
            return false;
        }
        if(str1[key] !== str2[key]){
            return false;
        }
    }
    return true;
}

console.log(anagram("cinema", "iceman"))