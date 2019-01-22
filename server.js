const express = require('express');
const app = express();

const dog_router = require('./dog/dog_router.js')
const cat_router = require('./cat/cat_router.js')


let router = express.Router();

app.use("/dogs",dog_router);

app.listen(3000);