require('express-async-errors');
const express = require('express');
const app=express()

const error = require('./middlewares/error');
const authGoogleRouter = require('./routers/authGoogleRouter');

app.use('/auth/google', authGoogleRouter);
app.use(error);

module.exports = app;