//	Importing requirements
const
	// Files
	{ readFileSync } = require('fs'),
	privateKey = readFileSync('/cert/private.key'),
	certificate = readFileSync('/cert/cert.crt'),

	// Databases
	db = require("./models"),

	// Web services
	cookieParser = require('cookie-parser'),
	cors = require('cors'),
	helmet = require('helmet'),
	express = require('express'),
	app = express(),
	https = require('https'),

	// Routes
	route_api = require('./routes/api'),
	route_auth = require('./routes/auth');


//	Setup (Object used to allow code folding)
const { server } = {
	server: https.createServer({
		key: privateKey,
		cert: certificate
	}, app)
}

db.sequelize.sync().then((req) => {
	server.listen(4263, () => {
		console.log('listening on *:4263(GAME)');
	})
})
app.use(cors({
	credentials: true,
	origin: ['localhost:8080'], //Vue devServer proxy changeOrigin:true
}))
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', route_api)

app.use('/auth', route_auth)


// Wildcard route
// app.get('*', (req, res) => {
// 	res.send("You shouldn't be here...")
// });

// Static serving
const static_folder = __dirname + '/frontend/dist'
app.use(express.static(static_folder))

// Additional route for our Vue app
app.get('/login', (req, res) => res.sendFile(static_folder + '/index.html'))
