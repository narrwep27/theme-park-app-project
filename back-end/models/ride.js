const { Schema } = require('mongoose');

const RideSchema = new Schema(
  {
    name: { type: String, required: true },
    thrillLevel: { type: String, required: true },
    minimumHeight: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = RideSchema;
