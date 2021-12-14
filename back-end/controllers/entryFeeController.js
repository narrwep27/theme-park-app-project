const { EntryFee } = require('../models');

const getAllEntryFees = async (req, res) => {
  let allEntryFees = await EntryFee.find();
  res.status(200).send(allEntryFees);
};

const getEntryFeeByAge = async (req, res) => {
  let visitorAge = parseInt(req.params.age);

  let allEntryFees = await EntryFee.find();
  allEntryFees.sort(({ age: firstAge }, { age: secondAge }) => {
    return firstAge < secondAge ? -1 : firstAge > secondAge ? 1 : 0;
  });

  let entryFee = allEntryFees[allEntryFees.length - 1];

  for (let i = 0; i < allEntryFees.length; i++) {
    let currentEntryFee = allEntryFees[i];
    if (visitorAge <= currentEntryFee.age) {
      entryFee = currentEntryFee;
      break;
    }
  }

  res.status(200).send(entryFee);
};

module.exports = {
  getAllEntryFees,
  getEntryFeeByAge
};
