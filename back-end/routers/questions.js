const express = require('express');

const router = express.Router();
const {
  getAllQuestions,
  createNewQustion,
} = require('../controller/questions');
// URL/questions

/* ---------- GET ---------- */

router.get('/list', getAllQuestions); // Get all questions from DB

/* ---------- POST ---------- */

router.post('/create', createNewQustion); // Create a question

module.exports = router;
