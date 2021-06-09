var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  throw new Error();
})

// Link other routes here.
router.get('/route1', function (req, res, next) {
  res.send("Hello Route1");
});

module.exports = router;
