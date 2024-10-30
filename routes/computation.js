var express = require('express'); 
var router = express.Router();

const mathFunctions = {
  acosh: Math.acosh,
  log1p: Math.log1p,
  tan: Math.tan,
  sqrt: Math.sqrt,
};

router.get('/', function(req, res) {

  const x = req.query.x ? parseFloat(req.query.x) : Math.random(); 

  const results = {
    acosh: x >= 1 ? mathFunctions.acosh(x) : 'undefined (value must be greater than 1)',
    log1p: mathFunctions.log1p(x),
    tan: mathFunctions.tan(x),
    sqrt: mathFunctions.sqrt(x),
  };

  const responseString = `
    acosh applied to ${x} is ${results.acosh} <br> <br>
    log1p applied to ${x} is ${results.log1p} <br> <br>
    tan applied to ${x} is ${results.tan}     <br> <br>
    sqrt applied to ${x} is ${results.sqrt}    <br> <br>
  `;

  res.send(responseString.trim());
});

module.exports = router;
