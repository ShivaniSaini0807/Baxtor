const express = require('express');
const app = express();

app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

module.exports = app;