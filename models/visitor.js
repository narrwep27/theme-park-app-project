const { Schema } = require('mongoose');

const VisitorSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: String, required: true },
    dateEntry: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = VisitorSchema;
