/*
Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
*/

function constructNote(msg, str) {
    // add whatever parameters you deem necessary - good luck!
    let msgObj = {};
    let strObj = {};

    let truth = false;

    for (let i of msg) {
        msgObj[i] = ++msgObj[i] || 1;
    }

    for (let i of str) {
        strObj[i] = ++strObj[i] || 1;
    }

    for (let key in msgObj) {
        if(strObj.hasOwnProperty(key)) {
            if(strObj[key] >= msgObj[key]) {
                truth = true;
            } else {
                truth = false;
            }
        }
    }

    console.log(truth)
    return truth;
}

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true