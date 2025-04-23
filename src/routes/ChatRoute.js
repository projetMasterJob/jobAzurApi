const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/ChatController');

router.get('/', ChatController.getAll);
router.get('/:id', ChatController.getOne);
router.post('/', ChatController.create);
router.put('/:id', ChatController.update);
router.delete('/:id', ChatController.remove);

module.exports = router;
