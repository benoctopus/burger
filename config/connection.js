mysql = require('mysql');
//  ||
let connection;
if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.process.env.CLEARDB_DATABASE_URL);
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