let express = require('express')
let router = express.Router()
const model = require('./model.js')

router.get('/', function(request, response) {
	response.send(model.getDogs)
})

// router.get('/:index', function(request, response) {
// 	response.send(dog[request.params.index])
// })

module.exports = router
