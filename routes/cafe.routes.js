const express = require("express");
const router = express.Router();

// ℹ️ import models
const Cafe = require("../models/Cafe.model");

// ℹ️ set up routes
//POST cafe create
router.post("/new-cafe/create", (req, res) => {
  const { image, name, city, rating, cost } = req.body;

  //check for errors
  if (!image || !name || !city || !rating || !cost) {
    res.json({ error: "All fields are required" });
  }

  Cafe.findOne({ name })
    .then((foundCafe) => {
      //if cafe with same name exists - throw error
      if (foundCafe) {
        res.json({ error: "A cafe with that name already exists" });
      }

      return Cafe.create({
        image,
        name,
        city,
        rating,
        cost,
      });
    })
    .then((createdCafe) => {
      console.log(createdCafe);
      res.json({ cafe: createdCafe });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//GET get list of cafes based on city
router.get("/find-all/:city", (req, res) => {
  const { city } = req.params;

  Cafe.find({ city: city })
    .then((foundCafes) => {
      console.log(foundCafes);
      res.json({ cafes: foundCafes });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

//GET route to get a single cafe based on ID
router.get("/find-one/:id", (req, res) => {
  const { id } = req.params;

  Cafe.findById(id)
    .then((foundCafe) => {
      console.log(foundCafe);
      res.json({ cafe: foundCafe });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

module.exports = router;
