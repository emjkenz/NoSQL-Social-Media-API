const express = require('express');
const app = express();
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');
const reactionRoutes = require('./reactions');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

module.exports = app;