const Users = require('../models/user');
const mongoose = require('mongoose');

const username = '';
const password = '';

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.vfocj.mongodb.net/mongo_practice?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log('connected to MongoDB job');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });
// Users data from task instruction
const usersCollection = [
  { username: 'GoodGuyGreg', first_name: 'Good Guy', last_name: 'Greg' },
  { username: 'ScumbagSteve', first_name: 'Scumbag', last_name: 'Steve' },
];

Users.insertMany(usersCollection)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
