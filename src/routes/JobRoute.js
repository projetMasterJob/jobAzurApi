const express = require('express');
const router = express.Router();
const JobController = require('../controllers/JobController');

router.get('/', JobController.getAll);
router.get('/:id', JobController.getOne);
router.post('/', JobController.create);
router.put('/:id', JobController.update);
router.delete('/:id', JobController.remove);

module.exports = router;
