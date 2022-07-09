'use strict';

const convertInput = document.getElementById('convert-input');

const convert = () => {
    convertLength();
    convertVolume();
    convertMass();
};
// Converts meters to feet & feet to meters
const convertLength = () => {
    const feet = Number(convertInput.value * 3.281).toFixed(3);
    const meters = Number(convertInput.value / 3.281).toFixed(3);

    document.getElementById('length-el').innerHTML = `
        <h3>Length (Meter/Feet)</h3>
        <p>${convertInput.value} meters = ${feet} feet |
         ${convertInput.value} feet = ${meters} meters
        </p>
    `
};
// Converts liters to gallons & gallons to liters
const convertVolume = () => {
    const gallons = Number(convertInput.value * 0.264).toFixed(3);
    const liters = Number(convertInput.value / 0.264).toFixed(3);

    document.getElementById('volume-el').innerHTML = `
        <h3>Volume (Liters/Gallons)</h3>
        <p>${convertInput.value} liters = ${gallons} gallons |
            ${convertInput.value} gallons = ${liters} liters
        </p>
    `
};
// Kilograms to pounds
const convertMass = () => {
    const pounds = Number(convertInput.value * 2.204).toFixed(3);
    const kilos = Number(convertInput.value / 2.204).toFixed(3);

    document.getElementById('mass-el').innerHTML = `
        <h3>Mass (Kilograms/Pounds)</h3>
        <p>${convertInput.value} kilos = ${pounds} pounds |
            ${convertInput.value} pounds = ${kilos} kolos
        <p>
    `
};
// Converts all units on click via convert()
document.getElementById('convert-button').addEventListener('click', convert);