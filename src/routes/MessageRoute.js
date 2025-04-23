const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');

router.get('/', MessageController.getAll);
router.get('/:id', MessageController.getOne);
router.post('/', MessageController.create);
router.put('/:id', MessageController.update);
router.delete('/:id', MessageController.remove);

module.exports = router;
