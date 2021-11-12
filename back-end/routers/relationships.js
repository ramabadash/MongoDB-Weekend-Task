const express = require('express');

const router = express.Router();
const { getAllUsers } = require('../controller/users');
const { getAllPosts, getPostsByUserName } = require('../controller/posts');

/* ---------- GET ---------- */
router.get('/user', getAllUsers); //Get all users objects
router.get('/post', getAllPosts); //Get all posts
router.get('/post/:username', getPostsByUserName); //Get posts by userName

module.exports = router;
