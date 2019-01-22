const express = require('express')
const app = express()

const dog_router = require('./dog/dog_router.js')
const cat_router = require('./cat/cat_router.js')

let router = express.Router()
app.get('/', (req, res, next) => {
	console.log('hellop')
	res.send('<h1 class="hello">Hello</h1>')
	next()
})

app.use('/dogs', dog_router)
app.use('/cats', cat_router)

app.listen(3000, () => {
	console.log('hellop')
})
