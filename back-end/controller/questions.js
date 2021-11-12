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
    .catch((error) => next(error));
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
    next(error);
  }
};

/* ---------- POST ---------- */

// Create a question (details on body)
exports.createNewQustion = async (req, res, next) => {
  try {
    const { title, correctAnswer, answers, difficulty } = req.body;
    //Create new question by schema
    const newQuestion = await Questions.create({
      title,
      correctAnswer,
      answers,
      difficulty,
    });
    //save new question
    await newQuestion.save();
    res.status(200).json(true);
  } catch (error) {
    next(error);
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
    next(error);
  }
};

/* ---------- PUT ---------- */

// Update question by id (details on body)
exports.updateQuestionById = async (req, res, next) => {
  try {
    const { id, title, correctAnswer, answers, difficulty } = req.body;
    //Create an object that consists only of keys that the user wanted to update on senf them on body
    const updateObj = {};
    if (title) updateObj.title = title;
    if (correctAnswer) updateObj.correctAnswer = correctAnswer;
    if (answers) updateObj.answers = answers;
    if (difficulty) updateObj.difficulty = difficulty;

    await Questions.findByIdAndUpdate({ _id: id }, updateObj);
    res.status(200).json(true);
  } catch (error) {
    next(error);
  }
};
