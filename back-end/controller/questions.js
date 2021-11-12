const Questions = require('../models/question');

/* ---------- GET ---------- */

// Get all questions from DB
exports.getAllQuestions = (req, res, next) => {
  Questions.find({})
    .then((questionsArray) => {
      if (questionsArray.length === 0) {
        next(new Error('No questions here...'));
      } else {
        res.status(200).json(questionsArray);
      }
    })
    .catch((error) => next(error));
};
