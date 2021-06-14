const bcrypt = require("bcrypt");

module.exports = {
	make: (input) => {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(input, salt);
	},
	compare: bcrypt.compareSync
}