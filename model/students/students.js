const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: {
        type: String,
        required: [true, 'Student Full Name is reuired']
    },
    admissionNumber:{type:Number},
    kcpeMarks:{
        type:Number,
        required:[true, 'KCPE Marks is required']
    },
    kcpeRank:{
        type:Number,
        required:[true , 'KCPE rank must be provided']
    },
    pidNumber:{
        type:Number,
        required:[true, 'Pid number is required']
    },
    unitAdmission:{
        type:Number,
        required:[true, 'Unit at admission is reuired']
      },
    unitCurrent:{
      type:Number,
      required: [true, 'Current unit is reuired']
    },
    yearOfAdmission:{
        type:Date,
        required:[true, 'Year of admission is required']  
    },
    currentYear:{
        type:Date,
        required:[true, 'Current year is required']
    },
    gender:{
        type:String,
        enum:"Male" || "Female" || "Others"
    },
    image:[String],
    parentID:[
        {type:mongoose.Schema.Types.ObjectId,
        ref: 'Parent'}
    ],
    stream:{type:String},
    createdAt:{type:Date, Default:Date.now()},
    lastUpdated:{type:Date, Default:Date.now}
});


module.exports = mongoose.model('Student', studentSchema);