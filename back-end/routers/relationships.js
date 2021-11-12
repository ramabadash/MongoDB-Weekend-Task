const express = require('express');

const router = express.Router();
const { getAllUsers } = require('../controller/users');
const { getAllPosts, getPostsByUserName } = require('../controller/posts');
const {
  getAllComments,
  getCommentsByUserName,
  getCommentsByPostTitle,
} = require('../controller/comments');

/* ---------- GET ---------- */
router.get('/user', getAllUsers); //Get all users objects
router.get('/post', getAllPosts); //Get all posts
router.get('/post/:username', getPostsByUserName); //Get posts by userName
router.get('/comment', getAllComments); //Get all comment objects
router.get('/comment/:username', getCommentsByUserName); //Get all comment by user name
router.get('/comment/post/:title', getCommentsByPostTitle); //Get all comment by post title

module.exports = router;
