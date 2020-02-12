const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // conn.on("Successfully connected to game server")
  conn.on('data', (data) => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: SIU");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
  });

  return conn;
}

module.exports = {connect};