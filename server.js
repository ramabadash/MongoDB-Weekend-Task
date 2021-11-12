const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();
// Routers
const studentRouter = require('./back-end/routers/student');
const relationshipRouter = require('./back-end/routers/relationships');

// DB
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((error) => console.log(error));

app.use(cors()); // Cors
app.use(express.json()); // parses requests as json

// Routers
app.use('/student', studentRouter);
app.use('/relationship', relationshipRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
