exports.validateNewQuestion = (req, res, next) => {
  const { title, correctAnswer, answers, difficulty } = req.body;
  const questionObj = {};
  try {
    //No details or some of them were entered
    if (!title || !correctAnswer || !answers || !difficulty)
      throw { status: 400, message: 'One of the sections is missing' };
    //No title
    if (!title.trim()) throw { status: 400, message: 'Must provide a title' };
    questionObj.title = title.trim();
    //No correctAnswer
    if (!correctAnswer.trim())
      throw { status: 400, message: 'Must provide a correct answer' };
    questionObj.correctAnswer = correctAnswer.trim();
    //No difficulty
    if (!difficulty || isNaN(difficulty))
      throw { status: 400, message: 'Difficulty must be a number' };
    questionObj.difficulty = Number(difficulty);
    //No Answers or not in array
    if (!Array.isArray(answers))
      throw { status: 400, message: 'Answers must be an array' };
    questionObj.answers = [];
    for (const answer of answers) {
      if (!answer.trim())
        throw { status: 400, message: 'One of the answers is not valid' };
      questionObj.answers.push(answer.trim());
    }
    req.validatedQuestion = questionObj;
    next();
  } catch (error) {
    next({ status: error.status, message: error.message });
  }
};
