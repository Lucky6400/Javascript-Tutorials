'use strict';

// Asynchronous JavaScript and XML is abbreviation for AJAX.

const BASE_URL = 'https://restcountries.com/v2/'

const request = new XMLHttpRequest();

request.open('GET', BASE_URL + 'name/india');

request.send();

request.addEventListener('load', () => {
    const data = JSON.parse(request.responseText)[1]
    console.log(JSON.parse(request.responseText))

    document.getElementById('country').innerHTML = `
    <img src="${data.flag}" />
    `
})
