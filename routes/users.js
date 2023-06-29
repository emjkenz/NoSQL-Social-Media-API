const express = require('express');
const { User, Thought } = require('../models');

const router = express.Router();

// Routes
// Create a new user
router.post('/', (req, res) => {
    User.create(req.body)
        .then(data => res.json({ message: 'User created.'}))
        .catch(err => res.json(err));
});

// Get all users
router.get('/', (req, res) => {
    User.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

// Get user by id
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
});

// Delete user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'User deleted.'}))
        .catch(err => res.json(err));
});

// Update user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.json(` User ${data.username} updated.`))
        .catch(err => res.json(err));
});

// Add friend
router.post('/:userId/friends/:friendId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $push: { 
            friends: req.params.friendId 
        }
    }, { new: true })
        .then(data => res.json(`User ${data.username}'s friends updated.`))
        .catch(err => res.json(err));
});

router.delete('/:userId/friends/:friendId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $pull: {
            friends: req.params.friendId
        }
    }, { new: true })
        .then(data => res.json(`Removed ${data.username}'s friend.`))
        .catch(err => res.json(err));
});


module.exports = router;