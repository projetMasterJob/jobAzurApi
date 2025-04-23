const express = require('express');
const router = express.Router();
const LocationController = require('../controllers/LocationController');

router.get('/', LocationController.getAll);
router.get('/:id', LocationController.getOne);
router.post('/', LocationController.create);
router.put('/:id', LocationController.update);
router.delete('/:id', LocationController.remove);

module.exports = router;
