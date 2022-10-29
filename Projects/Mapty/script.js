'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;
let mapEvent;

navigator?.geolocation?.getCurrentPosition(function (position) {
    let { latitude, longitude } = position.coords;
    //console.log(latitude, longitude);

    map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            maxHeight: 50,
            className: 'running-popup',
            autoClose: false,
        })).setPopupContent('You were there')
        .openPopup();

    map.on('click', (e) => {
        console.log(e);
        mapEvent = e;
        form.classList.remove('hidden')
        let { lat, lng } = e.latlng;
        console.log(lat, lng);

        L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            maxHeight: 50,
            className: inputType.value === 'running' ? 'running-popup': 'cycling-popup',
            autoClose: false,
            closeOnClick: false
        })).setPopupContent(inputType.value === 'running' ? 'Running': 'Cycling')
        .openPopup();
    })
}, function () {
    alert('Geolocation is not available!');
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let { lat, lng } = mapEvent.latlng;
    console.log(lat, lng);

    L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
            maxWidth: 250,
            maxHeight: 50,
            className: inputType.value === 'running' ? 'running-popup' : 'cycling-popup',
            autoClose: false,
            closeOnClick: false
        })).setPopupContent(inputType.value === 'running' ? 'Running' : 'Cycling')
        .openPopup();

    form.classList.add('hidden');
})

inputType.addEventListener('change', function(){
    if(this.value === 'running'){
        inputCadence.parentElement.classList.remove('form__row--hidden')
        inputElevation.parentElement.classList.add('form__row--hidden')
    } else if (this.value === 'cycling'){
        inputCadence.parentElement.classList.add('form__row--hidden')
        inputElevation.parentElement.classList.remove('form__row--hidden')
    }
})