const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    username: {
        type: String,
        unique: true,
        required: 'Username is Required',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is Required',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    friendCount: {
        type: Number,
        default: 0
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;