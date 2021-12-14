const db = require('../db');
const { EntryFee } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const fees = [
    {
      age: 10,
      fee: 5
    },
    {
      age: 17,
      fee: 10
    },
    {
      age: 64,
      fee: 20
    },
    {
      age: 65,
      fee: 10
    }
  ];
  await EntryFee.insertMany(fees);
  console.log('seed fees inserted into db');
};

const run = async () => {
  await main();
  db.close();
};
run();
