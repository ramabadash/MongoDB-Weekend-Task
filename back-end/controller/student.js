const Student = require('../models/student');

/* ---------- GET ---------- */

//Get all studnts object from Students collection
exports.getAllStudents = async (req, res, next) => {
  Student.find({})
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No students
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get student by name (name on params)
exports.getStudentByName = async (req, res, next) => {
  const { name } = req.params;
  Student.find({ name })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No students with name "name"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get student by course (course on params)
exports.getStudentByCourse = async (req, res, next) => {
  const { course } = req.params;
  Student.find({ courses: course })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No students with course "course"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get student by course & gender (course & gender on params)
exports.getStudentByCourseAndGender = async (req, res, next) => {
  const { course } = req.params;
  const { gender } = req.params;
  Student.find({ courses: course, gender })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No students with course "course" and gender "gender"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get student that born after date (date on quary params)
exports.getStudentByDateMinimum = async (req, res, next) => {
  const { date } = req.query;
  Student.find({ birth: { $gt: new Date(date) } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No student that their birth was after "date"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get student that their phone number start with some numbers (numbers on params)
exports.getStudentByPhoneStart = async (req, res, next) => {
  const { startNums } = req.params;
  Student.find({ phone: { $regex: `^${startNums}` } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No student that their phone start with "startNums"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

/* ---------- PUT ---------- */
//Add stusent a course by name (coures and name on body)
exports.addcourseToStudentByName = async (req, res, next) => {
  const { course } = req.body;
  const { name } = req.body;
  Student.findOneAndUpdate({ name }, { $push: { courses: course } })
    .then((student) => {
      if (student === null) {
        res.status(200).json(false); //No student that their name "name"
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Update stusent's birth by name (date and name on body)
exports.changeStudentBirthByName = async (req, res, next) => {
  const { date } = req.body;
  const { name } = req.body;
  Student.findOneAndUpdate({ name }, { birth: new Date(date) })
    .then((student) => {
      if (student === null) {
        res.status(200).json(false); //No student that their name "name"
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

/* ---------- GET - (TEXT SEACH) ---------- */

//Get students that their name contains a letter (letter on params)
exports.getStudentWithLetterOnName = async (req, res, next) => {
  const { letter } = req.params;
  Student.find({ name: { $regex: letter } })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No student that their name contains "letter"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get students that their surName contain one or more of two letters (letters on params)
exports.getStudentWithLettersOnSurName = async (req, res, next) => {
  const { letter1 } = req.params;
  const { letter2 } = req.params;
  Student.find({
    $or: [{ surName: { $regex: letter1 } }, { surName: { $regex: letter2 } }],
  })
    .then((studentsArray) => {
      if (studentsArray.length === 0) {
        res.status(200).json(false); //No student that their surName contains "letter1" / "letter2"
      } else {
        res.status(200).json(studentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

/* ---------- DELETE ---------- */
//DELETE student by name (name on params)
exports.deleteStudentByName = async (req, res, next) => {
  const { name } = req.params;
  Student.findOneAndDelete({ name })
    .then((student) => {
      if (student === null) {
        res.status(200).json(false); //No student with name "name"
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//DELETE student by birth date (date on query params)
exports.deleteStudentByDate = async (req, res, next) => {
  const { date } = req.query;
  Student.findOneAndDelete({ birth: new Date(date) })
    .then((student) => {
      if (student === null) {
        res.status(200).json(false); //No student with date "date"
      } else {
        res.status(200).json(true);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};
