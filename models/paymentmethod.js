const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createpaymentmethod = (data, callback) => {
	connection.query(
		'INSERT INTO `paymentmethod` (`id`, `number`, `cvv`, `fullname` ,`expire_date`, `type`, `updatedAt`) VALUES (?,?,?,?,?,?,?)',
		[
			uuidv4(),
			data.number,
			data.cvv,
			data.fullname,
			new Date(),
			data.type,
		],
		(err, res) => {
			if (err) {
				callback(err, null);
			} else {
				callback(null, res);
			}
		}
	);
};

const readpaymentmethod = (callback) => {
	connection.query('SELECT * FROM `paymentmethod`', (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

const readpaymentmethodById = (id, callback) => {
	connection.query('SELECT * FROM `paymentmethod` WHERE id = ?', [id], (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

const updatepaymentmethod = (data, callback) => {
	connection.query(
		'UPDATE `paymentmethod` SET  `number` = ?, `cvv` = ?, `fullname` = ?, `expiry_date` = ? , `type` = ? WHERE   id = ? ',
		[
			data.number,
			data.cvv,
			data.fullname,
			new Date(),
			data.type,
			data.id,
		],
		(err, res) => {
			if (err) {
				callback(err, null);
			} else {
				callback(null, res);
			}
		}
	);
};

const deletepaymentmethod = (id, callback) => {
	connection.query('DELETE FROM `paymentmethod` WHERE id = ?', [id], (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

module.exports = {
	createpaymentmethod,
	readpaymentmethod,
	readpaymentmethodById,
	updatepaymentmethod,
	deletepaymentmethod,
};
