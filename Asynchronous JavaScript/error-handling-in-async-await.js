'use strict';

const printCountry = async (country) => {
    try {
        const response = await fetch(`https://restcountries.com/v2/name/${country}`);

        const data = await response.json();

        console.log([data[1]]);
    } catch (error) {
        console.log('An error occured. Please try again.')
    }

}

printCountry('america');
// we can use try catch block to do error handling.