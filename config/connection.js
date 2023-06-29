const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
const db = process.env.MONGO_DB_NAME;

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(url+db);

// Export connection 
module.exports = mongoose.connection;
