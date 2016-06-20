var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/adminlogin', function (req, res, next) {
  res.render('adminlogin');
});

// router.get('admin/home', function (req, res, next) {
//   res.render('admin/home');
// });

router.post('/login', function (req, res, next) {
  var params = req.body;
  var name = params.name;
  var password = params.password;
  if (name == '123' && password == '123') {
    res.write('success');
  } else {
    res.write('failure');
  }
  res.status(200).end();
});

module.exports = router;
