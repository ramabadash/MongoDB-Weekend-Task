const express = require('express');

const router = express.Router();
const {
  getAllQuestions,
  createNewQustion,
  deleteQuestionById,
} = require('../controller/questions');
// URL/questions

router.get('/list', getAllQuestions); // Get all questions from DB

router.post('/create', createNewQustion); // Create a question

router.delete('/remove/:id', deleteQuestionById); // Delete question by id

module.exports = router;
