const express = require('express');

const router = express.Router();

const {
  getAllStudents,
  getStudentByName,
  getStudentByCourse,
  getStudentByCourseAndGender,
  getStudentByDateMinimum,
  getStudentByPhoneStart,
  addcourseToStudentByName,
} = require('../controller/student');

// URL/student

/* ---------- GET ---------- */

router.get('/', getAllStudents); // GET - get all students
router.get('/name/:name', getStudentByName); // GET - student by name
router.get('/course/:course', getStudentByCourse); // GET - student by course
router.get('/course-gender/:course/:gender', getStudentByCourseAndGender); //GET - student by course & gender
router.get('/smaller-then-date', getStudentByDateMinimum); //Get student that born after date
router.get('/phone-start/:startNums', getStudentByPhoneStart); //Get student that their phone number start with some numbers

/* ---------- PUT ---------- */
router.put('/add-course', addcourseToStudentByName); //Add stusent a course by name

module.exports = router;
