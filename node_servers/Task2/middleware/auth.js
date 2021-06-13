const https = require('https');

const data = JSON.stringify({})

const options = {
	hostname: 'task.namesmt.ga',
	port: 443,
	path: '/api/authcheck',
	method: 'POST',
}

module.exports = async (req, res, next) => {
	try {
		const token = req.cookies['shouldbeasecretphrase']
		options.headers = {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token,
			'Accept': 'application/json'
		}
		console.log(options);
		auth = await doRequest(options, data);
		console.log(auth)
		if (auth !== 1) {
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


/**
 * Do a request with options provided.
 *
 * @param {Object} options
 * @param {Object} data
 * @return {Promise} a promise of request
 */
function doRequest(options, data) {
	return new Promise((resolve, reject) => {
		const req = https.request(options, (res) => {
			res.setEncoding('utf8');
			let responseBody = '';

			res.on('data', (chunk) => {
				responseBody += chunk;
			});

			res.on('end', () => {
				resolve(JSON.parse(responseBody));
			});
		});

		req.on('error', (err) => {
			reject(err);
		});

		req.write(data)
		req.end();
	});
}

//https://stackoverflow.com/a/56122489