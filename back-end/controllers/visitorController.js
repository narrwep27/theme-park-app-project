const { Visitor } = require('../models');

const insertVisitor = async (req, res) => {
  let result = await Visitor.insertMany(req.body);
  res.status(201).send(`Successfully inserted ${result}`);
};

module.exports = {
  insertVisitor
};
