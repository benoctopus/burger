mysql = require('mysql');
console.log(console.log(process.env.CLEARDB_DATABASE_URL || 'running locally'));
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db',
    password: ''
  });
}
connection.connect(err => {
  if (err) throw err;
  console.log('connected to mysql')
});

module.exports = connection;