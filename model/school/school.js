const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema({
    schoolName: {
        type: String,
        required: true
    },
    schoolCode: {
        type: Number,
        required: true
    },
    schoolID: {
        type: Number,
        required: true
    },
    schoolCounty: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('School', schoolSchema);