// const net = require('net');

let connection;

const handleUserInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 't') {
      connection.write("Say: YES")
    }
    if (key === 'w') {
      connection.write("Move: up")
    }
    if (key === 's') {
      connection.write("Move: down")
    }
    if (key === 'a') {
      connection.write("Move: left")
    }
    if (key === 'd') {
      connection.write("Move: right")
    }
  })
}

const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // stdin.on('data', handleUserInput)
  handleUserInput()
  return stdin;
}

module.exports = {setupInput};