var express = require('express'); 
var router = express.Router();


const selectedFunction = Math.sqrt; 

router.get('/', function(req, res, next) {
  
  const x = req.query.x ? parseFloat(req.query.x) : Math.random(); 
  const result = selectedFunction(x);

  res.send(`${selectedFunction.name} applied to ${x} is ${result}`);
});

module.exports = router;
