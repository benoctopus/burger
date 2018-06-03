mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'burgers_db',
  password: ''
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected to mysql')
});

module.exports = connection;