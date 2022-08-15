function sumTwoSmallestNumbers(numbers) {  
    const lowest = Math.min(...numbers);
    const newArr = numbers.filter(item => +item !== +lowest);
    const secondLowest = Math.min(...newArr);
    
    return lowest + secondLowest
}