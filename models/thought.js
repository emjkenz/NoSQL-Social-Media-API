const mongoose = require('mongoose');

const { reactionSchema } = require('./reaction');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: 'Thought is Required',
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username is Required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Use a getter method to format the timestamp on query
        get: createdAtVal => dateFormat(createdAtVal)
    },
    reactions: [reactionSchema],
    reactionCount: {
        type: Number,
        default: 0
    },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;