mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'benoctopus',
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected to mysql')
});

module.exports = connection;