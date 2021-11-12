const Questions = require('../models/question');

/* ---------- GET ---------- */

// Get all questions from DB
exports.getAllQuestions = (req, res, next) => {
  Questions.find({})
    .then((questionsArray) => {
      if (questionsArray.length === 0) {
        res.status(200).json(false); // No questions
      } else {
        res.status(200).json(questionsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

// Get questions by difficulty equal to or above (difficulty on params)
exports.getQuestionsByDifficulty = async (req, res, next) => {
  try {
    const { difficulty } = req.params;
    const queationsByDifficultyArray = await Questions.find({
      difficulty: { $gte: difficulty },
    });
    if (queationsByDifficultyArray.length === 0) {
      // No questions with difficulty level "difficulty" or above
      res.status(200).json(false);
    } else res.status(200).json(queationsByDifficultyArray);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};

/* ---------- POST ---------- */

// Create a question (details on body)
exports.createNewQustion = async (req, res, next) => {
  try {
    const questionObj = req.validatedQuestion;
    //Create new question by schema
    const newQuestion = await Questions.create(questionObj);
    //save new question
    await newQuestion.save();
    res.status(200).json(true);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};

/* ---------- DELETE ---------- */

// Delete question by id (id on params)
exports.deleteQuestionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Questions.findByIdAndDelete({ _id: id });
    res.status(200).json(true);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};

/* ---------- PUT ---------- */

// Update question by id (details on body)
exports.updateQuestionById = async (req, res, next) => {
  try {
    const { id } = req.body;
    const questionObj = req.validatedQuestion;
    await Questions.findByIdAndUpdate({ _id: id }, questionObj);
    res.status(200).json(true);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};
