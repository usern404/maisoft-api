const { Router } = require('express');
const {
	getSupplierController,
	deleteSupplierController,
	getSupplierByIdController,
	patchSupplierController,
	postSupplierController,
} = require('../controllers/Supplier');

const router = Router();

router.get('/', getSupplierController);
router.get('/:id', getSupplierByIdController);
router.post('/', postSupplierController);
router.patch('/', patchSupplierController);
router.delete('/:id', deleteSupplierController);

module.exports = router;
