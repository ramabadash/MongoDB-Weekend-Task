const Student = require('../models/student');

/* ---------- GET ---------- */

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

//Get student that born after date (date on quary params)
exports.getStudentByDateMinimum = async (req, res, next) => {
  const { date } = req.query;
  Student.find({ birth: { $gt: new Date(date) } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(new Error(`No student that their birth was after ${date}...`));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};

//Get student that their phone number start with some numbers (numbers on params)
exports.getStudentByPhoneStart = async (req, res, next) => {
  const { startNums } = req.params;
  Student.find({ phone: { $regex: `^${startNums}` } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(
          new Error(`No student that their phone start with ${startNums}...`)
        );
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};

/* ---------- PUT ---------- */
//Add stusent a course by name (coures and name on body)
exports.addcourseToStudentByName = async (req, res, next) => {
  const { course } = req.body;
  const { name } = req.body;
  Student.findOneAndUpdate({ name }, { $push: { courses: course } })
    .then((student) => {
      if (student === null) {
        next(new Error(`No student with name ${name}...`));
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next(error));
};

//Update stusent's birth by name (date and name on body)
exports.changeStudentBirthByName = async (req, res, next) => {
  const { date } = req.body;
  const { name } = req.body;
  Student.findOneAndUpdate({ name }, { birth: new Date(date) })
    .then((student) => {
      if (student === null) {
        next(new Error(`No student with name ${name}...`));
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next(error));
};

/* ---------- GET - (TEXT SEACH) ---------- */

//Get students that their name contains a letter (letter on params)
exports.getStudentWithLetterOnName = async (req, res, next) => {
  const { letter } = req.params;
  Student.find({ name: { $regex: letter } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        next(new Error(`No student that their name contains ${letter}...`));
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next(error));
};
