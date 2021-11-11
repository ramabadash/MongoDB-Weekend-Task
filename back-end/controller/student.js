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
    .then((student) => {
      if (student.length === 0) {
        next(new Error(`No student with name ${name}...`));
      } else {
        res.status(200).json(student);
      }
    })
    .catch((error) => next(error));
};
