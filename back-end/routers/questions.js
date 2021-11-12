const express = require('express');

const router = express.Router();
const { getAllQuestions } = require('../controller/questions');
// URL/questions

/* ---------- GET ---------- */

router.get('/list', getAllQuestions); // Get all questions from DB

module.exports = router;
