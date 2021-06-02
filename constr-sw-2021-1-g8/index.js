const express = require('express');
const mongoose = require('mongoose');
const testController = require('./controller/testController');
const questionController = require('./controller/questionController');


const app = express();
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/tests', testController);
app.use('/questions', questionController)

app.listen(3000, () => console.log('Server running...'));