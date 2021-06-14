const
	router = require('express').Router(),
	hasher = require('../hasher.js'),
	jwt = require('jsonwebtoken'),
	{ User } = require('../models/'),
	{ getErr, isEmptyArray, pick } = require('../custom.js'),
	{ parse } = require('tldts'),

	// ETCs
	attributes = { exclude: ['password'] }; // Const for sequelize

router.get('/', async (req, res) => {	// Get current token's user info
	try {
		const token = req.cookies['shouldbeasecretphrase']
		const token_data = jwt.verify(token, 'secret')

		if (!token_data) {
			return res.status(401).send({
				message: 'unauthenticated'
			})
		}

		const user = await User.findOne({ where: { id: 1 }, attributes })

		res.json(user)
	} catch (e) {
		return res.status(401).send({
			message: 'unauthenticated'
		})
	}
})

router.post('/', async (req, res) => {	// Login post, server will set a HTTPOnly token on success
	const { email, password } = req.body.user ?? req.body
	if (isEmptyArray([email, password])) return res.status(400).json({ message: 'Bad Request' })

	User.findOne({ where: { email } })
		.then((user) => {
			if (!user) {
				return res.status(404).send({
					message: 'user not found'
				})
			}

			if (!hasher.compare(password, user.password)) {
				return res.status(400).send({
					message: 'invalid credentials'
				})
			}

			const token = jwt.sign({ _id: user._id }, "secret")

			res.cookie('shouldbeasecretphrase', token, {
				httpOnly: true,
				maxAge: 1000 * 60 * 60 * 24,
				domain: parse(req.headers.origin).domain ? '.' + parse(req.headers.origin).domain : 'localhost'
				//Set a wildcard domain cookie, which would provides SSO across our server :>,
				//ternary is used to fix localhost bug, took me a dang hour: facepalm:
				//and headers.origin is used if the auth server domain is different than the services server
				//idk why I overcomplicated all this, costed a day..., should've just stick with the task and do a simple cookie back...
			})

			res.send('1')
		})
		.catch((err) => {
			console.error(err)
			res.status(400).json(pick(getErr(err), ['message']))
		})
})

router.post('/make', async (req, res) => { //Dummy route to create users, would need more work ie have token in permisson to create user
	const { username, email, birthdate, password } = req.body.user ?? req.body
	if (isEmptyArray([username, email, password])) return res.status(400).json({ message: 'Bad Request' })

	const hashedPassword = hasher.make(password)

	User.create({
		username, email, birthdate,
		password: hashedPassword
	})
		.then((user) => res.json(user))
		.catch((err) => {
			console.error(err)
			res.status(400).json(pick(getErr(err), ['message']))
		})
})

router.post('/logout', (req, res) => {
	res.cookie('shouldbeasecretphrase', '', { maxAge: 0 })

	res.send('1')
})

module.exports = router;