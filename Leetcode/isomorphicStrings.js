function isomorphicStrings(s, t) {
    let result;
    let arrayOfS = s.split("");
    let arrayOfT = t.split("");

    for (let i = 0; i < s.length; i++) {
        if (arrayOfS.indexOf(s[i]) === arrayOfT.indexOf(t[i])) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

console.log(isomorphicStrings("egg", "ada"));

// Takeaways
// Don't use split function inside a loop

