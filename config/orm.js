class Orm {
  constructor() {
    this.con = require('./connection');
  }

  selectAll() {
    return new Promise(resolve => (
        this.con.query('select * from burgers;',
          null,
          (err, data) => {
            if (err) throw err;
            resolve(data);
          }
        )
      )
    )
  }

  async insertOne(value) {
    await this.con.query(
      'insert into burgers (burger_name) values(?);',
      [value.toString()],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return true;
      }
    )
  }

  updateOne(value, id) {
    return new Promise(resolve => (
      this.con.query(
        'update burgers set devoured=? where id=?;',
        [!!value, id],
        (err, data) => {
          if (err) throw err;
          console.log(data);
          resolve(true);
        }
      )
    ))
  }
}

module.exports = () => new Orm();
