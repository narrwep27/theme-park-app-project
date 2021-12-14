const { Schema } = require('mongoose');

const EntryFeeSchema = new Schema(
  {
    age: { type: Number, required: true },
    fee: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = EntryFeeSchema;
