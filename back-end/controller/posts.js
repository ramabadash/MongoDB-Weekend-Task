const Posts = require('../models/post');

/* ---------- GET ---------- */
//Get all posts
exports.getAllPosts = async (req, res, next) => {
  Posts.find({})
    .then((postsArray) => {
      if (postsArray.length === 0) {
        next(new Error('No posts here...'));
      } else {
        res.status(200).json(postsArray);
      }
    })
    .catch((error) => next(error));
};
