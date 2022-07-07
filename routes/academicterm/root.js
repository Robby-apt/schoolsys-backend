const express = require('express');
const router = express.Router();
const academictermController = require('../../controller/academicterm/academicterm');


router.route('/getallterms')
    .get(academictermController.getAllTerm)
router.route('/registerterm')
    .post(academictermController.registerterm) 
router.route('/getterm')
    .get(academictermController.getTerm)
router.route('/updateterm')
    .get(academictermController.updateTerm)
router.route('/archive')
    .get(academictermController.archiveterm)
router.route('/deactivate')
    .get(academictermController.deactivateTerm)
module.exports = router;

