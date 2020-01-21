const db = require("../data/db-config");

function get() {
  return db("cars");
}

module.exports = {
  get
};
