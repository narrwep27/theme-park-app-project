const { Ride } = require('../models');

const getAllRides = async (req, res) => {
  let allRides = await Ride.find();
  res.status(201).send(allRides);
};

module.exports = {
  getAllRides
};
