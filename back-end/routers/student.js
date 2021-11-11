const express = require('express');

const router = express.Router();

const { getAllStudents, getStudentByName } = require('../controller/student');

// URL/student

/* ---------- GET ---------- */

router.get('/', getAllStudents); // GET - get all students
router.get('/:name', getStudentByName); // GET - student by name

module.exports = router;
