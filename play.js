const connect = require('./client');
// setup interface to handle user input from stdin

const setupInput = require('./input')


console.log("Connecting ...");

setupInput(connect());