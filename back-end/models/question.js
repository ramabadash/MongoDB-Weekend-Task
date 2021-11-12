const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  correctAnswer: {
    type: String,
    required: true,
    trim: true,
  },
  answers: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  difficulty: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
