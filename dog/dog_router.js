let express = require('express');
let router = express.Router();

let dog = ["bad", "good"];

router.get("/", function (request, response) {
	response.send(dog.join(", "));

})

router.get("/:index", function (request, response) {
	response.send(dog[request.params.index]);
})

module.exports = router;
