var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
	res.render('blog', {title: 'Blog Page', main_element: "Test Item 1"});
});

module.exports = router;
