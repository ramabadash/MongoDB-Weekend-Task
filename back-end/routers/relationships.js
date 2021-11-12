const express = require('express');

const router = express.Router();
const { getAllUsers } = require('../controller/users');

/* ---------- GET ---------- */
router.get('/user', getAllUsers); //Get all users objects

module.exports = router;
