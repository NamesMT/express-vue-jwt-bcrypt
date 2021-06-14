const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
	try {
		const token = req.cookies['shouldbeasecretphrase']
		const token_data = jwt.verify(token, 'secret')

		if (!token_data) {
			return res.status(401).send({
				message: 'unauthenticated'
			})
		}
	} catch (e) {
		return res.status(401).send({
			message: 'unauthenticated'
		})
	}
	next()
}