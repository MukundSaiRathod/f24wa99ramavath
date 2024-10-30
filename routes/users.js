var express = require('express');
var router = express.Router();
var value = 0;
var total = 1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;
  // Add value to total
  total += value;
  // res.send('respond with a resource');
  res.send(`Total is: ${total}`);
});

module.exports = router;
