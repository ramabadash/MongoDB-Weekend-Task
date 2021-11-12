const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: Date,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
