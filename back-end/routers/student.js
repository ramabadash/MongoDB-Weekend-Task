const express = require('express');

const router = express.Router();

const {
  getAllStudents,
  getStudentByName,
  getStudentByCourse,
} = require('../controller/student');

// URL/student

/* ---------- GET ---------- */

router.get('/', getAllStudents); // GET - get all students
router.get('/name/:name', getStudentByName); // GET - student by name
router.get('/course/:course', getStudentByCourse); // GET - student by course

module.exports = router;
