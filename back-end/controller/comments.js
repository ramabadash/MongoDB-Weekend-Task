const Comments = require('../models/comment');
const Posts = require('../models/post');

/* ---------- GET ---------- */
//Get all comment objects
exports.getAllComments = async (req, res, next) => {
  Comments.find({})
    .then((commentsArray) => {
      if (commentsArray.length === 0) {
        res.status(200).json(false); // No comments
      } else {
        res.status(200).json(commentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get all comment by user name (username on params)
exports.getCommentsByUserName = async (req, res, next) => {
  const { username } = req.params;
  Comments.find({ username })
    .then((commentsArray) => {
      if (commentsArray.length === 0) {
        res.status(200).json(false); // No comments by username
      } else {
        res.status(200).json(commentsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get all comment by postTitle (title on params)
exports.getCommentsByPostTitle = async (req, res, next) => {
  try {
    const { title } = req.params;
    const postsArray = await Posts.find({ title });
    if (postsArray.length === 0) res.status(200).json(false); //No posts with this title
    const postId = postsArray[0]._id;
    const commentsArray = await Comments.find({ post: postId });
    if (commentsArray.length === 0) res.status(200).json(false); //No comments from posts with title
    res.status(200).json(commentsArray); // Return relevant comments
  } catch (error) {
    next({ status: 400, message: error.message });
  }
};
