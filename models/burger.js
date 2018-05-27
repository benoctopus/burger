const orm = require('../config/orm')();

module.exports = {

  getBurgers() {
    return orm.selectAll()
      .then(data => data)
      .catch(() => {
        console.log('select failed')
      })
  },

  newBurger(burger) {
    return orm.insertOne(burger)
      .then(() => true)
      .catch(() => false)
  },

  devour(burger, id) {
    return orm.insertOne(burger)
      .then(() => true)
      .catch(() => false)
  }
};

