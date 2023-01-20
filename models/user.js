const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const createUser = (data, callback) => {
	connection.query(
		'INSERT INTO `User` (`id`, `firstname`, `lastname`, `email` ,`phone`, `createdAt`, `updatedAt`) VALUES (?,?,?,?,?,?,?)',
		[
			uuidv4(),
			data.firstname,
			data.lastname,
			data.email,
			data.phone,
			new Date(),
			new Date(),
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

const readUser = (callback) => {
	connection.query('SELECT * FROM `User`', (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

const readUserById = (id, callback) => {
	connection.query('SELECT * FROM `User` WHERE id = ?', [id], (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

const updateUser = (data, callback) => {
	connection.query(
		'UPDATE `User` SET  `firstname` = ?, `lastname` = ?, `email` = ?, `phone` = ? , `updatedAt` = ? WHERE   id = ? ',
		[
			data.firstname,
			data.lastname,
			data.email,
			data.phone,
			new Date(),
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

const deleteUser = (id, callback) => {
	connection.query('DELETE FROM `User` WHERE id = ?', [id], (err, res) => {
		if (err) {
			callback(err, null);
		} else {
			callback(null, res);
		}
	});
};

module.exports = {
	createUser,
	readUser,
	readUserById,
	updateUser,
	deleteUser,
};
