var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mongo_test';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/customers', function(req, res, next) {
	MongoClient.connect(url, function(err, db){
		if(err) {
			console.log(err);
		} else {
			var collection = db.collection('customers');
			var myData = collection.find().limit(100).toArray(function(err, docs){
				res.render('customers', {title: "Customer List", data: docs});
				console.log(__dirname);
			});
			
		}
	});
});

router.post('/customers', function(req, res, next) {
	MongoClient.connect(url, function(err, db) {
		if(err) {
			console.log(err);
		} else {
			var collection = db.collection('customers');
			collection.insertOne({first_name : req.body.first_name, last_name : req.body.last_name});
			res.redirect('/customers');
			db.close();
		}
	});
});

module.exports = router;
