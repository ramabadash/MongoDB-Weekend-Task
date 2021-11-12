const Comments = require('../models/comment');

/* ---------- GET ---------- */
//Get all comment objects
exports.getAllComments = async (req, res, next) => {
  Comments.find({})
    .then((commentsArray) => {
      if (commentsArray.length === 0) {
        next(new Error('No comments here...'));
      } else {
        res.status(200).json(commentsArray);
      }
    })
    .catch((error) => next(error));
};

//Get all comment by user name (username on params)
exports.getCommentsByUserName = async (req, res, next) => {
  const { username } = req.params;
  Comments.find({ username })
    .then((commentsArray) => {
      if (commentsArray.length === 0) {
        next(new Error(`No comments by ${username}...`));
      } else {
        res.status(200).json(commentsArray);
      }
    })
    .catch((error) => next(error));
};
