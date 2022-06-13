'use strict';

const printCountry = async (country) => {
    const response = await fetch(`https://restcountries.com/v2/name/${country}`);

    const data = await response.json();

    console.log([data[1]]);
}

printCountry('america');