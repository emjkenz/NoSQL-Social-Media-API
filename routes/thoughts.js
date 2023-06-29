const express = require('express');
const { User, Thought } = require('../models');

const router = express.Router();

// Routes
// Create a new thought
router.post('/', (req, res) => {
    Thought.create(req.body)
        .then(data => res.json({ message: 'Thought created.'}))
        .catch(err => res.json(err));
});

// Get all thoughts
router.get('/', (req, res) => {
    Thought.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

module.exports = router;