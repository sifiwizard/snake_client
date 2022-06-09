
let connection;

const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  let myInterval;
  const handleUserInput = function () {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        console.log("Exited Program")
        process.exit();
      }
      if (key === '\u0061') {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
          conn.write("Move: left")
        }, 100);
      }
      if (key === '\u0077') {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
          conn.write("Move: up")
        }, 100);
      }
      if (key === '\u0064') {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
          conn.write("Move: right")
        }, 100);
      }
      if (key === '\u0073') {
        clearInterval(myInterval);
        myInterval = setInterval(() => {
          conn.write("Move: down")
        }, 100);      
      }
      if (key == '\u0068') {
        conn.write("Say: Hello");
      }
      if (key == '\u0074') {
        conn.write("Say: Thunderrrr")
      }
    });
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;