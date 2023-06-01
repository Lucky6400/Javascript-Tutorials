function integerToRoman(num) {
    if (num <= 0 || num > 3999) {
        return "Invalid input";
    }

    const romanSymbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let romanNumeral = "";

    for (let symbol in romanSymbols) {
        while (num >= romanSymbols[symbol]) {
            romanNumeral += symbol;
            num -= romanSymbols[symbol];
        }
    }

    console.log(romanNumeral)
    return romanNumeral;
}

integerToRoman(1994)
