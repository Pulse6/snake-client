// const net = require('net');
const connect = require('./client');
const connect = require('./input');

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '172.46.0.236',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }
console.log('Connecting ...');
connect();
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */



setupInput();