const express = require('express')
const router = express.Router()
const model = require('./model')

router.get('/', (request, response) => {
	console.log(request)
	let cats = model.getCats()
	response.send(cats)
})

router.post('/catPost', (req, res) => {
	console.log(req)
	res.status(200, { message: 'hello there you lazy person' })
	res.send()
})

router.get('/:index', (request, response) => {
	let cat = model.getCat(request.params.index)
	response.send(cat)
})

router.delete('/:index', (req, res) => {
	model.deleteCat(req.params.index)
	res.status(500, {
		message: 'this is the message that will go along with the status'
	})
	res.send('whatever')
})

module.exports = router
