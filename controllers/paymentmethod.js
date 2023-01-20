const {
	createpaymentmethod,
	deletepaymentmethod,
	readpaymentmethod,
	readpaymentmethodById,
	updatepaymentmethod,
} = require('../models/paymentmethod');

const getpaymentmethodController = (_req, res) => {
	readpaymentmethod((err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1, paymentmethods: result });
		}
	});
};

const getpaymentmethodByIdController = (req, res) => {
	const id = req.params.id;
	readpaymentmethodById(id, (err, result) => {
		if (err) {
		  console.log(err);
		} else {
		  res.json({ success: 1, paymentmethod: result });
		}
	  });
};

const postpaymentmethodController = (req, res) => {
	const data = req.body;
	createpaymentmethod(data, (err, result) => {
		if (err) {
			console.log(err);
		} else if (result.affectedRows) {
			res.json({ success: 1, message: 'paymentmethod created !' });
		}
	});
};

const patchpaymentmethodController = (req, res) => {
	const data = req.body;
	updatepaymentmethod(data, (err, result) => {
		if (err) {
		  console.log(err);
		} else if (result.affectedRows) {
		  res.json({ success: 1, message: 'paymentmethod updated !' });
		}
	  });
};

const deletepaymentmethodController = (req, res) => {
	const id = req.params.id;
	deletepaymentmethod(id, (err, result) => {
	  if (err) {
		console.log(err);
	  }
	  if (result.affectedRows) {
		res.json({ success: 1, message: 'paymentmethod deleted !' });
	  }
	});
};

module.exports = {
	getpaymentmethodController,
	getpaymentmethodByIdController,
	postpaymentmethodController,
	patchpaymentmethodController,
	deletepaymentmethodController,
};
