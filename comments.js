// Create web server with express
// Use the comment router to handle the /comments path
const express = require('express');
const commentsRouter = require('./comments');

const app = express();

// Use the comments router for any path that starts with /comments
app.use('/comments', commentsRouter);

app.listen(3000);