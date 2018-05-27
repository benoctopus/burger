class Orm {
  constructor() {
    this.con = require('./connection');
  }

  async selectAll() {
    await this.con.query('select * from burgers;', null, (err, data) => {
      if (err) throw err;
      return data;
    })
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

  async updateOne(value, id) {
    await this.con.query(
      'update burgers set devoured = ? where id = ?;',
      [!!value, id],
      (err, data) => {
        if (err) throw err;
        console.log(data);
        return true;
      }
    )
  }
}

module.exports = () => new Orm();
