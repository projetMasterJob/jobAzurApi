const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/', auth, UserController.getAll);
router.get('/:id', auth, UserController.getOne);
router.post('/', UserController.create);
router.put('/:id', auth, UserController.update);
router.delete('/:id', auth, UserController.remove);

module.exports = router;
