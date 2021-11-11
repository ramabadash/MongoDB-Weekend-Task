const express = require('express');

const router = express.Router();

const { getAllStudents } = require('../controller/student');

// URL/student

// GET - get all students
router.get('/', getAllStudents);

module.exports = router;
