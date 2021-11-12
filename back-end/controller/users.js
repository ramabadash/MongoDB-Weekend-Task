const Users = require('../models/user');

/* ---------- GET ---------- */
//Get all users objects
exports.getAllUsers = async (req, res, next) => {
  Users.find({})
    .then((usersArray) => {
      if (usersArray.length === 0) {
        next(new Error('No users here...'));
      } else {
        res.status(200).json(usersArray);
      }
    })
    .catch((error) => next(error));
};
