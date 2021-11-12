const Users = require('../models/user');

/* ---------- GET ---------- */
//Get all users objects
exports.getAllUsers = async (req, res, next) => {
  Users.find({})
    .then((usersArray) => {
      if (usersArray.length === 0) {
        res.status(200).json(false); //No users
      } else {
        res.status(200).json(usersArray);
      }
    })
    .catch((error) => next({ status: 400, message: error.message }));
};
