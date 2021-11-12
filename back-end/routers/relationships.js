const express = require('express');

const router = express.Router();
const { getAllUsers } = require('../controller/users');
const { getAllPosts } = require('../controller/posts');

/* ---------- GET ---------- */
router.get('/user', getAllUsers); //Get all users objects
router.get('/post', getAllPosts); //Get all posts

module.exports = router;
