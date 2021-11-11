const Students = require('../models/student');
const mongoose = require('mongoose');

const username = '';
const password = '';

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.vfocj.mongodb.net/mongo_practice?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log('connected to MongoDB job');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });
// Student data from task instruction
const studentsCollection = [
  {
    name: 'Ido',
    surName: 'Arbel',
    birth: new Date('1998-01-26'),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surName: 'Halevi',
    birth: new Date('1997-03-11'),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surName: 'Gan-or',
    birth: new Date('1997-01-19'),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surName: 'Levy',
    birth: new Date('1998-04-02'),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surName: 'Cohen',
    birth: new Date('1993-11-03'),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
];

Students.insertMany(studentsCollection)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
