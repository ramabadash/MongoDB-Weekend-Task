const Questions = require('../models/question');

/* ---------- GET ---------- */

// Get all questions from DB
exports.getAllQuestions = (req, res, next) => {
  Questions.find({})
    .then((questionsArray) => {
      if (questionsArray.length === 0) {
        next(new Error('No questions here...'));
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
    if (queationsByDifficultyArray.length === 0)
      next(
        new Error(`No questions with difficulty level ${difficulty} or above`)
      );
    else res.status(200).json(queationsByDifficultyArray);
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
