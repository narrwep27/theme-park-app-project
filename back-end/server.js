const express = require('express');
const cors = require('cors');
const path = require('path');
const routing = require('./routing');
const db = require('./db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/visitor', routing.visitor);
app.use('/ride', routing.ride);
app.use('/entryfee', routing.entryFee);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });
}

app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`));
