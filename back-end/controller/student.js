const Student = require('../models/student');

//Get all studnts object from Students collection
exports.getAllStudents = async (req, res, next) => {
  Student.find({})
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(new Error('No students here...'));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};

//Get student by name (name on params)
exports.getStudentByName = async (req, res, next) => {
  const { name } = req.params;
  Student.find({ name })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(new Error(`No student with name ${name}...`));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};

//Get student by course (course on params)
exports.getStudentByCourse = async (req, res, next) => {
  const { course } = req.params;
  Student.find({ courses: course })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(new Error(`No student with course ${course}...`));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};

//Get student by course & gender (course & gender on params)
exports.getStudentByCourseAndGender = async (req, res, next) => {
  const { course } = req.params;
  const { gender } = req.params;
  Student.find({ courses: course, gender })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(
          new Error(`No student with course ${course} and gender ${gender}...`)
        );
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};
