const mongoose = require('mongoose');

const VisitorSchema = require('./visitor');
const EntryFeeSchema = require('./entryFee');
const RideSchema = require('./ride');

const Visitor = mongoose.model('Visitor', VisitorSchema);
const EntryFee = mongoose.model('EntryFee', EntryFeeSchema);
const Ride = mongoose.model('Ride', RideSchema);

module.exports = {
  Visitor,
  EntryFee,
  Ride
};
