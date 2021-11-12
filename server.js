const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config();
// Middleware
const { errorHandler } = require('./back-end/middlewares/errorHandler');
// Routers
const studentRouter = require('./back-end/routers/student');
const relationshipRouter = require('./back-end/routers/relationships');
const questionsRouter = require('./back-end/routers/questions');

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
app.use('/questions', questionsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
