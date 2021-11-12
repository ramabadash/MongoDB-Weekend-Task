const Posts = require('../models/post');

/* ---------- GET ---------- */
//Get all posts
exports.getAllPosts = async (req, res, next) => {
  Posts.find({})
    .then((postsArray) => {
      if (postsArray.length === 0) {
        res.status(200).json(false); // No posts
      } else {
        res.status(200).json(postsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};

//Get posts by userName (user name on params)
exports.getPostsByUserName = async (req, res, next) => {
  const { username } = req.params;
  Posts.find({ username })
    .then((postsArray) => {
      if (postsArray.length === 0) {
        res.status(200).json(false); // No posts by autor username
      } else {
        res.status(200).json(postsArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};
