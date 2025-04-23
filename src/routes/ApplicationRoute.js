const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/ApplicationController');

router.get('/', ApplicationController.getAll);
router.get('/:id', ApplicationController.getOne);
router.post('/', ApplicationController.create);
router.put('/:id', ApplicationController.update);
router.delete('/:id', ApplicationController.remove);

module.exports = router;
