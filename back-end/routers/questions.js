const express = require('express');

const router = express.Router();
const {
  validateNewQuestion,
  validateUpdateQuestion,
  validMongooseId,
} = require('../middlewares/questionValidator');
const {
  getAllQuestions,
  createNewQustion,
  deleteQuestionById,
  getQuestionsByDifficulty,
  updateQuestionById,
} = require('../controller/questions');
// URL/questions

router.get('/list', getAllQuestions); // Get all questions from DB

router.post('/create', validateNewQuestion, createNewQustion); // Create a question

router.delete('/remove/:id', validMongooseId, deleteQuestionById); // Delete question by id

router.get('/read/by/difficulty/:difficulty', getQuestionsByDifficulty); // Get questions by difficulty equal to or above

router.put(
  '/update/:id',
  validMongooseId,
  validateUpdateQuestion,
  updateQuestionById
); // Update question by id and keys with values

module.exports = router;
