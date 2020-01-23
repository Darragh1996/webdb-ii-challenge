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

router.get("/:vin", (req, res) => {
  Cars.getCarByVIN(req.params.vin)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

router.post("/", (req, res) => {
  Cars.insertNewCar(req.body)
    .then(newCarVIN => {
      res.status(200).json(newCarVIN);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

router.put("/:vin", (req, res) => {
  Cars.updateCar({ ...req.body, vin: req.params.vin })
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong", error: err });
    });
});

router.delete("/:vin", (req, res) => {
  Cars.deleteCar(req.params.vin)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
