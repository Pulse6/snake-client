const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.236',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("Successfully connected to game server")

  return conn;
}

module.exports = connect;