const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: 'Reaction is Required',
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
},{
    toJSON: {
        getters: true
    }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = {Reaction, reactionSchema};