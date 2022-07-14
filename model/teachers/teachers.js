const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacherTitile:{
        type:String,
        required:true
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherAbbr:{type:String},
    teacherNumber: {
        type: String
    },
    teacherRole: {type:String},
    teacherContact:{type:String},
    teacherEmail:{type:String, required:[true, 'Email is required']},
    classTeacher:String,
    createAt:{type:Date, Default:Date.now()},
    lateUpdated:{type:Date, Default:Date.now()},
    isArchived:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true}
});
module.exports = mongoose.model('Teacher', teacherSchema);