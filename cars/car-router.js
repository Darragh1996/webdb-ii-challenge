const express = require("express");
const Cars = require("./car-model");
const router = express.Router();

router.get("/", (req, res) => {
  Cars.get()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
