const db = require("../data/db-config");

function get() {
  return db("cars");
}

function getCarByVIN(vin) {
  return db("cars")
    .where({ vin })
    .first();
}

function insertNewCar({ make, model, mileage, transmission, status }) {
  return db("cars").insert({ make, model, mileage, transmission, status });
}

function updateCar({ vin, model, mileage, transmission, status }) {
  return db("posts")
    .where({ vin })
    .update({ make, model, mileage, transmission, status });
}

function deleteCar(vin) {
  return db("cars")
    .where({ vin })
    .del();
}

module.exports = {
  get,
  getCarByVIN,
  insertNewCar,
  updateCar,
  deleteCar
};
