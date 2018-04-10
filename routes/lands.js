var express = require('express');
var router = express.Router();
var landController = require('../api/controllers/landController');

/* GET lands listing. */
router.get('/', function(req, res, next) {
  //res.send('get all lands');
  landController.getAll(req, res);
});

router.get('/:id', function(req, res, next) {
  //res.send('get land by id');
  landController.getLand(req, res);
});

router.post('/land', function(req, res, next) {
  //res.send('add land');
  landController.addLand(req, res);
});

router.put('/land', function(req, res, next) {
  //res.send('edit land');
  landController.editLand(req, res);
});

router.delete('/land/:id', function(req, res, next) {
  //res.send('delete land');
  landController.deleteLand(req, res);
});

module.exports = router;
