const express = require('express');
const { Thought, Reaction } = require('../models');

const router = express.Router();

// Routes
// Create a new reaction
router.post('/:id', (req, res) => {
    Reaction.create(req.body)
        .then(({ _id }) => {
            return Thought.findByIdAndUpdate(
                req.params.id,
                { $push: { reactions: _id } },
                { new: true }
            );
        })
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

// Get all reactions
router.get('/', (req, res) => {
    Reaction.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

// Remove reaction
router.delete('/:id', (req, res) => {
    Reaction.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Reaction deleted.'}))
        .catch(err => res.json(err));
});

module.exports = router;