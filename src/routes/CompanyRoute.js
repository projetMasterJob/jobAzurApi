const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/CompanyController');

router.get('/', CompanyController.getAll);
router.get('/:id', CompanyController.getOne);
router.post('/', CompanyController.create);
router.put('/:id', CompanyController.update);
router.delete('/:id', CompanyController.remove);

module.exports = router;
