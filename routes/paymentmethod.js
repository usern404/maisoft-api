const { Router } = require('express');
const {
	getpaymentmethodController,
	deletepaymentmethodController,
	getpaymentmethodByIdController,
	patchpaymentmethodController,
	postpaymentmethodController,
} = require('../controllers/paymentmethod');

const router = Router();

router.get('/', getpaymentmethodController);
router.get('/:id', getpaymentmethodByIdController);
router.post('/', postpaymentmethodController);
router.patch('/', patchpaymentmethodController);
router.delete('/:id', deletepaymentmethodController);

module.exports = router;
