var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.json([{"test": "ok"}]);
});

module.exports = router;
