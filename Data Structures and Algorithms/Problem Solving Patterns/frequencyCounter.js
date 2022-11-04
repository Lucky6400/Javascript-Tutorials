//Example one

// Write a function called same, which accepts two arrays. Return true if every value in array has it's corresponding value squared in the second array. Frequency must be same.

/*
same([1,2,3], [4,1,9]) --> true
same([1,2,1], [4,4,1]) --> false
*/

// My solution 
function same(a, b) {
    let result =[]
    a.forEach(function (item) {

        let newA = a.filter(elem => elem === item);
        let newB = b.filter(elem => elem === item ** 2);
        result.push(newA.length === newB.length);

    })
    console.log(result.every(item => item === true));
    return result.every(item => item === true);
}

// same([1, 2, 3], [4, 1, 9])
// same([1, 2, 3, 2], [9,1, 4, 4])

//Refactored solution (Better approach)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,11]))