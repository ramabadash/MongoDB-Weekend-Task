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

//Get posts by userName (user name on params)
exports.getPostsByUserName = async (req, res, next) => {
  const { username } = req.params;
  Posts.find({ username })
    .then((postsArray) => {
      if (postsArray.length === 0) {
        next(new Error(`No posts by autor ${username}...`));
      } else {
        res.status(200).json(postsArray);
      }
    })
    .catch((error) => next(error));
};
