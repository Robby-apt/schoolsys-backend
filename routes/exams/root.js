const express = require('express');
const router = express.Router();
const setupController = require('../../controller/exam/setup/examController');
// const marksController = require('../../controller/exam/')
// const resultsController = require('../../controller/exam/')

router.route('/setup/getallexams')
    .get(setupController.getAllExams)
router.route('/setup/registerexam')
    .post(setupController.registerExam) 
router.route('/setup/getexambyid/:id')
    .get(setupController.getExamByid)
// // router.route('setup/deactivate')
// //     .patch(setupController.deactivate)
// // router.route('setup/archive')
// //     .patch(setupController.archive)
// router.route('setup/updateExam')
//     .patch(setupController.updateExam)
// //mark
// router.route('marks/getallexams')
//     .get(teacherController.getAllExams)
// router.route('marks/registerexam')
//     .post(teacherController.registerExam) 
// router.route('marks/getexambyid')
//     .get(teacherController.getExamById)
// router.route('marks/deactivate')
//     .patch(teacherController.deactivate)
// router.route('marks/archive')
//     .patch(teacherController.archive)
// router.route('marks/updateExam')
//     .patch(teacherController.updateExam)
// //results
// router.route('results/getallexams')
// .get(teacherController.getAllExams)
// router.route('results/registerexam')
// .post(teacherController.registerExam) 
// router.route('results/getexambyid')
// .get(teacherController.getExamById)
// router.route('results/deactivate')
// .patch(teacherController.deactivate)
// router.route('results/archive')
// .patch(teacherController.archive)
// router.route('results/updateExam')
// .patch(teacherController.updateExam)


module.exports = router;





