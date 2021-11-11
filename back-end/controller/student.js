const Student = require('../models/student');

//Get all studnts object from Students collection
exports.getAllStudents = async (req, res, next) => {
  Student.find({})
    .then((studentsArray) => {
      console.log(studentsArray);
      if (studentsArray.length === 0) {
        next(new Error('No students here...'));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};
