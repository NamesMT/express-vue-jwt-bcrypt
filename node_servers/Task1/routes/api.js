const
	router = require('express').Router(),
	auth = require('../middleware/auth'),
	{ User } = require('../models/'),
	{ getErr, isEmptyArray, pick } = require('../custom.js'), // Custom functions
	{ Op } = require('sequelize'), // Sequelize operators

	// ETCs
	attributes = { exclude: ['password'] }; // Const for sequelize

router.use(auth)
// Routes
router.get('/', async (req, res) => {
	if (!req.query.q) return res.json(await User.findAll({ attributes }))

	User.findAll({
		attributes,
		where: {
			[Op.or]: [{
				username: { [Op.like]: '%' + req.query.q + '%' }
			}, {
				email: { [Op.like]: '%' + req.query.q + '%' }
			}]
		}
	}).then((users) => {
		res.json(users)
	}).catch((err) => {
		console.error(err)
		res.status(400).json(pick(getErr(err), ['message']))
	})
})

// Register post, was created to post dummy values :shrug:
/* router.post('/register', (req, res) => {
		User.create(req.body.user ?? req.body)
			.then((user) => res.json(user))
			.catch((err) => {
				console.error(err)
				res.status(400).json(pick(getErr(err), ['message']))
			})
}); */


patchHandler = (req, res) => {
	// For a good pratice I would post the data into user object (req.body.user), but I also included a fallback to req.body
	const { id, username, email, birthdate } = req.body.user ?? req.body;
	if (!id || id < 1) return res.status(400).json({ message: 'Bad Request' })

	User.update({ username, email, birthdate }, { where: { id } })
		.then((user) => res.json(user))
		.catch((err) => {
			console.error(err)
			res.status(400).json(pick(getErr(err), ['message']))
		})
} // It should be patch, but the task required post so ima just gonna include both
router.route('/').post(patchHandler).patch(patchHandler);

big_patchHandler = async (req, res) => {
	const users = req.body.users ?? req.body;
	var gud_tracker = new Set(),
		gud_tracker_uid = new Set(),
		bad_tracker = new Set(),
		bad_tracker_errs = new Set();
	if (isEmptyArray([users])) return res.status(400).json({ message: 'Bad Request' })

	for (uid in users) { // for in have better performance than other readable ES8 formats
		const { id, username, email, birthdate } = users[uid]
		await User.update({ username, email, birthdate }, { where: { id } })
			// could remove the id define and convert uid to int to use, I prefer this though, could scale up how changed user is stored on front-end
			.then((user) => {
				gud_tracker.add(id);
				gud_tracker_uid.add(uid)
			})
			.catch((err) => {
				console.error(err)
				bad_tracker.add(id)
				bad_tracker_errs.add(getErr(err, true), ['message'])
			})
	}

	if (bad_tracker.size) res.status(400).json({
		message: `Failed to update user(s) with id: ${[...bad_tracker]}`,
		errors: [...bad_tracker_errs],
		updated: [...gud_tracker],
		updated_uid: [...gud_tracker_uid]
	})
	else res.send('1')
} // It should be patch, but the task required post so ima just gonna include both
router.route('/big').post(big_patchHandler).patch(big_patchHandler);


module.exports = router;