var express = require('express');
var router = express.Router();

/* GET users listing. */
//http://localhost:4000/line/callback
router.get('/callback', function(req, res, next) {
  res.send('line callback');
});

module.exports = router;
