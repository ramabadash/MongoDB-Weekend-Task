const Comments = require('../models/comment');
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
// Comments data from task instruction
const commentsData = [
  {
    username: 'GoodGuyGreg',
    comment: 'Hope you got a good deal!',
    post: '618e9a485c1630d43757d30b',
  },
  {
    username: 'GoodGuyGreg',
    comment: "What's mine is yours!",
    post: '618e9a485c1630d43757d30c',
  },
  {
    username: 'GoodGuyGreg',
    comment: "Don't violate the licensing agreement!",
    post: '618e9a485c1630d43757d30d',
  },
  {
    username: 'ScumbagSteve',
    comment: "It still isn't clean",
    post: '618e9a485c1630d43757d308',
  },
  {
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause I found a hack',
    post: '618e9a485c1630d43757d30a',
  },
];

Comments.insertMany(commentsData)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
