const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

// DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((error) => console.log(error));


// Routers


app.use(cors()); // Cors
app.use(express.json()); // parses requests as json

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });