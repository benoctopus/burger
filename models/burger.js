const orm = require('../config/orm')();

module.exports = {

  getBurgers() {
    return new Promise(resolve => {
      orm.selectAll()
        .then(data => {
          resolve(data)
        })
        .catch(() => {
          console.log('select failed');
          resolve()
        });
    })
  },

  newBurger(burger) {
    return orm.insertOne(burger)
      .then(() => true)
      .catch(() => false)
  },

  devour(id) {
    return orm.updateOne(true, id)
      .then(() => true)
      .catch(() => false)
  }
};

