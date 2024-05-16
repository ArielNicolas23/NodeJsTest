var express = require('express');
var mongodb = require('../mongodb2.js')
var router = express.Router();
/* GET home page. */
router.get('/', async function (req, res, next) {
    const cursor = await mongodb.getAll();
    res.render('index', {Pokes: cursor });
});

module.exports = router;

