const ExaminbleSubjects = require("../../../model/exam/examinableSubjects");
const Unit = require("../../../model/units/unit");
const SubjectTeachers = require("../../../model/subjects/subjectTeachersPerClass");
const catchAsync = require("../../../utils/catchAsync");
const units = require("../../../model/units/unit")
const getAllExaminableSubjects = catchAsync(async (req, res, next) => {
  const examinbleSubjects = await ExaminbleSubjects.find().populate({
    path:'unitID'
  }).populate({
    path:'subjectID'
  }).populate({
    path:'subjectTeacherID',
    populate:{
      path:'teacherID',
      model:'Teacher'
    }
  })
  if (!examinbleSubjects) return res.status(204).json({
    status: 'success',
    data: examinbleSubjects
  });
  res.status(200).json({
    status: "success",
    result: examinbleSubjects.length,
    data: examinbleSubjects
  });
});
const addExaminableSubject = catchAsync(async (req, res, next) => {
  let data = req.body

 
  if (!data) {
    res.status(400).json({
      status: 'failed',
      message: 'Error occurred, we could not post examinable subjects'
    })
  }
  // check class and subject match - compare class id in both cases
  let subjectTeacherID = data.subjectTeacherID
  let unitID = data.unitID
  const unitIDCheck = await SubjectTeachers.findOne({
    subjectTeacherID:[subjectTeacherID]
  })
  if(!unitIDCheck){
    return res.status(400).json({
      status:'failed',
      message:'Error,unmet requirement - subject teacher cannot be empty or null'
    })
  }
  
  let examType = data.examType
  if(examType ==="Standard"){
    
  }
  else if(examType ==="Normal"){
    return res.status(200).json({
      message:"insert a norm setup"
     })
  }
  else{
    const result = await ExaminbleSubjects.create(data)

     return res.status(200).json({
      status:"success",
      result:result.length,
      data:result
     })
  }
});
const deleteExaminableSubject = catchAsync(async (req, res, next) => {
  let data = req.body;
  let _id = data._id
  const result = await ExaminbleSubjects.delete({_id:_id})
  res.status(200).json({
    status:'success',
    result:result.length,
    data:result
  })
});
const updateExaminableSubject = catchAsync(async (req, res, next) => {
  const _id = req.body
  if (!_id)
    return res.status(400).json({
      status: 'success',
      message: "we could not verify the examinable subject."
    });
  const examinbleSubjects = await ExaminbleSubjects.findOne({
    _id: _id
  })
  if (!examinbleSubjects) return res.status(400).json({
    status: 'failed',
    message:'We could not find eximanable subject' 
  });
  res.status(200).json({
    status: "success",
    result: examSetup.length,
    data: examinbleSubjects,
  });
  if (!examinbleSubjects) {
    return res
      .status(204)
      .json({
        status: 'success', message: `No exam matches ID .`
      });
  }
  res.json(examinbleSubjects);
});
const getExaminableSubjectById = catchAsync(async (req, res, next) => {
  let _id = req.params.id;
  const result = await ExaminbleSubjects.find({_id:_id})
  res.status(200).json({
    status:'success',
    result:result.length,
    data:result
  })
});
module.exports = {
  getAllExaminableSubjects,
  addExaminableSubject,
  deleteExaminableSubject,
  updateExaminableSubject,
  getExaminableSubjectById

};
